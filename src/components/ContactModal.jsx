import { useState, useEffect, useCallback } from 'react'
import translations from '../translations'
import { ContactModalCtx } from './contactModalContext'

const CONTACT_EMAIL = 'oldmarkdesigns@gmail.com'

export function ContactModalProvider({ lang, children }) {
  const [open, setOpen] = useState(false)
  const [variant, setVariant] = useState('contact')

  const openModal = useCallback((v = 'contact') => { setVariant(v); setOpen(true) }, [])
  const closeModal = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') closeModal() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, closeModal])

  return (
    <ContactModalCtx.Provider value={openModal}>
      {children}
      {open && <ContactModal lang={lang} variant={variant} onClose={closeModal} />}
    </ContactModalCtx.Provider>
  )
}

function Field({ label, as = 'input', ...props }) {
  const Tag = as
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontSize: 10.5, letterSpacing: '0.1em', color: 'rgba(26,24,20,0.55)', textTransform: 'uppercase' }}>
        {label}
      </span>
      <Tag
        {...props}
        rows={as === 'textarea' ? 4 : undefined}
        style={{
          fontSize: 14,
          padding: '11px 14px',
          borderRadius: 10,
          border: '1px solid rgba(26,24,20,0.15)',
          background: 'rgba(26,24,20,0.02)',
          color: '#1a1814',
          fontFamily: 'inherit',
          resize: as === 'textarea' ? 'vertical' : undefined,
          width: '100%',
        }}
      />
    </label>
  )
}

function ContactModal({ lang, variant, onClose }) {
  const t = translations[lang][variant === 'quote' ? 'quoteModal' : 'contactModal']
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const bodyLines = [
      `${t.nameLabel}: ${form.name}`,
      `${t.emailLabel}: ${form.email}`,
      form.phone && `${t.phoneLabel}: ${form.phone}`,
      '',
      form.message,
    ].filter(Boolean)
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${t.title} — ${form.name}`)}&body=${encodeURIComponent(bodyLines.join('\n'))}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center px-6"
      style={{
        zIndex: 100,
        background: 'rgba(26,24,20,0.55)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full rounded-2xl"
        style={{ maxWidth: 460, background: '#ffffff', padding: '2.5rem', boxShadow: '0 30px 80px rgba(0,0,0,0.35)', maxHeight: '90vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label={t.close}
          className="absolute flex items-center justify-center rounded-full transition-colors duration-150 hover:bg-black/5"
          style={{ top: 16, right: 16, width: 32, height: 32, color: 'rgba(26,24,20,0.5)' }}
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M2 2l12 12M14 2L2 14" />
          </svg>
        </button>

        {sent ? (
          <div style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
            <h2 className="font-serif" style={{ fontSize: 26, color: '#1a1814', marginBottom: '0.75rem', fontWeight: 400 }}>
              {t.sentTitle}
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(26,24,20,0.65)', lineHeight: 1.6 }}>
              {t.sentBody}
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-serif" style={{ fontSize: 26, color: '#1a1814', marginBottom: t.subtitle ? '0.4rem' : '1.75rem', fontWeight: 400 }}>
              {t.title}
            </h2>
            {t.subtitle && (
              <p style={{ fontSize: 13.5, color: 'rgba(26,24,20,0.6)', lineHeight: 1.55, marginBottom: '1.75rem' }}>
                {t.subtitle}
              </p>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Field label={t.nameLabel} name="name" value={form.name} onChange={handleChange} placeholder={t.namePlaceholder} required />
              <Field label={t.emailLabel} name="email" type="email" value={form.email} onChange={handleChange} placeholder={t.emailPlaceholder} required />
              <Field label={t.phoneLabel} name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder={t.phonePlaceholder} />
              <Field label={t.messageLabel} name="message" as="textarea" value={form.message} onChange={handleChange} placeholder={t.messagePlaceholder} required />

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full font-medium transition-opacity duration-150 hover:opacity-85"
                style={{ fontSize: 13, padding: '13px 0', background: '#181817', color: '#ffffff', marginTop: 6 }}
              >
                {t.submit}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
