
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src', // This matches the Jest alias
    },
  },
  server: {
    proxy: {
      '/countries': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      }
    }
  }
})


