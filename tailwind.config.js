/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logoTitle: ['Antonio', "sans-serif"]
      },
      colors: {
        "backgroundWhite": "#FFFFF0",
      }
    },

  },
  plugins: [],
}