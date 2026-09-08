import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Port 5174 so this never clashes with the capstone-1 dev server on 5173.
export default defineConfig({
  plugins: [react()],
  server: { port: 5174 },
})
