import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionLabel, ArrowIcon } from './ui'
import { useContactModal } from './contactModalContext'
import no20Hero from '../assets/no20-hero.png'
import no20Design from '../assets/no20-design.png'
import no20Mobile from '../assets/no20-mobile.png'

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
export default function ProjectNo20({ lang = 'sv' }) {
  const navigate = useNavigate()
  const openContact = useContactModal()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const isSv = lang === 'sv'

  const copy = {
    back: isSv ? 'TILLBAKA' : 'BACK',
    tag: isSv ? 'Webbdesign · Varumärke · Copywriting' : 'Web design · Brand identity · Copywriting',
    title: 'NO20',
    subtitle: isSv ? 'Ett hem på vattnet.' : 'A home on the water.',
    location: isSv ? 'Stockholms skärgård — est. 2024' : 'Stockholm Archipelago — est. 2024',
    visitBtn: isSv ? 'Besök sajten' : 'Visit the site',
    overviewLabel: isSv ? 'PROJEKTET' : 'THE PROJECT',
    overviewTitle: isSv ? 'Lyx och enkelhet i skärgårdsmiljö' : 'Luxury and simplicity in the archipelago',
    overviewBody: isSv
      ? 'NO20 är ett exklusivt flytande boende beläget i Stockholms skärgård — designat för den som söker en unik kombination av havsnära natur och modern komfort. Ägaren kontaktade oss med en enkel brief: "Skapa något som känns som platsen." Vi tolkade det som en möjlighet att designa ett visuellt språk som är lika stilla och välgjort som boendet självt.'
      : 'NO20 is an exclusive floating home located in the Stockholm Archipelago — designed for those seeking a unique combination of maritime nature and modern comfort. The owner came to us with a simple brief: "Create something that feels like the place." We interpreted that as an opportunity to design a visual language as still and considered as the home itself.',
    servicesLabel: isSv ? 'VAD VI GJORDE' : 'WHAT WE DID',
    services: isSv
      ? ['Varumärkesidentitet', 'Webbdesign & -utveckling', 'Copywriting (SV + EN)', 'Fotoriktlinjer', 'Typografisystem']
      : ['Brand identity', 'Web design & development', 'Copywriting (SV + EN)', 'Photography guidelines', 'Typography system'],
    metricsLabel: isSv ? 'RESULTAT' : 'RESULTS',
    metrics: [
      { val: '3', unit: isSv ? 'veckor' : 'weeks', label: isSv ? 'Från brief till lansering' : 'From brief to launch' },
      { val: '2', unit: isSv ? 'språk' : 'languages', label: isSv ? 'Svenska och engelska' : 'Swedish and English' },
    ],
    designLabel: isSv ? 'DESIGN' : 'DESIGN',
    designTitle: isSv ? 'Lugn. Natt. Vatten.' : 'Still. Night. Water.',
    designBody: isSv
      ? 'Paletten är hämtad direkt från platsen: mörkgrön skog, nattsvart vatten och den dämpade gröna tonen hos vass och enris. Typografin mixar klassisk serif för rubriker med luftig sans-serif för brödtext — ett kontrast som speglar boendet självt: historisk form med modern komfort.'
      : 'The palette is drawn directly from the location: dark green forest, night-black water and the muted green tone of reeds and juniper. The typography mixes classical serif for headlines with airy sans-serif for body — a contrast that mirrors the home itself: historic form with modern comfort.',
    mobileLabel: isSv ? 'MOBIL' : 'MOBILE',
    mobileTitle: isSv ? 'Fungerar lika bra på alla enheter' : 'Works equally well on all devices',
    mobileBody: isSv
      ? 'Ungefär hälften av besökarna kommer via mobil. Webbplatsen är byggd mobile-first med full responsivitet, snabb laddningstid och en touch-optimerad navigering.'
      : 'Around half of all visitors arrive on mobile. The site is built mobile-first with full responsiveness, fast load times, and touch-optimised navigation.',
    quoteText: isSv
      ? '"Samuel och teamet förstod platsen direkt. Resultatet är en webbplats som faktiskt känns som att vara där."'
      : '"Samuel and the team understood the place immediately. The result is a website that actually feels like being there."',
    quoteSource: isSv ? '— Ägaren, NO20' : '— The owner, NO20',
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
              window.scrollTo({ top: saved ? parseInt(saved,10) : 0, behavior: 'instant' })
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
              href="https://no20.vercel.app/"
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
            src={no20Hero}
            alt="NO20 — Ett hem på vattnet"
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

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-5 mt-10">
              {copy.metrics.map((m, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="rounded-2xl p-5"
                    style={{ background: 'rgba(26,24,20,0.03)', border: '1px solid rgba(26,24,20,0.08)' }}>
                    <div className="font-serif text-primary flex items-baseline gap-1"
                      style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1, fontWeight: 400, marginBottom: '0.4rem' }}>
                      {m.val}
                      {m.unit && <span className="text-accent" style={{ fontSize: '0.45em', letterSpacing: '0.1em' }}> {m.unit.toUpperCase()}</span>}
                    </div>
                    <p className="text-primary/68" style={{ fontSize: 11, lineHeight: 1.5 }}>{m.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Design section — desktop screenshot ── */}
      <section className="px-6 sm:px-10 lg:px-24 mb-24 max-w-[1600px] mx-auto">
        <Reveal>
          <SectionLabel>{copy.designLabel}</SectionLabel>
          <h2 className="font-serif text-primary"
            style={{ fontSize: 'clamp(26px, 3vw, 42px)', lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 400, marginBottom: '1rem' }}>
            {copy.designTitle}
          </h2>
          <p className="text-primary/68 mb-12" style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 520 }}>
            {copy.designBody}
          </p>
        </Reveal>
        <Reveal delay={60}>
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(26,24,20,0.08)' }}>
            <img src={no20Design} alt={copy.designTitle} className="w-full h-auto block" />
          </div>
        </Reveal>

        {/* Colour palette strip */}
        <Reveal delay={80}>
          <div className="flex gap-3 mt-8 flex-wrap">
            {[
              { hex: '#181817', label: 'Dark' },
              { hex: '#222220', label: 'Charcoal' },
              { hex: '#697A6B', label: 'Sage' },
              { hex: '#8B9C8D', label: 'Sage mid' },
              { hex: '#B6C5B8', label: 'Sage pale' },
              { hex: '#F0E9DF', label: 'Cream' },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-2">
                <span style={{ width: 28, height: 28, borderRadius: 6, background: c.hex, border: '1px solid rgba(26,24,20,0.1)', flexShrink: 0 }} />
                <span className="text-primary/65" style={{ fontSize: 10, letterSpacing: '0.08em' }}>{c.label.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Mobile section ── */}
      <section className="px-6 sm:px-10 lg:px-24 mb-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionLabel>{copy.mobileLabel}</SectionLabel>
            <h2 className="font-serif text-primary"
              style={{ fontSize: 'clamp(26px, 3vw, 42px)', lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 400, marginBottom: '1rem' }}>
              {copy.mobileTitle}
            </h2>
            <p className="text-primary/68" style={{ fontSize: 15, lineHeight: 1.7 }}>
              {copy.mobileBody}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex justify-center">
              <div style={{
                width: 260,
                borderRadius: 40,
                padding: 10,
                background: 'rgba(26,24,20,0.04)',
                border: '1.5px solid rgba(26,24,20,0.12)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.35)',
              }}>
                <div style={{ position: 'relative', borderRadius: 30, overflow: 'hidden' }}>
                  <img src={no20Mobile} alt={copy.mobileTitle} className="w-full h-full block" style={{ objectFit: 'cover' }} />
                  {/* Notch */}
                  <div style={{
                    position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                    width: 100, height: 24, background: '#0e120e', borderRadius: '0 0 16px 16px',
                  }} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Quote ── */}
      <Reveal>
        <section className="px-6 sm:px-10 lg:px-24 mb-24 max-w-[1600px] mx-auto">
          <blockquote
            className="font-serif text-primary/70"
            style={{
              fontSize: 'clamp(20px, 2.5vw, 32px)',
              lineHeight: 1.55,
              fontStyle: 'italic',
              fontWeight: 400,
              maxWidth: 760,
              borderLeft: '2px solid rgba(157,174,159,0.4)',
              paddingLeft: '2rem',
            }}
          >
            <p style={{ marginBottom: '1rem' }}>{copy.quoteText}</p>
            <footer className="font-sans text-primary/65" style={{ fontSize: 12, letterSpacing: '0.1em', fontStyle: 'normal' }}>
              {copy.quoteSource}
            </footer>
          </blockquote>
        </section>
      </Reveal>

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
