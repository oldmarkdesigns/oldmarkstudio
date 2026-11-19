import { useEffect, useRef, useState } from 'react'
import { EMAIL, scrollToId } from '../home/siteUtils'
import { Arrow } from '../home/site'
import { SubPage, PageHead, Section, RuleList, Rows, FounderNote, GuideLinks } from '../home/page'

const FORM = 'skiss'

const EMPTY = {
  company: '',
  industry: '',
  website: '',
  what: '',
  goals: [],
  about: '',
  name: '',
  phone: '',
  when: '',
}

// Which fields each step asks for, and which of them must be filled in.
const STEPS = [
  { fields: ['company', 'industry', 'website'], required: ['company'] },
  { fields: ['what', 'goals', 'about'], required: ['what'] },
  { fields: ['name', 'phone', 'when'], required: ['name'] },
]

// The answers as the email the visitor sends: one line per answer, the
// optional ones left out when empty.
function mailBody(v, m) {
  const line = (label, value) => (value ? `${label}: ${value}` : null)
  return [
    m.hello,
    '',
    m.intro,
    '',
    line(m.company, v.company),
    line(m.industry, v.industry),
    line(m.website, v.website || m.none),
    line(m.what, v.what),
    line(m.goals, v.goals.join(', ')),
    line(m.when, v.when),
    v.about ? `\n${m.about}:\n${v.about}` : null,
    '',
    line(m.name, v.name),
    line(m.phone, v.phone),
  ]
    .filter((x) => x !== null)
    .join('\n')
}

