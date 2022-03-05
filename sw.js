var CACHE_NAME = 'InfoVar-cache-v1';
let OFFLINE_URL = '/src/offlineIndex.html';
var urlsToCache = [
  '/src/css/style.css',
  '/src/js/map.js',
  '/src/img/background.webp',
  '/src/img/croquetas312-192.webp',
  '/src/img/croquetas624-385.webp',
  '/src/img/milanesa312-192.webp',
  '/src/img/milanesa624-385.webp',
  '/src/img/misopademiso312-192.webp',
  '/src/img/misopademiso624-385.webp',
  '/src/img/na312-192.webp',
  '/src/img/na624-385.webp',
  '/src/img/paella312-192.webp',
  '/src/img/paella624-385.webp',
  '/src/img/pimientos312-192.webp',
  '/src/img/pimientos624-385.webp',
  '/src/img/risoto312-192.webp',
  '/src/img/risoto624-385.webp',
  '/src/img/salaGrCiber.webp',
  '/src/img/salaPqCiber.webp',
  '/src/img/salaCiber.webp',
  '/src/img/sopaEnPan624-385.webp',
  '/src/img/sopaEnPan312-192.webp',
  '/src/offlineIndex.html',
  '/src/icons/logo.svg'

];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch',function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(async function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
  
              const cache = await caches.open(CACHE_NAME);
              const cachedResponse = await cache.match(OFFLINE_URL);
              return cachedResponse;
           
        })
      );
  });
  
  self.addEventListener('activate', function(event) {

    var cacheAllowlist = ['InfoVar-cache-v1'];
  
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheAllowlist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
  