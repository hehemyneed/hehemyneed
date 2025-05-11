import COLORS from './src/helpers/Colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        'tiny': '0.2rem',
      },
      screens: {
        'xs': '600px', 
      },
      colors: {
        ...COLORS
      }
    },
  },
  plugins: [],
}

