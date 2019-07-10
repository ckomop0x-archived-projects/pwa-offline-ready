console.log("⚙️ Hello from Service Worker")

workbox.routing.registerRoute(
  /https:\/\/jsonplaceholder.typicode.com/,
  new workbox.strategies.NetworkFirst()
)

workbox.precaching.precacheAndRoute(self.__precacheManifest);
