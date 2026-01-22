import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import IndexFundReturnCalculatorClient from '@/components/tools/IndexFundReturnCalculatorClient'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Index Fund Return Calculator - SIP & CAGR Calculator | Calcuzy.com',
  description: 'Calculate index fund returns, SIP investments, and compound annual growth rate (CAGR). Free investment growth calculator with monthly contributions.',
  keywords: 'index fund calculator, SIP calculator, CAGR calculator, investment returns, compound interest, mutual fund calculator',
  url: 'https://calcuzy.com/index-fund-return-calculator',
  image: '/og-tools.png',
})

export default function IndexFundReturnCalculatorPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Index Fund Return Calculator",
    "description": "Calculate index fund returns, SIP investments, and compound annual growth rate",
    "url": "https://calcuzy.com/index-fund-return-calculator",
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
            Index Fund Return Calculator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Calculate your index fund investment returns with our comprehensive calculator. 
            Supports lump sum investments, monthly SIPs, and CAGR calculations.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <IndexFundReturnCalculatorClient />
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={300}>
            <h2 className="heading-2 mb-6">Understanding Index Fund Returns</h2>
            <div className="space-y-6">
              <div>
                <h3 className="heading-3 mb-3">What are Index Funds?</h3>
                <p className="paragraph">
                  Index funds are mutual funds or ETFs that track a specific market index like the S&amp;P 500, NASDAQ, 
                  or other benchmarks. They offer diversification, low costs, and historically have outperformed most 
                  actively managed funds over the long term.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Systematic Investment Plan (SIP)</h3>
                <p className="paragraph">
                  SIP is an investment strategy where you invest a fixed amount regularly (monthly) regardless of market 
                  conditions. This approach averages out your purchase price over time, reduces timing risk, and leverages 
                  the power of rupee cost averaging.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Compound Annual Growth Rate (CAGR)</h3>
                <p className="paragraph">
                  CAGR represents the mean annual growth rate of an investment over a specified time period longer 
                  than one year. It smooths out volatility and provides a single rate of return that shows how much 
                  your investment would have grown each year if it grew at a steady rate.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Investment Formulas</h3>
                <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-2">
                  <div><strong>Future Value (Lump Sum):</strong><br />
                  FV = PV × (1 + r)^n</div>
                  <div><strong>Future Value (SIP):</strong><br />
                  FV = P × [((1 + r)^n - 1) / r] × (1 + r)</div>
                  <div><strong>CAGR:</strong><br />
                  CAGR = [(FV / PV)^(1/n) - 1] × 100</div>
                  <div className="text-xs mt-2">
                    Where: PV = Present Value, FV = Future Value, P = Monthly Payment, r = Monthly Rate, n = Number of Periods
                  </div>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Benefits of Index Fund Investing</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Low expense ratios compared to actively managed funds</li>
                  <li>Automatic diversification across hundreds or thousands of stocks</li>
                  <li>Historically strong long-term performance</li>
                  <li>Simple and passive investment approach</li>
                  <li>Reduced risk through broad market exposure</li>
                </ul>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Investment Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Start investing early to maximize compound growth</li>
                  <li>Be consistent with your SIP contributions</li>
                  <li>Choose low-cost index funds with expense ratios under 0.5%</li>
                  <li>Consider tax-efficient index funds for taxable accounts</li>
                  <li>Stay invested for the long term (5+ years recommended)</li>
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
                <h3 className="heading-3 mb-2">What is a good expected return for index funds?</h3>
                <p className="paragraph">
                  Historically, the S&amp;P 500 has returned around 10% annually on average over long periods. 
                  However, returns can vary significantly year to year, and past performance doesn&apos;t guarantee future results. 
                  Use conservative estimates (7-8%) for planning purposes.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">How much should I invest monthly through SIP?</h3>
                <p className="paragraph">
                  A common guideline is to invest 15-20% of your monthly income, but this varies based on your 
                  financial situation, goals, and other obligations. Start with what you&apos;re comfortable with and increase 
                  gradually as your income grows.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Is SIP better than lump sum investment?</h3>
                <p className="paragraph">
                  Both approaches have merits. SIP reduces timing risk and averages out purchase prices, while lump sum 
                  investing gives your money more time in the market. If you have a large amount, consider investing it 
                  gradually over 6-12 months to balance both approaches.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">How accurate are these return calculations?</h3>
                <p className="paragraph">
                  The calculations are mathematical projections based on your inputs. Actual returns will vary due to market 
                  volatility, dividends, taxes, and expense ratios. Use these as planning tools rather than guarantees 
                  of future performance.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Should I reinvest dividends?</h3>
                <p className="paragraph">
                  Yes, reinvesting dividends significantly boosts long-term returns through compounding. Most index 
                  funds offer dividend reinvestment plans (DRIPs) that automatically purchase additional shares with dividends.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What about taxes on index fund returns?</h3>
                <p className="paragraph">
                  You only pay taxes when you sell shares, not when the fund value increases. Gains are taxed as 
                  capital gains (short-term or long-term depending on holding period). Dividends are typically taxed 
                  in the year received, even if reinvested.
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
                  <p className="text-sm text-gray-600">Calculate tax on investment gains and optimize your returns</p>
                </div>
              </Link>
              <Link href="/crypto-tax-calculator" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">Crypto Tax Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate cryptocurrency taxes with different accounting methods</p>
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
