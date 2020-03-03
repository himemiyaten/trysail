'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "278f0d5961683eda2dc1fbc642c82a06",
"/assets\assets\image\momo_home.jpg": "4d7bf990ab8c90b55b20e3da356de050",
"/assets\assets\image\shiina_home.jpg": "f957fd8de2a86fe5bdf91524cea1e478",
"/assets\assets\image\sora_home.jpg": "a246752bceca8579a50d0904b4a72c62",
"/assets\assets\image\trysail_home.jpg": "c5e43838afddc5951816975f7bf55c18",
"/assets\assets\json\news.json": "e4921835110f7691da7dc0ce11bbd7f9",
"/assets\FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "65aa608af95ac106541307cb028c687f",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "40602f6fd56d36735fc70265afc986d3",
"/main.dart.js": "c6b54f27cc3f516d1976937d84c9deed",
"/manifest.json": "5bea642b7aeffe320dfdb436f1c07894"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
