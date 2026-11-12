import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import samuel from '../assets/work/samuel.webp'
import studioDesk from '../assets/work/studio-desk.webp'
import appPhone from '../assets/work/app-phone-portrait.webp'
import DotGlobe from './DotGlobe'
import PixelPortrait from './PixelPortrait'
import no20Logo from '../assets/logos/no20.png'
import sea4youLogo from '../assets/logos/sea4you.png'
import hemmaLogo from '../assets/logos/hemma.svg'
import {
  EMAIL,
  serviceHref,
  siteServices,
  rememberScroll,
  prefersReducedMotion,
  useSmoothScroll,
  useReveal,
  scrollToId,
  sentence,
} from './siteUtils'
import { Arrow, Mail, Nav, Contact, Footer } from './site'
import { Rows } from './page'

// Each project's cover is its logo on the brand's own ground.
const LOGOS = {
  no20: { src: no20Logo, ground: '#f0e9df', width: '46%' },
  sea4you: { src: sea4youLogo, ground: '#0b1a30', width: '58%' },
  hemma: { src: hemmaLogo, ground: '#1e1b16', width: '17%' },
}

// ─── Hero: the sentence and the offer on the left, the dot globe on the right ─
function Hero({ t }) {
  return (
    <section className="st-hero" id="top">
      <div className="st-wrap st-hero-grid">
        <div className="st-hero-copy">
          <h1 className="st-statement">{t.statement}</h1>
          <div className="st-hero-foot">
          <p>
            {t.offerLine}{' '}
            <a
              href="#offer"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('#offer')
              }}
            >
              {t.offerLink}
              <Arrow />
            </a>
          </p>
          <Mail copy={t.copy} copied={t.copied} />
          </div>
        </div>
        <div className="st-hero-orb">
          <DotGlobe />
        </div>
      </div>
      <Studio t={t} />
    </section>
  )
}

