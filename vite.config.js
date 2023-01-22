import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: "**/*.jsx"
  })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.jsx',
  }
})