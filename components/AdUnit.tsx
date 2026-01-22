interface AdUnitProps {
  slot: number
  className?: string
}

export default function AdUnit({ slot, className = '' }: AdUnitProps) {
  return (
    <div className={`w-full flex justify-center my-6 ${className}`}>
      <div className="bg-secondary-bg border-2 border-dashed border-gray-200 rounded-xl p-8 text-center max-w-sm w-full min-h-[200px] flex flex-col items-center justify-center">
        <p className="text-gray-500 text-sm font-medium mb-2">
          AD SLOT {slot}
        </p>
        <p className="text-gray-400 text-xs">
          AdSense Advertisement
        </p>
      </div>
    </div>
  )
}
