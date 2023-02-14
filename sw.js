var CACHE_VERSION = "v47";
var CACHE = "neo-manager-" + CACHE_VERSION;

// Call install event
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            cache.addAll([                
               
                "./manifest.json",
                "./sw.js",
               
                "./index.html",
                "./index.css",
                "./index.js",
               
                "./global.css",
                "./global.js",

                "./login.html",
                "./login.css",
                "./login.js", 

                "./media/pwa-icon-512.png",
                "./media/pwa-icon-512.svg",
                "./media/background.svg",
                "./media/agencies.svg",
                "./media/earnings.svg",
                "./media/freelancers.svg",
                "./media/managers.svg",
                "./media/projects.svg",
                "./media/logout.svg",
                "./media/stats.svg",
                "./media/settings.svg",
                "./media/customers.svg",

                "./projects/",
                "./projects/projects.css",
                "./projects/projects.js",
                "./projects/project.html",
                "./projects/project.css",
                "./projects/project.js",
                "https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P:v1/projects",

                "./managers/",
                "./managers/managers.css",
                "./managers/managers.js",
                "https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P:v1/managers",

                "./agencies/",
                "./agencies/agencies.css",
                "./agencies/agencies.js",
                "https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P:v1/agencies",

                "./freelancers/",
                "./freelancers/freelancers.css",
                "./freelancers/freelancers.js",
                "https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P:v1/freelancers",

                "./earnings/",
                "./earnings/earnings.css",
                "./earnings/earnings.js",
                "https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P:v1/earnings",

                "./customers/",
                "./customers/customers.css",
                "./customers/customers.js",
                "https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P:v1/customers",

                "./stats/",
                "./stats/stats.css",
                "./stats/stats.js",
                "https://x8ki-letl-twmt.n7.xano.io/api:rrdh6N4P:v1/stats",
                               
                
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