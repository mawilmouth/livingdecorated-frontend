const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  env: {
    appURL: process.env.APP_URL,
    ghostURL: process.env.GHOST_URL,
    ghostVersion: process.env.GHOST_VERSION,
    ghostContentKey: process.env.GHOST_CONTENT_KEY,
    gaId: process.env.NEXT_PUBLIC_GA_ID
  },

  webpack(config, options) {
    return config;
  }
};