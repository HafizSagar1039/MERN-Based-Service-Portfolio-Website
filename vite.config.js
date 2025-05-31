import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',    // exposes your server to local network
    port: 5173,         // optional, ensures consistent port
    strictPort: true    // optional, avoids port switching
  }
})
