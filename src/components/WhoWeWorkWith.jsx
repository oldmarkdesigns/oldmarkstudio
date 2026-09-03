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

// ─── Project card — a thumbnail with the type of work always visible; the
// description reveals on hover, fading/sliding in beneath the title. ──────────
function ProjectCard({ c, index, onSelect }) {
  return (
    <Reveal delay={index * 60}>
      <div
        onClick={onSelect}
        className="group relative cursor-pointer rounded-2xl overflow-hidden"
        style={{ aspectRatio: '2 / 1', border: '1px solid rgba(26,24,20,0.1)' }}
      >
        <img
          src={CASE_IMAGES[c.slug]}
          alt={c.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(24,24,23,0.05) 0%, rgba(24,24,23,0.1) 40%, rgba(24,24,23,0.8) 100%)' }}
        />
        {/* Hover overlay — darkens the whole card so the revealed description
            stays readable against any background image. Same opacity-based
            transition as the rest of the card, so it responds to the tap-based
            hover touch devices already use to reveal the arrow/description. */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
          style={{ background: 'rgba(24,24,23,0.75)' }}
        />

        <span
          className="absolute flex items-center justify-center rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          style={{ width: 38, height: 38, top: 18, right: 18, background: 'rgba(255,255,255,0.92)', color: '#181817' }}
        >
          <ArrowIcon size={13} />
        </span>

        <div className="absolute inset-x-0 bottom-0" style={{ padding: '1.5rem' }}>
          <span className="uppercase text-cream/85" style={{ fontSize: 10, letterSpacing: '0.12em' }}>
            {c.tag}
          </span>
          <h3
            className="font-serif"
            style={{ fontSize: 'clamp(22px, 2.6vw, 28px)', fontWeight: 400, color: '#ffffff', lineHeight: 1.15, margin: '0.5rem 0 0' }}
          >
            {c.name}
          </h3>
          <div
            className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100"
            style={{ transition: 'max-height 0.9s cubic-bezier(0.22,1,0.36,1), opacity 0.7s cubic-bezier(0.22,1,0.36,1)' }}
          >
            <p className="text-cream/80" style={{ fontSize: 13.5, lineHeight: 1.6, marginTop: '0.6rem', maxWidth: 360 }}>
              {c.desc}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function WhoWeWorkWith({ t }) {
  const navigate = useNavigate()
  const cases = t.cases || []

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {cases.map((c, i) => (
                <ProjectCard key={c.slug} c={c} index={i} onSelect={() => goToProject(c.slug)} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
