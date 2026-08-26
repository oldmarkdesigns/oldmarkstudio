import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowIcon } from './ui'

const SLUGS = [
  'design-med-data',
  'designsystem-som-skalar',
  'aseo-2026',
  'fran-ide-till-prototyp',
]

// ─── Per-article illustrated thumbnails ────────────────────────────────────
// Each SVG is a self-contained 160×100 illustration with its own gradient bg.
// Rendered inline in every row (always visible, not just on hover).
const ART = [
  // 1. CRO — analytics dashboard
  (
    <svg viewBox="0 0 160 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="a1bg" x1="0" y1="0" x2="160" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9dae9f" /><stop offset="1" stopColor="#1a3d24" />
        </linearGradient>
      </defs>
      <rect width="160" height="100" fill="url(#a1bg)" />
      <ellipse cx="36" cy="16" rx="52" ry="34" fill="rgba(255,255,255,0.07)" />

      {/* Chart panel */}
      <rect x="7" y="7" width="90" height="62" rx="5" fill="rgba(0,0,0,0.22)" />
      {/* Axes */}
      <line x1="18" y1="14" x2="18" y2="62" stroke="rgba(255,255,255,0.2)" strokeWidth="0.75" />
      <line x1="18" y1="62" x2="90" y2="62" stroke="rgba(255,255,255,0.2)" strokeWidth="0.75" />
      {/* Grid */}
      <line x1="18" y1="46" x2="90" y2="46" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" strokeDasharray="3 3" />
      <line x1="18" y1="32" x2="90" y2="32" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" strokeDasharray="3 3" />
      <line x1="18" y1="20" x2="90" y2="20" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" strokeDasharray="3 3" />
      {/* Bars */}
      <rect x="23" y="52" width="9" height="10" rx="1.5" fill="rgba(255,255,255,0.2)" />
      <rect x="35" y="45" width="9" height="17" rx="1.5" fill="rgba(255,255,255,0.27)" />
      <rect x="47" y="38" width="9" height="24" rx="1.5" fill="rgba(255,255,255,0.33)" />
      <rect x="59" y="30" width="9" height="32" rx="1.5" fill="rgba(255,255,255,0.41)" />
      <rect x="71" y="21" width="9" height="41" rx="1.5" fill="rgba(255,255,255,0.52)" />
      {/* Trend line */}
      <polyline points="27.5,52 39.5,45 51.5,38 63.5,30 75.5,21"
        stroke="rgba(255,255,255,0.95)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="75.5" cy="21" r="3" fill="white" />
      <circle cx="75.5" cy="21" r="1.5" fill="rgba(70,160,90,0.9)" />

      {/* Stat panel top-right */}
      <rect x="103" y="7" width="50" height="28" rx="5" fill="rgba(0,0,0,0.22)" />
      <rect x="108" y="13" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.3)" />
      <rect x="108" y="20" width="34" height="8" rx="3" fill="rgba(255,255,255,0.8)" />

      {/* Sparkline panel */}
      <rect x="103" y="40" width="50" height="18" rx="5" fill="rgba(0,0,0,0.22)" />
      <rect x="108" y="45" width="16" height="3" rx="1.5" fill="rgba(255,255,255,0.3)" />
      <polyline points="108,55 116,51 124,53 132,48 140,49 148,45"
        stroke="rgba(255,255,255,0.65)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Bottom mini stats */}
      <rect x="7"  y="75" width="42" height="18" rx="5" fill="rgba(0,0,0,0.22)" />
      <rect x="12" y="80" width="16" height="3" rx="1.5" fill="rgba(255,255,255,0.3)" />
      <rect x="12" y="86" width="28" height="4" rx="2" fill="rgba(255,255,255,0.55)" />

      <rect x="55" y="75" width="42" height="18" rx="5" fill="rgba(0,0,0,0.22)" />
      <rect x="60" y="80" width="14" height="3" rx="1.5" fill="rgba(255,255,255,0.3)" />
      <rect x="60" y="86" width="22" height="4" rx="2" fill="rgba(255,255,255,0.45)" />

      <rect x="103" y="64" width="50" height="29" rx="5" fill="rgba(0,0,0,0.22)" />
      <rect x="108" y="69" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.3)" />
      <polyline points="108,84 116,80 124,82 132,77 140,78 148,74"
        stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // 2. Design System — component + token grid
  (
    <svg viewBox="0 0 160 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="a2bg" x1="0" y1="0" x2="160" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9dcba1" /><stop offset="1" stopColor="#1d4429" />
        </linearGradient>
      </defs>
      <rect width="160" height="100" fill="url(#a2bg)" />
      <ellipse cx="128" cy="22" rx="46" ry="32" fill="rgba(255,255,255,0.06)" />

      {/* Left: components */}
      <rect x="7" y="7" width="68" height="86" rx="5" fill="rgba(0,0,0,0.2)" />
      <rect x="11" y="13" width="26" height="3" rx="1.5" fill="rgba(255,255,255,0.38)" />
      {/* Button */}
      <rect x="11" y="22" width="56" height="14" rx="7" fill="rgba(255,255,255,0.24)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
      <rect x="22" y="27.5" width="22" height="3" rx="1.5" fill="rgba(255,255,255,0.8)" />
      {/* Input */}
      <rect x="11" y="42" width="56" height="13" rx="3" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.28)" strokeWidth="0.75" />
      <rect x="15" y="47.5" width="28" height="2.5" rx="1.25" fill="rgba(255,255,255,0.38)" />
      <line x1="11" y1="42" x2="11" y2="55" stroke="rgba(255,255,255,0.72)" strokeWidth="1.5" />
      {/* Pills */}
      <rect x="11" y="61" width="22" height="9" rx="4.5" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
      <rect x="15" y="65" width="14" height="2" rx="1" fill="rgba(255,255,255,0.65)" />
      <rect x="37" y="61" width="18" height="9" rx="4.5" fill="rgba(255,255,255,0.1)" />
      <rect x="41" y="65" width="10" height="2" rx="1" fill="rgba(255,255,255,0.4)" />
      {/* Card */}
      <rect x="11" y="76" width="56" height="13" rx="4" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.16)" strokeWidth="0.75" />
      <rect x="15" y="80" width="20" height="2.5" rx="1.25" fill="rgba(255,255,255,0.38)" />
      <rect x="15" y="85" width="32" height="2" rx="1" fill="rgba(255,255,255,0.22)" />

      {/* Right: tokens */}
      <rect x="81" y="7" width="72" height="86" rx="5" fill="rgba(0,0,0,0.2)" />
      <rect x="85" y="13" width="22" height="3" rx="1.5" fill="rgba(255,255,255,0.38)" />
      {/* Color swatches */}
      <circle cx="89"  cy="27" r="7" fill="rgba(255,255,255,0.82)" />
      <circle cx="103" cy="27" r="7" fill="rgba(255,255,255,0.56)" />
      <circle cx="117" cy="27" r="7" fill="rgba(255,255,255,0.32)" />
      <circle cx="131" cy="27" r="7" fill="rgba(255,255,255,0.16)" />
      <circle cx="145" cy="27" r="7" fill="rgba(255,255,255,0.07)" />
      {/* Divider */}
      <line x1="85" y1="40" x2="149" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      {/* Type scale */}
      <rect x="85" y="45" width="54" height="6" rx="2" fill="rgba(255,255,255,0.5)" />
      <rect x="85" y="56" width="42" height="5" rx="2" fill="rgba(255,255,255,0.36)" />
      <rect x="85" y="66" width="50" height="4" rx="2" fill="rgba(255,255,255,0.26)" />
      <rect x="85" y="75" width="34" height="3" rx="1.5" fill="rgba(255,255,255,0.17)" />
      <rect x="85" y="83" width="44" height="2.5" rx="1.25" fill="rgba(255,255,255,0.1)" />
      {/* Spacing squares (growing) */}
      <rect x="143" y="46" width="4"  height="4"  rx="0.5" fill="rgba(255,255,255,0.38)" />
      <rect x="141" y="55" width="8"  height="8"  rx="0.5" fill="rgba(255,255,255,0.28)" />
      <rect x="138" y="67" width="11" height="14" rx="0.5" fill="rgba(255,255,255,0.18)" />
    </svg>
  ),

  // 3. ASEO — App Store rankings
  (
    <svg viewBox="0 0 160 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="a3bg" x1="0" y1="0" x2="160" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3d7a4c" /><stop offset="1" stopColor="#0d2215" />
        </linearGradient>
      </defs>
      <rect width="160" height="100" fill="url(#a3bg)" />
      <ellipse cx="80" cy="8" rx="88" ry="28" fill="rgba(255,255,255,0.05)" />

      {/* Phone silhouette — left */}
      <rect x="7" y="7" width="52" height="86" rx="8" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.75" />
      <rect x="10" y="14" width="46" height="72" rx="5" fill="rgba(8,14,10,0.9)" />
      <rect x="22" y="16.5" width="22" height="5" rx="2.5" fill="rgba(0,0,0,0.9)" />
      {/* App icon grid */}
      <rect x="13" y="25" width="11" height="11" rx="3" fill="rgba(157,174,159,0.55)" />
      <rect x="27" y="25" width="11" height="11" rx="3" fill="rgba(255,255,255,0.2)" />
      <rect x="41" y="25" width="11" height="11" rx="3" fill="rgba(157,174,159,0.32)" />
      <rect x="13" y="39" width="11" height="11" rx="3" fill="rgba(255,255,255,0.16)" />
      <rect x="27" y="39" width="11" height="11" rx="3" fill="rgba(157,174,159,0.42)" />
      <rect x="41" y="39" width="11" height="11" rx="3" fill="rgba(255,255,255,0.24)" />
      {/* Rating bar */}
      <rect x="13" y="54" width="38" height="3" rx="1.5" fill="rgba(255,200,80,0.6)" />
      <rect x="13" y="60" width="28" height="2.5" rx="1.25" fill="rgba(255,255,255,0.2)" />
      {/* Home indicator */}
      <rect x="21" y="80" width="14" height="2" rx="1" fill="rgba(255,255,255,0.16)" />

      {/* Ranking chart — right */}
      <rect x="65" y="7" width="88" height="46" rx="5" fill="rgba(0,0,0,0.22)" />
      <rect x="70" y="12" width="38" height="3" rx="1.5" fill="rgba(255,255,255,0.38)" />
      {/* Bars (rank trend, higher = worse, going down = good) */}
      <rect x="72"  y="40" width="7" height="10" rx="1.5" fill="rgba(255,255,255,0.18)" />
      <rect x="82"  y="36" width="7" height="14" rx="1.5" fill="rgba(255,255,255,0.24)" />
      <rect x="92"  y="30" width="7" height="20" rx="1.5" fill="rgba(255,255,255,0.3)" />
      <rect x="102" y="24" width="7" height="26" rx="1.5" fill="rgba(255,255,255,0.38)" />
      <rect x="112" y="19" width="7" height="31" rx="1.5" fill="rgba(255,255,255,0.46)" />
      <rect x="122" y="22" width="7" height="28" rx="1.5" fill="rgba(255,255,255,0.4)" />
      <rect x="132" y="16" width="7" height="34" rx="1.5" fill="rgba(255,255,255,0.54)" />
      {/* Trend line */}
      <polyline points="75.5,40 85.5,36 95.5,30 105.5,24 115.5,19 125.5,22 135.5,16"
        stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="135.5" cy="16" r="2.5" fill="white" />

      {/* Review cards — bottom right */}
      <rect x="65" y="58" width="27" height="35" rx="5" fill="rgba(0,0,0,0.22)" />
      <rect x="69" y="63" width="16" height="3" rx="1.5" fill="rgba(255,255,255,0.38)" />
      <rect x="69" y="70" width="18" height="3" rx="1.5" fill="rgba(255,200,80,0.6)" />
      <rect x="69" y="76" width="15" height="2.5" rx="1.25" fill="rgba(255,255,255,0.18)" />
      <rect x="69" y="81" width="17" height="2" rx="1" fill="rgba(255,255,255,0.13)" />
      <rect x="69" y="86" width="13" height="2" rx="1" fill="rgba(255,255,255,0.1)" />

      <rect x="96" y="58" width="27" height="35" rx="5" fill="rgba(0,0,0,0.22)" />
      <rect x="100" y="63" width="14" height="3" rx="1.5" fill="rgba(255,255,255,0.38)" />
      <rect x="100" y="70" width="16" height="3" rx="1.5" fill="rgba(255,200,80,0.6)" />
      <rect x="100" y="76" width="15" height="2.5" rx="1.25" fill="rgba(255,255,255,0.18)" />
      <rect x="100" y="81" width="17" height="2" rx="1" fill="rgba(255,255,255,0.13)" />

      <rect x="127" y="58" width="26" height="35" rx="5" fill="rgba(0,0,0,0.22)" />
      <rect x="131" y="63" width="16" height="3" rx="1.5" fill="rgba(255,255,255,0.38)" />
      <rect x="131" y="70" width="14" height="3" rx="1.5" fill="rgba(255,200,80,0.6)" />
      <rect x="131" y="76" width="16" height="2.5" rx="1.25" fill="rgba(255,255,255,0.18)" />
    </svg>
  ),

  // 4. AI / Prototype — wireframe → finished design split
  (
    <svg viewBox="0 0 160 100" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="a4bg" x1="0" y1="0" x2="160" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4e8f5e" /><stop offset="1" stopColor="#112018" />
        </linearGradient>
      </defs>
      <rect width="160" height="100" fill="url(#a4bg)" />

      {/* Centre divider + forward arrow */}
      <line x1="80" y1="0" x2="80" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.75" />
      <polygon points="76,50 80,44 84,50 80,47" fill="rgba(255,255,255,0.55)" />
      <line x1="80" y1="47" x2="80" y2="56" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />

      {/* LEFT — Wireframe sketch */}
      <rect x="7" y="7" width="66" height="86" rx="5" fill="rgba(0,0,0,0.2)" />
      {/* Dashed header */}
      <rect x="11" y="12" width="58" height="10" rx="2"
        fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" strokeDasharray="3 2" />
      <rect x="15" y="15.5" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.32)" />
      {/* Image placeholder (X box) */}
      <rect x="11" y="27" width="58" height="30" rx="2"
        fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.28)" strokeWidth="0.75" strokeDasharray="3 2" />
      <line x1="11" y1="27" x2="69" y2="57" stroke="rgba(255,255,255,0.17)" strokeWidth="0.75" />
      <line x1="69" y1="27" x2="11" y2="57" stroke="rgba(255,255,255,0.17)" strokeWidth="0.75" />
      {/* Content lines */}
      <rect x="11" y="62" width="58" height="3" rx="1.5"
        fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" strokeDasharray="2 2" />
      <rect x="11" y="69" width="42" height="3" rx="1.5"
        fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.14)" strokeWidth="0.5" strokeDasharray="2 2" />
      <rect x="11" y="76" width="50" height="3" rx="1.5"
        fill="rgba(255,255,255,0.13)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" strokeDasharray="2 2" />
      {/* Button wireframe */}
      <rect x="11" y="83" width="30" height="8" rx="4"
        fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.32)" strokeWidth="0.75" strokeDasharray="3 2" />
      <rect x="17" y="86" width="18" height="2.5" rx="1.25" fill="rgba(255,255,255,0.32)" />

      {/* RIGHT — Finished design */}
      <rect x="87" y="7" width="66" height="86" rx="5" fill="rgba(0,0,0,0.2)" />
      {/* Solid header */}
      <rect x="91" y="12" width="58" height="10" rx="3" fill="rgba(157,174,159,0.48)" />
      <rect x="95" y="15.5" width="26" height="3" rx="1.5" fill="rgba(255,255,255,0.92)" />
      {/* Hero image */}
      <rect x="91" y="27" width="58" height="30" rx="3" fill="rgba(157,174,159,0.18)" />
      <circle cx="120" cy="42" r="10" fill="rgba(255,255,255,0.1)" />
      <circle cx="120" cy="42" r="6"  fill="rgba(255,255,255,0.17)" />
      <circle cx="120" cy="42" r="3"  fill="rgba(255,255,255,0.5)" />
      <rect x="91" y="47" width="58" height="10" rx="2" fill="rgba(8,14,10,0.28)" />
      {/* Content */}
      <rect x="91" y="62" width="58" height="4" rx="2" fill="rgba(255,255,255,0.55)" />
      <rect x="91" y="70" width="42" height="3" rx="1.5" fill="rgba(255,255,255,0.34)" />
      <rect x="91" y="77" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.26)" />
      {/* Button */}
      <rect x="91" y="83" width="36" height="8" rx="4" fill="rgba(157,174,159,0.72)" />
      <rect x="99" y="86" width="20" height="2.5" rx="1.25" fill="rgba(255,255,255,0.92)" />
    </svg>
  ),
]

