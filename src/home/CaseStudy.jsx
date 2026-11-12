import { sentence } from './siteUtils'
import { OutArrow } from './site'
import { SubPage, PageHead, PageMedia, Section, RuleList } from './page'

// ─── A project case ──────────────────────────────────────────────────────────
// The head (name, line, place, a link to the live site if there is one), a
// wide image, then the project and what was done, beside its label. A case
// with more to show passes it as `figures` (beside the list of work) and
// `children` (sections after the project). `wholeImage` shows the image
// uncropped, for screens that must not lose their edges; `headMedia` puts a
// portrait image beside the title instead of the wide one under it.
export default function CaseStudy({ t, lang, setLang, copy, site, image, imageAlt, wholeImage = false, headMedia, figures, children }) {
  return (
    <SubPage
      t={t}
      lang={lang}
      setLang={setLang}
      contact={{ label: sentence(copy.ctaLabel), title: copy.ctaTitle, body: copy.ctaBody }}
    >
      <PageHead back={sentence(copy.back)} label={copy.tag} title={copy.title} lede={copy.subtitle} media={headMedia}>
        <div className="st-page-meta">
          <span>{copy.location}</span>
          {site && (
            <a className="st-link" href={site} target="_blank" rel="noopener noreferrer">
              {copy.visitBtn}
              <OutArrow />
            </a>
          )}
        </div>
      </PageHead>

      {image && <PageMedia src={image} alt={imageAlt || copy.title} whole={wholeImage} />}

      <Section label={sentence(copy.overviewLabel)} title={copy.overviewTitle}>
        <p className="st-lede">{copy.overviewBody}</p>
        <p className="st-label">{sentence(copy.servicesLabel)}</p>
        <RuleList items={copy.services} />
        {figures}
      </Section>

      {children}
    </SubPage>
  )
}
