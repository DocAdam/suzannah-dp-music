import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const scriptSource = await readFile('apps-script/Code.gs', 'utf8');

function loadScript() {
  const calls = [];
  const appendedRows = [];
  const sentEmails = [];
  const lock = {
    tryLock: () => true,
    hasLock: () => true,
    releaseLock: () => calls.push('releaseLock'),
  };
  const sandbox = {
    console,
    Date,
    LockService: { getScriptLock: () => lock },
    SpreadsheetApp: {
      openById: (id) => {
        calls.push(['openById', id]);
        return {
          getSheetByName: (name) => ({
            appendRow: (row) => {
              calls.push('appendRow');
              appendedRows.push(row);
            },
          }),
        };
      },
    },
    MailApp: {
      sendEmail: (message) => {
        calls.push('sendEmail');
        sentEmails.push(message);
      },
    },
    ContentService: {
      MimeType: { JSON: 'application/json' },
      createTextOutput: (content) => ({
        content,
        setMimeType() { return this; },
      }),
    },
  };

  return { doPost: vm.runInNewContext(`${scriptSource}\ndoPost`, sandbox), calls, appendedRows, sentEmails };
}

test('inquiry is saved and Suzannah is notified immediately with the sheet link', () => {
  const { doPost, calls, appendedRows, sentEmails } = loadScript();
  const response = doPost({
    parameter: {
      parent_name: 'Test Parent',
      email: 'parent@example.com',
      phone: '417-555-0100',
      student_name: 'Test Student',
      student_grade: 'Grade 4',
      instrument: 'Piano',
      experience_level: 'Complete beginner',
      goals_notes: 'A local test only.',
    },
    parameters: { preferred_times: ['Tuesday 9:00 AM', 'Thursday 12:30 PM'] },
  });

  assert.deepEqual(JSON.parse(response.content), { ok: true });
  assert.equal(appendedRows.length, 1);
  assert.equal(appendedRows[0][1], 'New');
  assert.deepEqual(calls.filter((call) => typeof call === 'string'), ['appendRow', 'sendEmail', 'releaseLock']);
  assert.equal(sentEmails.length, 1);
  assert.equal(sentEmails[0].to, 'suzulose@gmail.com');
  assert.equal(sentEmails[0].subject, 'New lesson inquiry: Test Student');
  assert.match(sentEmails[0].body, /Test Parent/);
  assert.match(sentEmails[0].body, /https:\/\/docs\.google\.com\/spreadsheets\/d\/1hWr03ZRdZfYdIlNGt1EjZze3QWNIeH_Nz4h-D9paVbw\/edit/);
});
