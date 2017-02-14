
importScripts('/content/mu-plugins/SZN_scripts_styles/js/cache-polyfill.js');

self.addEventListener('install', function(e) {
e.waitUntil(
 caches.open('dentrist').then(function(cache) {
   return cache.addAll([
     '/',
   ]);
 })
);
});


self.addEventListener('fetch', function(event) {


  //This service worker won't touch the admin area and preview pages
	if (event.request.url.match(/wp-admin/) || event.request.url.match(/preview=true/)) {
		return;
	}

  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );


});
