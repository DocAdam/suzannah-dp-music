import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  // The production site is served from the root of its custom domain.
  base: '/',
  site: 'https://suzmusic.com/',
});
