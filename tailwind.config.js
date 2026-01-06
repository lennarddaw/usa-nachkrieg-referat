/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        crail: {
          DEFAULT: '#C15F3C',
          dark: '#A54D2F',
        },
        cloudy: '#B1ADA1',
        pampas: '#F4F3EE',
      },
    },
  },
  plugins: [],
}