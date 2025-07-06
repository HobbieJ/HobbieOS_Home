import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import { Feed } from 'feed'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hobbie Blog",
  themeConfig: {
    search: {
      provider: 'local'
    }
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})
