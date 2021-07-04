const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  env: {
    ghostHost: process.env.GHOST_HOST,
    ghostContentKey: process.env.GHOST_CONTENT_KEY,
    ghostContentVersion: process.env.GHOST_CONTENT_VERSION
  },

  webpack(config, options) {
    return config;
  }
});