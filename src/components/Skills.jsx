import { useState } from 'react'
import { toolbox } from '../data/toolbox'

// ─── Tool row ─────────────────────────────────────────────────────────────────
function ToolRow({ icon, label }) {
  return (
    <div
      className="flex items-center gap-3 rounded-xl"
      style={{
        padding: '10px 14px',
        border: '1px solid rgba(26,24,20,0.1)',
        background: 'rgba(26,24,20,0.02)',
      }}
    >
      <span style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </span>
      <span className="text-ink/70" style={{ fontSize: 13.5, letterSpacing: '0.01em' }}>{label}</span>
    </div>
  )
}

// ─── Plus/minus toggle icon ───────────────────────────────────────────────────
function ToggleIcon({ open }) {
  return (
    <span
      className="flex items-center justify-center transition-transform duration-300"
      style={{
        width: 32, height: 32,
        borderRadius: '50%',
        border: `1px solid ${open ? 'rgba(157,174,159,0.4)' : 'rgba(26,24,20,0.2)'}`,
        color: open ? 'rgba(157,174,159,0.8)' : 'rgba(26,24,20,0.45)',
        transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        flexShrink: 0,
        transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), border-color 0.2s, color 0.2s',
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
        <rect x="5.5" y="0" width="1" height="12" />
        <rect x="0" y="5.5" width="12" height="1" />
      </svg>
    </span>
  )
}

// ─── Big collapsible panel — Skills ──────────────────────────────────────────
function SkillsPanel({ label, headline, columns, open, onToggle }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={{
        border: `1px solid ${open ? 'rgba(157,174,159,0.22)' : 'rgba(26,24,20,0.1)'}`,
        background: open ? 'rgba(157,174,159,0.05)' : 'rgba(26,24,20,0.02)',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between"
        style={{ padding: '22px 24px', cursor: 'pointer' }}
      >
        <div className="text-left">
          <p className="text-accent uppercase mb-1" style={{ fontSize: 10, letterSpacing: '0.18em' }}>{label}</p>
          <p className="font-serif text-ink" style={{ fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.1 }}>
            {headline}
          </p>
        </div>
        <ToggleIcon open={open} />
      </button>

      <div style={{
        maxHeight: open ? '1200px' : '0px',
        overflow: 'hidden',
        transition: 'max-height 0.45s cubic-bezier(0.22,1,0.36,1)',
      }}>
        <div style={{ padding: '0 24px 24px' }}>
          <div style={{ height: 1, background: 'rgba(26,24,20,0.08)', marginBottom: 20 }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {columns.map((col, i) => (
              <div key={i}>
                <p className="text-ink/50 uppercase mb-3" style={{ fontSize: 10, letterSpacing: '0.16em' }}>{col.title}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {col.rows.map((r, j) => <ToolRow key={j} icon={r.icon} label={r.label} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Big collapsible panel — AI tools ────────────────────────────────────────
function AIPanel({ label, headline, cards, open, onToggle }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={{
        border: `1px solid ${open ? 'rgba(157,174,159,0.22)' : 'rgba(26,24,20,0.1)'}`,
        background: open ? 'rgba(157,174,159,0.05)' : 'rgba(26,24,20,0.02)',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between"
        style={{ padding: '22px 24px', cursor: 'pointer' }}
      >
        <div className="text-left">
          <p className="text-accent uppercase mb-1" style={{ fontSize: 10, letterSpacing: '0.18em' }}>{label}</p>
          <p className="font-serif text-ink" style={{ fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.1 }}>
            {headline}
          </p>
        </div>
        <ToggleIcon open={open} />
      </button>

      <div style={{
        maxHeight: open ? '2000px' : '0px',
        overflow: 'hidden',
        transition: 'max-height 0.5s cubic-bezier(0.22,1,0.36,1)',
      }}>
        <div style={{ padding: '0 24px 24px' }}>
          <div style={{ height: 1, background: 'rgba(26,24,20,0.08)', marginBottom: 20 }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((card, i) => (
              <div key={i} className="rounded-xl p-4"
                style={{ background: 'rgba(26,24,20,0.02)', border: '1px solid rgba(26,24,20,0.08)' }}>
                <p className="text-ink font-medium mb-3" style={{ fontSize: 13.5, lineHeight: 1.35 }}>{card.title}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
                  {card.tools.map((t, j) => <ToolRow key={j} icon={t.icon} label={t.label} />)}
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 5, listStyle: 'none', padding: 0, margin: 0 }}>
                  {card.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-ink/55" style={{ fontSize: 12.5, lineHeight: 1.6 }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--color-accent)', flexShrink: 0, marginTop: 5, opacity: 0.6 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Skills({ lang = 'sv', inProcess = false }) {
  const [skillsOpen, setSkillsOpen] = useState(false)
  const [aiOpen, setAiOpen] = useState(false)
  const isSv = lang === 'sv'

  const { skillColumns, aiCards } = toolbox(isSv)

  const inner = (
      <div className="max-w-[1600px] mx-auto">

        <h3 className="font-serif" style={{ fontSize: 24, lineHeight: 1.1, fontWeight: 400, color: '#1a1814', marginBottom: '1.5rem' }}>
          {isSv ? 'Verktygslåda' : 'Toolbox'}
        </h3>

        {/* ── Skills panel ── */}
        <div style={{ marginBottom: '1.5rem' }}>
          <SkillsPanel
            label={isSv ? 'KOMPETENS' : 'SKILLS'}
            headline={isSv ? 'Verktyg & expertis.' : 'Tools & expertise.'}
            columns={skillColumns}
            open={skillsOpen}
            onToggle={() => setSkillsOpen(v => !v)}
          />
        </div>

        {/* ── AI panel ── */}
        <AIPanel
          label={isSv ? 'AI-VERKTYG' : 'AI TOOLS'}
          headline={isSv ? 'Hur vi använder AI.' : 'How we use AI.'}
          cards={aiCards}
          open={aiOpen}
          onToggle={() => setAiOpen(v => !v)}
        />

      </div>
  )

  if (inProcess) return inner

  return (
    <section
      className="px-6 sm:px-10 lg:px-24"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
        borderTop: '1px solid rgba(245,245,242,0.08)',
      }}
    >
      {inner}
    </section>
  )
}
