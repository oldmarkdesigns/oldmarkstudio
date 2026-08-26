import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getArticle } from '../data/articles'
import { SectionLabel } from './ui'

// ─── Reveal on scroll ─────────────────────────────────────────────────────────
function useRevealRef() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useRevealRef()
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(22px)',
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ─── Hero illustrations per article ──────────────────────────────────────────

function CROIllustration() {
  return (
    <svg viewBox="0 0 900 420" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="cro-bg" x1="0" y1="0" x2="900" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e2420" /><stop offset="1" stopColor="#181817" />
        </linearGradient>
        <linearGradient id="cro-bar" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="rgba(157,174,159,0.9)" /><stop offset="1" stopColor="rgba(157,174,159,0.2)" />
        </linearGradient>
      </defs>
      <rect width="900" height="420" fill="url(#cro-bg)" />

      {/* Ambient glow */}
      <ellipse cx="450" cy="210" rx="380" ry="180" fill="rgba(157,174,159,0.04)" />

      {/* Main dashboard card */}
      <rect x="60" y="50" width="500" height="320" rx="16" fill="rgba(245,245,242,0.03)" stroke="rgba(245,245,242,0.08)" strokeWidth="1" />

      {/* Chart title */}
      <rect x="88" y="78" width="140" height="10" rx="5" fill="rgba(245,245,242,0.25)" />
      <rect x="88" y="96" width="90" height="7" rx="3.5" fill="rgba(245,245,242,0.1)" />

      {/* Axes */}
      <line x1="100" y1="120" x2="100" y2="310" stroke="rgba(245,245,242,0.12)" strokeWidth="1" />
      <line x1="100" y1="310" x2="540" y2="310" stroke="rgba(245,245,242,0.12)" strokeWidth="1" />

      {/* Grid lines */}
      {[170, 220, 265, 310].map((y, i) => (
        <line key={i} x1="100" y1={y} x2="540" y2={y} stroke="rgba(245,245,242,0.05)" strokeWidth="0.75" strokeDasharray="5 5" />
      ))}

      {/* Bars */}
      {[
        { x: 120, h: 80, o: 0.18 },
        { x: 185, h: 110, o: 0.25 },
        { x: 250, h: 145, o: 0.33 },
        { x: 315, h: 175, o: 0.42 },
        { x: 380, h: 140, o: 0.35 },
        { x: 445, h: 210, o: 0.55 },
        { x: 490, h: 190, o: 0.48 },
      ].map((b, i) => (
        <rect key={i} x={b.x} y={310 - b.h} width="42" height={b.h} rx="4"
          fill={`rgba(157,174,159,${b.o})`} />
      ))}

      {/* Trend line */}
      <polyline
        points="141,230 206,200 271,165 336,135 401,170 466,100 511,120"
        stroke="rgba(157,174,159,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        fill="none"
      />
      <circle cx="511" cy="120" r="6" fill="#9dae9f" />
      <circle cx="511" cy="120" r="3" fill="#181817" />

      {/* Stat cards right side */}
      {[
        { y: 50, label: 'KONVERTERING', val: '+24%', sub: 'vs föregående period' },
        { y: 160, label: 'BOUNCE RATE', val: '−18%', sub: 'efter redesign' },
        { y: 270, label: 'AVG SESSION', val: '3:42', sub: 'minuter per besök' },
      ].map((s, i) => (
        <g key={i}>
          <rect x="600" y={s.y} width="240" height="90" rx="12"
            fill="rgba(245,245,242,0.03)" stroke="rgba(245,245,242,0.07)" strokeWidth="1" />
          <rect x="620" y={s.y + 18} width="70" height="6" rx="3" fill="rgba(157,174,159,0.5)" />
          <text x="620" y={s.y + 54} fontFamily="Georgia,serif" fontSize="32" fill="rgba(245,245,242,0.9)" fontStyle="italic">{s.val}</text>
          <rect x="620" y={s.y + 66} width="120" height="5" rx="2.5" fill="rgba(245,245,242,0.15)" />
        </g>
      ))}

      {/* Heatmap strip at bottom */}
      <rect x="60" y="390" width="780" height="20" rx="4" fill="rgba(245,245,242,0.02)" />
      {Array.from({ length: 26 }).map((_, i) => (
        <rect key={i} x={70 + i * 29} y={393} width="24" height="14" rx="2"
          fill={`rgba(157,174,159,${0.05 + Math.sin(i * 0.7) * 0.12 + 0.12})`} />
      ))}
    </svg>
  )
}

