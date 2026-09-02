# Google Sheets inquiry endpoint

`Code.gs` accepts the public inquiry form and appends valid submissions to the `Inquiries` tab of the studio Google Sheet.

## Deploy or update it

1. Open the studio Google Sheet, select **Extensions → Apps Script**, and replace the project code with `Code.gs`.
2. Save, then choose **Deploy → Manage deployments**. Create a web-app deployment if one does not exist, or edit the existing deployment and select **New version**.
3. Execute as the Sheet owner and grant access to **Anyone**. Copy the `/exec` deployment URL.
4. In GitHub, open **Settings → Secrets and variables → Actions → Variables** and set `PUBLIC_INQUIRY_ENDPOINT` to that URL.
5. Push a site change or run the **Deploy review site to GitHub Pages** workflow again.
6. Submit one non-sensitive test inquiry and confirm a row appears in `Inquiries` with the `New` status.

The endpoint URL is included in the public page markup so a browser can submit the form. It is not a secret; do not rely on hiding it for security.

## Contract

The script accepts parent/guardian name, email, phone, student name and grade, instrument, experience level, up to three preferred times, and optional notes. It trims and limits values, requires core contact and student fields, validates email shape, limits preferred times to three, serializes concurrent writes with a script lock, and returns JSON.

The script must be redeployed after changing `Code.gs`; saving alone does not update an existing web-app deployment.
