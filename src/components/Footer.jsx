export default function Footer({ t }) {
  return (
    <footer
      className="px-6 sm:px-10 lg:px-24"
      style={{
        paddingTop: '1.75rem',
        paddingBottom: '1.75rem',
        borderTop: '1px solid rgba(26,24,20,0.07)',
      }}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.04em',
            color: 'rgba(26,24,20,0.38)',
          }}
        >
          {t.copy}
        </p>
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
