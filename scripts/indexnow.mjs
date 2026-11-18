// Tells Bing (and the other IndexNow search engines) that the site's pages
// have changed, so they recrawl them soon instead of on their own schedule.
// Runs at the end of the build, but only for production deploys on Vercel;
// run it by hand with `npm run indexnow`. A failed ping never fails the build.
//
// The key proves the site is ours: the same value is served as a text file at
// the site root (public/<key>.txt).
import { readFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const KEY = 'd2a148f7338761139a2f1ca901c47dc5'
const HOST = 'www.oldmarkstudio.se'

const manual = process.argv.includes('--force')
if (!manual && process.env.VERCEL_ENV !== 'production') {
  console.log('indexnow: skipped (not a production deploy)')
  process.exit(0)
}

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

try {
  // Every URL in the sitemap the build just wrote.
  const sitemap = await readFile(join(root, 'dist', 'sitemap.xml'), 'utf8')
  const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  if (!urlList.length) throw new Error('no URLs in sitemap.xml')

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
    signal: AbortSignal.timeout(10000),
  })
  // 200 = accepted, 202 = accepted while the key is being checked.
  console.log(`indexnow: ${res.status} for ${urlList.length} URLs`)
} catch (err) {
  console.warn(`indexnow: not sent (${err.message})`)
}
