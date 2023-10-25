/** @type {import('tailwindcss').Config} */
// https://www.canva.com/colors/color-palettes/ocean-ripples-2/ COLOR PALLETE
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode:'class', 
  theme: {
      screens: {
      'sm': '680px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      fontFamily: {
        'pangolin': ['Roboto Mono', 'monospace'],
      }, 
      rotate: {
        '270': '270deg',
      },
      colors: {
        navy: '#192E41',
        blue: '#071330',
        serenity:'#BBC8DE',
        black:'#010307'
      },
      borderRadius: {
        '4xl': '2rem',
      },
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

