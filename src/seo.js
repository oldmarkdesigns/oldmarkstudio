import { services } from './data/services'
import translations from './translations'

// Search and sharing metadata for every route: the title and description
// search results show, the image link previews show, and the structured data
// that tells search engines what the studio is. The prerender step writes this
// into each page's HTML at build time; RouteMeta keeps it current as the
// visitor moves between pages.

export const SITE_URL = 'https://www.oldmarkstudio.se'
export const SITE_NAME = 'Oldmark Studio'
export const DEFAULT_IMAGE = '/og-image.jpg'
const EMAIL = 'oldmarkdesigns@gmail.com'

const sv = translations.sv
const cases = Object.fromEntries(sv.home.cases.map(c => [c.slug, c]))

const title = (name) => `${name} | ${SITE_NAME}`

const STOCKHOLM = { '@type': 'City', name: 'Stockholm' }
const SWEDEN = { '@type': 'Country', name: 'Sverige' }

// Profiles elsewhere that belong to the studio and to Samuel, so search
// engines can tie them to this site.
const LINKEDIN = 'https://www.linkedin.com/in/samuel-oldmark-31055a1a8/'

const ORG_ID = `${SITE_URL}/#studio`
const PERSON_ID = `${SITE_URL}/#samuel`

const organization = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: SITE_NAME,
  alternateName: ['Oldmark', 'Oldmark Studio Stockholm'],
  slogan: sv.home.statement,
  url: `${SITE_URL}/`,
  email: EMAIL,
  logo: `${SITE_URL}/favicon-512x512.png`,
  image: `${SITE_URL}${DEFAULT_IMAGE}`,
  description: sv.home.studioBody,
  address: { '@type': 'PostalAddress', addressLocality: 'Stockholm', addressCountry: 'SE' },
  areaServed: [STOCKHOLM, SWEDEN],
  sameAs: [LINKEDIN],
  founder: {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Samuel Oldmark',
    jobTitle: 'Produktdesigner och webbutvecklare',
    knowsLanguage: ['sv', 'en'],
    email: EMAIL,
    worksFor: { '@id': ORG_ID },
    url: `${SITE_URL}/`,
    sameAs: [LINKEDIN],
  },
  knowsAbout: [
    'Webbdesign', 'Webbutveckling', 'Hemsidor för företag', 'Apputveckling', 'iPhone-appar', 'Webbappar',
    'UX-design', 'UI-design', 'Användbarhet', 'Tillgänglighet', 'WCAG', 'Sökmotoroptimering',
    'Branding', 'Varumärkesidentitet', 'Grafisk profil', 'Logotyper', 'Prototyper', 'Produktdesign',
  ],
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
  alternateName: 'Oldmark',
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

const serviceLd = (path, name, description, serviceType, alternateName, offers) => [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    alternateName,
    serviceType,
    description,
    url: `${SITE_URL}${path}`,
    provider: { '@id': ORG_ID },
    areaServed: [STOCKHOLM, SWEDEN],
    availableLanguage: ['sv', 'en'],
    ...(offers ? { offers } : {}),
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

// What the Webbutveckling page charges: a monthly plan, and a one-off build.
const WEB_OFFERS = [
  {
    '@type': 'Offer',
    name: 'Hemsida som månadsabonnemang',
    priceCurrency: 'SEK',
    priceSpecification: { '@type': 'UnitPriceSpecification', minPrice: 990, priceCurrency: 'SEK', unitCode: 'MON' },
  },
  {
    '@type': 'Offer',
    name: 'Ny hemsida som engångsprojekt',
    priceCurrency: 'SEK',
    priceSpecification: { '@type': 'PriceSpecification', minPrice: 9900, priceCurrency: 'SEK' },
  },
]

// Search wording for the service pages, keyed by slug.
const SERVICE_SEO = {
  prototyping: {
    title: 'Prototyper – klickbar prototyp och MVP i Stockholm',
    description: 'Testa din idé innan du bygger den. Klickbara prototyper för användartester, investerardemos och MVP – klara på 3–7 dagar. Designstudio i Stockholm.',
    serviceType: 'Prototyper och produktdesign',
    alternateName: ['Klickbar prototyp', 'MVP-design'],
  },
  'ux-granskning': {
    title: 'UX-granskning och tillgänglighet (WCAG 2.2) i Stockholm',
    description: 'UX-granskning och tillgänglighetsgranskning mot WCAG 2.2 AA inför EAA. Konkreta, prioriterade åtgärder för din webbplats eller app.',
    serviceType: 'UX-granskning och tillgänglighetsgranskning',
    alternateName: ['UX-audit', 'Tillgänglighetsgranskning', 'WCAG-granskning'],
  },
  branding: {
    title: 'Branding, logotyp och grafisk profil i Stockholm',
    description: 'Branding och varumärkesidentitet för företag: logotyp, grafisk profil, färger och typografi som håller ihop på webben och allt annat ni visar upp.',
    serviceType: 'Branding och varumärkesidentitet',
    alternateName: ['Grafisk profil', 'Logotypdesign', 'Visuell identitet'],
  },
}

// Each route: path, title, description, and optionally image, type, jsonLd,
// noindex (kept out of search) and sitemap: false (left out of the sitemap).
export const routes = [
  {
    path: '/',
    title: `${SITE_NAME} – Webbdesigner i Stockholm för hemsidor, appar och varumärken`,
    description: 'Designstudio i Stockholm. Oldmark Studio designar och bygger hemsidor, appar och varumärken för företag – som engångsprojekt eller månadsabonnemang.',
    jsonLd: [organization, website],
  },
  {
    path: '/webbutveckling',
    title: title('Hemsida som abonnemang från 990 kr/mån – webbutveckling i Stockholm'),
    description: 'Ny hemsida för ditt företag från 990 kr/mån med design, utveckling, hosting och underhåll. Eller som engångsprojekt från 9 900 kr. Designstudio i Stockholm.',
    jsonLd: serviceLd('/webbutveckling', 'Webbutveckling', sv.webSolution.subtitle, 'Webbutveckling och webbdesign', ['Hemsida för företag', 'Webbdesign', 'Hemsida som abonnemang'], WEB_OFFERS),
  },
  {
    path: '/apputveckling',
    title: title('Apputveckling i Stockholm – iPhone-appar och webbappar'),
    description: 'Apputveckling i Stockholm. Jag designar och bygger iPhone-appar och webbappar som fungerar i alla telefoner – från idé till App Store.',
    jsonLd: serviceLd('/apputveckling', 'Apputveckling', 'Native iPhone-appar och webbappar.', 'Apputveckling', ['App-utveckling', 'iPhone-appar', 'Webbappar']),
  },
  ...services.map(s => {
    const path = `/tjanst/${s.slug}`
    const seo = SERVICE_SEO[s.slug] || {}
    const description = seo.description || `${s.sv.tagline} ${s.sv.intro}`
    return {
      path,
      title: title(seo.title || s.sv.title),
      description,
      jsonLd: serviceLd(path, s.sv.title, s.sv.tagline, seo.serviceType, seo.alternateName),
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
      description: `${c.line} Ett projekt av Oldmark Studio i Stockholm.`,
      image,
      jsonLd: projectLd(path, c.name, c.line),
    }
  }),
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
    { name: 'robots', content: meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { property: 'og:type', content: meta.type || 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: 'sv_SE' },
    { property: 'og:title', content: meta.title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: meta.title },
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
