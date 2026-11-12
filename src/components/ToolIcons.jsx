// The small marks beside each tool in the toolbox.

// ─── Icon helpers ─────────────────────────────────────────────────────────────
export function PngIcon({ src, alt, offsetY = 0 }) {
  return (
    <img src={src} alt={alt}
      style={{ width: 24, height: 24, objectFit: 'contain', marginTop: offsetY }} />
  )
}

export function SvgIcon({ children }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="rgba(26,24,20,0.55)" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  )
}

// ─── Brand badge — colored square with a glyph, for real tool/language logos ──
export function BadgeIcon({ bg, children }) {
  return (
    <div style={{
      width: 22, height: 22, borderRadius: 5.5,
      background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      {children}
    </div>
  )
}
