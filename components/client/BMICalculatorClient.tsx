'use client'

import { useState } from 'react'
import Card from '@/components/Card'

export default function BMICalculatorClient() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState('')

  const calculateBMI = () => {
    if (!weight || !height) {
      setResult('Please enter both weight and height')
      return
    }

    const weightNum = parseFloat(weight)
    const heightNum = parseFloat(height)

    if (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
      setResult('Please enter valid positive numbers')
      return
    }

    const bmi = weightNum / (heightNum * heightNum) * 703
    let category = ''

    if (bmi < 18.5) {
      category = 'Underweight'
    } else if (bmi < 25) {
      category = 'Normal weight'
    } else if (bmi < 30) {
      category = 'Overweight'
    } else {
      category = 'Obese'
    }

    setResult(`Your BMI is ${bmi.toFixed(1)} (${category})`)
  }

  return (
    <Card className="max-w-2xl mx-auto mb-12">
      <div className="space-y-6">
        <div>
          <label className="block text-primary-text font-medium mb-2">
            Weight (kg or lbs)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            step="0.1"
            min="0"
          />
        </div>

        <div>
          <label className="block text-primary-text font-medium mb-2">
            Height (cm or inches)
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height in centimeters"
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            step="0.1"
            min="0"
          />
        </div>

        <button
          onClick={calculateBMI}
          className="w-full btn-primary"
        >
          Calculate BMI
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
