'use client'

import { useState } from 'react'
import Card from '@/components/Card'
import Skeleton from '@/components/Skeleton'

export default function AgeCalculatorClient() {
  const [birthDate, setBirthDate] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const calculateAge = async () => {
    if (!birthDate || !currentDate) {
      setResult('Please select both birth date and current date')
      return
    }

    try {
      const birth = new Date(birthDate)
      const current = new Date(currentDate)

      if (birth > current) {
        setResult('Birth date cannot be in future')
        return
      }

      setIsLoading(true)
      
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

      const ageText = `You are ${years} years, ${months} months, and ${days} days old`
      setResult(ageText)
    } catch (error) {
      console.error('Age calculation failed:', error)
      setResult('Error calculating age. Please check your dates.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      calculateAge()
    }
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <Card className="max-w-2xl mx-auto mb-12 fade-in-up">
      <div className="space-y-6">
        <div>
          <label 
            htmlFor="birth-date" 
            className="block text-primary-text font-medium mb-2"
          >
            Date of Birth
          </label>
          <input
            id="birth-date"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            onKeyPress={handleKeyPress}
            className="input-field"
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
          </label>
          <input
            id="current-date"
            type="date"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
            onKeyPress={handleKeyPress}
            className="input-field"
            max={today}
            aria-required="true"
            aria-describedby="current-date-help"
          />
          <p id="current-date-help" className="text-xs text-gray-500 mt-1">
            Select the current date or leave as today
          </p>
        </div>

        <button
          onClick={calculateAge}
          disabled={isLoading}
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

        {result && !isLoading && (
          <div 
            className="p-4 bg-secondary-bg rounded-lg text-center fade-in"
            role="alert"
            aria-live="polite"
          >
            <div className="text-lg font-medium text-primary-text">
              {result}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
