import { Metadata } from 'next'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { buildBlogGuideSchemas } from '@/lib/build-blog-schemas'
import { getGuideBySlug } from '@/lib/guides'
import BlogGuideLayout from '@/components/blog/BlogGuideLayout'
import Card from '@/components/Card'

const guide = getGuideBySlug('crypto-tax-guide')!
const datePublished = guide.date

export const metadata: Metadata = createMetadata({
  title: guide.title,
  description: guide.excerpt,
  keywords:
    'crypto tax guide, bitcoin tax, FIFO LIFO crypto, cost basis, cryptocurrency capital gains, IRS crypto tax',
  url: `https://calcuzy.app/blog/${guide.slug}`,
  image: guide.ogImage,
})

const faqData = [
  {
    question: 'Is cryptocurrency taxed in the US?',
    answer:
      'Yes. The IRS treats cryptocurrency as property. Selling, trading, spending, or earning crypto can trigger capital gains or income tax depending on the event.',
  },
  {
    question: 'What is FIFO vs LIFO for crypto?',
    answer:
      'FIFO matches sales to your oldest purchases first; LIFO uses newest purchases first. Average cost blends remaining lots. Your allowable method may depend on IRS rules and record-keeping—confirm with a tax professional.',
  },
  {
    question: 'Does holding crypto create a tax bill?',
    answer:
      'Simply holding crypto is usually not taxable. Disposing of it (sell, swap, spend) or receiving it as income (mining, staking, airdrops) generally is.',
  },
  {
    question: 'Can crypto losses reduce my tax?',
    answer:
      'Capital losses can offset capital gains. Net losses may offset up to $3,000 of ordinary income per year with excess carried forward, subject to current IRS rules.',
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

export default function CryptoTaxGuidePage() {
  return (
      <BlogGuideLayout
        schemas={schemas}
        category={guide.category}
        title={guide.title}
        description="A practical overview of US cryptocurrency taxation, cost basis matching methods, and how to summarize gains and losses before filing season."
        datePublished={datePublished}
        readTime={guide.readTime}
        slug={guide.slug}
        ymylCategory="finance"
        tocItems={[
          { id: 'irs-treatment', label: 'How the IRS Treats Crypto' },
          { id: 'taxable-events', label: 'Taxable Events' },
          { id: 'cost-basis', label: 'Cost Basis Methods' },
          { id: 'records', label: 'Records to Keep' },
          { id: 'estimate', label: 'How to Estimate Gains' },
        ]}
        sections={[
          {
            id: 'irs-treatment',
            title: 'How the IRS Treats Crypto',
            content: (
              <p className="text-gray-600">
                The IRS classifies virtual currency as <strong>property</strong>, not currency. That means general capital
                gains rules apply when you dispose of crypto. Income events—mining rewards, staking, airdrops, payment for
                services—may be taxed as ordinary income at fair market value when received.
              </p>
            ),
          },
          {
            id: 'taxable-events',
            title: 'Common Taxable Events',
            content: (
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>Selling crypto for USD (or any fiat)</li>
                <li>Trading one coin for another (e.g., BTC → ETH)</li>
                <li>Using crypto to buy goods or services</li>
                <li>Receiving crypto as payment, mining, staking, or airdrop income</li>
              </ul>
            ),
          },
          {
            id: 'cost-basis',
            title: 'FIFO, LIFO & Average Cost',
            content: (
              <>
                <p className="text-gray-600 mb-4">
                  When you sell part of a position bought at different prices, you must match the sale to purchase lots:
                </p>
                <Card className="p-6 mb-4 space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900">FIFO (First In, First Out)</h3>
                    <p className="text-gray-600 text-sm">Uses your oldest purchases first. Often increases gain in rising markets.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">LIFO (Last In, First Out)</h3>
                    <p className="text-gray-600 text-sm">Uses newest purchases first. Can change gain/loss versus FIFO.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Average Cost</h3>
                    <p className="text-gray-600 text-sm">Blends remaining purchase prices. Simpler but not always allowed for all assets.</p>
                  </div>
                </Card>
                <p className="text-gray-600">
                  Holding period (short vs long term) still matters for rate selection once gain is calculated.
                </p>
              </>
            ),
          },
          {
            id: 'records',
            title: 'Records to Keep',
            content: (
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>Exchange CSV exports and trade history</li>
                <li>On-chain wallet transaction logs with USD values at time of trade</li>
                <li>Transfer records between wallets and exchanges</li>
                <li>Documentation for forks, airdrops, and staking rewards</li>
              </ul>
            ),
          },
          {
            id: 'estimate',
            title: 'How to Estimate Gains & Losses',
            content: (
              <p className="text-gray-600">
                Enter buys and sells into our{' '}
                <Link href="/crypto-tax-calculator/" className="text-blue-600 hover:underline font-medium">
                  crypto tax calculator
                </Link>{' '}
                and choose FIFO, LIFO, or average cost. The tool totals proceeds, cost basis, gains, and losses—it does not
                apply tax rates. For a single sale estimate, use the{' '}
                <Link href="/capital-gains-calculator/" className="text-blue-600 hover:underline font-medium">
                  capital gains calculator
                </Link>
                .
              </p>
            ),
          },
        ]}
        faqs={faqData}
        ctaTitle="Summarize Your Crypto Gains"
        ctaDescription="Free FIFO, LIFO, and average cost basis calculator for buy and sell transactions."
        ctaHref={`${guide.toolPath}/`}
        ctaLabel={`Open ${guide.toolName}`}
      />
  )
}
