import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  // 对应 Github Page 仓库
  base: '/',
  plugins: [
    vue(),
    sitemapPlugin({
      hostname: 'nyanpasu.space'
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
