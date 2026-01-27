'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/Card'

interface DateResult {
  totalDays: number
  years: number
  months: number
  days: number
  weeks: number
  hours: number
  minutes: number
  seconds: number
  percentageOfYear: number
}

export default function DateDifferenceClient() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [result, setResult] = useState<DateResult | null>(null)
  const [error, setError] = useState('')
  const [includeTime, setIncludeTime] = useState(false)
  const [startTime, setStartTime] = useState('00:00')
  const [endTime, setEndTime] = useState('00:00')

  const today = new Date().toISOString().split('T')[0]

  useEffect(() => {
    // Set end date to today by default
    setEndDate(today)
  }, [today])

  const calculateDateDifference = () => {
    setError('')
    setResult(null)

    if (!startDate || !endDate) {
      setError('Please select both dates')
      return
    }

    let start = new Date(startDate)
    let end = new Date(endDate)

    if (includeTime) {
      const [startHour, startMin] = startTime.split(':').map(Number)
      const [endHour, endMin] = endTime.split(':').map(Number)
      
      start.setHours(startHour, startMin, 0, 0)
      end.setHours(endHour, endMin, 0, 0)
    } else {
      // Set times to start and end of day for full day calculation
      start.setHours(0, 0, 0, 0)
      end.setHours(23, 59, 59, 999)
    }

    if (start > end) {
      setError('Start date cannot be after end date')
      return
    }

    const difference = end.getTime() - start.getTime()
    const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24))
    
    // Calculate years, months, days
    let years = end.getFullYear() - start.getFullYear()
    let months = end.getMonth() - start.getMonth()
    let days = end.getDate() - start.getDate()

    if (days < 0) {
      months--
      const lastMonth = new Date(end.getFullYear(), end.getMonth(), 0)
      days += lastMonth.getDate()
    }

    if (months < 0) {
      years--
      months += 12
    }

    // Calculate other units
    const weeks = Math.floor(totalDays / 7)
    const hours = Math.floor(difference / (1000 * 60 * 60))
    const minutes = Math.floor(difference / (1000 * 60))
    const seconds = Math.floor(difference / 1000)

    // Calculate percentage of year
    const startOfYear = new Date(start.getFullYear(), 0, 1)
    const endOfYear = new Date(start.getFullYear() + 1, 0, 1)
    const yearLength = endOfYear.getTime() - startOfYear.getTime()
    const percentageOfYear = ((difference / yearLength) * 100)

    setResult({
      totalDays,
      years,
      months,
      days,
      weeks,
      hours,
      minutes,
      seconds,
      percentageOfYear
    })
  }

  const swapDates = () => {
    setStartDate(endDate)
    setEndDate(startDate)
    setStartTime(endTime)
    setEndTime(startTime)
  }

  const setPresetRange = (range: string) => {
    const end = new Date()
    let start = new Date()

    switch (range) {
      case 'today':
        start = new Date()
        break
      case 'week':
        start.setDate(end.getDate() - 7)
        break
      case 'month':
        start.setMonth(end.getMonth() - 1)
        break
      case 'quarter':
        start.setMonth(end.getMonth() - 3)
        break
      case 'year':
        start.setFullYear(end.getFullYear() - 1)
        break
      case 'ytd':
        start = new Date(end.getFullYear(), 0, 1)
        break
    }

    setStartDate(start.toISOString().split('T')[0])
    setEndDate(end.toISOString().split('T')[0])
  }

  useEffect(() => {
    if (startDate && endDate) {
      calculateDateDifference()
    }
  }, [startDate, endDate, startTime, endTime, includeTime])

  return (
    <Card className="max-w-4xl mx-auto mb-12">
      <div className="space-y-6">
        {/* Preset Ranges */}
        <div>
          <label className="block text-primary-text font-medium mb-3">
            Quick Presets
          </label>
          <div className="flex flex-wrap gap-2">
            {['today', 'week', 'month', 'quarter', 'year', 'ytd'].map((preset) => (
              <button
                key={preset}
                onClick={() => setPresetRange(preset)}
                className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-card-hover transition-colors capitalize"
              >
                {preset === 'ytd' ? 'Year to Date' : preset}
              </button>
            ))}
          </div>
        </div>

        {/* Date Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-primary-text font-medium mb-2">
              Start Date
              <span className="text-secondary-text font-normal ml-2">e.g., Jan 1, 2024</span>
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              max={today}
            />
          </div>

          <div>
            <label className="block text-primary-text font-medium mb-2">
              End Date
              <span className="text-secondary-text font-normal ml-2">e.g., {today}</span>
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              max={today}
            />
          </div>
        </div>

        {/* Time Toggle and Inputs */}
        <div>
          <label className="flex items-center cursor-pointer mb-4">
            <input
              type="checkbox"
              checked={includeTime}
              onChange={(e) => setIncludeTime(e.target.checked)}
              className="mr-2 w-4 h-4 text-accent border-border rounded focus:ring-accent"
            />
            <span className="text-sm text-primary-text">Include time for precise calculation</span>
          </label>

          {includeTime && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-primary-text font-medium mb-2">
                  Start Time
                </label>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>

              <div>
                <label className="block text-primary-text font-medium mb-2">
                  End Time
                </label>
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={calculateDateDifference}
            className="flex-1 btn-primary"
          >
            Calculate Difference
          </button>
          <button
            onClick={swapDates}
            className="px-6 py-3 border border-border rounded-lg hover:bg-card-hover transition-colors"
            title="Swap dates"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
        </div>

        {/* Error Message */}
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

        {/* Results */}
        {result && (
          <div className="space-y-6">
            {/* Main Result */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-medium text-primary-text mb-4">Date Difference</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">
                  {result.totalDays} days
                </div>
                <div className="text-lg text-primary-text">
                  {result.years > 0 && `${result.years} year${result.years > 1 ? 's' : ''}`}
                  {result.years > 0 && result.months > 0 && ', '}
                  {result.months > 0 && `${result.months} month${result.months > 1 ? 's' : ''}`}
                  {(result.years > 0 || result.months > 0) && result.days > 0 && ', '}
                  {result.days > 0 && `${result.days} day${result.days > 1 ? 's' : ''}`}
                  {result.years === 0 && result.months === 0 && result.days === 0 && 'Same day'}
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-secondary-bg rounded-lg text-center">
                <div className="text-2xl font-bold text-primary-text">{result.weeks}</div>
                <div className="text-sm text-secondary-text">Weeks</div>
              </div>
              <div className="p-4 bg-secondary-bg rounded-lg text-center">
                <div className="text-2xl font-bold text-primary-text">{result.hours.toLocaleString()}</div>
                <div className="text-sm text-secondary-text">Hours</div>
              </div>
              <div className="p-4 bg-secondary-bg rounded-lg text-center">
                <div className="text-2xl font-bold text-primary-text">{result.minutes.toLocaleString()}</div>
                <div className="text-sm text-secondary-text">Minutes</div>
              </div>
              <div className="p-4 bg-secondary-bg rounded-lg text-center">
                <div className="text-2xl font-bold text-primary-text">{result.seconds.toLocaleString()}</div>
                <div className="text-sm text-secondary-text">Seconds</div>
              </div>
            </div>

            {/* Additional Insights */}
            <div className="p-4 bg-secondary-bg rounded-lg">
              <h4 className="font-medium text-primary-text mb-3">Additional Insights</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-secondary-text">Percentage of year:</span>
                  <span className="font-medium text-primary-text">{result.percentageOfYear.toFixed(2)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-text">Working days (approx):</span>
                  <span className="font-medium text-primary-text">{Math.floor(result.totalDays * 5/7)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-text">Weekend days (approx):</span>
                  <span className="font-medium text-primary-text">{Math.floor(result.totalDays * 2/7)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
