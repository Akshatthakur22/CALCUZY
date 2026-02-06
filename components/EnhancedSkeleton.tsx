// Simple utility function for combining class names
function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ')
}

interface SkeletonProps {
  className?: string
  width?: string | number
  height?: string | number
  lines?: number
  animated?: boolean
  variant?: 'text' | 'rectangular' | 'circular'
}

export function EnhancedSkeleton({
  className = '',
  width,
  height,
  lines = 1,
  animated = true,
  variant = 'rectangular'
}: SkeletonProps) {
  const skeletonClass = cn(
    'bg-slate-200',
    variant === 'circular' ? 'rounded-full' : '',
    variant === 'rectangular' ? 'rounded' : '',
    variant === 'text' ? 'rounded-sm' : '',
    animated ? 'animate-shimmer' : '',
    animated ? 'bg-slate-100' : '',
    className
  )

  const style = {
    width: width || (variant === 'text' ? '100%' : undefined),
    height: height || (variant === 'text' ? '1rem' : undefined)
  }

  if (lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }, (_, i) => (
          <div
            key={i}
            className={skeletonClass}
            style={{
              ...style,
              width: i === lines - 1 ? '70%' : width // Last line shorter for text effect
            }}
          />
        ))}
      </div>
    )
  }

  return <div className={skeletonClass} style={style} />
}

// Pre-defined skeleton components for common patterns
export function CalculatorSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-3">
        <EnhancedSkeleton width="60%" height={32} variant="text" />
        <EnhancedSkeleton lines={2} height={16} variant="text" />
      </div>

      {/* Input fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="space-y-2">
            <EnhancedSkeleton width={120} height={16} variant="text" />
            <EnhancedSkeleton height={48} variant="rectangular" />
            <EnhancedSkeleton width={100} height={12} variant="text" />
          </div>
        ))}
      </div>

      {/* Button */}
      <EnhancedSkeleton height={48} variant="rectangular" />

      {/* Results section */}
      <div className="space-y-4">
        <EnhancedSkeleton width="40%" height={24} variant="text" />
        
        {/* Gauge skeleton */}
        <div className="flex flex-col items-center space-y-2">
          <EnhancedSkeleton width={200} height={100} variant="rectangular" />
          <EnhancedSkeleton width={120} height={16} variant="text" />
        </div>

        {/* Progress bar skeleton */}
        <div className="space-y-2">
          <EnhancedSkeleton width={150} height={16} variant="text" />
          <EnhancedSkeleton height={12} variant="rectangular" />
        </div>

        {/* Result cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="space-y-2">
                <EnhancedSkeleton width={80} height={12} variant="text" />
                <EnhancedSkeleton width={100} height={20} variant="text" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ToolPageSkeleton() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <EnhancedSkeleton width="80%" height={40} className="mx-auto" variant="text" />
        <EnhancedSkeleton lines={3} height={18} className="mx-auto max-w-3xl" variant="text" />
      </div>

      {/* Calculator */}
      <div className="max-w-2xl mx-auto">
        <CalculatorSkeleton />
      </div>

      {/* Content sections */}
      <div className="space-y-12">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="space-y-4">
            <EnhancedSkeleton width="60%" height={28} variant="text" />
            <EnhancedSkeleton lines={4} height={16} variant="text" />
            <EnhancedSkeleton width="100%" height={200} variant="rectangular" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="p-6 bg-white rounded-xl border border-slate-200 space-y-4">
      <div className="flex items-center justify-between">
        <EnhancedSkeleton width={120} height={20} variant="text" />
        <EnhancedSkeleton width={24} height={24} variant="circular" />
      </div>
      <EnhancedSkeleton lines={3} height={16} variant="text" />
      <EnhancedSkeleton width={80} height={32} variant="rectangular" />
    </div>
  )
}

// Add shimmer animation styles
export const shimmerStyles = `
  @keyframes shimmer {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  }
  
  .animate-shimmer {
    animation: shimmer 1.5s ease-in-out infinite;
    background-size: 200px 100%;
    background-image: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
  }
`
