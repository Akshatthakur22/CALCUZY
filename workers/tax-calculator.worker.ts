// Web Worker for capital gains tax calculations
// This moves heavy calculations off the main thread to prevent UI blocking

interface TaxCalculationInput {
  buyPrice: number
  sellPrice: number
  annualIncome: number
  holdingPeriod: 'short-term' | 'long-term'
  filingStatus: 'single' | 'married'
  taxYear: number
}

interface TaxCalculationResult {
  proceeds: number
  costBasis: number
  capitalGain: number
  taxRate: number
  taxAmount: number
  afterTaxReturn: number
  holdingPeriod: 'short-term' | 'long-term'
  returnPercentage: number
  effectiveTaxRate: number
  marginalTaxRate: number
  niitTax: number
  totalTax: number
  stateTaxEstimate: number
  processingTime: number
}

// Tax brackets for different years (can be extended)
const taxBrackets = {
  2026: {
    shortTerm: {
      single: [
        { min: 0, max: 11000, rate: 10 },
        { min: 11001, max: 44725, rate: 12 },
        { min: 44726, max: 95375, rate: 22 },
        { min: 95376, max: 182050, rate: 24 },
        { min: 182051, max: 231250, rate: 32 },
        { min: 231251, max: 578125, rate: 35 },
        { min: 578126, max: Infinity, rate: 37 }
      ],
      married: [
        { min: 0, max: 22000, rate: 10 },
        { min: 22001, max: 89450, rate: 12 },
        { min: 89451, max: 190750, rate: 22 },
        { min: 190751, max: 364200, rate: 24 },
        { min: 364201, max: 462500, rate: 32 },
        { min: 462501, max: 693750, rate: 35 },
        { min: 693751, max: Infinity, rate: 37 }
      ]
    },
    longTerm: {
      single: [
        { min: 0, max: 44625, rate: 0 },
        { min: 44626, max: 492300, rate: 15 },
        { min: 492301, max: Infinity, rate: 20 }
      ],
      married: [
        { min: 0, max: 89250, rate: 0 },
        { min: 89251, max: 553850, rate: 15 },
        { min: 553851, max: Infinity, rate: 20 }
      ]
    }
  }
}

function getTaxRate(
  income: number,
  filingStatus: 'single' | 'married',
  holdingPeriod: 'short-term' | 'long-term',
  taxYear: number = 2026
): number {
  const brackets = taxBrackets[taxYear as keyof typeof taxBrackets]
  const periodKey = holdingPeriod === 'short-term' ? 'shortTerm' : 'longTerm'
  const periodBrackets = brackets[periodKey]
  const statusBrackets = periodBrackets[filingStatus]

  for (const bracket of statusBrackets) {
    if (income >= bracket.min && income <= bracket.max) {
      return bracket.rate
    }
  }
  
  return 37 // Default to highest rate
}

function calculateNIIT(income: number, capitalGain: number): number {
  // Net Investment Income Tax (3.8%) for high-income taxpayers
  const thresholds = {
    single: 200000,
    married: 250000
  }
  
  const threshold = thresholds.single // Default to single
  const modifiedAGI = income + capitalGain
  
  if (modifiedAGI > threshold) {
    const excessIncome = Math.min(modifiedAGI - threshold, capitalGain)
    return excessIncome * 0.038
  }
  
  return 0
}

function estimateStateTax(capitalGain: number, state: string = 'CA'): number {
  // Simplified state tax estimation (can be enhanced)
  const stateRates: Record<string, number> = {
    'CA': 0.133, // California highest rate
    'NY': 0.109, // New York highest rate
    'TX': 0,     // Texas - no state income tax
    'FL': 0,     // Florida - no state income tax
    'WA': 0,     // Washington - no state income tax
    'default': 0.05 // Average state tax rate
  }
  
  const rate = stateRates[state] || stateRates.default
  return capitalGain * rate
}

function performCalculation(input: TaxCalculationInput): TaxCalculationResult {
  const startTime = performance.now()
  
  const { buyPrice, sellPrice, annualIncome, holdingPeriod, filingStatus, taxYear } = input
  
  // Basic calculations
  const proceeds = sellPrice
  const costBasis = buyPrice
  const capitalGain = proceeds - costBasis
  
  // Tax calculations
  const marginalTaxRate = getTaxRate(annualIncome, filingStatus, holdingPeriod, taxYear)
  const taxAmount = Math.max(0, capitalGain * (marginalTaxRate / 100))
  
  // Additional taxes
  const niitTax = calculateNIIT(annualIncome, capitalGain)
  const stateTaxEstimate = estimateStateTax(capitalGain)
  const totalTax = taxAmount + niitTax + stateTaxEstimate
  
  // Final calculations
  const afterTaxReturn = proceeds - costBasis - totalTax
  const returnPercentage = costBasis > 0 ? ((proceeds - costBasis) / costBasis) * 100 : 0
  const effectiveTaxRate = capitalGain > 0 ? (totalTax / capitalGain) * 100 : 0
  
  const processingTime = performance.now() - startTime
  
  return {
    proceeds,
    costBasis,
    capitalGain,
    taxRate: marginalTaxRate,
    taxAmount,
    afterTaxReturn,
    holdingPeriod,
    returnPercentage,
    effectiveTaxRate,
    marginalTaxRate,
    niitTax,
    totalTax,
    stateTaxEstimate,
    processingTime
  }
}

// Handle messages from main thread
self.addEventListener('message', (event: MessageEvent<TaxCalculationInput>) => {
  try {
    const result = performCalculation(event.data)
    
    // Send result back to main thread
    self.postMessage({
      success: true,
      result,
      timestamp: Date.now()
    })
  } catch (error) {
    // Send error back to main thread
    self.postMessage({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      timestamp: Date.now()
    })
  }
})

// Handle worker termination
self.addEventListener('close', () => {
  console.log('Tax calculator worker terminated')
})
