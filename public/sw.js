// Service Worker for Calcuzy.app
// Provides offline functionality and performance optimization

const CACHE_NAME = 'calcuzy-v2'
const STATIC_CACHE = 'calcuzy-static-v2'
const DYNAMIC_CACHE = 'calcuzy-dynamic-v2'
const RUNTIME_CACHE = 'calcuzy-runtime-v2'

// Assets to cache for offline functionality
const STATIC_ASSETS = [
  '/',
  '/tools',
  '/countdowns',
  '/names',
  '/quotes',
  '/about',
  '/privacy-policy',
  '/terms',
  '/contact',
  '/age-calculator',
  '/bmi-calculator',
  '/capital-gains-calculator',
  '/crypto-tax-calculator',
  '/will-generator',
  '/site.webmanifest',
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/apple-touch-icon.png',
  '/logo.png',
  '/icon-192.png',
  '/icon-512.png',
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
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== RUNTIME_CACHE &&
                !cacheName.startsWith('calcuzy-')) {
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

  // Skip external requests except for critical APIs
  if (url.origin !== location.origin && !isAllowedExternal(url)) return

  // Handle different request types with appropriate strategies
  if (isStaticAsset(request.url)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE))
  } else if (isAPIRequest(request.url)) {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE))
  } else if (isPageRequest(request.url)) {
    event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE))
  } else {
    event.respondWith(networkOnly(request))
  }
})

// Cache strategies
function cacheFirst(request, cacheName = STATIC_CACHE) {
  return caches.match(request)
    .then((response) => {
      if (response) {
        return response
      }
      return fetch(request)
        .then((response) => {
          // Cache successful responses
          if (response.ok) {
            caches.open(cacheName)
              .then((cache) => cache.put(request, response.clone()))
          }
          return response
        })
        .catch(() => {
          // Return offline fallback for pages
          if (request.mode === 'navigate') {
            return caches.match('/offline.html')
          }
        })
    })
}

function networkFirst(request, cacheName = DYNAMIC_CACHE) {
  return fetch(request)
    .then((response) => {
      // Cache successful API responses
      if (response.ok) {
        caches.open(cacheName)
          .then((cache) => cache.put(request, response.clone()))
      }
      return response
    })
    .catch(() => {
      // Fallback to cache if network fails
      return caches.match(request)
    })
}

function staleWhileRevalidate(request, cacheName = DYNAMIC_CACHE) {
  return caches.open(cacheName)
    .then((cache) => {
      return cache.match(request)
        .then((response) => {
          const fetchPromise = fetch(request)
            .then((networkResponse) => {
              if (networkResponse.ok) {
                cache.put(request, networkResponse.clone())
              }
              return networkResponse
            })
            .catch(() => {
              // If network fails and no cached response, show offline page
              if (!response && request.mode === 'navigate') {
                return caches.match('/offline.html')
              }
            })
          return response || fetchPromise
        })
    })
}

function networkOnly(request) {
  return fetch(request).catch(() => {
    if (request.mode === 'navigate') {
      return caches.match('/offline.html')
    }
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
         url.includes('.woff2') ||
         url.includes('.webp')
}

function isAPIRequest(url) {
  return url.includes('/api/') || 
         url.includes('workers') ||
         url.includes('vercel') ||
         url.includes('analytics')
}

function isPageRequest(url) {
  const urlObj = new URL(url)
  return urlObj.pathname === '/' ||
         urlObj.pathname.startsWith('/tools') ||
         urlObj.pathname.startsWith('/countdowns') ||
         urlObj.pathname.startsWith('/names') ||
         urlObj.pathname.startsWith('/quotes') ||
         urlObj.pathname.startsWith('/about') ||
         urlObj.pathname.startsWith('/privacy') ||
         urlObj.pathname.startsWith('/terms') ||
         urlObj.pathname.startsWith('/contact') ||
         urlObj.pathname.includes('-calculator') ||
         urlObj.pathname.includes('-generator')
}

function isAllowedExternal(url) {
  const allowedDomains = [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'www.googletagmanager.com',
    'pagead2.googlesyndication.com',
    'www.google-analytics.com',
    'vercel.live'
  ]
  return allowedDomains.includes(url.hostname)
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
