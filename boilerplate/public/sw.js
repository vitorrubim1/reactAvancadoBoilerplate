if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        n[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const n = document.createElement("script");
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
  self.define = (s, i, a) => {
    n[s] ||
      (n[s] = Promise.resolve().then(() => {
        let n = {};
        const r = { uri: location.origin + s.slice(1) };
        return Promise.all(
          i.map((s) => {
            switch (s) {
              case "exports":
                return n;
              case "module":
                return r;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = a(...e);
          return n.default || (n.default = s), n;
        });
      }));
  };
}
define("./sw.js", ["./workbox-8778d57b"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url:
            "/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.7923845c61cc0d544b15.js",
          revision: "nA0aLjhiAk4goL5-kJQ6A"
        },
        {
          url:
            "/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.3ccf89b1c188e974c1c6.js",
          revision: "nA0aLjhiAk4goL5-kJQ6A"
        },
        {
          url: "/_next/static/chunks/framework.cdbdac0a36200f52203c.js",
          revision: "nA0aLjhiAk4goL5-kJQ6A"
        },
        {
          url: "/_next/static/chunks/main-f1202d687512bfb145ba.js",
          revision: "nA0aLjhiAk4goL5-kJQ6A"
        },
        {
          url: "/_next/static/chunks/pages/_app-66e3d5e35abb47646c0c.js",
          revision: "nA0aLjhiAk4goL5-kJQ6A"
        },
        {
          url: "/_next/static/chunks/pages/_error-b2b6dd8f6d21cea34749.js",
          revision: "nA0aLjhiAk4goL5-kJQ6A"
        },
        {
          url: "/_next/static/chunks/pages/index-0bc9eaf5b7f2c0dc2f75.js",
          revision: "nA0aLjhiAk4goL5-kJQ6A"
        },
        {
          url: "/_next/static/chunks/polyfills-4950599f73bdfc797cc8.js",
          revision: "nA0aLjhiAk4goL5-kJQ6A"
        },
        {
          url: "/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",
          revision: "nA0aLjhiAk4goL5-kJQ6A"
        },
        {
          url: "/_next/static/nA0aLjhiAk4goL5-kJQ6A/_buildManifest.js",
          revision: "nA0aLjhiAk4goL5-kJQ6A"
        },
        {
          url: "/_next/static/nA0aLjhiAk4goL5-kJQ6A/_ssgManifest.js",
          revision: "nA0aLjhiAk4goL5-kJQ6A"
        },
        {
          url: "/images/hero-illustration.svg",
          revision: "5fd5143cba1046a214d9a359fce22e89"
        },
        {
          url: "/images/icon-192.png",
          revision: "d27169d080684ebb57b8387d05c4b444"
        },
        {
          url: "/images/icon-512.png",
          revision: "f1d74b43a3832183202483a40d9e9d84"
        },
        {
          url: "/images/logo.svg",
          revision: "202525302ad30aca5b2b790d4b0b5796"
        },
        { url: "/manifest.json", revision: "f15f0dafb630f424a1595720db7bf202" }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0
          })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0
          })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      "GET"
    );
});
