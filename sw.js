const CACHE_NAME = "mi-web-cache-v1";
const URLS_A_CACHEAR = [
    "/",
    "/xd.gif",
    "/victimas.html",
    "/textlib.html",
    "/tempcro.html",
    "/tasking.html",
    "/sumtask.html",
    "/styles.css",
    "/sound.mp3"
    "/secretcomands.html"
    "/salida.mp3"
    "/punb.html"
    "/promedio.html"
    "/porcentaje.html"
    "/pics.html"
    "/organizator.html"
    "/nexus.html"
    "/manifest.json"
    "/index.html"
    "/idea.html"
    "/genecuentos.html"
    "/fastnotes.html"
    "/export.html"
    "/delete.html"
    "/convert.html"
    "/consen.htnl"
    "/compdays.html"
    "/code.js"
    "/brain.html"
    "/boton.html"
    "/binarin.html"
    "/agendax.html"
    "/2.jpg"
    "/1.jpg"
    "/sw.js"
];

// Instalar el service worker y almacenar en caché las páginas
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(URLS_A_CACHEAR);
        })
    );
});

// Interceptar peticiones y devolver desde caché si no hay conexión
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        }).catch(() => caches.match("/index.html")) // Si no hay conexión, cargar la página principal
    );
});
