const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  env: {
    ghostHost: process.env.GHOST_HOST,
    ghostContentKey: process.env.GHOST_CONTENT_KEY,
    ghostContentVersion: process.env.GHOST_CONTENT_VERSION
  }
}