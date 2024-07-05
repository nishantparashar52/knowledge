console.log('in service worker')
const cacheName ='nishantCachev2';
const cacheAsset = [
     'index.html',
     './',
     'LoopDetectLinkedList.js',
     './../infiniteScrolling'
]
self.addEventListener('install', e => {
    console.log('service worker installed');
    e.waitUntil(
        caches
        .open(cacheName)
        .then(cache => {
            cache.addAll(cacheAsset)
        })
        .then(() => self.skipWaiting())
    )
});


// activate
self.addEventListener('activate', e => {
    console.log('service worker activated')

    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    console.log('clearing old cache')
                    if(cache !== cacheName) return caches.delete(cache) 
                })
            )
        })
    )
})

self.addEventListener('fetch', e => {
    console.log('service worker fetch');
    e.respondWith(fetch(e.request)
    .then(res => {
        const resClone = res.clone();
        // open cache
        caches
        .open(cacheName)
        .then(cache => {
            cache.put(e.request, resClone);
        })
        return res;
    })
    .catch(() => caches.match(e.request)));
})