/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "729e2027d1a728f1a704e88e9ebf48dc"
  },
  {
    "url": "assets/css/0.styles.7a90d81a.css",
    "revision": "4b725fd2cb537dfad34b628ea90725d3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.b5aadf4d.js",
    "revision": "5870651ef1e4aea939e09825585e425d"
  },
  {
    "url": "assets/js/3.61303a4e.js",
    "revision": "ad07cffe71950f62e9c95bf8d55f9703"
  },
  {
    "url": "assets/js/4.c4abe961.js",
    "revision": "53d113f9a9b270ca8a6dd4d92c88caa1"
  },
  {
    "url": "assets/js/5.ee9e2399.js",
    "revision": "9044af5a6f64be78a7ff768f0bdd08a4"
  },
  {
    "url": "assets/js/6.4be9f095.js",
    "revision": "916d00004f945dc40e6e2bac0ec2b670"
  },
  {
    "url": "assets/js/app.357539aa.js",
    "revision": "5174ea2a963db4a8da21873cae7451a6"
  },
  {
    "url": "baseKnowledge/HTTP.html",
    "revision": "53b7ab08b09564838b0578d75f38e56c"
  },
  {
    "url": "images/favicon.png",
    "revision": "5bdb86f76f33be5b45973bbc9da32324"
  },
  {
    "url": "images/photo.jpg",
    "revision": "b73cf1297764f2fbd0c828ca67cc7d68"
  },
  {
    "url": "index.html",
    "revision": "c8335c25d117faad7f0af008790f052a"
  },
  {
    "url": "target/index.html",
    "revision": "ac8a7d0abdf4425ac3abcf88b130ceb4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