function DesignSystemIllustration() {
  return (
    <svg viewBox="0 0 900 420" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="ds-bg" x1="0" y1="0" x2="900" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1b2020" /><stop offset="1" stopColor="#181817" />
        </linearGradient>
      </defs>
      <rect width="900" height="420" fill="url(#ds-bg)" />
      <ellipse cx="450" cy="210" rx="400" ry="200" fill="rgba(157,174,159,0.03)" />

      {/* Token tree — left panel */}
      <rect x="50" y="40" width="220" height="340" rx="14" fill="rgba(245,245,242,0.03)" stroke="rgba(245,245,242,0.07)" strokeWidth="1" />
      <rect x="70" y="62" width="80" height="7" rx="3.5" fill="rgba(157,174,159,0.6)" />

      {/* Token rows */}
      {[
        { y: 90,  indent: 0, w: 140, o: 0.35, dot: '#9dae9f' },
        { y: 112, indent: 16, w: 110, o: 0.22, dot: 'rgba(245,245,242,0.3)' },
        { y: 134, indent: 16, w: 125, o: 0.22, dot: 'rgba(245,245,242,0.3)' },
        { y: 156, indent: 32, w: 90,  o: 0.15, dot: 'rgba(245,245,242,0.18)' },
        { y: 178, indent: 32, w: 100, o: 0.15, dot: 'rgba(245,245,242,0.18)' },
        { y: 210, indent: 0, w: 130, o: 0.35, dot: '#9dae9f' },
        { y: 232, indent: 16, w: 95,  o: 0.22, dot: 'rgba(245,245,242,0.3)' },
        { y: 254, indent: 16, w: 110, o: 0.22, dot: 'rgba(245,245,242,0.3)' },
        { y: 286, indent: 0, w: 120, o: 0.35, dot: '#9dae9f' },
        { y: 308, indent: 16, w: 85,  o: 0.22, dot: 'rgba(245,245,242,0.3)' },
      ].map((r, i) => (
        <g key={i}>
          <circle cx={76 + r.indent} cy={r.y + 3.5} r="3.5" fill={r.dot} />
          <rect x={86 + r.indent} y={r.y} width={r.w} height="7" rx="3.5" fill={`rgba(245,245,242,${r.o})`} />
        </g>
      ))}

      {/* Component grid — center */}
      <rect x="300" y="40" width="300" height="340" rx="14" fill="rgba(245,245,242,0.03)" stroke="rgba(245,245,242,0.07)" strokeWidth="1" />
      <rect x="318" y="62" width="90" height="7" rx="3.5" fill="rgba(157,174,159,0.6)" />

      {/* Button component */}
      <rect x="318" y="88" width="264" height="44" rx="22" fill="rgba(157,174,159,0.18)" stroke="rgba(157,174,159,0.4)" strokeWidth="1" />
      <rect x="380" y="108" width="100" height="8" rx="4" fill="rgba(157,174,159,0.8)" />

      {/* Input */}
      <rect x="318" y="148" width="264" height="40" rx="8" fill="rgba(245,245,242,0.04)" stroke="rgba(245,245,242,0.2)" strokeWidth="1" />
      <rect x="332" y="167" width="80" height="6" rx="3" fill="rgba(245,245,242,0.3)" />
      <line x1="318" y1="148" x2="318" y2="188" stroke="rgba(157,174,159,0.7)" strokeWidth="2" />

      {/* Card component */}
      <rect x="318" y="206" width="124" height="90" rx="10" fill="rgba(245,245,242,0.04)" stroke="rgba(245,245,242,0.12)" strokeWidth="1" />
      <rect x="330" y="216" width="60" height="30" rx="6" fill="rgba(245,245,242,0.06)" />
      <rect x="330" y="256" width="88" height="6" rx="3" fill="rgba(245,245,242,0.25)" />
      <rect x="330" y="268" width="70" height="5" rx="2.5" fill="rgba(245,245,242,0.12)" />
      <rect x="330" y="280" width="80" height="5" rx="2.5" fill="rgba(245,245,242,0.08)" />

      {/* Badge/pill row */}
      <rect x="318" y="310" width="58" height="24" rx="12" fill="rgba(157,174,159,0.2)" stroke="rgba(157,174,159,0.35)" strokeWidth="0.75" />
      <rect x="328" y="319.5" width="38" height="5" rx="2.5" fill="rgba(157,174,159,0.7)" />
      <rect x="382" y="310" width="48" height="24" rx="12" fill="rgba(245,245,242,0.06)" stroke="rgba(245,245,242,0.15)" strokeWidth="0.75" />
      <rect x="392" y="319.5" width="28" height="5" rx="2.5" fill="rgba(245,245,242,0.3)" />
      <rect x="436" y="310" width="38" height="24" rx="12" fill="rgba(245,245,242,0.04)" />
      <rect x="446" y="319.5" width="18" height="5" rx="2.5" fill="rgba(245,245,242,0.18)" />

      {/* Second card variant */}
      <rect x="458" y="206" width="124" height="90" rx="10" fill="rgba(157,174,159,0.06)" stroke="rgba(157,174,159,0.2)" strokeWidth="1" />
      <rect x="470" y="216" width="60" height="30" rx="6" fill="rgba(157,174,159,0.1)" />
      <rect x="470" y="256" width="88" height="6" rx="3" fill="rgba(245,245,242,0.2)" />
      <rect x="470" y="268" width="70" height="5" rx="2.5" fill="rgba(245,245,242,0.1)" />

      {/* Documentation panel — right */}
      <rect x="630" y="40" width="220" height="340" rx="14" fill="rgba(245,245,242,0.03)" stroke="rgba(245,245,242,0.07)" strokeWidth="1" />
      <rect x="650" y="62" width="70" height="7" rx="3.5" fill="rgba(157,174,159,0.6)" />

      {/* Doc lines */}
      {[90, 105, 120, 140, 155, 170, 185, 210, 225, 240, 255, 270, 295, 310, 325].map((y, i) => (
        <rect key={i} x={650} y={y} width={i % 4 === 0 ? 130 : i % 3 === 0 ? 100 : 155} height="6" rx="3"
          fill={`rgba(245,245,242,${i % 4 === 0 ? 0.3 : 0.1})`} />
      ))}

      {/* Code block */}
      <rect x="648" y="340" width="184" height="30" rx="6" fill="rgba(0,0,0,0.3)" />
      <rect x="658" y="350" width="60" height="5" rx="2.5" fill="rgba(157,174,159,0.5)" />
      <rect x="724" y="350" width="40" height="5" rx="2.5" fill="rgba(245,245,242,0.2)" />

      {/* Connecting arrows */}
      <path d="M270 210 Q285 210 300 210" stroke="rgba(157,174,159,0.3)" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arr)" />
      <path d="M600 210 Q615 210 630 210" stroke="rgba(157,174,159,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
    </svg>
  )
}

