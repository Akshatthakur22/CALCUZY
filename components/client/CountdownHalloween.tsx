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

export default function CountdownHalloween() {
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
      let halloween = new Date(currentYear, 9, 31, 0, 0, 0) // October 31
      
      const now = new Date()
      if (halloween < now) {
        halloween = new Date(currentYear + 1, 9, 31, 0, 0, 0)
      }
      
      const difference = halloween.getTime() - now.getTime()

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

  const isHalloweenDay = timeLeft.totalSeconds === 0

  return (
    <Card className="max-w-4xl mx-auto mb-12 fade-in-up">
      <div className="text-center py-12">
        {isHalloweenDay ? (
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
              🎃 Happy Halloween! 🎃
            </h1>
            <p className="text-xl text-primary-text">
              Today is Halloween! Enjoy the spooky fun and treats!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">
              Halloween Countdown
            </h1>
            <p className="text-lg text-secondary-text">
              Time until Halloween, October 31st
            </p>
          </div>
        )}

        {!isHalloweenDay && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
            <div className="staggered-fade-in">
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums bg-gradient-to-br from-orange-600 to-black bg-clip-text text-transparent">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce">🎃</div>
              </div>
              <div className="text-sm sm:text-base text-secondary-text font-medium">
                {timeLeft.days === 1 ? 'Day' : 'Days'}
              </div>
            </div>
            
            <div className="staggered-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums bg-gradient-to-br from-orange-600 to-black bg-clip-text text-transparent">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce" style={{ animationDelay: '200ms' }}>👻</div>
              </div>
              <div className="text-sm sm:text-base text-secondary-text font-medium">
                {timeLeft.hours === 1 ? 'Hour' : 'Hours'}
              </div>
            </div>
            
            <div className="staggered-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums bg-gradient-to-br from-orange-600 to-black bg-clip-text text-transparent">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce" style={{ animationDelay: '400ms' }}>🍬</div>
              </div>
              <div className="text-sm sm:text-base text-secondary-text font-medium">
                {timeLeft.minutes === 1 ? 'Minute' : 'Minutes'}
              </div>
            </div>
            
            <div className="staggered-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="relative">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading-bold text-accent mb-2 tabular-nums bg-gradient-to-br from-orange-600 to-black bg-clip-text text-transparent">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce" style={{ animationDelay: '600ms' }}>🦇</div>
              </div>
              <div className="text-sm sm:text-base text-secondary-text font-medium">
                {timeLeft.seconds === 1 ? 'Second' : 'Seconds'}
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 space-y-6">
          {!isHalloweenDay && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="text-2xl mb-2">🎃</div>
                <h3 className="font-medium text-primary-text mb-1">Costume Planning</h3>
                <p className="text-sm text-secondary-text">
                  Time to plan your perfect costume!
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-2xl mb-2">👻</div>
                <h3 className="font-medium text-primary-text mb-1">Candy Collection</h3>
                <p className="text-sm text-secondary-text">
                  Stock up on treats for trick-or-treaters!
                </p>
              </div>
              
              <div className="p-4 bg-black rounded-lg border border-gray-700">
                <div className="text-2xl mb-2">🍬</div>
                <h3 className="font-medium text-white mb-1">Spooky Decorations</h3>
                <p className="text-sm text-gray-300">
                  Create a haunted house atmosphere!
                </p>
              </div>
            </div>
          )}

          {isHalloweenDay && (
            <div className="p-6 bg-gradient-to-r from-orange-50 to-black rounded-lg border border-orange-200">
              <div className="text-6xl mb-4">🎃👻🍬🦇🎃</div>
              <h3 className="text-2xl font-bold text-primary-text mb-2">
                Halloween Wishes
              </h3>
              <p className="text-lg text-secondary-text">
                Have a spooktacular Halloween filled with fun, treats, and memorable moments!
              </p>
            </div>
          )}

          <div className="p-4 bg-secondary-bg rounded-lg">
            <h4 className="font-medium text-primary-text mb-3">Halloween Fun Facts</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-secondary-text">
              <div>
                <strong>🎃 Origins:</strong> Halloween dates back to the ancient Celtic festival of Samhain.
              </div>
              <div>
                <strong>👻 Candy Spending:</strong> Americans spend over $2.6 billion on Halloween candy each year.
              </div>
              <div>
                <strong>🍬 Pumpkin Carving:</strong> The tradition of carving pumpkins originated from the Irish legend of Stingy Jack.
              </div>
              <div>
                <strong>🦇 Costumes:</strong> The most popular costumes are witches, vampires, and superheroes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
