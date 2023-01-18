/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#70c4bc',
        light: '#f8fcfc',
        medium: '#183434',
        dark: '#00040f',
      },
      width: {
        '90%': '90%',
      },
      margin: {
        moins5: '-5rem',
        moins10: '-10rem',
        moins15: '-15rem',
        moins20: '-20rem',
        moins25: '-25rem',
      },
      height: {
        vh60: '60vh',
        vh65: '65vh',
        vh70: '70vh',
      },
      dropShadow: {
        '2xl': '0px 0px 2px rgb(0 0 0 / 0.4)',
      },
      zIndex: {
        1: '1',
      },
    },
  },
  plugins: [],
};
