// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const jpg = require('imagemin-mozjpeg');
const png = require('imagemin-optipng');

module.exports = withPlugins([
  [optimizedImages, {
    
    /* config for next-optimized-images */
  }],

  // your other plugins here

]);