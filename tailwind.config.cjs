/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,json}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
});
