export interface RentAffordabilityFaq {
  question: string
  answer: string
}

export interface WorkedExample {
  title: string
  income: number
  rent: number
  expenses: number
  guideline: number
  recommendedMax: number
  rentPercent: number
  remaining: number
  status: 'comfortable' | 'moderate' | 'stretched'
  interpretation: string
}

export interface RelatedCalculator {
  href: string
  name: string
  description: string
}

export const RENT_AFFORDABILITY_FAQS: RentAffordabilityFaq[] = [
  {
    question: 'What is the 30% rule for rent?',
    answer:
      'The 30% rule is a guideline suggesting households spend no more than about 30% of gross monthly income on housing. It appears in U.S. housing policy and counseling materials as a cost burden benchmark—not a legal limit. In expensive markets, many renters exceed 30%; the rule still helps you measure how far you are from a widely cited standard.',
  },
  {
    question: 'Should I use gross or net income for rent calculations?',
    answer:
      'Most rent affordability guidelines, including this calculator’s default, use gross (pre-tax) income. For a conservative personal budget, factor taxes and payroll deductions into your monthly expenses or compare results to your actual take-home pay.',
  },
  {
    question: 'How much rent can I afford on a $50,000 salary?',
    answer:
      'A $50,000 gross annual salary is about $4,167 per month. At the 30% guideline, recommended maximum rent is approximately $1,250 per month before other expenses. Run your exact figures in the calculator and add other monthly bills before deciding.',
  },
  {
    question: 'What monthly expenses should I include besides rent?',
    answer:
      'Include minimum debt payments, insurance, groceries, transportation, phone, childcare, regular medical costs, and committed savings. Do not include rent in the expenses field—that belongs in desired rent.',
  },
  {
    question: 'Do landlords use the same 30% rule?',
    answer:
      'Landlords often use income multiples such as 2.5× to 3× monthly rent rather than a strict 30% rule. They also review credit, rental history, and documentation. Affordability on paper and approval on an application are related but not identical.',
  },
  {
    question: 'Is spending 40% of income on rent too much?',
    answer:
      'Spending above 40% of gross income on rent is labeled stretched in this calculator. It may work with low debt and strong savings but leaves less room for emergencies and rent increases.',
  },
  {
    question: 'Should utilities be included in rent or expenses?',
    answer:
      'Either add estimated utilities to desired rent or to monthly expenses, but avoid double-counting. Include electricity, gas, water, internet, parking, and pet fees when they are separate from base rent.',
  },
  {
    question: 'How do roommates affect rent affordability?',
    answer:
      'Use combined household income and total rent for the unit, then evaluate each person’s share against their individual income if needed. Splitting rent equally is common; income-proportional splits are another option.',
  },
  {
    question: 'Does this calculator work for hourly workers?',
    answer:
      'Yes. Estimate gross monthly income as hourly rate × average weekly hours × 52 ÷ 12. Use conservative hours if your schedule varies.',
  },
  {
    question: 'Can I afford rent while paying off debt?',
    answer:
      'Debt reduces cash available even when rent looks fine as a percentage of income. Enter debt payments in total monthly expenses and focus on remaining income. If remaining income is thin, a lower rent or debt payoff plan may matter more than hitting 30% exactly.',
  },
  {
    question: 'How does this calculator work?',
    answer:
      'Enter gross monthly income, desired rent, other monthly expenses, and a rent guideline percentage (30% by default). The tool shows recommended maximum rent, rent as a share of income, money left after rent and expenses, and a comfortable, moderate, or stretched status.',
  },
  {
    question: 'Is this rent calculator financial advice?',
    answer:
      'No. Calcuzy provides educational estimates for planning only. Consult a HUD-approved housing counselor or qualified financial professional for decisions affecting your lease or long-term finances.',
  },
]

export const RENT_AFFORDABILITY_STEPS = [
  { title: 'Enter gross income', description: 'Input your total monthly income before taxes.' },
  { title: 'Add desired rent', description: 'Enter the monthly rent you are considering.' },
  { title: 'List other expenses', description: 'Include non-rent bills so remaining income reflects real cash flow.' },
  { title: 'Set guideline %', description: 'Keep 30% or adjust the housing percentage target.' },
  { title: 'Review results', description: 'Compare recommended max rent, rent share of income, and affordability status.' },
]

