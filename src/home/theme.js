import { useSyncExternalStore } from 'react'

// Light or dark, kept on <html data-theme>. A script in index.html sets it
// before the first paint (the saved choice, or the system's), so the page never
// flashes the wrong colours; this keeps React and the saved choice in step.

const listeners = new Set()
const BG = { light: '#ffffff', dark: '#0e0e0d' }

const read = () => (typeof document !== 'undefined' && document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')

export function setTheme(theme) {
  const root = document.documentElement
  root.dataset.theme = theme
  try {
    localStorage.setItem('theme', theme)
  } catch {
    // Private windows can refuse storage; the choice then lasts for the visit.
  }
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', BG[theme])
  listeners.forEach((fn) => fn())
}

const subscribe = (fn) => {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

export const useTheme = () => useSyncExternalStore(subscribe, read, () => 'light')

// The globe's dots, as "r, g, b", in each theme.
export const inkRgb = (theme) => (theme === 'dark' ? '236, 236, 232' : '29, 29, 27')
