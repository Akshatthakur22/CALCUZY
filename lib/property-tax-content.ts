export interface PropertyTaxExample {
  title: string
  value: number
  rate: number
  exemptions: number
  annualTax: number
  monthlyTax: number
  interpretation: string
}

export const PROPERTY_TAX_FAQS = [
  {
    question: 'How does this estimator calculate tax?',
    answer:
      'Taxable value = property value minus exemptions (not below zero). Annual tax = taxable value × (rate ÷ 100). Monthly tax = annual ÷ 12. Effective rate = annual tax ÷ full property value × 100.',
  },
  {
    question: 'What tax rate should I enter?',
    answer:
      'Use the combined effective rate for your jurisdiction—county, city, school district, and special levies. U.S. effective rates often fall roughly between 0.5% and 2.5% of value but vary widely. Your assessor or last tax bill is the best source.',
  },
  {
    question: 'Assessed value vs market value?',
    answer:
      'Tax bills usually use assessed value, which may differ from sale price. Some states apply an assessment ratio (e.g., a fraction of market value). Enter what you know and confirm with your county assessor.',
  },
  {
    question: 'What exemptions can I include?',
    answer:
      'Enter total dollar reductions you qualify for—homestead, senior, veteran, or disability exemptions where offered. Rules and amounts differ by state and county.',
  },
  {
    question: 'Does this include all local fees?',
    answer:
      'No. Special assessments, Mello-Roos, stormwater fees, and bond measures may appear on real bills but are not modeled unless you fold them into your rate manually.',
  },
  {
    question: 'How do I find my local property tax rate?',
    answer:
      'Check your county assessor or tax collector website, your most recent tax bill, or your closing disclosure if you recently bought. Many counties publish millage rates or an effective rate calculator.',
  },
  {
    question: 'Why did my tax jump after buying a home?',
    answer:
      'Purchases can trigger reassessment to market value in some jurisdictions. Exemptions may reset until you file homestead paperwork. Run before-and-after scenarios with this tool.',
  },
  {
    question: 'Can I deduct property tax on my federal return?',
    answer:
      'Itemizers may deduct state and local property taxes subject to federal SALT limits and current IRS rules. This varies by filing status and tax year—consult a tax professional.',
  },
  {
    question: 'What is an effective tax rate?',
    answer:
      'Effective rate = annual tax ÷ full property value. It helps compare homes in different counties even when nominal millage rates look similar.',
  },
  {
    question: 'Is this tax or financial advice?',
    answer:
      'No. This is a simplified budgeting calculator. For appeals, deductions, or investment decisions, consult your county assessor or a qualified tax professional.',
  },
]

export const PROPERTY_TAX_EXAMPLES: PropertyTaxExample[] = [
  {
    title: 'Suburban home with homestead exemption',
    value: 350000,
    rate: 1.2,
    exemptions: 25000,
    annualTax: 3900,
    monthlyTax: 325,
    interpretation:
      '($350,000 − $25,000) × 0.012 = $3,900/year. Budget ~$325/month for escrow—not including insurance or HOA.',
  },
  {
    title: 'Higher-rate jurisdiction',
    value: 280000,
    rate: 2.1,
    exemptions: 0,
    annualTax: 5880,
    monthlyTax: 490,
    interpretation:
      'No exemption: $280,000 × 0.021 = $5,880/year. Effective rate equals nominal rate when exemptions are zero.',
  },
  {
    title: 'Recently purchased home (reassessed)',
    value: 520000,
    rate: 1.05,
    exemptions: 40000,
    annualTax: 5040,
    monthlyTax: 420,
    interpretation:
      'After purchase, assessed value may match sale price. ($520,000 − $40,000) × 0.0105 = $5,040/year—compare to what the seller paid at a lower assessment.',
  },
  {
    title: 'Condo with lower rate, no exemption yet',
    value: 195000,
    rate: 0.95,
    exemptions: 0,
    annualTax: 1852.5,
    monthlyTax: 154.38,
    interpretation:
      'Smaller value but still verify whether HOA fees cover any community taxes separately from this estimate.',
  },
  {
    title: 'Senior exemption scenario',
    value: 410000,
    rate: 1.35,
    exemptions: 75000,
    annualTax: 4522.5,
    monthlyTax: 376.88,
    interpretation:
      'Larger exemption reduces taxable base to $335,000. Confirm senior exemption filing deadlines with your assessor—amounts are illustrative.',
  },
]

export const PROPERTY_TAX_MISTAKES = [
  {
    title: 'Using Zestimate instead of assessed value',
    description: 'Listing sites show market estimates; tax bills follow assessor rules. Use your assessment notice when available.',
  },
  {
    title: 'Forgetting special district levies',
    description: 'School bonds and municipal districts add to the headline rate. A 1% base rate plus 0.3% in districts is 1.3% combined.',
  },
  {
    title: 'Assuming exemptions apply automatically',
    description: 'Homestead and other exemptions usually require an application. Until approved, budget without them.',
  },
  {
    title: 'Comparing monthly tax without insurance',
    description: 'Escrow often bundles tax and insurance. This tool estimates tax only.',
  },
]

export const PROPERTY_TAX_REFERENCES = [
  {
    name: 'Tax Foundation — Property taxes by state and county',
    url: 'https://taxfoundation.org/data/all/state/property-taxes-by-state-county/',
  },
  {
    name: 'IRS — Topic 503 Deductible taxes',
    url: 'https://www.irs.gov/taxtopics/tc503',
  },
  {
    name: 'Nolo — How property taxes are calculated',
    url: 'https://www.nolo.com/legal-encyclopedia/how-property-taxes-are-calculated.html',
  },
  {
    name: 'U.S. Census — Property tax statistics',
    url: 'https://www.census.gov/programs-surveys/economic-census.html',
  },
]

export const PROPERTY_TAX_RELATED = [
  { href: '/rent-affordability-calculator', name: 'Rent Affordability Calculator', description: 'Compare renting vs carrying costs.' },
  { href: '/index-fund-return-calculator', name: 'Index Fund Return Calculator', description: 'Model down-payment opportunity cost.' },
  { href: '/capital-gains-calculator', name: 'Capital Gains Tax Calculator', description: 'Estimate tax when selling investments for a down payment.' },
  { href: '/paint-cost-calculator', name: 'Paint Cost Calculator', description: 'Budget move-in cosmetic updates.' },
  { href: '/unit-converter', name: 'Unit Converter', description: 'Convert square footage and land measurements.' },
]
