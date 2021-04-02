const withPWA = require('next-pwa');
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';
const ghPrefix = ghPages ? '/pwa-next-ts/' : '';

module.exports = withPWA({
  basePath: ghPrefix,
  assetPrefix: ghPrefix,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true
  }
});
