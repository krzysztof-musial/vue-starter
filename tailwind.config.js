/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // default: {
        // },
        // brand: {
        //   black: {
        //     DEFAULT: "#1D1D1B",
        //     50: "#FFFFFF",
        //     100: "#F3F3F2",
        //     200: "#D5D5D2",
        //     300: "#B8B8B2",
        //     400: "#9A9A93",
        //     500: "#7C7C74",
        //     600: "#5C5C56",
        //     700: "#3D3D39",
        //     800: "#1D1D1B",
        //     900: "#000000",
        //   },
        // },
      },
    },
  },
  corePlugins: {
    // aspectRatio: false, // https://tailwindcss.com/docs/aspect-ratio
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/line-clamp"),
  ],
};
