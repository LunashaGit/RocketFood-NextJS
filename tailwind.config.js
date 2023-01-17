/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "90%": "90%",
      },
      margin: {
        moins5: "-5rem",
        moins10: "-10rem",
        moins15: "-15rem",
        moins20: "-20rem",
        moins25: "-25rem",
      },
      height: {
        vh60: "60vh",
        vh65: "65vh",
        vh70: "70vh",
      },
      dropShadow: {
        "2xl": "0px 0px 2px rgb(0 0 0 / 0.4)",
      },
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [],
};
