interface AdUnitProps {
  slot: number
  format?: 'horizontal' | 'rectangle' | 'vertical' | 'responsive'
  className?: string
}

/**
 * AdSense-ready ad unit with fixed dimensions to prevent CLS (Cumulative Layout Shift)
 * Uses aspect-ratio containers for predictable sizing before ad loads
 */

const formatConfig = {
  horizontal: {
    // Leaderboard 728x90 or Mobile Banner 320x100
    aspectRatio: '728 / 90',
    mobileAspectRatio: '320 / 100',
    maxWidth: '728px',
    minHeight: '90px',
    mobileMinHeight: '100px',
    label: 'Leaderboard',
  },
  rectangle: {
    // Medium Rectangle 300x250 or Large Rectangle 336x280
    aspectRatio: '336 / 280',
    mobileAspectRatio: '300 / 250',
    maxWidth: '336px',
    minHeight: '250px',
    mobileMinHeight: '250px',
    label: 'Rectangle',
  },
  vertical: {
    // Wide Skyscraper 160x600 or Large Skyscraper 300x600
    aspectRatio: '300 / 600',
    mobileAspectRatio: '160 / 600',
    maxWidth: '300px',
    minHeight: '600px',
    mobileMinHeight: '400px',
    label: 'Skyscraper',
  },
  responsive: {
    // Auto-sizing responsive ad
    aspectRatio: 'auto',
    mobileAspectRatio: 'auto',
    maxWidth: '100%',
    minHeight: '100px',
    mobileMinHeight: '100px',
    label: 'Responsive',
  },
}

export default function AdUnit({ slot, format = 'responsive', className = '' }: AdUnitProps) {
  const config = formatConfig[format]

  return (
    <div 
      className={`w-full flex justify-center my-8 ${className}`}
      role="complementary"
      aria-label="Advertisement"
    >
      <div
        className="w-full bg-slate-50/50 border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-center transition-opacity duration-300"
        style={{
          maxWidth: config.maxWidth,
          minHeight: config.minHeight,
          // Use aspect-ratio for stable layout before ad loads
          aspectRatio: format !== 'responsive' ? config.aspectRatio : undefined,
        }}
        data-ad-slot={`calcuzy-slot-${slot}`}
        data-ad-format={format}
        data-ad-layout="in-article"
      >
        {/* Placeholder - will be replaced by AdSense in production */}
        <div className="p-4">
          <p className="text-slate-400 text-xs font-medium tracking-wider uppercase mb-1">
            Advertisement
          </p>
          <p className="text-slate-500 text-xs">
            Ad Slot {slot} • {config.label}
          </p>
        </div>
        
        {/* 
          Production AdSense code would go here:
          <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        */}
      </div>
    </div>
  )
}
