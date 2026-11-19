import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import samuel from '../assets/work/samuel.webp'
import studioDesk from '../assets/work/studio-desk.webp'
import appPhone from '../assets/work/app-phone-portrait.webp'
import DotGlobe from './DotGlobe'
import { useTheme, inkRgb } from './theme'
import PixelPortrait from './PixelPortrait'
import no20Cover from '../assets/work/cases/no20-tablet.webp'
import sea4youCover from '../assets/work/cases/sea4you-macbook.webp'
import hemmaCover from '../assets/work/hemma/phone-leather.webp'
import { guides } from '../data/guides'
import no20Logo from '../assets/logos/no20.png'
import sea4youLogo from '../assets/logos/sea4you.png'
import hemmaLogo from '../assets/logos/hemma.svg'
import {
  SKETCH_PATH,
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
import { Rows, Promises, Compare, FounderNote } from './page'

// Each project's cover is the hero image from its case page, cropped to the
// card. `focus` keeps the device in frame.
const COVERS = {
  no20: { src: no20Cover, focus: '50% 50%' },
  sea4you: { src: sea4youCover, focus: '50% 56%' },
  hemma: { src: hemmaCover, focus: '50% 52%' },
}

// ─── Hero: the sentence and the offer on the left, the dot globe on the right ─
function Hero({ t, founder }) {
  const theme = useTheme()
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
          <DotGlobe color={inkRgb(theme)} />
        </div>
      </div>
      <Studio t={t} founder={founder} />
    </section>
  )
}

// ─── The studio: what happens here, beside the desk it happens at ────────────
function Studio({ t, founder }) {
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
        <FounderNote f={founder} quote={founder.home} />
      </div>
    </div>
  )
}

// ─── Work: a stack of case cards ─────────────────────────────────────────────
// Each project is a dark card, text on the left and its hero
// image on the right. While the section scrolls past, the cards stay put and
// each new one slides up over the last; the ones beneath step back a little,
// so their edges show below. Without motion (or before the script runs) the
// cards simply follow one another down the page.

// Each card carries the project's logo, white on the black card. NO20's file
// is black, so it is turned white; Hemma's mark is a lone H, so its name
// follows it.
const LOGOS = {
  no20: { src: no20Logo, h: 22, invert: true },
  sea4you: { src: sea4youLogo, h: 21 },
  hemma: { src: hemmaLogo, h: 20, named: true },
}

