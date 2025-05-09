import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['tests/**/*.test.js']
    },
    server: {
      proxy: {
        '/countries': {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
        }
      } 
    }
  }
})
