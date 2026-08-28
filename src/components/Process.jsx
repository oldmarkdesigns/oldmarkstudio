import { useEffect, useRef, useState } from 'react'
import { SectionLabel, Reveal } from './ui'

// ─── Step illustrations — small line-art visuals, one per step, in Oldmark's
// existing illustration language (see SubscriptionValue.jsx: near-black line
// art with an accent-colored highlight). ──────────────────────────────────────
function StepIllustration({ variant }) {
  let svg
  if (variant === 'understand') {
    svg = (
      <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none">
        {/* shadow copy, offset for depth */}
        <rect x="24" y="22" width="76" height="98" rx="8" fill="#181817" opacity="0.04" />
        {/* document with folded corner */}
        <path d="M32 26h48l16 16v78a4 4 0 01-4 4H32a4 4 0 01-4-4V30a4 4 0 014-4z" stroke="#181817" strokeWidth="2" opacity="0.85" fill="#fdfaf5" />
        <path d="M80 26l16 16H84a4 4 0 01-4-4V26z" stroke="#181817" strokeWidth="2" opacity="0.85" />
        {/* heading + body copy, varied weight for hierarchy */}
        <rect x="40" y="50" width="34" height="6" rx="3" fill="#181817" opacity="0.4" />
        <line x1="40" y1="66" x2="88" y2="66" stroke="#181817" strokeWidth="2" opacity="0.2" />
        <line x1="40" y1="78" x2="88" y2="78" stroke="#181817" strokeWidth="2" opacity="0.2" />
        <line x1="40" y1="90" x2="68" y2="90" stroke="#181817" strokeWidth="2" opacity="0.2" />
        {/* highlighted finding */}
        <circle cx="43" cy="104" r="2.6" fill="var(--color-accent)" />
        <line x1="50" y1="104" x2="80" y2="104" stroke="#181817" strokeWidth="2" opacity="0.22" />
        {/* magnifying glass with glossy highlight */}
        <circle cx="98" cy="104" r="22" fill="#fdfaf5" stroke="var(--color-accent)" strokeWidth="2.6" />
        <path d="M89 96c2-4 6-6 10-6" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinecap="round" opacity="0.55" />
        <line x1="114.5" y1="120.5" x2="132" y2="138" stroke="var(--color-accent)" strokeWidth="2.8" strokeLinecap="round" />
      </svg>
    )
  } else if (variant === 'design') {
    svg = (
      <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none">
        {/* back artboard, offset for depth */}
        <rect x="34" y="34" width="98" height="66" rx="6" fill="#181817" opacity="0.03" />
        {/* main artboard with toolbar */}
        <rect x="26" y="26" width="98" height="66" rx="6" stroke="#181817" strokeWidth="2" strokeDasharray="5 5" opacity="0.4" />
        <path d="M26 32a6 6 0 016-6h86a6 6 0 016 6v6H26z" fill="#181817" opacity="0.05" />
        <circle cx="34" cy="32" r="2" fill="#181817" opacity="0.35" />
        <circle cx="42" cy="32" r="2" fill="#181817" opacity="0.35" />
        <circle cx="50" cy="32" r="2" fill="#181817" opacity="0.35" />
        {/* layout blocks */}
        <rect x="34" y="46" width="30" height="20" rx="3" fill="#181817" opacity="0.1" />
        <circle cx="92" cy="56" r="11" fill="var(--color-accent)" opacity="0.16" />
        <rect x="34" y="72" width="70" height="6" rx="3" fill="#181817" opacity="0.12" />
        {/* bezier pen path with anchor points */}
        <path d="M38 118c14 7 26-15 40-9s24 11 36 2" stroke="#181817" strokeWidth="1.6" opacity="0.35" />
        <circle cx="38" cy="118" r="2.6" fill="#181817" opacity="0.5" />
        <circle cx="78" cy="109" r="2.6" fill="#181817" opacity="0.5" />
        <circle cx="114" cy="111" r="2.6" fill="#181817" opacity="0.5" />
        {/* cursor */}
        <path d="M100 100l27 27-11 2-5 11z" fill="var(--color-accent)" stroke="#181817" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    )
  } else if (variant === 'build') {
    svg = (
      <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none">
        {/* back window, offset for depth */}
        <rect x="16" y="30" width="118" height="88" rx="10" fill="#181817" opacity="0.03" />
        {/* browser chrome */}
        <rect x="22" y="34" width="116" height="86" rx="10" stroke="#181817" strokeWidth="2" opacity="0.85" fill="#fdfaf5" />
        <line x1="22" y1="54" x2="138" y2="54" stroke="#181817" strokeWidth="2" opacity="0.85" />
        <circle cx="34" cy="44" r="2.6" fill="#181817" opacity="0.45" />
        <circle cx="44" cy="44" r="2.6" fill="#181817" opacity="0.45" />
        <circle cx="54" cy="44" r="2.6" fill="#181817" opacity="0.45" />
        <rect x="66" y="40" width="52" height="8" rx="4" fill="#181817" opacity="0.06" />
        {/* sidebar nav */}
        <rect x="22" y="54" width="24" height="64" fill="#181817" opacity="0.035" />
        <rect x="30" y="64" width="9" height="9" rx="2" fill="#181817" opacity="0.16" />
        <rect x="30" y="79" width="9" height="9" rx="2" fill="var(--color-accent)" opacity="0.3" />
        <rect x="30" y="94" width="9" height="9" rx="2" fill="#181817" opacity="0.16" />
        {/* code brackets */}
        <path d="M72 74l-13 14 13 14" stroke="#181817" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M102 74l13 14-13 14" stroke="#181817" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="92" y1="70" x2="84" y2="106" stroke="var(--color-accent)" strokeWidth="2.4" strokeLinecap="round" />
        {/* snippet line below */}
        <line x1="60" y1="112" x2="80" y2="112" stroke="#181817" strokeWidth="1.6" opacity="0.16" strokeLinecap="round" />
      </svg>
    )
  } else {
    svg = (
      <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none">
        <rect x="24" y="26" width="112" height="88" rx="10" stroke="#181817" strokeWidth="2" opacity="0.85" fill="#fdfaf5" />
        {/* gridlines for depth */}
        <line x1="24" y1="48" x2="136" y2="48" stroke="#181817" strokeWidth="1" opacity="0.06" />
        <line x1="24" y1="70" x2="136" y2="70" stroke="#181817" strokeWidth="1" opacity="0.06" />
        <line x1="24" y1="92" x2="136" y2="92" stroke="#181817" strokeWidth="1" opacity="0.06" />
        {/* bar chart beneath the trend line */}
        <rect x="36" y="86" width="10" height="20" rx="2" fill="#181817" opacity="0.08" />
        <rect x="54" y="72" width="10" height="34" rx="2" fill="#181817" opacity="0.08" />
        <rect x="72" y="80" width="10" height="26" rx="2" fill="#181817" opacity="0.08" />
        <rect x="90" y="58" width="10" height="48" rx="2" fill="#181817" opacity="0.08" />
        <rect x="108" y="66" width="10" height="40" rx="2" fill="#181817" opacity="0.08" />
        {/* trend line with data points */}
        <polyline points="41,92 59,76 77,86 95,54 113,64" stroke="var(--color-accent)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="41" cy="92" r="2.4" fill="var(--color-accent)" />
        <circle cx="59" cy="76" r="2.4" fill="var(--color-accent)" />
        <circle cx="77" cy="86" r="2.4" fill="var(--color-accent)" />
        <circle cx="95" cy="54" r="2.4" fill="var(--color-accent)" />
        <circle cx="113" cy="64" r="3.4" fill="var(--color-accent)" />
        {/* callout tag near the peak */}
        <rect x="96" y="32" width="30" height="14" rx="7" fill="var(--color-accent)" opacity="0.16" />
        <line x1="102" y1="39" x2="120" y2="39" stroke="var(--color-accent)" strokeWidth="1.6" opacity="0.55" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <div
      className="flex items-center justify-center rounded-2xl mx-auto"
      style={{
        width: '100%',
        maxWidth: 280,
        aspectRatio: '1 / 1',
        background: 'rgba(26,24,20,0.025)',
        border: '1px solid rgba(26,24,20,0.08)',
        padding: '2.25rem',
      }}
    >
      {svg}
    </div>
  )
}

const STEP_VARIANTS = ['understand', 'design', 'build', 'optimize']

// ─── Steps module — structure and rhythm modeled after Sanna's step-by-step
// section (sanna.co/#hvordan-fungerer-det-se): one shared vertical line down
// the center of the module fills to track real scroll progress through the
// steps, rather than each step fading in independently. Content sits on the
// left, a matching illustration on the right, numbers centered on the spine
// between them. Colors, type, and copy stay Oldmark's own. ────────────────────
const SPINE_GAP = 32 // px of empty space left above/below each number circle
const UNFOCUSED_SCALE = 0.94 // default, slightly-smaller size for steps outside focus
const UNFOCUSED_OPACITY = 0.65 // subtle dim for steps outside focus — stays legible
const FOCUS_WINDOW_RATIO = 0.26 // half-height of the "focused" band, as a fraction of viewport height

function StepsModule({ steps }) {
  const containerRef = useRef(null)
  const rowRefs = useRef([])
  const segmentRailRefs = useRef([])
  const segmentFillRefs = useRef([])

  // ── Scroll-triggered focus animation — each step sits slightly smaller and
  // dimmer by default, then eases up to full scale/opacity as its center nears
  // the middle of the viewport, and back down as it moves away — in either
  // direction, continuously, via the same scroll pass that drives the spine.
  // Disabled under prefers-reduced-motion. ──────────────────────────────────────
  const reducedMotionRef = useRef(false)
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => {
      reducedMotionRef.current = mq.matches
      setReducedMotion(mq.matches)
    }
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Base (unfocused) style for the text and illustration columns — the scroll
  // loop below only ever touches `opacity`/`transform` after mount, so the
  // transition + starting values live here, staggered by `delayMs`.
  function baseFocusStyle(delayMs) {
    if (reducedMotion) return { opacity: 1, transform: 'none' }
    return {
      opacity: UNFOCUSED_OPACITY,
      transform: `scale(${UNFOCUSED_SCALE})`,
      transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delayMs}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delayMs}ms`,
    }
  }

  useEffect(() => {
    let raf = null

    function update() {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const anchor = window.innerHeight * 0.5
      const progressPx = Math.min(Math.max(anchor - rect.top, 0), rect.height)
      const vh = window.innerHeight
      const focusHalfWindow = vh * FOCUS_WINDOW_RATIO
      const reduceMotion = reducedMotionRef.current

      // Pass 1 — update each row's active state and collect its circle's
      // vertical range (relative to the container) so the line can skip it.
      const circleRanges = []
      const focusedFlags = []
      rowRefs.current.forEach((row) => {
        if (!row) return
        const rowRect = row.getBoundingClientRect()
        const rowCenter = rowRect.top - rect.top + rowRect.height / 2
        const active = progressPx >= rowCenter

        const num = row.querySelector('[data-step-number]')
        if (num) {
          num.style.background = active ? 'var(--color-accent)' : '#fdfaf5'
          num.style.borderColor = active ? 'var(--color-accent)' : 'rgba(26,24,20,0.14)'
          num.style.color = active ? '#fdfaf5' : 'rgba(26,24,20,0.35)'
          const numRect = num.getBoundingClientRect()
          circleRanges.push({ top: numRect.top - rect.top, bottom: numRect.bottom - rect.top })
        }

        // Focus scale/opacity — how close is this row's center to the middle
        // of the viewport right now? Continuous and reversible both ways.
        const rowMidViewport = rowRect.top + rowRect.height / 2
        const focused = Math.abs(rowMidViewport - vh / 2) < focusHalfWindow
        focusedFlags.push(focused)

        if (!reduceMotion) {
          const scale = focused ? 1 : UNFOCUSED_SCALE
          const op = focused ? 1 : UNFOCUSED_OPACITY
          const content = row.querySelector('[data-step-content]')
          const illo = row.querySelector('[data-step-illo]')
          if (num) { num.style.opacity = String(op); num.style.transform = `scale(${scale})` }
          if (content) { content.style.opacity = String(op); content.style.transform = `scale(${scale})` }
          if (illo) { illo.style.opacity = String(op); illo.style.transform = `scale(${scale})` }
        }
      })

      // Pass 2 — lay out the line as segments between the gaps around each circle.
      const bounds = []
      let cursor = 0
      circleRanges.forEach((c) => {
        bounds.push([cursor, Math.max(cursor, c.top - SPINE_GAP)])
        cursor = c.bottom + SPINE_GAP
      })
      bounds.push([cursor, Math.max(cursor, rect.height)])

      bounds.forEach(([segTop, segBottom], idx) => {
        const rail = segmentRailRefs.current[idx]
        const fill = segmentFillRefs.current[idx]
        const segHeight = Math.max(0, segBottom - segTop)
        if (rail) {
          rail.style.top = `${segTop}px`
          rail.style.height = `${segHeight}px`
          const neighborFocused = !!focusedFlags[idx - 1] || !!focusedFlags[idx]
          rail.style.opacity = reduceMotion || neighborFocused ? '1' : '0.3'
        }
        if (fill) {
          fill.style.height = `${Math.min(Math.max(progressPx - segTop, 0), segHeight)}px`
        }
      })
    }

    function onScroll() {
      if (raf) return
      raf = requestAnimationFrame(() => {
        update()
        raf = null
      })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <Reveal>
      <div className="max-w-[1040px] mx-auto">
        <div ref={containerRef} className="relative">
          {/* Center spine — rendered as segments that leave a gap above/below
              each number circle, so the line never runs through them. */}
          <div className="absolute" style={{ left: '50%', transform: 'translateX(-50%)', top: 0, bottom: 0, width: 2 }}>
            {Array.from({ length: steps.length + 1 }).map((_, idx) => (
              <div
                key={idx}
                ref={(node) => (segmentRailRefs.current[idx] = node)}
                className="absolute"
                style={{ left: 0, right: 0, background: 'rgba(26,24,20,0.1)', borderRadius: 2 }}
              >
                <div
                  ref={(node) => (segmentFillRefs.current[idx] = node)}
                  style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 0, background: 'var(--color-accent)', borderRadius: 2 }}
                />
              </div>
            ))}
          </div>

          {steps.map((step, i) => (
            <div
              key={step.title}
              ref={(node) => (rowRefs.current[i] = node)}
              className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center text-center lg:text-left"
              style={{
                gap: 'clamp(1.5rem, 4vw, 3rem)',
                paddingTop: 'clamp(2.5rem, 6vw, 4.5rem)',
                paddingBottom: 'clamp(2.5rem, 6vw, 4.5rem)',
              }}
            >
              {/* Content — alternates sides each step; scales into focus just after the number */}
              <div
                data-step-content
                className={`order-2 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-3'}`}
                style={baseFocusStyle(60)}
              >
                <h3
                  className="font-serif"
                  style={{ fontSize: 'clamp(22px, 2.6vw, 30px)', lineHeight: 1.15, fontWeight: 400, color: '#1a1814', marginBottom: '0.85rem' }}
                >
                  {step.title}
                </h3>
                <p className="text-ink/60 mx-auto lg:mx-0" style={{ fontSize: 14.5, lineHeight: 1.75, maxWidth: 400 }}>
                  {step.desc}
                </p>
              </div>

              {/* Number — centered on the spine; leads the stagger with no extra delay */}
              <div className="order-1 lg:order-2 flex justify-center" style={{ zIndex: 1 }}>
                <span
                  data-step-number
                  className="flex items-center justify-center rounded-full font-serif shrink-0"
                  style={{
                    width: 64,
                    height: 64,
                    fontSize: 18,
                    background: '#fdfaf5',
                    border: '1px solid rgba(26,24,20,0.14)',
                    color: 'rgba(26,24,20,0.35)',
                    opacity: reducedMotion ? 1 : UNFOCUSED_OPACITY,
                    transform: reducedMotion ? 'none' : `scale(${UNFOCUSED_SCALE})`,
                    transition: reducedMotion
                      ? 'background 0.4s ease, border-color 0.4s ease, color 0.4s ease'
                      : 'background 0.4s ease, border-color 0.4s ease, color 0.4s ease, opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)',
                  }}
                >
                  0{i + 1}
                </span>
              </div>

              {/* Illustration — alternates sides each step; trails the sequence */}
              <div
                data-step-illo
                className={`order-3 ${i % 2 === 0 ? 'lg:order-3' : 'lg:order-1'}`}
                style={baseFocusStyle(120)}
              >
                <StepIllustration variant={STEP_VARIANTS[i]} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default function Process({ t }) {
  return (
    <section
      id="process"
      className="px-6 sm:px-10 lg:px-24"
      style={{
        background: 'var(--color-cream)',
        paddingTop: '8rem',
        paddingBottom: '8rem',
        borderTop: '1px solid rgba(26,24,20,0.08)',
      }}
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header — center-aligned */}
        <Reveal className="mb-28 mx-auto text-center" style={{ maxWidth: 620 }}>
          <div className="flex justify-center">
            <SectionLabel dark={false}>{t.label}</SectionLabel>
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(30px, 4.5vw, 52px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              fontWeight: 400,
              marginBottom: '1rem',
              color: '#1a1814',
            }}
          >
            {t.headline} <span className="italic text-accent">{t.accentWord}</span>
          </h2>
          <p className="text-ink/55" style={{ fontSize: 14, lineHeight: 1.65, marginBottom: '2.5rem' }}>
            {t.subheading}
          </p>

          <h3
            className="font-serif"
            style={{
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              fontWeight: 400,
              marginBottom: '0.75rem',
              color: '#1a1814',
            }}
          >
            {t.secondaryHeadline} <span className="italic text-accent">{t.secondaryAccentWord}</span>
          </h3>
          <p className="text-ink/55" style={{ fontSize: 14, lineHeight: 1.65 }}>
            {t.secondarySubheading}
          </p>
        </Reveal>

        <StepsModule steps={t.steps} />
      </div>
    </section>
  )
}
