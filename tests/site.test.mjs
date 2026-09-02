import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const readBuiltPage = (file) => readFile(`dist/${file}`, 'utf8');

test('home keeps the lesson decision and address privacy visible', async () => {
  const html = await readBuiltPage('index.html');

  assert.match(html, /Piano &amp; Violin Lessons/);
  assert.match(html, /Ask about an opening/);
  assert.match(html, /Choose a time that works for your family/);
  assert.match(html, /\$25 or \$50/);
  assert.match(html, /auditions or festivals/);
  assert.doesNotMatch(html, /Do you teach adults|Adults who may be a good fit/);
  assert.doesNotMatch(html, /\b\d{1,5}\s+\w+\s+(Street|St|Avenue|Ave|Road|Rd)\b/i);
});

test('both public pages include accessible structure and correct canonicals', async () => {
  const home = await readBuiltPage('index.html');
  const privacy = await readBuiltPage('privacy/index.html');

  for (const html of [home, privacy]) {
    assert.match(html, /<main id="main"(?:\s|>)/);
    assert.match(html, /Skip to content/);
  }
  assert.match(home, /<link rel="canonical" href="https:\/\/docadam\.github\.io\/suzannah-dp-music\/">/);
  assert.match(privacy, /<link rel="canonical" href="https:\/\/docadam\.github\.io\/suzannah-dp-music\/privacy\/">/);
});

test('inquiry collects only intended details and offers a usable fallback', async () => {
  const html = await readBuiltPage('index.html');

  for (const value of [
    'Tuesday 9:00 AM',
    'Thursday 12:30 PM',
    'Parent / guardian name',
    'Student name',
    'name="preferred_times"',
    'name="instrument"',
    'maxlength="2000"',
    'mailto:suzulose@gmail.com',
    'Please do not include medical, school, or other sensitive student information.',
  ]) assert.match(html, new RegExp(value));
});

test('time options announce a non-color selected state', async () => {
  const css = await readFile('src/styles/inquiry-form.css', 'utf8');

  assert.match(css, /content:\s*"Selected"/);
  assert.match(css, /:has\(input:checked\)/);
});

test('Apps Script validates submissions before writing to the Sheet', async () => {
  const script = await readFile('apps-script/Code.gs', 'utf8');

  assert.match(script, /LockService\.getScriptLock\(\)/);
  assert.match(script, /validationError_\(inquiry\)/);
  assert.match(script, /slice\(0, 3\)/);
  assert.match(script, /Invalid email address/);
  assert.match(script, /Unable to save inquiry/);
});
