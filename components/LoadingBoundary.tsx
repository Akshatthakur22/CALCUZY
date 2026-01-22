'use client'

import { Suspense } from 'react'
import Skeleton from './Skeleton'

interface LoadingBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function LoadingBoundary({ children, fallback }: LoadingBoundaryProps) {
  const defaultFallback = (
    <div className="min-h-screen flex items-center justify-center bg-primary-bg">
      <div className="max-w-md mx-auto p-6">
        <div className="space-y-4">
          <Skeleton width="w-full" height="h-8" />
          <Skeleton width="w-3/4" height="h-6" />
          <Skeleton width="w-1/2" height="h-6" />
        </div>
      </div>
    </div>
  )

  return (
    <Suspense fallback={fallback || defaultFallback}>
      {children}
    </Suspense>
  )
}
