/** CalculateAction + HowTo metadata keyed by tool path slug */
export const CALCULATOR_SEO = {
  'age-calculator': {
    calculateAction: {
      name: 'Calculate Age',
      description: 'Calculate exact age in years, months, and days from a birth date.',
      inputType: 'date',
      outputType: 'duration',
    },
    howTo: {
      name: 'How to Calculate Your Age',
      description: 'Use the Calcuzy age calculator to find your exact age from your date of birth.',
    },
  },
  'bmi-calculator': {
    calculateAction: {
      name: 'Calculate BMI',
      description: 'Calculate Body Mass Index from height and weight in metric or imperial units.',
      inputType: 'health',
      outputType: 'health',
    },
    howTo: {
      name: 'How to Calculate BMI',
      description: 'Use the Calcuzy BMI calculator to compute Body Mass Index and view WHO/CDC adult categories.',
    },
  },
  'capital-gains-calculator': {
    calculateAction: {
      name: 'Calculate Capital Gains Tax',
      description: 'Estimate federal capital gains tax from purchase price, sale price, holding period, and annual income.',
      inputType: 'financial',
      outputType: 'financial',
    },
    howTo: {
      name: 'How to Estimate Capital Gains Tax',
      description: 'Use the Calcuzy capital gains tax calculator to estimate US federal tax on an investment sale.',
    },
  },
  'crypto-tax-calculator': {
    calculateAction: {
      name: 'Calculate Crypto Gains and Losses',
      description: 'Estimate cryptocurrency capital gains and losses using FIFO, LIFO, or average cost basis.',
      inputType: 'financial',
      outputType: 'financial',
    },
    howTo: {
      name: 'How to Calculate Crypto Tax',
      description: 'Use the Calcuzy crypto tax calculator to summarize gains and losses from buy and sell transactions.',
    },
  },
  'index-fund-return-calculator': {
    calculateAction: {
      name: 'Calculate Index Fund Returns',
      description: 'Project index fund growth with lump sum and monthly SIP contributions and CAGR.',
      inputType: 'financial',
      outputType: 'financial',
    },
    howTo: {
      name: 'How to Calculate Index Fund Returns',
      description: 'Use the Calcuzy index fund return calculator to project investment growth over time.',
    },
  },
  'ovulation-calculator': {
    calculateAction: {
      name: 'Calculate Ovulation Window',
      description: 'Estimate fertile window and ovulation date from last menstrual period and cycle length.',
      inputType: 'health',
      outputType: 'health',
    },
    howTo: {
      name: 'How to Use the Ovulation Calculator',
      description: 'Use the Calcuzy ovulation calculator to estimate your fertile window and ovulation date.',
    },
  },
  'paint-cost-calculator': {
    calculateAction: {
      name: 'Calculate Paint Cost',
      description: 'Estimate paint quantity and total cost for a room based on dimensions and coats.',
      inputType: 'measurement',
      outputType: 'financial',
    },
    howTo: {
      name: 'How to Estimate Paint Cost',
      description: 'Use the Calcuzy paint cost calculator to estimate gallons needed and total project cost.',
    },
  },
  'property-tax-estimator': {
    calculateAction: {
      name: 'Estimate Property Tax',
      description: 'Estimate annual property tax from assessed value and local tax rate.',
      inputType: 'financial',
      outputType: 'financial',
    },
    howTo: {
      name: 'How to Estimate Property Tax',
      description: 'Use the Calcuzy property tax estimator to calculate annual property tax from assessed value.',
    },
  },
  'rent-affordability-calculator': {
    calculateAction: {
      name: 'Calculate Rent Affordability',
      description: 'Estimate affordable rent based on gross income, expenses, and the 30% housing guideline.',
      inputType: 'financial',
      outputType: 'financial',
    },
    howTo: {
      name: 'How to Calculate Rent Affordability',
      description: 'Use the Calcuzy rent affordability calculator to see if a rent payment fits your budget.',
    },
  },
  'unit-converter': {
    calculateAction: {
      name: 'Convert Units',
      description: 'Convert between length, weight, temperature, volume, and other measurement units.',
      inputType: 'measurement',
      outputType: 'measurement',
    },
    howTo: {
      name: 'How to Convert Units',
      description: 'Use the Calcuzy unit converter to convert values between common measurement systems.',
    },
  },
  'date-difference': {
    calculateAction: {
      name: 'Calculate Date Difference',
      description: 'Calculate the number of days, weeks, months, and years between two dates.',
      inputType: 'date',
      outputType: 'duration',
    },
    howTo: {
      name: 'How to Calculate Date Difference',
      description: 'Use the Calcuzy date difference calculator to find the time span between two dates.',
    },
  },
  'random-number-generator': {
    calculateAction: {
      name: 'Generate Random Numbers',
      description: 'Generate random numbers within a custom range and quantity.',
      inputType: 'number',
      outputType: 'number',
    },
    howTo: {
      name: 'How to Generate Random Numbers',
      description: 'Use the Calcuzy random number generator to create random values for games, contests, and sampling.',
    },
  },
  'password-tools': {
    calculateAction: {
      name: 'Generate Secure Password',
      description: 'Generate strong random passwords with customizable length and character sets.',
      inputType: 'text',
      outputType: 'text',
    },
    howTo: {
      name: 'How to Generate a Secure Password',
      description: 'Use the Calcuzy password tools to create strong passwords and check password strength.',
    },
  },
  'will-generator': {
    calculateAction: {
      name: 'Generate Will Template',
      description: 'Draft a basic last will and testament template with beneficiaries and executor.',
      inputType: 'text',
      outputType: 'document',
    },
    howTo: {
      name: 'How to Create a Basic Will',
      description: 'Use the Calcuzy will generator to draft a simple last will and testament template.',
    },
  },
  'nda-generator': {
    calculateAction: {
      name: 'Generate NDA Template',
      description: 'Create a non-disclosure agreement template with parties, terms, and jurisdiction.',
      inputType: 'text',
      outputType: 'document',
    },
    howTo: {
      name: 'How to Create an NDA',
      description: 'Use the Calcuzy NDA generator to draft a basic non-disclosure agreement template.',
    },
  },
} as const

export type CalculatorSeoSlug = keyof typeof CALCULATOR_SEO
