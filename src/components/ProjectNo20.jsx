import no20Tablet from '../assets/work/cases/no20-tablet.webp'
import no20Laptop from '../assets/work/cases/no20-laptop.webp'
import no20Phone from '../assets/work/cases/no20-phone.webp'
import { sentence } from '../home/siteUtils'
import { Section } from '../home/page'
import CaseStudy from '../home/CaseStudy'

// The palette, as the site uses it.
const SWATCHES = [
  { hex: '#181817', label: 'Dark' },
  { hex: '#222220', label: 'Charcoal' },
  { hex: '#697A6B', label: 'Sage' },
  { hex: '#8B9C8D', label: 'Sage mid' },
  { hex: '#B6C5B8', label: 'Sage pale' },
  { hex: '#F0E9DF', label: 'Cream' },
]

export default function ProjectNo20({ t, lang = 'sv', setLang }) {
  const isSv = lang === 'sv'

  const copy = {
    back: isSv ? 'TILLBAKA' : 'BACK',
    tag: isSv ? 'Webbdesign · Varumärke · Copywriting' : 'Web design · Brand identity · Copywriting',
    title: 'NO20',
    subtitle: isSv ? 'Ett hem på vattnet.' : 'A home on the water.',
    location: isSv ? 'Stockholms skärgård — est. 2024' : 'Stockholm Archipelago — est. 2024',
    visitBtn: isSv ? 'Besök sajten' : 'Visit the site',
    overviewLabel: isSv ? 'PROJEKTET' : 'THE PROJECT',
    overviewTitle: isSv ? 'Lyx och enkelhet i skärgårdsmiljö' : 'Luxury and simplicity in the archipelago',
    overviewBody: isSv
      ? 'NO20 är ett exklusivt flytande boende beläget i Stockholms skärgård — designat för den som söker en unik kombination av havsnära natur och modern komfort. Ägaren kontaktade oss med en enkel brief: "Skapa något som känns som platsen." Vi tolkade det som en möjlighet att designa ett visuellt språk som är lika stilla och välgjort som boendet självt.'
      : 'NO20 is an exclusive floating home located in the Stockholm Archipelago — designed for those seeking a unique combination of maritime nature and modern comfort. The owner came to us with a simple brief: "Create something that feels like the place." We interpreted that as an opportunity to design a visual language as still and considered as the home itself.',
    servicesLabel: isSv ? 'VAD VI GJORDE' : 'WHAT WE DID',
    services: isSv
      ? ['Varumärkesidentitet', 'Webbdesign & -utveckling', 'Copywriting (SV + EN)', 'Fotoriktlinjer', 'Typografisystem']
      : ['Brand identity', 'Web design & development', 'Copywriting (SV + EN)', 'Photography guidelines', 'Typography system'],
    metricsLabel: isSv ? 'RESULTAT' : 'RESULTS',
    metrics: [
      { val: '3', unit: isSv ? 'veckor' : 'weeks', label: isSv ? 'Från brief till lansering' : 'From brief to launch' },
      { val: '2', unit: isSv ? 'språk' : 'languages', label: isSv ? 'Svenska och engelska' : 'Swedish and English' },
    ],
    designLabel: isSv ? 'DESIGN' : 'DESIGN',
    designTitle: isSv ? 'Lugn. Natt. Vatten.' : 'Still. Night. Water.',
    designBody: isSv
      ? 'Paletten är hämtad direkt från platsen: mörkgrön skog, nattsvart vatten och den dämpade gröna tonen hos vass och enris. Typografin mixar klassisk serif för rubriker med luftig sans-serif för brödtext — ett kontrast som speglar boendet självt: historisk form med modern komfort.'
      : 'The palette is drawn directly from the location: dark green forest, night-black water and the muted green tone of reeds and juniper. The typography mixes classical serif for headlines with airy sans-serif for body — a contrast that mirrors the home itself: historic form with modern comfort.',
    mobileLabel: isSv ? 'MOBIL' : 'MOBILE',
    mobileTitle: isSv ? 'Fungerar lika bra på alla enheter' : 'Works equally well on all devices',
    mobileBody: isSv
      ? 'Ungefär hälften av besökarna kommer via mobil. Webbplatsen är byggd mobile-first med full responsivitet, snabb laddningstid och en touch-optimerad navigering.'
      : 'Around half of all visitors arrive on mobile. The site is built mobile-first with full responsiveness, fast load times, and touch-optimised navigation.',
    quoteText: isSv
      ? '"Samuel och teamet förstod platsen direkt. Resultatet är en webbplats som faktiskt känns som att vara där."'
      : '"Samuel and the team understood the place immediately. The result is a website that actually feels like being there."',
    quoteSource: isSv ? '— Ägaren, NO20' : '— The owner, NO20',
    ctaLabel: isSv ? 'NÄSTA STEG' : 'NEXT STEP',
    ctaTitle: isSv ? 'Har du ett liknande projekt?' : 'Have a similar project?',
    ctaBody: isSv
      ? 'Vi jobbar med varumärken och produkter som förtjänar mer än ett generiskt digitalt uttryck. Hör av dig.'
      : 'We work with brands and products that deserve more than a generic digital expression. Get in touch.',
  }
  const figures = (
    <>
      <p className="st-label">{sentence(copy.metricsLabel)}</p>
      <ul className="st-figures">
        {copy.metrics.map((m) => (
          <li key={m.label}>
            <strong>
              {m.val}
              <span>{m.unit}</span>
            </strong>
            <span>{m.label}</span>
          </li>
        ))}
      </ul>
    </>
  )

  return (
    <CaseStudy
      t={t}
      lang={lang}
      setLang={setLang}
      copy={copy}
      site="https://no20.se"
      headMedia={{ src: no20Tablet, alt: isSv ? 'NO20:s webbplats på en surfplatta.' : 'The NO20 website on a tablet.' }}
      imageAlt={isSv ? 'NO20 — Ett hem på vattnet' : 'NO20 — A home on the water'}
      figures={figures}
    >
      <Section label={sentence(copy.designLabel)} title={copy.designTitle}>
        <p>{copy.designBody}</p>
        <figure className="st-shot st-shot--portrait">
          <img src={no20Laptop} alt={isSv ? 'NO20:s webbplats på en laptop.' : 'The NO20 website on a laptop.'} loading="lazy" decoding="async" />
        </figure>
        <ul className="st-swatches">
          {SWATCHES.map((c) => (
            <li key={c.hex}>
              <span style={{ '--swatch': c.hex }} aria-hidden="true" />
              {c.label}
            </li>
          ))}
        </ul>
      </Section>

      <Section label={sentence(copy.mobileLabel)} title={copy.mobileTitle}>
        <p>{copy.mobileBody}</p>
        <figure className="st-shot st-shot--portrait">
          <img src={no20Phone} alt={isSv ? 'NO20:s webbplats i en telefon.' : 'The NO20 website on a phone.'} loading="lazy" decoding="async" />
        </figure>
      </Section>

      <Section label={isSv ? 'Kunden' : 'The client'}>
        <blockquote className="st-quote">
          <p>{copy.quoteText}</p>
          <footer>{copy.quoteSource}</footer>
        </blockquote>
      </Section>
    </CaseStudy>
  )
}
