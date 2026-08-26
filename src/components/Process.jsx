import { SectionLabel, Icon, Reveal } from './ui'
import Skills from './Skills'

const STEP_ICONS = ['search', 'cursor', 'code', 'loop']

export default function Process({ t, lang }) {
  return (
    <section
      id="process"
      className="px-6 sm:px-10 lg:px-24"
      style={{
        background: 'var(--color-cream)',
        paddingTop: '7rem',
        paddingBottom: '7rem',
        borderTop: '1px solid rgba(26,24,20,0.08)',
      }}
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <Reveal className="mb-24" style={{ maxWidth: 620 }}>
          <SectionLabel dark={false}>{t.label}</SectionLabel>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(30px, 4.5vw, 52px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              fontWeight: 400,
              marginBottom: '1rem',
              color: '#1a1814',
            }}
          >
            {t.headline} <span className="italic text-accent">{t.accentWord}</span>
          </h2>
          <p className="text-ink/55" style={{ fontSize: 14, lineHeight: 1.65, marginBottom: '2.5rem' }}>
            {t.subheading}
          </p>

          <h3
            className="font-serif"
            style={{
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              fontWeight: 400,
              marginBottom: '0.75rem',
              color: '#1a1814',
            }}
          >
            {t.secondaryHeadline} <span className="italic text-accent">{t.secondaryAccentWord}</span>
          </h3>
          <p className="text-ink/55" style={{ fontSize: 14, lineHeight: 1.65 }}>
            {t.secondarySubheading}
          </p>
        </Reveal>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4">
          {t.steps.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 60}
              className={[
                'py-8 md:py-0',
                i !== 0
                  ? 'md:pl-10 border-t border-ink/10 md:border-t-0 md:border-l md:border-ink/[0.08]'
                  : 'md:pr-10',
                i > 0 && i < t.steps.length - 1 ? 'md:px-10' : '',
              ].join(' ')}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="flex items-center justify-center rounded-full"
                  style={{ width: 40, height: 40, background: 'rgba(157,174,159,0.14)', color: '#5c7a63' }}
                >
                  <Icon name={STEP_ICONS[i]} size={18} />
                </span>
                <span
                  className="text-accent tabular-nums font-medium"
                  style={{ fontSize: 12, letterSpacing: '0.08em' }}
                >
                  0{i + 1}
                </span>
              </div>
              <h3
                className="font-serif mb-3"
                style={{ fontSize: 24, lineHeight: 1.1, fontWeight: 400, color: '#1a1814' }}
              >
                {step.title}
              </h3>
              <p
                className="text-ink/55"
                style={{ fontSize: 13, lineHeight: 1.65 }}
              >
                {step.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Skills & AI tools — inlined below process steps */}
      <Skills lang={lang} inProcess />
    </section>
  )
}