export const RENT_AFFORDABILITY_TIPS = [
  'Build a true housing cost: rent plus renters insurance, utilities, parking, and pet fees',
  'Use gross for the guideline, net for sanity—if take-home is tight, trust take-home',
  'Keep at least one month’s rent in emergency savings before signing; two is better in unstable employment',
  'Ask about annual rent increases in the lease and rerun the calculator at +5% and +10%',
  'Factor commute cost—cheaper rent plus high transit costs may not save money',
  'Do not forget move-in cash: deposit, first month, and application fees are upfront, not monthly',
  'In expensive cities, many renters exceed 30%—know the trade-off to savings and emergencies',
  'Re-run the calculator when income, expenses, or rent changes',
]

export const RENT_AFFORDABILITY_HOW_IT_WORKS = [
  {
    title: 'Enter income and rent',
    description: 'Provide gross monthly income and the rent amount you want to check.',
  },
  {
    title: 'Subtract other bills',
    description: 'Add monthly expenses outside of rent to see what is left after housing.',
  },
  {
    title: 'Compare to the guideline',
    description: 'See recommended max rent, percent of income, and a simple status label.',
  },
]

export const RENT_AFFORDABILITY_EXAMPLES: WorkedExample[] = [
  {
    title: 'First job, moderate expenses',
    income: 4200,
    rent: 1200,
    expenses: 900,
    guideline: 30,
    recommendedMax: 1260,
    rentPercent: 28.6,
    remaining: 2100,
    status: 'comfortable',
    interpretation:
      'Rent sits below the 30% cap and leaves solid room after expenses. Confirm utilities and renters insurance if not included in rent.',
  },
  {
    title: 'Higher rent in a competitive market',
    income: 6500,
    rent: 2400,
    expenses: 1400,
    guideline: 30,
    recommendedMax: 1950,
    rentPercent: 36.9,
    remaining: 2700,
    status: 'moderate',
    interpretation:
      'You exceed the 30% guideline but remain under 40%. Workable if income is stable and you maintain an emergency fund—but you have less flexibility for rent increases.',
  },
  {
    title: 'High debt load',
    income: 5000,
    rent: 1400,
    expenses: 1800,
    guideline: 30,
    recommendedMax: 1500,
    rentPercent: 28,
    remaining: 1800,
    status: 'comfortable',
    interpretation:
      'The 30% rule says yes, but remaining income must cover food, gas, and irregular costs. After expenses, $3,200 is available for housing—rent is feasible, but the budget is tight.',
  },
  {
    title: 'Dual income household',
    income: 9000,
    rent: 2800,
    expenses: 2200,
    guideline: 30,
    recommendedMax: 2700,
    rentPercent: 31.1,
    remaining: 4000,
    status: 'moderate',
    interpretation:
      'Slightly above the 30% cap but strong remaining income. Ask whether the household could still pay rent if one income paused for several months.',
  },
  {
    title: 'Stretched budget',
    income: 3800,
    rent: 1700,
    expenses: 1100,
    guideline: 30,
    recommendedMax: 1140,
    rentPercent: 44.7,
    remaining: 1000,
    status: 'stretched',
    interpretation:
      'Nearly 45% of gross income goes to rent. Unless expenses fall or income rises soon, consider roommates, a smaller unit, or a longer commute.',
  },
  {
    title: 'Custom 25% guideline (aggressive saver)',
    income: 7200,
    rent: 1600,
    expenses: 1500,
    guideline: 25,
    recommendedMax: 1800,
    rentPercent: 22.2,
    remaining: 4100,
    status: 'comfortable',
    interpretation:
      'A stricter 25% target still accommodates this rent with margin—useful for renters prioritizing retirement contributions or an emergency fund.',
  },
]

export const RENT_AFFORDABILITY_MISTAKES = [
  {
    title: 'Using take-home income with a gross-income guideline',
    description:
      'Mixing definitions inflates how much rent you think you can afford. Match gross to 30%, or add estimated taxes to your expenses field.',
  },
  {
    title: 'Ignoring recurring costs beyond rent',
    description:
      'Insurance, parking, and pet rent can add hundreds per month. A cheap base rent is not always cheap housing.',
  },
  {
    title: 'Treating recommended max rent as a spending target',
    description:
      'It is a ceiling, not a goal. Staying under it improves savings and resilience.',
  },
  {
    title: 'Using best-case income for variable earners',
    description:
      'Commission-heavy or freelance income should use a conservative monthly average, not your best month.',
  },
  {
    title: 'Equating calculator results with landlord approval',
    description:
      'Income multiples and credit requirements vary. Apply with documentation ready.',
  },
  {
    title: 'Double-counting rent in expenses',
    description:
      'Rent belongs in desired rent, not in the expenses field.',
  },
]

