import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionLabel, Reveal, Icon, PillButton } from './ui'

// ─── Small illustration — a website mockup with a recurring/subscription
// badge, in the brand's near-black tone. ────────────────────────────────────
function SubscriptionIllustration() {
  return (
    <div className="relative" style={{ width: 220, height: 220 }}>
      <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="24" width="168" height="140" rx="14" stroke="#181817" strokeWidth="2" opacity="0.85" />
        <line x1="14" y1="54" x2="182" y2="54" stroke="#181817" strokeWidth="2" opacity="0.85" />
        <circle cx="30" cy="39" r="3" fill="#181817" opacity="0.45" />
        <circle cx="42" cy="39" r="3" fill="#181817" opacity="0.45" />
        <circle cx="54" cy="39" r="3" fill="#181817" opacity="0.45" />
        <rect x="30" y="70" width="90" height="11" rx="3" fill="#181817" opacity="0.14" />
        <rect x="30" y="90" width="140" height="8" rx="3" fill="#181817" opacity="0.09" />
        <rect x="30" y="105" width="110" height="8" rx="3" fill="#181817" opacity="0.09" />
        <rect x="30" y="128" width="56" height="22" rx="7" fill="#181817" opacity="0.9" />
      </svg>
      <div
        className="absolute flex items-center justify-center rounded-full"
        style={{ width: 64, height: 64, background: '#181817', right: 4, bottom: 4, boxShadow: '0 12px 28px rgba(0,0,0,0.2)' }}
      >
        <Icon name="loop" size={26} className="text-white" />
      </div>
    </div>
  )
}

const CARD_RADIUS = 10
const UNFOCUSED_SCALE = 0.94
const UNFOCUSED_BLUR = 4 // px — subtle, card stays legible before reaching full size
const TRANSITION = 'transform 1.1s cubic-bezier(0.22,1,0.36,1), filter 1.1s cubic-bezier(0.22,1,0.36,1)'
const FOCUS_WINDOW_RATIO = 0.2 // half-height of the "focused" band, as a fraction of viewport height — tight, so full size lands close to center

// ─── Scroll-focus animation — the card sits slightly smaller and blurred by
// default, then smoothly scales up to its normal size and sharpens once the
// card's own center is close to the vertical center of the viewport, as the
// user scrolls down into it from above. Once grown, it latches at full size —
// scrolling on past it does not shrink it back down. It only re-arms after
// the card has fully scrolled out of view above, so approaching it from above
// again replays the same animation. Pure transform/filter — never touches
// layout, width, or padding, so the card's position relative to the rest of
// the page never shifts. Disabled under prefers-reduced-motion. ───────────────
function useScrollFocus(cardRef) {
  useEffect(() => {
    const cardEl = cardRef.current
    if (!cardEl) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = null
    let grown = false

    function update() {
      const rect = cardEl.getBoundingClientRect()
      const vh = window.innerHeight

      // Fully scrolled past, above the viewport — re-arm for the next approach.
      if (rect.bottom < 0) grown = false

      if (!grown) {
        const cardMid = rect.top + rect.height / 2
        if (Math.abs(cardMid - vh / 2) < vh * FOCUS_WINDOW_RATIO) grown = true
      }

      cardEl.style.transform = grown ? 'scale(1)' : `scale(${UNFOCUSED_SCALE})`
      cardEl.style.filter = grown ? 'blur(0px)' : `blur(${UNFOCUSED_BLUR}px)`
    }

    function onScroll() {
      if (raf) return
      raf = requestAnimationFrame(() => { update(); raf = null })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [cardRef])
}

// ─── "Why a subscription" — one card, aligned with the rest of the landing
// page's padding (not full-bleed like the dedicated Webbutveckling page).
// Used on both the landing page and the Webbutveckling page; `showCta` adds
// the "Läs mer och kom igång" link through to the full page — landing page
// only, since the Webbutveckling page already has its own pricing/CTA below. ──
export default function SubscriptionValue({ t, showCta = false }) {
  const cardRef = useRef(null)
  const navigate = useNavigate()
  useScrollFocus(cardRef)

  function goToWebSolution() {
    sessionStorage.setItem('homeScrollY', String(window.scrollY))
    navigate('/webbutveckling')
  }

  const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section className="px-6 sm:px-10 lg:px-24 mb-24">
      <div className="max-w-[1600px] mx-auto">
        <Reveal>
          <div
            ref={cardRef}
            style={{
              width: '100%',
              minHeight: 480,
              background: 'linear-gradient(135deg, #fbf2f6 0%, #fdf8f2 50%, #fdf3e9 100%)',
              borderRadius: CARD_RADIUS,
              paddingTop: 'clamp(4rem, 9vw, 7rem)',
              paddingBottom: 'clamp(4rem, 9vw, 7rem)',
              paddingLeft: 'clamp(1.5rem, 6vw, 5rem)',
              paddingRight: 'clamp(1.5rem, 6vw, 5rem)',
              boxSizing: 'border-box',
              transform: reducedMotion ? 'none' : `scale(${UNFOCUSED_SCALE})`,
              filter: reducedMotion ? 'none' : `blur(${UNFOCUSED_BLUR}px)`,
              transition: reducedMotion ? 'none' : TRANSITION,
            }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-12 h-full">
              <div style={{ maxWidth: 680 }}>
                <SectionLabel>{t.valueLabel}</SectionLabel>
                <h2 className="font-serif text-primary"
                  style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 400, marginBottom: '1.5rem' }}>
                  {t.valueTitle}
                </h2>
                <p className="text-primary/70" style={{ fontSize: 15.5, lineHeight: 1.75, marginBottom: '2.5rem' }}>
                  {t.valueSubtitle}
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {t.valuePoints.map((item) => (
                    <li key={item.title}>
                      <div className="flex items-start gap-3">
                        <span className="text-accent shrink-0" style={{ fontSize: 15, lineHeight: 1.6, marginTop: 1 }}>✦</span>
                        <span style={{ fontSize: 15.5, lineHeight: 1.6, color: '#1a1814', fontWeight: 600 }}>
                          {item.title}
                        </span>
                      </div>
                      <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(26,24,20,0.65)', marginTop: '0.4rem', paddingLeft: 27 }}>
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>

                {showCta && (
                  <div style={{ marginTop: '2.5rem' }}>
                    <PillButton label={t.valueCta} variant="primary" onClick={goToWebSolution} />
                  </div>
                )}
              </div>

              <div className="hidden lg:flex shrink-0 ml-auto">
                <SubscriptionIllustration />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
