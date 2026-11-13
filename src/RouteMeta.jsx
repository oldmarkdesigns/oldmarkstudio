import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getMeta, metaTags } from './seo'

// Keeps the <head> in step with the route as the visitor navigates, so the
// title, canonical link, sharing tags and structured data always match the
// page on screen. The first page arrives with these already in its HTML.
export default function RouteMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const m = metaTags(getMeta(pathname))
    const head = document.head
    document.title = m.title

    let canonical = head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      head.appendChild(canonical)
    }
    canonical.href = m.url

    for (const t of m.tags) {
      const key = t.name ? 'name' : 'property'
      const value = t.name || t.property
      let el = head.querySelector(`meta[${key}="${value}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(key, value)
        head.appendChild(el)
      }
      el.setAttribute('content', t.content)
    }
    if (!m.tags.some(t => t.property === 'article:published_time')) {
      head.querySelector('meta[property="article:published_time"]')?.remove()
    }

    head.querySelectorAll('script[data-seo]').forEach(s => s.remove())
    for (const ld of m.jsonLd) {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.dataset.seo = ''
      s.textContent = JSON.stringify(ld)
      head.appendChild(s)
    }
  }, [pathname])

  return null
}
