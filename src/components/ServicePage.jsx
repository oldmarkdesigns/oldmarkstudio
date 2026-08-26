import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getService } from '../data/services'
import { SectionLabel, ArrowIcon, Reveal } from './ui'
import { useContactModal } from './contactModalContext'

export default function ServicePage({ lang = 'sv' }) {
  const { slug } = useParams()
  const navigate = useNavigate()
  const openContact = useContactModal()
  const service = getService(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-primary/68" style={{ fontSize: 14 }}>Tjänst hittades inte.</p>
      </div>
    )
  }

  const t = service[lang]
  const isSv = lang === 'sv'

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
          {isSv ? 'TILLBAKA' : 'BACK'}
        </button>
      </div>

      {/* Header */}
      <header className="px-6 sm:px-10 lg:px-24 pt-12 pb-16 max-w-[1600px] mx-auto">
        <Reveal>
          <SectionLabel>{service.tag}</SectionLabel>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="font-serif text-primary"
            style={{ fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: 1.0, letterSpacing: '-0.02em', fontWeight: 400, marginBottom: '0.75rem' }}>
            {t.title}
          </h1>
          <p className="font-serif text-primary/68"
            style={{ fontSize: 'clamp(18px, 2vw, 26px)', fontStyle: 'italic', fontWeight: 400 }}>
            {t.tagline}
          </p>
        </Reveal>
      </header>

      {/* Divider */}
      <div className="px-6 sm:px-10 lg:px-24 max-w-[1600px] mx-auto">
        <div style={{ height: 1, background: 'rgba(26,24,20,0.08)', marginBottom: '4rem' }} />
      </div>

      {/* Main content */}
      <main className="px-6 sm:px-10 lg:px-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left col — main text */}
          <div className="lg:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            {/* Intro */}
            <Reveal>
              <p className="font-serif text-primary/70"
                style={{
                  fontSize: 'clamp(17px, 1.6vw, 22px)',
                  lineHeight: 1.7,
                  fontWeight: 400,
                  borderLeft: '2px solid rgba(157,174,159,0.35)',
                  paddingLeft: '1.5rem',
                }}>
                {t.intro}
              </p>
            </Reveal>

            {/* Sections */}
            {t.sections.map((s, i) => (
              <Reveal key={i} delay={i * 50}>
                <div>
                  <h2 className="font-serif text-primary"
                    style={{ fontSize: 'clamp(20px, 2vw, 28px)', lineHeight: 1.15, letterSpacing: '-0.01em', fontWeight: 400, marginBottom: '1rem' }}>
                    {s.heading}
                  </h2>
                  {s.body.split('\n\n').map((para, j) => (
                    <p key={j} className="text-primary/60"
                      style={{ fontSize: 15, lineHeight: 1.8, marginBottom: j < s.body.split('\n\n').length - 1 ? '1rem' : 0 }}>
                      {para}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right col — sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* Deliverables */}
            <Reveal delay={80}>
              <div className="rounded-2xl p-6"
                style={{ background: 'rgba(26,24,20,0.03)', border: '1px solid rgba(26,24,20,0.08)' }}>
                <p className="text-accent uppercase mb-4"
                  style={{ fontSize: 10, letterSpacing: '0.18em', fontWeight: 500 }}>
                  {isSv ? 'LEVERANSER' : 'DELIVERABLES'}
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none', padding: 0, margin: 0 }}>
                  {t.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-primary/65"
                      style={{ fontSize: 13, lineHeight: 1.55 }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-accent)', flexShrink: 0, marginTop: 5, opacity: 0.7 }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={140}>
              <div className="rounded-2xl p-6"
                style={{ background: 'rgba(157,174,159,0.06)', border: '1px solid rgba(157,174,159,0.2)' }}>
                <p className="text-primary/80 font-medium mb-1" style={{ fontSize: 14 }}>
                  {isSv ? 'Redo att börja?' : 'Ready to start?'}
                </p>
                <p className="text-primary/68 mb-5" style={{ fontSize: 13, lineHeight: 1.6 }}>
                  {isSv ? 'Boka ett kostnadsfritt samtal — vi går igenom ert projekt.' : 'Book a free call — we\'ll walk through your project.'}
                </p>
                <button
                  onClick={openContact}
                  className="inline-flex items-center gap-2 rounded-full font-medium transition-opacity duration-150 hover:opacity-85"
                  style={{ fontSize: 12, letterSpacing: '0.01em', padding: '9px 10px 9px 18px', background: '#181817', color: '#ffffff' }}
                >
                  {isSv ? 'Kontakta oss' : 'Get in touch'}
                  <span className="flex items-center justify-center rounded-full" style={{ width: 26, height: 26, background: 'rgba(255,255,255,0.15)' }}>
                    <ArrowIcon size={12} />
                  </span>
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </main>

      <div style={{ height: '8rem' }} />
    </div>
  )
}
