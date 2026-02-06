import { useEffect, useState, useRef } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false
  } = options

  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const targetRef = useRef<Element | null>(null)

  useEffect(() => {
    const target = targetRef.current
    if (!target) return

    const callback = ([entry]: IntersectionObserverEntry[]) => {
      const isElementIntersecting = entry.isIntersecting
      
      if (freezeOnceVisible && hasIntersected) {
        return
      }

      setIsIntersecting(isElementIntersecting)
      
      if (isElementIntersecting && !hasIntersected) {
        setHasIntersected(true)
      }
    }

    const observer = new IntersectionObserver(callback, {
      threshold,
      root,
      rootMargin
    })

    observer.observe(target)

    return () => {
      observer.disconnect()
    }
  }, [threshold, root, rootMargin, freezeOnceVisible, hasIntersected])

  const ref = useRef((node: Element | null) => {
    targetRef.current = node
  })

  return { ref: ref.current, isIntersecting }
}
