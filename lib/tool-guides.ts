export type ToolGuideSlug =
  | 'age-calculator'
  | 'bmi-calculator'
  | 'capital-gains-calculator'
  | 'crypto-tax-calculator'
  | 'index-fund-return-calculator'
  | 'ovulation-calculator'
  | 'paint-cost-calculator'
  | 'property-tax-estimator'
  | 'unit-converter'
  | 'date-difference'
  | 'random-number-generator'
  | 'password-tools'
  | 'will-generator'
  | 'nda-generator'

export interface ToolGuide {
  whatIsTitle: string
  whatIs: string[]
  formula?: { lines: string[]; notes?: string }
  calculationSteps: string[]
  examples: { title: string; details: string[]; interpretation: string }[]
  practicalUses: string[]
  limitations: string[]
  references: { name: string; url: string; note?: string }[]
  blogGuidePath?: string
}

const GUIDES: Record<ToolGuideSlug, ToolGuide> = {
  'age-calculator': {
    whatIsTitle: 'What is chronological age?',
    whatIs: [
      'Chronological age is the time elapsed since birth, usually expressed as years, months, and days. It differs from biological age or legal age rules used for voting, contracts, or benefits.',
      'This calculator subtracts a birth date from a target date using calendar logic—accounting for different month lengths and leap years—rather than dividing total days by 365.',
    ],
    calculationSteps: [
      'Enter the birth date and the date you want age calculated as of (today by default).',
      'Count full years from birth year to target year, adjusting if the birthday has not occurred yet in the target year.',
      'Count remaining months and days with borrow logic when days in a month are insufficient.',
      'Display the result as years, months, and days.',
    ],
    examples: [
      {
        title: 'Age as of today',
        details: ['Birth date: March 15, 1990', 'Target date: June 21, 2026'],
        interpretation: 'Result: 36 years, 3 months, 6 days. Useful for forms that ask for exact age.',
      },
      {
        title: 'Age on a future event',
        details: ['Birth date: January 10, 2010', 'Target date: January 10, 2030'],
        interpretation: 'Result: exactly 20 years—helpful for eligibility planning tied to a birthday.',
      },
    ],
    practicalUses: [
      'School or sports registration forms that ask for age in years and months',
      'Genealogy and family history notes',
      'Event planning (“how old will they be at the wedding?”)',
      'Verifying milestone birthdays',
    ],
    limitations: [
      'Does not determine legal age of majority or jurisdiction-specific rules',
      'Uses Gregorian calendar only',
      'Not for medical gestational age calculations',
    ],
    references: [
      {
        name: 'National Institute of Standards and Technology (NIST)',
        url: 'https://www.nist.gov/pml/time-and-frequency-division',
        note: 'Calendar and time standards',
      },
    ],
  },

  'bmi-calculator': {
    whatIsTitle: 'What is Body Mass Index (BMI)?',
    whatIs: [
      'Body Mass Index relates body weight to height. It is widely used as a first-step screening tool for weight categories in adults, but it does not measure body fat directly.',
      'WHO and CDC publish adult cutoffs (underweight, normal, overweight, obese) for people aged 20 and older. Pediatric BMI requires age- and sex-specific percentiles—not the adult cutoffs in this tool.',
    ],
    formula: {
      lines: [
        'Metric: BMI = weight (kg) ÷ height (m)²',
        'Imperial: BMI = weight (lb) ÷ height (in)² × 703',
      ],
    },
    calculationSteps: [
      'Enter height and weight in metric or imperial units.',
      'Convert to consistent units if needed.',
      'Apply the BMI formula.',
      'Map the result to WHO/CDC adult categories.',
    ],
    examples: [
      {
        title: 'Metric example',
        details: ['Weight: 70 kg', 'Height: 1.75 m', 'BMI = 70 ÷ (1.75)² = 22.9'],
        interpretation: 'Falls in the normal adult range (18.5–24.9).',
      },
      {
        title: 'Imperial example',
        details: ['Weight: 180 lb', 'Height: 70 in (5 ft 10 in)', 'BMI = 180 ÷ 70² × 703 ≈ 25.8'],
        interpretation: 'Falls in the overweight range (25.0–29.9). Athletes with high muscle mass may also score high.',
      },
    ],
    practicalUses: [
      'Initial screening before a clinical visit',
      'Tracking weight trends over time',
      'Workplace wellness programs (with provider follow-up)',
    ],
    limitations: [
      'Cannot distinguish muscle from fat',
      'Not validated for children using adult cutoffs',
      'Does not diagnose disease—screening only',
    ],
    references: [
      { name: 'WHO — Obesity and overweight', url: 'https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight' },
      { name: 'CDC — About BMI', url: 'https://www.cdc.gov/healthyweight/assessing/bmi/index.html' },
    ],
    blogGuidePath: '/blog/bmi-calculator-guide/',
  },

  'capital-gains-calculator': {
    whatIsTitle: 'What is capital gains tax?',
    whatIs: [
      'Capital gains tax applies when you sell an asset for more than your cost basis. In the U.S., federal tax treatment depends on how long you held the asset: one year or less (short-term) vs. more than one year (long-term).',
      'This calculator estimates federal tax on a single sale using simplified 2024 bracket logic. It helps you plan—not replace professional tax preparation.',
    ],
    formula: {
      lines: [
        'Capital gain = Sale price − Cost basis',
        'Estimated tax = Capital gain × Applicable rate (by holding period and income)',
        'After-tax return = Capital gain − Estimated tax',
      ],
      notes: 'Cost basis may include purchase price and certain fees; rules vary by asset type.',
    },
    calculationSteps: [
      'Enter purchase price, sale price, holding period, and approximate annual income.',
      'Compute capital gain as sale minus cost basis.',
      'Apply short-term (ordinary) or long-term rate based on holding period and income bracket.',
      'Show estimated tax and after-tax proceeds.',
    ],
    examples: [
      {
        title: 'Long-term stock gain',
        details: ['Bought: $5,000', 'Sold: $8,000 after 18 months', 'Gain: $3,000'],
        interpretation: 'Likely qualifies for long-term rates (0%, 15%, or 20% federally depending on income)—lower than short-term ordinary rates.',
      },
      {
        title: 'Short-term gain',
        details: ['Bought: $2,000', 'Sold: $2,800 after 8 months', 'Gain: $800'],
        interpretation: 'Taxed as ordinary income—rate depends on your full tax picture, not just the gain.',
      },
    ],
    practicalUses: [
      'Estimating tax before selling investments',
      'Comparing hold-vs-sell timing around the one-year mark',
      'Rough planning for a single stock sale',
    ],
    limitations: [
      'Federal estimate only—no state tax, NIIT, or AMT',
      'Single sale, single cost basis—no wash sales or multiple lots',
      'Rates and brackets change; verify current IRS guidance',
    ],
    references: [
      { name: 'IRS — Topic 409 Capital gains and losses', url: 'https://www.irs.gov/taxtopics/tc409' },
      { name: 'IRS Publication 550', url: 'https://www.irs.gov/publications/p550' },
    ],
    blogGuidePath: '/blog/capital-gains-tax-guide/',
  },

  'crypto-tax-calculator': {
    whatIsTitle: 'How is cryptocurrency taxed in the U.S.?',
    whatIs: [
      'The IRS treats cryptocurrency as property for federal tax purposes. Selling, trading, or spending crypto for more than your cost basis generally creates a capital gain or loss.',
      'When you have multiple purchases, you must match sells to buys using a cost basis method (FIFO, LIFO, or average cost). This calculator summarizes gains and losses from simple buy/sell histories—it does not apply tax rates.',
    ],
    formula: {
      lines: [
        'Gain/loss per sale = Proceeds − Cost basis (matched to prior buys)',
        'Total gain = Sum of positive results',
        'Total loss = Sum of negative results (absolute value)',
      ],
    },
    calculationSteps: [
      'Enter buy and sell transactions with dates and amounts.',
      'Select FIFO, LIFO, or average cost to match sells to buys.',
      'Calculate gain or loss for each sell.',
      'Summarize totals for planning (not filing).',
    ],
    examples: [
      {
        title: 'FIFO with two buys and one sell',
        details: [
          'Buy 1: 1 BTC at $30,000',
          'Buy 2: 1 BTC at $40,000',
          'Sell: 1 BTC at $50,000 — FIFO uses Buy 1 basis',
        ],
        interpretation: 'Gain = $50,000 − $30,000 = $20,000 on that lot. Remaining inventory still includes Buy 2.',
      },
    ],
    practicalUses: [
      'Understanding cost basis matching before using tax software',
      'Comparing FIFO vs LIFO outcomes on the same history',
      'Year-end planning conversations with a CPA',
    ],
    limitations: [
      'Does not handle every taxable event (staking income, airdrops, swaps, NFTs)',
      'No federal or state rate application',
      'Not a substitute for Form 8949 or professional filing',
    ],
    references: [
      { name: 'IRS — Digital assets', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/digital-assets' },
    ],
    blogGuidePath: '/blog/crypto-tax-guide/',
  },

  'index-fund-return-calculator': {
    whatIsTitle: 'What are index fund returns?',
    whatIs: [
      'Index funds track a market benchmark (such as the S&P 500). Returns come from price appreciation and reinvested dividends, compounded over time.',
      'This calculator projects growth from an initial lump sum plus optional monthly contributions (SIP), using an assumed annual return rate converted to monthly compounding.',
    ],
    formula: {
      lines: [
        'Lump sum FV = PV × (1 + r)^n',
        'SIP FV = P × [((1 + r)^n − 1) / r] × (1 + r)  (monthly contributions)',
        'CAGR = (Ending value / Beginning value)^(1/years) − 1',
      ],
      notes: 'r = monthly rate; n = number of months. Assumed returns are not guaranteed.',
    },
    calculationSteps: [
      'Enter starting amount, monthly contribution, expected annual return, and time horizon.',
      'Convert annual return to a monthly rate.',
      'Compound the lump sum over the full period.',
      'Add the future value of monthly contributions.',
      'Report total value, total invested, and gain.',
    ],
    examples: [
      {
        title: 'Lump sum only',
        details: ['$10,000 invested', '7% annual return', '20 years'],
        interpretation: 'At 7% compounded, $10,000 grows to roughly $38,700 before fees and taxes—illustrating long-term compounding, not a promise.',
      },
      {
        title: 'Lump sum + monthly SIP',
        details: ['$5,000 initial', '$200/month', '7% annual', '15 years'],
        interpretation: 'Contributions plus growth can exceed either component alone—consistency matters as much as rate assumptions.',
      },
    ],
    practicalUses: [
      'Retirement or college savings scenarios',
      'Comparing contribution amounts',
      'Teaching compound growth concepts',
    ],
    limitations: [
      'Uses a flat assumed return—real markets vary year to year',
      'Excludes fees, taxes, inflation, and sequence-of-returns risk',
      'Not investment advice',
    ],
    references: [
      { name: 'U.S. SEC — Investor.gov — Index funds', url: 'https://www.investor.gov/introduction-investing/investing-basics/investment-products/mutual-funds-and-exchange-traded-0' },
    ],
  },

  'ovulation-calculator': {
    whatIsTitle: 'What is an ovulation estimate?',
    whatIs: [
      'Ovulation is when an ovary releases an egg. In a typical cycle, it often occurs about 12–14 days before the next period—not always on “day 14” for everyone.',
      'This tool estimates a fertile window from your last period start date and average cycle length. It is for general awareness, not medical diagnosis or contraception.',
    ],
    formula: {
      lines: [
        'Estimated ovulation ≈ Last period date + (Cycle length − 14 days)',
        'Fertile window ≈ 5 days before ovulation through 1 day after',
      ],
      notes: 'Cycle length varies; irregular cycles reduce accuracy.',
    },
    calculationSteps: [
      'Enter the first day of your last menstrual period.',
      'Enter your typical cycle length in days (21–35 is common).',
      'Estimate ovulation as roughly 14 days before the next expected period.',
      'Mark the fertile window around that date.',
    ],
    examples: [
      {
        title: '28-day cycle',
        details: ['Last period: June 1', 'Cycle length: 28 days'],
        interpretation: 'Ovulation estimate around June 15; fertile window roughly June 10–16. Confirm with ovulation tests or a clinician if trying to conceive.',
      },
    ],
    practicalUses: [
      'General cycle tracking',
      'Planning when to use ovulation predictor kits',
      'Discussing cycle patterns with a healthcare provider',
    ],
    limitations: [
      'Not reliable for irregular cycles or conditions like PCOS',
      'Not contraception—sperm can survive several days',
      'Not a substitute for medical fertility advice',
    ],
    references: [
      { name: 'American College of Obstetricians and Gynecologists', url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning' },
    ],
  },

  'paint-cost-calculator': {
    whatIsTitle: 'How is paint quantity estimated?',
    whatIs: [
      'Paint coverage depends on wall area, coats needed, and the product’s spread rate (typically 350–400 sq ft per gallon for interior latex on smooth walls).',
      'This calculator estimates gallons from room dimensions and coat count, then multiplies by price per gallon for a budget starting point.',
    ],
    formula: {
      lines: [
        'Wall area ≈ 2 × (Length + Width) × Height  (four walls, no ceiling)',
        'Gallons = (Wall area × Number of coats) ÷ Coverage per gallon',
        'Total cost = Gallons × Price per gallon',
      ],
      notes: 'Subtract doors and windows for tighter estimates; textured walls need more paint.',
    },
    calculationSteps: [
      'Enter room length, width, and wall height.',
      'Compute total paintable wall area.',
      'Divide by coverage per gallon and multiply by number of coats.',
      'Round up to practical purchase sizes and multiply by unit price.',
    ],
    examples: [
      {
        title: 'Standard bedroom',
        details: ['12 ft × 12 ft × 8 ft height', '2 coats', '350 sq ft/gallon', '$35/gallon'],
        interpretation: 'Four walls ≈ 384 sq ft; two coats ≈ 768 sq ft ÷ 350 ≈ 2.2 gallons → buy 3 gallons; budget roughly $105 plus supplies.',
      },
    ],
    practicalUses: [
      'Shopping lists before a hardware store trip',
      'Comparing one-coat vs two-coat budgets',
      'Landlord move-out repaint estimates',
    ],
    limitations: [
      'Does not model ceiling, trim, or primer separately by default',
      'Coverage varies by brand, color, and surface porosity',
      'Labor cost not included',
    ],
    references: [
      { name: 'Paint Quality Institute — Coverage basics', url: 'https://www.paint.org/' },
    ],
  },

  'property-tax-estimator': {
    whatIsTitle: 'What is property tax?',
    whatIs: [
      'Property tax is a local levy on real estate, usually based on assessed value multiplied by a millage or percentage rate set by counties, cities, and school districts.',
      'Assessed value may differ from market value due to homestead exemptions, assessment caps, or periodic reassessments.',
    ],
    formula: {
      lines: [
        'Annual tax = (Assessed value − Exemptions) × (Tax rate ÷ 100)',
        'Monthly escrow ≈ Annual tax ÷ 12',
      ],
    },
    calculationSteps: [
      'Enter property value or assessed value as labeled.',
      'Subtract any homestead or other exemptions.',
      'Apply the local tax rate (often 0.5%–2.5% depending on jurisdiction).',
      'Divide by 12 for monthly escrow planning.',
    ],
    examples: [
      {
        title: 'Homestead exemption example',
        details: ['Value: $350,000', 'Exemption: $25,000', 'Rate: 1.2%'],
        interpretation: 'Taxable base $325,000 × 0.012 = $3,900/year (~$325/month in escrow).',
      },
    ],
    practicalUses: [
      'Comparing rent vs buy housing costs',
      'Budgeting monthly PITI payments',
      'Rough checks after a reassessment notice',
    ],
    limitations: [
      'Rates and exemptions vary by county and change with votes or reassessments',
      'Special assessments and mello-roos not always included',
      'Not a bill from your tax office—verify with local records',
    ],
    references: [
      { name: 'Tax Foundation — Property taxes in the U.S.', url: 'https://taxfoundation.org/data/all/state/property-taxes-by-state-county/' },
    ],
  },

  'unit-converter': {
    whatIsTitle: 'What is unit conversion?',
    whatIs: [
      'Unit conversion changes a measurement from one unit to another within the same dimension (length, weight, temperature, etc.) using fixed conversion factors.',
      'This tool supports common metric and imperial units so you can translate recipes, travel distances, science homework, or product specs without manual lookup tables.',
    ],
    calculationSteps: [
      'Select the measurement category (length, weight, temperature, etc.).',
      'Choose source and target units.',
      'Multiply by the conversion factor (or apply offset formulas for temperature).',
      'Display the converted value.',
    ],
    examples: [
      {
        title: 'Miles to kilometers',
        details: ['10 miles × 1.609344 = 16.09 km'],
        interpretation: 'Useful for road trip planning in countries using metric signs.',
      },
      {
        title: 'Celsius to Fahrenheit',
        details: ['25 °C → (25 × 9/5) + 32 = 77 °F'],
        interpretation: 'Temperature conversions require an offset, not a simple multiplier.',
      },
    ],
    practicalUses: [
      'Cooking and baking with international recipes',
      'Science and engineering homework checks',
      'Fitness (kg vs lb, km vs mi)',
    ],
    limitations: [
      'Rounding may differ slightly from other converters',
      'Does not convert between incompatible dimensions (length vs volume)',
    ],
    references: [
      { name: 'NIST — Guide for the Use of the International System of Units (SI)', url: 'https://www.nist.gov/pml/special-publication-811' },
    ],
  },

  'date-difference': {
    whatIsTitle: 'What is a date difference calculation?',
    whatIs: [
      'A date difference counts the time between two calendar dates—often in days, and sometimes broken into weeks, months, or years.',
      'Uses include contract timelines, project deadlines, pregnancy dating (with clinical guidance), and personal milestones.',
    ],
    calculationSteps: [
      'Select a start date and end date.',
      'Count inclusive or exclusive days depending on the tool’s logic (this tool uses calendar difference).',
      'Optionally express as weeks, months, or years for readability.',
    ],
    examples: [
      {
        title: 'Days until a deadline',
        details: ['Start: June 1, 2026', 'End: August 15, 2026'],
        interpretation: '75 days between dates—useful for planning backward from a due date.',
      },
    ],
    practicalUses: [
      'Lease notice periods',
      'Project sprint lengths',
      'Time since or until an event',
    ],
    limitations: [
      'Business day calculations (excluding weekends/holidays) may need a separate tool',
      'Legal deadlines may use specific counting rules—confirm locally',
    ],
    references: [],
  },

  'random-number-generator': {
    whatIsTitle: 'What is a random number generator?',
    whatIs: [
      'A random number generator produces unpredictable values within a range you define. Browser-based tools typically use pseudorandom algorithms suitable for games, contests, and sampling—not cryptography.',
      'For security (passwords, tokens), use cryptographically secure methods instead of this tool.',
    ],
    calculationSteps: [
      'Set minimum and maximum bounds.',
      'Choose how many numbers to generate.',
      'Draw values uniformly from the range using a PRNG.',
      'Display results for copy or share.',
    ],
    examples: [
      {
        title: 'Raffle draw',
        details: ['Range: 1–100', 'Quantity: 1 winner'],
        interpretation: 'One integer selected—document the seed/time if auditability matters for formal contests.',
      },
    ],
    practicalUses: [
      'Classroom picks and team shuffles',
      'Board game mechanics',
      'Quick sampling for demos',
    ],
    limitations: [
      'Not cryptographically secure',
      'True randomness for high-stakes audits may need certified hardware or services',
    ],
    references: [],
  },

  'password-tools': {
    whatIsTitle: 'What makes a strong password?',
    whatIs: [
      'Strong passwords are long, random, and unique per account. Length and unpredictability matter more than exotic symbols alone.',
      'This tool generates random passwords and checks basic strength heuristics. Use a reputable password manager to store credentials securely.',
    ],
    calculationSteps: [
      'Choose length and character sets (upper, lower, numbers, symbols).',
      'Generate random characters using secure browser APIs where available.',
      'Score length and variety with simple heuristics—not a breach database check.',
    ],
    examples: [
      {
        title: '16-character mixed password',
        details: ['Includes upper, lower, digits, symbols', 'Length 16+'],
        interpretation: 'Resists brute force far better than an 8-character dictionary word—still use unique passwords per site.',
      },
    ],
    practicalUses: [
      'Creating credentials for new accounts',
      'Replacing reused passwords after a breach',
      'Teaching password hygiene',
    ],
    limitations: [
      'Does not check against known leaked passwords (use Have I Been Pwned separately)',
      'Generated passwords must be stored safely—do not email or screenshot',
    ],
    references: [
      { name: 'NIST Digital Identity Guidelines (SP 800-63B)', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    ],
  },

  'will-generator': {
    whatIsTitle: 'What is a last will and testament?',
    whatIs: [
      'A will is a legal document that describes how you want assets distributed after death and may name guardians for minor children and an executor to carry out instructions.',
      'This generator produces a basic template for simple situations. State signing rules, witnesses, and notarization requirements vary—many people need an estate attorney for complex estates.',
    ],
    calculationSteps: [
      'Enter personal details, beneficiaries, and asset instructions.',
      'Name an executor and optional guardians.',
      'Generate a draft document for review.',
      'Sign according to your state’s requirements with legal counsel if needed.',
    ],
    examples: [
      {
        title: 'Simple estate',
        details: ['Single adult', 'Spouse as primary beneficiary', 'Sibling as backup executor'],
        interpretation: 'A straightforward template may suffice as a starting point—still review with a lawyer in your state.',
      },
    ],
    practicalUses: [
      'Organizing wishes before an attorney consult',
      'Understanding standard will clauses',
      'Emergency drafting when traveling (with local legal review)',
    ],
    limitations: [
      'Not legal advice; may not meet all state formalities',
      'Does not replace trusts, powers of attorney, or tax planning',
      'Complex families, business interests, or multi-state assets need professional help',
    ],
    references: [
      { name: 'American Bar Association — Estate planning basics', url: 'https://www.americanbar.org/groups/real_property_trust_estate/resources/estate_planning/' },
    ],
    blogGuidePath: '/blog/will-writing-guide/',
  },

  'nda-generator': {
    whatIsTitle: 'What is a non-disclosure agreement (NDA)?',
    whatIs: [
      'An NDA is a contract where parties agree not to disclose confidential information shared during a business relationship—common for startups, freelancers, and vendor evaluations.',
      'This tool drafts a basic mutual or one-way NDA template. Specific industries (healthcare, government) may need specialized agreements.',
    ],
    calculationSteps: [
      'Identify disclosing and receiving parties.',
      'Define confidential information and permitted uses.',
      'Set term, jurisdiction, and remedies.',
      'Generate a draft for legal review before signing.',
    ],
    examples: [
      {
        title: 'Freelancer preview',
        details: ['Client shares product roadmap', 'Freelancer agrees not to disclose for 2 years'],
        interpretation: 'A one-way NDA protects the client’s secrets during a trial project—have counsel review before high-stakes deals.',
      },
    ],
    practicalUses: [
      'Pitch meetings with investors or partners',
      'Contractor onboarding',
      'Prototype demos under confidentiality',
    ],
    limitations: [
      'Templates may not fit regulated data (HIPAA, export controls)',
      'Enforcement depends on state law and clear definitions',
      'Not a substitute for qualified legal review',
    ],
    references: [
      { name: 'U.S. Small Business Administration — Contracts and agreements', url: 'https://www.sba.gov/business-guide/manage-your-business/contracting' },
    ],
  },
}

export function getToolGuide(slug: ToolGuideSlug): ToolGuide | undefined {
  return GUIDES[slug]
}

export function hasToolGuide(slug: string): slug is ToolGuideSlug {
  return slug in GUIDES
}
