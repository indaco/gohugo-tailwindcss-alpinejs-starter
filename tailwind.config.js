module.exports = {
  content: ['./hugo_stats.json'],
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
