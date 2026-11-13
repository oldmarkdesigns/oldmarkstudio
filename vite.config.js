import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // The prerender build bundles lenis so its stylesheet import resolves.
  ssr: { noExternal: ['lenis'] },
})
