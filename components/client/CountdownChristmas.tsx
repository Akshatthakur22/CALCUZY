'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/Card'
import Skeleton from '@/components/Skeleton'

export default function CountdownChristmas() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const christmas = new Date('December 25, 2026 00:00:00')
      const now = new Date()
      const difference = christmas.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
      setIsLoading(false)
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (isLoading) {
    return (
      <Card className="max-w-4xl mx-auto mb-12">
        <div className="text-center py-12">
          <CountdownSkeleton />
        </div>
      </Card>
    )
  }

  return (
    <Card className="max-w-4xl mx-auto mb-12 fade-in-up">
      <div className="text-center py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
          <div className="staggered-fade-in">
            <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums">
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="text-sm sm:text-base text-secondary-text font-medium">Days</div>
          </div>
          <div className="staggered-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-sm sm:text-base text-secondary-text font-medium">Hours</div>
          </div>
          <div className="staggered-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-sm sm:text-base text-secondary-text font-medium">Minutes</div>
          </div>
          <div className="staggered-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-sm sm:text-base text-secondary-text font-medium">Seconds</div>
          </div>
        </div>
        <div className="text-base sm:text-lg text-primary-text font-medium fade-in">
          Until Christmas Day, December 25, 2026
        </div>
      </div>
    </Card>
  )
}

function CountdownSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="text-center">
          <Skeleton width="w-full" height="h-12 sm:h-16 md:h-20" className="mb-2 mx-auto" />
          <Skeleton width="w-16 sm:w-20" height="h-4" className="mx-auto" />
        </div>
      ))}
    </div>
  )
}
