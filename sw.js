var CACHE_VERSION = "v13";
var CACHE = "neo-manager-" + CACHE_VERSION;

// Call install event
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            cache.addAll([                
                "./manifest.json",
                "./sw.js",
                "./512x512.png",
                "./index.html",
                "./index.css",
                "./index.js",
                "./login.html",
                "./login.js",
                "./login.css",
                "https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P/auth/login",
                "https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P/project",                
                "./bg1.svg",
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
        fetch(event.request).catch(() => {
            return caches.match(event.request).then((response) => {
                if (response) {
                    return response;
                } 
                // else if (event.request.headers.get("accept").includes("text/html")) {
                //     return caches.match("./");
                // }
            });
        })
    );
});