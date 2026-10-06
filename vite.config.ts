import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  // imagetools gera versões WebP/JPEG redimensionadas das imagens importadas com query (?w=...&as=picture).
  plugins: [react(), tailwindcss(), imagetools()],
})
