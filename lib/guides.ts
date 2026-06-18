export interface GuideEntry {
  slug: string
  title: string
  excerpt: string
  category: 'Finance' | 'Health' | 'Legal'
  toolPath: string
  toolName: string
  date: string
  readTime: string
  ogImage: string
}

export const GUIDES: GuideEntry[] = [
  {
    slug: 'capital-gains-tax-guide',
    title: 'Capital Gains Tax Guide: Short-Term vs Long-Term Rates',
    excerpt:
      'How US capital gains tax works, federal rate differences, and how to estimate tax on a single investment sale.',
    category: 'Finance',
    toolPath: '/capital-gains-calculator',
    toolName: 'Capital Gains Tax Calculator',
    date: '2026-03-18',
    readTime: '10 min read',
    ogImage: '/og/og-finance.png',
  },
  {
    slug: 'crypto-tax-guide',
    title: 'Crypto Tax Guide: FIFO, LIFO & Cost Basis Explained',
    excerpt:
      'US cryptocurrency tax basics, cost basis matching methods, and how to summarize gains and losses.',
    category: 'Finance',
    toolPath: '/crypto-tax-calculator',
    toolName: 'Crypto Tax Calculator',
    date: '2026-03-18',
    readTime: '11 min read',
    ogImage: '/og/og-finance.png',
  },
  {
    slug: 'will-writing-guide',
    title: 'Will Writing Guide: Basics of a Last Will and Testament',
    excerpt:
      'What a will does, essential clauses, state signing rules, and when to consult an estate attorney.',
    category: 'Legal',
    toolPath: '/will-generator',
    toolName: 'Will Generator',
    date: '2026-03-18',
    readTime: '9 min read',
    ogImage: '/og/og-legal.png',
  },
  {
    slug: 'rent-affordability-guide',
    title: 'Rent Affordability Guide: The 30% Rule Explained',
    excerpt:
      'How much rent you can afford using the 30% guideline, gross income, and monthly expenses.',
    category: 'Finance',
    toolPath: '/rent-affordability-calculator',
    toolName: 'Rent Affordability Calculator',
    date: '2026-03-18',
    readTime: '8 min read',
    ogImage: '/og/og-finance.png',
  },
  {
    slug: 'bmi-calculator-guide',
    title: 'BMI Calculator Guide: What BMI Means and How to Use It',
    excerpt:
      'How Body Mass Index is calculated, WHO/CDC categories, limitations, and when to talk to a doctor.',
    category: 'Health',
    toolPath: '/bmi-calculator',
    toolName: 'BMI Calculator',
    date: '2024-01-15',
    readTime: '8 min read',
    ogImage: '/og/og-health.png',
  },
]

const guideByToolPath = new Map(GUIDES.map((g) => [g.toolPath, g]))
const guideBySlug = new Map(GUIDES.map((g) => [g.slug, g]))

export function getGuideForTool(toolPath: string): GuideEntry | undefined {
  return guideByToolPath.get(toolPath)
}

export function getGuideBySlug(slug: string): GuideEntry | undefined {
  return guideBySlug.get(slug)
}

export function guideUrl(slug: string): string {
  return `/blog/${slug}/`
}
