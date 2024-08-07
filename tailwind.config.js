/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./presets/**/*.{js,vue,ts}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
}