// ─── Reveal wrapper ─────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect() } },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// ─── Article row ─────────────────────────────────────────────────────────────
function ArticleRow({ item, index, art }) {
  const num = String(index + 1).padStart(2, '0')
  const slug = SLUGS[index] ?? '#'
  return (
    <Link
      to={`/artikel/${slug}`}
      className="group relative block"
      style={{ borderTop: '1px solid rgba(26,24,20,0.14)', textDecoration: 'none' }}
      onClick={() => sessionStorage.setItem('homeScrollY', String(window.scrollY))}
    >
      <div
        className="relative flex items-center gap-5 sm:gap-8 py-5 sm:py-6 transition-[padding] duration-200 group-hover:pl-3"
        style={{ minHeight: 96 }}
      >
        {/* Number */}
        <span
          className="tabular-nums shrink-0 w-8"
          style={{ fontSize: 12, letterSpacing: '0.06em', color: 'rgba(26,24,20,0.4)' }}
        >
          {num}
        </span>

        {/* Category */}
        <span
          className="hidden sm:inline-flex shrink-0 rounded-full"
          style={{
            fontSize: 10,
            letterSpacing: '0.14em',
            padding: '6px 13px',
            color: 'rgba(26,24,20,0.6)',
            border: '1px solid rgba(26,24,20,0.18)',
          }}
        >
          {item.tag}
        </span>

        {/* Title */}
        <h3
          className="font-serif flex-1 transition-transform duration-200 group-hover:translate-x-1"
          style={{
            fontSize: 'clamp(22px, 2.6vw, 34px)',
            lineHeight: 1.1,
            fontWeight: 400,
            letterSpacing: '-0.01em',
            color: '#1a1814',
          }}
        >
          {item.title}
        </h3>

        {/* Inline thumbnail — always visible on lg+ */}
        <div
          className="hidden lg:block shrink-0 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.04] group-hover:shadow-lg"
          style={{ width: 90, height: 56 }}
        >
          {art}
        </div>

        {/* Date */}
        <span
          className="hidden md:inline shrink-0"
          style={{ fontSize: 11, letterSpacing: '0.1em', color: 'rgba(26,24,20,0.4)' }}
        >
          {item.date}
        </span>

        {/* Arrow chip */}
        <span
          className="shrink-0 flex items-center justify-center rounded-full transition-all duration-200 group-hover:translate-x-1"
          style={{ width: 42, height: 42, border: '1px solid rgba(26,24,20,0.2)', color: '#1a1814' }}
        >
          <ArrowIcon size={15} />
        </span>
      </div>
    </Link>
  )
}

