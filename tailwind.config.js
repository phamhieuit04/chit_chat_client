/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/src/index.html', './src/renderer/src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })]
}
