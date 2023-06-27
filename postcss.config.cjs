/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-prefixwrap')('#lkrl-wrapper')
  ]
}

module.exports = config
