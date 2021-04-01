if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js');
      let s = Promise.resolve();
      return (
        n[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const n = document.createElement('script');
              (n.src = e), document.head.appendChild(n), (n.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!n[e]) throw new Error(`Module ${e} didn’t register its module`);
          return n[e];
        })
      );
    },
    s = (s, n) => {
      Promise.all(s.map(e)).then((e) => n(1 === e.length ? e[0] : e));
    },
    n = { require: Promise.resolve(s) };
  self.define = (s, i, r) => {
    n[s] ||
      (n[s] = Promise.resolve().then(() => {
        let n = {};
        const c = { uri: location.origin + s.slice(1) };
        return Promise.all(
          i.map((s) => {
            switch (s) {
              case 'exports':
                return n;
              case 'module':
                return c;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = r(...e);
          return n.default || (n.default = s), n;
        });
      }));
  };
}
define('./sw.js', ['./workbox-030153e1'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/static/-B7Hs4KH76YVYjTXfsTSJ/_buildManifest.js', revision: '-B7Hs4KH76YVYjTXfsTSJ' },
        { url: '/_next/static/-B7Hs4KH76YVYjTXfsTSJ/_ssgManifest.js', revision: '-B7Hs4KH76YVYjTXfsTSJ' },
        {
          url: '/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.5dacc772def594ef7e12.js',
          revision: '-B7Hs4KH76YVYjTXfsTSJ'
        },
        { url: '/_next/static/chunks/framework.b9686132f4a63456bac1.js', revision: '-B7Hs4KH76YVYjTXfsTSJ' },
        { url: '/_next/static/chunks/main-24e1e467c114d9870248.js', revision: '-B7Hs4KH76YVYjTXfsTSJ' },
        { url: '/_next/static/chunks/pages/_app-677abb50b92326134ce1.js', revision: '-B7Hs4KH76YVYjTXfsTSJ' },
        { url: '/_next/static/chunks/pages/_error-6a16c2d17171a86fc6f6.js', revision: '-B7Hs4KH76YVYjTXfsTSJ' },
        { url: '/_next/static/chunks/pages/index-c4144c421bc0a94250c0.js', revision: '-B7Hs4KH76YVYjTXfsTSJ' },
        { url: '/_next/static/chunks/polyfills-aa54647e89713304033b.js', revision: '-B7Hs4KH76YVYjTXfsTSJ' },
        { url: '/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js', revision: '-B7Hs4KH76YVYjTXfsTSJ' },
        { url: '/_next/static/css/94f0e0fcd1f94c743117.css', revision: '-B7Hs4KH76YVYjTXfsTSJ' },
        { url: '/favicon.ico', revision: '21b739d43fcb9bbb83d8541fe4fe88fa' },
        { url: '/icons/icon-128x128.png', revision: 'd626cfe7c65e6e5403bcbb9d13aa5053' },
        { url: '/icons/icon-144x144.png', revision: 'e53a506b62999dc7a4f8b7222f8c5add' },
        { url: '/icons/icon-152x152.png', revision: '18b3958440703a9ecd3c246a0f3f7c72' },
        { url: '/icons/icon-16x16.png', revision: '83703514f19796ee15151e450984416d' },
        { url: '/icons/icon-192x192.png', revision: '27dc12f66697a47b6a8b3ee25ba96257' },
        { url: '/icons/icon-32x32.png', revision: '25e2c6ee34840568012b32e4314278df' },
        { url: '/icons/icon-384x384.png', revision: 'a40324a3fde2b0b26eeffd4f08bf8be8' },
        { url: '/icons/icon-512x512.png', revision: '93d6e8e15cfa78dfee55446f607d9a28' },
        { url: '/icons/icon-72x72.png', revision: 'f2ffc41b3482888f3ae614e0dd2f6980' },
        { url: '/icons/icon-96x96.png', revision: 'fba02a40f7ba6fc65be8a2f245480f6d' },
        { url: '/icons/pwa-icon-192x192.png', revision: '9176688720e2ae431372da7e25ee50ba' },
        { url: '/icons/pwa-icon-512x512.png', revision: 'e6cec51afec10d453c6caf8a9d37aee7' },
        { url: '/manifest.json', revision: '2bf8c5050196c4baa3e1f36abcf78032' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [new e.ExpirationPlugin({ maxEntries: 1, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3, purgeOnQuotaError: !0 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800, purgeOnQuotaError: !0 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })]
      }),
      'GET'
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })]
      }),
      'GET'
    );
});