// ─── Section ────────────────────────────────────────────────────────────────
export default function Articles({ t }) {
  return (
    <section
      className="px-6 sm:px-10 lg:px-24"
      style={{ background: 'var(--color-cream)', paddingTop: '7rem', paddingBottom: '7rem' }}
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span style={{ width: 26, height: 1, background: 'rgba(26,24,20,0.3)', display: 'inline-block' }} />
                <span style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--color-accent)', fontWeight: 500 }}>
                  {t.label}
                </span>
              </div>
              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(30px, 4.5vw, 52px)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  fontWeight: 400,
                  color: '#1a1814',
                }}
              >
                {t.headline} <span className="italic" style={{ color: 'var(--color-accent)' }}>{t.accentWord}</span>{' '}
                {t.headlineEnd}
              </h2>
            </div>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="group inline-flex items-center gap-3 rounded-full shrink-0 transition-opacity duration-150 hover:opacity-80"
              style={{ padding: '8px 8px 8px 20px', border: '1px solid rgba(26,24,20,0.2)', color: '#1a1814' }}
            >
              <span style={{ fontSize: 13 }}>{t.viewAll}</span>
              <span
                className="flex items-center justify-center rounded-full transition-transform duration-150 group-hover:translate-x-0.5"
                style={{ width: 32, height: 32, background: '#1a1814', color: 'var(--color-cream)' }}
              >
                <ArrowIcon size={13} />
              </span>
            </a>
          </div>
        </Reveal>

        {/* List */}
        <div style={{ marginTop: '6rem', borderBottom: '1px solid rgba(26,24,20,0.14)' }}>
          {t.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <ArticleRow item={item} index={i} art={ART[i % ART.length]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
