importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

console.log("⚙️ Hello from Service Worker")

workbox.routing.registerRoute(
  /https:\/\/jsonplaceholder.typicode.com/,
  workbox.strategies.networkFirst()
)

workbox.precaching.precacheAndRoute([]);
