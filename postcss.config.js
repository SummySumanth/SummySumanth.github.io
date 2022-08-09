import postcssCustomMedia from 'postcss-custom-media';
import resolutions from './view/styles/resolutions.js';
import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';

module.exports = {
  plugins: [
    autoprefixer, 
    postcssNested,
    postcssCustomMedia({
      importFrom: {
        customMedia: resolutions
      }
    })
  ]
} 