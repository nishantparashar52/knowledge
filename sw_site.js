// install files

const cacheName = 'v2';

const cacheAssets = [
    '/sdk.json',
    'ScrollEffect/index.html',
    'ScrollEffect/index.css',
    '/PromiseAll.js',
    '/infiniteScrolling/index.html',
    '/infiniteScrolling/index.js'
];
self.addEventListener('install', e => {
    console.log('SW installed');
    // e.waitUntil(
    //     caches
    //     .open(cacheName)
    //     .then(cache => {
    //             console.log('Service Worker: Caching File');
    //             cache.addAll(cacheAssets);
    //         })
    //         .then(() => self.skipWaiting())
    // )

});

self.addEventListener('activate', e => {
    console.log('activated');
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
})

// call fetch method

self.addEventListener('fetch', e => {
    console.log('fetching resorce', e);
    e.respondWith(
        fetch(e.request)
        .then(res => {
            console.log(res);
            // make copy clone of response
            let resClone = res.clone();
            caches
            .open(cacheName)
            .then(cache => {
                cache.put(e.request, resClone);
            })
            return res;
        }).catch(err => caches.match(e.request).then(res => res))
    )
})