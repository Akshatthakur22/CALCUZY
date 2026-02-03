import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import IndexFundReturnCalculatorClient from '@/components/tools/IndexFundReturnCalculatorClient'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Index Fund Return Calculator',
  description: 'Calculate index fund returns, SIP investments, and compound annual growth rate (CAGR). Free investment growth calculator with monthly contributions.',
  keywords: 'index fund calculator, SIP calculator, CAGR calculator, investment returns, compound interest, mutual fund calculator',
  url: 'https://calcuzy.app/index-fund-return-calculator',
  image: '/og-tools.png',
})

export default function IndexFundReturnCalculatorPage() {
  const structuredData = createToolSchema({
    name: 'Index Fund Return Calculator',
    description: 'Calculate index fund returns, SIP investments, and compound annual growth rate',
    url: 'https://calcuzy.app/index-fund-return-calculator',
    category: 'FinanceApplication',
    features: ['Lump sum returns', 'SIP calculations', 'CAGR calculator', 'Compound interest', 'Investment projections']
  })

  const faqData = [
    {
      question: 'What is an index fund?',
      answer: 'An index fund is a mutual fund or ETF that tracks a specific market index like the S&P 500. They offer diversification, low costs, and historically have outperformed most actively managed funds over the long term.'
    },
    {
      question: 'What is SIP (Systematic Investment Plan)?',
      answer: 'SIP is an investment strategy where you invest a fixed amount regularly (usually monthly) regardless of market conditions. This approach averages out your purchase price over time and reduces timing risk.'
    },
    {
      question: 'How is CAGR calculated?',
      answer: 'CAGR (Compound Annual Growth Rate) is calculated as: CAGR = (Final Value / Initial Value)^(1/Years) - 1. It represents the mean annual growth rate of an investment over a specified time period.'
    },
    {
      question: 'What returns can I expect from index funds?',
      answer: 'Historically, the S&P 500 has returned about 10% annually before inflation. However, past performance does not guarantee future results, and actual returns vary significantly year to year.'
    },
    {
      question: 'Should I invest lump sum or through SIP?',
      answer: 'Both have merits. Lump sum may perform better in rising markets, while SIP reduces risk through dollar-cost averaging. SIP is often recommended for regular income earners building wealth over time.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'Enter Initial Investment', description: 'Input the lump sum amount you plan to invest initially.' },
    { title: 'Set Monthly Contribution', description: 'Enter your planned monthly SIP amount (can be $0 for lump sum only).' },
    { title: 'Choose Expected Return', description: 'Set your expected annual return rate based on historical data or your projection.' },
    { title: 'Select Time Period', description: 'Enter the number of years you plan to stay invested.' },
    { title: 'View Projections', description: 'See your projected final value, total gains, and effective CAGR.' }
  ]

  const tips = [
    'Start early - compound interest has the biggest impact over longer time periods',
    'Stay consistent with SIP even during market downturns',
    'Consider tax-advantaged accounts like 401(k) or IRA for index fund investments',
    'Keep expense ratios low - even 0.5% difference compounds significantly over decades',
    'Diversify across different index types (total market, international, bonds)'
  ]

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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

        {/* Tool Info Section */}
        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Index Fund Return Calculator"
            description={
              <>
                <p className="mb-4">
                  Index funds are mutual funds or ETFs that track a specific market index like the S&P 500, NASDAQ, 
                  or other benchmarks. They offer diversification, low costs, and historically have outperformed most 
                  actively managed funds over the long term.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">Compound Growth</h4>
                    <p className="text-sm text-emerald-700">
                      FV = PV × (1 + r)^n for lump sum investments with compound interest.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">SIP Formula</h4>
                    <p className="text-sm text-blue-700">
                      FV = P × [((1 + r)^n - 1) / r] × (1 + r) for monthly contributions.
                    </p>
                  </div>
                </div>
              </>
            }
            steps={steps}
            faqs={faqData}
            tips={tips}
          />
        </div>

        <AdUnit slot={3} />

        {/* Related Tools */}
        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/index-fund-return-calculator" category="finance" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
