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
  comparisonData?: {
    state: string
    avgRate: number
    difference: number
  }[]
}

interface TaxRate {
  state: string
  county: string
  rate: number
  description: string
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

  const sampleTaxRates: TaxRate[] = [
    { state: 'California', county: 'Los Angeles', rate: 1.25, description: 'Average rate including local assessments' },
    { state: 'Texas', county: 'Harris', rate: 2.18, description: 'No state income tax, higher property taxes' },
    { state: 'Florida', county: 'Miami-Dade', rate: 0.98, description: 'Below national average' },
    { state: 'New York', county: 'Westchester', rate: 1.89, description: 'High property values, moderate rates' },
    { state: 'Illinois', county: 'Cook', rate: 2.10, description: 'Chicago area with local assessments' },
    { state: 'Arizona', county: 'Maricopa', rate: 0.62, description: 'Low property tax rates' },
    { state: 'New Jersey', county: 'Essex', rate: 2.42, description: 'Highest rates in the nation' },
    { state: 'Colorado', county: 'Denver', rate: 0.69, description: 'Moderate rates with growth limits' }
  ]

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
    const effectiveRate = (annualTax / value) * 100

    // Generate comparison data
    const comparisonData = sampleTaxRates
      .filter(loc => loc.rate !== rate)
      .slice(0, 3)
      .map(loc => ({
        state: loc.state,
        avgRate: loc.rate,
        difference: ((loc.rate - rate) / rate) * 100
      }))

