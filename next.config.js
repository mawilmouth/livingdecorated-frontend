const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  env: {
    appURL: process.env.APP_URL,
    ghostURL: process.env.GHOST_URL,
    ghostContentKey: process.env.GHOST_CONTENT_KEY,
    ghostVersion: process.env.GHOST_VERSION
  },

  webpack(config, options) {
    return config;
  }
};