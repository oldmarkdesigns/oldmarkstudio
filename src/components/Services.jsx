import { Link, useNavigate } from 'react-router-dom'
import { Icon, ArrowIcon, SectionLabel, Reveal } from './ui'
import heroImage from '../assets/hero-image.jpg'

const SLUGS = [
  'app-och-webbdesign',
  'webbutveckling',
  'designsystem',
  'prototyping',
  'ux-granskning',
]

const CARD_HEIGHT = 240

// ─── Featured Webbutveckling card — photo on top, same content style as the rest ─
export function FeaturedWebCard({ item, readMore, subscriptionChip }) {
  const navigate = useNavigate()

  function goToPage() {
    sessionStorage.setItem('homeScrollY', String(window.scrollY))
    navigate('/webbutveckling')
  }

  return (
    <div
      className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-150 h-full"
      style={{ border: '1px solid rgba(26,24,20,0.1)', cursor: 'pointer' }}
      onClick={goToPage}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(157,174,159,0.35)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(26,24,20,0.1)' }}
    >
        {/* Top — image */}
        <div
          className="relative overflow-hidden shrink-0"
          style={{ height: 240 }}
        >
          <img
            src={heroImage}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, rgba(24,24,23,0.4) 0%, rgba(24,24,23,0.55) 60%, rgba(24,24,23,0.85) 100%)' }}
          />
          <span
            className="absolute bottom-4 left-4 text-cream/90"
            style={{
              fontSize: 10,
              letterSpacing: '0.1em',
              padding: '6px 13px',
              background: 'rgba(24,24,23,0.75)',
              border: '1px solid rgba(245,245,242,0.12)',
              borderRadius: 999,
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            {subscriptionChip}
          </span>
        </div>

        {/* Bottom — same content pattern as the other cards */}
        <div className="flex flex-col flex-1 p-7">
          <div className="flex items-center gap-2.5 mb-4">
            <span
              className="flex items-center justify-center rounded-full text-accent shrink-0 transition-transform duration-150 group-hover:-translate-y-0.5"
              style={{ width: 32, height: 32, background: 'rgba(157,174,159,0.12)' }}
            >
              <Icon name={item.icon} size={16} />
            </span>
            <span className="text-primary/60 uppercase" style={{ fontSize: 10, letterSpacing: '0.14em' }}>
              {item.tag}
            </span>
          </div>

          <h3 className="font-serif text-primary mb-3" style={{ fontSize: 24, lineHeight: 1.15, fontWeight: 400, letterSpacing: '-0.01em' }}>
            {item.name}
          </h3>

          <p
            className="text-primary/68 mb-5 flex-1"
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {item.desc}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={goToPage}
              className="inline-flex items-center gap-2 rounded-full font-medium transition-opacity duration-150 hover:opacity-85"
              style={{ fontSize: 12.5, padding: '10px 10px 10px 18px', background: '#181817', color: '#ffffff' }}
            >
              {readMore}
              <span className="flex items-center justify-center rounded-full" style={{ width: 22, height: 22, background: 'rgba(255,255,255,0.15)' }}>
                <ArrowIcon size={11} />
              </span>
            </button>
          </div>
        </div>
    </div>
  )
}

function ServiceCard({ item, slug, index, readMore }) {
  return (
    <Link
      to={`/tjanst/${slug}`}
      onClick={() => sessionStorage.setItem('homeScrollY', String(window.scrollY))}
      style={{ textDecoration: 'none' }}
    >
    <div
      className="group relative flex flex-col p-6 rounded-2xl transition-all duration-150"
      style={{ height: CARD_HEIGHT, border: '1px solid rgba(26,24,20,0.1)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(157,174,159,0.05)'
        e.currentTarget.style.borderColor = 'rgba(157,174,159,0.35)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.borderColor = 'rgba(26,24,20,0.1)'
      }}
    >
      {/* Top row: icon + tag on the left, number on the right */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <span
            className="flex items-center justify-center rounded-full text-accent shrink-0 transition-transform duration-150 group-hover:-translate-y-0.5"
            style={{
              width: 32,
              height: 32,
              background: 'rgba(157,174,159,0.12)',
            }}
          >
            <Icon name={item.icon} size={16} />
          </span>
          <span
            className="text-primary/60 uppercase"
            style={{ fontSize: 10, letterSpacing: '0.14em' }}
          >
            {item.tag}
          </span>
        </div>
        <span
          className="tabular-nums text-primary/55 shrink-0"
          style={{ fontSize: 12, letterSpacing: '0.05em' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-serif text-primary mb-3"
        style={{ fontSize: 20, lineHeight: 1.15, fontWeight: 400, letterSpacing: '-0.01em' }}
      >
        {item.name}
      </h3>

      {/* Description */}
      <p
        className="text-primary/68 mb-5 flex-1"
        style={{
          fontSize: 13,
          lineHeight: 1.55,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {item.desc}
      </p>

      {/* Read more */}
      <div
        className="flex items-center gap-2 text-primary/65 transition-colors duration-150 group-hover:text-accent"
        style={{ fontSize: 11, letterSpacing: '0.12em' }}
      >
        <span className="uppercase">{readMore}</span>
        <span className="transition-transform duration-150 group-hover:translate-x-1">
          <ArrowIcon size={13} />
        </span>
      </div>
    </div>
    </Link>
  )
}

export default function Services({ t }) {
  const entries = t.items.map((item, i) => ({ item, slug: SLUGS[i] }))
  const featuredEntry = entries.find((e) => e.slug === 'webbutveckling')
  const gridEntries = entries.filter((e) => e.slug !== 'webbutveckling')

  return (
    <section
      id="services"
      className="px-6 sm:px-10 lg:px-24"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
        borderTop: '1px solid rgba(26,24,20,0.08)',
      }}
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-24">
          <div style={{ maxWidth: 620 }}>
            <SectionLabel>{t.label}</SectionLabel>
            <h2
              className="font-serif text-primary"
              style={{
                fontSize: 'clamp(30px, 4.5vw, 52px)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                fontWeight: 400,
                marginBottom: '1.25rem',
              }}
            >
              {t.headline} <span className="italic text-accent">{t.accentWord}</span>
            </h2>
            <p className="text-primary/70" style={{ fontSize: 14, lineHeight: 1.65 }}>
              {t.subheading}
            </p>
          </div>
          <span
            className="text-primary/60 shrink-0"
            style={{ fontSize: 11, letterSpacing: '0.16em' }}
          >
            {t.count}
          </span>
        </Reveal>

        {/* Featured card (left) + 2x2 grid of the rest (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
          {featuredEntry && (
            <Reveal>
              <FeaturedWebCard item={featuredEntry.item} readMore={t.readMore} subscriptionChip={t.subscriptionChip} />
            </Reveal>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {gridEntries.map(({ item, slug }, i) => (
              <Reveal key={item.name} delay={i * 50}>
                <ServiceCard item={item} slug={slug} index={i} readMore={t.readMore} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
