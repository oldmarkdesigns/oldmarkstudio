import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import translations from '../translations'
import { SectionLabel, Icon, Reveal, MailContactButton } from './ui'

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

// ─── Pricing card ───────────────────────────────────────────────────────────────
function TierCard({ tier, lang }) {
  const featured = tier.featured
  return (
    <div
      className="rounded-2xl flex flex-col"
      style={{
        padding: '2rem',
        background: featured ? '#181817' : '#ffffff',
        border: featured ? 'none' : '1px solid rgba(26,24,20,0.1)',
        boxShadow: featured ? '0 24px 60px rgba(0,0,0,0.35)' : '0 2px 16px rgba(0,0,0,0.04)',
      }}
    >
      {featured && (
        <span
          className="inline-flex self-start rounded-full uppercase"
          style={{ fontSize: 10, letterSpacing: '0.14em', padding: '5px 12px', background: '#ffffff', color: '#181817', marginBottom: '1.25rem' }}
        >
          {tier.badge}
        </span>
      )}
      <h3 className="font-serif" style={{ fontSize: 24, fontWeight: 400, color: featured ? '#ffffff' : '#1a1814', marginBottom: '0.5rem' }}>
        {tier.name}
      </h3>
      <div className="flex items-baseline gap-1.5" style={{ marginBottom: '0.75rem' }}>
        {tier.pricePrefix && (
          <span style={{ fontSize: 13, color: featured ? 'rgba(255,255,255,0.6)' : 'rgba(26,24,20,0.55)' }}>{tier.pricePrefix}</span>
        )}
        <span className="font-serif" style={{ fontSize: 'clamp(30px, 3vw, 40px)', fontWeight: 400, color: featured ? '#ffffff' : '#1a1814', lineHeight: 1 }}>
          {tier.price}
        </span>
        {tier.period && (
          <span style={{ fontSize: 13, color: featured ? 'rgba(255,255,255,0.6)' : 'rgba(26,24,20,0.55)' }}>{tier.period}</span>
        )}
      </div>
      <p style={{ fontSize: 13.5, lineHeight: 1.6, color: featured ? 'rgba(255,255,255,0.75)' : 'rgba(26,24,20,0.65)', marginBottom: '1.75rem' }}>
        {tier.desc}
      </p>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: '2rem', flex: 1 }}>
        {tier.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5" style={{ fontSize: 13.5, color: featured ? 'rgba(255,255,255,0.85)' : 'rgba(26,24,20,0.75)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={featured ? '#ffffff' : 'var(--color-accent)'} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flexShrink: 0 }}>
              <path d="M20 6L9 17l-5-5" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <MailContactButton lang={lang} variant={featured ? 'light' : 'dark'} />
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

      {/* Pricing */}
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {t.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 60}>
              <TierCard tier={{ ...tier, badge: t.featuredBadge }} lang={lang} />
            </Reveal>
          ))}
        </div>
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
