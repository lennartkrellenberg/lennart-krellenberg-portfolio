const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    "bgblack": {
      "500": "#121212",
    },

    "pink": {
      "500": "#db3eb1",
    }
  },
}


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    "colors": colors,
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
