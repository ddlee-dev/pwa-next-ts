const withPWA = require('next-pwa');
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = withPWA({
  assetPrefix: 'https://inquisitive-entropy.github.io/pwa-next-ts/',
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true
  }
});
