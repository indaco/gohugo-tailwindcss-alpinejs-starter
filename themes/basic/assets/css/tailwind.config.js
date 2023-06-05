//const colors = require("tailwindcss/colors");

const rootDir = __dirname + '/../../../..';
const layoutsDir = rootDir + '/layouts';
const themesDir = rootDir + '/themes';
const contentDir = rootDir + '/content';

module.exports = {
  content: [
    layoutsDir + '/**/*.html',
    themesDir + '/**/*.html',
    contentDir + '/**/*.md',
    contentDir + '/**/*.html',
  ],
  theme: {
    extend: {
      screens: {
        xxs: '320px',
        xs: '475px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
