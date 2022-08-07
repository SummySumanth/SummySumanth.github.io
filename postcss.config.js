const postcssCustomMedia = require('postcss-custom-media');
const resolutions = require('./view/styles/resolutions.js');

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
    postcssCustomMedia({
      importFrom: {
        customMedia: resolutions
      }
    })
  ]
} 