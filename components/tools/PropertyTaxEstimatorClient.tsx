'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/Card'

interface CalculationResult {
  propertyValue: number
  taxRate: number
  exemptions: number
  taxableValue: number
  annualTax: number
  monthlyTax: number
  effectiveRate: number
}

export default function PropertyTaxEstimatorClient() {
  const [propertyValue, setPropertyValue] = useState('')
  const [taxRate, setTaxRate] = useState('1.2')
  const [exemptions, setExemptions] = useState('')
  const [customRate, setCustomRate] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [result, setResult] = useState<CalculationResult | null>(null)
  const [error, setError] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)

  const calculate = () => {
    const value = parseFloat(propertyValue) || 0
    const rate = parseFloat(customRate || taxRate) || 0
    const exempt = parseFloat(exemptions) || 0

    if (value <= 0) {
      setError('Please enter a valid property value')
      return
    }

    if (rate <= 0) {
      setError('Please enter a valid tax rate')
      return
    }

    const taxableValue = Math.max(0, value - exempt)
    const annualTax = (taxableValue * rate) / 100
    const monthlyTax = annualTax / 12
    const effectiveRate = value > 0 ? (annualTax / value) * 100 : 0

    setResult({
      propertyValue: value,
      taxRate: rate,
      exemptions: exempt,
      taxableValue,
      annualTax,
      monthlyTax,
      effectiveRate
    })
    setError('')
  }

  useEffect(() => {
    if (propertyValue && (customRate || taxRate)) {
      calculate()
    }
  }, [propertyValue, customRate, taxRate, exemptions])

  return (
    <Card className="max-w-4xl mx-auto mb-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary-text mb-2">
            Property Tax Estimator
          </h1>
          <p className="text-secondary-text">
            Calculate your annual and monthly property taxes with location-based comparisons
          </p>
        </div>

        {/* Property Information */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-primary-text">Property Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-primary-text font-medium mb-2">
                Property Value *
                <span className="text-secondary-text font-normal ml-2">e.g., $500,000</span>
              </label>
              <input
                type="number"
                value={propertyValue}
                onChange={(e) => setPropertyValue(e.target.value)}
                placeholder="Enter property value"
                className="input-field"
                min="0"
                step="1000"
                autoFocus
              />
            </div>

            <div>
              <label className="block text-primary-text font-medium mb-2">
                Tax Rate (%)
                <span className="text-secondary-text font-normal ml-2">e.g., 1.2</span>
              </label>
              <input
                type="number"
                value={customRate || taxRate}
                onChange={(e) => setCustomRate(e.target.value)}
                placeholder="Enter tax rate"
                className="input-field"
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <div>
            <label className="block text-primary-text font-medium mb-2">
              Exemptions
              <span className="text-secondary-text font-normal ml-2">e.g., $50,000</span>
            </label>
            <input
              type="number"
              value={exemptions}
              onChange={(e) => setExemptions(e.target.value)}
              placeholder="Enter exemption amount"
              className="input-field"
              min="0"
              step="1000"
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

        {/* Calculate Button */}
        <button
          onClick={calculate}
          className="w-full btn-primary"
        >
          Calculate Property Tax
        </button>

        {/* Results */}
        {result && (
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-medium text-primary-text mb-4">Tax Calculation Results</h3>
              
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
          </div>
        )}
      </div>
    </Card>
  )
}
