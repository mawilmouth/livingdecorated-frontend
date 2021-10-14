const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  env: {
    ghostUrl: process.env.GHOST_URL,
    ghostContentKey: process.env.GHOST_CONTENT_KEY,
    ghostContentVersion: process.env.GHOST_VERSION
  },

  webpack(config, options) {
    return config;
  }
};