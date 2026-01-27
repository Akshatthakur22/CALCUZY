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
  savingsPotential: number
  emergencyFund: number
}

interface ExpenseCategory {
  name: string
  amount: number
  essential: boolean
}

export default function RentAffordabilityCalculatorClient() {
  const [monthlyIncome, setMonthlyIncome] = useState('')
  const [expenses, setExpenses] = useState<ExpenseCategory[]>([
    { name: 'Utilities', amount: 150, essential: true },
    { name: 'Groceries', amount: 400, essential: true },
    { name: 'Transportation', amount: 200, essential: true },
    { name: 'Insurance', amount: 100, essential: true },
    { name: 'Entertainment', amount: 100, essential: false },
    { name: 'Other', amount: 50, essential: false }
  ])
  const [desiredRent, setDesiredRent] = useState('')
  const [rentPercentage, setRentPercentage] = useState('30')
  const [savingsGoal, setSavingsGoal] = useState('')
  const [result, setResult] = useState<CalculationResult | null>(null)
  const [error, setError] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0)

  const calculate = () => {
    const income = parseFloat(monthlyIncome) || 0
    const rent = parseFloat(desiredRent) || 0
    const percentage = parseFloat(rentPercentage) || 30
    const savings = parseFloat(savingsGoal) || 0

    if (income <= 0) {
      setError('Please enter a valid monthly income')
      return
    }

    const recommendedMaxRent = income * (percentage / 100)
    const actualMaxRent = income - totalExpenses
    const rentPercentOfIncome = rent > 0 ? (rent / income) * 100 : 0
    const remainingIncome = income - totalExpenses - rent
    const savingsPotential = Math.max(0, remainingIncome)
    const emergencyFund = income * 3 // 3 months of expenses

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
      totalExpenses,
      recommendedMaxRent,
      actualMaxRent,
      rentPercentage: rentPercentOfIncome,
      remainingIncome,
      affordabilityStatus: status,
      savingsPotential,
      emergencyFund
    })
    setError('')
  }

  const addExpense = () => {
    const newExpense: ExpenseCategory = {
      name: '',
      amount: 0,
      essential: false
    }
    setExpenses([...expenses, newExpense])
  }

  const removeExpense = (index: number) => {
    setExpenses(expenses.filter((_, i) => i !== index))
  }

  const updateExpense = (index: number, field: keyof ExpenseCategory, value: any) => {
    const updated = [...expenses]
    updated[index] = { ...updated[index], [field]: value }
    setExpenses(updated)
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
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="5000"
                step="100"
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
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="1500"
                step="50"
              />
            </div>
          </div>

          <div>
            <label className="block text-primary-text font-medium mb-2">
              Rent-to-Income Ratio Preference
            </label>
            <select
              value={rentPercentage}
              onChange={(e) => setRentPercentage(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            >
              <option value="20">20% - Very Conservative</option>
              <option value="25">25% - Conservative</option>
              <option value="30">30% - Standard</option>
              <option value="35">35% - Aggressive</option>
              <option value="40">40% - Maximum Recommended</option>
            </select>
          </div>
        </div>

        {/* Expenses Section */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-primary-text">Monthly Expenses</h3>
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="px-4 py-2 border border-border rounded-lg hover:bg-card-hover transition-colors"
            >
              {showAdvanced ? 'Simple View' : 'Advanced View'}
            </button>
          </div>

          {!showAdvanced ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-primary-text font-medium mb-2">
                    Total Monthly Expenses
                  </label>
                  <input
                    type="number"
                    value={totalExpenses}
                    readOnly
                    className="w-full px-4 py-3 border border-border rounded-lg bg-secondary-bg"
                    placeholder="1500"
                  />
                </div>
                <div className="flex items-end">
                  <div className="text-sm text-secondary-text">
                    <p>Total: ${totalExpenses.toLocaleString()}/month</p>
                    <p className="text-xs mt-1">Click Advanced to break down expenses</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {expenses.map((expense, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={expense.name}
                      onChange={(e) => updateExpense(index, 'name', e.target.value)}
                      className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      placeholder="Expense name"
                    />
                  </div>
                  <div className="w-32">
                    <input
                      type="number"
                      value={expense.amount || ''}
                      onChange={(e) => updateExpense(index, 'amount', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      placeholder="Amount"
                      step="10"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={expense.essential}
                      onChange={(e) => updateExpense(index, 'essential', e.target.checked)}
                      className="w-4 h-4 text-accent border-border rounded focus:ring-accent"
                    />
                    <span className="text-sm text-secondary-text">Essential</span>
                  </div>
                  <button
                    onClick={() => removeExpense(index)}
                    className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={addExpense}
                className="w-full px-4 py-2 border border-border rounded-lg hover:bg-card-hover transition-colors"
              >
                + Add Expense
              </button>
            </div>
          )}
        </div>

        {/* Savings Goal */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-primary-text">Savings Goals</h3>
          <div>
            <label className="block text-primary-text font-medium mb-2">
              Monthly Savings Goal
              <span className="text-secondary-text font-normal ml-2">Optional</span>
            </label>
            <input
              type="number"
              value={savingsGoal}
              onChange={(e) => setSavingsGoal(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              placeholder="500"
              step="50"
            />
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

        {/* Results */}
        {result && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 p-6">
              <h3 className="text-xl font-semibold text-primary-text mb-4">Rent Affordability Analysis</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-secondary-text">Monthly Income:</p>
                    <p className="text-2xl font-bold text-primary-text">
                      ${result.monthlyIncome.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-text">Total Expenses:</p>
                    <p className="text-2xl font-bold text-primary-text">
                      ${result.totalExpenses.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-text">Recommended Max Rent ({rentPercentage}%):</p>
                    <p className="text-2xl font-bold text-green-600">
                      ${result.recommendedMaxRent.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-secondary-text">Actual Max Available:</p>
                    <p className="text-2xl font-bold text-blue-600">
                      ${result.actualMaxRent.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-text">Desired Rent:</p>
                    <p className="text-2xl font-bold text-primary-text">
                      ${desiredRent || '0'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-text">Rent as % of Income:</p>
                    <p className={`text-2xl font-bold ${getStatusColor(result.affordabilityStatus)}`}>
                      {result.rentPercentage.toFixed(1)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-text">Remaining After Rent:</p>
                    <p className={`text-2xl font-bold ${result.remainingIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${result.remainingIncome.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <p className={`text-sm font-medium ${getStatusColor(result.affordabilityStatus)}`}>
                    Affordability Status: {getStatusText(result.affordabilityStatus)}
                  </p>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(result.affordabilityStatus)} bg-opacity-10`}>
                    {result.affordabilityStatus.toUpperCase()}
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  {getRecommendation(result.affordabilityStatus, result.rentPercentage)}
                </p>
              </div>
            </div>

            {/* Additional Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-medium text-green-800 mb-2">Savings Potential</h4>
                <p className="text-2xl font-bold text-green-600">
                  ${result.savingsPotential.toLocaleString()}
                </p>
                <p className="text-sm text-green-700">
                  Available for savings each month
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2">Emergency Fund</h4>
                <p className="text-2xl font-bold text-blue-600">
                  ${result.emergencyFund.toLocaleString()}
                </p>
                <p className="text-sm text-blue-700">
                  3 months of expenses recommended
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-medium text-purple-800 mb-2">Budget Health</h4>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-700">Income Coverage:</span>
                    <span className="font-medium text-purple-900">
                      {((result.monthlyIncome - result.totalExpenses - parseFloat(desiredRent || '0')) / result.monthlyIncome * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-700">Debt-to-Income:</span>
                    <span className="font-medium text-purple-900">
                      {(result.totalExpenses / result.monthlyIncome * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Affordability Guide */}
            <div className="p-4 bg-secondary-bg rounded-lg">
              <h4 className="font-medium text-primary-text mb-3">Rent Affordability Guidelines</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-medium text-green-800">25% or Less</p>
                  <p className="text-green-700">Comfortable</p>
                  <p className="text-xs text-green-600 mt-1">Plenty of room for savings</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="font-medium text-yellow-800">26-35%</p>
                  <p className="text-yellow-700">Moderate</p>
                  <p className="text-xs text-yellow-600 mt-1">Manageable but tight</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <p className="font-medium text-red-800">Above 35%</p>
                  <p className="text-red-700">Stretched</p>
                  <p className="text-xs text-red-600 mt-1">Consider cheaper options</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
