import { Metadata } from 'next'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { buildBlogGuideSchemas } from '@/lib/build-blog-schemas'
import { getGuideBySlug } from '@/lib/guides'
import BlogGuideLayout from '@/components/blog/BlogGuideLayout'
import Card from '@/components/Card'

const guide = getGuideBySlug('rent-affordability-guide')!
const datePublished = guide.date

export const metadata: Metadata = createMetadata({
  title: guide.title,
  description: guide.excerpt,
  keywords:
    'rent affordability guide, 30 percent rule, how much rent can I afford, housing budget, rent to income ratio',
  url: `https://calcuzy.app/blog/${guide.slug}`,
  image: guide.ogImage,
})

const faqData = [
  {
    question: 'What is the 30% rule for rent?',
    answer:
      'A common guideline suggests spending no more than about 30% of gross monthly income on housing. It is a starting point—not a strict limit—especially in high-cost cities.',
  },
  {
    question: 'Should I use gross or net income?',
    answer:
      'The 30% rule typically uses gross (pre-tax) income. For a tighter budget, factor taxes and deductions into your expense total instead.',
  },
  {
    question: 'What counts as housing cost?',
    answer:
      'Include rent plus recurring housing costs you pay: utilities not in lease, renters insurance, parking, pet rent, and HOA fees if applicable.',
  },
  {
    question: 'Is 40% of income on rent too much?',
    answer:
      'Many renters in expensive markets exceed 30–40%. Higher ratios can work if you have low debt, strong savings, and stable income—but it reduces flexibility for emergencies.',
  },
]

const schemas = buildBlogGuideSchemas({
  slug: guide.slug,
  headline: guide.title,
  description: guide.excerpt,
  datePublished,
  image: guide.ogImage,
  faqs: faqData,
})

export default function RentAffordabilityGuidePage() {
  return (
      <BlogGuideLayout
        schemas={schemas}
        category={guide.category}
        title={guide.title}
        description="Figure out how much rent fits your budget using the 30% guideline, real monthly expenses, and practical trade-offs in expensive housing markets."
        datePublished={datePublished}
        readTime={guide.readTime}
        slug={guide.slug}
        ymylCategory="finance"
        tocItems={[
          { id: 'thirty-percent', label: 'The 30% Rule' },
          { id: 'formula', label: 'Quick Formula' },
          { id: 'beyond-rent', label: 'Beyond Base Rent' },
          { id: 'landlord-rules', label: 'What Landlords Look For' },
          { id: 'calculate', label: 'Run Your Numbers' },
        ]}
        sections={[
          {
            id: 'thirty-percent',
            title: 'The 30% Rule',
            content: (
              <p className="text-gray-600">
                Housing counselors and federal programs often cite <strong>30% of gross income</strong> as a manageable share
                for rent. If you earn $5,000/month before taxes, that suggests up to ~$1,500 for housing. In cities like NYC,
                SF, or Boston, many households exceed this—use the rule as a baseline, then stress-test your full budget.
              </p>
            ),
          },
          {
            id: 'formula',
            title: 'Quick Formula',
            content: (
              <Card className="bg-blue-50 border-blue-200 p-6 mb-4">
                <p className="font-mono text-center text-blue-900 mb-2">
                  Max Rent ≈ Gross Monthly Income × 0.30
                </p>
                <p className="font-mono text-center text-blue-900">
                  Remaining = Income − Rent − Other Monthly Expenses
                </p>
              </Card>
            ),
          },
          {
            id: 'beyond-rent',
            title: 'Beyond Base Rent',
            content: (
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>Electric, gas, water, internet if not included</li>
                <li>Renters insurance ($15–$30/month typical)</li>
                <li>Parking, storage, pet fees</li>
                <li>Move-in costs: deposit, first/last month, broker fees</li>
              </ul>
            ),
          },
          {
            id: 'landlord-rules',
            title: 'What Landlords Look For',
            content: (
              <p className="text-gray-600">
                Many landlords require rent ≤ 30–33% of gross income and may ask for income proof (pay stubs, offer letter).
                They also check credit score and rental history. Meeting the ratio does not guarantee approval but improves
                odds.
              </p>
            ),
          },
          {
            id: 'calculate',
            title: 'Run Your Numbers',
            content: (
              <p className="text-gray-600">
                Use our{' '}
                <Link href="/rent-affordability-calculator/" className="text-blue-600 hover:underline font-medium">
                  rent affordability calculator
                </Link>{' '}
                to enter income, target rent, other expenses, and a custom percentage. You will see recommended max rent,
                rent as a share of income, and a simple comfortable / moderate / stretched status.
              </p>
            ),
          },
        ]}
        faqs={faqData}
        ctaTitle="Check If Your Rent Fits"
        ctaDescription="Free calculator with the 30% rule and custom housing percentage."
        ctaHref={`${guide.toolPath}/`}
        ctaLabel={`Open ${guide.toolName}`}
      />
  )
}
