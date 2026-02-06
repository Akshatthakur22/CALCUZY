import { headers } from 'next/headers'
import React from 'react'

export interface UserLocation {
  country: string
  currency: string
  taxYear: number
  timezone: string
  isUS: boolean
}

export interface LocalizationConfig {
  defaultCurrency: string
  defaultTaxYear: number
  dateFormat: string
  numberFormat: Intl.NumberFormatOptions
  currencyFormat: Intl.NumberFormatOptions
}

/**
 * Detect user location and preferences from request headers
 */
export async function detectUserLocation(): Promise<UserLocation> {
  try {
    const headersList = headers()
    
    // Get Cloudflare country header if available
    const cfCountry = headersList.get('cf-ipcountry')?.toLowerCase()
    
    // Get Accept-Language header
    const acceptLanguage = headersList.get('accept-language') || ''
    
    // Get timezone from various headers
    const timezone = headersList.get('x-timezone') || 
                   headersList.get('cf-timezone') || 
                   'America/New_York'

    // Determine country from various sources
    let country = 'US' // Default to US
    
    if (cfCountry) {
      country = cfCountry.toUpperCase()
    } else if (acceptLanguage) {
      // Parse Accept-Language header for country preference
      const langMatch = acceptLanguage.match(/en-[A-Z]{2}/i)
      if (langMatch) {
        country = langMatch[0].split('-')[1].toUpperCase()
      }
    }

    // Determine if user is from US
    const isUS = country === 'US' || 
                 ['USA', 'United States'].includes(country) ||
                 acceptLanguage.toLowerCase().includes('en-us')

    // Set currency based on location
    const currency = isUS ? 'USD' : 'EUR' // Default to EUR for non-US users
    
    // Set tax year based on current date and location
    const currentYear = new Date().getFullYear()
    const taxYear = isUS ? currentYear + 1 : currentYear // US uses next year for tax planning

    return {
      country,
      currency,
      taxYear,
      timezone,
      isUS
    }
  } catch (error) {
    // Fallback to US defaults if detection fails
    return {
      country: 'US',
      currency: 'USD',
      taxYear: 2026,
      timezone: 'America/New_York',
      isUS: true
    }
  }
}

/**
 * Get localization configuration based on user location
 */
export function getLocalizationConfig(location: UserLocation): LocalizationConfig {
  const isUS = location.isUS
  
  return {
    defaultCurrency: location.currency,
    defaultTaxYear: location.taxYear,
    dateFormat: isUS ? 'MM/DD/YYYY' : 'DD/MM/YYYY',
    numberFormat: {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: true
    },
    currencyFormat: {
      style: 'currency',
      currency: location.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }
  }
}

/**
 * Format currency based on user location
 */
export function formatCurrency(
  amount: number, 
  config: LocalizationConfig,
  currency?: string
): string {
  const formatter = new Intl.NumberFormat('en-US', {
    ...config.currencyFormat,
    currency: currency || config.defaultCurrency
  })
  
  return formatter.format(amount)
}

/**
 * Format numbers based on user location
 */
export function formatNumber(
  number: number, 
  config: LocalizationConfig
): string {
  const formatter = new Intl.NumberFormat('en-US', config.numberFormat)
  return formatter.format(number)
}

/**
 * Get US tax brackets for a specific year
 */
export function getUSTaxBrackets(year: number = 2026) {
  // These are projected rates for 2026 (inflation-adjusted estimates)
  const brackets = {
    2026: {
      shortTerm: [
        { min: 0, max: 11000, rate: 10 },
        { min: 11001, max: 44725, rate: 12 },
        { min: 44726, max: 95375, rate: 22 },
        { min: 95376, max: 182050, rate: 24 },
        { min: 182051, max: 231250, rate: 32 },
        { min: 231251, max: 578125, rate: 35 },
        { min: 578126, max: Infinity, rate: 37 }
      ],
      longTerm: [
        { min: 0, max: 44625, rate: 0 },
        { min: 44626, max: 492300, rate: 15 },
        { min: 492301, max: Infinity, rate: 20 }
      ],
      married: {
        shortTerm: [
          { min: 0, max: 22000, rate: 10 },
          { min: 22001, max: 89450, rate: 12 },
          { min: 89451, max: 190750, rate: 22 },
          { min: 190751, max: 364200, rate: 24 },
          { min: 364201, max: 462500, rate: 32 },
          { min: 462501, max: 693750, rate: 35 },
          { min: 693751, max: Infinity, rate: 37 }
        ],
        longTerm: [
          { min: 0, max: 89250, rate: 0 },
          { min: 89251, max: 553850, rate: 15 },
          { min: 553851, max: Infinity, rate: 20 }
        ]
      }
    }
  }
  
  return brackets[year as keyof typeof brackets] || brackets[2026]
}

/**
 * Calculate tax rate based on income and filing status
 */
