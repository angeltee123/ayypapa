// Cached core static resources 
self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open("static").then(cache=>{
      return cache.addAll(["./",'.images/pwaimage/manifest-icon-192.maskable.png']);
    })
  );
});

// Fatch resources
self.addEventListener("fetch",e=>{
  e.respondWith(
    caches.match(e.request).then(response=>{
      return response||fetch(e.request);
    })
  );
});
