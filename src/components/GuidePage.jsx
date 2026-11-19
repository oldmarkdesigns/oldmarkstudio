import { Link, useParams } from 'react-router-dom'
import { guides, getGuide } from '../data/guides'
import { Arrow } from '../home/site'
import { SubPage, PageHead, Section, RuleList, Rows, NotFound, GuideLinks } from '../home/page'

// Guides are optional reading. A guide opens with three lines "in short", so
// a reader can stop there; the sections below explain why. The contact band
// at the end offers the free sketch, the same as the rest of the site.

const contactFor = (g) => ({ title: g.contactTitle, body: g.contactBody })

// ─── /guider: every guide in a plain list ────────────────────────────────────
export function GuidesIndex({ t, lang = 'sv', setLang }) {
  const g = t.guides
  return (
    <SubPage t={t} lang={lang} setLang={setLang} contact={contactFor(g)}>
      <PageHead back={g.back} label={g.label} title={g.indexTitle} lede={g.indexLede} />
      <section className="st-section">
        <div className="st-wrap">
          <ul className="st-service-list st-guide-list st-guide-list--wide">
            {guides.map((x) => (
              <li key={x.slug}>
                <Link to={`/guider/${x.slug}`}>
                  <span className="st-service-name">{x[lang].title}</span>
                  <span className="st-service-desc">
                    {x[lang].lede}
                    <span className="st-guide-time">{g.minutes(x.minutes)}</span>
                  </span>
                  <Arrow size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SubPage>
  )
}

// ─── /guider/:slug: one guide ────────────────────────────────────────────────
export default function GuidePage({ t, lang = 'sv', setLang }) {
  const { slug } = useParams()
  const guide = getGuide(slug)
  const g = t.guides

  if (!guide) {
    return (
      <SubPage t={t} lang={lang} setLang={setLang}>
        <NotFound back={g.back} text={lang === 'sv' ? 'Guiden finns inte.' : 'Guide not found.'} />
      </SubPage>
    )
  }

  const x = guide[lang]

  return (
    <SubPage t={t} lang={lang} setLang={setLang} contact={contactFor(g)}>
      <PageHead back={g.back} label={`${g.label} · ${g.minutes(guide.minutes)}`} title={x.title} lede={x.lede} />

      <Section label={g.summaryLabel} intro={g.summaryNote}>
        <RuleList items={x.summary} cols={1} />
      </Section>

      <Section label={g.bodyLabel}>
        <Rows numbered items={x.sections.map((s) => ({ title: s.heading, body: s.body }))} />
      </Section>

      <GuideLinks g={g} lang={lang} exclude={guide.slug} title={g.otherTitle} intro={null} />
    </SubPage>
  )
}
