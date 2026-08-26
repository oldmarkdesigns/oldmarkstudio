import { PillButton, Reveal, MailContactButton } from './ui'
import { FeaturedWebCard } from './Services'

export default function Hero({ t, servicesT, lang }) {
  const webItem = servicesT.items[1]

  function scrollTo(id) {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const renderHeadline = () => {
    const full   = `${t.line1} ${t.line2}`
    const accent = t.accentWord
    const before = full.replace(accent, '').trim()
    return (
      <>
        {before}{' '}
        <span className="italic text-accent">{accent}</span>
      </>
    )
  }

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden px-6 sm:px-10 lg:px-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(60% 50% at 18% 42%, rgba(157,174,159,0.12) 0%, rgba(157,174,159,0) 60%)',
        }}
      />

      <div style={{ height: 56 }} />

      <div
        className="relative flex flex-1 items-center max-w-[1600px] mx-auto w-full gap-12 xl:gap-16"
        style={{ paddingBottom: '8vh' }}
      >
        <Reveal className="relative z-10 max-w-3xl">
          <h1
            className="font-serif text-primary"
            style={{
              fontSize: 'clamp(52px, 8vw, 104px)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              fontWeight: 400,
              marginBottom: '1.75rem',
            }}
          >
            {renderHeadline()}
          </h1>

          <p
            className="text-primary/70"
            style={{
              fontSize: 'clamp(15px, 1.4vw, 18px)',
              lineHeight: 1.65,
              maxWidth: 500,
              marginBottom: '2.5rem',
            }}
          >
            {t.subheading}
          </p>

          <div className="flex flex-wrap items-center gap-3" style={{ marginBottom: '3rem' }}>
            <PillButton
              label={t.ctaPrimary}
              variant="primary"
              onClick={() => scrollTo('#work')}
            />
            <MailContactButton lang={lang} />
          </div>

          <p
            className="text-primary/60"
            style={{ fontSize: 11.5, letterSpacing: '0.06em', lineHeight: 1.8 }}
          >
            {t.descriptor}
          </p>
        </Reveal>

        <Reveal
          delay={150}
          className="hidden lg:flex relative z-10 shrink-0"
          style={{ width: 'clamp(380px, 42vw, 620px)', height: 'clamp(550px, 60vh, 660px)' }}
        >
          <FeaturedWebCard item={webItem} readMore={servicesT.readMore} subscriptionChip={servicesT.subscriptionChip} />
        </Reveal>
      </div>
    </section>
  )
}
