import { useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// Shared constants and scrolling for every page; the components that use them
// are in site.jsx.

export const EMAIL = 'samuel@oldmark.se'

// Webbutveckling and Apputveckling have pages of their own; the other
// services share the service page.
const OWN_PAGES = { webbutveckling: '/webbutveckling', apputveckling: '/apputveckling' }
export const serviceHref = (slug) => OWN_PAGES[slug] || `/tjanst/${slug}`

// The five services, in the order the nav, the homepage list and the footer
// all show them.
export const siteServices = (t) => t.home.serviceList

// Sub-pages restore the homepage scroll position from this on "back".
export const rememberScroll = () => sessionStorage.setItem('homeScrollY', String(window.scrollY))

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Smooth wheel and trackpad scrolling, set up by each page. Null when the
// visitor prefers reduced motion, in which case the browser scrolls natively.
let lenis = null
const NAV_OFFSET = -64

export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return
    // The project rail keeps its own sideways scroll, but only for sideways
    // gestures: up and down over the rail stays smooth like the rest of the
    // page. (Handing every wheel event over the rail to the browser made the
    // page stall there, as native scrolling fought Lenis's easing.)
    lenis = new Lenis({
      lerp: 0.1,
      virtualScroll: ({ deltaX, deltaY, event }) =>
        !(Math.abs(deltaX) > Math.abs(deltaY) && event.target.closest?.('.st-rail')),
    })
    let raf = requestAnimationFrame(function loop(time) {
      lenis?.raf(time)
      raf = requestAnimationFrame(loop)
    })
    return () => {
      cancelAnimationFrame(raf)
      lenis?.destroy()
      lenis = null
    }
  }, [])
}

export function scrollToId(id) {
  const target = document.querySelector(id)
  if (!target) return
  if (lenis) lenis.scrollTo(target, { offset: NAV_OFFSET })
  else target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0)
  else window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}

// Back to the homepage, at the place the visitor left it.
export function useBackHome() {
  const navigate = useNavigate()
  return (e) => {
    e?.preventDefault()
    const saved = sessionStorage.getItem('homeScrollY')
    navigate('/')
    requestAnimationFrame(() =>
      requestAnimationFrame(() => window.scrollTo({ top: saved ? parseInt(saved, 10) : 0, behavior: 'instant' })),
    )
  }
}

// A link such as "#offer" scrolls to its section when this page has it, and
// otherwise opens the homepage at that section.
export function useGo() {
  const navigate = useNavigate()
  return (hash) => {
    if (document.querySelector(hash)) scrollToId(hash)
    else navigate(`/${hash}`)
  }
}


// Labels in the older copy are in capitals ("VAD SOM INGÅR"); the site writes
// them in sentence case.
export const sentence = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : s)

// ─── Reveal ──────────────────────────────────────────────────────────────────
// One entrance for the whole site: each block fades in and rises a little as
// it reaches the viewport, so on load the head (or hero) arrives first and the
// rest follows as you scroll. Blocks that arrive together are staggered, a
// step apart, up to five steps. Marked before the first paint, so nothing
// flashes; unmarked once in, so the block's own transitions apply again.
// Reduced motion: nothing is marked, everything simply shows.
const REVEAL = [
  '.st-hero-copy > *',
  '.st-hero-orb',
  '.st-studio > *',
  '.st-work-head',
  '.st-work .st-rail',
  '.st-process-steps > li',
  '.st-split > *',
  '.st-page-head > :not(.st-page-head-row)',
  '.st-page-head-text > *',
  '.st-page-head-media',
  '.st-page-media',
  '.st-contact .st-wrap > *',
].join(',')
const STEP = 70
const MAX_STEPS = 5

export function useReveal(key) {
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return
    const root = document.querySelector('.st')
    if (!root) return
    const items = [...root.querySelectorAll(REVEAL)]
    // Straight to the waiting state, without easing there: a block that was
    // already showing (the same page with new content) starts from hidden too.
    items.forEach((el) => {
      el.style.transition = 'none'
      el.classList.add('st-rv')
    })
    void root.offsetHeight
    items.forEach((el) => el.style.removeProperty('transition'))

    const done = (e) => {
      if (e.target !== e.currentTarget || e.propertyName !== 'transform') return
      e.currentTarget.classList.remove('st-rv', 'is-in')
      e.currentTarget.style.removeProperty('--rv-delay')
      e.currentTarget.removeEventListener('transitionend', done)
    }

    const io = new IntersectionObserver(
      (entries) => {
        const arriving = entries.filter((e) => e.isIntersecting).map((e) => e.target)
        arriving.forEach((el, i) => {
          el.style.setProperty('--rv-delay', `${Math.min(i, MAX_STEPS) * STEP}ms`)
          el.addEventListener('transitionend', done)
          el.classList.add('is-in')
          io.unobserve(el)
        })
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    items.forEach((el) => io.observe(el))

    return () => {
      io.disconnect()
      items.forEach((el) => {
        el.removeEventListener('transitionend', done)
        el.classList.remove('st-rv', 'is-in')
        el.style.removeProperty('--rv-delay')
      })
    }
  }, [key])
}
