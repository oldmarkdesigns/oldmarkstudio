import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import translations from '../translations'
import { SectionLabel, Icon, Reveal, MailContactButton } from './ui'
import Skills from './Skills'
import SubscriptionValue from './SubscriptionValue'

// ─── Questions card — simple CTA next to the header ────────────────────────────
function QuestionsCard({ t, lang }) {
  return (
    <div
      className="rounded-2xl"
      style={{ background: '#ffffff', border: '1px solid rgba(26,24,20,0.1)', boxShadow: '0 2px 24px rgba(0,0,0,0.05)', padding: '2rem' }}
    >
      <h2 className="font-serif" style={{ fontSize: 22, color: '#1a1814', marginBottom: '0.6rem', fontWeight: 400 }}>
        {t.questionsCardTitle}
      </h2>
      <p style={{ fontSize: 14, color: 'rgba(26,24,20,0.65)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
        {t.questionsCardBody}
      </p>
      <MailContactButton lang={lang} />
    </div>
  )
}

// ─── Primary offer card — the subscription, visually emphasized. Price is
// "by agreement" rather than a number, since it's negotiated per client. ───────
function OfferCard({ offer, lang }) {
  return (
    <div
      className="rounded-2xl h-full flex flex-col"
      style={{ padding: '2.5rem', background: '#181817', boxShadow: '0 24px 60px rgba(0,0,0,0.35)' }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-10 h-full">
        <div className="flex flex-col">
          <h3 className="font-serif" style={{ fontSize: 26, fontWeight: 400, color: '#ffffff', marginBottom: '0.75rem' }}>
            {offer.name}
          </h3>
          <div style={{ marginBottom: '1.1rem' }}>
            <span className="uppercase" style={{ fontSize: 11.5, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)' }}>
              {offer.badge}
            </span>
            <div className="font-serif" style={{ fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 400, color: '#ffffff', lineHeight: 1.15, marginTop: 4 }}>
              {offer.priceStatement}
            </div>
          </div>
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'rgba(255,255,255,0.75)', marginBottom: '1.75rem', maxWidth: 340 }}>
            {offer.desc}
          </p>
          <div className="mt-auto">
            <MailContactButton lang={lang} variant="light" />
          </div>
        </div>

        <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, alignSelf: 'center' }}>
          {offer.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5" style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flexShrink: 0 }}>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// ─── Secondary offer card — one-off project. Deliberately quieter than the
// subscription card: no dark fill, no shadow, smaller type. ────────────────────
function OneOffCard({ offer, lang }) {
  return (
    <div
      className="rounded-2xl h-full flex flex-col"
      style={{ padding: '2.25rem', background: '#ffffff', border: '1px solid rgba(26,24,20,0.12)' }}
    >
      <h3 className="font-serif" style={{ fontSize: 19, fontWeight: 400, color: '#1a1814', marginBottom: '0.6rem' }}>
        {offer.name}
      </h3>
      <span className="uppercase" style={{ fontSize: 11, letterSpacing: '0.08em', color: 'rgba(26,24,20,0.4)', marginBottom: '1rem' }}>
        {offer.badge}
      </span>
      <p style={{ fontSize: 13.5, lineHeight: 1.65, color: 'rgba(26,24,20,0.65)', marginBottom: '1.5rem' }}>
        {offer.desc}
      </p>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: '1.75rem' }}>
        {offer.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5" style={{ fontSize: 13, color: 'rgba(26,24,20,0.7)' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#181817" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 3, flexShrink: 0, opacity: 0.6 }}>
              <path d="M20 6L9 17l-5-5" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <MailContactButton lang={lang} />
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function WebSolutionPage({ lang = 'sv' }) {
  const navigate = useNavigate()
  const t = translations[lang].webSolution

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  function goBack() {
    const saved = sessionStorage.getItem('homeScrollY')
    navigate('/')
    requestAnimationFrame(() => requestAnimationFrame(() =>
      window.scrollTo({ top: saved ? parseInt(saved, 10) : 0, behavior: 'instant' })
    ))
  }

  return (
    <div className="bg-background min-h-screen font-sans">

      {/* Back */}
      <div className="px-6 sm:px-10 lg:px-24 pt-8 max-w-[1600px] mx-auto">
        <button
          onClick={goBack}
          className="inline-flex items-center gap-2 text-primary/68 hover:text-primary/70 transition-colors duration-150"
          style={{ fontSize: 12, letterSpacing: '0.08em' }}
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 5h12M1 5l4-4M1 5l4 4" />
          </svg>
          {t.back}
        </button>
      </div>

      {/* Header */}
      <header className="px-6 sm:px-10 lg:px-24 pt-12 pb-16 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
          <div>
            <Reveal>
              <SectionLabel>{t.tag}</SectionLabel>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="font-serif text-primary"
                style={{ fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: 1.0, letterSpacing: '-0.02em', fontWeight: 400, marginBottom: '0.75rem' }}>
                {t.title}
              </h1>
              <p className="font-serif text-primary/70"
                style={{ fontSize: 'clamp(18px, 2vw, 26px)', fontStyle: 'italic', fontWeight: 400, maxWidth: 620 }}>
                {t.subtitle}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-primary/65" style={{ fontSize: 15, lineHeight: 1.75, maxWidth: 620, marginTop: '1.75rem' }}>
                {t.intro}
              </p>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <QuestionsCard t={t} lang={lang} />
          </Reveal>
        </div>
      </header>

      {/* What's included */}
      <section className="px-6 sm:px-10 lg:px-24 mb-24 max-w-[1600px] mx-auto">
        <Reveal>
          <SectionLabel>{t.includedLabel}</SectionLabel>
          <h2 className="font-serif text-primary"
            style={{ fontSize: 'clamp(26px, 3vw, 42px)', lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 400, marginBottom: '3rem' }}>
            {t.includedTitle}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.included.map((item, i) => (
            <Reveal key={item.title} delay={i * 40}>
              <div className="rounded-2xl p-6" style={{ background: 'rgba(26,24,20,0.03)', border: '1px solid rgba(26,24,20,0.08)', height: '100%' }}>
                <span
                  className="flex items-center justify-center rounded-full text-accent"
                  style={{ width: 40, height: 40, background: 'rgba(157,174,159,0.14)', marginBottom: '1.25rem' }}
                >
                  <Icon name={item.icon} size={18} />
                </span>
                <h3 className="font-serif text-primary" style={{ fontSize: 17, fontWeight: 400, marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p className="text-primary/65" style={{ fontSize: 13.5, lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Subscription value — same card as the landing page, no scroll-takeover here */}
      <SubscriptionValue t={t} />

      {/* Toolbox — moved here from the homepage process section */}
      <section className="px-6 sm:px-10 lg:px-24 mb-24 max-w-[1600px] mx-auto">
        <Skills lang={lang} inProcess />
      </section>

      {/* Pricing — one offer, no tiers */}
      <section className="px-6 sm:px-10 lg:px-24 mb-24 max-w-[1600px] mx-auto">
        <Reveal>
          <SectionLabel>{t.pricingLabel}</SectionLabel>
          <h2 className="font-serif text-primary"
            style={{ fontSize: 'clamp(26px, 3vw, 42px)', lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 400, marginBottom: '0.75rem' }}>
            {t.pricingTitle}
          </h2>
          <p className="text-primary/65 mb-12" style={{ fontSize: 15, lineHeight: 1.7 }}>
            {t.pricingSubtitle}
          </p>
        </Reveal>
        <Reveal delay={60}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 items-stretch" style={{ maxWidth: 1080 }}>
            <OfferCard offer={t.offer} lang={lang} />
            <OneOffCard offer={t.oneOff} lang={lang} />
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <Reveal>
        <section
          className="px-6 sm:px-10 lg:px-24 py-20 max-w-[1600px] mx-auto"
          style={{ borderTop: '1px solid rgba(26,24,20,0.08)' }}
        >
          <h2 className="font-serif text-primary"
            style={{ fontSize: 'clamp(26px, 3.5vw, 48px)', lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 400, marginBottom: '1rem' }}>
            {t.ctaTitle}
          </h2>
          <p className="text-primary/70 mb-8" style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 440 }}>
            {t.ctaBody}
          </p>
          <MailContactButton lang={lang} />
        </section>
      </Reveal>

      <div style={{ height: '4rem' }} />
    </div>
  )
}
