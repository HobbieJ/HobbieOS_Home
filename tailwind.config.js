/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './.vitepress/**/*.{js,ts,vue}',
    './**/*/.md'
  ],
  theme: {
    fontFamily: {
      'logo': ['"Kansas Casual"', 'serif'],
      'mono': ['"Roboto Mono"', 'monospace']
    },
    extend: {
      aspectRatio: {
        '16/9': '16 / 9'
      },
      colors: {
        'snazzy-dark': '#282a36',
        'snazzy-light': '#eff0eb',
        'snazzy-blue': '#57c7ff'
      },
      fontSize: {
        'missing-image': ['29vh', '1em']
      },
      width: {
        'font': '1.25em'
      }
    },
  },
  plugins: [],
}

