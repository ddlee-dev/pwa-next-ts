const withPWA = require('next-pwa');
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';
const basePath = ghPages ? '/pwa-next-ts' : '';
const assetPrefix = ghPages ? '/pwa-next-ts/' : '';

module.exports = withPWA({
  basePath: basePath,
  assetPrefix: assetPrefix,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true
  }
});
