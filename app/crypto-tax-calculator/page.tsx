import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import CryptoTaxCalculatorClient from '@/components/tools/CryptoTaxCalculatorClient'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Crypto Tax Calculator - Bitcoin & Cryptocurrency Capital Gains | Calcuzy.com',
  description: 'Calculate cryptocurrency taxes, capital gains, and cost basis using FIFO, LIFO, or Average Cost methods. Free crypto tax calculator for Bitcoin, Ethereum, and altcoins.',
  keywords: 'crypto tax calculator, bitcoin tax, cryptocurrency capital gains, FIFO LIFO, crypto cost basis, crypto tax software',
  url: 'https://calcuzy.com/crypto-tax-calculator',
  image: '/og-tools.png',
})

export default function CryptoTaxCalculatorPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Crypto Tax Calculator",
    "description": "Calculate cryptocurrency taxes, capital gains, and cost basis using different accounting methods",
    "url": "https://calcuzy.com/crypto-tax-calculator",
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
            Crypto Tax Calculator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Calculate your cryptocurrency taxes, capital gains, and cost basis with our comprehensive 
            crypto tax calculator. Support for FIFO, LIFO, and Average Cost methods.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <CryptoTaxCalculatorClient />
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={300}>
            <h2 className="heading-2 mb-6">Understanding Crypto Tax Calculation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="heading-3 mb-3">What is Crypto Tax?</h3>
                <p className="paragraph">
                  Cryptocurrency tax is calculated on capital gains when you sell, trade, or spend your digital assets. 
                  The IRS treats cryptocurrency as property, meaning every taxable event requires calculating the difference 
                  between your cost basis and the fair market value at the time of the transaction.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Cost Basis Methods Explained</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">FIFO (First In, First Out)</h4>
                    <p className="paragraph mb-0">
                      The oldest cryptocurrency you purchased is sold first. This is the default method for most taxpayers 
                      and often results in long-term capital gains for assets held over a year.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">LIFO (Last In, First Out)</h4>
                    <p className="paragraph mb-0">
                      The most recently purchased cryptocurrency is sold first. This can be beneficial during market downturns 
                      as it may realize short-term losses that can offset other gains.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Average Cost</h4>
                    <p className="paragraph mb-0">
                      Calculates an average purchase price across all holdings. This method simplifies tracking and can 
                      smooth out tax impacts over time.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Tax Calculation Formula</h3>
                <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                  Capital Gain = Sale Price - Cost Basis - Transaction Fees<br />
                  Tax Liability = Capital Gain × Tax Rate<br />
                  Net Proceeds = Sale Price - Tax - Fees
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Common Use Cases</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Trading cryptocurrencies on exchanges</li>
                  <li>Selling crypto for fiat currency</li>
                  <li>Using cryptocurrency to purchase goods or services</li>
                  <li>Converting one cryptocurrency to another</li>
                  <li>Earning cryptocurrency as income</li>
                </ul>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Tips for Accurate Tax Reporting</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Keep detailed records of all transactions including dates, amounts, and fees</li>
                  <li>Track your cost basis for each cryptocurrency purchase</li>
                  <li>Consider the holding period for short-term vs long-term tax rates</li>
                  <li>Document any crypto-to-crypto trades as taxable events</li>
                  <li>Consult with a tax professional for complex situations</li>
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
                <h3 className="heading-3 mb-2">Do I have to pay taxes on cryptocurrency?</h3>
                <p className="paragraph">
                  Yes, in most countries including the US, cryptocurrency is subject to capital gains tax when you sell, 
                  trade, or spend it. However, simply holding cryptocurrency or transferring between your own wallets 
                  is generally not a taxable event.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What&apos;s the difference between short-term and long-term capital gains?</h3>
                <p className="paragraph">
                  Short-term capital gains apply to assets held for one year or less and are taxed at your ordinary 
                  income tax rate. Long-term capital gains apply to assets held for more than one year and receive 
                  preferential tax rates (0%, 15%, or 20% depending on your income).
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">How do I calculate cost basis for cryptocurrency?</h3>
                <p className="paragraph">
                  Cost basis is the original purchase price of your cryptocurrency plus any transaction fees. Our calculator 
                  supports FIFO, LIFO, and Average Cost methods to help you choose the most advantageous approach 
                  for your tax situation.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Are crypto-to-crypto trades taxable?</h3>
                <p className="paragraph">
                  Yes, trading one cryptocurrency for another is considered a taxable event. You must calculate the capital 
                  gain based on the fair market value of the crypto you received at the time of the trade.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What records should I keep for crypto taxes?</h3>
                <p className="paragraph">
                  Keep records of all transactions including dates, amounts, prices, fees, and the fair market value 
                  at the time of each transaction. Exchange statements, wallet addresses, and any documentation of 
                  lost or stolen crypto should also be preserved.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={500}>
            <h2 className="heading-2 mb-6">Related Financial Tools</h2>
            <div className="grid-responsive-3 gap-6">
              <Link href="/capital-gains-calculator" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">Capital Gains Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate stock and investment capital gains with tax optimization</p>
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
