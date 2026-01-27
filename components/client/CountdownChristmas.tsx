'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/Card'
import Skeleton from '@/components/Skeleton'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  totalSeconds: number
}

export default function CountdownChristmas() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: 0
  })
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const calculateTimeLeft = () => {
      const currentYear = new Date().getFullYear()
      let christmas = new Date(`December 25, ${currentYear} 00:00:00`)
      
      // If Christmas has passed this year, count down to next year's Christmas
      const now = new Date()
      if (christmas < now) {
        christmas = new Date(`December 25, ${currentYear + 1} 00:00:00`)
      }
      
      const difference = christmas.getTime() - now.getTime()

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
        // Christmas is today!
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          totalSeconds: 0
        })
      }
      setIsLoading(false)
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [mounted])

  if (!mounted || isLoading) {
    return (
      <Card className="max-w-4xl mx-auto mb-12">
        <div className="text-center py-12">
          <CountdownSkeleton />
        </div>
      </Card>
    )
  }

  const isChristmasDay = timeLeft.totalSeconds === 0
  const progressPercentage = timeLeft.totalSeconds > 0 
    ? ((365 * 24 * 60 * 60 - timeLeft.totalSeconds) / (365 * 24 * 60 * 60)) * 100
    : 100

  return (
    <Card className="max-w-4xl mx-auto mb-12 fade-in-up">
      <div className="text-center py-12">
        {/* Christmas Message */}
        <div className="mb-8">
          {isChristmasDay ? (
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
                🎄 Merry Christmas! 🎄
              </h1>
              <p className="text-xl text-primary-text">
                Today is Christmas Day! Enjoy the celebrations!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">
                Christmas Countdown
              </h1>
              <p className="text-lg text-secondary-text">
                Time until Christmas Day, December 25th
              </p>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {!isChristmasDay && (
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-500 to-green-500 transition-all duration-1000 ease-linear"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-sm text-secondary-text mt-2">
              {progressPercentage.toFixed(1)}% of the year has passed
            </p>
          </div>
        )}

        {/* Countdown Display */}
        {!isChristmasDay && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
            <div className="staggered-fade-in">
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums bg-gradient-to-br from-red-500 to-green-500 bg-clip-text text-transparent">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce">🎅</div>
              </div>
              <div className="text-sm sm:text-base text-secondary-text font-medium">
                {timeLeft.days === 1 ? 'Day' : 'Days'}
              </div>
            </div>
            
            <div className="staggered-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums bg-gradient-to-br from-red-500 to-green-500 bg-clip-text text-transparent">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce" style={{ animationDelay: '200ms' }}>⭐</div>
              </div>
              <div className="text-sm sm:text-base text-secondary-text font-medium">
                {timeLeft.hours === 1 ? 'Hour' : 'Hours'}
              </div>
            </div>
            
            <div className="staggered-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums bg-gradient-to-br from-red-500 to-green-500 bg-clip-text text-transparent">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce" style={{ animationDelay: '400ms' }}>🎁</div>
              </div>
              <div className="text-sm sm:text-base text-secondary-text font-medium">
                {timeLeft.minutes === 1 ? 'Minute' : 'Minutes'}
              </div>
            </div>
            
            <div className="staggered-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums bg-gradient-to-br from-red-500 to-green-500 bg-clip-text text-transparent">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce" style={{ animationDelay: '600ms' }}>❄️</div>
              </div>
              <div className="text-sm sm:text-base text-secondary-text font-medium">
                {timeLeft.seconds === 1 ? 'Second' : 'Seconds'}
              </div>
            </div>
          </div>
        )}

        {/* Additional Information */}
        <div className="mt-12 space-y-6">
          {!isChristmasDay && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="text-2xl mb-2">🎄</div>
                <h3 className="font-medium text-primary-text mb-1">Christmas Tree</h3>
                <p className="text-sm text-secondary-text">
                  Time to decorate your Christmas tree!
                </p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl mb-2">🎁</div>
                <h3 className="font-medium text-primary-text mb-1">Gift Shopping</h3>
                <p className="text-sm text-secondary-text">
                  Don&apos;t forget to buy gifts for your loved ones!
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl mb-2">❄️</div>
                <h3 className="font-medium text-primary-text mb-1">Winter Magic</h3>
                <p className="text-sm text-secondary-text">
                  Enjoy the winter wonderland atmosphere!
                </p>
              </div>
            </div>
          )}

          {isChristmasDay && (
            <div className="p-6 bg-gradient-to-r from-red-50 to-green-50 rounded-lg border border-red-200">
              <div className="text-6xl mb-4">🎄🎅🎁❄️⭐</div>
              <h3 className="text-2xl font-bold text-primary-text mb-2">
                Christmas Wishes
              </h3>
              <p className="text-lg text-secondary-text">
                May your Christmas be filled with joy, love, and happiness! 
                Share this special day with family and friends.
              </p>
            </div>
          )}

          {/* Fun Facts */}
          <div className="p-4 bg-secondary-bg rounded-lg">
            <h4 className="font-medium text-primary-text mb-3">Christmas Fun Facts</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-secondary-text">
              <div>
                <strong>🎅 Santa&apos;s Speed:</strong> Would need to visit 822 homes per second 
                to deliver all presents on Christmas Eve!
              </div>
              <div>
                <strong>🎄 Christmas Trees:</strong> The first decorated Christmas tree 
                was in Riga, Latvia in 1510.
              </div>
              <div>
                <strong>🎁 Gift Giving:</strong> The tradition of Christmas gifts 
                symbolizes the gifts brought to baby Jesus.
              </div>
              <div>
                <strong>❄️ White Christmas:</strong> There&apos;s a 1 in 4 chance of a 
                white Christmas in the northern hemisphere.
              </div>
            </div>
          </div>
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
