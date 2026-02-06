'use client'

import { useState, useEffect, useCallback } from 'react'
import Card from '@/components/Card'

interface BMIResult {
  bmi: number
  category: string
  color: string
  description: string
}

export default function BMICalculatorClient() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [heightFeet, setHeightFeet] = useState('')
  const [heightInches, setHeightInches] = useState('')
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric')
  const [heightInput, setHeightInput] = useState<'decimal' | 'feetInches'>('decimal')
  const [result, setResult] = useState<BMIResult | null>(null)
  const [error, setError] = useState('')
  const [isCalculating, setIsCalculating] = useState(false)

  const getBMICategory = (bmi: number): { category: string; color: string; description: string } => {
    if (bmi < 18.5) {
      return {
        category: 'Underweight',
        color: 'text-blue-600',
        description: 'Consider consulting with a healthcare provider about healthy weight gain strategies.'
      }
    } else if (bmi < 25) {
      return {
        category: 'Normal weight',
        color: 'text-green-600',
        description: 'Great! You\'re maintaining a healthy weight range.'
      }
    } else if (bmi < 30) {
      return {
        category: 'Overweight',
        color: 'text-yellow-600',
        description: 'Consider incorporating more physical activity and balanced nutrition.'
      }
    } else {
      return {
        category: 'Obese',
        color: 'text-red-600',
        description: 'Consult with a healthcare provider for personalized health guidance.'
      }
    }
  }

  const calculateBMI = useCallback(() => {
    setError('')
    setResult(null)
    
    if (!weight) {
      setError('Please enter your weight')
      return
    }

    const weightNum = parseFloat(weight)
    
    if (isNaN(weightNum) || weightNum <= 0 || weightNum > 1000) {
      setError('Please enter a valid weight between 1 and 1000')
      return
    }

    let heightInMeters: number
    
    if (unit === 'metric') {
      if (!height) {
        setError('Please enter your height')
        return
      }
      const heightNum = parseFloat(height)
      if (isNaN(heightNum) || heightNum <= 0 || heightNum > 3) {
        setError('Please enter a valid height between 0.1 and 3 meters')
        return
      }
      heightInMeters = heightNum
    } else {
      if (heightInput === 'feetInches') {
        if (!heightFeet || !heightInches) {
          setError('Please enter both feet and inches')
          return
        }
        const feetNum = parseFloat(heightFeet)
        const inchesNum = parseFloat(heightInches)
        if (isNaN(feetNum) || isNaN(inchesNum) || feetNum < 0 || feetNum > 9 || inchesNum < 0 || inchesNum >= 12) {
          setError('Please enter valid height (0-9 feet, 0-11 inches)')
          return
        }
        heightInMeters = (feetNum * 12 + inchesNum) * 0.0254
      } else {
        if (!height) {
          setError('Please enter your height')
          return
        }
        const heightNum = parseFloat(height)
        if (isNaN(heightNum) || heightNum <= 0 || heightNum > 120) {
          setError('Please enter a valid height between 1 and 120 inches')
          return
        }
        heightInMeters = heightNum * 0.0254
      }
    }

    let bmi: number
    
    if (unit === 'metric') {
      bmi = weightNum / (heightInMeters * heightInMeters)
    } else {
      bmi = (weightNum / (heightInMeters * heightInMeters))
    }
    
    const categoryInfo = getBMICategory(bmi)
    
    setResult({
      bmi: Math.round(bmi * 10) / 10,
      category: categoryInfo.category,
      color: categoryInfo.color,
      description: categoryInfo.description
    })
  }, [weight, height, heightFeet, heightInches, unit, heightInput])

  const resetCalculator = () => {
    setWeight('')
    setHeight('')
    setHeightFeet('')
    setHeightInches('')
    setResult(null)
    setError('')
  }

  useEffect(() => {
    if (unit === 'metric') {
      setHeightInput('decimal')
    }
  }, [unit])

  useEffect(() => {
    // Auto-calculate BMI when all required fields are filled
    if (weight && ((unit === 'metric' && height) || 
        (unit === 'imperial' && ((heightInput === 'decimal' && height) || 
        (heightInput === 'feetInches' && heightFeet && heightInches))))) {
      calculateBMI()
    } else {
      setResult(null)
      setError('')
    }
  }, [weight, height, heightFeet, heightInches, unit, heightInput, calculateBMI])

  return (
    <Card className="max-w-2xl mx-auto mb-12">
      <div className="space-y-6">
        {/* Unit System Selection */}
        <div>
          <label className="block text-primary-text font-medium mb-3">
            Choose Your Measurement System
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setUnit('metric')}
              className={`p-4 rounded-lg border-2 transition-all ${
                unit === 'metric' 
                  ? 'border-accent bg-accent/10 text-accent' 
                  : 'border-border hover:border-accent/50'
              }`}
            >
              <div className="font-medium mb-1">Metric System</div>
              <div className="text-sm text-secondary-text">Kilograms, Meters</div>
            </button>
            <button
              onClick={() => setUnit('imperial')}
              className={`p-4 rounded-lg border-2 transition-all ${
                unit === 'imperial' 
                  ? 'border-accent bg-accent/10 text-accent' 
                  : 'border-border hover:border-accent/50'
              }`}
            >
              <div className="font-medium mb-1">Imperial System</div>
              <div className="text-sm text-secondary-text">Pounds, Feet/Inches</div>
            </button>
          </div>
        </div>

        {/* Weight Input */}
        <div>
          <label className="block text-primary-text font-medium mb-2">
            Weight {unit === 'metric' ? '(kilograms)' : '(pounds)'}
            <span className="text-secondary-text font-normal ml-2">
              e.g., {unit === 'metric' ? '70 kg' : '154 lbs'}
            </span>
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={`Enter your weight in ${unit === 'metric' ? 'kilograms' : 'pounds'}`}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            step="0.1"
            min="0"
          />
        </div>

        {/* Height Input */}
        <div>
          <label className="block text-primary-text font-medium mb-2">
            Height
            {unit === 'imperial' && (
              <div className="mt-3">
                <div className="flex space-x-4 mb-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="decimal"
                      checked={heightInput === 'decimal'}
                      onChange={(e) => setHeightInput(e.target.value as 'decimal')}
                      className="mr-2"
                    />
                    <span className="text-sm">Inches only</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="feetInches"
                      checked={heightInput === 'feetInches'}
                      onChange={(e) => setHeightInput(e.target.value as 'feetInches')}
                      className="mr-2"
                    />
                    <span className="text-sm">Feet & Inches</span>
                  </label>
                </div>
              </div>
            )}
          </label>
          
          {unit === 'metric' ? (
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height in meters (e.g., 1.75)"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              step="0.01"
              min="0"
            />
          ) : heightInput === 'feetInches' ? (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-secondary-text mb-1">Feet</label>
                <input
                  type="number"
                  value={heightFeet}
                  onChange={(e) => setHeightFeet(e.target.value)}
                  placeholder="e.g., 5"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  min="0"
                  max="9"
                />
              </div>
              <div>
                <label className="block text-sm text-secondary-text mb-1">Inches</label>
                <input
                  type="number"
                  value={heightInches}
                  onChange={(e) => setHeightInches(e.target.value)}
                  placeholder="e.g., 9"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  min="0"
                  max="11"
                />
              </div>
            </div>
          ) : (
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height in inches (e.g., 69)"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              step="0.1"
              min="0"
            />
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={calculateBMI}
            className="flex-1 btn-primary"
          >
            Calculate BMI
          </button>
          <button
            onClick={resetCalculator}
            className="px-6 py-3 border border-border rounded-lg hover:bg-card-hover transition-colors"
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

        {/* BMI Result */}
        {result && (
          <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">
                <span className={result.color}>{result.bmi}</span>
              </div>
              <div className={`text-xl font-medium mb-3 ${result.color}`}>
                {result.category}
              </div>
              <p className="text-secondary-text mb-4">
                {result.description}
              </p>
              
              {/* Visual BMI Scale */}
              <div className="mt-6">
                <div className="relative h-8 bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 to-red-400 rounded-full">
                  <div 
                    className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-2 border-gray-800 rounded-full shadow-lg"
                    style={{ 
                      left: `${Math.min(Math.max((result.bmi - 15) / 25 * 100, 0), 100)}%` 
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs text-secondary-text mt-2">
                  <span>15</span>
                  <span>20</span>
                  <span>25</span>
                  <span>30</span>
                  <span>35+</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BMI Categories Reference */}
        <div className="p-4 bg-secondary-bg rounded-lg">
          <h3 className="font-medium text-primary-text mb-3">BMI Categories Reference</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-blue-600">Underweight:</span>
              <span className="text-secondary-text">Below 18.5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-600">Normal weight:</span>
              <span className="text-secondary-text">18.5 - 24.9</span>
            </div>
            <div className="flex justify-between">
              <span className="text-yellow-600">Overweight:</span>
              <span className="text-secondary-text">25.0 - 29.9</span>
            </div>
            <div className="flex justify-between">
              <span className="text-red-600">Obese:</span>
              <span className="text-secondary-text">30.0 and above</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
