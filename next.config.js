const path = require('path');
const withPlugins = require('next-compose-plugins');
const { withSentryConfig } = require('@sentry/nextjs');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

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

const plugins = [
  config => withSentryConfig(config, { silent: true }),
  withBundleAnalyzer
];

module.exports = withPlugins(plugins, moduleExports);
