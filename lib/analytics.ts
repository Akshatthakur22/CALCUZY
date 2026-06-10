export interface ToolAnalyticsInfo {
  name: string
  category: string
}

/** Map tool routes (no trailing slash) to GA4 event parameters */
export const TOOL_PATH_MAP: Record<string, ToolAnalyticsInfo> = {
  '/age-calculator': { name: 'Age Calculator', category: 'calculators' },
  '/bmi-calculator': { name: 'BMI Calculator', category: 'health' },
  '/date-difference': { name: 'Date Difference Calculator', category: 'calculators' },
  '/random-number-generator': { name: 'Random Number Generator', category: 'calculators' },
  '/unit-converter': { name: 'Unit Converter', category: 'calculators' },
  '/capital-gains-calculator': { name: 'Capital Gains Calculator', category: 'finance' },
  '/crypto-tax-calculator': { name: 'Crypto Tax Calculator', category: 'finance' },
  '/index-fund-return-calculator': { name: 'Index Fund Return Calculator', category: 'finance' },
  '/rent-affordability-calculator': { name: 'Rent Affordability Calculator', category: 'finance' },
  '/property-tax-estimator': { name: 'Property Tax Estimator', category: 'finance' },
  '/paint-cost-calculator': { name: 'Paint Cost Calculator', category: 'calculators' },
  '/will-generator': { name: 'Will Generator', category: 'generators' },
  '/nda-generator': { name: 'NDA Generator', category: 'generators' },
  '/ovulation-calculator': { name: 'Ovulation Calculator', category: 'health' },
  '/password-tools': { name: 'Password Tools', category: 'utilities' },
  '/days-until-christmas': { name: 'Christmas Countdown', category: 'countdowns' },
  '/days-until-new-year': { name: 'New Year Countdown', category: 'countdowns' },
  '/days-until-halloween': { name: 'Halloween Countdown', category: 'countdowns' },
  '/thanksgiving-countdown': { name: 'Thanksgiving Countdown', category: 'countdowns' },
  '/easter-countdown': { name: 'Easter Countdown', category: 'countdowns' },
  '/black-friday-countdown': { name: 'Black Friday Countdown', category: 'countdowns' },
}

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return pathname
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
}

export function getToolFromPath(pathname: string): ToolAnalyticsInfo | undefined {
  return TOOL_PATH_MAP[normalizePath(pathname)]
}

export function trackCalculatorUsed(params: {
  tool_name: string
  tool_category: string
  page_path?: string
}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  window.gtag('event', 'calculator_used', {
    tool_name: params.tool_name,
    tool_category: params.tool_category,
    page_path: params.page_path ?? window.location.pathname,
  })
}

const CALCULATE_BUTTON_PATTERN = /calculate|generate|compute|convert|estimate/i

export function isCalculateButton(label: string): boolean {
  return CALCULATE_BUTTON_PATTERN.test(label)
}
