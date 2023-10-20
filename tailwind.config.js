/** @type {import('tailwindcss').Config} */
// https://www.canva.com/colors/color-palettes/ocean-ripples-2/ COLOR PALLETE
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode:'class', 
  theme: {
    extend: {
      colors: {
        navy: '#192E41',
        blue: '#071330',
        serenity:'#BBC8DE',
        black:'#010307'
      }
    }
  },
  plugins: [],
  base: {
    'body': {
      backgroundColor: '#071330',
      color: '#BBC8DE',
    },
  }
}

