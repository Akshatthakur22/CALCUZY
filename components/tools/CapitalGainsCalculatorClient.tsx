'use client'

import { useState } from 'react'
import { 
  ToolWrapper, 
  ToolInput, 
  ToolButton, 
  ToolGrid, 
  ProgressBar,
  ResultCard,
} from '@/components/ToolWrapper'
import { VisualGauge } from '@/components/ToolWrapper'
import CopyButton from '@/components/CopyButton'
import { useCopyToClipboard } from '@/components/Toast'

interface CalculationResult {
  proceeds: number
  costBasis: number
  capitalGain: number
  taxRate: number
  taxAmount: number
  afterTaxReturn: number
  holdingPeriod: 'short-term' | 'long-term'
  returnPercentage: number
}

export default function CapitalGainsCalculatorClient() {
  const [buyPrice, setBuyPrice] = useState('')
  const [sellPrice, setSellPrice] = useState('')
  const [holdingPeriod, setHoldingPeriod] = useState<'short-term' | 'long-term'>('short-term')
  const [annualIncome, setAnnualIncome] = useState('')
  const [result, setResult] = useState<CalculationResult | null>(null)
  const copy = useCopyToClipboard()

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
    const returnPercentage = ((proceeds - costBasis) / costBasis) * 100

    setResult({
      proceeds,
      costBasis,
      capitalGain,
      taxRate,
      taxAmount,
      afterTaxReturn,
      holdingPeriod,
      returnPercentage
    })
  }

  const handleShareLink = async () => {
    if (!result) return
    const params = new URLSearchParams({
      buy: buyPrice,
      sell: sellPrice,
      period: holdingPeriod,
      income: annualIncome
    })
    const shareUrl = `https://calcuzy.app/capital-gains-calculator?${params.toString()}`
    await copy(shareUrl, 'Link copied! Share your calculation.')
  }

  const getGaugeColor = (returnPct: number): 'emerald' | 'blue' | 'amber' | 'red' => {
    if (returnPct >= 20) return 'emerald'
    if (returnPct >= 0) return 'blue'
    if (returnPct >= -10) return 'amber'
    return 'red'
  }

  return (
    <ToolWrapper>
      <ToolGrid columns={2}>
        <ToolInput
          id="buy-price"
          label="Purchase Price ($)"
          type="number"
          value={buyPrice}
          onChange={setBuyPrice}
          placeholder="1000"
          step={0.01}
          autoFocus
          inputMode="decimal"
          helpText="Original cost of the investment"
        />
        <ToolInput
          id="sell-price"
          label="Sale Price ($)"
          type="number"
          value={sellPrice}
          onChange={setSellPrice}
          placeholder="1500"
          step={0.01}
          inputMode="decimal"
          helpText="Amount received from selling"
        />
        <ToolInput
          id="holding-period"
          label="Holding Period"
          type="select"
          value={holdingPeriod}
          onChange={(val) => setHoldingPeriod(val as 'short-term' | 'long-term')}
          options={[
            { value: 'short-term', label: 'Short-term (≤ 1 year)' },
            { value: 'long-term', label: 'Long-term (> 1 year)' }
          ]}
        />
        <ToolInput
          id="annual-income"
          label="Annual Income ($)"
          type="number"
          value={annualIncome}
          onChange={setAnnualIncome}
          placeholder="50000"
          step={1000}
          inputMode="numeric"
          helpText="Used to determine tax bracket"
        />
      </ToolGrid>

      <ToolButton onClick={calculate}>
        Calculate Capital Gains Tax
      </ToolButton>

      {result && (
        <div className="space-y-6 fade-in">
          {/* Visual Gauge for Return Percentage */}
          <div className="flex flex-col items-center py-6">
            <VisualGauge
              value={Math.abs(result.returnPercentage)}
              max={100}
              label={`${result.returnPercentage >= 0 ? '+' : ''}${result.returnPercentage.toFixed(1)}%`}
            />
            <p className="text-sm text-slate-500 mt-2">Return on Investment</p>
          </div>

          {/* Tax Rate Progress Bar */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <ProgressBar
              value={result.taxRate}
              max={40}
              label={`${result.holdingPeriod === 'long-term' ? 'Long-term' : 'Short-term'} Capital Gains Tax Rate`}
              color={result.taxRate <= 15 ? 'emerald' : result.taxRate <= 24 ? 'amber' : 'red'}
            />
          </div>

          {/* Result Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <ResultCard
              title="Capital Gain"
              value={`$${result.capitalGain.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
              trend={result.capitalGain >= 0 ? 'up' : 'down'}
              color={result.capitalGain >= 0 ? 'emerald' : 'red'}
            />
            <ResultCard
              title="Est. Tax Owed"
              value={`$${result.taxAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
              subtitle={`at ${result.taxRate}% rate`}
              color="red"
            />
            <ResultCard
              title="After-Tax Return"
              value={`$${result.afterTaxReturn.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
              trend={result.afterTaxReturn >= 0 ? 'up' : 'down'}
              color={result.afterTaxReturn >= 0 ? 'emerald' : 'red'}
            />
            <ResultCard
              title="Sale Proceeds"
              value={`$${result.proceeds.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
              color="slate"
            />
            <ResultCard
              title="Cost Basis"
              value={`$${result.costBasis.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
              color="slate"
            />
            <ResultCard
              title="Holding Period"
              value={result.holdingPeriod === 'long-term' ? '> 1 Year' : '≤ 1 Year'}
              color={result.holdingPeriod === 'long-term' ? 'emerald' : 'amber'}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <CopyButton
              text={`Capital Gain: $${result.capitalGain.toFixed(2)} | Tax: $${result.taxAmount.toFixed(2)} (${result.taxRate}%) | After-Tax: $${result.afterTaxReturn.toFixed(2)}`}
              label="Copy Results"
              variant="button"
              successMessage="Results copied to clipboard!"
            />
            <button
              onClick={handleShareLink}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 
                bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share Link
            </button>
          </div>
          
          {/* Info Note */}
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> This is an estimate based on 2024 federal tax rates. 
              State taxes, NIIT (3.8%), and other factors may affect your actual tax liability. 
              Consult a tax professional for personalized advice.
            </p>
          </div>
        </div>
      )}
    </ToolWrapper>
  )
}
