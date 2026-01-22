'use client'

import { useState } from 'react'

interface CalculationResult {
  propertyValue: number
  taxRate: number
  exemptions: number
  taxableValue: number
  annualTax: number
  monthlyTax: number
}

export default function PropertyTaxEstimatorClient() {
  const [propertyValue, setPropertyValue] = useState('')
  const [taxRate, setTaxRate] = useState('1.2')
  const [exemptions, setExemptions] = useState('')
  const [result, setResult] = useState<CalculationResult | null>(null)

  const calculate = () => {
    const value = parseFloat(propertyValue) || 0
    const rate = parseFloat(taxRate) || 0
    const exempt = parseFloat(exemptions) || 0

    if (value <= 0 || rate <= 0) return

    const taxableValue = Math.max(0, value - exempt)
    const annualTax = (taxableValue * rate) / 100
    const monthlyTax = annualTax / 12

    setResult({
      propertyValue: value,
      taxRate: rate,
      exemptions: exempt,
      taxableValue,
      annualTax,
      monthlyTax
    })
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Property Value ($)
          </label>
          <input
            type="number"
            value={propertyValue}
            onChange={(e) => setPropertyValue(e.target.value)}
            className="input-field"
            placeholder="350000"
            step="1000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            County Tax Rate (%)
          </label>
          <input
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
            className="input-field"
            placeholder="1.2"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Exemptions ($)
          </label>
          <input
            type="number"
            value={exemptions}
            onChange={(e) => setExemptions(e.target.value)}
            className="input-field"
            placeholder="25000"
            step="1000"
          />
        </div>

        <div className="md:col-span-2">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Average US Property Tax Rates:</strong> Varies by location - typically 0.5-2.5% of property value annually. 
              Check your local county assessor&apos;s website for exact rates.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
      >
        Calculate Property Tax
      </button>

      {result && (
        <div className="mt-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Property Tax Estimation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Property Value:</p>
              <p className="text-lg font-semibold">${result.propertyValue.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Tax Rate:</p>
              <p className="text-lg font-semibold">{result.taxRate}%</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Exemptions:</p>
              <p className="text-lg font-semibold">${result.exemptions.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Taxable Value:</p>
              <p className="text-lg font-semibold text-blue-600">${result.taxableValue.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Annual Property Tax:</p>
              <p className="text-lg font-semibold text-red-600">${result.annualTax.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Monthly Property Tax:</p>
              <p className="text-lg font-semibold text-red-600">${result.monthlyTax.toFixed(2)}</p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Important:</strong> This is an estimate. Actual property taxes may vary based on 
              local assessments, special districts, and other factors. Contact your local tax authority for exact amounts.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
