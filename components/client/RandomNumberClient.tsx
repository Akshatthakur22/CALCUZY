'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/Card'

interface GenerationHistory {
  id: string
  numbers: number[]
  min: number
  max: number
  count: number
  timestamp: Date
}

export default function RandomNumberClient() {
  const [min, setMin] = useState('1')
  const [max, setMax] = useState('100')
  const [count, setCount] = useState('1')
  const [results, setResults] = useState<number[]>([])
  const [history, setHistory] = useState<GenerationHistory[]>([])
  const [error, setError] = useState('')
  const [allowDuplicates, setAllowDuplicates] = useState(true)
  const [sortResults, setSortResults] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    if (results.length > 0) {
      setAnimationKey(prev => prev + 1)
    }
  }, [results])

  const validateInputs = (): { isValid: boolean; message: string } => {
    const minNum = parseInt(min)
    const maxNum = parseInt(max)
    const countNum = parseInt(count)

    if (isNaN(minNum) || isNaN(maxNum) || isNaN(countNum)) {
      return { isValid: false, message: 'Please enter valid numbers' }
    }

    if (minNum >= maxNum) {
      return { isValid: false, message: 'Minimum must be less than maximum' }
    }

    if (countNum < 1) {
      return { isValid: false, message: 'Quantity must be at least 1' }
    }

    if (countNum > 1000) {
      return { isValid: false, message: 'Maximum quantity is 1000' }
    }

    if (!allowDuplicates && countNum > (maxNum - minNum + 1)) {
      return { isValid: false, message: 'Not enough unique numbers in range' }
    }

    return { isValid: true, message: '' }
  }

  const generateNumbers = () => {
    setError('')
    
    const validation = validateInputs()
    if (!validation.isValid) {
      setError(validation.message)
      return
    }

    const minNum = parseInt(min)
    const maxNum = parseInt(max)
    const countNum = parseInt(count)

    const newNumbers: number[] = []
    const usedNumbers = new Set<number>()

    for (let i = 0; i < countNum; i++) {
      let randomNum: number
      
      if (allowDuplicates) {
        randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
      } else {
        do {
          randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
        } while (usedNumbers.has(randomNum))
        usedNumbers.add(randomNum)
      }
      
      newNumbers.push(randomNum)
    }

    if (sortResults) {
      newNumbers.sort((a, b) => a - b)
    }

    setResults(newNumbers)
    
    // Add to history
    const historyItem: GenerationHistory = {
      id: Date.now().toString(),
      numbers: [...newNumbers],
      min: minNum,
      max: maxNum,
      count: countNum,
      timestamp: new Date()
    }
    
    setHistory(prev => [historyItem, ...prev.slice(0, 4)]) // Keep last 5 items
  }

  const clearResults = () => {
    setResults([])
    setError('')
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(results.join(', '))
  }

  const regenerateNumbers = () => {
    generateNumbers()
  }

  const loadFromHistory = (historyItem: GenerationHistory) => {
    setMin(historyItem.min.toString())
    setMax(historyItem.max.toString())
    setCount(historyItem.count.toString())
    setResults(historyItem.numbers)
  }

  const getStatistics = () => {
    if (results.length === 0) return null
    
    const sum = results.reduce((a, b) => a + b, 0)
    const avg = sum / results.length
    const min = Math.min(...results)
    const max = Math.max(...results)
    
    return { sum, avg, min, max }
  }

  const stats = getStatistics()

  return (
    <Card className="max-w-4xl mx-auto mb-12">
      <div className="space-y-6">
        {/* Input Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-primary-text font-medium mb-2">
              Minimum
              <span className="text-secondary-text font-normal ml-2">e.g., 1</span>
            </label>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              placeholder="1"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              min="1"
            />
          </div>

          <div>
            <label className="block text-primary-text font-medium mb-2">
              Maximum
              <span className="text-secondary-text font-normal ml-2">e.g., 100</span>
            </label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              placeholder="100"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              min="2"
            />
          </div>

          <div>
            <label className="block text-primary-text font-medium mb-2">
              Quantity
              <span className="text-secondary-text font-normal ml-2">e.g., 10</span>
            </label>
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              placeholder="1"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              min="1"
              max="1000"
            />
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-wrap gap-6">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={allowDuplicates}
              onChange={(e) => setAllowDuplicates(e.target.checked)}
              className="mr-2 w-4 h-4 text-accent border-border rounded focus:ring-accent"
            />
            <span className="text-sm text-primary-text">Allow duplicates</span>
          </label>
          
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={sortResults}
              onChange={(e) => setSortResults(e.target.checked)}
              className="mr-2 w-4 h-4 text-accent border-border rounded focus:ring-accent"
            />
            <span className="text-sm text-primary-text">Sort results</span>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={generateNumbers}
            className="flex-1 btn-primary"
          >
            Generate Numbers
          </button>
          <button
            onClick={regenerateNumbers}
            disabled={results.length === 0}
            className="px-6 py-3 border border-border rounded-lg hover:bg-card-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Regenerate
          </button>
          <button
            onClick={clearResults}
            disabled={results.length === 0}
            className="px-6 py-3 border border-border rounded-lg hover:bg-card-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Clear
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
        {results.length > 0 && (
          <div className="space-y-4">
            {/* Results Header */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-primary-text">
                Generated Numbers ({results.length})
              </h3>
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-card-hover transition-colors"
              >
                Copy All
              </button>
            </div>

            {/* Numbers Grid */}
            <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2`} key={animationKey}>
              {results.map((number, index) => (
                <div 
                  key={index} 
                  className="text-center p-3 bg-gradient-to-br from-primary-bg to-secondary-bg border border-border rounded-lg hover:shadow-md transition-all hover:scale-105 staggered-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-mono font-medium text-primary-text">{number}</span>
                </div>
              ))}
            </div>

            {/* Statistics */}
            {stats && (
              <div className="p-4 bg-secondary-bg rounded-lg">
                <h4 className="font-medium text-primary-text mb-3">Statistics</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-secondary-text">Sum:</span>
                    <span className="ml-2 font-medium text-primary-text">{stats.sum}</span>
                  </div>
                  <div>
                    <span className="text-secondary-text">Average:</span>
                    <span className="ml-2 font-medium text-primary-text">{stats.avg.toFixed(2)}</span>
                  </div>
                  <div>
                    <span className="text-secondary-text">Min:</span>
                    <span className="ml-2 font-medium text-primary-text">{stats.min}</span>
                  </div>
                  <div>
                    <span className="text-secondary-text">Max:</span>
                    <span className="ml-2 font-medium text-primary-text">{stats.max}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* History */}
        {history.length > 0 && (
          <div className="p-4 bg-secondary-bg rounded-lg">
            <h4 className="font-medium text-primary-text mb-3">Recent Generations</h4>
            <div className="space-y-2">
              {history.map((item) => (
                <div 
                  key={item.id}
                  className="flex justify-between items-center p-2 bg-primary-bg rounded border border-border hover:bg-card-hover transition-colors cursor-pointer"
                  onClick={() => loadFromHistory(item)}
                >
                  <div className="text-sm">
                    <span className="text-primary-text">{item.count} numbers</span>
                    <span className="text-secondary-text ml-2">
                      ({item.min}-{item.max})
                    </span>
                  </div>
                  <div className="text-xs text-secondary-text">
                    {item.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
