import { articles } from './data/articles'
import { services } from './data/services'
import translations from './translations'

// Search and sharing metadata for every route: the title and description
// search results show, the image link previews show, and the structured data
// that tells search engines what the studio is. The prerender step writes this
// into each page's HTML at build time; RouteMeta keeps it current as the
// visitor moves between pages.

export const SITE_URL = 'https://oldmark.se'
export const SITE_NAME = 'Oldmark Studio'
export const DEFAULT_IMAGE = '/og-image.jpg'
const EMAIL = 'samuel@oldmark.se'

const sv = translations.sv
const cases = Object.fromEntries(sv.home.cases.map(c => [c.slug, c]))

const title = (name) => `${name} | ${SITE_NAME}`

const ORG_ID = `${SITE_URL}/#studio`
const PERSON_ID = `${SITE_URL}/#samuel`

const organization = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  email: EMAIL,
  image: `${SITE_URL}${DEFAULT_IMAGE}`,
  description: sv.home.studioBody,
  address: { '@type': 'PostalAddress', addressLocality: 'Stockholm', addressCountry: 'SE' },
  areaServed: { '@type': 'Country', name: 'Sverige' },
  founder: {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Samuel Oldmark',
    jobTitle: 'Produktdesigner',
    email: EMAIL,
    worksFor: { '@id': ORG_ID },
  },
  knowsAbout: ['Webbdesign', 'Webbutveckling', 'Apputveckling', 'UX-design', 'Tillgänglighet', 'Branding', 'Prototyper'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tjänster',
    itemListElement: sv.home.serviceList.map(s => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name, description: s.desc },
    })),
  },
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: 'sv-SE',
  publisher: { '@id': ORG_ID },
}

const breadcrumbs = (path, name) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: SITE_NAME, item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
  ],
})

const serviceLd = (path, name, description) => [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Sverige' },
  },
  breadcrumbs(path, name),
]

const projectLd = (path, name, description) => [
  {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name,
    description,
    url: `${SITE_URL}${path}`,
    creator: { '@id': ORG_ID },
  },
  breadcrumbs(path, name),
]

// "12 maj 2026" → "2026-05-12"
const MONTHS = { jan: 1, feb: 2, mar: 3, apr: 4, maj: 5, jun: 6, jul: 7, aug: 8, sep: 9, okt: 10, nov: 11, dec: 12 }
function isoDate(d) {
  const [day, mon, year] = d.split(' ')
  const m = MONTHS[mon.slice(0, 3).toLowerCase()]
  if (!m) return undefined
  return `${year}-${String(m).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

// Each route: path, title, description, and optionally image, type, jsonLd,
// noindex (kept out of search) and sitemap: false (left out of the sitemap).
export const routes = [
  {
    path: '/',
    title: `${SITE_NAME} – Webbdesign, webbutveckling och appar i Stockholm`,
    description: 'Oldmark Studio designar och bygger webbplatser, appar och varumärken för små och växande företag i Stockholm. Webbutveckling som engångsprojekt eller månadsabonnemang.',
    jsonLd: [organization, website],
    priority: '1.0',
  },
  {
    path: '/webbutveckling',
    title: title('Webbutveckling i Stockholm – fast pris eller månadsabonnemang'),
    description: `${sv.webSolution.subtitle} Design, utveckling, hosting och underhåll från en studio i Stockholm.`,
    jsonLd: serviceLd('/webbutveckling', 'Webbutveckling', sv.webSolution.subtitle),
    priority: '0.9',
  },
  {
    path: '/apputveckling',
    title: title('Apputveckling – iPhone-appar och webbappar'),
    description: 'Native iPhone-appar och webbappar som fungerar i alla telefoner, designade och byggda av Oldmark Studio i Stockholm.',
    jsonLd: serviceLd('/apputveckling', 'Apputveckling', 'Native iPhone-appar och webbappar.'),
    priority: '0.9',
  },
  ...services.map(s => {
    const path = `/tjanst/${s.slug}`
    const description = `${s.sv.tagline} ${s.sv.intro}`
    return {
      path,
      title: title(s.sv.title),
      description,
      jsonLd: serviceLd(path, s.sv.title, s.sv.tagline),
      priority: '0.8',
    }
  }),
  ...[
    { slug: 'no20', image: '/og/no20.jpg' },
    { slug: 'sea4you', image: '/og/sea4you.jpg' },
    { slug: 'hemma', image: '/og/hemma.jpg' },
  ].map(({ slug, image }) => {
    const c = cases[slug]
    const path = `/projekt/${slug}`
    return {
      path,
      title: title(`${c.name} – ${c.tag}`),
      description: c.line,
      image,
      jsonLd: projectLd(path, c.name, c.line),
      priority: '0.7',
    }
  }),
  ...articles.map(a => {
    const path = `/artikel/${a.slug}`
    const date = isoDate(a.date)
    return {
      path,
      title: title(a.sv.title),
      description: a.sv.excerpt,
      type: 'article',
      published: date,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: a.sv.title,
          description: a.sv.excerpt,
          datePublished: date,
          inLanguage: 'sv-SE',
          url: `${SITE_URL}${path}`,
          mainEntityOfPage: `${SITE_URL}${path}`,
          image: `${SITE_URL}${DEFAULT_IMAGE}`,
          author: { '@type': 'Person', '@id': PERSON_ID, name: 'Samuel Oldmark' },
          publisher: { '@id': ORG_ID },
        },
        breadcrumbs(path, a.sv.title),
      ],
      priority: '0.6',
    }
  }),
  // Older pages no longer linked from the site: still reachable, kept out of the sitemap.
  { path: '/projekt/iris-glaciers', title: title('Iris Glaciers'), description: 'Ett projekt av Oldmark Studio.', sitemap: false },
  { path: '/projekt/deco-home', title: title('Deco Home'), description: 'Ett projekt av Oldmark Studio.', sitemap: false },
  { path: '/v1', title: SITE_NAME, description: 'Tidigare version av startsidan.', noindex: true, sitemap: false },
]

const byPath = Object.fromEntries(routes.map(r => [r.path, r]))

export function getMeta(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return byPath[path] || { path, title: title('Sidan finns inte'), description: routes[0].description, noindex: true }
}

const clip = (s, n = 160) => (s.length <= n ? s : `${s.slice(0, n - 1).replace(/\s+\S*$/, '')}…`)

// The tags each page's <head> carries, as data both the prerender step and
// the browser can use.
export function metaTags(meta) {
  const url = `${SITE_URL}${meta.path === '/' ? '/' : meta.path}`
  const image = `${SITE_URL}${meta.image || DEFAULT_IMAGE}`
  const description = clip(meta.description)
  const tags = [
    { name: 'description', content: description },
    { name: 'robots', content: meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large' },
    { property: 'og:type', content: meta.type || 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: 'sv_SE' },
    { property: 'og:title', content: meta.title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: meta.title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
  ]
  if (meta.published) tags.push({ property: 'article:published_time', content: meta.published })
  return { title: meta.title, url, tags, jsonLd: meta.jsonLd ? [].concat(meta.jsonLd) : [] }
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export function headHtml(meta) {
  const m = metaTags(meta)
  return [
    `<title>${esc(m.title)}</title>`,
    `<link rel="canonical" href="${m.url}" />`,
    ...m.tags.map(t => `<meta ${t.name ? `name="${t.name}"` : `property="${t.property}"`} content="${esc(t.content)}" />`),
    ...m.jsonLd.map(ld => `<script type="application/ld+json" data-seo>${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`),
  ].join('\n    ')
}
