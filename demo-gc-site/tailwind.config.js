/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        stone: {
          950: '#0f0f0e',
        },
        gold: {
          50: '#FDF8EF',
          100: '#F9EDCF',
          200: '#F0D89E',
          300: '#E5BF64',
          400: '#D4A437',
          500: '#B8860B',
          600: '#9A6F09',
          700: '#7A580A',
          800: '#5C420E',
          900: '#3D2C0E',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
