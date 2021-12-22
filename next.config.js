const path = require('path');
const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
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

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)