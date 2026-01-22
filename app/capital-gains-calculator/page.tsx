import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import CapitalGainsCalculatorClient from '@/components/tools/CapitalGainsCalculatorClient'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Capital Gains Tax Calculator - Stock & Investment Tax | Calcuzy.com',
  description: 'Calculate capital gains tax on stocks, investments, and assets. Short-term vs long-term tax rates with US federal tax brackets. Free investment tax calculator.',
  keywords: 'capital gains calculator, stock tax calculator, investment tax, long-term capital gains, short-term capital gains, tax brackets',
  url: 'https://calcuzy.com/capital-gains-calculator',
  image: '/og-tools.png',
})

export default function CapitalGainsCalculatorPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Capital Gains Tax Calculator",
    "description": "Calculate capital gains tax on investments with short-term and long-term tax rates",
    "url": "https://calcuzy.com/capital-gains-calculator",
    "provider": {
      "@type": "Organization",
      "name": "Calcuzy.com",
      "url": "https://calcuzy.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      
      <main className="container section-responsive">
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">
            Capital Gains Tax Calculator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Calculate your capital gains tax on investments with our comprehensive calculator. 
            Supports both short-term and long-term gains with current US federal tax rates.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <CapitalGainsCalculatorClient />
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={300}>
            <h2 className="heading-2 mb-6">Understanding Capital Gains Tax</h2>
            <div className="space-y-6">
              <div>
                <h3 className="heading-3 mb-3">What are Capital Gains?</h3>
                <p className="paragraph">
                  Capital gains are profits realized from the sale of capital assets such as stocks, bonds, real estate, 
                  or other investments. The gain is calculated as the difference between the selling price and the 
                  original purchase price (cost basis), minus any selling expenses.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Short-term vs Long-term Capital Gains</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Short-term Capital Gains</h4>
                    <p className="paragraph mb-0">
                      Assets held for one year or less are taxed at your ordinary income tax rate (10-37% depending on 
                      your income bracket). These rates are typically higher than long-term rates.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Long-term Capital Gains</h4>
                    <p className="paragraph mb-0">
                      Assets held for more than one year receive preferential tax rates: 0% for low-income taxpayers, 
                      15% for most taxpayers, and 20% for high-income taxpayers.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">US Federal Tax Rates (2024)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-200 px-4 py-2 text-left">Tax Rate</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Short-term (Ordinary Income)</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Long-term (Capital Gains)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">10%</td>
                        <td className="border border-gray-200 px-4 py-2">Up to $11,000</td>
                        <td className="border border-gray-200 px-4 py-2">Up to $44,000</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">12%</td>
                        <td className="border border-gray-200 px-4 py-2">$11,001 - $44,725</td>
                        <td className="border border-gray-200 px-4 py-2">$44,001 - $95,375</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">15%</td>
                        <td className="border border-gray-200 px-4 py-2">$44,726 - $95,375</td>
                        <td className="border border-gray-200 px-4 py-2">$95,376 - $182,050</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">20%</td>
                        <td className="border border-gray-200 px-4 py-2">Over $578,125</td>
                        <td className="border border-gray-200 px-4 py-2">Over $578,125</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Capital Gains Tax Formula</h3>
                <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                  Capital Gain = Sale Price - Cost Basis - Selling Expenses<br />
                  Tax Amount = Capital Gain × Tax Rate<br />
                  Net Proceeds = Sale Price - Tax Amount - Selling Expenses
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Tax Planning Strategies</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Hold investments for more than one year to qualify for lower long-term rates</li>
                  <li>Consider tax-loss harvesting to offset gains with losses</li>
                  <li>Time sales to manage your annual income and tax bracket</li>
                  <li>Utilize tax-advantaged accounts when possible</li>
                  <li>Keep detailed records of all purchase and sale transactions</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={400}>
            <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="heading-3 mb-2">What is the difference between short-term and long-term capital gains?</h3>
                <p className="paragraph">
                  Short-term capital gains apply to assets held for one year or less and are taxed at your ordinary 
                  income tax rate. Long-term capital gains apply to assets held for more than one year and receive 
                  preferential tax rates of 0%, 15%, or 20%.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">How is cost basis calculated?</h3>
                <p className="paragraph">
                  Cost basis is typically the original purchase price of an asset plus any commissions or fees paid. 
                  For inherited assets, the cost basis is usually the fair market value at the time of inheritance.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Do I have to pay capital gains tax if I reinvest the money?</h3>
                <p className="paragraph">
                  Yes, capital gains tax is generally due when you sell an asset, regardless of whether you reinvest 
                  the proceeds. However, certain investments like 1031 exchanges or opportunity zones may offer tax deferral.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What about state capital gains tax?</h3>
                <p className="paragraph">
                  Most states also tax capital gains, but rates and rules vary significantly. Some states have no income tax, 
                  while others tax capital gains at the same rate as ordinary income. Check your state&apos;s specific regulations.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Can I offset capital gains with capital losses?</h3>
                <p className="paragraph">
                  Yes, you can offset capital gains with capital losses. If your losses exceed your gains, you can deduct 
                  up to $3,000 of net capital losses against ordinary income, with remaining losses carried forward to future years.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What records should I keep for capital gains tax?</h3>
                <p className="paragraph">
                  Keep purchase and sale confirmations, broker statements, cost basis information, dividend reinvestment records, 
                  and any documentation of improvements or expenses that affect your cost basis. Records should be kept for at least 3 years.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={500}>
            <h2 className="heading-2 mb-6">Related Financial Tools</h2>
            <div className="grid-responsive-3 gap-6">
              <Link href="/crypto-tax-calculator" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">Crypto Tax Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate cryptocurrency taxes with FIFO, LIFO, and average cost methods</p>
                </div>
              </Link>
              <Link href="/index-fund-return-calculator" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">Index Fund Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate returns and growth for index fund investments</p>
                </div>
              </Link>
              <Link href="/tools" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">All Financial Tools</h3>
                  <p className="text-sm text-gray-600">Explore our complete collection of financial calculators</p>
                </div>
              </Link>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