function ASEOIllustration() {
  return (
    <svg viewBox="0 0 900 420" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="aseo-bg" x1="0" y1="0" x2="900" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1c1e1b" /><stop offset="1" stopColor="#181817" />
        </linearGradient>
      </defs>
      <rect width="900" height="420" fill="url(#aseo-bg)" />

      {/* Phone mockup — left */}
      <rect x="60" y="30" width="200" height="360" rx="28" fill="rgba(245,245,242,0.03)" stroke="rgba(245,245,242,0.1)" strokeWidth="1.5" />
      <rect x="80" y="50" width="160" height="320" rx="18" fill="rgba(0,0,0,0.4)" />
      {/* Notch */}
      <rect x="120" y="52" width="80" height="16" rx="8" fill="rgba(0,0,0,0.8)" />

      {/* App icon grid */}
      {[
        [90, 80], [138, 80], [186, 80],
        [90, 136], [138, 136], [186, 136],
        [90, 192], [138, 192], [186, 192],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="40" height="40" rx="10"
          fill={i % 3 === 0 ? 'rgba(157,174,159,0.35)' : i % 2 === 0 ? 'rgba(245,245,242,0.12)' : 'rgba(245,245,242,0.07)'}
        />
      ))}

      {/* Search bar */}
      <rect x="84" y="248" width="152" height="28" rx="14" fill="rgba(245,245,242,0.08)" stroke="rgba(245,245,242,0.15)" strokeWidth="0.75" />
      <rect x="96" y="259" width="70" height="6" rx="3" fill="rgba(245,245,242,0.3)" />

      {/* Rating */}
      <rect x="84" y="290" width="100" height="6" rx="3" fill="rgba(255,200,80,0.55)" />
      <rect x="84" y="302" width="70" height="5" rx="2.5" fill="rgba(245,245,242,0.18)" />

      {/* Home indicator */}
      <rect x="130" y="360" width="60" height="4" rx="2" fill="rgba(245,245,242,0.15)" />

      {/* Ranking chart — center */}
      <rect x="300" y="40" width="320" height="200" rx="14" fill="rgba(245,245,242,0.03)" stroke="rgba(245,245,242,0.07)" strokeWidth="1" />
      <rect x="318" y="60" width="100" height="8" rx="4" fill="rgba(245,245,242,0.25)" />
      <rect x="318" y="76" width="70" height="6" rx="3" fill="rgba(157,174,159,0.4)" />

      {/* Rank bars going up (improving rank) */}
      {[
        { x: 320, h: 30, o: 0.15 },
        { x: 358, h: 50, o: 0.22 },
        { x: 396, h: 75, o: 0.3 },
        { x: 434, h: 95, o: 0.38 },
        { x: 472, h: 115, o: 0.46 },
        { x: 510, h: 100, o: 0.4 },
        { x: 548, h: 130, o: 0.55 },
      ].map((b, i) => (
        <rect key={i} x={b.x} y={218 - b.h} width="30" height={b.h} rx="3"
          fill={`rgba(157,174,159,${b.o})`} />
      ))}
      <polyline points="335,188 373,168 411,143 449,123 487,103 525,118 563,88"
        stroke="rgba(157,174,159,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="563" cy="88" r="5" fill="#9dae9f" />
      <circle cx="563" cy="88" r="2.5" fill="#181817" />

      {/* Keyword table — center bottom */}
      <rect x="300" y="260" width="320" height="130" rx="14" fill="rgba(245,245,242,0.03)" stroke="rgba(245,245,242,0.07)" strokeWidth="1" />
      <rect x="318" y="278" width="70" height="7" rx="3.5" fill="rgba(245,245,242,0.25)" />
      {[
        { w: 110, vol: 80, diff: 30 },
        { w: 90,  vol: 60, diff: 55 },
        { w: 130, vol: 90, diff: 20 },
        { w: 100, vol: 45, diff: 70 },
      ].map((r, i) => (
        <g key={i}>
          <rect x={318} y={300 + i * 20} width={r.w} height="6" rx="3" fill="rgba(245,245,242,0.2)" />
          <rect x={460} y={300 + i * 20} width={r.vol * 0.5} height="6" rx="3" fill="rgba(157,174,159,0.45)" />
          <rect x={530} y={300 + i * 20} width={r.diff * 0.5} height="6" rx="3"
            fill={r.diff < 40 ? 'rgba(157,174,159,0.6)' : 'rgba(245,245,242,0.15)'} />
        </g>
      ))}

      {/* Screenshots preview — right */}
      <rect x="650" y="40" width="200" height="340" rx="14" fill="rgba(245,245,242,0.03)" stroke="rgba(245,245,242,0.07)" strokeWidth="1" />
      <rect x="666" y="58" width="80" height="7" rx="3.5" fill="rgba(157,174,159,0.6)" />

      {/* Screenshot tiles */}
      {[
        { y: 80, active: true },
        { y: 190, active: false },
        { y: 300, active: false },
      ].map((s, i) => (
        <g key={i}>
          <rect x={666} y={s.y} width={168} height={90} rx={8}
            fill="rgba(245,245,242,0.05)"
            stroke={s.active ? 'rgba(157,174,159,0.5)' : 'rgba(245,245,242,0.1)'}
            strokeWidth={s.active ? 1.5 : 0.75} />
          <rect x={676} y={s.y + 10} width={148} height={16} rx={4} fill="rgba(245,245,242,0.08)" />
          <rect x={676} y={s.y + 34} width={100} height={8} rx={4} fill="rgba(245,245,242,0.18)" />
          <rect x={676} y={s.y + 48} width={130} height={6} rx={3} fill="rgba(245,245,242,0.1)" />
          <rect x={676} y={s.y + 60} width={90}  height={6} rx={3} fill="rgba(245,245,242,0.07)" />
          {s.active && <rect x={666} y={s.y} width={5} height={90} rx={2.5} fill="#9dae9f" />}
        </g>
      ))}
    </svg>
  )
}

