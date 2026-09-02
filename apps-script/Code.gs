const INQUIRY_SPREADSHEET_ID = '1hWr03ZRdZfYdIlNGt1EjZze3QWNIeH_Nz4h-D9paVbw';
const INQUIRIES_SHEET_NAME = 'Inquiries';

const FIELD_LIMITS = {
  parent_name: 120,
  email: 254,
  phone: 40,
  student_name: 120,
  student_grade: 30,
  instrument: 80,
  experience_level: 80,
  goals_notes: 2000,
};

function doPost(event) {
  const parameters = event && event.parameter ? event.parameter : {};
  if (text_(parameters.website, 200)) return response_({ ok: true });

  const inquiry = {
    parent_name: text_(parameters.parent_name, FIELD_LIMITS.parent_name),
    email: text_(parameters.email, FIELD_LIMITS.email),
    phone: text_(parameters.phone, FIELD_LIMITS.phone),
    student_name: text_(parameters.student_name, FIELD_LIMITS.student_name),
    student_grade: text_(parameters.student_grade, FIELD_LIMITS.student_grade),
    instrument: text_(parameters.instrument, FIELD_LIMITS.instrument),
    experience_level: text_(parameters.experience_level, FIELD_LIMITS.experience_level),
    goals_notes: text_(parameters.goals_notes, FIELD_LIMITS.goals_notes),
    preferred_times: list_(event && event.parameters ? event.parameters.preferred_times : []),
  };

  const error = validationError_(inquiry);
  if (error) return response_({ ok: false, error: error });

  const lock = LockService.getScriptLock();
  try {
    if (!lock.tryLock(5000)) return response_({ ok: false, error: 'Please try again shortly.' });

    const sheet = SpreadsheetApp.openById(INQUIRY_SPREADSHEET_ID).getSheetByName(INQUIRIES_SHEET_NAME);
    if (!sheet) throw new Error(`Missing sheet: ${INQUIRIES_SHEET_NAME}`);

    sheet.appendRow([
      new Date(), 'New', inquiry.parent_name, inquiry.email, inquiry.phone,
      inquiry.student_name, inquiry.student_grade, inquiry.instrument,
      inquiry.experience_level, inquiry.preferred_times.join(', '), inquiry.goals_notes, '',
    ]);
    return response_({ ok: true });
  } catch (error) {
    console.error(error);
    return response_({ ok: false, error: 'Unable to save inquiry.' });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function text_(value, limit) {
  return String(value || '').trim().slice(0, limit);
}

function list_(values) {
  return (Array.isArray(values) ? values : [])
    .map((value) => text_(value, 80))
    .filter(Boolean)
    .slice(0, 3);
}

function validationError_(inquiry) {
  const required = ['parent_name', 'email', 'phone', 'student_name', 'student_grade', 'instrument', 'experience_level'];
  if (required.some((field) => !inquiry[field])) return 'Missing required field.';
  if (!/^\S+@\S+\.\S+$/.test(inquiry.email)) return 'Invalid email address.';
  if (!inquiry.preferred_times.length) return 'Choose at least one preferred time.';
  return '';
}

function response_(body) {
  return ContentService.createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