// ─── The form: three short steps, ending in a ready-made email ───────────────
// The site has no server to post to, so the answers open the visitor's mail
// app with everything filled in. In case no mail app opens, the same text
// shows on the page, ready to copy.
function SketchForm({ s }) {
  const f = s.fields
  const [step, setStep] = useState(0)
  const [v, setV] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)
  const headRef = useRef(null)
  const moved = useRef(false)
  const last = STEPS.length - 1

  // A new step moves focus to its heading, so keyboard and screen reader users
  // start at the top of it. Not on the first render.
  useEffect(() => {
    if (!moved.current) return
    headRef.current?.focus({ preventScroll: true })
    scrollToId(`#${FORM}`)
  }, [step, sent])

  const set = (key) => (e) => {
    const value = e.target.value
    setV((old) => ({ ...old, [key]: value }))
    if (errors[key]) setErrors((old) => ({ ...old, [key]: false }))
  }
  const toggleGoal = (goal) =>
    setV((old) => ({
      ...old,
      goals: old.goals.includes(goal) ? old.goals.filter((g) => g !== goal) : [...old.goals, goal],
    }))

  function check() {
    const missing = Object.fromEntries(STEPS[step].required.filter((k) => !v[k].trim()).map((k) => [k, true]))
    setErrors(missing)
    const first = Object.keys(missing)[0]
    if (first) document.getElementById(`sk-${first}`)?.focus()
    return !first
  }

  const subject = s.subject(v.company.trim())
  const body = mailBody(v, s.mail)

  function onSubmit(e) {
    e.preventDefault()
    if (!check()) return
    moved.current = true
    if (step < last) {
      setStep(step + 1)
      return
    }
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  function back() {
    moved.current = true
    setErrors({})
    setStep(step - 1)
  }

  function copy() {
    navigator.clipboard?.writeText(`${subject}\n\n${body}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  const error = (key) =>
    errors[key] ? (
      <span className="sk-error" id={`sk-${key}-error`}>
        {s.required}
      </span>
    ) : null
  const invalid = (key) => (errors[key] ? { 'aria-invalid': true, 'aria-describedby': `sk-${key}-error` } : {})

  if (sent) {
    return (
      <div className="sk-form sk-done">
        <h3 className="sk-step-title" ref={headRef} tabIndex={-1}>
          {s.submitNote}
        </h3>
        <p className="sk-hint">
          {s.fallback} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
        <pre className="sk-preview">{`${subject}\n\n${body}`}</pre>
        <div className="st-actions">
          <button type="button" className="st-btn st-btn--ghost" onClick={copy}>
            {copied ? s.copied : s.copyText}
          </button>
          <span className="st-sr" role="status">
            {copied ? s.copied : ''}
          </span>
        </div>
      </div>
    )
  }

  return (
    <form className="sk-form" onSubmit={onSubmit} noValidate>
      <ol className="sk-progress" aria-label={s.stepOf(step + 1, STEPS.length)}>
        {s.formSteps.map((name, i) => (
          <li key={name} className={i === step ? 'is-current' : i < step ? 'is-done' : undefined} aria-current={i === step ? 'step' : undefined}>
            <span className="sk-progress-num">{String(i + 1).padStart(2, '0')}</span>
            {name}
          </li>
        ))}
      </ol>

      <h3 className="sk-step-title" ref={headRef} tabIndex={-1}>
        <span className="st-sr">{s.stepOf(step + 1, STEPS.length)}: </span>
        {s.formSteps[step]}
      </h3>

      {step === 0 && (
        <div className="sk-fields">
          <label className="sk-field">
            <span className="sk-label">{f.company} *</span>
            <input id="sk-company" type="text" autoComplete="organization" value={v.company} onChange={set('company')} {...invalid('company')} />
            {error('company')}
          </label>
          <label className="sk-field">
            <span className="sk-label">{f.industry}</span>
            <select value={v.industry} onChange={set('industry')}>
              <option value="">{f.industryPlaceholder}</option>
              {f.industries.map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
          <label className="sk-field">
            <span className="sk-label">{f.website}</span>
            <input type="url" inputMode="url" autoComplete="url" placeholder="www." value={v.website} onChange={set('website')} />
            <span className="sk-hint">{f.websiteHint}</span>
          </label>
        </div>
      )}

      {step === 1 && (
        <div className="sk-fields">
          <fieldset className="sk-field" {...invalid('what')}>
            <legend className="sk-label">{f.what} *</legend>
            <div className="sk-choices">
              {f.whats.map((x, i) => (
                <label key={x} className="sk-choice">
                  <input
                    id={i === 0 ? 'sk-what' : undefined}
                    type="radio"
                    name="what"
                    value={x}
                    checked={v.what === x}
                    onChange={set('what')}
                  />
                  <span>{x}</span>
                </label>
              ))}
            </div>
            {error('what')}
          </fieldset>
          <fieldset className="sk-field">
            <legend className="sk-label">{f.goals}</legend>
            <span className="sk-hint">{f.goalsHint}</span>
            <div className="sk-choices">
              {f.goalOptions.map((x) => (
                <label key={x} className="sk-choice">
                  <input type="checkbox" checked={v.goals.includes(x)} onChange={() => toggleGoal(x)} />
                  <span>{x}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label className="sk-field">
            <span className="sk-label">{f.about}</span>
            <textarea rows={4} value={v.about} onChange={set('about')} />
            <span className="sk-hint">{f.aboutHint}</span>
          </label>
        </div>
      )}

      {step === 2 && (
        <div className="sk-fields">
          <label className="sk-field">
            <span className="sk-label">{f.name} *</span>
            <input id="sk-name" type="text" autoComplete="name" value={v.name} onChange={set('name')} {...invalid('name')} />
            {error('name')}
          </label>
          <label className="sk-field">
            <span className="sk-label">{f.phone}</span>
            <input type="tel" autoComplete="tel" value={v.phone} onChange={set('phone')} />
            <span className="sk-hint">{f.phoneHint}</span>
          </label>
          <fieldset className="sk-field">
            <legend className="sk-label">{f.when}</legend>
            <div className="sk-choices">
              {f.whens.map((x) => (
                <label key={x} className="sk-choice">
                  <input type="radio" name="when" value={x} checked={v.when === x} onChange={set('when')} />
                  <span>{x}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      )}

      <div className="sk-nav">
        <button type="submit" className="st-btn">
          {step < last ? s.next : s.submit}
          <Arrow />
        </button>
        {step > 0 && (
          <button type="button" className="st-link" onClick={back}>
            {s.prev}
          </button>
        )}
      </div>
      {step === last && <p className="sk-hint">{s.submitNote}</p>}
    </form>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SketchPage({ t, lang = 'sv', setLang }) {
  const s = t.sketch

  return (
    <SubPage
      t={t}
      lang={lang}
      setLang={setLang}
      contact={{ title: s.contactTitle, body: s.contactBody, noSketch: true }}
    >
      <PageHead back={s.back} label={s.label} title={s.title} lede={s.lede}>
        <p className="st-muted">{s.note}</p>
        <div className="st-actions st-page-meta">
          <a
            className="st-btn"
            href={`#${FORM}`}
            onClick={(e) => {
              e.preventDefault()
              scrollToId(`#${FORM}`)
            }}
          >
            {s.startCta}
            <Arrow />
          </a>
        </div>
      </PageHead>

      <Section label={s.stepsLabel} title={s.stepsTitle}>
        <Rows numbered items={s.steps} />
      </Section>

      <Section label={s.getLabel} title={s.getTitle}>
        <RuleList items={s.get} />
        <p>{s.appNote}</p>
        <FounderNote f={t.founder} quote={t.founder.sketch} />
      </Section>

      <Section id={FORM} label={s.formLabel} title={s.formTitle} intro={s.formIntro}>
        <SketchForm s={s} />
      </Section>

      <Section label={s.faqLabel} title={s.faqTitle}>
        <Rows items={s.faq.map((x) => ({ title: x.q, body: x.a }))} />
      </Section>

      <GuideLinks g={t.guides} lang={lang} />
    </SubPage>
  )
}
