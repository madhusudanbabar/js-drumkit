const kCaches = "k-drumkit-v1"
const assets = [
  "/",
  "/index.html",
  "app.js",
  "sounds/boom.wav",
  "sounds/clap.wav",
  "sounds/hihat.wav",
  "sounds/kick.wav",
  "sounds/openhat.wav",
  "sounds/ride.wav",
  "sounds/snare.wav",
  "sounds/tink.wav",
  "sounds/tom.wav",
  "assets/drummer.jpg",
  "assets/favicon.ico",
  "style.css"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(kCaches).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })