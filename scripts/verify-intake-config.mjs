const endpoint = process.env.PUBLIC_INQUIRY_ENDPOINT;

if (!endpoint) throw new Error('PUBLIC_INQUIRY_ENDPOINT is required. Set the deployed Google Apps Script /exec URL first.');

let url;
try {
  url = new URL(endpoint);
} catch {
  throw new Error('PUBLIC_INQUIRY_ENDPOINT must be a valid URL.');
}

if (url.protocol !== 'https:' || !url.pathname.endsWith('/exec')) {
  throw new Error('PUBLIC_INQUIRY_ENDPOINT must be an HTTPS Google Apps Script web-app /exec URL.');
}

console.log(`Inquiry endpoint configuration is valid for ${url.hostname}.`);
