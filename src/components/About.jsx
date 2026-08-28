import { SectionLabel, Reveal } from './ui'
import samuelPhoto from '../assets/about-samuel.png'

export default function About({ t }) {
  return (
    <section
      className="px-6 sm:px-10 lg:px-24"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
        borderTop: '1px solid rgba(26,24,20,0.08)',
      }}
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — photo */}
        <Reveal>
          <div
            className="relative rounded-3xl overflow-hidden mx-auto"
            style={{
              border: '1px solid rgba(26,24,20,0.09)',
              maxWidth: 420,
              aspectRatio: '4 / 5',
            }}
          >
            <img
              src={samuelPhoto}
              alt="Samuel Oldmark"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        {/* Right — copy */}
        <Reveal delay={120}>
          <SectionLabel>{t.label}</SectionLabel>
          <h2
            className="font-serif text-primary"
            style={{
              fontSize: 'clamp(30px, 4.5vw, 54px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              fontWeight: 400,
              marginBottom: '2rem',
            }}
          >
            {t.headline} <span className="italic text-accent">{t.accentWord}</span>
          </h2>

          <p className="text-primary/70" style={{ fontSize: 15, lineHeight: 1.75, maxWidth: 480, marginBottom: '1.25rem' }}>
            {t.paragraph1}
          </p>
          <p className="text-primary/70" style={{ fontSize: 15, lineHeight: 1.75, maxWidth: 480 }}>
            {t.paragraph2}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
