// next.config.js
const withImages = require('next-images')
module.exports = withImages()

module.exports = {
    trailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' }
      };
    }
  };