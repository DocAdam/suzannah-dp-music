import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  // GitHub Pages hosts this review site beneath the repository name.
  base: process.env.GITHUB_ACTIONS ? '/suzannah-dp-music' : '/',
  site: 'https://example.com', // [CONFIRM: production canonical URL before launch]
});
