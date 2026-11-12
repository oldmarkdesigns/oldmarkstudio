import sea4youMacbook from '../assets/work/cases/sea4you-macbook.webp'
import CaseStudy from '../home/CaseStudy'

export default function Sea4YouPage({ t, lang = 'sv', setLang }) {
  const isSv = lang === 'sv'

  const copy = {
    back: isSv ? 'TILLBAKA' : 'BACK',
    tag: isSv ? 'Webbutveckling · Redesign' : 'Web development · Redesign',
    title: 'Sea4You',
    subtitle: isSv ? 'En digital översyn för Sveriges Targa-återförsäljare.' : 'A digital overhaul for Sweden’s Targa dealer.',
    location: isSv ? 'Saltsjöbaden · sedan 2008' : 'Saltsjöbaden · since 2008',
    visitBtn: isSv ? 'Besök sea4you.se' : 'Visit sea4you.se',
    overviewLabel: isSv ? 'PROJEKTET' : 'THE PROJECT',
    overviewTitle: isSv ? 'Redigt och lätt att underhålla' : 'Clean, and built to be maintained',
    overviewBody: isSv
      ? 'Sea4You Sweden AB är den svenska återförsäljaren av båtmärket TARGA. Vi gjorde en redesign och uppstädning av deras befintliga webbplats — med fokus på ett tydligare, mer modernt uttryck som matchar varumärkets kvalitetskänsla. Sajten byggdes om med ett komponentbibliotek i grunden, så att teamet enkelt kan lägga till nya båtmodeller, uppdatera innehåll och underhålla webbplatsen själva framöver, utan att vara beroende av en utvecklare för varje ändring.'
      : 'Sea4You Sweden AB is the Swedish dealer for the TARGA boat brand. We redesigned and cleaned up their existing website — aiming for a clearer, more modern look that matches the brand’s sense of quality. The site was rebuilt around a component library, so the team can easily add new boat models, update content, and maintain the site themselves going forward, without depending on a developer for every change.',
    servicesLabel: isSv ? 'VAD VI GJORDE' : 'WHAT WE DID',
    services: isSv
      ? ['Webbdesign & redesign', 'Frontendsutveckling', 'Komponentbibliotek', 'Innehållsstruktur för enkelt underhåll']
      : ['Web design & redesign', 'Frontend development', 'Component library', 'Content structure for easy maintenance'],
    ctaLabel: isSv ? 'NÄSTA STEG' : 'NEXT STEP',
    ctaTitle: isSv ? 'Har du ett liknande projekt?' : 'Have a similar project?',
    ctaBody: isSv
      ? 'Vi jobbar med varumärken och produkter som förtjänar mer än ett generiskt digitalt uttryck. Hör av dig.'
      : 'We work with brands and products that deserve more than a generic digital expression. Get in touch.',
  }
  return <CaseStudy t={t} lang={lang} setLang={setLang} copy={copy} site="https://www.sea4you.se" headMedia={{ src: sea4youMacbook, alt: isSv ? 'Sea4Yous webbplats på en laptop ombord på en båt.' : 'The Sea4You website on a laptop aboard a boat.' }} />
}
