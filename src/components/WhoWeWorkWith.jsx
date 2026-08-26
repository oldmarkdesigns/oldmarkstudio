import { Link } from 'react-router-dom'
import { SectionLabel, ArrowIcon, Reveal } from './ui'
import no20Thumb from '../assets/no20-hero.png'
import sea4youThumb from '../assets/sea4you-hero.png'
import irisThumb from '../assets/iris-glaciers-hero.png'

const CASE_IMAGES = {
  no20: no20Thumb,
  sea4you: sea4youThumb,
  'iris-glaciers': irisThumb,
}

function CaseCard({ c }) {
  return (
    <Link
      to={`/projekt/${c.slug}`}
      onClick={() => sessionStorage.setItem('homeScrollY', String(window.scrollY))}
      className="group block rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: 'rgba(26,24,20,0.03)',
        border: '1px solid rgba(26,24,20,0.09)',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(157,174,159,0.35)'
        e.currentTarget.style.background = 'rgba(157,174,159,0.05)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(26,24,20,0.09)'
        e.currentTarget.style.background = 'rgba(26,24,20,0.03)'
      }}
    >
      {/* Thumbnail */}
      <div
        className="relative overflow-hidden"
        style={{ height: 200 }}
      >
        <img
          src={CASE_IMAGES[c.slug]}
          alt={c.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Work-type pill */}
        <span
          className="absolute bottom-4 left-4 text-cream/85"
          style={{
            fontSize: 10,
            letterSpacing: '0.14em',
            padding: '5px 12px',
            background: 'rgba(24,24,23,0.75)',
            border: '1px solid rgba(245,245,242,0.12)',
            borderRadius: 999,
            backdropFilter: 'blur(8px)',
          }}
        >
          {c.tag.toUpperCase()}
        </span>
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className="font-serif text-primary"
              style={{ fontSize: 28, fontWeight: 400, letterSpacing: '-0.015em', lineHeight: 1.1, marginBottom: '0.6rem' }}
            >
              {c.name}
            </h3>
            <p className="text-primary/70" style={{ fontSize: 13, lineHeight: 1.65, maxWidth: 340 }}>
              {c.desc}
            </p>
          </div>
          <span
            className="shrink-0 flex items-center justify-center rounded-full transition-all duration-200 group-hover:translate-x-1 group-hover:border-accent/40"
            style={{ width: 40, height: 40, border: '1px solid rgba(26,24,20,0.18)', color: 'rgba(26,24,20,0.5)', marginTop: 2 }}
          >
            <ArrowIcon size={14} />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function WhoWeWorkWith({ t }) {
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

        {/* Case study cards */}
        {t.cases?.length > 0 && (
          <>
            <Reveal style={{ marginBottom: '2rem' }}>
              <SectionLabel>{t.casesLabel}</SectionLabel>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.cases.map((c, i) => (
                <Reveal key={c.slug} delay={i * 60}>
                  <CaseCard c={c} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