    setResult({
      propertyValue: value,
      taxRate: rate,
      exemptions: exempt,
      taxableValue,
      annualTax,
      monthlyTax,
      effectiveRate,
      comparisonData
    })
    setError('')
  }

  const applyLocationRate = (location: TaxRate) => {
    setCustomRate(location.rate.toString())
    setSelectedLocation(`${location.county}, ${location.state}`)
    setTaxRate(location.rate.toString())
  }

  const getEffectiveRateColor = (rate: number) => {
    if (rate < 0.8) return 'text-green-600'
    if (rate < 1.2) return 'text-blue-600'
    if (rate < 1.8) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getEffectiveRateLabel = (rate: number) => {
    if (rate < 0.8) return 'Very Low'
    if (rate < 1.2) return 'Low'
    if (rate < 1.8) return 'Average'
    if (rate < 2.2) return 'High'
    return 'Very High'
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
                <span className="text-secondary-text font-normal ml-2">e.g., $350,000</span>
              </label>
              <input
                type="number"
                value={propertyValue}
                onChange={(e) => setPropertyValue(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="350000"
                step="1000"
              />
            </div>

            <div>
              <label className="block text-primary-text font-medium mb-2">
                Exemptions/Deductions
                <span className="text-secondary-text font-normal ml-2">e.g., $25,000</span>
              </label>
              <input
                type="number"
                value={exemptions}
                onChange={(e) => setExemptions(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="25000"
                step="1000"
              />
            </div>
          </div>
        </div>

        {/* Tax Rate Selection */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-primary-text">Tax Rate</h3>
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="px-4 py-2 border border-border rounded-lg hover:bg-card-hover transition-colors"
            >
              {showAdvanced ? 'Simple View' : 'Location-Based Rates'}
            </button>
          </div>

          {!showAdvanced ? (
            <div className="space-y-4">
              <div>
                <label className="block text-primary-text font-medium mb-2">
                  County Tax Rate (%)
                </label>
                <input
                  type="number"
                  value={customRate || taxRate}
                  onChange={(e) => setCustomRate(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="1.2"
                  step="0.01"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-primary-text font-medium mb-2">
                    Custom Rate (%)
                  </label>
                  <input
                    type="number"
                    value={customRate}
                    onChange={(e) => setCustomRate(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="1.2"
                    step="0.01"
                  />
                </div>
                <div>
                  <label className="block text-primary-text font-medium mb-2">
                    Selected Location
                  </label>
                  <input
                    type="text"
                    value={selectedLocation}
                    readOnly
                    className="w-full px-4 py-3 border border-border rounded-lg bg-secondary-bg"
                    placeholder="Select a location below"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-primary-text">Popular Locations</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {sampleTaxRates.map((location, index) => (
                    <button
                      key={index}
                      onClick={() => applyLocationRate(location)}
                      className={`p-3 border rounded-lg text-left transition-colors ${
                        selectedLocation.includes(location.state)
                          ? 'border-accent bg-accent/10'
                          : 'border-border hover:bg-card-hover'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-primary-text">
                            {location.county}, {location.state}
                          </div>
                          <div className="text-xs text-secondary-text">
                            {location.description}
                          </div>
                        </div>
                        <div className="text-lg font-bold text-accent">
                          {location.rate}%
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">💡 Tax Rate Information</h4>
            <div className="text-sm text-blue-700 space-y-1">
              <p>• Average US property tax rates range from 0.5% to 2.5% annually</p>
              <p>• Rates vary significantly by state and local assessments</p>
              <p>• Check your local county assessor&apos;s website for exact rates</p>
              <p>• Some areas have additional school or municipal district taxes</p>
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

        {/* Results */}
        {result && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 p-6">
              <h3 className="text-xl font-semibold text-primary-text mb-4">Property Tax Estimation</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-secondary-text">Property Value:</p>
                    <p className="text-2xl font-bold text-primary-text">
                      ${result.propertyValue.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-text">Taxable Value:</p>
                    <p className="text-2xl font-bold text-blue-600">
                      ${result.taxableValue.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-text">Tax Rate:</p>
                    <p className="text-2xl font-bold text-primary-text">
                      {result.taxRate}%
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-secondary-text">Annual Property Tax:</p>
                    <p className="text-2xl font-bold text-red-600">
                      ${result.annualTax.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-text">Monthly Property Tax:</p>
                    <p className="text-2xl font-bold text-red-600">
                      ${result.monthlyTax.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-text">Effective Rate:</p>
                    <p className={`text-2xl font-bold ${getEffectiveRateColor(result.effectiveRate)}`}>
                      {result.effectiveRate.toFixed(2)}%
                    </p>
                    <p className={`text-xs ${getEffectiveRateColor(result.effectiveRate)}`}>
                      {getEffectiveRateLabel(result.effectiveRate)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tax Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-medium text-green-800 mb-2">Monthly Payment</h4>
                <p className="text-2xl font-bold text-green-600">
                  ${result.monthlyTax.toFixed(2)}
                </p>
                <p className="text-sm text-green-700">
                  Equivalent to ${(result.monthlyTax * 30).toFixed(2)} per day
                </p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-medium text-yellow-800 mb-2">Annual Impact</h4>
                <p className="text-2xl font-bold text-yellow-600">
                  ${result.annualTax.toFixed(0)}
                </p>
                <p className="text-sm text-yellow-700">
                  {(result.annualTax / 12).toFixed(2)}% of monthly income (assuming $5k/month)
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-medium text-purple-800 mb-2">10-Year Projection</h4>
                <p className="text-2xl font-bold text-purple-600">
                  ${(result.annualTax * 10).toLocaleString()}
                </p>
                <p className="text-sm text-purple-700">
                  Assuming constant rate and value
                </p>
              </div>
            </div>

            {/* Location Comparison */}
            {result.comparisonData && result.comparisonData.length > 0 && (
              <div className="p-4 bg-secondary-bg rounded-lg">
                <h4 className="font-medium text-primary-text mb-3">Location Comparison</h4>
                <div className="space-y-2">
                  {result.comparisonData.map((location, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-white rounded border border-gray-200">
                      <div>
                        <span className="font-medium text-primary-text">{location.state}</span>
                        <span className="text-sm text-secondary-text ml-2">
                          ({location.avgRate}% rate)
                        </span>
                      </div>
                      <div className={`text-sm font-medium ${
                        location.difference > 0 ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {location.difference > 0 ? '+' : ''}{location.difference.toFixed(1)}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tax Planning Tips */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-800 mb-3">💰 Tax Planning Tips</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
                <div>
                  <p className="font-medium mb-1">Exemptions & Deductions:</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Homestead exemption (primary residence)</li>
                    <li>• Senior citizen discounts</li>
                    <li>• Veteran exemptions</li>
                    <li>• Disability exemptions</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-1">Appeal Process:</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Review your assessment annually</li>
                    <li>• File appeals by local deadlines</li>
                    <li>• Gather comparable property data</li>
                    <li>• Consider professional appraisal</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-yellow-800 mb-1">
                    Important Disclaimer
                  </p>
                  <p className="text-sm text-yellow-700">
                    This is an estimate based on the information provided. Actual property taxes may vary 
                    based on local assessments, special districts, school bonds, and other factors. 
                    Contact your local tax authority for exact amounts and available exemptions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
