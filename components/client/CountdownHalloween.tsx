'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/Card'

export default function CountdownHalloween() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const halloween = new Date('October 31, 2026 00:00:00')
      const now = new Date()
      const difference = halloween.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="max-w-4xl mx-auto mb-12">
      <div className="text-center py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-5xl md:text-6xl font-heading-bold text-accent mb-2">
              {timeLeft.days}
            </div>
            <div className="text-secondary-text font-medium">Days</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-heading-bold text-accent mb-2">
              {timeLeft.hours}
            </div>
            <div className="text-secondary-text font-medium">Hours</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-heading-bold text-accent mb-2">
              {timeLeft.minutes}
            </div>
            <div className="text-secondary-text font-medium">Minutes</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-heading-bold text-accent mb-2">
              {timeLeft.seconds}
            </div>
            <div className="text-secondary-text font-medium">Seconds</div>
          </div>
        </div>
        <div className="text-lg text-primary-text font-medium">
          Until Halloween, October 31, 2026
        </div>
      </div>
    </Card>
  )
}
