/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-image': "url('src/assets/images/001fgo.jpg')"
      }
    },
  },
  plugins: [ plugin(function({ addBase, theme }) {
    addBase({
      'h1': { fontSize: theme('fontSize.4xl') },
      'h2': { fontSize: theme('fontSize.xl') },
      'h3': { fontSize: theme('fontSize.lg') },
      'button': {borderRadius: theme('borderRadius.rounded-lg') }
    })})
    ],
}

