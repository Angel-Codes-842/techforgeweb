/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00ffd0',
        'secondary': '#00b4ff',
        'light-gray': '#e0e0e0',
        'charcoal': '#1a1a1a',
        'dark-bg': '#121212',
        'black': '#000000',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}