import { useParams } from 'react-router-dom'
import { getService } from '../data/services'
import uxDesk from '../assets/work/ux-review-desk.webp'
import prototypePhone from '../assets/work/prototype-phone.webp'
import { SubPage, PageHead, Section, RuleList, Rows, NotFound } from '../home/page'

// Services with a photo beside their title.
const MEDIA = {
  prototyping: {
    src: prototypePhone,
    alt: { sv: 'En hand som håller en telefon med Oldmark Studios webbplats.', en: 'A hand holding a phone showing the Oldmark Studio website.' },
  },
  'ux-granskning': {
    src: uxDesk,
    alt: { sv: 'Glasögon, en kopp kaffe och en laptop på ett skrivbord.', en: 'Glasses, a cup of coffee and a laptop on a desk.' },
  },
}

export default function ServicePage({ t, lang = 'sv', setLang }) {
  const { slug } = useParams()
  const service = getService(slug)
  const isSv = lang === 'sv'
  const back = isSv ? 'Tillbaka' : 'Back'

  if (!service) {
    return (
      <SubPage t={t} lang={lang} setLang={setLang}>
        <NotFound back={back} text={isSv ? 'Tjänst hittades inte.' : 'Service not found.'} />
      </SubPage>
    )
  }

  const s = service[lang]

  return (
    <SubPage
      t={t}
      lang={lang}
      setLang={setLang}
      contact={{
        title: isSv ? 'Redo att börja?' : 'Ready to start?',
        body: isSv ? 'Boka ett kostnadsfritt samtal — vi går igenom ert projekt.' : "Book a free call — we'll walk through your project.",
      }}
    >
      <PageHead
        back={back}
        label={service.tag}
        title={s.title}
        lede={s.tagline}
        media={MEDIA[slug] && { src: MEDIA[slug].src, alt: MEDIA[slug].alt[lang] }}
      />

      <Section label={isSv ? 'Tjänsten' : 'The service'}>
        <p className="st-lede">{s.intro}</p>
        <Rows items={s.sections.map((x) => ({ title: x.heading, body: x.body }))} />
      </Section>

      <Section label={isSv ? 'Leveranser' : 'Deliverables'}>
        <RuleList items={s.deliverables} />
      </Section>
    </SubPage>
  )
}