function AIIllustration() {
  return (
    <svg viewBox="0 0 900 420" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="ai-bg" x1="0" y1="0" x2="900" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1a1e1b" /><stop offset="1" stopColor="#181817" />
        </linearGradient>
      </defs>
      <rect width="900" height="420" fill="url(#ai-bg)" />
      <ellipse cx="450" cy="210" rx="350" ry="160" fill="rgba(157,174,159,0.03)" />

      {/* Day labels */}
      {['DAG 1', 'DAG 2', 'DAG 3', 'DAG 4', 'DAG 5'].map((d, i) => (
        <text key={i} x={80 + i * 164} y={38} fontFamily="'Inter',sans-serif" fontSize="9"
          fill="rgba(157,174,159,0.6)" letterSpacing="0.12em">{d}</text>
      ))}

      {/* Day 1 — Chat/prompt box */}
      <rect x="50" y="50" width="140" height="340" rx="12" fill="rgba(245,245,242,0.03)" stroke="rgba(245,245,242,0.07)" strokeWidth="1" />
      {[
        { y: 70, w: 100, self: false },
        { y: 100, w: 80, self: false },
        { y: 128, w: 110, self: true },
        { y: 158, w: 90, self: false },
        { y: 186, w: 105, self: false },
        { y: 214, w: 70, self: true },
        { y: 242, w: 115, self: false },
        { y: 272, w: 85, self: false },
        { y: 300, w: 95, self: true },
        { y: 328, w: 110, self: false },
        { y: 356, w: 75, self: false },
      ].map((m, i) => (
        <rect key={i} x={m.self ? 50 + 140 - 16 - m.w : 66} y={m.y}
          width={m.w} height="18" rx={9}
          fill={m.self ? 'rgba(157,174,159,0.2)' : 'rgba(245,245,242,0.06)'}
          stroke={m.self ? 'rgba(157,174,159,0.3)' : 'none'}
          strokeWidth="0.75" />
      ))}

      {/* Arrow */}
      <path d="M196 210 L214 210" stroke="rgba(157,174,159,0.4)" strokeWidth="1.5" markerEnd="url(#a)" />

      {/* Day 2 — Wireframes */}
      <rect x="214" y="50" width="140" height="340" rx="12" fill="rgba(245,245,242,0.03)" stroke="rgba(245,245,242,0.07)" strokeWidth="1" />
      {/* Wireframe boxes */}
      <rect x="224" y="66" width="120" height="20" rx="4" fill="rgba(245,245,242,0.06)" stroke="rgba(245,245,242,0.12)" strokeWidth="0.75" />
      <rect x="224" y="94" width="120" height="60" rx="4" fill="rgba(245,245,242,0.04)" stroke="rgba(245,245,242,0.1)" strokeWidth="0.75" />
      <line x1="224" y1="94" x2="344" y2="154" stroke="rgba(245,245,242,0.06)" strokeWidth="0.75" />
      <line x1="344" y1="94" x2="224" y2="154" stroke="rgba(245,245,242,0.06)" strokeWidth="0.75" />
      <rect x="224" y="162" width="55" height="30" rx="4" fill="rgba(245,245,242,0.04)" stroke="rgba(245,245,242,0.1)" strokeWidth="0.75" />
      <rect x="285" y="162" width="59" height="30" rx="4" fill="rgba(245,245,242,0.04)" stroke="rgba(245,245,242,0.1)" strokeWidth="0.75" />
      <rect x="224" y="200" width="120" height="14" rx="4" fill="rgba(245,245,242,0.06)" stroke="rgba(245,245,242,0.12)" strokeWidth="0.75" />
      <rect x="224" y="222" width="120" height="40" rx="4" fill="rgba(245,245,242,0.03)" stroke="rgba(245,245,242,0.08)" strokeWidth="0.75" />
      <rect x="224" y="270" width="55" height="55" rx="4" fill="rgba(245,245,242,0.03)" stroke="rgba(245,245,242,0.08)" strokeWidth="0.75" />
      <rect x="285" y="270" width="59" height="55" rx="4" fill="rgba(245,245,242,0.03)" stroke="rgba(245,245,242,0.08)" strokeWidth="0.75" />
      <rect x="224" y="333" width="120" height="44" rx="4" fill="rgba(157,174,159,0.06)" stroke="rgba(157,174,159,0.2)" strokeWidth="0.75" />

      <path d="M360 210 L378 210" stroke="rgba(157,174,159,0.4)" strokeWidth="1.5" />

      {/* Day 3 — Designed */}
      <rect x="378" y="50" width="140" height="340" rx="12" fill="rgba(245,245,242,0.03)" stroke="rgba(157,174,159,0.15)" strokeWidth="1" />
      {/* Designed header */}
      <rect x="378" y="50" width="140" height="48" rx="12" fill="rgba(157,174,159,0.1)" />
      <rect x="392" y="62" width="50" height="8" rx="4" fill="rgba(157,174,159,0.7)" />
      <rect x="448" y="64" width="28" height="24" rx="14" fill="rgba(157,174,159,0.3)" />
      {/* Hero image */}
      <rect x="390" y="108" width="116" height="60" rx="8" fill="rgba(157,174,159,0.08)" />
      <ellipse cx="448" cy="138" rx="24" ry="16" fill="rgba(157,174,159,0.12)" />
      <ellipse cx="448" cy="138" rx="12" ry="8" fill="rgba(157,174,159,0.18)" />
      {/* Typography */}
      <rect x="390" y="178" width="90" height="10" rx="5" fill="rgba(245,245,242,0.5)" />
      <rect x="390" y="196" width="116" height="6" rx="3" fill="rgba(245,245,242,0.15)" />
      <rect x="390" y="208" width="100" height="6" rx="3" fill="rgba(245,245,242,0.1)" />
      {/* CTA button */}
      <rect x="390" y="226" width="116" height="32" rx="16" fill="rgba(157,174,159,0.3)" />
      <rect x="420" y="239" width="56" height="6" rx="3" fill="rgba(157,174,159,0.9)" />
      {/* Cards */}
      <rect x="390" y="270" width="52" height="52" rx="8" fill="rgba(245,245,242,0.04)" stroke="rgba(245,245,242,0.1)" strokeWidth="0.75" />
      <rect x="450" y="270" width="56" height="52" rx="8" fill="rgba(245,245,242,0.04)" stroke="rgba(245,245,242,0.1)" strokeWidth="0.75" />
      <rect x="390" y="332" width="116" height="50" rx="8" fill="rgba(245,245,242,0.03)" stroke="rgba(245,245,242,0.07)" strokeWidth="0.75" />

      <path d="M524 210 L542 210" stroke="rgba(157,174,159,0.4)" strokeWidth="1.5" />

      {/* Day 4 — Testing */}
      <rect x="542" y="50" width="140" height="340" rx="12" fill="rgba(245,245,242,0.03)" stroke="rgba(245,245,242,0.07)" strokeWidth="1" />
      {/* Cursor/mouse path */}
      <path d="M590 100 Q630 130 610 170 Q590 210 640 240 Q660 255 620 290"
        stroke="rgba(157,174,159,0.5)" strokeWidth="1.5" strokeDasharray="5 4" fill="none" />
      {/* Cursor icon */}
      <polygon points="620,290 626,310 630,302 638,306" fill="rgba(157,174,159,0.7)" />
      {/* Click markers */}
      {[{ x: 590, y: 100 }, { x: 610, y: 170 }, { x: 640, y: 240 }].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="8" fill="rgba(157,174,159,0.1)" stroke="rgba(157,174,159,0.4)" strokeWidth="1" />
          <circle cx={p.x} cy={p.y} r="3" fill="rgba(157,174,159,0.7)" />
        </g>
      ))}
      {/* Notes */}
      <rect x="552" y="310" width="120" height="72" rx="8" fill="rgba(245,245,242,0.04)" stroke="rgba(245,245,242,0.1)" strokeWidth="0.75" />
      {[320, 334, 348, 362].map((y, i) => (
        <rect key={i} x={562} y={y} width={[80, 95, 65, 75][i]} height="5" rx="2.5" fill="rgba(245,245,242,0.15)" />
      ))}

      <path d="M688 210 L706 210" stroke="rgba(157,174,159,0.4)" strokeWidth="1.5" />

      {/* Day 5 — Delivery */}
      <rect x="706" y="50" width="144" height="340" rx="12" fill="rgba(157,174,159,0.06)" stroke="rgba(157,174,159,0.2)" strokeWidth="1" />
      {/* Checkmarks */}
      {[
        'Prototyp klar',
        'Testrapport',
        'Nästa steg',
        'Komponentlib',
      ].map((label, i) => (
        <g key={i}>
          <circle cx="730" cy={100 + i * 60} r="14" fill="rgba(157,174,159,0.15)" stroke="rgba(157,174,159,0.4)" strokeWidth="1" />
          <path d={`M722,${100 + i * 60} l6,6 l10,-10`}
            stroke="rgba(157,174,159,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <rect x="750" y={93 + i * 60} width={[75, 65, 70, 80][i]} height="6" rx="3" fill="rgba(245,245,242,0.3)" />
          <rect x="750" y={105 + i * 60} width={[55, 50, 60, 65][i]} height="5" rx="2.5" fill="rgba(245,245,242,0.1)" />
        </g>
      ))}
    </svg>
  )
}

