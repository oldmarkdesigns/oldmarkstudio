import { useState } from 'react'
import imgFigma       from '../assets/tool-icons/figma.png'
import imgFramer      from '../assets/tool-icons/framer.png'
import imgCursor      from '../assets/tool-icons/cursor.png'
import imgNotion      from '../assets/tool-icons/notion.png'
import imgWebflow     from '../assets/tool-icons/webflow.png'
import imgClaude      from '../assets/tool-icons/claude.png'
import imgChatGPT     from '../assets/tool-icons/chatgpt.png'
import imgCodex       from '../assets/tool-icons/codex.png'
import imgGemini      from '../assets/tool-icons/gemini.png'
import imgWordPress   from '../assets/tool-icons/wordpress.png'
import imgAntigravity from '../assets/tool-icons/antigravity.png'

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

// ─── Icon helpers ─────────────────────────────────────────────────────────────
function PngIcon({ src, alt, offsetY = 0 }) {
  return (
    <img src={src} alt={alt}
      style={{ width: 24, height: 24, objectFit: 'contain', marginTop: offsetY }} />
  )
}

function SvgIcon({ children }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="rgba(26,24,20,0.55)" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  )
}

// ─── Brand badge — colored square with a glyph, for real tool/language logos ──
function BadgeIcon({ bg, children }) {
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

  const skillColumns = [
    {
      title: isSv ? 'UX Design' : 'UX Design',
      rows: [
        { icon: <PngIcon src={imgFigma} alt="Figma" />, label: 'Figma' },
        { icon: <SvgIcon><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></SvgIcon>, label: isSv ? 'Research' : 'Research' },
        { icon: <SvgIcon><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></SvgIcon>, label: isSv ? 'Prototyping' : 'Prototyping' },
        { icon: <SvgIcon><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></SvgIcon>, label: isSv ? 'Användartestning' : 'User testing' },
        { icon: <SvgIcon><path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"/><path d="M12 8v4l3 3"/></SvgIcon>, label: 'EAA / WCAG 2.2' },
      ],
    },
    {
      title: 'Frontend',
      rows: [
        {
          icon: (
            <BadgeIcon bg="#E34F26">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3 3 12l5 9" />
                <path d="M16 3l5 9-5 9" />
              </svg>
            </BadgeIcon>
          ),
          label: 'HTML',
        },
        {
          icon: (
            <BadgeIcon bg="#1572B6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 4c-2 0-3 1-3 3v2c0 1.5-.5 2-2 2 1.5 0 2 .5 2 2v2c0 2 1 3 3 3" />
                <path d="M15 4c2 0 3 1 3 3v2c0 1.5.5 2 2 2-1.5 0-2 .5-2 2v2c0 2-1 3-3 3" />
              </svg>
            </BadgeIcon>
          ),
          label: 'CSS / Tailwind',
        },
        {
          icon: (
            <BadgeIcon bg="#F7DF1E">
              <span style={{ color: '#000', fontSize: 9, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.02em' }}>JS</span>
            </BadgeIcon>
          ),
          label: 'JavaScript / TypeScript',
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
              <g stroke="#61DAFB" strokeWidth="1.4">
                <ellipse cx="12" cy="12" rx="10" ry="4.2" />
                <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
              </g>
            </svg>
          ),
          label: 'React',
        },
        {
          icon: (
            <BadgeIcon bg="#F05032">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
                <circle cx="6" cy="6" r="1.8" fill="#fff" stroke="none" />
                <circle cx="6" cy="18" r="1.8" fill="#fff" stroke="none" />
                <circle cx="18" cy="12" r="1.8" fill="#fff" stroke="none" />
                <path d="M6 8v8M6 8c0 4 4 4 8 4h4" />
              </svg>
            </BadgeIcon>
          ),
          label: 'Git',
        },
      ],
    },
    {
      title: 'Web',
      rows: [
        { icon: <PngIcon src={imgFramer} alt="Framer" />, label: 'Framer' },
        { icon: <PngIcon src={imgWebflow} alt="Webflow" />, label: 'Webflow' },
        { icon: <PngIcon src={imgWordPress} alt="WordPress" />, label: 'WordPress' },
        { icon: <PngIcon src={imgCursor} alt="Cursor" />, label: 'Cursor' },
        { icon: <PngIcon src={imgAntigravity} alt="Antigravity" />, label: 'Antigravity' },
      ],
    },
  ]

  const aiCards = [
    {
      title: isSv ? 'AI för snabb prototyping & utveckling' : 'AI for Rapid Prototyping & Development',
      tools: [
        { icon: <PngIcon src={imgCursor} alt="Cursor" />, label: 'Cursor' },
        { icon: <PngIcon src={imgCodex} alt="Codex" />, label: 'Codex' },
      ],
      bullets: isSv
        ? ['Snabbt bygga och iterera på webbapp-prototyper', 'Utforska flera implementationsmetoder effektivt', 'Minska tid från koncept till fungerande prototyp']
        : ['Quickly build and iterate on web app prototypes', 'Explore multiple implementation approaches efficiently', 'Reduce time from concept to working prototype'],
    },
    {
      title: isSv ? 'AI för webbplatsskapande & kundarbete' : 'AI for Website Creation & Client Work',
      tools: [
        { icon: <PngIcon src={imgWebflow} alt="Webflow" />, label: 'Webflow AI' },
      ],
      bullets: isSv
        ? ['Generera layouts och sektioner från prompts', 'Snabba upp innehållsskapande och iteration', 'Leverera produktionsklara webbplatser snabbare']
        : ['Generating layouts and sections from prompts', 'Speeding up content creation and iteration', 'Delivering production-ready websites faster'],
    },
    {
      title: isSv ? 'AI för idéutveckling, spec & visuell utforskning' : 'AI for Ideation, Specifications & Visuals',
      tools: [
        { icon: <PngIcon src={imgClaude} alt="Claude" />, label: 'Claude' },
        { icon: <PngIcon src={imgChatGPT} alt="ChatGPT" />, label: 'ChatGPT' },
        { icon: <PngIcon src={imgGemini} alt="Gemini" offsetY={2} />, label: 'Gemini' },
      ],
      bullets: isSv
        ? ['Brainstorma UX-koncept och interaktionsflöden', 'Skriva och förfina produkt- och tekniska specifikationer', 'Generera och utforska visuella idéer under designfasen']
        : ['Brainstorm UX concepts and interaction flows', 'Write and refine product and technical specifications', 'Generate and explore visual ideas and imagery during design'],
    },
    {
      title: isSv ? 'AI för dokumentation & kunskapshantering' : 'AI for Documentation & Knowledge Management',
      tools: [
        { icon: <PngIcon src={imgNotion} alt="Notion" />, label: 'Notion AI' },
      ],
      bullets: isSv
        ? ['Strukturera projektdokumentation och designsystem', 'Skriva och sammanfatta tekniska anteckningar', 'Upprätthålla tydlig, sökbar produktkunskap']
        : ['Structuring project documentation and design systems', 'Writing and summarising technical notes', 'Maintaining clear, searchable product knowledge'],
    },
  ]

  const inner = (
      <div className="max-w-[1600px] mx-auto"
        style={inProcess ? { paddingTop: '5rem' } : {}}
      >

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
