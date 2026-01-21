'use client'

import { useState } from 'react'
import Card from '@/components/Card'

export default function RandomNumberClient() {
  const [min, setMin] = useState('1')
  const [max, setMax] = useState('100')
  const [count, setCount] = useState('1')
  const [results, setResults] = useState<number[]>([])

  const generateNumbers = () => {
    const minNum = parseInt(min)
    const maxNum = parseInt(max)
    const countNum = parseInt(count)

    if (isNaN(minNum) || isNaN(maxNum) || isNaN(countNum)) {
      setResults([])
      return
    }

    if (minNum >= maxNum) {
      setResults([])
      return
    }

    if (countNum > 1000) {
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
  }

  return (
    <Card className="max-w-2xl mx-auto mb-12">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-primary-text font-medium mb-2">
              Minimum
            </label>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              placeholder="1"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              min="1"
            />
          </div>

          <div>
            <label className="block text-primary-text font-medium mb-2">
              Maximum
            </label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              placeholder="100"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              min="2"
            />
          </div>

          <div>
            <label className="block text-primary-text font-medium mb-2">
              Quantity
            </label>
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              placeholder="1"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              min="1"
              max="1000"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={generateNumbers}
            className="flex-1 btn-primary"
          >
            Generate Numbers
          </button>
          <button
            onClick={clearResults}
            className="flex-1 px-6 py-3 border border-border rounded-lg hover:bg-card-hover transition-colors"
          >
            Clear
          </button>
        </div>

        {results.length > 0 && (
          <div className="p-4 bg-secondary-bg rounded-lg">
            <div className="text-lg font-medium text-primary-text mb-3">
              Generated Numbers:
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {results.map((number, index) => (
                <div key={index} className="text-center p-2 bg-primary-bg border border-border rounded">
                  {number}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
