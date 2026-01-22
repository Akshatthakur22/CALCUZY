'use client'

import { useState } from 'react'

export default function OvulationCalculatorClient() {
  const [cycleLength, setCycleLength] = useState('')
  const [lastPeriodDate, setLastPeriodDate] = useState('')
  const [results, setResults] = useState<{
    fertileWindowStart: string
    fertileWindowEnd: string
    ovulationDay: string
    nextPeriodDate: string
    safeDaysStart: string
    safeDaysEnd: string
  } | null>(null)

  const calculateOvulation = () => {
    if (!cycleLength || !lastPeriodDate) return

    const cycle = parseInt(cycleLength)
    const lastPeriod = new Date(lastPeriodDate)
    
    // Ovulation typically occurs 14 days before next period
    const ovulationDay = new Date(lastPeriod)
    ovulationDay.setDate(lastPeriod.getDate() + cycle - 14)
    
    // Fertile window is 5 days before ovulation to 1 day after
    const fertileWindowStart = new Date(ovulationDay)
    fertileWindowStart.setDate(ovulationDay.getDate() - 5)
    
    const fertileWindowEnd = new Date(ovulationDay)
    fertileWindowEnd.setDate(ovulationDay.getDate() + 1)
    
    // Next period date
    const nextPeriodDate = new Date(lastPeriod)
    nextPeriodDate.setDate(lastPeriod.getDate() + cycle)
    
    // Safe days (before fertile window)
    const safeDaysEnd = new Date(fertileWindowStart)
    safeDaysEnd.setDate(fertileWindowStart.getDate() - 1)

    setResults({
      fertileWindowStart: fertileWindowStart.toLocaleDateString(),
      fertileWindowEnd: fertileWindowEnd.toLocaleDateString(),
      ovulationDay: ovulationDay.toLocaleDateString(),
      nextPeriodDate: nextPeriodDate.toLocaleDateString(),
      safeDaysStart: lastPeriod.toLocaleDateString(),
      safeDaysEnd: safeDaysEnd.toLocaleDateString()
    })
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Ovulation Calculator</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Average Cycle Length (days)
          </label>
          <input
            type="number"
            value={cycleLength}
            onChange={(e) => setCycleLength(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="28"
            min="20"
            max="45"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Day of Last Period
          </label>
          <input
            type="date"
            value={lastPeriodDate}
            onChange={(e) => setLastPeriodDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          onClick={calculateOvulation}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Calculate Ovulation
        </button>
      </div>

      {results && (
        <div className="mt-8 p-6 bg-pink-50 rounded-lg border border-pink-200">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Your Results</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-pink-100">
              <span className="font-medium text-gray-700">Fertile Window:</span>
              <span className="text-pink-600 font-semibold">
                {results.fertileWindowStart} - {results.fertileWindowEnd}
              </span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-pink-100">
              <span className="font-medium text-gray-700">Ovulation Day:</span>
              <span className="text-pink-600 font-semibold">{results.ovulationDay}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-pink-100">
              <span className="font-medium text-gray-700">Next Period:</span>
              <span className="text-gray-600">{results.nextPeriodDate}</span>
            </div>
            
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-gray-700">Safe Days:</span>
              <span className="text-green-600 font-semibold">
                {results.safeDaysStart} - {results.safeDaysEnd}
              </span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-800">
              <strong>Medical Disclaimer:</strong> This calculator provides estimates only. 
              For accurate family planning, consult with a healthcare provider.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
