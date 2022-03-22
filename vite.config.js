import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      //  includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],  
      // manifest: {
      //   name: 'Churpy.co',
      //   short_name: 'Churpy',
      //   description: 'Churpy makes Receivable Operations simple, scalable, and secure.',
      //   theme_color: '#ffffff',
      //   icons: [
      //     {
      //       src: 'pwa-192x192.png',
      //       sizes: '192x192',
      //       type: 'image/png',
      //     },
      //     {
      //       src: 'pwa-512x512.png',
      //       sizes: '512x512',
      //       type: 'image/png',
      //     },
      //     {
      //       src: 'pwa-512x512.png',
      //       sizes: '512x512',
      //       type: 'image/png',
      //       purpose: 'any maskable',
      //     }
      //   ]
      // }
    })
  ],
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`
    },
  }
})
