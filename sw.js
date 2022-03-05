var CACHE_NAME = 'InfoVar-cache-v1';
let OFFLINE_URL = '/src/offlineIndex.html';
var urlsToCache = [
  '/css/style.css',
  '/js/map.js',
  '/img/background.webp',
  '/img/croquetas312-192.webp',
  '/img/croquetas624-385.webp',
  '/img/milanesa312-192.webp',
  '/img/milanesa624-385.webp',
  '/img/misopademiso312-192.webp',
  '/img/misopademiso624-385.webp',
  '/img/na312-192.webp',
  '/img/na624-385.webp',
  '/img/paella312-192.webp',
  '/img/paella624-385.webp',
  '/img/pimientos312-192.webp',
  '/img/pimientos624-385.webp',
  '/img/risoto312-192.webp',
  '/img/risoto624-385.webp',
  '/img/salaGrCiber.webp',
  '/img/salaPqCiber.webp',
  '/img/salaCiber.webp',
  '/img/sopaEnPan624-385.webp',
  '/img/sopaEnPan312-192.webp',
  '/offlineIndex.html',
  '/icons/logo.svg'

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
  