const withPWA = require('next-pwa');

module.exports = withPWA({
  basePath: '/pwa-next-ts',
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true
  }
});
