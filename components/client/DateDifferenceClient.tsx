'use client'

import { useState } from 'react'
import Card from '@/components/Card'

export default function DateDifferenceClient() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [result, setResult] = useState('')

  const calculateDateDifference = () => {
    if (!startDate || !endDate) {
      setResult('Please select both dates')
      return
    }

    const start = new Date(startDate)
    const end = new Date(endDate)

    if (start > end) {
      setResult('Start date cannot be after end date')
      return
    }

    const difference = end.getTime() - start.getTime()
    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    
    const years = Math.floor(days / 365)
    const remainingDays = days % 365
    const months = Math.floor(remainingDays / 30)
    const finalDays = remainingDays % 30

    let resultText = `Difference: ${days} days`
    
    if (years > 0) {
      resultText = `Difference: ${years} year${years > 1 ? 's' : ''}`
      if (months > 0) {
        resultText += `, ${months} month${months > 1 ? 's' : ''}`
      }
      if (finalDays > 0) {
        resultText += `, ${finalDays} day${finalDays > 1 ? 's' : ''}`
      }
    } else if (months > 0) {
      resultText = `Difference: ${months} month${months > 1 ? 's' : ''}`
      if (finalDays > 0) {
        resultText += `, ${finalDays} day${finalDays > 1 ? 's' : ''}`
      }
    }

    setResult(resultText)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <Card className="max-w-2xl mx-auto mb-12">
      <div className="space-y-6">
        <div>
          <label className="block text-primary-text font-medium mb-2">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            max={today}
          />
        </div>

        <div>
          <label className="block text-primary-text font-medium mb-2">
            End Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            max={today}
          />
        </div>

        <button
          onClick={calculateDateDifference}
          className="w-full btn-primary"
        >
          Calculate Difference
        </button>

        {result && (
          <div className="p-4 bg-secondary-bg rounded-lg text-center">
            <div className="text-lg font-medium text-primary-text">
              {result}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
