'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/Card'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  totalSeconds: number
}

export default function CountdownThanksgiving() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: 0
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const calculateTimeLeft = () => {
      const currentYear = new Date().getFullYear()
      // Thanksgiving is the fourth Thursday of November
      let thanksgiving = new Date(currentYear, 10, 1) // November 1
      thanksgiving.setDate(1) // Start from November 1
      
      // Find first Thursday
      while (thanksgiving.getDay() !== 4) {
        thanksgiving.setDate(thanksgiving.getDate() + 1)
      }
      
      // Move to fourth Thursday
      thanksgiving.setDate(thanksgiving.getDate() + 21)
      
      // If Thanksgiving has passed this year, count to next year's
      const now = new Date()
      if (thanksgiving < now) {
        thanksgiving = new Date(currentYear + 1, 10, 1)
        thanksgiving.setDate(1)
        while (thanksgiving.getDay() !== 4) {
          thanksgiving.setDate(thanksgiving.getDate() + 1)
        }
        thanksgiving.setDate(thanksgiving.getDate() + 21)
      }
      
      const difference = thanksgiving.getTime() - now.getTime()

      if (difference > 0) {
        const totalSeconds = Math.floor(difference / 1000)
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          totalSeconds
        })
      } else {
        // Thanksgiving is today!
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          totalSeconds: 0
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [mounted])

  const isThanksgivingDay = timeLeft.totalSeconds === 0

  return (
    <Card className="max-w-4xl mx-auto mb-12 fade-in-up">
      <div className="text-center py-12">
        {/* Thanksgiving Message */}
        <div className="mb-8">
          {isThanksgivingDay ? (
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
                🦃 Happy Thanksgiving! 🦃
              </h1>
              <p className="text-xl text-primary-text">
                Today is Thanksgiving Day! Enjoy the feast and gratitude!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">
                Thanksgiving Countdown
              </h1>
              <p className="text-lg text-secondary-text">
                Time until Thanksgiving Day, fourth Thursday of November
              </p>
            </div>
          )}
        </div>

        {/* Countdown Display */}
        {!isThanksgivingDay && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
            <div className="staggered-fade-in">
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums bg-gradient-to-br from-orange-500 to-red-500 bg-clip-text text-transparent">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce">🍂</div>
              </div>
              <div className="text-sm sm:text-base text-secondary-text font-medium">
                {timeLeft.days === 1 ? 'Day' : 'Days'}
              </div>
            </div>
            
            <div className="staggered-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums bg-gradient-to-br from-orange-500 to-red-500 bg-clip-text text-transparent">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce" style={{ animationDelay: '200ms' }}>🥧</div>
              </div>
              <div className="text-sm sm:text-base text-secondary-text font-medium">
                {timeLeft.hours === 1 ? 'Hour' : 'Hours'}
              </div>
            </div>
            
            <div className="staggered-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums bg-gradient-to-br from-orange-500 to-red-500 bg-clip-text text-transparent">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce" style={{ animationDelay: '400ms' }}>🍗</div>
              </div>
              <div className="text-sm sm:text-base text-secondary-text font-medium">
                {timeLeft.minutes === 1 ? 'Minute' : 'Minutes'}
              </div>
            </div>
            
            <div className="staggered-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums bg-gradient-to-br from-orange-500 to-red-500 bg-clip-text text-transparent">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce" style={{ animationDelay: '600ms' }}>🦃</div>
              </div>
              <div className="text-sm sm:text-base text-secondary-text font-medium">
                {timeLeft.seconds === 1 ? 'Second' : 'Seconds'}
              </div>
            </div>
          </div>
        )}

        {/* Additional Information */}
        <div className="mt-12 space-y-6">
          {!isThanksgivingDay && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="text-2xl mb-2">🍂</div>
                <h3 className="font-medium text-primary-text mb-1">Autumn Harvest</h3>
                <p className="text-sm text-secondary-text">
                  Time to prepare for the harvest feast!
                </p>
              </div>
              
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="text-2xl mb-2">🥧</div>
                <h3 className="font-medium text-primary-text mb-1">Baking Season</h3>
                <p className="text-sm text-secondary-text">
                  Get ready for pumpkin pies and treats!
                </p>
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="text-2xl mb-2">🍗</div>
                <h3 className="font-medium text-primary-text mb-1">Feast Planning</h3>
                <p className="text-sm text-secondary-text">
                  Plan your perfect Thanksgiving meal!
                </p>
              </div>
            </div>
          )}

          {isThanksgivingDay && (
            <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
              <div className="text-6xl mb-4">🦃🍂🥧🍗🦃</div>
              <h3 className="text-2xl font-bold text-primary-text mb-2">
                Thanksgiving Blessings
              </h3>
              <p className="text-lg text-secondary-text">
                May your Thanksgiving be filled with gratitude, delicious food, and wonderful company. 
                Count your blessings and cherish the moments with loved ones!
              </p>
            </div>
          )}

          {/* Thanksgiving Facts */}
          <div className="p-4 bg-secondary-bg rounded-lg">
            <h4 className="font-medium text-primary-text mb-3">Thanksgiving Fun Facts</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-secondary-text">
              <div>
                <strong>🦃 First Thanksgiving:</strong> Celebrated in 1621 by Pilgrims and Wampanoag people, lasting three days.
              </div>
              <div>
                <strong>🍗 Turkey Tradition:</strong> About 46 million turkeys are eaten on Thanksgiving in the US each year.
              </div>
              <div>
                <strong>🏈 Football:</strong> The first NFL Thanksgiving game was in 1934 between the Detroit Lions and Chicago Bears.
              </div>
              <div>
                <strong>🥧 Pumpkin Pie:</strong> Americans consume over 50 million pumpkin pies during Thanksgiving season.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
