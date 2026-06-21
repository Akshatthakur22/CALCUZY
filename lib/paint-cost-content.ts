export interface PaintCostExample {
  title: string
  length: number
  width: number
  height: number
  coats: number
  pricePerLiter: number
  wallArea: number
  totalArea: number
  liters: number
  totalCost: number
  interpretation: string
}

export const PAINT_COST_FAQS = [
  {
    question: 'How does this calculator estimate paint needed?',
    answer:
      'Wall area = 2×(length×height) + 2×(width×height). Subtract one standard door (1.9×0.8 m) and one window (1.2×1.0 m). Add ceiling (length×width). Liters = (total area × coats) ÷ 10 m²/L. Cost = liters × price per liter.',
  },
  {
    question: 'Why are dimensions in meters?',
    answer:
      'The tool uses meters and liters. Convert feet to meters (1 ft ≈ 0.305 m) before entering dimensions. Match units to your paint can label.',
  },
  {
    question: 'Does this account for primer or textured walls?',
    answer:
      'No. Primer, popcorn ceilings, brick, or dark-to-light color changes often need extra coats. Buy 10–15% more than the estimate.',
  },
  {
    question: 'How accurate is the 10 m²/L coverage rate?',
    answer:
      'Interior wall paint often covers roughly 8–12 m²/L per coat on smooth, primed drywall. Check your product label and use the lower end for porous or textured surfaces.',
  },
  {
    question: 'Should I include trim, doors, or furniture?',
    answer:
      'This calculator covers four walls and the ceiling only. Trim, cabinets, and doors need separate measurements.',
  },
  {
    question: 'How many coats should I plan for?',
    answer:
      'One coat may suffice for same-color refresh. Two coats are typical for color changes. Three coats for deep reds, yellows, or bare drywall after primer.',
  },
  {
    question: 'Does the calculator include supplies?',
    answer:
      'No. Rollers, brushes, tape, drop cloths, and primer are separate. Add them to your DIY budget manually.',
  },
  {
    question: 'Can I paint only walls without the ceiling?',
    answer:
      'This tool includes ceiling area by default. For walls only, mentally subtract ceiling square meters (length × width) from total area before interpreting results.',
  },
  {
    question: 'Imperial rooms (feet)?',
    answer:
      'Convert each dimension to meters first, or use our unit converter. Mixing feet with a liters-per-square-meter formula produces wrong quantities.',
  },
  {
    question: 'Is this a quote from a paint store?',
    answer:
      'No. Browser-based estimate for DIY planning. Confirm quantities with your retailer before buying.',
  },
]

export const PAINT_COST_EXAMPLES: PaintCostExample[] = [
  {
    title: 'Small bedroom (metric)',
    length: 3.5,
    width: 3.0,
    height: 2.4,
    coats: 2,
    pricePerLiter: 18,
    wallArea: 31.2,
    totalArea: 39.1,
    liters: 7.82,
    totalCost: 140.76,
    interpretation:
      'After door/window deduction, ~39 m² painted twice at 10 m²/L ≈ 7.8 L. Round up to 8–9 L for touch-ups.',
  },
  {
    title: 'Living room, two coats',
    length: 5.0,
    width: 4.5,
    height: 2.7,
    coats: 2,
    pricePerLiter: 22,
    wallArea: 51.3,
    totalArea: 73.8,
    liters: 14.76,
    totalCost: 324.72,
    interpretation:
      'Larger wall footprint pushes liters above a single gallon-equivalent bucket—buy two containers or one large + one small for matching batch numbers.',
  },
  {
    title: 'Single coat refresh (same color)',
    length: 4.0,
    width: 3.5,
    height: 2.4,
    coats: 1,
    pricePerLiter: 16,
    wallArea: 36.0,
    totalArea: 43.1,
    liters: 4.31,
    totalCost: 68.96,
    interpretation:
      'One coat over a similar shade may be enough—still verify coverage on a test patch in your lighting.',
  },
  {
    title: 'Three coats (bold color change)',
    length: 3.0,
    width: 3.0,
    height: 2.4,
    coats: 3,
    pricePerLiter: 20,
    wallArea: 28.8,
    totalArea: 35.9,
    liters: 10.77,
    totalCost: 215.4,
    interpretation:
      'Deep colors on white walls often need three coats plus primer in practice—this estimate is a floor, not a ceiling.',
  },
  {
    title: 'Budget planning with sale paint',
    length: 4.2,
    width: 3.8,
    height: 2.5,
    coats: 2,
    pricePerLiter: 12,
    wallArea: 40.0,
    totalArea: 50.0,
    liters: 10.0,
    totalCost: 120.0,
    interpretation:
      'Cheaper paint may have lower coverage—if the label says 8 m²/L, divide area by 8 instead of 10 for a safer order quantity.',
  },
]

export const PAINT_COST_MISTAKES = [
  {
    title: 'Ordering exact liters with no margin',
    description: 'Open containers, roller absorption, and touch-ups consume extra. Buy 10–15% more.',
  },
  {
    title: 'Skipping primer on new drywall',
    description: 'Bare drywall drinks paint. Primer plus two finish coats beats three finish coats alone.',
  },
  {
    title: 'Ignoring ceiling if it stays white',
    description: 'If you are not painting the ceiling, subtract length × width from total area mentally.',
  },
  {
    title: 'Mixing unit systems',
    description: 'Feet for room size and liters for paint is fine only after converting feet to meters.',
  },
]

export const PAINT_COST_REFERENCES = [
  {
    name: 'Paint Quality Institute — Consumer painting tips',
    url: 'https://www.paint.org/',
  },
  {
    name: 'U.S. EPA — Indoor air and paint ventilation',
    url: 'https://www.epa.gov/indoor-air-quality-iaq',
  },
]

export const PAINT_COST_RELATED = [
  { href: '/unit-converter', name: 'Unit Converter', description: 'Convert feet to meters for room dimensions.' },
  { href: '/property-tax-estimator', name: 'Property Tax Estimator', description: 'Estimate taxes when budgeting home projects.' },
  { href: '/rent-affordability-calculator', name: 'Rent Affordability Calculator', description: 'Compare rent vs owning plus maintenance.' },
  { href: '/random-number-generator', name: 'Random Number Generator', description: 'Pick a random accent wall or color swatch order.' },
]
