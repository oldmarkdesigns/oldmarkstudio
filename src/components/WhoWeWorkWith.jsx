import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionLabel, ArrowIcon, Reveal } from './ui'
import no20Thumb from '../assets/no20-hero.png'
import sea4youThumb from '../assets/sea4you-hero.png'
import irisThumb from '../assets/iris-glaciers-hero.png'
import decoHomeThumb from '../assets/deco-home-hero.png'

const CASE_IMAGES = {
  no20: no20Thumb,
  sea4you: sea4youThumb,
  'iris-glaciers': irisThumb,
  'deco-home': decoHomeThumb,
}

// ─── Tracks which row is centered in the viewport as the list scrolls past
// the pinned preview — same mechanic as the Lokalprogram module: a thin
// band at viewport center decides the "active" row. ────────────────────────
function useScrollActive(count) {
  const [active, setActive] = useState(0)
  const rowRefs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = rowRefs.current.indexOf(entry.target)
            if (idx !== -1) setActive(idx)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    rowRefs.current.slice(0, count).forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [count])

  return [active, rowRefs]
}

// ─── Left column — pinned preview, cross-fades to the active project ──────────
function StickyPreview({ cases, activeSlug, onSelect }) {
  return (
    <div
      className="hidden lg:block lg:sticky"
      style={{ top: 100, alignSelf: 'start' }}
    >
      <div
        className="relative rounded-2xl overflow-hidden cursor-pointer"
        style={{ height: 480, border: '1px solid rgba(26,24,20,0.1)' }}
        onClick={() => onSelect(activeSlug)}
      >
        {cases.map((c) => (
          <img
            key={c.slug}
            src={CASE_IMAGES[c.slug]}
            alt={c.name}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: c.slug === activeSlug ? 1 : 0, transition: 'opacity 0.6s ease' }}
          />
        ))}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(24,24,23,0.05) 0%, rgba(24,24,23,0.15) 45%, rgba(24,24,23,0.7) 100%)' }}
        />
        <div className="absolute inset-x-0 bottom-0" style={{ padding: '1.75rem' }}>
          {cases.map((c) => (
            <div
              key={c.slug}
              style={{
                opacity: c.slug === activeSlug ? 1 : 0,
                transition: 'opacity 0.5s ease',
                position: c.slug === activeSlug ? 'static' : 'absolute',
                inset: c.slug === activeSlug ? undefined : 0,
              }}
            >
              <span className="uppercase text-cream/80" style={{ fontSize: 10, letterSpacing: '0.14em' }}>
                {c.tag}
              </span>
              <h3 className="font-serif" style={{ fontSize: 26, fontWeight: 400, color: '#ffffff', lineHeight: 1.15, margin: '0.5rem 0 0' }}>
                {c.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Right column — scrolling list of project rows ─────────────────────────────
function ProjectRow({ c, index, isActive, rowRef, onSelect }) {
  return (
    <div
      ref={rowRef}
      onClick={onSelect}
      className="group cursor-pointer"
      style={{
        paddingTop: '2.25rem',
        paddingBottom: '2.25rem',
        borderTop: index === 0 ? 'none' : '1px solid rgba(26,24,20,0.08)',
        opacity: isActive ? 1 : 0.45,
        transition: 'opacity 0.4s ease',
      }}
    >
      {/* Mobile-only thumbnail — no sticky preview to show it there */}
      <div className="lg:hidden rounded-xl overflow-hidden mb-5" style={{ height: 180 }}>
        <img src={CASE_IMAGES[c.slug]} alt={c.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex items-start justify-between gap-6">
        <div style={{ minWidth: 0 }}>
          <div className="flex items-center gap-3 mb-3">
            <span className="tabular-nums text-primary/50" style={{ fontSize: 12, letterSpacing: '0.05em' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="uppercase text-primary/50" style={{ fontSize: 10, letterSpacing: '0.12em' }}>
              {c.tag}
            </span>
          </div>
          <h3
            className="font-serif text-primary transition-colors duration-200 group-hover:text-accent"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: '0.75rem' }}
          >
            {c.name}
          </h3>
          <p className="text-primary/65" style={{ fontSize: 14, lineHeight: 1.6, maxWidth: 420 }}>
            {c.desc}
          </p>
        </div>
        <span
          className="shrink-0 flex items-center justify-center rounded-full transition-all duration-200 group-hover:translate-x-1 group-hover:border-accent/40"
          style={{ width: 40, height: 40, border: '1px solid rgba(26,24,20,0.18)', color: 'rgba(26,24,20,0.5)', marginTop: 6 }}
        >
          <ArrowIcon size={14} />
        </span>
      </div>
    </div>
  )
}

export default function WhoWeWorkWith({ t }) {
  const navigate = useNavigate()
  const cases = t.cases || []
  const [active, rowRefs] = useScrollActive(cases.length)

  function goToProject(slug) {
    sessionStorage.setItem('homeScrollY', String(window.scrollY))
    navigate(`/projekt/${slug}`)
  }

  return (
    <section
      id="work"
      className="px-6 sm:px-10 lg:px-24"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
        borderTop: '1px solid rgba(26,24,20,0.08)',
      }}
    >
      <div className="max-w-[1600px] mx-auto">
        <Reveal>
          <SectionLabel>{t.label}</SectionLabel>
          <h2
            className="font-serif text-primary"
            style={{
              fontSize: 'clamp(30px, 4.5vw, 52px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              fontWeight: 400,
              marginBottom: '5rem',
            }}
          >
            {t.headline} <span className="italic text-accent">{t.accentWord}</span>
          </h2>
        </Reveal>

        {cases.length > 0 && (
          <>
            <Reveal style={{ marginBottom: '2rem' }}>
              <SectionLabel>{t.casesLabel}</SectionLabel>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-10 lg:gap-16">
              <StickyPreview cases={cases} activeSlug={cases[active]?.slug} onSelect={goToProject} />

              <div className="flex flex-col">
                {cases.map((c, i) => (
                  <ProjectRow
                    key={c.slug}
                    c={c}
                    index={i}
                    isActive={i === active}
                    rowRef={(el) => { rowRefs.current[i] = el }}
                    onSelect={() => goToProject(c.slug)}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
