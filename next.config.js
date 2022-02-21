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
    ghostURL: process.env.NEXT_PUBLIC_GHOST_URL,
    ghostVersion: process.env.NEXT_PUBLIC_GHOST_VERSION,
    ghostContentKey: process.env.NEXT_PUBLIC_GHOST_CONTENT_KEY,
    gaId: process.env.NEXT_PUBLIC_GA_ID,
    searchUrl: process.env.NEXT_PUBLIC_SEARCH_URL
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