export const RENT_AFFORDABILITY_PRACTICAL_USES = [
  'Apartment hunting—filter listings by recommended max rent before scheduling tours',
  'Lease renewal decisions—compare a proposed increase against unchanged income and rising expenses',
  'Relocation planning—weigh rent against commute and utility costs in a new city',
  'Roommate splits—run household totals, then divide rent by agreement',
  'Salary negotiation—quantify the housing gap before accepting a job in a high-rent market',
  'Annual budget check-ins—rerun after paying off a loan or adding childcare',
]

export const RENT_AFFORDABILITY_ADVANTAGES = [
  'Fast, transparent math with no account required',
  'Two lenses on affordability: percentage guideline plus remaining cash after expenses',
  'Adjustable housing guideline—not locked to 30%',
  'Plain-language status labels: comfortable, moderate, or stretched',
  'Expense-aware—reflects that affordability is not income-only',
  'Useful for comparing multiple rent points without rebuilding a spreadsheet',
]

export const RENT_AFFORDABILITY_LIMITATIONS = [
  'Uses gross income; high tax states may leave less take-home than the percentage suggests',
  'Does not model withholding or net pay automatically',
  'Landlord screening rules (often 2.5×–3× rent) differ from this tool',
  'Irregular income is simplified to a single monthly figure',
  'Utilities and fees must be entered manually if separate from rent',
  'Educational estimate only—not financial, legal, or tax advice',
]

export const RENT_AFFORDABILITY_REFERENCES = [
  {
    name: 'U.S. Department of Housing and Urban Development (HUD)',
    url: 'https://www.huduser.gov/portal/datasets/cp.html',
    note: 'Housing affordability standards and cost burden definitions',
  },
  {
    name: 'Consumer Financial Protection Bureau (CFPB)',
    url: 'https://www.consumerfinance.gov/housing/',
    note: 'Housing and rental resources for consumers',
  },
  {
    name: 'Harvard Joint Center for Housing Studies',
    url: 'https://www.jchs.harvard.edu/',
    note: 'Research on rental markets and household housing cost burdens',
  },
  {
    name: 'U.S. Bureau of Labor Statistics — Consumer Expenditure Surveys',
    url: 'https://www.bls.gov/cex/',
    note: 'How households allocate income across housing and other categories',
  },
  {
    name: 'HUD — Find a Housing Counselor',
    url: 'https://www.hud.gov/findhousingcounseling',
    note: 'HUD-approved housing counseling agencies',
  },
  {
    name: 'Federal Trade Commission (FTC)',
    url: 'https://consumer.ftc.gov/',
    note: 'Consumer guidance on renting and lease issues',
  },
]

export const RENT_AFFORDABILITY_RELATED: RelatedCalculator[] = [
  {
    href: '/property-tax-estimator',
    name: 'Property Tax Estimator',
    description: 'Estimate annual property tax when comparing renting versus buying.',
  },
  {
    href: '/index-fund-return-calculator',
    name: 'Index Fund Return Calculator',
    description: 'See how monthly savings from lower rent could grow over time.',
  },
  {
    href: '/capital-gains-calculator',
    name: 'Capital Gains Tax Calculator',
    description: 'Model tax on investment sales if you are funding a move from a brokerage account.',
  },
  {
    href: '/crypto-tax-calculator',
    name: 'Crypto Tax Calculator',
    description: 'Summarize crypto gains and losses for tax planning alongside housing costs.',
  },
  {
    href: '/paint-cost-calculator',
    name: 'Paint Cost Calculator',
    description: 'Budget for repainting after move-in or before getting a deposit back.',
  },
  {
    href: '/unit-converter',
    name: 'Unit Converter',
    description: 'Convert square footage and distances when comparing apartments.',
  },
  {
    href: '/date-difference',
    name: 'Date Difference Calculator',
    description: 'Count days until lease start, end, or notice periods.',
  },
  {
    href: '/age-calculator',
    name: 'Age Calculator',
    description: 'Useful for lease age requirements or life-stage housing planning.',
  },
]
