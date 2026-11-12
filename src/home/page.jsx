import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { siteServices, useSmoothScroll, useReveal, useBackHome } from './siteUtils'
import { Arrow, Nav, Contact, Footer } from './site'
import './pages.css'

// The frame and the building blocks for every page past the homepage: the same
// bar, contact band and footer, the same paper, type and spacing. A page opens
// with a head (the way back, a label, a large title, a line), then runs as
// sections split like the homepage's: the label on the left, the content on the
// right, a rule and the same gap between each.

// ─── The frame ───────────────────────────────────────────────────────────────
// `contact` is the page's own invitation for the dark band ({ label, title,
// body }, the label optional);
// leave it out and the band is not shown.
export function SubPage({ t, lang, setLang, contact, children }) {
  const { pathname } = useLocation()
  const h = t.home
  const services = siteServices(t)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // A new page starts at its top.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  useSmoothScroll()
  useReveal(pathname)

  return (
    <div className="st st-sub">
      <div id="st-top-sentinel" className="st-sentinel" aria-hidden="true" />
      <Nav t={h.nav} services={services} lang={lang} setLang={setLang} />
      <main id="top">{children}</main>
      {contact && <Contact t={h} label={contact.label} title={contact.title} body={contact.body} />}
      <Footer t={h} services={services} footer={t.footer} lang={lang} setLang={setLang} />
    </div>
  )
}

// ─── The way back to the homepage, where the visitor left it ─────────────────
export function BackLink({ children }) {
  const back = useBackHome()
  return (
    <a className="st-back" href="/" onClick={back}>
      <Arrow back />
      {children}
    </a>
  )
}

// ─── Page head ───────────────────────────────────────────────────────────────
// `media` ({ src, alt, position }) puts an image on the right, level with the
// title; the words keep the left column.
export function PageHead({ back, label, title, lede, media, children }) {
  const text = (
    <>
      {label && <p className="st-label">{label}</p>}
      <h1 className="st-page-title">{title}</h1>
      {lede && <p className="st-page-lede">{lede}</p>}
      {children}
    </>
  )
  if (!media) {
    return (
      <header className="st-wrap st-page-head">
        <BackLink>{back}</BackLink>
        {text}
      </header>
    )
  }
  return (
    <header className="st-wrap st-page-head st-page-head--media">
      <BackLink>{back}</BackLink>
      <div className="st-page-head-row">
        <div className="st-page-head-text">{text}</div>
        <figure className="st-page-head-media">
          <img
            src={media.src}
            alt={media.alt}
            style={media.position ? { objectPosition: media.position } : undefined}
          />
        </figure>
      </div>
    </header>
  )
}

// ─── A wide image under the head ────────────────────────────────────────────
// `position` keeps the subject in frame when the image is cropped to the band
// (CSS object-position); `whole` shows it uncropped instead.
export function PageMedia({ src, alt, position, whole = false }) {
  return (
    <div className={`st-wrap st-page-media${whole ? ' st-page-media--whole' : ''}`}>
      <figure>
        <img src={src} alt={alt} style={position ? { objectPosition: position } : undefined} />
      </figure>
    </div>
  )
}

// ─── A section: label (and title) on the left, content on the right ─────────
export function Section({ id, label, title, intro, children }) {
  return (
    <section className="st-section" id={id}>
      <div className="st-wrap st-split">
        <div className="st-section-side">
          {label && <p className="st-label">{label}</p>}
          {title && <h2 className="st-section-title">{title}</h2>}
          {intro && <p className="st-section-intro">{intro}</p>}
        </div>
        <div className="st-section-body">{children}</div>
      </div>
    </section>
  )
}

// ─── A list of short items between rules, one or two columns ─────────────────
export function RuleList({ items, cols = 2 }) {
  return (
    <ul className={`st-rules${cols === 1 ? ' st-rules--one' : ''}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

// ─── Rows of a title and a text, like the homepage's services ────────────────
// `numbered` counts them off (01, 02 …) in a narrow first column.
export function Rows({ items, numbered = false }) {
  return (
    <ul className={numbered ? 'st-steps' : 'st-rows'}>
      {items.map((item) => (
        <li key={item.title}>
          <h3 className="st-row-title">{item.title}</h3>
          <div className="st-row-text">
            {item.body.split('\n\n').map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}

// ─── Not found: the head alone, with the way back ────────────────────────────
export function NotFound({ back, text }) {
  return <PageHead back={back} title={text} />
}
