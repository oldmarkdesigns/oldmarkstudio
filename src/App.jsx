import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import translations from './translations'
import Home from './home/Home'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import SubscriptionValue from './components/SubscriptionValue'
import Process from './components/Process'
import WhoWeWorkWith from './components/WhoWeWorkWith'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ArticlePage from './components/ArticlePage'
import ProjectNo20 from './components/ProjectNo20'
import Sea4YouPage from './components/Sea4YouPage'
import IrisGlaciersPage from './components/IrisGlaciersPage'
import DecoHomePage from './components/DecoHomePage'
import HemmaPage from './components/HemmaPage'
import ServicePage from './components/ServicePage'
import WebSolutionPage from './components/WebSolutionPage'
import AppDevPage from './components/AppDevPage'

const AGENCY_NAME = 'Oldmark Studio'

function HomePage({ lang, setLang }) {
  const t = translations[lang]
  return (
    <div className="bg-background min-h-screen font-sans">
      <Nav t={t.nav} lang={lang} setLang={setLang} agencyName={AGENCY_NAME} />
      <main>
        <Hero t={t.hero} servicesT={t.services} lang={lang} />
        <Services t={t.services} />
        <SubscriptionValue t={t.webSolution} showCta />
        <WhoWeWorkWith t={t.who} />
        <Process t={t.process} />
        <About t={t.about} />
        <Contact t={t.contact} lang={lang} />
      </main>
      <Footer t={t.footer} lang={lang} />
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState('sv')
  // Every page past the homepage is built on the same frame (src/home/page.jsx).
  const page = { t: translations[lang], lang, setLang }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home t={translations[lang]} lang={lang} setLang={setLang} />} />
        <Route path="/v1" element={<HomePage lang={lang} setLang={setLang} />} />
        <Route path="/artikel/:slug" element={<ArticlePage {...page} />} />
        <Route path="/tjanst/:slug" element={<ServicePage {...page} />} />
        <Route path="/webbutveckling" element={<WebSolutionPage {...page} />} />
        <Route path="/apputveckling" element={<AppDevPage {...page} />} />
        <Route path="/projekt/no20" element={<ProjectNo20 {...page} />} />
        <Route path="/projekt/sea4you" element={<Sea4YouPage {...page} />} />
        <Route path="/projekt/iris-glaciers" element={<IrisGlaciersPage {...page} />} />
        <Route path="/projekt/deco-home" element={<DecoHomePage {...page} />} />
        <Route path="/projekt/hemma" element={<HemmaPage {...page} />} />
      </Routes>
    </BrowserRouter>
  )
}
