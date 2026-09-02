# Suzannah Pugh Music Studio

A concise, static Astro website for Suzannah Pugh’s private piano, violin, and limited voice studio in Springfield, Missouri.

The live review site is published through GitHub Pages at <https://docadam.github.io/suzannah-dp-music/>.

## Site structure

- `/` is the public single-page studio site: lessons, openings, FAQ, inquiry form, and About.
- `/privacy` is the only separate public page.
- `src/data/studio.ts` is the editable source for public studio facts, availability slots, FAQ content, and the intake endpoint setting.
- `apps-script/Code.gs` receives form submissions and adds them to the studio’s Google Sheet.
- `SUZANNAH-REVIEW-CHECKLIST.md` is the owner’s factual and operational review list.

## Local development

```sh
npm install
npm run dev
```

Run the complete verification suite before publishing a change:

```sh
npm run validate
```

## Updating availability and content

Edit `src/data/studio.ts`.

- Add or edit only verified recurring slots in `availabilitySlots`.
- Change a slot’s `status` from `open` to `filled` once a student is accepted.
- Preserve `[CONFIRM: ...]` and `[ADD: ...]` markers until the owner verifies the fact.
- Review `SUZANNAH-REVIEW-CHECKLIST.md` before replacing or adding public claims.

## Inquiry form and Google Sheet

The inquiry form collects only parent/guardian contact details, student details, instrument, experience level, preferred times, and optional notes. It intentionally warns families not to submit sensitive information.

1. Open `apps-script/Code.gs` in the Google Sheet’s Apps Script project and deploy it as a web app, as described in `apps-script/README.md`.
2. Set the web-app URL as the GitHub repository Actions variable `PUBLIC_INQUIRY_ENDPOINT` (Settings → Secrets and variables → Actions → Variables). For local testing, copy `.env.example` to `.env` and set the same value there.
3. Submit a non-sensitive test inquiry and confirm it appears in the Google Sheet’s `Inquiries` tab.

Do not commit `.env` files or the deployment URL if it should remain private.

## Deployment

GitHub Pages deploys automatically after every push to `main` through `.github/workflows/deploy-pages.yml`. The workflow runs `npm ci` and `npm run validate`, then publishes `dist/`.

The repository is hosted as a GitHub project site, so the build automatically uses the `/suzannah-dp-music/` path. Internal links and images are base-path-safe in both local and Pages builds.

When a final domain is ready:

1. Configure it in GitHub Pages and DNS.
2. Update `astro.config.mjs` and `studio.seo.canonical` with the verified canonical `https://` URL.
3. Confirm all links, images, the form endpoint, and the privacy page work on the final domain.
