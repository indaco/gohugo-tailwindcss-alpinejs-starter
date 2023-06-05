const themeDir = __dirname + '/theme';

const purgecss = require('@fullhuman/postcss-purgecss')({
  // see https://gohugo.io/hugo-pipes/postprocess/#css-purging-with-postcss
  content: ['./hugo_stats.json'],
  defaultExtractor: (content) => {
    let els = JSON.parse(content).htmlElements;
    return els.tags.concat(els.classes, els.ids);
  },
});

module.exports = {
  plugins: [
    require('postcss-import')({
      path: [themeDir],
    }),
    require('tailwindcss'),
    require('autoprefixer')({
      path: [themeDir],
    }),
    ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : []),
  ],
};
