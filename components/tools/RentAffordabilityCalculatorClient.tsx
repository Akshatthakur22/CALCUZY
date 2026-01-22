'use client'

import { useState } from 'react'

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
  const [monthlyExpenses, setMonthlyExpenses] = useState('')
  const [desiredRent, setDesiredRent] = useState('')
  const [rentPercentage, setRentPercentage] = useState('30')
  const [result, setResult] = useState<CalculationResult | null>(null)

  const calculate = () => {
    const income = parseFloat(monthlyIncome) || 0
    const expenses = parseFloat(monthlyExpenses) || 0
    const rent = parseFloat(desiredRent) || 0
    const percentage = parseFloat(rentPercentage) || 30

    if (income <= 0) return

    const recommendedMaxRent = income * (percentage / 100)
    const actualMaxRent = income - expenses
    const rentPercentOfIncome = rent > 0 ? (rent / income) * 100 : 0
    const remainingIncome = income - expenses - rent

    let status: 'comfortable' | 'moderate' | 'stretched'
    if (rentPercentOfIncome <= 25) {
      status = 'comfortable'
    } else if (rentPercentOfIncome <= 35) {
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
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'comfortable': return 'text-green-600'
      case 'moderate': return 'text-yellow-600'
      case 'stretched': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'comfortable': return 'Comfortable - Well within budget'
      case 'moderate': return 'Moderate - Manageable but tight'
      case 'stretched': return 'Stretched - May be difficult to afford'
      default: return ''
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Gross Income ($)
          </label>
          <input
            type="number"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
            className="input-field"
            placeholder="5000"
            step="100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Expenses (excluding rent) ($)
          </label>
          <input
            type="number"
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(e.target.value)}
            className="input-field"
            placeholder="1500"
            step="50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Desired Monthly Rent ($)
          </label>
          <input
            type="number"
            value={desiredRent}
            onChange={(e) => setDesiredRent(e.target.value)}
            className="input-field"
            placeholder="1500"
            step="50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rent-to-Income Ratio (%)
          </label>
          <select
            value={rentPercentage}
            onChange={(e) => setRentPercentage(e.target.value)}
            className="input-field"
          >
            <option value="25">25% - Conservative</option>
            <option value="30">30% - Standard</option>
            <option value="35">35% - Aggressive</option>
            <option value="40">40% - Maximum Recommended</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
      >
        Calculate Rent Affordability
      </button>

      {result && (
        <div className="mt-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Rent Affordability Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Monthly Income:</p>
              <p className="text-lg font-semibold">${result.monthlyIncome.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Other Monthly Expenses:</p>
              <p className="text-lg font-semibold">${result.totalExpenses.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Recommended Max Rent ({rentPercentage}%):</p>
              <p className="text-lg font-semibold text-green-600">${result.recommendedMaxRent.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Actual Max Available:</p>
              <p className="text-lg font-semibold text-blue-600">${result.actualMaxRent.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Rent as % of Income:</p>
              <p className={`text-lg font-semibold ${getStatusColor(result.affordabilityStatus)}`}>
                {result.rentPercentage.toFixed(1)}%
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Remaining After Rent:</p>
              <p className={`text-lg font-semibold ${result.remainingIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${result.remainingIncome.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className={`text-sm ${getStatusColor(result.affordabilityStatus)}`}>
              <strong>Affordability Status:</strong> {getStatusText(result.affordabilityStatus)}
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 bg-green-50 rounded-lg text-center">
              <p className="text-xs text-green-800 font-semibold">25% or Less</p>
              <p className="text-xs text-green-600">Comfortable</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg text-center">
              <p className="text-xs text-yellow-800 font-semibold">26-35%</p>
              <p className="text-xs text-yellow-600">Moderate</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg text-center">
              <p className="text-xs text-red-800 font-semibold">Above 35%</p>
              <p className="text-xs text-red-600">Stretched</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
