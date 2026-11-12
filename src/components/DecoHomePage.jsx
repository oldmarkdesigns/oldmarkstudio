import decoHomeHero from '../assets/deco-home-hero.png'
import CaseStudy from '../home/CaseStudy'

export default function DecoHomePage({ t, lang = 'sv', setLang }) {
  const isSv = lang === 'sv'

  const copy = {
    back: isSv ? 'TILLBAKA' : 'BACK',
    tag: isSv ? 'Webbdesign · Varumärke · Utveckling' : 'Web design · Brand identity · Development',
    title: 'Deco Home',
    subtitle: isSv ? 'Ett digitalt hem för skräddarsydd inredningsdesign.' : 'A digital home for bespoke interior design.',
    location: isSv ? 'Stockholm · Nybyggd webbplats' : 'Stockholm · Newly built website',
    visitBtn: isSv ? 'Besök sajten' : 'Visit the site',
    overviewLabel: isSv ? 'PROJEKTET' : 'THE PROJECT',
    overviewTitle: isSv ? 'Ett digitalt uttryck som matchar hantverket' : 'A digital expression that matches the craft',
    overviewBody: isSv
      ? 'Deco Home är en Stockholmsbaserad inredningsstudio som erbjuder skräddarsydd design för både privata och kommersiella kunder. Vi ansvarade för varumärke, design och utveckling av webbplatsen från grunden — med fokus på att förmedla samma känsla av omsorg och detaljrikedom som studions egna projekt. Resultatet är en lugn, bilddriven sajt som låter interiörerna tala för sig själva.'
      : 'Deco Home is a Stockholm-based interior design studio offering bespoke design for both private and commercial clients. We handled the brand, design, and development of the website from the ground up — aiming to convey the same sense of care and attention to detail as the studio’s own projects. The result is a calm, image-driven site that lets the interiors speak for themselves.',
    servicesLabel: isSv ? 'VAD VI GJORDE' : 'WHAT WE DID',
    services: isSv
      ? ['Varumärkesidentitet', 'Webbdesign', 'Frontendsutveckling', 'Bilddrivet galleri för projekt']
      : ['Brand identity', 'Web design', 'Frontend development', 'Image-driven project gallery'],
    ctaLabel: isSv ? 'NÄSTA STEG' : 'NEXT STEP',
    ctaTitle: isSv ? 'Har du ett liknande projekt?' : 'Have a similar project?',
    ctaBody: isSv
      ? 'Vi jobbar med varumärken och produkter som förtjänar mer än ett generiskt digitalt uttryck. Hör av dig.'
      : 'We work with brands and products that deserve more than a generic digital expression. Get in touch.',
  }
  return <CaseStudy t={t} lang={lang} setLang={setLang} copy={copy} site="https://decohome-steel.vercel.app/" image={decoHomeHero} />
}
