import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import translations from './translations'
import Home from './home/Home'
import ProjectNo20 from './components/ProjectNo20'
import Sea4YouPage from './components/Sea4YouPage'
import HemmaPage from './components/HemmaPage'
import ServicePage from './components/ServicePage'
import WebSolutionPage from './components/WebSolutionPage'
import AppDevPage from './components/AppDevPage'
import PrivacyPage from './components/PrivacyPage'
import RouteMeta from './RouteMeta'
import { SubPage, NotFound } from './home/page'

// The routes on their own, so the browser (BrowserRouter, below) and the
// build-time prerender (StaticRouter, entry-server.jsx) render the same tree.
export function AppRoutes() {
  const [lang, setLang] = useState('sv')
  // Every page past the homepage is built on the same frame (src/home/page.jsx).
  const page = { t: translations[lang], lang, setLang }

  return (
    <>
      <RouteMeta />
      <Routes>
        <Route path="/" element={<Home t={translations[lang]} lang={lang} setLang={setLang} />} />
        <Route path="/tjanst/:slug" element={<ServicePage {...page} />} />
        <Route path="/webbutveckling" element={<WebSolutionPage {...page} />} />
        <Route path="/apputveckling" element={<AppDevPage {...page} />} />
        <Route path="/projekt/no20" element={<ProjectNo20 {...page} />} />
        <Route path="/projekt/sea4you" element={<Sea4YouPage {...page} />} />
        <Route path="/projekt/hemma" element={<HemmaPage {...page} />} />
        <Route path="/integritetspolicy" element={<PrivacyPage {...page} />} />
        <Route
          path="*"
          element={
            <SubPage {...page}>
              <NotFound
                back={lang === 'sv' ? 'Till startsidan' : 'To the homepage'}
                text={lang === 'sv' ? 'Sidan finns inte.' : 'Page not found.'}
              />
            </SubPage>
          }
        />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
