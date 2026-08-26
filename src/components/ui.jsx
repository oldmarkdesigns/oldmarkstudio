import { useEffect, useRef, useState } from 'react'

// ─── Reveal — fades/rises content in on scroll (and immediately for
// above-the-fold content, since IntersectionObserver fires on mount) ──────────
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

export function Reveal({ children, delay = 0, className, style }) {
  const [ref, visible] = useRevealRef()
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(20px)',
      transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  )
}

// Minimal stroke icon set — keyed by name, drawn with currentColor.
const ICON_PATHS = {
  window: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
      <path d="M3 9h18" />
      <path d="M6.5 6.75h.01" />
    </>
  ),
  code: (
    <>
      <path d="M8.5 8.5 4 12l4.5 3.5" />
      <path d="M15.5 8.5 20 12l-4.5 3.5" />
      <path d="M13.5 6 10.5 18" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
    </>
  ),
  cursor: (
    <>
      <path d="M5 4l6 16 2.2-6.8L20 11z" />
    </>
  ),
  mobile: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  funnel: (
    <>
      <path d="M3.5 4.5h17l-6.5 7.5v6l-4 2v-8z" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="M20 20l-4.5-4.5" />
    </>
  ),
  flag: (
    <>
      <path d="M5.5 21V3.5" />
      <path d="M5.5 4h11l-2.2 3.2L16.5 11h-11" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 18.5a8 8 0 1 1 16 0" />
      <path d="M12 14.5l4.5-4" />
      <path d="M4 18.5h16" />
    </>
  ),
  bolt: (
    <>
      <path d="M13.5 2 4.5 14h6.5l-1 8 9.5-12.5h-7z" />
    </>
  ),
  loop: (
    <>
      <path d="M4.5 10a7.5 7.5 0 0 1 13-3" />
      <path d="M19.5 14a7.5 7.5 0 0 1-13 3" />
      <path d="M17.5 3.5v4h-4" />
      <path d="M6.5 20.5v-4h4" />
    </>
  ),
}

export function Icon({ name, size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICON_PATHS[name] || ICON_PATHS.grid}
    </svg>
  )
}

export function ArrowIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

// Pill button with a circular arrow chip. variant: 'primary' | 'secondary' | 'ink'
export function PillButton({ label, onClick, href, variant = 'primary', className = '' }) {
  const base =
    'group inline-flex items-center gap-3 rounded-full font-medium transition-all duration-150 select-none'

  const styles = {
    primary: {
      wrap: 'bg-[#181817] text-cream hover:opacity-90 pl-6 pr-1.5 py-1.5',
      chip: 'bg-cream text-[#181817]',
    },
    secondary: {
      wrap: 'text-primary/80 hover:text-primary pl-6 pr-1.5 py-1.5',
      chip: 'bg-primary/10 text-primary',
      border: '1px solid rgba(26,24,20,0.18)',
    },
    ink: {
      wrap: 'bg-ink text-cream hover:opacity-90 pl-6 pr-1.5 py-1.5',
      chip: 'bg-accent text-[#181817]',
    },
  }

  const s = styles[variant]
  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      href={href}
      onClick={onClick}
      className={`${base} ${s.wrap} ${className}`}
      style={s.border ? { border: s.border } : undefined}
    >
      <span style={{ fontSize: 13, letterSpacing: '0.01em' }}>{label}</span>
      <span
        className={`flex items-center justify-center rounded-full transition-transform duration-150 group-hover:translate-x-0.5 ${s.chip}`}
        style={{ width: 34, height: 34 }}
      >
        <ArrowIcon />
      </span>
    </Tag>
  )
}

export const CONTACT_EMAIL = 'samuel@oldmark.se'

// ─── Small copy-to-clipboard icon button with a "Kopiera"/"Copy" hover tooltip.
// Reused by MailContactButton and the footer's plain-text email. ──────────────
export function CopyIconButton({ lang = 'sv', color = 'rgba(26,24,20,0.55)', hoverBg = 'rgba(26,24,20,0.08)' }) {
  const isSv = lang === 'sv'
  const [hover, setHover] = useState(false)
  const [copied, setCopied] = useState(false)

  function handleCopy(e) {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(CONTACT_EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        onClick={handleCopy}
        aria-label={isSv ? 'Kopiera' : 'Copy'}
        className="flex items-center justify-center rounded-full transition-colors duration-150"
        style={{ width: 26, height: 26, color, background: 'transparent' }}
        onMouseOver={(e) => { e.currentTarget.style.background = hoverBg }}
        onMouseOut={(e) => { e.currentTarget.style.background = 'transparent' }}
      >
        {copied ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="12" height="12" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>
      <span
        className="absolute left-1/2 pointer-events-none"
        style={{
          bottom: '130%',
          transform: `translateX(-50%) translateY(${hover || copied ? '0px' : '4px'})`,
          opacity: hover || copied ? 1 : 0,
          transition: 'opacity 0.15s ease, transform 0.15s ease',
          fontSize: 10.5,
          letterSpacing: '0.04em',
          whiteSpace: 'nowrap',
          background: '#181817',
          color: '#ffffff',
          padding: '4px 9px',
          borderRadius: 6,
        }}
      >
        {copied ? (isSv ? 'Kopierad!' : 'Copied!') : (isSv ? 'Kopiera' : 'Copy')}
      </span>
    </div>
  )
}

// ─── Email + copy icon, always expanded.
// variant 'light' is for use on dark surfaces (e.g. the featured pricing tier). ─
export function MailContactButton({ lang = 'sv', variant = 'dark' }) {
  const isLight = variant === 'light'

  return (
    <div
      className="inline-flex items-center shrink-0 rounded-full"
      style={{
        height: 44,
        background: isLight ? '#ffffff' : '#181817',
        paddingLeft: 16,
        paddingRight: 14,
        gap: 8,
      }}
    >
      <div className="flex items-center gap-1.5" style={{ whiteSpace: 'nowrap' }}>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="transition-opacity duration-150 hover:opacity-70"
          style={{ fontSize: 13, letterSpacing: '0.01em', color: isLight ? '#181817' : '#ffffff' }}
        >
          {CONTACT_EMAIL}
        </a>

        <CopyIconButton
          lang={lang}
          color={isLight ? '#181817' : '#ffffff'}
          hoverBg={isLight ? 'rgba(24,24,23,0.08)' : 'rgba(255,255,255,0.15)'}
        />
      </div>
    </div>
  )
}

export function SectionLabel({ children, dark = false }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span
        style={{
          width: 26,
          height: 1,
          background: dark ? 'rgba(245,245,242,0.3)' : 'rgba(26,24,20,0.3)',
          display: 'inline-block',
        }}
      />
      <span
        style={{
          fontSize: 11,
          letterSpacing: '0.18em',
          color: 'var(--color-accent)',
          fontWeight: 500,
        }}
      >
        {children}
      </span>
    </div>
  )
}
