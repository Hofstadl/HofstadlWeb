module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: "blue", //custom color -> text-primary
        secondary: "red"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
