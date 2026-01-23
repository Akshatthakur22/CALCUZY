'use client'

import { useState, useEffect, useRef } from 'react'

interface LazySectionProps {
  children: React.ReactNode
  rootMargin?: string
  threshold?: number
  fallback?: React.ReactNode
}

export default function LazySection({ 
  children, 
  rootMargin = '100px', 
  threshold = 0.1,
  fallback = null
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true)
          setHasLoaded(true)
        }
      },
      {
        rootMargin,
        threshold,
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [rootMargin, threshold, hasLoaded])

  return (
    <div ref={ref} className="lazy-section">
      {isVisible ? children : fallback}
    </div>
  )
}
