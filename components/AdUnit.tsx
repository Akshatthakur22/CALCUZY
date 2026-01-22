"use client"

import { useEffect } from "react"

interface AdUnitProps {
  slot: string
  className?: string
}

export default function AdUnit({ slot, className = "" }: AdUnitProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.log("Adsense error:", e)
    }
  }, [])

  return (
    <div className={`w-full flex justify-center my-6 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2612507905879561"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  )
}
