import { EMAIL } from '../home/siteUtils'
import { SubPage, PageHead, Section, Rows } from '../home/page'

// Integritetspolicy: what the site and the studio do with personal data. Short
// and plain, and true to how the site is built: no cookies, visits counted
// without them, fonts served from the site itself. No tools are named.

const UPDATED = { sv: '18 november 2026', en: '18 November 2026' }

export default function PrivacyPage({ t, lang = 'sv', setLang }) {
  const isSv = lang === 'sv'

  const copy = isSv
    ? {
        back: 'Tillbaka',
        label: 'Integritet',
        title: 'Integritetspolicy',
        lede: 'Hur jag hanterar dina personuppgifter, i korthet.',
        responsible: `Oldmark Studio (Oldmark Designs) ansvarar för behandlingen av dina personuppgifter. Du når mig på ${EMAIL}.`,
        updated: `Senast uppdaterad ${UPDATED.sv}.`,
        siteLabel: 'Webbplatsen',
        siteTitle: 'Inga kakor, ingen spårning',
        site: [
          { title: 'Kakor', body: 'Webbplatsen använder inga kakor (cookies) och spårar dig inte mellan webbplatser. Därför finns ingen kakbanner.' },
          { title: 'Besöksstatistik', body: 'Jag räknar besök för att se vilka sidor som läses. Det sker anonymt, utan kakor och utan att något sparas i din webbläsare. Statistiken går inte att koppla till dig som person.' },
          { title: 'Teknisk drift', body: 'När du besöker webbplatsen hanterar leverantören som driftar den tekniska uppgifter som IP-adress, för att kunna visa sidan och skydda den mot missbruk.' },
          { title: 'Det som sparas i webbläsaren', body: 'Webbplatsen minns tillfälligt var du var på startsidan, så att du kommer tillbaka till samma ställe. Uppgiften raderas när du stänger fliken och används inte till något annat.' },
          { title: 'Typsnitt', body: 'Typsnitten laddas från webbplatsen själv. Inga uppgifter om dig skickas till någon typsnittstjänst.' },
        ],
        contactLabel: 'När du hör av dig',
        contactTitle: 'Mejl och uppdrag',
        contact: [
          { title: 'Vad jag sparar', body: 'Mejlar du mig sparar jag ditt namn, din e-postadress och det du skriver, och eventuella uppgifter du lämnar om ditt företag.' },
          { title: 'Varför', body: 'För att kunna svara dig, ta fram ett prisförslag och genomföra uppdraget om vi jobbar tillsammans.' },
          { title: 'Hur länge', body: 'Så länge det behövs för kontakten och uppdraget. Underlag som rör fakturering sparas så länge bokföringslagen kräver, i dag sju år.' },
          { title: 'Vem som ser dem', body: 'Bara jag. Jag säljer aldrig dina uppgifter och lämnar inte ut dem till någon annan, utöver de leverantörer som behövs för e-post och bokföring.' },
        ],
        rightsLabel: 'Dina rättigheter',
        rightsTitle: 'Du bestämmer över dina uppgifter',
        rights: `Du har rätt att få veta vilka uppgifter jag har om dig, att få dem rättade eller raderade, och att invända mot hur de används. Mejla ${EMAIL} så hjälper jag dig. Tycker du att jag hanterar dina uppgifter fel kan du vända dig till Integritetsskyddsmyndigheten (IMY).`,
        contactTitleBand: 'Frågor om dina uppgifter?',
        contactBody: 'Skicka ett mejl så svarar jag.',
      }
    : {
        back: 'Back',
        label: 'Privacy',
        title: 'Privacy policy',
        lede: 'How I handle your personal data, in short.',
        responsible: `Oldmark Studio (Oldmark Designs) is responsible for processing your personal data. You can reach me at ${EMAIL}.`,
        updated: `Last updated ${UPDATED.en}.`,
        siteLabel: 'The website',
        siteTitle: 'No cookies, no tracking',
        site: [
          { title: 'Cookies', body: 'The website uses no cookies and does not track you across websites. That is why there is no cookie banner.' },
          { title: 'Visit statistics', body: 'I count visits to see which pages are read. This is anonymous, without cookies and without storing anything in your browser. The statistics cannot be linked to you as a person.' },
          { title: 'Hosting', body: 'When you visit the website, the provider that hosts it handles technical data such as your IP address, in order to serve the page and protect it from abuse.' },
          { title: 'What your browser keeps', body: 'The website briefly remembers where you were on the homepage, so you return to the same spot. It is deleted when you close the tab and is not used for anything else.' },
          { title: 'Fonts', body: 'The fonts load from the website itself. No data about you is sent to a font service.' },
        ],
        contactLabel: 'When you get in touch',
        contactTitle: 'Email and projects',
        contact: [
          { title: 'What I keep', body: 'If you email me, I keep your name, your email address and what you write, along with any details you share about your company.' },
          { title: 'Why', body: 'To reply to you, put together a quote, and carry out the project if we work together.' },
          { title: 'For how long', body: 'As long as the contact and the project need it. Records needed for invoicing are kept as long as Swedish accounting law requires, currently seven years.' },
          { title: 'Who sees it', body: 'Only me. I never sell your data or pass it on to anyone else, apart from the providers needed for email and bookkeeping.' },
        ],
        rightsLabel: 'Your rights',
        rightsTitle: 'You decide over your data',
        rights: `You have the right to know what data I hold about you, to have it corrected or deleted, and to object to how it is used. Email ${EMAIL} and I will help. If you think I handle your data wrongly, you can contact the Swedish Authority for Privacy Protection (IMY).`,
        contactTitleBand: 'Questions about your data?',
        contactBody: 'Send an email and I’ll reply.',
      }

  return (
    <SubPage t={t} lang={lang} setLang={setLang} contact={{ title: copy.contactTitleBand, body: copy.contactBody }}>
      <PageHead back={copy.back} label={copy.label} title={copy.title} lede={copy.lede}>
        <p>{copy.responsible}</p>
        <p className="st-muted">{copy.updated}</p>
      </PageHead>

      <Section label={copy.siteLabel} title={copy.siteTitle}>
        <Rows items={copy.site} />
      </Section>

      <Section label={copy.contactLabel} title={copy.contactTitle}>
        <Rows items={copy.contact} />
      </Section>

      <Section label={copy.rightsLabel} title={copy.rightsTitle}>
        <p className="st-lede">{copy.rights}</p>
      </Section>
    </SubPage>
  )
}
