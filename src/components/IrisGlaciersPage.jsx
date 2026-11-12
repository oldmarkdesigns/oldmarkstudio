import irisHero from '../assets/iris-glaciers-hero.png'
import CaseStudy from '../home/CaseStudy'

export default function IrisGlaciersPage({ t, lang = 'sv', setLang }) {
  const isSv = lang === 'sv'

  const copy = {
    back: isSv ? 'TILLBAKA' : 'BACK',
    tag: isSv ? 'Webbdesign · Utveckling · E-handel' : 'Web design · Development · E-commerce',
    title: 'Iris Glaciers',
    subtitle: isSv ? 'Ett nytt glasögonmärke, byggt från grunden.' : 'A new eyewear brand, built from the ground up.',
    location: isSv ? 'Nystartat varumärke' : 'New brand launch',
    visitBtn: isSv ? 'Besök sajten' : 'Visit the site',
    overviewLabel: isSv ? 'PROJEKTET' : 'THE PROJECT',
    overviewTitle: isSv ? 'En digital butik för en ny lansering' : 'A digital storefront for a new launch',
    overviewBody: isSv
      ? 'Iris Glaciers är ett nystartat märke för glaciärglasögon, med produkter uppkallade efter alpina orter som Zermatt, Chamonix och Verbier. Eftersom varumärket startade helt från noll fick vi ansvara för både design och utveckling av webbplatsen — en fullständig e-handelsupplevelse med produktvisning, varukorg och checkout, byggd för att kännas lika premium som produkterna själva.'
      : 'Iris Glaciers is a brand-new glacier eyewear label, with products named after alpine destinations like Zermatt, Chamonix, and Verbier. Since the brand started completely from scratch, we handled both the design and development of the website — a full e-commerce experience with product showcases, a cart, and checkout, built to feel as premium as the products themselves.',
    servicesLabel: isSv ? 'VAD VI GJORDE' : 'WHAT WE DID',
    services: isSv
      ? ['Varumärkesidentitet', 'Webbdesign', 'Frontendsutveckling', 'E-handelsflöde (varukorg & checkout)']
      : ['Brand identity', 'Web design', 'Frontend development', 'E-commerce flow (cart & checkout)'],
    ctaLabel: isSv ? 'NÄSTA STEG' : 'NEXT STEP',
    ctaTitle: isSv ? 'Har du ett liknande projekt?' : 'Have a similar project?',
    ctaBody: isSv
      ? 'Vi jobbar med varumärken och produkter som förtjänar mer än ett generiskt digitalt uttryck. Hör av dig.'
      : 'We work with brands and products that deserve more than a generic digital expression. Get in touch.',
  }
  return <CaseStudy t={t} lang={lang} setLang={setLang} copy={copy} site="https://irisglaciers.vercel.app/index.html" image={irisHero} />
}
