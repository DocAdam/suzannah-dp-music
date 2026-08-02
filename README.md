# Suzannah Pugh Music Studio

A small, static Astro website for a private piano and violin teacher in Springfield, Missouri. It is designed to be fast, accessible, inexpensive to host, and straightforward to update.

## Architecture

- **Astro + TypeScript** with static output; no database, accounts, tracking, or client framework.
- `src/data/studio.ts` is the single editable content source for studio identity, biography, experience, lessons, policies, FAQ content, form endpoint, scheduling, and SEO.
- `src/pages/` contains the home page, studio policies, and privacy pages.
- `public/images/placeholders/` documents the images needed before launch. No remote photos are used.

## Local use

Install dependencies with `npm install`, then run `npm run dev`. Open the local URL Astro prints. Run `npm run build` for a production build, or `npm run validate` for type checking, build validation, content-rendering tests, and basic link validation.

## Updating content

Edit `src/data/studio.ts`. All incomplete items deliberately use `[CONFIRM: ...]` or `[ADD: ...]` labels so they cannot be mistaken for verified facts. Review `CONTENT-CHECKLIST.md` before replacing those labels.

## Images

Add approved local image files under `public/images/`, then replace the relevant styled placeholder blocks in `src/pages/index.astro`. Use accurate, concise alt text. Do not use externally hosted stock images without approval.

## Formspree

1. Create a Formspree form and review its privacy terms.
2. Create a local `.env` file from `.env.example`.
3. Set `PUBLIC_FORM_ENDPOINT` to Formspree’s endpoint.
4. Restart the development server and submit a non-sensitive test inquiry.

The current empty endpoint means the form safely shows a clear error rather than sending data anywhere. The honeypot field is included. Do not collect sensitive student information.

## Introductory scheduling

In `src/data/studio.ts`, set `scheduling.enabled` to `true`, select `Google Calendar` or `Calendly`, and provide its approved booking URL. Only use it for introductory calls, consultations, or trial-lesson discussions—not recurring lesson slots.

## Deployment

### GitHub Pages

Set the final domain in `astro.config.mjs` and `studio.seo.canonical`. Build with `npm run build`, then publish the `dist/` directory through a standard Astro GitHub Pages workflow. Configure the repository’s Pages source to use that workflow.

### Cloudflare Pages

Connect the repository in Cloudflare Pages. Set build command to `npm run build` and output directory to `dist`. Add `PUBLIC_FORM_ENDPOINT` in the Pages environment variables if using a form provider. Set the final canonical URL before deploying.

### Custom domain

Add the domain in the selected host, follow its DNS instructions, enable HTTPS, then update `astro.config.mjs` and `studio.seo.canonical` to the exact `https://` address. Verify that all pages redirect consistently to the selected canonical domain.

## Pre-launch review

Review every item in `CONTENT-CHECKLIST.md`, test the connected form and optional scheduling link, verify mobile layout, and run `npm run validate`. The privacy and policy pages are starter templates and require owner review; they are not legal advice.
