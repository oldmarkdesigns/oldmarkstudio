// Runs after both builds (see "build" in package.json): renders every route
// to static HTML with its own <head>, so search engines and link previews get
// the full page without running any script, and every URL exists as a file.
// Also writes sitemap.xml and robots.txt.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')

const { render, routes, getMeta, headHtml, SITE_URL } = await import(
  pathToFileURL(join(ssrDir, 'entry-server.js')).href
)

const template = await readFile(join(dist, 'index.html'), 'utf8')
if (!template.includes('<!--seo-head-->') || !template.includes('<div id="root"></div>')) {
  throw new Error('index.html is missing the <!--seo-head--> marker or the empty root')
}

const page = (path, appHtml) =>
  template
    .replace('<!--seo-head-->', headHtml(getMeta(path)))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

for (const { path } of routes) {
  const html = page(path, render(path))
  const file = path === '/' ? join(dist, 'index.html') : join(dist, `${path}.html`)
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, html)
  console.log(`prerendered ${path}`)
}

// Unknown URLs get a proper 404 status from the host, with the site's frame.
await writeFile(join(dist, '404.html'), page('/404', render('/404')))

const today = new Date().toISOString().slice(0, 10)
const urls = routes
  .filter(r => r.sitemap !== false && !r.noindex)
  .map(r => `  <url>
    <loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${r.published || today}</lastmod>
    <priority>${r.priority || '0.5'}</priority>
  </url>`)
await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`,
)
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
console.log(`sitemap.xml: ${urls.length} URLs`)

await rm(ssrDir, { recursive: true, force: true })
