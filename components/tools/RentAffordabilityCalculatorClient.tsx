'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/Card'

interface CalculationResult {
  monthlyIncome: number
  totalExpenses: number
  recommendedMaxRent: number
  actualMaxRent: number
  rentPercentage: number
  remainingIncome: number
  affordabilityStatus: 'comfortable' | 'moderate' | 'stretched'
}

export default function RentAffordabilityCalculatorClient() {
  const [monthlyIncome, setMonthlyIncome] = useState('')
  const [desiredRent, setDesiredRent] = useState('')
  const [totalExpenses, setTotalExpenses] = useState('')
  const [rentPercentage, setRentPercentage] = useState('30')
  const [result, setResult] = useState<CalculationResult | null>(null)
  const [error, setError] = useState('')

  const calculate = () => {
    const income = parseFloat(monthlyIncome) || 0
    const expenses = parseFloat(totalExpenses) || 0
    const rent = parseFloat(desiredRent) || 0
    const percentage = parseFloat(rentPercentage) || 30

    if (income <= 0) {
      setError('Please enter a valid monthly income')
      return
    }

    if (rent < 0) {
      setError('Please enter a valid rent amount')
      return
    }

    const recommendedMaxRent = (income * percentage) / 100
    const actualMaxRent = Math.max(0, income - expenses)
    const rentPercentOfIncome = income > 0 ? (rent / income) * 100 : 0
    const remainingIncome = income - expenses - rent

    let status: 'comfortable' | 'moderate' | 'stretched'
    if (rentPercentOfIncome <= 30) {
      status = 'comfortable'
    } else if (rentPercentOfIncome <= 40) {
      status = 'moderate'
    } else {
      status = 'stretched'
    }

    setResult({
      monthlyIncome: income,
      totalExpenses: expenses,
      recommendedMaxRent,
      actualMaxRent,
      rentPercentage: rentPercentOfIncome,
      remainingIncome,
      affordabilityStatus: status
    })
    setError('')
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'comfortable': return 'text-green-600'
      case 'moderate': return 'text-yellow-600'
      case 'stretched': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getRecommendation = (status: string, rentPercent: number) => {
    if (status === 'comfortable') {
      return 'Great! You have plenty of room in your budget for this rent.'
    } else if (status === 'moderate') {
      return 'This rent is manageable but leaves little room for unexpected expenses.'
    } else {
      return 'This rent may strain your budget. Consider looking for more affordable options.'
    }
  }

  useEffect(() => {
    if (monthlyIncome && desiredRent) {
      calculate()
    }
  }, [monthlyIncome, desiredRent, totalExpenses, rentPercentage])

  return (
    <Card className="max-w-4xl mx-auto mb-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary-text mb-2">
            Rent Affordability Calculator
          </h1>
          <p className="text-secondary-text">
            Calculate how much rent you can comfortably afford based on your income and expenses
          </p>
        </div>

        {/* Income Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-primary-text">Income Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-primary-text font-medium mb-2">
                Monthly Gross Income *
                <span className="text-secondary-text font-normal ml-2">e.g., $5,000</span>
              </label>
              <input
                type="number"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                placeholder="Enter your monthly gross income"
                className="input-field"
                min="0"
                step="100"
                autoFocus
              />
            </div>

            <div>
              <label className="block text-primary-text font-medium mb-2">
                Desired Monthly Rent
                <span className="text-secondary-text font-normal ml-2">e.g., $1,500</span>
              </label>
              <input
                type="number"
                value={desiredRent}
                onChange={(e) => setDesiredRent(e.target.value)}
                placeholder="Enter desired rent amount"
                className="input-field"
                min="0"
                step="50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-primary-text font-medium mb-2">
                Total Monthly Expenses
                <span className="text-secondary-text font-normal ml-2">e.g., $1,000</span>
              </label>
              <input
                type="number"
                value={totalExpenses}
                onChange={(e) => setTotalExpenses(e.target.value)}
                placeholder="Enter total monthly expenses"
                className="input-field"
                min="0"
                step="50"
              />
            </div>

            <div>
              <label className="block text-primary-text font-medium mb-2">
                Rent Percentage Guideline
                <span className="text-secondary-text font-normal ml-2">e.g., 30%</span>
              </label>
              <input
                type="number"
                value={rentPercentage}
                onChange={(e) => setRentPercentage(e.target.value)}
                placeholder="Enter percentage"
                className="input-field"
                min="0"
                max="100"
                step="1"
              />
            </div>
          </div>
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

        {/* Calculate Button */}
        <button
          onClick={calculate}
          className="w-full btn-primary"
        >
          Calculate Affordability
        </button>

        {/* Results */}
        {result && (
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-medium text-primary-text mb-4">Affordability Analysis</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Monthly Income:</p>
                  <p className="text-lg font-semibold">${result.monthlyIncome.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Expenses:</p>
                  <p className="text-lg font-semibold">${result.totalExpenses.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Desired Rent:</p>
                  <p className="text-lg font-semibold">${desiredRent ? parseFloat(desiredRent).toLocaleString() : '0'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Rent as % of Income:</p>
                  <p className="text-lg font-semibold">{result.rentPercentage.toFixed(1)}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Recommended Max Rent:</p>
                  <p className="text-lg font-semibold text-blue-600">${result.recommendedMaxRent.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Remaining Income:</p>
                  <p className="text-lg font-semibold text-green-600">${result.remainingIncome.toLocaleString()}</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Affordability Status:</p>
                    <p className={`text-lg font-semibold capitalize ${getStatusColor(result.affordabilityStatus)}`}>
                      {result.affordabilityStatus}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-2">
                      {getRecommendation(result.affordabilityStatus, result.rentPercentage)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
