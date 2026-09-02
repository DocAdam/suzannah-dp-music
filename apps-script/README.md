# Google Sheets inquiry endpoint

1. Open the **Inquiries** tab of the studio Google Sheet, then choose **Extensions → Apps Script**.
2. Replace the starter code with `Code.gs`, save it, then choose **Deploy → New deployment → Web app**. Execute as the sheet owner and allow access to anyone.
3. Copy the deployment URL into the hosting environment as `PUBLIC_INQUIRY_ENDPOINT`, then redeploy the website.

The web app appends each submitted inquiry to the `Inquiries` tab with a `New` status. The site sends the parent/guardian name, email, phone, student name and grade, instrument, experience level, up to three preferred times, and optional notes.
