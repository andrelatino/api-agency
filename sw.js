var CACHE_VERSION = "v31";
var CACHE = "neo-manager-" + CACHE_VERSION;

// Call install event
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            cache.addAll([                
                "./manifest.json",
                "./sw.js",
                
                "./media/512x512.png",
                "./bg1.svg",
               
                "./index.html",
                "./index.css",
                "./index.js",
               
                "./global.css",
                "./global.js",

                "./login/login.html",
                "./login/login.css",
                "./login/login.js",                
                
                "./projects/projects.html",
                "./projects/projects.js",
                "./projects/projects.css",
                "./projects/project.html",
                "./projects/project.js",
                "./projects/project.css",

                "./agencies/agencies.html",
                "./agencies/agencies.js",
                "./agencies/agencies.css",

                "./managers/managers.html",
                "./managers/managers.js",
                "./managers/managers.css",

                "./stats/stats.html",
                "./stats/stats.js",
                "./stats/stats.css",


                "https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P/project",
                "https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P/agency",
                "https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P/user",
                "https://x8ki-letl-twmt.n7.xano.io/api:Gj5ATWME/stats",
                
                
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