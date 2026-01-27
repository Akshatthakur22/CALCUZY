interface AdUnitProps {
  slot: number
  className?: string
}

export default function AdUnit({ slot, className = '' }: AdUnitProps) {
  return (
    <div className={`w-full flex justify-center my-6 ${className}`}>
      <div className="bg-secondary-bg border-2 border-dashed border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 text-center w-full flex flex-col items-center justify-center transition-all duration-200"
           style={{
             minHeight: '200px',
             maxWidth: '100%'
           }}>
        {/* Responsive ad size container */}
        <div className="w-full flex items-center justify-center"
             style={{
               minHeight: '50px',
               maxHeight: '250px'
             }}>
          <div className="text-center">
            <p className="text-gray-500 text-sm font-medium mb-2">
              AD SLOT {slot}
            </p>
            <p className="text-gray-400 text-xs">
              AdSense Advertisement
            </p>
            {/* Ad size indicators for development */}
            <div className="mt-2 text-xs text-gray-400 hidden sm:block">
              <span className="sm:hidden">Mobile</span>
              <span className="hidden sm:inline md:hidden">Tablet</span>
              <span className="hidden md:inline lg:hidden">Desktop</span>
              <span className="hidden lg:inline">Large Desktop</span>
            </div>
          </div>
        </div>
        
        {/* Future AdSense implementation */}
        {/* 
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-2612507905879561"
             data-ad-slot={`${slot}`}
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script dangerouslySetInnerHTML={{
          __html: '(adsbygoogle = window.adsbygoogle || []).push({});'
        }} />
        */}
      </div>
    </div>
  )
}
