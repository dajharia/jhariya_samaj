self.addEventListener('install', (event) => {
  console.log('Service worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activated');
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // ब्राउज़र को संतुष्ट करने के लिए एक साधारण Fetch हैंडलर
  event.respondWith(fetch(event.request).catch(() => new Response('Offline')));
});