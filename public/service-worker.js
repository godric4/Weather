if ("serviceWorker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("service-worker.js")
  .then(() => {
    console.log('registered')
  })
}

self.addEventListener('install', (event)=> {
  console.log('installed')
  event.waitUntil(
    caches.open('static')
    .then((cache) => {
      cache.addAll([
        '/',
        'index.html',
        '/css/base.css',
      ])
    })
  ) 
})

self.addEventListener('activate', ()=> {
  console.log('Activated')
})

self.addEventListener('fetch', (event)=> {
  event.respondWith(
    caches.match(event.request)
    .then((res)=> {
      if(res) {
        return res;
      } else {
        return fetch(event.request)
      }
    })
  )
  console.log('fetched')
})

