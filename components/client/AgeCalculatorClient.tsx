'use client'

import { useState, useEffect, useCallback } from 'react'
import Card from '@/components/Card'
import Skeleton from '@/components/Skeleton'

interface AgeResult {
  years: number
  months: number
  days: number
  totalDays: number
  totalWeeks: number
  totalHours: number
  totalMinutes: number
  totalSeconds: number
  nextBirthday: Date
  daysUntilNextBirthday: number
  zodiacSign: string
  chineseZodiac: string
  birthDayOfWeek: string
  isLeapYear: boolean
}

export default function AgeCalculatorClient() {
  const [birthDate, setBirthDate] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [result, setResult] = useState<AgeResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const getZodiacSign = (date: Date): string => {
    const month = date.getMonth() + 1
    const day = date.getDate()
    
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries ♈'
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus ♉'
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini ♊'
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer ♋'
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo ♌'
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo ♍'
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra ♎'
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio ♏'
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius ♐'
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn ♑'
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius ♒'
    return 'Pisces ♓'
  }

  const getChineseZodiac = (year: number): string => {
    const zodiacs = ['Rat 🐀', 'Ox 🐂', 'Tiger 🐅', 'Rabbit 🐇', 'Dragon 🐲', 'Snake 🐍', 
                    'Horse 🐴', 'Goat 🐑', 'Monkey 🐵', 'Rooster 🐓', 'Dog 🐕', 'Pig 🐖']
    return zodiacs[(year - 4) % 12]
  }

  const getDayOfWeek = (date: Date): string => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[date.getDay()]
  }

  const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
  }

  const calculateAge = useCallback(async () => {
    if (!birthDate || !currentDate) {
      setError('Please select both birth date and current date')
      return
    }

    try {
      const birth = new Date(birthDate)
      const current = new Date(currentDate)

      if (birth > current) {
        setError('Birth date cannot be in future')
        return
      }

      setIsLoading(true)
      setError('')
      
      // Simulate processing for better UX
      await new Promise(resolve => setTimeout(resolve, 500))

      let years = current.getFullYear() - birth.getFullYear()
      let months = current.getMonth() - birth.getMonth()
      let days = current.getDate() - birth.getDate()

      if (days < 0) {
        months--
        const lastMonth = new Date(current.getFullYear(), current.getMonth(), 0)
        days += lastMonth.getDate()
      }

      if (months < 0) {
        years--
        months += 12
      }

      // Calculate total time units
      const difference = current.getTime() - birth.getTime()
      const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24))
      const totalWeeks = Math.floor(totalDays / 7)
      const totalHours = Math.floor(difference / (1000 * 60 * 60))
      const totalMinutes = Math.floor(difference / (1000 * 60))
      const totalSeconds = Math.floor(difference / 1000)

      // Calculate next birthday
      let nextBirthday = new Date(current.getFullYear(), birth.getMonth(), birth.getDate())
      if (nextBirthday < current) {
        nextBirthday = new Date(current.getFullYear() + 1, birth.getMonth(), birth.getDate())
      }
      const daysUntilNextBirthday = Math.ceil((nextBirthday.getTime() - current.getTime()) / (1000 * 60 * 60 * 24))

      setResult({
        years,
        months,
        days,
        totalDays,
        totalWeeks,
        totalHours,
        totalMinutes,
        totalSeconds,
        nextBirthday,
        daysUntilNextBirthday,
        zodiacSign: getZodiacSign(birth),
        chineseZodiac: getChineseZodiac(birth.getFullYear()),
        birthDayOfWeek: getDayOfWeek(birth),
        isLeapYear: isLeapYear(birth.getFullYear())
      })
    } catch (error) {
      console.error('Age calculation failed:', error)
      setError('Error calculating age. Please check your dates.')
    } finally {
      setIsLoading(false)
    }
  }, [birthDate, currentDate])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      calculateAge()
    }
  }

  const today = new Date().toISOString().split('T')[0]

  useEffect(() => {
    // Set current date to today by default
    setCurrentDate(today)
  }, [today])

  useEffect(() => {
    // Auto-calculate when both dates are selected
    if (birthDate && currentDate) {
      calculateAge()
    }
  }, [birthDate, currentDate, calculateAge])

  return (
    <Card className="max-w-4xl mx-auto mb-12 fade-in-up">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label 
              htmlFor="birth-date" 
              className="block text-primary-text font-medium mb-2"
            >
              Date of Birth
              <span className="text-secondary-text font-normal ml-2">e.g., Jan 1, 1990</span>
            </label>
            <input
              id="birth-date"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              max={today}
              aria-required="true"
              aria-describedby="birth-date-help"
            />
            <p id="birth-date-help" className="text-xs text-gray-500 mt-1">
              Select your birth date from the calendar
            </p>
          </div>

          <div>
            <label 
              htmlFor="current-date" 
              className="block text-primary-text font-medium mb-2"
            >
              Current Date
              <span className="text-secondary-text font-normal ml-2">defaults to today</span>
            </label>
            <input
              id="current-date"
              type="date"
              value={currentDate}
              onChange={(e) => setCurrentDate(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              max={today}
              aria-required="true"
              aria-describedby="current-date-help"
            />
            <p id="current-date-help" className="text-xs text-gray-500 mt-1">
              Select the current date or leave as today
            </p>
          </div>
        </div>

        <button
          onClick={calculateAge}
          disabled={isLoading || !birthDate || !currentDate}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Calculate your age"
        >
          {isLoading ? 'Calculating...' : 'Calculate Age'}
        </button>

        {isLoading && (
          <div className="p-4 bg-secondary-bg rounded-lg">
            <Skeleton width="w-3/4" height="h-6" className="mx-auto" />
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          </div>
        )}

        {result && !isLoading && (
          <div className="space-y-6">
            {/* Main Age Display */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-medium text-primary-text mb-4 text-center">Your Age</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">
                  {result.years} years, {result.months} months, {result.days} days
                </div>
                <div className="text-lg text-primary-text">
                  Total: {result.totalDays.toLocaleString()} days old
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-secondary-bg rounded-lg text-center">
                <div className="text-2xl font-bold text-primary-text">{result.totalWeeks.toLocaleString()}</div>
                <div className="text-sm text-secondary-text">Weeks</div>
              </div>
              <div className="p-4 bg-secondary-bg rounded-lg text-center">
                <div className="text-2xl font-bold text-primary-text">{result.totalHours.toLocaleString()}</div>
                <div className="text-sm text-secondary-text">Hours</div>
              </div>
              <div className="p-4 bg-secondary-bg rounded-lg text-center">
                <div className="text-2xl font-bold text-primary-text">{result.totalMinutes.toLocaleString()}</div>
                <div className="text-sm text-secondary-text">Minutes</div>
              </div>
              <div className="p-4 bg-secondary-bg rounded-lg text-center">
                <div className="text-2xl font-bold text-primary-text">{result.totalSeconds.toLocaleString()}</div>
                <div className="text-sm text-secondary-text">Seconds</div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-secondary-bg rounded-lg">
                <h4 className="font-medium text-primary-text mb-3">Birth Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-secondary-text">Born on:</span>
                    <span className="font-medium text-primary-text">{result.birthDayOfWeek}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-text">Leap Year:</span>
                    <span className="font-medium text-primary-text">{result.isLeapYear ? 'Yes ✅' : 'No'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-text">Zodiac Sign:</span>
                    <span className="font-medium text-primary-text">{result.zodiacSign}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-text">Chinese Zodiac:</span>
                    <span className="font-medium text-primary-text">{result.chineseZodiac}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-secondary-bg rounded-lg">
                <h4 className="font-medium text-primary-text mb-3">Next Birthday</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-secondary-text">Date:</span>
                    <span className="font-medium text-primary-text">
                      {result.nextBirthday.toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-text">Days until:</span>
                    <span className="font-medium text-primary-text">
                      {result.daysUntilNextBirthday} days
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-text">Day of week:</span>
                    <span className="font-medium text-primary-text">
                      {getDayOfWeek(result.nextBirthday)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Milestones */}
            <div className="p-4 bg-secondary-bg rounded-lg">
              <h4 className="font-medium text-primary-text mb-3">Life Milestones</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-3 bg-primary-bg rounded-lg">
                  <div className="text-lg font-bold text-primary-text mb-1">
                    {result.totalDays >= 10000 ? '✅' : `${10000 - result.totalDays} days`}
                  </div>
                  <div className="text-secondary-text">10,000 days old</div>
                </div>
                <div className="text-center p-3 bg-primary-bg rounded-lg">
                  <div className="text-lg font-bold text-primary-text mb-1">
                    {result.totalSeconds >= 1000000000 ? '✅' : `${Math.floor((1000000000 - result.totalSeconds) / 86400)} days`}
                  </div>
                  <div className="text-secondary-text">1 billion seconds</div>
                </div>
                <div className="text-center p-3 bg-primary-bg rounded-lg">
                  <div className="text-lg font-bold text-primary-text mb-1">
                    {result.totalDays >= 36500 ? '✅' : `${36500 - result.totalDays} days`}
                  </div>
                  <div className="text-secondary-text">100 years old</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
