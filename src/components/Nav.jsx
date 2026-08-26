import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MailContactButton } from './ui'

export default function Nav({ t, lang, setLang }) {
  const navigate = useNavigate()
  const location = useLocation()

  function handleLogoClick() {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
      requestAnimationFrame(() =>
        requestAnimationFrame(() =>
          window.scrollTo({ top: 0, behavior: 'instant' })
        )
      )
    }
  }
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNavClick(e, id) {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(255,255,255,0.92)'
          : 'rgba(255,255,255,0.75)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        boxShadow: scrolled
          ? '0 8px 24px rgba(0,0,0,0.08)'
          : 'none',
      }}
    >
      {/* ── Bar ────────────────────────────────────────────────────────── */}
      <div
        className="max-w-[1600px] mx-auto flex items-center justify-between h-16 px-6 sm:px-10 lg:px-16"
      >
        {/* Logotype */}
        <button
          onClick={handleLogoClick}
          className="shrink-0 select-none focus:outline-none"
          style={{ fontSize: 11, letterSpacing: '0.2em', fontWeight: 400, lineHeight: 1 }}
          aria-label="Oldmark Studio — till startsidan"
        >
          <span className="text-primary">OLDMARK</span><span className="text-primary/65">STUDIO</span>
        </button>

        {/* Desktop nav — centered links */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {t.links.map((link, i) => (
            <a
              key={link}
              href={t.linkIds[i]}
              onClick={(e) => handleNavClick(e, t.linkIds[i])}
              className="text-primary/70 transition-colors duration-150 hover:text-primary/80"
              style={{ fontSize: 12, letterSpacing: '0.03em' }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right side: lang + CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={() => setLang(lang === 'sv' ? 'en' : 'sv')}
            className="text-primary/60 transition-colors duration-150 hover:text-primary/60"
            style={{ fontSize: 11, letterSpacing: '0.14em' }}
          >
            {lang === 'sv' ? 'EN' : 'SV'}
          </button>

          <MailContactButton lang={lang} />
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-5">
          <button
            onClick={() => setLang(lang === 'sv' ? 'en' : 'sv')}
            className="text-primary/60"
            style={{ fontSize: 11, letterSpacing: '0.14em' }}
          >
            {lang === 'sv' ? 'EN' : 'SV'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-primary/68"
            style={{ fontSize: 18, lineHeight: 1 }}
            aria-label="Toggle menu"
          >
            {menuOpen ? '×' : '≡'}
          </button>
        </div>
      </div>

      {/* Mobile menu — drops below bar */}
      {menuOpen && (
        <div
          className="md:hidden px-6 sm:px-10 py-6 flex flex-col gap-6"
          style={{
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            borderTop: '1px solid rgba(26,24,20,0.1)',
          }}
        >
          {t.links.map((link, i) => (
            <a
              key={link}
              href={t.linkIds[i]}
              onClick={(e) => handleNavClick(e, t.linkIds[i])}
              className="text-primary/68"
              style={{ fontSize: 13, letterSpacing: '0.02em' }}
            >
              {link}
            </a>
          ))}
          <div className="flex justify-center mt-2">
            <MailContactButton lang={lang} />
          </div>
        </div>
      )}
    </header>
  )
}