const ILLUSTRATIONS = {
  'design-med-data': CROIllustration,
  'designsystem-som-skalar': DesignSystemIllustration,
  'aseo-2026': ASEOIllustration,
  'fran-ide-till-prototyp': AIIllustration,
}

// ─── Article page ─────────────────────────────────────────────────────────────

export default function ArticlePage({ lang = 'sv' }) {
  const { slug } = useParams()
  const navigate = useNavigate()
  const article = getArticle(slug)

  useEffect(() => {
    // Instant jump — no animation so user lands at top immediately
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-primary/68" style={{ fontSize: 14 }}>Artikel hittades inte.</p>
      </div>
    )
  }

  const t = article[lang]
  const Illustration = ILLUSTRATIONS[slug]

  return (
    <div className="bg-background min-h-screen font-sans">
      {/* Back button */}
      <div className="px-6 sm:px-10 lg:px-24 pt-8 max-w-[1600px] mx-auto">
        <button
          onClick={() => {
            const saved = sessionStorage.getItem('homeScrollY')
            navigate('/')
            // Restore position after React flushes the new page
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                window.scrollTo({ top: saved ? parseInt(saved, 10) : 0, behavior: 'instant' })
              })
            })
          }}
          className="inline-flex items-center gap-2 text-primary/68 hover:text-primary/70 transition-colors duration-150"
          style={{ fontSize: 12, letterSpacing: '0.08em' }}
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 5h12M1 5l4-4M1 5l4 4" />
          </svg>
          TILLBAKA
        </button>
      </div>

      {/* Header */}
      <header className="px-6 sm:px-10 lg:px-24 pt-12 pb-14 max-w-[1600px] mx-auto">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>{article.tag}</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h1
              className="font-serif text-primary"
              style={{
                fontSize: 'clamp(32px, 5vw, 68px)',
                lineHeight: 1.04,
                letterSpacing: '-0.02em',
                fontWeight: 400,
                marginBottom: '1.75rem',
              }}
            >
              {t.title}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p
              className="text-primary/68"
              style={{ fontSize: 16, lineHeight: 1.7, maxWidth: 560, marginBottom: '2rem' }}
            >
              {t.excerpt}
            </p>
            <p
              className="text-primary/60 uppercase"
              style={{ fontSize: 11, letterSpacing: '0.12em' }}
            >
              {article.date} · {article.readTime} läsning
            </p>
          </Reveal>
        </div>
      </header>

      {/* Hero illustration */}
      {Illustration && (
        <Reveal delay={180}>
          <div
            className="mx-6 sm:mx-10 lg:mx-24 rounded-2xl overflow-hidden mb-20"
            style={{ maxWidth: 'calc(1600px - 12rem)', height: 'clamp(260px, 38vw, 420px)' }}
          >
            <Illustration />
          </div>
        </Reveal>
      )}

      {/* Article body */}
      <article className="px-6 sm:px-10 lg:px-24 max-w-[1600px] mx-auto">
        <div className="max-w-2xl">
          {/* Intro */}
          <Reveal>
            <p
              className="text-primary/70 font-serif"
              style={{
                fontSize: 'clamp(17px, 1.6vw, 21px)',
                lineHeight: 1.7,
                fontWeight: 400,
                marginBottom: '3.5rem',
                borderLeft: '2px solid rgba(157,174,159,0.35)',
                paddingLeft: '1.5rem',
              }}
            >
              {t.intro}
            </p>
          </Reveal>

          {/* Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {t.sections.map((section, i) => (
              <Reveal key={i} delay={i * 40}>
                <section>
                  <h2
                    className="font-serif text-primary"
                    style={{
                      fontSize: 'clamp(20px, 2vw, 26px)',
                      lineHeight: 1.2,
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {section.heading}
                  </h2>
                  {section.body.split('\n\n').map((para, j) => (
                    <p
                      key={j}
                      className="text-primary/60"
                      style={{
                        fontSize: 15,
                        lineHeight: 1.8,
                        marginBottom: j < section.body.split('\n\n').length - 1 ? '1rem' : 0,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </section>
              </Reveal>
            ))}
          </div>

          {/* Conclusion */}
          <Reveal>
            <div
              style={{
                marginTop: '4rem',
                paddingTop: '3rem',
                borderTop: '1px solid rgba(26,24,20,0.08)',
              }}
            >
              <p
                className="font-serif text-primary/80"
                style={{
                  fontSize: 'clamp(17px, 1.6vw, 21px)',
                  lineHeight: 1.7,
                  fontWeight: 400,
                  fontStyle: 'italic',
                }}
              >
                {t.conclusion}
              </p>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Footer spacer */}
      <div style={{ height: '8rem' }} />

      {/* Back to articles */}
      <div
        className="px-6 sm:px-10 lg:px-24 pb-24 max-w-[1600px] mx-auto"
        style={{ borderTop: '1px solid rgba(26,24,20,0.06)', paddingTop: '4rem' }}
      >
        <button
          onClick={() => {
            const saved = sessionStorage.getItem('homeScrollY')
            navigate('/')
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                window.scrollTo({ top: saved ? parseInt(saved, 10) : 0, behavior: 'instant' })
              })
            })
          }}
          className="inline-flex items-center gap-3 text-primary/68 hover:text-accent transition-colors duration-150"
          style={{ fontSize: 12, letterSpacing: '0.1em' }}
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 5h12M1 5l4-4M1 5l4 4" />
          </svg>
          TILLBAKA TILL STARTSIDAN
        </button>
      </div>
    </div>
  )
}
