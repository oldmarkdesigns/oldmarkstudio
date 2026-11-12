import { EMAIL, scrollToId, sentence } from '../home/siteUtils'
import { Arrow } from '../home/site'
import studioDesk from '../assets/work/studio-desk.webp'
import { SubPage, PageHead, Section, RuleList, Rows } from '../home/page'

const PRICING = 'pricing'

// ─── An offer: name, terms, what it holds, and the way to ask for it ─────────
function Plan({ offer, cta, ghost = false }) {
  return (
    <div className="st-plan">
      <h3 className="st-plan-name">{offer.name}</h3>
      <p className="st-plan-badge">{offer.badge}</p>
      {offer.priceStatement && <p className="st-plan-price">{offer.priceStatement}</p>}
      <p>{offer.desc}</p>
      <RuleList items={offer.features} cols={1} />
      <a
        className={`st-btn${ghost ? ' st-btn--ghost' : ''}`}
        href={`mailto:${EMAIL}?subject=${encodeURIComponent(offer.name)}`}
      >
        {cta}
        <Arrow />
      </a>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function WebSolutionPage({ t, lang = 'sv', setLang }) {
  const w = t.webSolution
  const h = t.home

  return (
    <SubPage t={t} lang={lang} setLang={setLang} contact={{ title: w.ctaTitle, body: w.ctaBody }}>
      <PageHead
        back={sentence(w.back)}
        label={w.tag}
        title={w.title}
        lede={w.subtitle}
        media={{ src: studioDesk, alt: h.studioImageAlt }}
      >
        <p className="st-muted">{w.intro}</p>
        <div className="st-actions st-page-meta">
          <a
            className="st-link"
            href={`#${PRICING}`}
            onClick={(e) => {
              e.preventDefault()
              scrollToId(`#${PRICING}`)
            }}
          >
            {w.pricingTeaserCta}
            <Arrow />
          </a>
        </div>
      </PageHead>

      <Section label={sentence(w.includedLabel)} title={w.includedTitle}>
        <Rows items={w.included.map((x) => ({ title: x.title, body: x.desc }))} />
      </Section>

      {/* The offer in short; the homepage carries the reasons for it. */}
      <Section label={h.offerLabel} title={h.offerTitle}>
        <p className="st-lede">{h.offerBody}</p>
        <RuleList items={w.offer.features} />
        <p className="st-plan-price">{h.offerPrice}</p>
        <p>{h.oneOff}</p>
        <div className="st-actions">
          <a className="st-btn" href={`mailto:${EMAIL}?subject=${encodeURIComponent(h.offerCtaSubject)}`}>
            {h.offerCta}
            <Arrow />
          </a>
        </div>
      </Section>

      <Section id={PRICING} label={sentence(w.pricingLabel)} title={w.pricingTitle} intro={w.pricingSubtitle}>
        <div className="st-plans">
          <Plan offer={w.offer} cta={h.offerCta} />
          <Plan offer={w.oneOff} cta={h.offerCta} ghost />
        </div>
      </Section>
    </SubPage>
  )
}
