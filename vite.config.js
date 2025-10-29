import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Remplacez 'NOM_DU_REPO' par le nom de votre dépôt GitHub
const REPO_NAME = 'iptv-player-gh-pages'; 

export default defineConfig({
  plugins: [react()],
  base: `/${REPO_NAME}/`, // Important pour GitHub Pages
})
