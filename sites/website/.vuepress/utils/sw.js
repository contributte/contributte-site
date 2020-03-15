self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  console.log('ℹ️ ServiceWorker activated');
  self.registration.unregister()
    .then(function() {
      console.log('ℹ️ ServiceWorker unregistred');
      return self.clients.matchAll();
    })
    .then(function(clients) {
      console.log('ℹ️ ServiceWorker reloading');
      clients.forEach(client => client.navigate(client.url))
    });
});
