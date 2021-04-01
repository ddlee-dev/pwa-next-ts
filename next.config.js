const withPWA = require('next-pwa');
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';
const assetPrefix = ghPages ? 'https://inquisitive-entropy.github.io/pwa-next-ts/' : '';

module.exports = withPWA({
  assetPrefix: assetPrefix,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true
  }
});
