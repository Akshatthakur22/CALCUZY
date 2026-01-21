import { ReactNode, CSSProperties } from 'react'

interface SkeletonProps {
  children?: ReactNode
  className?: string
  width?: string
  height?: string
  lines?: number
  style?: CSSProperties
}

export default function Skeleton({ 
  children, 
  className = '', 
  width = 'w-full', 
  height = 'h-4',
  lines = 1,
  style = {}
}: SkeletonProps) {
  if (lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`skeleton ${width} ${height}`}
            style={{
              animationDelay: `${index * 100}ms`,
              ...style
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className={`skeleton ${width} ${height} ${className}`} style={style} />
  )
}

// Specialized skeleton components
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-border p-6">
      <div className="space-y-4">
        <Skeleton width="w-3/4" height="h-6" />
        <Skeleton lines={2} />
        <Skeleton width="w-1/2" height="h-4" />
      </div>
    </div>
  )
}

export function CountdownSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-border p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="text-center">
            <Skeleton width="w-full" height="h-16" className="mb-2" />
            <Skeleton width="w-16" height="h-4" className="mx-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function NameGridSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-border p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {Array.from({ length: 12 }).map((_, index) => (
          <Skeleton 
            key={index} 
            width="w-full" 
            height="h-8"
            className="rounded"
            style={{
              animationDelay: `${index * 50}ms`
            }}
          />
        ))}
      </div>
    </div>
  )
}
