import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionLabel, ArrowIcon } from './ui'
import { useContactModal } from './contactModalContext'
import decoHomeHero from '../assets/deco-home-hero.png'

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
export default function DecoHomePage({ lang = 'sv' }) {
  const navigate = useNavigate()
  const openContact = useContactModal()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

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
    ctaBtn: isSv ? 'Kontakta oss' : 'Contact us',
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
              href="https://decohome-steel.vercel.app/"
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
            src={decoHomeHero}
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
          <button
            onClick={openContact}
            className="inline-flex items-center gap-2 rounded-full font-medium transition-opacity duration-150 hover:opacity-85"
            style={{ fontSize: 13, letterSpacing: '0.01em', padding: '10px 10px 10px 22px', background: '#181817', color: '#ffffff' }}
          >
            {copy.ctaBtn}
            <span className="flex items-center justify-center rounded-full" style={{ width: 28, height: 28, background: 'rgba(255,255,255,0.15)' }}>
              <ArrowIcon size={13} />
            </span>
          </button>
        </section>
      </Reveal>

      <div style={{ height: '4rem' }} />
    </div>
  )
}
