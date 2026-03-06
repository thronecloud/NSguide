import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// VITE_BASE: set to /NSguide/ for GitHub Pages (thronecloud.github.io/NSguide)
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
})
