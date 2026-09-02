import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

async function collectHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => entry.isDirectory()
    ? collectHtml(join(directory, entry.name))
    : entry.name.endsWith('.html') ? [join(directory, entry.name)] : []));
  return nested.flat();
}

const files = await collectHtml('dist');
const pages = new Map(await Promise.all(files.map(async (file) => [relative('dist', file), await readFile(file, 'utf8')])));
const routeExists = (route) => route === '/' || pages.has(`${route.replace(/^\//, '')}/index.html`);
const base = '';

for (const [file, html] of pages) {
  if (html.includes('href="undefined"') || html.includes('href=""')) throw new Error(`Invalid empty link in ${file}.`);
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1].startsWith(`${base}/`) ? match[1].slice(base.length) : match[1];
    if (/^(mailto:|https?:|#|\/_astro\/|\/images\/)/.test(href)) {
      if (href.startsWith('#') && !ids.has(href.slice(1))) throw new Error(`Missing anchor ${href} in ${file}.`);
      continue;
    }
    const [route, anchor] = href.split('#');
    if (!routeExists(route || '/')) throw new Error(`Missing internal route ${href} in ${file}.`);
    if (anchor && route === '/') {
      const home = pages.get('index.html') || '';
      if (!new RegExp(`id="${anchor}"`).test(home)) throw new Error(`Missing home anchor ${href} in ${file}.`);
    }
  }
}
console.log(`Link validation passed for ${pages.size} generated pages.`);
