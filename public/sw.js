// Service Worker for Calcuzy.app
// Provides offline functionality and performance optimization

const CACHE_NAME = 'calcuzy-v1'
const STATIC_CACHE = 'calcuzy-static-v1'
const DYNAMIC_CACHE = 'calcuzy-dynamic-v1'

// Assets to cache for offline functionality
const STATIC_ASSETS = [
  '/',
  '/tools',
  '/capital-gains-calculator',
  '/bmi-calculator',
  '/age-calculator',
  '/manifest.json',
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/apple-touch-icon.png',
  '/logo.png',
  // Critical CSS and JS files will be cached automatically
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...')
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => self.skipWaiting())
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...')
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => self.clients.claim())
  )
})

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip external requests
  if (url.origin !== location.origin) return

  // Strategy: Cache First for static assets, Network First for API calls
  if (isStaticAsset(request.url)) {
    event.respondWith(cacheFirst(request))
  } else if (isAPIRequest(request.url)) {
    event.respondWith(networkFirst(request))
  } else {
    event.respondWith(staleWhileRevalidate(request))
  }
})

// Cache strategies
function cacheFirst(request) {
  return caches.match(request)
    .then((response) => {
      return response || fetch(request)
        .then((response) => {
          // Cache successful responses
          if (response.ok) {
            caches.open(STATIC_CACHE)
              .then((cache) => cache.put(request, response.clone()))
          }
          return response
        })
    })
}

function networkFirst(request) {
  return fetch(request)
    .then((response) => {
      // Cache successful API responses
      if (response.ok) {
        caches.open(DYNAMIC_CACHE)
          .then((cache) => cache.put(request, response.clone()))
      }
      return response
    })
    .catch(() => {
      // Fallback to cache if network fails
      return caches.match(request)
    })
}

function staleWhileRevalidate(request) {
  return caches.open(DYNAMIC_CACHE)
    .then((cache) => {
      return cache.match(request)
        .then((response) => {
          const fetchPromise = fetch(request)
            .then((networkResponse) => {
              cache.put(request, networkResponse.clone())
              return networkResponse
            })
          return response || fetchPromise
        })
    })
}

// Helper functions
function isStaticAsset(url) {
  return url.includes('/_next/static/') ||
         url.includes('/images/') ||
         url.includes('/fonts/') ||
         url.includes('.css') ||
         url.includes('.js') ||
         url.includes('.png') ||
         url.includes('.jpg') ||
         url.includes('.jpeg') ||
         url.includes('.svg') ||
         url.includes('.ico') ||
         url.includes('.woff') ||
         url.includes('.woff2')
}

function isAPIRequest(url) {
  return url.includes('/api/') || url.includes('workers')
}

// Background sync for offline calculations
self.addEventListener('sync', (event) => {
  if (event.tag === 'calculation-sync') {
    event.waitUntil(syncCalculations())
  }
})

// Push notifications for completed calculations (optional)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json()
    if (data.type === 'calculation-complete') {
      event.waitUntil(
        self.registration.showNotification('Calculation Complete', {
          body: 'Your capital gains calculation is ready.',
          icon: '/icon-192.png',
          badge: '/favicon-32x32.png',
          tag: 'calculation'
        })
      )
    }
  }
})

// Periodic cache cleanup
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CACHE_CLEANUP') {
    cleanupCache()
  }
})

function cleanupCache() {
  caches.open(DYNAMIC_CACHE)
    .then((cache) => {
      cache.keys()
        .then((requests) => {
          requests.forEach((request) => {
            // Remove cache entries older than 7 days
            const url = new URL(request.url)
            const timestamp = url.searchParams.get('timestamp')
            if (timestamp) {
              const age = Date.now() - parseInt(timestamp)
              if (age > 7 * 24 * 60 * 60 * 1000) {
                cache.delete(request)
              }
            }
          })
        })
    })
}

// Performance monitoring
self.addEventListener('fetch', (event) => {
  const start = performance.now()
  
  event.respondWith(
    fetch(event.request).then((response) => {
      const duration = performance.now() - start
      
      // Log slow requests
      if (duration > 1000) {
        console.log(`Slow request: ${event.request.url} took ${duration.toFixed(2)}ms`)
      }
      
      return response
    })
  )
})
