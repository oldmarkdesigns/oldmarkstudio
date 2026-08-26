import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import translations from './translations'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import WhoWeWorkWith from './components/WhoWeWorkWith'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ArticlePage from './components/ArticlePage'
import ProjectNo20 from './components/ProjectNo20'
import Sea4YouPage from './components/Sea4YouPage'
import IrisGlaciersPage from './components/IrisGlaciersPage'
import ServicePage from './components/ServicePage'
import WebSolutionPage from './components/WebSolutionPage'
import { ContactModalProvider } from './components/ContactModal'

const AGENCY_NAME = 'Oldmark Studio'

function HomePage({ lang, setLang }) {
  const t = translations[lang]
  return (
    <div className="bg-background min-h-screen font-sans">
      <Nav t={t.nav} lang={lang} setLang={setLang} agencyName={AGENCY_NAME} />
      <main>
        <Hero t={t.hero} servicesT={t.services} />
        <Services t={t.services} />
        <WhoWeWorkWith t={t.who} />
        <Process t={t.process} lang={lang} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </div>
  )
}

function ArticleRoute({ lang, setLang }) {
  const t = translations[lang]
  return (
    <div className="bg-background min-h-screen font-sans">
      <Nav t={t.nav} lang={lang} setLang={setLang} agencyName={AGENCY_NAME} />
      <main style={{ paddingTop: '5rem' }}>
        <ArticlePage lang={lang} />
      </main>
      <Footer t={t.footer} />
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState('sv')

  return (
    <BrowserRouter>
      <ContactModalProvider lang={lang}>
      <Routes>
        <Route path="/" element={<HomePage lang={lang} setLang={setLang} />} />
        <Route path="/artikel/:slug" element={<ArticleRoute lang={lang} setLang={setLang} />} />
        <Route path="/tjanst/:slug" element={
          <div className="bg-background min-h-screen font-sans">
            <Nav t={translations[lang].nav} lang={lang} setLang={setLang} agencyName="Oldmark Studio" />
            <main style={{ paddingTop: '5rem' }}>
              <ServicePage lang={lang} />
            </main>
            <Footer t={translations[lang].footer} />
          </div>
        } />
        <Route path="/webbutveckling" element={
          <div className="bg-background min-h-screen font-sans">
            <Nav t={translations[lang].nav} lang={lang} setLang={setLang} agencyName="Oldmark Studio" />
            <main style={{ paddingTop: '5rem' }}>
              <WebSolutionPage lang={lang} />
            </main>
            <Footer t={translations[lang].footer} />
          </div>
        } />
        <Route path="/projekt/no20" element={
          <div className="bg-background min-h-screen font-sans">
            <Nav t={translations[lang].nav} lang={lang} setLang={setLang} agencyName="Oldmark Studio" />
            <main style={{ paddingTop: '5rem' }}>
              <ProjectNo20 lang={lang} />
            </main>
            <Footer t={translations[lang].footer} />
          </div>
        } />
        <Route path="/projekt/sea4you" element={
          <div className="bg-background min-h-screen font-sans">
            <Nav t={translations[lang].nav} lang={lang} setLang={setLang} agencyName="Oldmark Studio" />
            <main style={{ paddingTop: '5rem' }}>
              <Sea4YouPage lang={lang} />
            </main>
            <Footer t={translations[lang].footer} />
          </div>
        } />
        <Route path="/projekt/iris-glaciers" element={
          <div className="bg-background min-h-screen font-sans">
            <Nav t={translations[lang].nav} lang={lang} setLang={setLang} agencyName="Oldmark Studio" />
            <main style={{ paddingTop: '5rem' }}>
              <IrisGlaciersPage lang={lang} />
            </main>
            <Footer t={translations[lang].footer} />
          </div>
        } />
      </Routes>
      </ContactModalProvider>
    </BrowserRouter>
  )
}
