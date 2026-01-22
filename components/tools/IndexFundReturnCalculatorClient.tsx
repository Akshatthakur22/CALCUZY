'use client'

import { useState } from 'react'

interface CalculationResult {
  totalInvestment: number
  finalValue: number
    totalReturns: number
    cagr: number
    totalGain: number
    gainPercentage: number
}

export default function IndexFundReturnCalculatorClient() {
  const [initialInvestment, setInitialInvestment] = useState('')
  const [monthlySIP, setMonthlySIP] = useState('')
  const [expectedReturn, setExpectedReturn] = useState('')
  const [years, setYears] = useState('')
  const [result, setResult] = useState<CalculationResult | null>(null)

  const calculate = () => {
    const initial = parseFloat(initialInvestment) || 0
    const monthly = parseFloat(monthlySIP) || 0
    const returnRate = parseFloat(expectedReturn) || 0
    const yearsNum = parseFloat(years) || 0

    if (initial <= 0 && monthly <= 0 || yearsNum <= 0) return

    const monthlyRate = returnRate / 100 / 12
    const months = yearsNum * 12

    // Calculate future value of initial investment
    const futureValueInitial = initial * Math.pow(1 + returnRate / 100, yearsNum)

    // Calculate future value of monthly SIP
    let futureValueSIP = 0
    if (monthly > 0) {
      futureValueSIP = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
    }

    const finalValue = futureValueInitial + futureValueSIP
    const totalInvestment = initial + (monthly * months)
    const totalReturns = finalValue - totalInvestment
    const gainPercentage = totalInvestment > 0 ? (totalReturns / totalInvestment) * 100 : 0

    // Calculate CAGR
    let cagr = 0
    if (initial > 0 && finalValue > 0 && yearsNum > 0) {
      cagr = (Math.pow(finalValue / initial, 1 / yearsNum) - 1) * 100
    } else if (totalInvestment > 0 && finalValue > 0 && yearsNum > 0) {
      // For SIP-only investments, use total investment as base
      cagr = (Math.pow(finalValue / totalInvestment, 1 / yearsNum) - 1) * 100
    }

    setResult({
      totalInvestment,
      finalValue,
      totalReturns,
      cagr,
      totalGain: totalReturns,
      gainPercentage
    })
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Initial Investment ($)
          </label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
            className="input-field"
            placeholder="10000"
            step="100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Investment/SIP ($)
          </label>
          <input
            type="number"
            value={monthlySIP}
            onChange={(e) => setMonthlySIP(e.target.value)}
            className="input-field"
            placeholder="500"
            step="50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Expected Annual Return (%)
          </label>
          <input
            type="number"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
            className="input-field"
            placeholder="10"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Investment Period (Years)
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="input-field"
            placeholder="10"
            step="1"
            min="1"
            max="50"
          />
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
      >
        Calculate Returns
      </button>

      {result && (
        <div className="mt-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Investment Growth Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Total Investment:</p>
              <p className="text-lg font-semibold">${result.totalInvestment.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Final Value:</p>
              <p className="text-lg font-semibold text-green-600">${result.finalValue.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Returns:</p>
              <p className={`text-lg font-semibold ${result.totalReturns >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${result.totalReturns.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Return Percentage:</p>
              <p className={`text-lg font-semibold ${result.gainPercentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {result.gainPercentage.toFixed(2)}%
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-gray-600">Compound Annual Growth Rate (CAGR):</p>
              <p className={`text-2xl font-bold ${result.cagr >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {result.cagr.toFixed(2)}%
              </p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Growth Projection:</strong> Your investment will grow from ${result.totalInvestment.toFixed(2)} 
              to ${result.finalValue.toFixed(2)} over {years} years, with a CAGR of {result.cagr.toFixed(2)}%.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
