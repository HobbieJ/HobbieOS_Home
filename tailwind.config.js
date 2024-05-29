/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './.vitepress/**/*.{js,ts,vue}',
    './**/*/.md'
  ],
  theme: {
    extend: {
      colors: {
        'snazzy-background': '#282a36',
        'snazzy-foreground': '#eff0eb'
      }
    },
  },
  plugins: [],
}

