interface AdUnitProps {
  slot: number
  className?: string
}

export default function AdUnit({ slot, className = '' }: AdUnitProps) {
  return (
    <div className={`w-full flex justify-center my-8 ${className}`}>
      <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center max-w-sm w-full">
        <p className="text-gray-500 text-sm font-medium">
          AD SLOT {slot}
        </p>
        <p className="text-gray-400 text-xs mt-2">
          AdSense Advertisement
        </p>
      </div>
    </div>
  )
}
