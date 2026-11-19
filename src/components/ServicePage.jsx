import { Link } from 'react-router-dom'
import seoImage from '../assets/work/cases/sea4you-macbook.webp'
import aiImage from '../assets/work/cases/no20-tablet.webp'
import supportImage from '../assets/work/ux-review-desk.webp'
import { serviceBySlug } from '../data/services'
import { FORM_ID, SKETCH_PATH } from '../home/siteUtils'
import { Arrow } from '../home/site'
import { SubPage, PageHead, Section, RuleList, Rows, NotFound } from '../home/page'

// One layout for the services without a page of their own: SEO and content,
// AI automation, and hosting and support. The copy is in src/data/services.js.
const IMAGES = { seo: seoImage, ai: aiImage, support: supportImage }

export default function ServicePage({ t, lang = 'sv', setLang, slug }) {
  const service = serviceBySlug[slug]
  if (!service) {
    return (
      <SubPage t={t} lang={lang} setLang={setLang}>
        <NotFound text={lang === 'sv' ? 'Sidan finns inte.' : 'Page not found.'} />
      </SubPage>
    )
  }
  const c = service[lang] || service.sv

  return (
    <SubPage t={t} lang={lang} setLang={setLang} contact={{ title: c.contactTitle, body: c.contactBody }}>
      <PageHead label={c.tag} title={c.title} lede={c.lede} media={{ src: IMAGES[service.image], alt: c.imageAlt }}>
        <p className="st-muted">{c.intro}</p>
        <div className="st-actions st-page-meta">
          <Link className="st-btn" to={`${SKETCH_PATH}#${FORM_ID}`}>
            {t.sketch.navCta}
            <Arrow />
          </Link>
        </div>
      </PageHead>

      <Section label={c.whyLabel} title={c.whyTitle}>
        <Rows items={c.why} />
      </Section>

      <Section label={c.includedLabel} title={c.includedTitle}>
        <RuleList items={c.included} />
      </Section>

      <Section label={c.processLabel} title={c.processTitle}>
        <Rows numbered items={c.process} />
      </Section>

      <Section label={c.priceLabel} title={c.priceTitle}>
        <p className="st-lede">{c.priceBody}</p>
        <p className="st-muted">{lang === 'sv' ? 'Alla priser är exklusive moms.' : 'All prices exclude VAT.'}</p>
      </Section>

      <Section label={lang === 'sv' ? 'Vanliga frågor' : 'Questions'} title={lang === 'sv' ? 'Bra att veta' : 'Good to know'}>
        <Rows items={c.faq.map((x) => ({ title: x.q, body: x.a }))} />
      </Section>
    </SubPage>
  )
}
