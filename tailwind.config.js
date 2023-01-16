const { colors } = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        ...colors,
        brand: {
          50: '#FAE6EA',
          100: '#F6D0D9',
          200: '#ECA2B3',
          300: '#E26F8A',
          400: '#D84064',
          500: '#BB2649',
          600: '#941E3A',
          700: '#6E162B',
          800: '#4C101E',
          900: '#26080F',
        },
        secondary: {
          50: '#F9FAE5',
          100: '#F1F4C7',
          200: '#E5EA94',
          300: '#D7E05C',
          400: '#C6D228',
          500: '#949C1E',
          600: '#757C18',
          700: '#595E12',
          800: '#3D400C',
          900: '#1C1E06',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
