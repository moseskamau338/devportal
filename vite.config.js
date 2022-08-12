import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  envDir:path.resolve(__dirname),
  server:{port:8080, host:true},
  plugins: [vue(),  VitePWA({ registerType: 'autoUpdate' })],
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`
    },
  }
})
