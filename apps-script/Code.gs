const INQUIRY_SPREADSHEET_ID = '1hWr03ZRdZfYdIlNGt1EjZze3QWNIeH_Nz4h-D9paVbw';

function doPost(event) {
  const fields = event && event.parameter ? event.parameter : {};
  if (fields.website) return response_();

  const preferredTimes = event && event.parameters && event.parameters.preferred_times
    ? event.parameters.preferred_times.join(', ')
    : '';
  SpreadsheetApp.openById(INQUIRY_SPREADSHEET_ID).getSheetByName('Inquiries').appendRow([
    new Date(), 'New', fields.parent_name || '', fields.email || '', fields.phone || '',
    fields.student_name || '', fields.student_grade || '', fields.instrument || '',
    fields.experience_level || '', preferredTimes, fields.goals_notes || '', ''
  ]);
  return response_();
}

function response_() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
