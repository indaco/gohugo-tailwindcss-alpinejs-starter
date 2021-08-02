const colors = require("tailwindcss/colors");

const contentDir = __dirname + "/../../../../content/";
const themesDir = __dirname + "/../../../";

module.exports = {
  purge: [
    themesDir + "layouts/**/*.html",
    contentDir + "content/**/*.md",
    contentDir + "content/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "475px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
