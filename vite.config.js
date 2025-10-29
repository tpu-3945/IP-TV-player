import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Le chemin de base doit correspondre au nom de votre dépôt GitHub
  base: '/IP-TV-player/',
})
