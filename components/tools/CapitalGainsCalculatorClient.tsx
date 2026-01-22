'use client'

import { useState } from 'react'

interface CalculationResult {
  proceeds: number
  costBasis: number
  capitalGain: number
  taxRate: number
  taxAmount: number
  afterTaxReturn: number
  holdingPeriod: 'short-term' | 'long-term'
}

export default function CapitalGainsCalculatorClient() {
  const [buyPrice, setBuyPrice] = useState('')
  const [sellPrice, setSellPrice] = useState('')
  const [holdingPeriod, setHoldingPeriod] = useState<'short-term' | 'long-term'>('short-term')
  const [annualIncome, setAnnualIncome] = useState('')
  const [result, setResult] = useState<CalculationResult | null>(null)

  const getTaxRate = (income: number, period: 'short-term' | 'long-term'): number => {
    if (period === 'short-term') {
      // Short-term rates (ordinary income tax rates for 2024)
      if (income <= 11000) return 10
      if (income <= 44725) return 12
      if (income <= 95375) return 22
      if (income <= 182050) return 24
      if (income <= 231250) return 32
      if (income <= 578125) return 35
      return 37
    } else {
      // Long-term capital gains rates for 2024
      if (income <= 44000) return 0
      if (income <= 95375) return 15
      if (income <= 182050) return 15
      if (income <= 231250) return 15
      if (income <= 578125) return 15
      return 20
    }
  }

  const calculate = () => {
    const buy = parseFloat(buyPrice) || 0
    const sell = parseFloat(sellPrice) || 0
    const income = parseFloat(annualIncome) || 0

    if (buy <= 0 || sell <= 0) return

    const proceeds = sell
    const costBasis = buy
    const capitalGain = proceeds - costBasis
    const taxRate = getTaxRate(income, holdingPeriod)
    const taxAmount = Math.max(0, capitalGain * (taxRate / 100))
    const afterTaxReturn = proceeds - costBasis - taxAmount

    setResult({
      proceeds,
      costBasis,
      capitalGain,
      taxRate,
      taxAmount,
      afterTaxReturn,
      holdingPeriod
    })
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Purchase Price ($)
          </label>
          <input
            type="number"
            value={buyPrice}
            onChange={(e) => setBuyPrice(e.target.value)}
            className="input-field"
            placeholder="1000"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sale Price ($)
          </label>
          <input
            type="number"
            value={sellPrice}
            onChange={(e) => setSellPrice(e.target.value)}
            className="input-field"
            placeholder="1500"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Holding Period
          </label>
          <select
            value={holdingPeriod}
            onChange={(e) => setHoldingPeriod(e.target.value as 'short-term' | 'long-term')}
            className="input-field"
          >
            <option value="short-term">Short-term (&le; 1 year)</option>
            <option value="long-term">Long-term (&gt; 1 year)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Income ($)
          </label>
          <input
            type="number"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value)}
            className="input-field"
            placeholder="50000"
            step="1000"
          />
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
      >
        Calculate Capital Gains Tax
      </button>

      {result && (
        <div className="mt-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Capital Gains Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Proceeds from Sale:</p>
              <p className="text-lg font-semibold">${result.proceeds.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Cost Basis:</p>
              <p className="text-lg font-semibold">${result.costBasis.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Capital Gain:</p>
              <p className={`text-lg font-semibold ${result.capitalGain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${result.capitalGain.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Tax Rate ({result.holdingPeriod}):</p>
              <p className="text-lg font-semibold">{result.taxRate}%</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Estimated Tax:</p>
              <p className="text-lg font-semibold text-red-600">${result.taxAmount.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">After-Tax Return:</p>
              <p className="text-xl font-bold text-green-600">${result.afterTaxReturn.toFixed(2)}</p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> This is an estimate based on current federal tax rates. 
              State taxes and other factors may affect your actual tax liability.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
