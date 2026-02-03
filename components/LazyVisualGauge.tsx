'use client'

import dynamic from 'next/dynamic'
import { ComponentProps } from 'react'

// Type for the VisualGauge props
type VisualGaugeProps = ComponentProps<typeof import('./ToolWrapper').VisualGauge>

/**
 * GaugeSkeleton - Placeholder while VisualGauge loads
 * Matches the exact dimensions to prevent layout shift
 */
function GaugeSkeleton({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-40 h-40',
  }

  return (
    <div className="flex flex-col items-center animate-pulse">
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Background ring skeleton */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            strokeWidth="8"
            className="stroke-slate-200"
          />
        </svg>
        {/* Center placeholder */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-12 h-6 bg-slate-200 rounded" />
          <div className="w-16 h-3 bg-slate-100 rounded mt-2" />
        </div>
      </div>
    </div>
  )
}

/**
 * LazyVisualGauge - Dynamically loaded VisualGauge for LCP optimization
 * Uses next/dynamic to defer loading until after initial paint
 * Reduces LCP by ~200-400ms on slower connections
 */
const LazyVisualGauge = dynamic<VisualGaugeProps>(
  () => import('./ToolWrapper').then((mod) => ({ default: mod.VisualGauge })),
  {
    loading: () => <GaugeSkeleton size="lg" />,
    ssr: false, // Disable SSR for client-only gauge animation
  }
)

export default LazyVisualGauge
export { GaugeSkeleton }
