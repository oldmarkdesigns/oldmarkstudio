import { Link } from 'react-router-dom'
import appPhone from '../assets/work/app-phone-portrait.webp'
import hemmaOverview from '../assets/work/hemma/overview.webp'
import { Arrow } from '../home/site'
import { SubPage, PageHead, Section, RuleList, Rows } from '../home/page'

// Apputveckling: native iPhone apps, and web-based apps that run in the
// browser. No tools or software are named on the site. What the studio can show
// for it is Hemma, its own app in development; the page says so and claims
// nothing beyond what that project has done.

export default function AppDevPage({ t, lang = 'sv', setLang }) {
  const isSv = lang === 'sv'

  const copy = isSv
    ? {
        back: 'Tillbaka',
        tag: 'iOS · Native · Webb',
        title: 'Apputveckling',
        lede: 'Native iPhone-appar, byggda för telefonen.',
        intro:
          'Jag designar och bygger appar för iOS med Apples eget språk och egna ramverk, utan ett webbramverk emellan. Det ger en app som beter sig som resten av telefonen, med systemets komponenter, gester och tillgänglighet från första skärmen. Ska appen i stället köras i webbläsaren bygger jag den som en webbapp.',
        imageAlt: 'Oldmark Studios webbplats i en iPhone.',
        whyLabel: 'Varför native',
        whyTitle: 'En app som känns som en iPhone',
        offerLabel: 'Vad som ingår',
        webLabel: 'Webbappar',
        webTitle: 'Även i webbläsaren',
        webBody:
          'Ska appen fungera på alla telefoner direkt i webbläsaren, eller höra ihop med en webbplats? Då bygger jag den som en webbaserad app, med samma omsorg om design och tillgänglighet.',
        webStack: ['Fungerar på iPhone, Android och dator', 'Ingen nedladdning från en appbutik', 'Samma design och tillgänglighet', 'Kan dela kod och innehåll med en webbplats'],
        processLabel: 'Arbetssättet',
        processTitle: 'Litet scope, små steg',
        caseLabel: 'I studion',
        caseTitle: 'Hemma',
        caseBody:
          'Studions egen iPhone-app för den som äger hus eller bostadsrätt. Den är byggd helt med Apples egna ramverk, utan tredjepartspaket, och har över 450 enhetstester. Appen är under utveckling och inte släppt än.',
        caseLink: 'Läs om Hemma',
        contactTitle: 'Har du en app-idé?',
        contactBody: 'Skicka ett mejl så tar vi det därifrån.',
      }
    : {
        back: 'Back',
        tag: 'iOS · Native · Web',
        title: 'App development',
        lede: 'Native iPhone apps, built for the phone.',
        intro:
          'I design and build apps for iOS with Apple’s own language and frameworks, with no web framework in between. The result is an app that behaves like the rest of the phone, with the system’s components, gestures and accessibility from the first screen. If the app should run in the browser instead, I build it as a web app.',
        imageAlt: 'The Oldmark Studio website on an iPhone.',
        whyLabel: 'Why native',
        whyTitle: 'An app that feels like an iPhone',
        offerLabel: 'What’s included',
        webLabel: 'Web apps',
        webTitle: 'In the browser, too',
        webBody:
          'Should the app work on every phone straight from the browser, or belong with a website? Then I build it as a web-based app, with the same care for design and accessibility.',
        webStack: ['Works on iPhone, Android and desktop', 'No download from an app store', 'The same design and accessibility', 'Can share code and content with a website'],
        processLabel: 'How I work',
        processTitle: 'A small scope, small steps',
        caseLabel: 'In the studio',
        caseTitle: 'Hemma',
        caseBody:
          'The studio’s own iPhone app for people who own a house or an apartment. It is built entirely with Apple’s own frameworks, with no third-party packages, and has more than 450 unit tests. The app is in development and not released yet.',
        caseLink: 'Read about Hemma',
        contactTitle: 'Have an idea for an app?',
        contactBody: 'Send an email and we’ll take it from there.',
      }

  const why = isSv
    ? [
        { title: 'Beter sig som telefonen', body: 'Systemets navigering, komponenter och gester, så att appen gör det användaren redan förväntar sig.' },
        { title: 'Tillgänglig från start', body: 'Större text, skärmläsare, mindre rörelse och mörkt läge hanteras skärm för skärm, inte i efterhand.' },
        { title: 'Snabb, och på enheten', body: 'Koden körs direkt på telefonen, och data kan stanna där när det är rätt för produkten.' },
        { title: 'Hela plattformen', body: 'Det iOS erbjuder, som notiser, kamera, filer och diagram, med Apples egna ramverk i stället för omvägar.' },
      ]
    : [
        { title: 'Behaves like the phone', body: 'The system’s navigation, components and gestures, so the app does what people already expect.' },
        { title: 'Accessible from the start', body: 'Larger text, screen readers, reduced motion and dark mode are handled screen by screen, not added later.' },
        { title: 'Fast, and on the device', body: 'The code runs on the phone itself, and data can stay there when that is right for the product.' },
        { title: 'The whole platform', body: 'What iOS offers, such as notifications, the camera, files and charts, through Apple’s own frameworks rather than workarounds.' },
      ]

  const included = isSv
    ? ['Scope, flöden och datamodell', 'UX och UI i Apples designspråk', 'Apples egna ramverk', 'Diagram och systemkomponenter', 'Enhetstester', 'Svenska och engelska', 'Större text och skärmläsare', 'Mörkt och ljust läge']
    : ['Scope, flows and data model', 'UX and UI in Apple’s design language', 'Apple’s own frameworks', 'Charts and system components', 'Unit tests', 'Swedish and English', 'Larger text and screen readers', 'Dark and light mode']

  const process = isSv
    ? [
        { title: 'Scope', body: 'Vem appen är för, vad som ingår i första versionen och vad som väntar, och hur datan hänger ihop.' },
        { title: 'Design', body: 'Varje skärm, tillstånd och text, på svenska och engelska, innan koden skrivs.' },
        { title: 'Bygg i små steg', body: 'Appen byggs ett steg i taget, och varje steg prövas innan nästa.' },
        { title: 'Testa', body: 'Enhetstester för logiken, och appen i händerna på riktiga användare innan den släpps.' },
      ]
    : [
        { title: 'Scope', body: 'Who the app is for, what is in the first version and what waits, and how the data fits together.' },
        { title: 'Design', body: 'Every screen, state and word, in Swedish and English, before the code is written.' },
        { title: 'Build in small steps', body: 'The app is built one step at a time, and each step is tried before the next.' },
        { title: 'Test', body: 'Unit tests for the logic, and the app in the hands of real users before it is released.' },
      ]

  return (
    <SubPage t={t} lang={lang} setLang={setLang} contact={{ title: copy.contactTitle, body: copy.contactBody }}>
      <PageHead
        back={copy.back}
        label={copy.tag}
        title={copy.title}
        lede={copy.lede}
        media={{ src: appPhone, alt: copy.imageAlt }}
      >
        <p className="st-muted">{copy.intro}</p>
      </PageHead>

      <Section label={copy.whyLabel} title={copy.whyTitle}>
        <Rows items={why} />
      </Section>

      <Section label={copy.offerLabel}>
        <RuleList items={included} />
      </Section>

      <Section label={copy.webLabel} title={copy.webTitle}>
        <p className="st-lede">{copy.webBody}</p>
        <RuleList items={copy.webStack} />
      </Section>

      <Section label={copy.processLabel} title={copy.processTitle}>
        <Rows numbered items={process} />
      </Section>

      <Section label={copy.caseLabel} title={copy.caseTitle}>
        <p className="st-lede">{copy.caseBody}</p>
        <figure className="st-still">
          <img src={hemmaOverview} alt="" loading="lazy" decoding="async" />
        </figure>
        <Link className="st-link" to="/projekt/hemma">
          {copy.caseLink}
          <Arrow />
        </Link>
      </Section>
    </SubPage>
  )
}
