import macbook from '../assets/work/hemma/macbook.webp'
import phoneSun from '../assets/work/hemma/phone-sun.webp'
import phoneLeather from '../assets/work/hemma/phone-leather.webp'
import { Section } from '../home/page'
import CaseStudy from '../home/CaseStudy'

// Hemma: the studio's own iPhone app, and the website that goes with it. Short,
// like the other cases: what it is in a line or two, what was made, and the
// work itself. The app is in development, and the page says so.

export default function HemmaPage({ t, lang = 'sv', setLang }) {
  const isSv = lang === 'sv'

  const copy = {
    back: isSv ? 'Tillbaka' : 'Back',
    tag: isSv ? 'Egen produkt · App och webb' : 'Own product · App and web',
    title: 'Hemma',
    subtitle: isSv
      ? 'Allt om ditt hem, på ett ställe.'
      : 'Everything about your home, in one place.',
    location: isSv ? 'Sedan oktober 2026 · Under utveckling' : 'Since October 2026 · In development',
    visitBtn: isSv ? 'Besök webbplatsen' : 'Visit the website',
    overviewLabel: isSv ? 'Projektet' : 'The project',
    overviewTitle: isSv ? 'En app och en webbplats' : 'An app and a website',
    overviewBody: isSv
      ? 'Hemma är studions egen iPhone-app för den som äger hus eller bostadsrätt. Den samlar dokument, en logg över det som gjorts och vad det kostat. Till appen hör en webbplats som visar vad den gör. Appen är under utveckling och inte släppt än.'
      : 'Hemma is the studio’s own iPhone app for people who own a house or an apartment. It keeps documents, a log of what has been done and what it cost. The app comes with a website that shows what it does. The app is in development and not released yet.',
    servicesLabel: isSv ? 'Vad jag gjorde' : 'What I did',
    services: isSv
      ? ['Idé och scope', 'Design av appen', 'Utveckling av iPhone-appen', 'Design och utveckling av webbplatsen']
      : ['Idea and scope', 'App design', 'iPhone app development', 'Website design and development'],
    ctaLabel: isSv ? 'Nästa steg' : 'Next step',
    ctaTitle: isSv ? 'Har du ett liknande projekt?' : 'Have a similar project?',
    ctaBody: isSv
      ? 'Vi jobbar med varumärken och produkter som förtjänar mer än ett generiskt digitalt uttryck. Hör av dig.'
      : 'We work with brands and products that deserve more than a generic digital expression. Get in touch.',
  }

  return (
    <CaseStudy
      t={t}
      lang={lang}
      setLang={setLang}
      copy={copy}
      site="https://hemmaweb.vercel.app/"
      headMedia={{
        src: macbook,
        alt: isSv ? 'Hemmas webbplats på en laptop.' : 'The Hemma website on a laptop.',
      }}
    >
      <Section label={isSv ? 'Appen' : 'The app'} title={isSv ? 'Hem, Dokument och Logg' : 'Home, Documents and Log'}>
        <p>
          {isSv
            ? 'En översikt över hemmet och vad det kostat, ett arkiv för bilder, kvitton och intyg, och en logg över allt som gjorts.'
            : 'An overview of the home and what it has cost, an archive for photos, receipts and certificates, and a log of everything that has been done.'}
        </p>
        <div className="st-stills">
          <figure>
            <img
              src={phoneSun}
              alt={isSv ? 'Hemmas översikt i en telefon.' : 'The Hemma overview on a phone.'}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure>
            <img
              src={phoneLeather}
              alt={isSv ? 'Hemmas dokument i en telefon.' : 'Hemma’s documents on a phone.'}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </Section>
    </CaseStudy>
  )
}
