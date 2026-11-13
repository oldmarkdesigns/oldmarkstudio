import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.jsx'

const app = (
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>
)

// Pages arrive prerendered from the build; take over that HTML rather than
// replacing it. The dev server serves an empty root, so render from scratch there.
const root = document.getElementById('root')
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
