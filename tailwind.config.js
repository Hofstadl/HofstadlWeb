const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: "#8DA364",
        blue: "#BFD0E7",
        darkblue: "#98a6b8",
        purple: "#2B0727",
        lightblue: "#4188ED",
      },
      boxShadow: {
        inner: "inset 0px 0px 6px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
