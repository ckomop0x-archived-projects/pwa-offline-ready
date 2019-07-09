importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

console.log("⚙️ Hello from Service Worker")

workbox.routing.registerRoute(
  /https:\/\/jsonplaceholder.typicode.com/,
  workbox.strategies.networkFirst()
)

workbox.precaching.precacheAndRoute([
  {
    "url": "app.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "app.js",
    "revision": "06df590b8a9c642a16100ebc4a5b5d40"
  },
  {
    "url": "index.html",
    "revision": "c4c75da9b6073ee192b8090f260854b5"
  },
  {
    "url": "src-sw.js",
    "revision": "7e07cdcd2a53ed391572868e17804821"
  },
  {
    "url": "sw-old.js",
    "revision": "f38def932d107a8abf892cae0d3309f7"
  },
  {
    "url": "workbox-config.js",
    "revision": "f54024172b010314fe7a9d6935340634"
  }
]);
