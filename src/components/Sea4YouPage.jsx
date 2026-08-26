import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionLabel, MailContactButton } from './ui'
import sea4youHero from '../assets/sea4you-hero.png'

// ─── Reveal ───────────────────────────────────────────────────────────────────
function useRevealRef() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.06 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}
function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useRevealRef()
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(22px)',
      transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Sea4YouPage({ lang = 'sv' }) {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

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

  return (
    <div className="bg-background min-h-screen font-sans">

      {/* ── Back ── */}
      <div className="px-6 sm:px-10 lg:px-24 pt-8 max-w-[1600px] mx-auto">
        <button
          onClick={() => {
            const saved = sessionStorage.getItem('homeScrollY')
            navigate('/')
            requestAnimationFrame(() => requestAnimationFrame(() =>
              window.scrollTo({ top: saved ? parseInt(saved, 10) : 0, behavior: 'instant' })
            ))
          }}
          className="inline-flex items-center gap-2 text-primary/68 hover:text-primary/70 transition-colors duration-150"
          style={{ fontSize: 12, letterSpacing: '0.08em' }}
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 5h12M1 5l4-4M1 5l4 4" />
          </svg>
          {copy.back}
        </button>
      </div>

      {/* ── Header ── */}
      <header className="px-6 sm:px-10 lg:px-24 pt-10 pb-14 max-w-[1600px] mx-auto">
        <Reveal>
          <SectionLabel>{copy.tag}</SectionLabel>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="font-serif text-primary"
            style={{ fontSize: 'clamp(56px, 9vw, 120px)', lineHeight: 0.95, letterSpacing: '-0.03em', fontWeight: 400, marginBottom: '0.5rem' }}>
            {copy.title}
          </h1>
          <p className="font-serif text-primary/70"
            style={{ fontSize: 'clamp(20px, 2.5vw, 36px)', fontStyle: 'italic', fontWeight: 400, marginBottom: '1.5rem' }}>
            {copy.subtitle}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-primary/60 uppercase" style={{ fontSize: 11, letterSpacing: '0.14em' }}>
              {copy.location}
            </span>
            <a
              href="https://www.sea4you.se"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full font-medium transition-opacity duration-150 hover:opacity-85"
              style={{ fontSize: 12, letterSpacing: '0.01em', padding: '8px 10px 8px 18px', background: '#181817', color: '#ffffff' }}
            >
              {copy.visitBtn}
              <span className="flex items-center justify-center rounded-full"
                style={{ width: 24, height: 24, background: 'rgba(255,255,255,0.15)' }}>
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M2 10L10 2M10 2H4M10 2v6" />
                </svg>
              </span>
            </a>
          </div>
        </Reveal>
      </header>

      {/* ── Hero image ── */}
      <Reveal delay={160}>
        <div className="mx-6 sm:mx-10 lg:mx-24 rounded-2xl overflow-hidden mb-24"
          style={{ maxWidth: 'calc(1600px - 12rem)', height: 'clamp(280px, 42vw, 560px)' }}>
          <img
            src={sea4youHero}
            alt={copy.title}
            className="w-full h-full object-cover"
          />
        </div>
      </Reveal>

      {/* ── Overview ── */}
      <section className="px-6 sm:px-10 lg:px-24 mb-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <SectionLabel>{copy.overviewLabel}</SectionLabel>
            <h2 className="font-serif text-primary"
              style={{ fontSize: 'clamp(26px, 3vw, 42px)', lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 400, marginBottom: '1.5rem' }}>
              {copy.overviewTitle}
            </h2>
            <p className="text-primary/70" style={{ fontSize: 16, lineHeight: 1.75 }}>
              {copy.overviewBody}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <SectionLabel>{copy.servicesLabel}</SectionLabel>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '1.25rem' }}>
                {copy.services.map((s, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary/65"
                    style={{ fontSize: 14, letterSpacing: '0.01em' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-accent)', flexShrink: 0, opacity: 0.7 }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <Reveal>
        <section
          className="px-6 sm:px-10 lg:px-24 py-20 max-w-[1600px] mx-auto"
          style={{ borderTop: '1px solid rgba(26,24,20,0.07)' }}
        >
          <SectionLabel>{copy.ctaLabel}</SectionLabel>
          <h2 className="font-serif text-primary"
            style={{ fontSize: 'clamp(26px, 3.5vw, 48px)', lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 400, marginBottom: '1rem' }}>
            {copy.ctaTitle}
          </h2>
          <p className="text-primary/70 mb-8" style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 440 }}>
            {copy.ctaBody}
          </p>
          <MailContactButton lang={lang} />
        </section>
      </Reveal>

      <div style={{ height: '4rem' }} />
    </div>
  )
}
