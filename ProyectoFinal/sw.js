const CACHE_NAME = "tareas-app-1.0";
// const FILE_PATH = "ProyectoFinal";
// const FILE_PATH = "";

self.addEventListener('install', event => {
    console.log("Service Worker: Instalacion en proceso");

    event.waitUntil(

        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll([
                 '/index.html',
                 '/js/main.js',
                 '/image/icon.png'
            ]);
        }).then(() => {
            console.log("Service Worker: Proceso de instalacion completo");
    
        })

    )
})

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(CACHE_NAME)
        .then(cache => caches.match(event.request, {ignoreSearch: true}))
        .then(response => {
            return response || fetch(event.request)
        }).catch(error => console.log(error))
    )
})