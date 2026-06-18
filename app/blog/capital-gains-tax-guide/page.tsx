import { Metadata } from 'next'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { buildBlogGuideSchemas } from '@/lib/build-blog-schemas'
import { getGuideBySlug } from '@/lib/guides'
import BlogGuideLayout from '@/components/blog/BlogGuideLayout'
import Card from '@/components/Card'

const guide = getGuideBySlug('capital-gains-tax-guide')!
const datePublished = guide.date

export const metadata: Metadata = createMetadata({
  title: guide.title,
  description: guide.excerpt,
  keywords:
    'capital gains tax guide, short-term capital gains, long-term capital gains, investment tax, federal capital gains rates 2024',
  url: `https://calcuzy.app/blog/${guide.slug}`,
  image: guide.ogImage,
})

const faqData = [
  {
    question: 'What is capital gains tax?',
    answer:
      'Capital gains tax is federal tax on profit when you sell an asset for more than your cost basis. The gain is generally sale proceeds minus what you paid (plus adjustments). In the US, rates depend on how long you held the asset and your taxable income.',
  },
  {
    question: 'What is the difference between short-term and long-term capital gains?',
    answer:
      'Short-term gains apply to assets held one year or less and are taxed at ordinary income rates. Long-term gains apply to assets held more than one year and usually qualify for lower federal rates of 0%, 15%, or 20% for most investments.',
  },
  {
    question: 'How do I estimate capital gains tax on a single sale?',
    answer:
      'Enter purchase price, sale price, holding period, and approximate annual income into a capital gains calculator. It computes your gain and applies simplified federal brackets. State taxes, NIIT, and other income are not included in basic estimates.',
  },
  {
    question: 'Do I owe tax if I only hold investments?',
    answer:
      'Holding an investment is generally not taxable. Tax typically applies when you sell, exchange, or otherwise dispose of the asset. Some assets also generate taxable income (dividends, interest) while you hold them.',
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

export default function CapitalGainsTaxGuidePage() {
  return (
      <BlogGuideLayout
        schemas={schemas}
        category={guide.category}
        title={guide.title}
        description="Understand how US federal capital gains tax applies to investment sales, what changes between short- and long-term holdings, and how to run a quick estimate before you talk to a tax professional."
        datePublished={datePublished}
        readTime={guide.readTime}
        slug={guide.slug}
        ymylCategory="finance"
        tocItems={[
          { id: 'what-is-capital-gains', label: 'What Is Capital Gains Tax?' },
          { id: 'short-vs-long', label: 'Short-Term vs Long-Term' },
          { id: 'how-to-calculate', label: 'How to Calculate Your Gain' },
          { id: 'federal-rates', label: '2024 Federal Rate Overview' },
          { id: 'what-is-missing', label: 'What Basic Estimates Miss' },
          { id: 'next-steps', label: 'Next Steps' },
        ]}
        sections={[
          {
            id: 'what-is-capital-gains',
            title: 'What Is Capital Gains Tax?',
            content: (
              <>
                <p className="text-gray-600 mb-4">
                  When you sell stocks, crypto, real estate, or other property for more than you paid, the profit is a{' '}
                  <strong>capital gain</strong>. The IRS generally taxes that gain when you realize it—at sale—not while you
                  hold the asset. Your <strong>cost basis</strong> is usually what you paid plus certain fees;{' '}
                  <strong>proceeds</strong> are what you receive when you sell.
                </p>
                <Card className="bg-blue-50 border-blue-200 p-6 mb-4">
                  <p className="font-mono text-center text-blue-900">
                    Capital Gain = Sale Proceeds − Cost Basis (simplified)
                  </p>
                </Card>
                <p className="text-gray-600">
                  This guide covers federal rules for individual investors. State taxes, the 3.8% Net Investment Income Tax
                  (NIIT), and complex situations like wash sales or multiple tax lots need professional review.
                </p>
              </>
            ),
          },
          {
            id: 'short-vs-long',
            title: 'Short-Term vs Long-Term Capital Gains',
            content: (
              <>
                <p className="text-gray-600 mb-4">
                  Holding period is the main fork in US federal treatment:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-4">
                  <li>
                    <strong>Short-term (≤ 1 year):</strong> Taxed as ordinary income at your marginal bracket (10%–37% for
                    2024 federal rates, depending on income).
                  </li>
                  <li>
                    <strong>Long-term (&gt; 1 year):</strong> Qualifies for preferential rates—typically 0%, 15%, or 20% for
                    most securities (collectibles and some real estate have special rules).
                  </li>
                </ul>
                <p className="text-gray-600">
                  Selling one day before versus one day after the one-year mark can change which rate schedule applies. Track
                  purchase dates carefully, especially for volatile assets like crypto.
                </p>
              </>
            ),
          },
          {
            id: 'how-to-calculate',
            title: 'How to Calculate Your Gain',
            content: (
              <>
                <ol className="list-decimal pl-6 space-y-3 text-gray-600 mb-4">
                  <li>Record your <strong>purchase price</strong> and any buying fees.</li>
                  <li>Record your <strong>sale price</strong> and selling fees.</li>
                  <li>Subtract cost basis from proceeds to get the <strong>capital gain</strong> (or loss).</li>
                  <li>Determine whether the holding period is short-term or long-term.</li>
                  <li>Apply the appropriate federal rate based on income and holding period.</li>
                </ol>
                <p className="text-gray-600">
                  Use our{' '}
                  <Link href="/capital-gains-calculator/" className="text-blue-600 hover:underline font-medium">
                    free capital gains tax calculator
                  </Link>{' '}
                  to run a single-sale federal estimate with 2024 bracket assumptions. For many crypto transactions, see our{' '}
                  <Link href="/crypto-tax-calculator/" className="text-blue-600 hover:underline font-medium">
                    crypto tax calculator
                  </Link>{' '}
                  for FIFO/LIFO lot matching.
                </p>
              </>
            ),
          },
          {
            id: 'federal-rates',
            title: '2024 Federal Rate Overview',
            content: (
              <>
                <p className="text-gray-600 mb-4">
                  Long-term capital gains rates for 2024 depend on taxable income thresholds (single filer examples from IRS
                  guidance):
                </p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-3 text-left">Rate</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Typical income range (single)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">0%</td>
                        <td className="border border-gray-300 px-4 py-3">Up to ~$47,025 taxable income</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">15%</td>
                        <td className="border border-gray-300 px-4 py-3">~$47,026 – $518,900</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">20%</td>
                        <td className="border border-gray-300 px-4 py-3">Above ~$518,900</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-600 text-sm">
                  Thresholds change annually and vary by filing status. Verify current IRS Publication 550 or speak with a CPA
                  before filing.
                </p>
              </>
            ),
          },
          {
            id: 'what-is-missing',
            title: 'What Basic Estimates Miss',
            content: (
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>State and local capital gains taxes</li>
                <li>3.8% Net Investment Income Tax (NIIT) for higher earners</li>
                <li>Capital loss offsets and $3,000 ordinary income offset rules</li>
                <li>Wash sale adjustments for securities</li>
                <li>Alternative Minimum Tax (AMT)</li>
                <li>Multiple tax lots and partial sales</li>
              </ul>
            ),
          },
          {
            id: 'next-steps',
            title: 'Next Steps',
            content: (
              <p className="text-gray-600">
                Use a calculator for planning, then confirm with a qualified tax professional before selling large positions or
                filing. Keep brokerage 1099-B statements, purchase confirmations, and wallet export history for audit-ready
                records.
              </p>
            ),
          },
        ]}
        faqs={faqData}
        ctaTitle="Estimate Your Capital Gains Tax"
        ctaDescription="Free federal estimate for a single investment sale using 2024 brackets."
        ctaHref={`${guide.toolPath}/`}
        ctaLabel={`Open ${guide.toolName}`}
      />
  )
}
