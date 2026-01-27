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

export default function CountdownNewYear() {
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
      let newYear = new Date(currentYear + 1, 0, 1, 0, 0, 0)
      
      const now = new Date()
      const difference = newYear.getTime() - now.getTime()

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
        // New Year's Day is today!
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

  const isNewYearsDay = timeLeft.totalSeconds === 0

  return (
    <Card className="max-w-4xl mx-auto mb-12 fade-in-up">
      <div className="text-center py-12">
        {/* New Year Message */}
        <div className="mb-8">
          {isNewYearsDay ? (
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                🎊 Happy New Year! 🎊
              </h1>
              <p className="text-xl text-primary-text">
                Welcome to {new Date().getFullYear()}! Make it your best year yet!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">
                New Year Countdown
              </h1>
              <p className="text-lg text-secondary-text">
                Time until New Year&apos;s Day, January 1st
              </p>
            </div>
          )}
        </div>

        {/* Countdown Display */}
        {!isNewYearsDay && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
            <div className="staggered-fade-in">
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce">🎆</div>
              </div>
              <div className="text-sm sm:text-base text-secondary-text font-medium">
                {timeLeft.days === 1 ? 'Day' : 'Days'}
              </div>
            </div>
            
            <div className="staggered-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce" style={{ animationDelay: '200ms' }}>🎇</div>
              </div>
              <div className="text-sm sm:text-base text-secondary-text font-medium">
                {timeLeft.hours === 1 ? 'Hour' : 'Hours'}
              </div>
            </div>
            
            <div className="staggered-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce" style={{ animationDelay: '400ms' }}>🎉</div>
              </div>
              <div className="text-sm sm:text-base text-secondary-text font-medium">
                {timeLeft.minutes === 1 ? 'Minute' : 'Minutes'}
              </div>
            </div>
            
            <div className="staggered-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce" style={{ animationDelay: '600ms' }}>🎊</div>
              </div>
              <div className="text-sm sm:text-base text-secondary-text font-medium">
                {timeLeft.seconds === 1 ? 'Second' : 'Seconds'}
              </div>
            </div>
          </div>
        )}

        {/* Additional Information */}
        <div className="mt-12 space-y-6">
          {!isNewYearsDay && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl mb-2">🎆</div>
                <h3 className="font-medium text-primary-text mb-1">New Beginnings</h3>
                <p className="text-sm text-secondary-text">
                  Time for fresh starts and new goals!
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-2xl mb-2">🎇</div>
                <h3 className="font-medium text-primary-text mb-1">Celebrations</h3>
                <p className="text-sm text-secondary-text">
                  Plan your New Year&apos;s Eve party!
                </p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl mb-2">🎉</div>
                <h3 className="font-medium text-primary-text mb-1">Resolutions</h3>
                <p className="text-sm text-secondary-text">
                  Set your goals for the coming year!
                </p>
              </div>
            </div>
          )}

          {isNewYearsDay && (
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <div className="text-6xl mb-4">🎊🎆🎇🎉🎊</div>
              <h3 className="text-2xl font-bold text-primary-text mb-2">
                New Year Wishes
              </h3>
              <p className="text-lg text-secondary-text">
                May {new Date().getFullYear()} bring you joy, success, and endless opportunities. 
                Dream big, work hard, and make every moment count!
              </p>
            </div>
          )}

          {/* New Year Facts */}
          <div className="p-4 bg-secondary-bg rounded-lg">
            <h4 className="font-medium text-primary-text mb-3">New Year Fun Facts</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-secondary-text">
              <div>
                <strong>🎊 Times Square:</strong> About 1 million people gather in Times Square, NYC, to watch the ball drop.
              </div>
              <div>
                <strong>🎆 First Celebration:</strong> The earliest recorded New Year celebrations date back 4,000 years to ancient Babylon.
              </div>
              <div>
                <strong>🎇 Most Common Resolution:</strong> Exercise/fitness goals are the most popular New Year&apos;s resolutions.
              </div>
              <div>
                <strong>🎉 Global Traditions:</strong> Different countries celebrate at different times based on their calendars.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
