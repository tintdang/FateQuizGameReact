/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}

