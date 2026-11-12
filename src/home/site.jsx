import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import appPhone from '../assets/work/app-phone.webp'
import studioDesk from '../assets/work/studio-desk.webp'
import DotGlobe from './DotGlobe'
import { EMAIL, serviceHref, rememberScroll, scrollToTop, useGo } from './siteUtils'
import './home.css'

// The parts every page shares: the bar, the contact band, the footer and the
// small pieces they are made of. The homepage and the
// sub-pages both build on these, so the whole site reads as one.

// Small, slowly turning versions of the hero globe: the nav logo on its own,
// in the hero's colouring, and the O of "Oldmark Studio" in the footer, in white.
const LOGO_DOTS = [0.4, 1]
const FOOT_DOTS = [0.35, 0.95]
const FOOT_ALPHA = [0.15, 0.95]

export function Arrow({ size = 14, back = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      style={back ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  )
}

// An arrow pointing up and out, for links that leave the site.
export function OutArrow({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  )
}

// ─── Mail address with a quiet copy control ──────────────────────────────────
export function Mail({ copy, copied, className = '' }) {
  const [done, setDone] = useState(false)

  function onCopy() {
    navigator.clipboard?.writeText(EMAIL)
    setDone(true)
    setTimeout(() => setDone(false), 1800)
  }

  return (
    <span className={`st-mail ${className}`}>
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      <button type="button" onClick={onCopy}>
        {done ? copied : copy}
      </button>
      <span className="st-sr" role="status">
        {done ? copied : ''}
      </span>
    </span>
  )
}

// ─── Navigation ──────────────────────────────────────────────────────────────
// After the bar on Velora: transparent over the top of the page, then a rounded,
// frosted bar that hugs the content once you scroll. "Tjänster" opens a panel
// that drops from the bar as one surface (two image cards and the services), on
// hover with a short delay or on click; the page dims behind it. Below 900 px a
// two-stroke burger opens a full-height panel that unrolls from the bar.
export function Nav({ t, services, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)
  const [mobile, setMobile] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const burgerRef = useRef(null)
  const timer = useRef(0)
  const go = useGo()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const sv = lang === 'sv'

  // The links after "Tjänster"; "Arbete" comes before it.
  const links = [
    ['#about', t.about],
    ['#contact', t.contact],
  ]
  const cards = [
    { to: '/webbutveckling', label: t.offerCard, note: t.offerCardNote, img: studioDesk },
    // The studio's own homepage on a phone, for native iOS apps.
    { to: '/apputveckling', label: t.appCard, img: appPhone },
  ]

  // Scrolled state from a marker at the top of the page, not every scroll event.
  useEffect(() => {
    const sentinel = document.getElementById('st-top-sentinel')
    if (!sentinel) return
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting))
    io.observe(sentinel)
    return () => io.disconnect()
  }, [])

  // Escape closes whichever is open and gives focus back to its button.
  useEffect(() => {
    if (!menu && !mobile) return
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (menu) {
        setMenu(false)
        buttonRef.current?.focus()
      }
      if (mobile) {
        setMobile(false)
        burgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menu, mobile])

  // Widening past the burger's breakpoint closes the mobile panel.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)')
    const onChange = (e) => e.matches && setMobile(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Hover intent on mouse devices: a short delay in, a longer grace period out.
  const fine = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches
  const hoverIn = () => {
    if (!fine()) return
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setMenu(true), 90)
  }
  const hoverOut = () => {
    if (!fine()) return
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setMenu(false), 220)
  }

  const closeAll = () => {
    window.clearTimeout(timer.current)
    setMenu(false)
    setMobile(false)
  }
  // Section links scroll to their own href, here or on the homepage.
  const jump = (e) => {
    e.preventDefault()
    closeAll()
    go(e.currentTarget.getAttribute('href'))
  }
  // The logo is the way to the top of the homepage.
  const toTop = (e) => {
    e.preventDefault()
    closeAll()
    if (pathname === '/') {
      scrollToTop()
      return
    }
    navigate('/')
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  }
  const toService = () => {
    closeAll()
    if (pathname === '/') rememberScroll()
  }

  const serviceRows = services.map((item) => (
    <li key={item.slug}>
      <Link className="st-menu-row" to={serviceHref(item.slug)} onClick={toService}>
        <span className="st-menu-row-name">{item.name}</span>
        <span className="st-menu-row-meta">{item.tag}</span>
      </Link>
    </li>
  ))

  return (
    <>
      <header className={`st-nav${scrolled ? ' is-scrolled' : ''}${menu || mobile ? ' is-open' : ''}${mobile ? ' is-mobile-open' : ''}`}>
        <div className="st-wrap st-nav-bar">
          <a className="st-logo" href="/" onClick={toTop} aria-label="Oldmark Studio">
            <DotGlobe
              count={140}
              fit={0.47}
              dots={LOGO_DOTS}
              interactive={false}
              className="st-logo-orb"
            />
          </a>

          <nav className="st-nav-links" aria-label={sv ? 'Huvudmeny' : 'Main'}>
            <a href="#work" onClick={jump}>
              {t.work}
            </a>
            <div
              className="st-drop"
              ref={menuRef}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
              onBlur={(e) => {
                if (!menuRef.current?.contains(e.relatedTarget)) setMenu(false)
              }}
            >
              <button
                type="button"
                ref={buttonRef}
                className="st-drop-btn"
                aria-expanded={menu}
                aria-controls="st-menu-services"
                onClick={() => setMenu((v) => !v)}
              >
                {t.services}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className="st-panel" id="st-menu-services">
                <div className="st-wrap st-panel-inner">
                  <ul className="st-menu-cards">
                    {cards.map((c) => {
                      const inner = (
                        <>
                          <img src={c.img} alt="" loading="lazy" decoding="async" />
                          <span className="st-menu-card-label">
                            {c.label}
                            {c.note && <span className="st-menu-card-note">{c.note}</span>}
                          </span>
                          <span className="st-menu-card-arrow" aria-hidden="true">
                            <Arrow size={16} />
                          </span>
                        </>
                      )
                      return (
                        <li key={c.label}>
                          {c.to ? (
                            <Link className="st-menu-card" to={c.to} onClick={toService}>
                              {inner}
                            </Link>
                          ) : (
                            <a className="st-menu-card" href={c.href} onClick={jump}>
                              {inner}
                            </a>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                  <ul className="st-menu-list">{serviceRows}</ul>
                </div>
              </div>
            </div>
            {links.map(([id, label]) => (
              <a key={id} href={id} onClick={jump}>
                {label}
              </a>
            ))}
          </nav>

          <div className="st-nav-end">
            <button
              type="button"
              className="st-lang"
              onClick={() => setLang(sv ? 'en' : 'sv')}
              aria-label={sv ? 'Switch to English' : 'Byt till svenska'}
            >
              {sv ? 'EN' : 'SV'}
            </button>
            <a className="st-nav-cta" href="#contact" onClick={jump}>
              {t.cta}
            </a>
            <button
              type="button"
              ref={burgerRef}
              className="st-burger"
              aria-expanded={mobile}
              aria-controls="st-mobile-menu"
              aria-label={mobile ? (sv ? 'Stäng meny' : 'Close menu') : sv ? 'Meny' : 'Menu'}
              onClick={() => setMobile((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className="st-mobile" id="st-mobile-menu" data-lenis-prevent>
          <nav className="st-wrap st-mobile-nav" aria-label={sv ? 'Huvudmeny' : 'Main'}>
            <a href="#work" onClick={jump}>
              {t.work}
            </a>
            <details className="st-mobile-group">
              <summary>
                {t.services}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <ul className="st-menu-list">{serviceRows}</ul>
            </details>
            {links.map(([id, label]) => (
              <a key={id} href={id} onClick={jump}>
                {label}
              </a>
            ))}
            <a className="st-mobile-cta" href="#contact" onClick={jump}>
              {t.cta}
            </a>
          </nav>
        </div>
      </header>
      <div className={`st-scrim${menu || mobile ? ' is-open' : ''}`} onClick={closeAll} aria-hidden="true" />
    </>
  )
}

// ─── Contact: the dark band before the footer ────────────────────────────────
// Sub-pages pass their own title and line; the homepage uses its own.
export function Contact({ t, label, title, body }) {
  return (
    <section className="st-contact" id="contact">
      <div className="st-wrap">
        <p className="st-label">{label || t.contactLabel}</p>
        <h2 className="st-contact-title">{title || t.contactTitle}</h2>
        <p className="st-contact-body">{body || t.contactBody}</p>
        <Mail copy={t.copy} copied={t.copied} className="st-mail--lg" />
      </div>
    </section>
  )
}

// ─── Footer: the site map, the address, the language, the way back up ────────
export function Footer({ t, services, footer, lang, setLang }) {
  const f = t.foot
  const sv = lang === 'sv'
  const go = useGo()
  const { pathname } = useLocation()
  const jump = (e) => {
    e.preventDefault()
    go(e.currentTarget.getAttribute('href'))
  }
  const toTop = (e) => {
    e.preventDefault()
    scrollToTop()
  }
  const away = () => {
    if (pathname === '/') rememberScroll()
  }
  const pages = [
    ['#work', t.nav.work],
    ['#offer', f.offer],
    ['#services', t.nav.services],
    ['#about', t.nav.about],
    ['#contact', t.nav.contact],
  ]

  return (
    <footer className="st-footer">
      <div className="st-wrap">
        <div className="st-footer-grid">
          <Link className="st-footer-mark" to="/" aria-label="Oldmark Studio" onClick={pathname === '/' ? toTop : undefined}>
            <span className="st-logo-o" aria-hidden="true">
              <DotGlobe
                count={200}
                fit={0.47}
                dots={FOOT_DOTS}
                color="255, 255, 255"
                alpha={FOOT_ALPHA}
                interactive={false}
                className="st-logo-orb"
              />
            </span>
            <span aria-hidden="true">ldmark Studio</span>
          </Link>
          <nav aria-label={f.pages}>
            <p className="st-footer-head">{f.pages}</p>
            <ul>
              {pages.map(([id, label]) => (
                <li key={id}>
                  <a href={id} onClick={jump}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={f.services}>
            <p className="st-footer-head">{f.services}</p>
            <ul>
              {services.map((item) => (
                <li key={item.slug}>
                  <Link to={serviceHref(item.slug)} onClick={away}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={f.projects}>
            <p className="st-footer-head">{f.projects}</p>
            <ul>
              {t.cases.map((c) => (
                <li key={c.slug}>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer">
                      {c.name}
                    </a>
                  ) : (
                    <Link to={`/projekt/${c.slug}`} onClick={away}>
                      {c.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="st-footer-head">{f.contact}</p>
            <ul>
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>Samuel Oldmark</li>
              <li>{footer.location}</li>
            </ul>
          </div>
        </div>
        <div className="st-footer-base">
          <span>{footer.copy}</span>
          <span className="st-footer-lang" role="group" aria-label={f.language}>
            <button type="button" aria-pressed={sv} onClick={() => setLang('sv')}>
              Svenska
            </button>
            <button type="button" aria-pressed={!sv} onClick={() => setLang('en')}>
              English
            </button>
          </span>
          <a href="#top" onClick={toTop}>
            {f.top} ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
