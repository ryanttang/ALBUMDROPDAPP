const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        comfortaa: ["'Comfortaa', cursive"],
      },
      colors: {
        current: 'currentColor',
        sky: "#cedfdf",
        darksky: "#263333",
        primary: "#ffffff",
        secondary: "#000000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
