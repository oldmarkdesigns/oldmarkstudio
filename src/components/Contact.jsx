import { useEffect, useState } from 'react'
import { SectionLabel, Reveal, MailContactButton } from './ui'

// ─── Rotates testimonials with a cross-dissolve. Content below is placeholder
// copy — swap for real customer quotes before this goes live. ─────────────────
function TestimonialRotator({ items }) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (items.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const cycle = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % items.length)
        setVisible(true)
      }, 500)
    }, 4500)
    return () => clearInterval(cycle)
  }, [items.length])

  const current = items[index]

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease' }}>
      <p
        className="font-serif text-cream"
        style={{ fontSize: 'clamp(16px, 1.8vw, 20px)', lineHeight: 1.5, fontStyle: 'italic', fontWeight: 400, marginBottom: '0.85rem' }}
      >
        “{current.quote}”
      </p>
      <p className="text-cream/60 uppercase" style={{ fontSize: 10.5, letterSpacing: '0.1em' }}>
        {current.author}
      </p>
    </div>
  )
}

export default function Contact({ t, lang }) {
  return (
    <section
      id="contact"
      className="px-6 sm:px-10 lg:px-24"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
        borderTop: '1px solid rgba(26,24,20,0.08)',
      }}
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — copy */}
        <Reveal>
          <SectionLabel>{t.label}</SectionLabel>
          <h2
            className="font-serif text-primary"
            style={{
              fontSize: 'clamp(30px, 4.5vw, 54px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              fontWeight: 400,
              marginBottom: '2.5rem',
            }}
          >
            {t.headline} <span className="italic text-accent">{t.accentWord}</span>
          </h2>

          <p
            className="text-primary/70"
            style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 460, marginBottom: '2.5rem' }}
          >
            {t.subheading}
          </p>

          <div style={{ marginBottom: '1.5rem' }}>
            <MailContactButton lang={lang} />
          </div>

          <p style={{ fontSize: 11.5, letterSpacing: '0.06em', color: 'rgba(26,24,20,0.4)' }}>
            {t.muted}
          </p>
        </Reveal>

        {/* Right — stat card */}
        <Reveal
          delay={120}
          className="relative rounded-3xl overflow-hidden flex flex-col"
          style={{
            background:
              'linear-gradient(150deg, #111714 0%, #181817 45%, #9dae9f 180%)',
            border: '1px solid rgba(157,174,159,0.3)',
            minHeight: 480,
          }}
        >
          {/* glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(70% 60% at 80% 15%, rgba(157,174,159,0.35) 0%, rgba(157,174,159,0) 65%)',
            }}
          />

          {/* Tag pill */}
          <div className="relative p-7">
            <span
              className="inline-flex items-center gap-2 rounded-full text-cream/80"
              style={{
                fontSize: 10.5,
                letterSpacing: '0.14em',
                padding: '7px 14px',
                background: 'rgba(15,15,15,0.45)',
                border: '1px solid rgba(245,245,242,0.12)',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: 'var(--color-accent)',
                  display: 'inline-block',
                }}
              />
              {t.cardTag}
            </span>
          </div>

          {/* Testimonials — dissolves between the tag pill and the stats */}
          {t.testimonials?.length > 0 && (
            <div className="relative px-7 flex-1 flex items-center" style={{ minHeight: 0 }}>
              <TestimonialRotator items={t.testimonials} />
            </div>
          )}

          {/* Stats pinned to bottom */}
          <div className="relative px-7 pb-8 mt-auto">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="flex items-baseline">
                  <span
                    className="font-serif text-cream"
                    style={{ fontSize: 'clamp(46px, 6vw, 72px)', lineHeight: 1, fontWeight: 400 }}
                  >
                    {t.statNumber}
                  </span>
                  <span
                    className="font-serif text-accent"
                    style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400 }}
                  >
                    {t.statSuffix}
                  </span>
                </div>
                <p className="text-cream/68 mt-3" style={{ fontSize: 12, lineHeight: 1.5 }}>
                  {t.statLabel}
                </p>
              </div>
              <div
                style={{ borderLeft: '1px solid rgba(245,245,242,0.12)', paddingLeft: '1.5rem' }}
              >
                <span
                  className="font-serif text-cream"
                  style={{ fontSize: 'clamp(40px, 5vw, 60px)', lineHeight: 1, fontWeight: 400 }}
                >
                  {t.secondStat}
                </span>
                <p className="text-cream/68 mt-3" style={{ fontSize: 12, lineHeight: 1.5 }}>
                  {t.secondStatLabel}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
