var CACHE_VERSION = "v34";
var CACHE = "neo-manager-" + CACHE_VERSION;

// Call install event
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            cache.addAll([                
                "./manifest.json",
                "./sw.js",
                
                "./media/512x512.png",
                "./media/bg1.svg",
               
                "./index.html",
                "./index.css",
                "./index.js",
               
                "./global.css",
                "./global.js",

                "./login/index.html",
                "./login/login.css",
                "./login/login.js",            

            ])
        })
    )
});

// Call activate event
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName.startsWith("neo-manager-") && cacheName !== CACHE) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Call fetch event
self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                if (!response || response.status !== 200) {
                    return caches.match(event.request);
                }
                return response;
            })
            .catch(() => {
                return caches.match(event.request);
            })
    );
});
