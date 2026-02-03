'use client'

import { useState } from 'react'
import Card from '@/components/Card'
import CopyButton from '@/components/CopyButton'

export default function BMICalculatorClient() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric')
  const [result, setResult] = useState('')
  const [bmiValue, setBmiValue] = useState<number | null>(null)
  const [category, setCategory] = useState('')
  const [error, setError] = useState('')

  const calculateBMI = () => {
    setError('')
    
    if (!weight || !height) {
      setError('Please enter both weight and height')
      setResult('')
      setBmiValue(null)
      return
    }

    const weightNum = parseFloat(weight)
    const heightNum = parseFloat(height)

    if (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
      setError('Please enter valid positive numbers')
      setResult('')
      setBmiValue(null)
      return
    }

    let bmi: number
    
    if (unit === 'metric') {
      // Metric formula: BMI = weight(kg) / (height(m)^2)
      bmi = weightNum / (heightNum * heightNum)
    } else {
      // Imperial formula: BMI = weight(lbs) / (height(inches)^2) * 703
      bmi = (weightNum / (heightNum * heightNum)) * 703
    }
    
    let cat = ''
    let variant = 'default'

    if (bmi < 18.5) {
      cat = 'Underweight'
      variant = 'warning'
    } else if (bmi < 25) {
      cat = 'Normal weight'
      variant = 'success'
    } else if (bmi < 30) {
      cat = 'Overweight'
      variant = 'warning'
    } else {
      cat = 'Obese'
      variant = 'error'
    }

    setBmiValue(bmi)
    setCategory(cat)
    setResult(`Your BMI is ${bmi.toFixed(1)} (${cat})`)
  }

  const getCategoryColor = () => {
    if (!category) return 'text-slate-900'
    switch (category) {
      case 'Normal weight': return 'text-emerald-600'
      case 'Underweight': return 'text-amber-600'
      case 'Overweight': return 'text-amber-600'
      case 'Obese': return 'text-red-600'
      default: return 'text-slate-900'
    }
  }

  const getBgColor = () => {
    if (!category) return 'bg-slate-50 border-slate-100'
    switch (category) {
      case 'Normal weight': return 'bg-emerald-50 border-emerald-100'
      case 'Underweight': return 'bg-amber-50 border-amber-100'
      case 'Overweight': return 'bg-amber-50 border-amber-100'
      case 'Obese': return 'bg-red-50 border-red-100'
      default: return 'bg-slate-50 border-slate-100'
    }
  }

  return (
    <Card className="max-w-2xl mx-auto mb-12">
      <div className="space-y-6">
        <div>
          <label id="unit-label" className="block text-slate-900 font-medium mb-2 text-sm">
            Unit System
          </label>
          <div className="flex space-x-6" role="radiogroup" aria-labelledby="unit-label">
            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                value="metric"
                checked={unit === 'metric'}
                onChange={(e) => setUnit(e.target.value as 'metric')}
                className="w-4 h-4 text-blue-500 border-slate-300 focus:ring-blue-500 focus:ring-2"
              />
              <span className="ml-2 text-sm text-slate-700 group-hover:text-slate-900 transition-colors">Metric (kg, m)</span>
            </label>
            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                value="imperial"
                checked={unit === 'imperial'}
                onChange={(e) => setUnit(e.target.value as 'imperial')}
                className="w-4 h-4 text-blue-500 border-slate-300 focus:ring-blue-500 focus:ring-2"
              />
              <span className="ml-2 text-sm text-slate-700 group-hover:text-slate-900 transition-colors">Imperial (lbs, inches)</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="weight-input" className="block text-slate-900 font-medium mb-2 text-sm">
            Weight {unit === 'metric' ? '(kg)' : '(lbs)'}
          </label>
          <input
            id="weight-input"
            type="number"
            inputMode="decimal"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === 'metric' ? 'Enter your weight in kg' : 'Enter your weight in lbs'}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 placeholder:text-slate-400"
            step="0.1"
            min="0"
            autoFocus
            aria-describedby="weight-help"
          />
          <p id="weight-help" className="text-xs text-slate-500 mt-1">
            {unit === 'metric' ? 'Enter weight in kilograms' : 'Enter weight in pounds'}
          </p>
        </div>

        <div>
          <label htmlFor="height-input" className="block text-slate-900 font-medium mb-2 text-sm">
            Height {unit === 'metric' ? '(m)' : '(inches)'}
          </label>
          <input
            id="height-input"
            type="number"
            inputMode="decimal"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={unit === 'metric' ? 'Enter your height in meters' : 'Enter your height in inches'}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 placeholder:text-slate-400"
            step="0.01"
            min="0"
            aria-describedby="height-help"
          />
          <p id="height-help" className="text-xs text-slate-500 mt-1">
            {unit === 'metric' ? 'Enter height in meters (e.g., 1.75)' : 'Enter total height in inches'}
          </p>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-100" role="alert" aria-live="assertive">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        <button
          onClick={calculateBMI}
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all duration-200 hover:scale-[1.01] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Calculate your BMI"
        >
          Calculate BMI
        </button>

        {result && !error && (
          <div 
            className={`relative p-4 rounded-xl border ${getBgColor()} fade-in`}
            role="region"
            aria-live="polite"
            aria-label="BMI calculation result"
          >
            <div className="text-center">
              <div className="text-sm text-slate-500 uppercase tracking-wide mb-1">Your BMI</div>
              <div className={`text-3xl font-bold ${getCategoryColor()}`}>
                {bmiValue?.toFixed(1)}
              </div>
              <div className={`text-lg font-medium mt-1 ${getCategoryColor()}`}>
                {category}
              </div>
            </div>
            <div className="absolute top-3 right-3">
              <CopyButton 
                text={result} 
                variant="icon" 
                successMessage="BMI result copied!"
              />
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
