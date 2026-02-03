'use client'

import { useState } from 'react'
import { ToolWrapper, ToolInput, ToolResult, ToolButton } from '@/components/ToolWrapper'
import CopyButton from '@/components/CopyButton'

export default function RandomNumberClient() {
  const [min, setMin] = useState('1')
  const [max, setMax] = useState('100')
  const [count, setCount] = useState('1')
  const [results, setResults] = useState<number[]>([])
  const [error, setError] = useState('')

  const generateNumbers = () => {
    setError('')
    const minNum = parseInt(min)
    const maxNum = parseInt(max)
    const countNum = parseInt(count)

    if (isNaN(minNum) || isNaN(maxNum) || isNaN(countNum)) {
      setError('Please enter valid numbers')
      setResults([])
      return
    }

    if (minNum >= maxNum) {
      setError('Minimum must be less than maximum')
      setResults([])
      return
    }

    if (countNum > 1000) {
      setError('Maximum 1000 numbers allowed')
      setResults([])
      return
    }

    if (countNum < 1) {
      setError('Quantity must be at least 1')
      setResults([])
      return
    }

    const newNumbers: number[] = []
    for (let i = 0; i < countNum; i++) {
      const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
      newNumbers.push(randomNum)
    }

    setResults(newNumbers)
  }

  const clearResults = () => {
    setResults([])
    setError('')
  }

  return (
    <ToolWrapper>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ToolInput
            id="min-input"
            label="Minimum"
            type="number"
            value={min}
            onChange={(val) => setMin(val)}
            placeholder="1"
            helpText="Lowest possible value"
            min="0"
            autoFocus
            inputMode="decimal"
          />

          <ToolInput
            id="max-input"
            label="Maximum"
            type="number"
            value={max}
            onChange={(val) => setMax(val)}
            placeholder="100"
            helpText="Highest possible value"
            min="1"
            inputMode="decimal"
          />

          <ToolInput
            id="count-input"
            label="Quantity"
            type="number"
            value={count}
            onChange={(val) => setCount(val)}
            placeholder="1"
            helpText="Numbers to generate"
            min="1"
            max="1000"
            inputMode="decimal"
          />
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-100" role="alert">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <ToolButton onClick={generateNumbers} className="flex-1">
            Generate Numbers
          </ToolButton>
          <button
            onClick={clearResults}
            className="flex-1 px-6 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all duration-200 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            Clear
          </button>
        </div>

        {results.length > 0 && (
          <ToolResult copyText={results.join(', ')} copyLabel="Random Numbers">
            <div className="text-left">
              <div className="flex items-center justify-between mb-3">
                <div className="text-lg font-medium text-slate-900">
                  Generated Numbers:
                </div>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {results.map((number, index) => (
                  <div key={index} className="text-center p-2 bg-white border border-slate-200 rounded-lg text-slate-900 font-medium hover:bg-slate-50 transition-colors">
                    {number}
                  </div>
                ))}
              </div>
            </div>
          </ToolResult>
        )}
      </div>
    </ToolWrapper>
  )
}
