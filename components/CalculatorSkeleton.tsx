import Skeleton from './Skeleton'

export function CalculatorSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Input fields skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 bg-slate-200 rounded w-24" />
            <div className="h-12 bg-slate-200 rounded-lg" />
          </div>
        ))}
      </div>
      
      {/* Button skeleton */}
      <div className="h-12 bg-slate-200 rounded-lg" />
      
      {/* Results skeleton */}
      <div className="space-y-4">
        <div className="h-16 bg-slate-200 rounded-lg" />
        <div className="h-8 bg-slate-200 rounded-lg" />
        
        {/* Result cards skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="h-3 bg-slate-200 rounded w-20 mb-2" />
              <div className="h-6 bg-slate-200 rounded w-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
