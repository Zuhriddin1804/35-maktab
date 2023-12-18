/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      maxWidth: {
        '1440px': '1440px',
      },
    },
  },
  plugins: [],
}