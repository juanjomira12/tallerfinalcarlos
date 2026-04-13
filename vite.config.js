import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: "autoUpdate",
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg', 'robots.txt', 'baner.png'],
    workbox: {
      navigateFallback: 'index.html',
      globPatterns: ['**/*.{js,css,html,png,svg,ico,jsx}']
    },
    manifest: {
      name: 'Taller 3 React PWA',
      short_name: 'taller3',
      description: 'APLICACION WEB PROGRESIVA CON REACT',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#000000',
      screenshot: [
        {
          src: '/img/baner.png',
          sizes: '640x480',
          type: 'image/png',
          form_factor: 'narrow',
        },
          {
          src: '/img/baner.png',
          sizes: '640x480',
          type: 'image/png',
          form_factor: 'narrow',
        }
      ],
      icons: [
        {
          src: '/img/10_192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/img/10_512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
      ],
    },
  }),
  ],
})