// Client cases have a page here; own products link out to their case study.
function CaseLink({ c, className, children, ...rest }) {
  if (c.href) {
    return (
      <a className={className} href={c.href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    )
  }
  return (
    <Link className={className} to={`/projekt/${c.slug}`} onClick={rememberScroll} {...rest}>
      {children}
    </Link>
  )
}

// How far each card beneath the top one steps down and shrinks.
const PEEK = 14
const SHRINK = 0.02

function Work({ t }) {
  const stackRef = useRef(null)
  const cursorRef = useRef(null)
  const [stacked, setStacked] = useState(false)
  const n = t.cases.length

  // Drive the stack from the scroll position: no React renders, just the
  // transforms on each card, once per frame.
  useEffect(() => {
    const stack = stackRef.current
    if (!stack || prefersReducedMotion()) return
    setStacked(true)
    const cards = [...stack.querySelectorAll('.st-case')]
    let raf = 0
    const update = () => {
      raf = 0
      // The stage sticks at `top` until the section runs out under it; the
      // cards are all in a little before that, so the last one rests a moment.
      const stage = stack.firstElementChild
      const stickAt = parseFloat(getComputedStyle(stage).top) || 0
      const travel = (stack.offsetHeight - stage.offsetHeight) * 0.85
      const scrolled = stickAt - stack.getBoundingClientRect().top
      const p = Math.min(Math.max(scrolled / Math.max(travel, 1), 0), 1) * (n - 1)
      cards.forEach((card, i) => {
        // How far this card has come in (1 = in place), and how many cards
        // now lie over it.
        const inP = i === 0 ? 1 : Math.min(Math.max(p - (i - 1), 0), 1)
        const depth = Math.max(Math.min(p, n - 1) - i, 0)
        // Cards still to come wait below the screen, not just below the stage.
        const y = (1 - inP) * (window.innerHeight - stickAt)
        card.style.transform = `translate3d(0, ${y + depth * PEEK}px, 0) scale(${1 - depth * SHRINK})`
      })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    // The stage takes its stacked height on the next render; measure after.
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [n])

  // A label follows the pointer over the cards, easing after it, on screens
  // with a mouse.
  useEffect(() => {
    const stack = stackRef.current
    const label = cursorRef.current
    if (!stack || !label || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    let x = 0
    let y = 0
    let tx = 0
    let ty = 0
    let raf = 0
    const still = prefersReducedMotion()
    const tick = () => {
      x += (tx - x) * (still ? 1 : 0.2)
      y += (ty - y) * (still ? 1 : 0.2)
      label.style.transform = `translate3d(${x}px, ${y}px, 0)`
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.3 ? requestAnimationFrame(tick) : 0
    }
    const move = (e) => {
      tx = e.clientX
      ty = e.clientY
      if (!label.classList.contains('is-on')) {
        x = tx
        y = ty
        label.classList.add('is-on')
      }
      if (!raf) raf = requestAnimationFrame(tick)
    }
    const leave = () => label.classList.remove('is-on')
    stack.addEventListener('pointermove', move)
    stack.addEventListener('pointerleave', leave)
    return () => {
      stack.removeEventListener('pointermove', move)
      stack.removeEventListener('pointerleave', leave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="st-work" id="work">
      <div className="st-wrap">
        <div className="st-work-head">
          <p className="st-label">{t.workLabel}</p>
        </div>
        <div
          className={`st-stack${stacked ? ' is-stacked' : ''}`}
          ref={stackRef}
          style={{ '--cases': n }}
        >
          <div className="st-stack-stage">
            {t.cases.map((c, i) => (
              <CaseLink
                key={c.slug}
                c={c}
                className="st-case"
                style={{ zIndex: i + 1 }}
              >
                <span className="st-case-text">
                  <span className="st-case-top">
                    <span className="st-case-name">
                      <img
                        src={LOGOS[c.slug].src}
                        alt={c.name}
                        height={LOGOS[c.slug].h}
                        className={LOGOS[c.slug].invert ? 'is-invert' : undefined}
                        style={{ height: LOGOS[c.slug].h }}
                      />
                      {LOGOS[c.slug].named && <span aria-hidden="true">{c.name}</span>}
                    </span>
                    <span className="st-case-num">
                      {String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
                    </span>
                  </span>
                  <span className="st-case-body">
                    <span className="st-case-rule" aria-hidden="true" />
                    <span className="st-case-title">{c.headline}</span>
                    <span className="st-case-line">{c.line}</span>
                    <span className="st-case-meta">{c.tag}</span>
                    <span className="st-case-go">
                      {t.viewCase}
                      <Arrow />
                    </span>
                  </span>
                </span>
                <span className="st-case-media">
                  <img
                    src={COVERS[c.slug].src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: COVERS[c.slug].focus }}
                  />
                </span>
              </CaseLink>
            ))}
          </div>
        </div>
      </div>
      <span className="st-case-cursor" ref={cursorRef} aria-hidden="true">
        <span>
          {t.workCursor}
          <Arrow />
        </span>
      </span>
    </section>
  )
}

// ─── Offer: why a subscription, in three numbered reasons ────────────────────
// The prices in short beside the reasons; the full plan (what is included) is
// on the Webbutveckling page, one click away.
function Offer({ t, web, sketch }) {
  return (
    <section className="st-offer" id="offer">
      <div className="st-wrap st-split">
        <div className="st-offer-side">
          <p className="st-label">{sentence(web.valueLabel)}</p>
          <h2 className="st-title">{web.valueTitle}</h2>
          <p className="st-muted">{web.valueSubtitle}</p>
          <dl className="st-offer-prices">
            {web.valuePrices.map((x) => (
              <div key={x.label}>
                <dt>{x.label}</dt>
                <dd>{x.price}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="st-offer-body">
          <Rows numbered items={web.valuePoints.map((x) => ({ title: x.title, body: x.desc }))} />
          <div className="st-offer-actions">
            <Link className="st-btn" to="/webbutveckling" onClick={rememberScroll}>
              {t.offerMore}
              <Arrow />
            </Link>
            <Link className="st-link" to={SKETCH_PATH} onClick={rememberScroll}>
              {sketch.cta}
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
              {step.when && <p className="st-process-when">{step.when}</p>}
              <p>{step.desc}</p>
            </li>
          ))}
        </ol>
        <Link className="st-link st-process-next" to={SKETCH_PATH} onClick={rememberScroll}>
          {p.cta}
          <Arrow />
        </Link>
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

// ─── Guides: three cards side by side, for whoever wants to read up ──────────
function Guides({ g, lang }) {
  return (
    <section className="st-home-guides" id="guides">
      <div className="st-wrap">
        <div className="st-home-guides-head">
          <div>
            <p className="st-label">{g.moreLabel}</p>
            <h2 className="st-section-title">{g.moreTitle}</h2>
          </div>
          <Link className="st-link" to="/guider" onClick={rememberScroll}>
            {g.all}
            <Arrow />
          </Link>
        </div>
        <ul className="st-guide-cards">
          {guides.slice(0, 3).map((x, i) => (
            <li key={x.slug}>
              <Link to={`/guider/${x.slug}`} onClick={rememberScroll}>
                <span className="st-guide-card-top">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <span>{g.minutes(x.minutes)}</span>
                </span>
                <span className="st-guide-card-title">{x[lang].title}</span>
                <span className="st-guide-card-lede">{x[lang].lede}</span>
                <span className="st-guide-card-go">
                  <span>{g.read}</span>
                  <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
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
      <Nav t={h.nav} sketch={t.sketch} services={services} lang={lang} setLang={setLang} />
      <main>
        <Hero t={h} founder={t.founder} />
        <Work t={h} />
        <Offer t={h} web={t.webSolution} sketch={t.sketch} />
        <Compare w={t.webSolution} />
        <Services t={h} services={services} />
        <Process p={t.process} />
        <Promises p={t.promises} />
        <About t={h} about={t.about} />
        <Guides g={t.guides} lang={lang} />
      </main>
      <Contact t={h} sketch={t.sketch} />
      <Footer t={h} services={services} footer={t.footer} lang={lang} setLang={setLang} />
    </div>
  )
}