// ─── The studio: what happens here, beside the desk it happens at ────────────
function Studio({ t }) {
  return (
    <div className="st-wrap st-studio">
      <figure className="st-studio-photo">
        <img src={studioDesk} alt={t.studioImageAlt} width="1472" height="1840" loading="lazy" decoding="async" />
      </figure>
      <div className="st-studio-text">
        <p className="st-label">{t.studioLabel}</p>
        <h2 className="st-title">{t.studioTitle}</h2>
        <p className="st-lede">{t.studioBody}</p>
        <ul className="st-studio-list">
          {t.studioItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// ─── Work: a rail of equal cards ─────────────────────────────────────────────
// Each card is the project's logo on its own colour. Three to a row on wide
// screens, fewer on narrow ones. Any number of projects fits: when there are
// more than show at once, the rail scrolls and the arrows appear; when they all
// fit, the arrows stay hidden.

// Client cases have a page here; own products link out to their case study.
function CaseLink({ c, children }) {
  if (c.href) {
    return (
      <a className="st-card" href={c.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }
  return (
    <Link className="st-card" to={`/projekt/${c.slug}`} onClick={rememberScroll}>
      {children}
    </Link>
  )
}

function Work({ t, lang }) {
  const railRef = useRef(null)
  const [edges, setEdges] = useState({ start: true, end: true })
  const sv = lang === 'sv'

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    const update = () =>
      setEdges({
        start: rail.scrollLeft <= 2,
        end: rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2,
      })
    update()
    rail.addEventListener('scroll', update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(rail)
    return () => {
      rail.removeEventListener('scroll', update)
      ro.disconnect()
    }
  }, [])

  function step(dir) {
    const rail = railRef.current
    const card = rail?.querySelector('li')
    if (!card) return
    const gap = parseFloat(getComputedStyle(rail).columnGap) || 0
    rail.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }

  const scrollable = !(edges.start && edges.end)

  return (
    <section className="st-work" id="work">
      <div className="st-wrap">
        <div className="st-work-head">
          <p className="st-label">{t.workLabel}</p>
          {scrollable && (
            <div className="st-rail-nav">
              <button type="button" onClick={() => step(-1)} disabled={edges.start} aria-label={sv ? 'Föregående' : 'Previous'}>
                <Arrow size={16} back />
              </button>
              <button type="button" onClick={() => step(1)} disabled={edges.end} aria-label={sv ? 'Nästa' : 'Next'}>
                <Arrow size={16} />
              </button>
            </div>
          )}
        </div>
        <ul className="st-rail" ref={railRef}>
          {t.cases.map((c) => (
            <li key={c.slug}>
              <CaseLink c={c}>
                <span
                  className="st-cover"
                  style={{ '--ground': LOGOS[c.slug].ground, '--logo-w': LOGOS[c.slug].width }}
                >
                  <img src={LOGOS[c.slug].src} alt="" loading="lazy" decoding="async" />
                </span>
                <span className="st-card-text">
                  <span className="st-card-name">{c.name}</span>
                  <span className="st-card-line">{c.line}</span>
                  <span className="st-card-meta">{c.tag}</span>
                  <span className="st-card-go">
                    {t.viewCase}
                    <Arrow />
                  </span>
                </span>
              </CaseLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ─── Offer: why a subscription, in three numbered reasons ────────────────────
// The plan itself (what is included, the price) is on the Webbutveckling page,
// one click away.
function Offer({ t, web }) {
  return (
    <section className="st-offer" id="offer">
      <div className="st-wrap st-split">
        <div className="st-offer-side">
          <p className="st-label">{sentence(web.valueLabel)}</p>
          <h2 className="st-title">{web.valueTitle}</h2>
          <p className="st-muted">{web.valueSubtitle}</p>
        </div>
        <div className="st-offer-body">
          <Rows numbered items={web.valuePoints.map((x) => ({ title: x.title, body: x.desc }))} />
          <div className="st-offer-actions">
            <a className="st-btn" href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.offerCtaSubject)}`}>
              {t.offerCta}
              <Arrow />
            </a>
            <Link className="st-link" to="/webbutveckling" onClick={rememberScroll}>
              {t.offerLink}
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services: a plain list ──────────────────────────────────────────────────
function Services({ t, services }) {
  return (
    <section className="st-services" id="services">
      <div className="st-wrap st-split">
        <div className="st-services-side">
          <p className="st-label">{t.servicesLabel}</p>
          <figure className="st-services-photo">
            <img src={appPhone} alt={t.servicesImageAlt} width="736" height="920" loading="lazy" decoding="async" />
          </figure>
        </div>
        <ul className="st-service-list">
          {services.map((item) => (
            <li key={item.slug}>
              <Link to={serviceHref(item.slug)} onClick={rememberScroll}>
                <span className="st-service-name">{item.name}</span>
                <span className="st-service-desc">{item.desc}</span>
                <Arrow size={16} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ─── Process: how the work runs, and who it suits ───────────────────────────
// The heading split like the other sections, then the four steps side by side
// between hairlines, each with its number, name and a line.
function Process({ p }) {
  return (
    <section className="st-process" id="process">
      <div className="st-wrap">
        <div className="st-split">
          <div className="st-process-side">
            <p className="st-label">{sentence(p.label)}</p>
            <h2 className="st-title">
              {p.headline} {p.accentWord}
            </h2>
            <p className="st-muted">{p.subheading}</p>
          </div>
          <div className="st-process-who">
            <h3>
              {p.secondaryHeadline} {p.secondaryAccentWord}
            </h3>
            <p className="st-lede">{p.secondarySubheading}</p>
          </div>
        </div>
        <ol className="st-process-steps">
          {p.steps.map((step, i) => (
            <li key={step.title}>
              <span className="st-process-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

// ─── About: the portrait under the label, resolving from pixels on hover ────
function About({ t, about }) {
  return (
    <section className="st-about" id="about">
      <div className="st-wrap st-split">
        <div>
          <p className="st-label">{t.aboutLabel}</p>
          <PixelPortrait src={samuel} alt="Samuel Oldmark" />
        </div>
        <div className="st-about-text">
          <p className="st-lede">{about.paragraph1}</p>
          <p className="st-muted">{about.paragraph2}</p>
        </div>
      </div>
    </section>
  )
}

export default function Home({ t, lang, setLang }) {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useSmoothScroll()
  useReveal()

  // Links such as /#contact from sub-pages land here.
  useEffect(() => {
    const id = window.location.hash
    if (!id) return
    const timer = setTimeout(() => document.querySelector(id)?.scrollIntoView(), 50)
    return () => clearTimeout(timer)
  }, [])

  const h = t.home
  const services = siteServices(t)

  return (
    <div className="st">
      <div id="st-top-sentinel" className="st-sentinel" aria-hidden="true" />
      <Nav t={h.nav} services={services} lang={lang} setLang={setLang} />
      <main>
        <Hero t={h} />
        <Work t={h} lang={lang} />
        <Offer t={h} web={t.webSolution} />
        <Services t={h} services={services} />
        <Process p={t.process} />
        <About t={h} about={t.about} />
      </main>
      <Contact t={h} />
      <Footer t={h} services={services} footer={t.footer} lang={lang} setLang={setLang} />
    </div>
  )
}
