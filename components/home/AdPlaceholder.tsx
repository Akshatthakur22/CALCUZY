interface AdPlaceholderProps {
  slot: number
  size?: 'leaderboard' | 'rectangle' | 'banner'
  className?: string
}

const sizeConfig = {
  leaderboard: {
    minHeight: '90px',
    maxWidth: '728px',
    label: 'Leaderboard 728x90'
  },
  rectangle: {
    minHeight: '250px',
    maxWidth: '336px',
    label: 'Rectangle 336x280'
  },
  banner: {
    minHeight: '100px',
    maxWidth: '100%',
    label: 'Responsive Banner'
  }
}

export default function AdPlaceholder({ slot, size = 'banner', className = '' }: AdPlaceholderProps) {
  const config = sizeConfig[size]
  
  return (
    <div className={`w-full flex justify-center py-6 ${className}`}>
      <div 
        className="w-full bg-slate-50/50 border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-center"
        style={{ 
          minHeight: config.minHeight,
          maxWidth: config.maxWidth
        }}
        data-ad-slot={`calcuzy-ad-${slot}`}
        aria-label="Advertisement"
      >
        {/* This div will be replaced by AdSense code in production */}
        <div className="p-4">
          <p className="text-slate-400 text-xs font-medium tracking-wider uppercase mb-1">
            Advertisement
          </p>
          <p className="text-slate-500 text-xs">
            Ad Slot {slot} • {config.label}
          </p>
        </div>
      </div>
    </div>
  )
}
