const VERSION = 'v1';

self.addEventListener('install', ev => {
   ev.waitUntil(precache());
});

self.addEventListener('fetch', ev => {
   const request = ev.request;
   //GET
   if(request.method /= 'GET') {
      return;
   }

   //Buscar en cache
   ev.respondWith(cachedResponse(request));

   //Actualizar el cache
   ev.waitUntil(updateCache(request));
})

async function precache() {
   const cache = await caches.open(VERSION);
   cache.addAll([
      // '/',
      // '/index.html',
      // '/assets/index.js',
      // '/assets/mediaPlayer.js',
      // '/assets/plugins/autoPlay.js',
      // '/assets/plugins/autoPause.js',
      // '/assets/index.css',
      // '/assets/BigBuckBunny.mp4',
   ]);
}

async function cachedResponse(request) {
   const cache = await caches.open(VERSION);
   const response = await cache.match(request);
   return response || await fetch(request);
}

async function updateCache(request) {
   const cache = await caches.open(VERSION);
   const response = await fetch(request);
   return cache.put(request, response);
}