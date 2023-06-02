import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: '../../mock',
      watchFiles: true,
      localEnabled: true,
      prodEnabled: true,
      injectCode: `
        import { setupProdMockServer } from '../mock/_createProdServer'

        setupProdMockServer()
      `
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    host: true,
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'http://localhost:3001',
        rewrite: path => path.replace(/^\/api/, '/api')
      }
    }
  }
})
