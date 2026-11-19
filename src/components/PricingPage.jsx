import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { pricing } from '../data/pricing'
import { EMAIL, FORM_ID, SKETCH_PATH, scrollToId } from '../home/siteUtils'
import { Arrow } from '../home/site'
import { SubPage, PageHead, Section, RuleList, GuideLinks } from '../home/page'
import { SketchSection } from './SketchPage'

export const PRICING_PATH = '/priser'

// The way to ask for a sketch: the form on this page when it has one (the web
// development page), otherwise the form on the skiss page.
function SketchLink({ className, children }) {
  return (
    <Link
      className={className}
      to={`${SKETCH_PATH}#${FORM_ID}`}
      onClick={(e) => {
        if (!document.getElementById(FORM_ID)) return
        e.preventDefault()
        scrollToId(`#${FORM_ID}`)
      }}
    >
      {children}
    </Link>
  )
}

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

// ─── The cards: Liten, Lagom and Engång, with the contract toggle ────────────
// Used on the pricing page and the web development page. `head` is the title
// row beside the toggle; `more` links on to the full pricing page.
export function PricingCards({ lang = 'sv', head, more = false }) {
  const p = pricing[lang] || pricing.sv
  const [term, setTerm] = useState('bound')

  // A pill slides behind the chosen option. It is measured from the buttons,
  // so it fits whatever the labels say; until then the chosen button carries
  // its own background (and the server-rendered page looks the same).
  const toggleRef = useRef(null)
  const [pill, setPill] = useState(null)
  useEffect(() => {
    const measure = () => {
      const btn = toggleRef.current?.querySelector('[aria-checked="true"]')
      if (btn) setPill({ x: btn.offsetLeft, w: btn.offsetWidth })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [term, lang])

  return (
    <div className="pr">
      <div className="pr-head">
        <div className="pr-head-text">{head}</div>
        <div
          className={`pr-toggle${pill ? ' is-ready' : ''}`}
          role="radiogroup"
          aria-label={p.toggleLabel}
          ref={toggleRef}
          style={pill ? { '--pill-x': `${pill.x}px`, '--pill-w': `${pill.w}px` } : undefined}
        >
          <span className="pr-toggle-pill" aria-hidden="true" />
          {p.terms.map((x) => (
            <button
              key={x.id}
              type="button"
              role="radio"
              aria-checked={term === x.id}
              className="pr-toggle-btn"
              onClick={() => setTerm(x.id)}
            >
              {x.label}
            </button>
          ))}
        </div>
      </div>

      <ul className="pr-cards">
        {p.packages.map((pk) => (
          <li key={pk.id} className={`pr-card${pk.popular ? ' pr-card--pop' : ''}`}>
            <div className="pr-card-top">
              <h3 className="pr-name">{pk.name}</h3>
              {pk.popular && <span className="pr-badge">{p.popular}</span>}
            </div>
            <p className="pr-for">{pk.for}</p>

            <p className="pr-price">
              <span className="pr-amount">{pk.price}</span>
              <span className="pr-unit">{pk.oneOff ? pk.unit : p.perMonth}</span>
            </p>
            <p className="pr-fee">{pk.oneOff ? pk.note : term === 'bound' ? p.noFee : p.fee(pk.fee)}</p>

            <p className="pr-lead">
              <Check />
              {pk.lead}
            </p>
            <ul className="pr-items">
              {pk.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <SketchLink className={`st-btn pr-cta${pk.popular ? '' : ' st-btn--ghost'}`}>
              {p.cta}
              <Arrow />
            </SketchLink>
          </li>
        ))}
      </ul>

      <div className="pr-foot">
        <p>
          <strong>{p.hourly.title}</strong> {p.hourly.body}{' '}
          <a className="st-link" href={`mailto:${EMAIL}?subject=${encodeURIComponent(p.hourly.subject)}`}>
            {p.hourly.cta}
          </a>
        </p>
        <p className="st-muted">{p.vat}</p>
        {more && (
          <Link className="st-link" to={PRICING_PATH}>
            {p.allLink}
            <Arrow />
          </Link>
        )}
      </div>
    </div>
  )
}

// ─── Side by side: every package against every row, grouped ──────────────────
function Cell({ v, p }) {
  if (v === true)
    return (
      <span className="pr-yes" aria-label={p.yes}>
        <Check />
      </span>
    )
  if (v === false)
    return (
      <span className="pr-no" aria-label={p.no}>
        –
      </span>
    )
  return v
}

export function PricingCompare({ lang = 'sv' }) {
  const p = pricing[lang] || pricing.sv
  return (
    <section className="st-section">
      <div className="st-wrap">
        <div className="pr-compare-head">
          <div>
            <p className="st-label">{p.compareLabel}</p>
            <h2 className="st-section-title">{p.compareTitle}</h2>
          </div>
          <p className="st-section-intro">{p.compareIntro}</p>
        </div>
        <div className="pr-table-wrap">
          <table className="pr-table">
            <thead>
              <tr>
                <td />
                {p.packages.map((pk) => (
                  <th key={pk.id} scope="col" className={pk.popular ? 'is-pop' : undefined}>
                    {pk.popular && <span className="pr-badge">{p.popular}</span>}
                    <span className="pr-table-name">{pk.name}</span>
                    <span className="pr-table-price">
                      {pk.price} <small>{pk.oneOff ? pk.unit : p.perMonth}</small>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            {p.compareGroups.map((g) => (
              <tbody key={g.title}>
                <tr className="pr-group">
                  <th scope="colgroup" colSpan={1}>
                    {g.title}
                  </th>
                  {p.packages.map((pk) => (
                    <td key={pk.id} className={pk.popular ? 'is-pop' : undefined} />
                  ))}
                </tr>
                {g.rows.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    {r.cells.map((c, i) => (
                      <td key={i} className={p.packages[i].popular ? 'is-pop' : undefined}>
                        <Cell v={c} p={p} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
        <p className="st-muted pr-table-vat">{p.vat}</p>
      </div>
    </section>
  )
}

// ─── The page ─────────────────────────────────────────────────────────────────
export default function PricingPage({ t, lang = 'sv', setLang }) {
  const p = pricing[lang] || pricing.sv

  return (
    <SubPage t={t} lang={lang} setLang={setLang} contact={{ title: p.contactTitle, body: p.contactBody, cta: p.contactCta, compact: true }}>
      <PageHead label={p.label} title={p.title} lede={p.lede} />

      <section className="st-section pr-section">
        <div className="st-wrap">
          <PricingCards lang={lang} />
        </div>
      </section>

      <SketchSection
        s={{
          ...t.sketch,
          ...p.form,
          fields: { ...t.sketch.fields, ...p.form.fields },
          mail: { ...t.sketch.mail, ...p.form.mail },
        }}
      />

      <Section label={p.allLabel} title={p.allTitle} intro={p.allIntro}>
        <RuleList items={p.all} />
        <p className="st-muted">{p.monthlyAll}</p>
      </Section>

      <PricingCompare lang={lang} />

      <Section label={p.addonsLabel} title={p.addonsTitle} intro={p.addonsIntro}>
        <ul className="pr-addons">
          {p.addons.map((a) => (
            <li key={a.title}>
              <div className="pr-addon-top">
                <h3 className="st-row-title">{a.title}</h3>
                <p className="pr-addon-price">
                  {a.price} <span>{a.unit}</span>
                </p>
              </div>
              <p>{a.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section label={p.smallLabel} title={p.smallTitle}>
        <p className="st-lede">{p.smallBody}</p>
      </Section>

      <Section label={p.faqLabel} title={p.faqTitle}>
        <ul className="st-rows">
          {p.faq.map((x) => (
            <li key={x.q}>
              <h3 className="st-row-title">{x.q}</h3>
              <div className="st-row-text">
                <p>{x.a}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <GuideLinks g={t.guides} lang={lang} />
    </SubPage>
  )
}
