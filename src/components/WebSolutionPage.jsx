import { FORM_ID, scrollToId, sentence } from '../home/siteUtils'
import { Arrow } from '../home/site'
import studioDesk from '../assets/work/studio-desk.webp'
import { SketchSection } from './SketchPage'
import { PricingCards } from './PricingPage'
import { SubPage, PageHead, Section, Rows, Promises, Compare, FounderNote, GuideLinks } from '../home/page'

const PRICING = 'pricing'

// The buttons that ask for a sketch scroll to the form further down the page.
function ToForm({ className, children }) {
  return (
    <a
      className={className}
      href={`#${FORM_ID}`}
      onClick={(e) => {
        e.preventDefault()
        scrollToId(`#${FORM_ID}`)
      }}
    >
      {children}
      <Arrow />
    </a>
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
        <FounderNote f={t.founder} quote={t.founder.web} />
      </PageHead>

      <Section label={sentence(w.includedLabel)} title={w.includedTitle}>
        <Rows items={w.included.map((x) => ({ title: x.title, body: x.desc }))} />
      </Section>

      <section className="st-section" id={PRICING}>
        <div className="st-wrap">
          <PricingCards
            lang={lang}
            more
            head={
              <>
                <p className="st-label">{sentence(w.pricingLabel)}</p>
                <h2 className="st-section-title">{w.pricingTitle}</h2>
              </>
            }
          />
        </div>
      </section>

      <SketchSection s={t.sketch} />

      <Compare w={w} />

      <Promises p={t.promises} />

      <Section label={w.faqLabel} title={w.faqTitle}>
        <Rows items={w.faq.map((x) => ({ title: x.q, body: x.a }))} />
      </Section>

      <GuideLinks g={t.guides} lang={lang} />
    </SubPage>
  )
}