export function calculateTaxRate(
  income: number,
  filingStatus: 'single' | 'married' = 'single',
  holdingPeriod: 'short-term' | 'long-term' = 'short-term',
  year: number = 2026
): number {
  const brackets = getUSTaxBrackets(year)
  const bracketKey = filingStatus === 'married' ? 'married' : 'default'
  const periodKey = holdingPeriod === 'short-term' ? 'shortTerm' : 'longTerm'
  
  let taxBrackets: { min: number; max: number; rate: number }[]
  
  if (bracketKey === 'married') {
    taxBrackets = brackets.married[periodKey]
  } else {
    taxBrackets = brackets[periodKey as keyof typeof brackets] as { min: number; max: number; rate: number }[]
  }
  
  for (const bracket of taxBrackets) {
    if (income >= bracket.min && income <= bracket.max) {
      return bracket.rate
    }
  }
  
  return 37 // Default to highest rate
}

/**
 * Get currency symbol based on currency code
 */
export function getCurrencySymbol(currency: string): string {
  const symbols: Record<string, string> = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
    CAD: 'C$',
    AUD: 'A$',
    CHF: 'CHF',
    CNY: '¥'
  }
  
  return symbols[currency] || '$'
}

/**
 * Convert amount between currencies (simplified - in production, use real exchange rates)
 */
export function convertCurrency(
  amount: number,
  fromCurrency: string,
  toCurrency: string
): number {
  // This is a simplified conversion - in production, integrate with real exchange rate API
  const exchangeRates: Record<string, Record<string, number>> = {
    USD: { EUR: 0.85, GBP: 0.73, JPY: 110.0, CAD: 1.25, AUD: 1.35, CHF: 0.92, CNY: 6.45 },
    EUR: { USD: 1.18, GBP: 0.86, JPY: 129.5, CAD: 1.47, AUD: 1.59, CHF: 1.08, CNY: 7.59 },
    GBP: { USD: 1.37, EUR: 1.16, JPY: 150.5, CAD: 1.71, AUD: 1.85, CHF: 1.26, CNY: 8.83 }
  }
  
  if (fromCurrency === toCurrency) return amount
  
  const rate = exchangeRates[fromCurrency]?.[toCurrency]
  if (!rate) {
    console.warn(`Exchange rate not available for ${fromCurrency} to ${toCurrency}`)
    return amount
  }
  
  return amount * rate
}

/**
 * Client-side detection using browser APIs
 */
export function detectUserLocationClient(): Promise<UserLocation> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      // Server-side fallback
      resolve({
        country: 'US',
        currency: 'USD',
        taxYear: 2026,
        timezone: 'America/New_York',
        isUS: true
      })
      return
    }

    // Use Intl API for timezone detection
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    
    // Use navigator.language for locale detection
    const language = navigator.language || 'en-US'
    const isUS = language === 'en-US' || timezone.includes('America')
    
    resolve({
      country: isUS ? 'US' : 'International',
      currency: isUS ? 'USD' : 'EUR',
      taxYear: isUS ? 2026 : new Date().getFullYear(),
      timezone,
      isUS
    })
  })
}

/**
 * Store user preferences in localStorage
 */
export function storeUserPreferences(preferences: Partial<UserLocation>): void {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem('calcuzy-user-preferences', JSON.stringify(preferences))
  } catch (error) {
    console.warn('Failed to store user preferences:', error)
  }
}

/**
 * Retrieve user preferences from localStorage
 */
export function getUserPreferences(): Partial<UserLocation> | null {
  if (typeof window === 'undefined') return null
  
  try {
    const stored = localStorage.getItem('calcuzy-user-preferences')
    return stored ? JSON.parse(stored) : null
  } catch (error) {
    console.warn('Failed to retrieve user preferences:', error)
    return null
  }
}

/**
 * React hook for using localization
 */
export function useLocalization() {
  const [location, setLocation] = React.useState<UserLocation | null>(null)
  const [config, setConfig] = React.useState<LocalizationConfig | null>(null)

  React.useEffect(() => {
    const loadLocation = async () => {
      // Try to get stored preferences first
      const stored = getUserPreferences()
      
      if (stored) {
        setLocation(stored as UserLocation)
        setConfig(getLocalizationConfig(stored as UserLocation))
      } else {
        // Detect location if no stored preferences
        const detected = await detectUserLocationClient()
        setLocation(detected)
        setConfig(getLocalizationConfig(detected))
        storeUserPreferences(detected)
      }
    }

    loadLocation()
  }, [])

  const updatePreferences = (newPreferences: Partial<UserLocation>) => {
    const updated = { ...location, ...newPreferences } as UserLocation
    setLocation(updated)
    setConfig(getLocalizationConfig(updated))
    storeUserPreferences(updated)
  }

  return {
    location,
    config,
    updatePreferences,
    formatCurrency: (amount: number, currency?: string) => 
      config ? formatCurrency(amount, config, currency) : `$${amount.toFixed(2)}`,
    formatNumber: (number: number) => 
      config ? formatNumber(number, config) : number.toLocaleString()
  }
}
