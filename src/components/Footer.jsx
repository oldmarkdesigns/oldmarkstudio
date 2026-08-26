import { CONTACT_EMAIL, CopyIconButton } from './ui'

export default function Footer({ t, lang }) {
  return (
    <footer
      className="px-6 sm:px-10 lg:px-24"
      style={{
        paddingTop: '1.75rem',
        paddingBottom: '1.75rem',
        borderTop: '1px solid rgba(26,24,20,0.07)',
      }}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.04em',
            color: 'rgba(26,24,20,0.38)',
          }}
        >
          {t.copy}
        </p>
        <div className="flex items-center gap-1">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="transition-colors duration-150 hover:text-accent"
            style={{
              fontSize: 11,
              letterSpacing: '0.04em',
              color: 'rgba(26,24,20,0.38)',
            }}
          >
            {CONTACT_EMAIL}
          </a>
          <CopyIconButton lang={lang} />
        </div>
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.04em',
            color: 'rgba(26,24,20,0.38)',
          }}
        >
          {t.location}
        </p>
      </div>
    </footer>
  )
}
