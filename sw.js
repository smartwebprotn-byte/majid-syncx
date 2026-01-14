const CACHE_NAME = 'majid-avatar-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/zero.jpg',
  '/sprites/bouche_A.png',
  '/sprites/bouche_B.png',
  '/sprites/bouche_C.png',
  '/sprites/bouche_D.png',
  '/sprites/bouche_E.png',
  '/sprites/bouche_F.png',
  '/sprites/bouche_G.png',
  '/sprites/bouche_H.png',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});