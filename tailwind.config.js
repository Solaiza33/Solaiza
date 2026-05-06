/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        acid: '#C8FF00',
        teal: '#00FFD1',
        pink: '#FF2D78',
        dark: '#0A0A0A',
        mid: '#141414',
        card: '#1A1A1A',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)'],
        barlow: ['var(--font-barlow)'],
      },
    },
  },
  plugins: [],
}
