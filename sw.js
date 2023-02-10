var CACHE_VERSION = "v38";
var CACHE = "neo-manager-" + CACHE_VERSION;

// Call install event
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            cache.addAll([                
                "./manifest.json",
                "./sw.js",
                
                "./media/512.png",
                "./media/512.svg",
                "./media/background.svg",
                "./media/agencies.svg",
                "./media/earnings.svg",
                "./media/freelancers.svg",
                "./media/managers.svg",
                "./media/projects.svg",
                "./media/logout.svg",
               
                "./index.html",
                "./index.css",
                "./index.js",
               
                "./global.css",
                "./global.js",

                "./login/index.html",
                "./login/login.css",
                "./login/login.js", 
                
                "./freelancers/index.html",
                "./freelancers/freelancers.css",
                "./freelancers/freelancers.js",

                "./earnings/index.html",
                "./earnings/earnings.css",
                "./earnings/earnings.js",   
                
                "./agencies/index.html",
                "./agencies/agencies.css",
                "./agencies/agencies.js",

                "./managers/index.html",
                "./managers/managers.css",
                "./managers/managers.js",

                "./projects/index.html",
                "./projects/projects.css",
                "./projects/projects.js",

                "./stats/index.html",
                "./stats/stats.css",
                "./stats/stats.js",

                "https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P:v1/projects",
                "https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P:v1/agencies",
                "https://x8ki-letl-twmt.n7.xano.io/api:Gj5ATWME:v1/earnings",
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
                else if (event.request.headers.get("accept").includes("text/html")) {
                    return caches.match("./");
                }
            });
        })
    );
});