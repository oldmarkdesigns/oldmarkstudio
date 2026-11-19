import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import founderPhoto from '../assets/work/samuel-bw-sm.webp'
import { guides } from '../data/guides'
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
      <Nav t={h.nav} sketch={t.sketch} services={services} lang={lang} setLang={setLang} />
      <main id="top">{children}</main>
      {contact && (
        <Contact
          t={h}
          label={contact.label}
          title={contact.title}
          body={contact.body}
          sketch={contact.noSketch ? null : t.sketch}
        />
      )}
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
// `aside` goes under the title on the left, such as a founder note.
export function Section({ id, label, title, intro, aside, children }) {
  return (
    <section className="st-section" id={id}>
      <div className="st-wrap st-split">
        <div className="st-section-side">
          {label && <p className="st-label">{label}</p>}
          {title && <h2 className="st-section-title">{title}</h2>}
          {intro && <p className="st-section-intro">{intro}</p>}
          {aside}
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

// ─── Promises: what every client can count on, as numbered rows ──────────────
export function Promises({ p, id = 'promises' }) {
  return (
    <Section id={id} label={p.label} title={p.title}>
      <Rows numbered items={p.items} />
    </Section>
  )
}

// ─── Comparison: three ways to get a website, the studio's column leading ────
// A table on wide screens; below 700 px each row becomes a small block with
// the column names written out beside the values.
export function Compare({ w }) {
  const last = w.compareCols.length - 1
  return (
    <Section label={w.compareLabel} title={w.compareTitle} intro={w.compareIntro}>
      <table className="st-compare">
        <thead>
          <tr>
            <td />
            {w.compareCols.map((col, i) => (
              <th key={col} scope="col" className={i === last ? 'is-ours' : undefined}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {w.compareRows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              {row.cells.map((cell, i) => (
                <td key={w.compareCols[i]} data-col={w.compareCols[i]} className={i === last ? 'is-ours' : undefined}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  )
}

// ─── Founder note: a small round portrait beside one short line ─────────────
// Sits in a page's hero; each page passes the line that fits it
// (t.founder.sketch, .home, .web).
export function FounderNote({ f, quote }) {
  return (
    <figure className="st-founder">
      <img className="st-founder-photo" src={founderPhoto} alt={f.alt} width="56" height="56" decoding="async" />
      <div className="st-founder-body">
        <blockquote className="st-founder-text">
          <p>{quote}</p>
        </blockquote>
        <figcaption className="st-founder-by">
          {f.name} · <span>{f.role}</span>
        </figcaption>
      </div>
    </figure>
  )
}

// ─── Guides, offered quietly: a short list the visitor can open or skip ──────
// `exclude` leaves out the guide being read; `title` replaces the invitation.
export function GuideLinks({ g, lang, exclude, title, intro }) {
  const list = guides.filter((x) => x.slug !== exclude)
  return (
    <Section label={g.moreLabel} title={title || g.moreTitle} intro={intro === undefined ? g.moreIntro : intro}>
      <ul className="st-service-list st-guide-list">
        {list.map((x) => (
          <li key={x.slug}>
            <Link to={`/guider/${x.slug}`}>
              <span className="st-service-name">{x[lang].title}</span>
              <span className="st-service-desc">{g.minutes(x.minutes)}</span>
              <Arrow size={16} />
            </Link>
          </li>
        ))}
      </ul>
      <Link className="st-link" to="/guider">
        {g.all}
        <Arrow />
      </Link>
    </Section>
  )
}
