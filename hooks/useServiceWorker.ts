import { useEffect, useState } from 'react'

interface ServiceWorkerState {
  isSupported: boolean
  isInstalled: boolean
  isActivated: boolean
  registration: ServiceWorkerRegistration | null
}

export function useServiceWorker() {
  const [swState, setSwState] = useState<ServiceWorkerState>({
    isSupported: false,
    isInstalled: false,
    isActivated: false,
    registration: null
  })

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      setSwState(prev => ({ ...prev, isSupported: true }))

      // Register service worker
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration)
          
          setSwState(prev => ({ 
            ...prev, 
            isInstalled: true,
            registration 
          }))

          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'activated') {
                  setSwState(prev => ({ ...prev, isActivated: true }))
                  // Notify user of update
                  if (confirm('New version available! Reload to update?')) {
                    window.location.reload()
                  }
                }
              })
            }
          })
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error)
        })

      // Listen for controlling service worker
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('Service Worker controller changed')
        setSwState(prev => ({ ...prev, isActivated: true }))
      })

    }
  }, [])

  const promptInstall = async () => {
    if (!swState.registration) return false

    let deferredPrompt: any = null
    
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      deferredPrompt = e
    })

    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      deferredPrompt = null
      return outcome === 'accepted'
    }
    
    return false
  }

  const skipWaiting = () => {
    if (swState.registration && swState.registration.waiting) {
      swState.registration.waiting.postMessage({ type: 'SKIP_WAITING' })
    }
  }

  return {
    ...swState,
    promptInstall,
    skipWaiting
  }
}
