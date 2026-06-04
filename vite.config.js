import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Para que el historial de navegación funcione en dev
    historyApiFallback: true,
  },
})
