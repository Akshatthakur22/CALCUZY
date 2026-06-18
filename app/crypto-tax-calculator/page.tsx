import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import CryptoTaxCalculatorClient from '@/components/tools/CryptoTaxCalculatorClient'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import Breadcrumbs from '@/components/Breadcrumbs'
import HowItWorks from '@/components/HowItWorks'
import YMYLDisclaimer from '@/components/YMYLDisclaimer'
import GuideLink from '@/components/GuideLink'
import ToolJsonLd from '@/components/ToolJsonLd'
import { buildToolPageSchemas } from '@/lib/build-tool-schemas'
import { CALCULATOR_SEO } from '@/lib/calculator-seo-config'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Crypto Tax Calculator',
  description: 'Estimate cryptocurrency capital gains and losses using FIFO, LIFO, or average cost. US-focused cost basis helper—not tax filing software.',
  keywords: 'crypto tax calculator, bitcoin tax, cryptocurrency capital gains, FIFO LIFO, crypto cost basis, capital gains losses',
  url: 'https://calcuzy.app/crypto-tax-calculator',
  image: '/og/og-tools.png',
})

export default function CryptoTaxCalculatorPage() {
  const faqData = [
    {
      question: 'Does this calculator show my tax bill?',
      answer: 'No. It estimates capital gains and losses from your entered buy and sell transactions using your chosen cost basis method. It does not apply tax rates, split short- vs long-term holding periods, or produce a filing-ready return. Use a CPA or dedicated crypto tax software for that.'
    },
    {
      question: 'What is the difference between FIFO and LIFO?',
      answer: 'FIFO (First In, First Out) matches each sell against your oldest purchases first. LIFO (Last In, First Out) matches against your newest purchases first. Average Cost uses a blended purchase price across remaining holdings. The method you may use can depend on IRS rules and your situation—confirm with a tax professional.'
    },
    {
      question: 'How does the IRS treat cryptocurrency?',
      answer: 'In the United States, the IRS generally treats cryptocurrency as property. Selling, trading, spending, or earning crypto (mining, staking, airdrops) can be taxable events. You report gains or losses based on cost basis versus proceeds. This tool is a US-focused educational helper only.'
    },
    {
      question: 'Do I owe tax if I only hold crypto?',
      answer: 'Holding cryptocurrency is usually not a taxable event by itself. Tax reporting typically applies when you dispose of crypto or receive it as income. Rules vary by country; this page assumes US guidance.'
    },
    {
      question: 'What records should I keep?',
      answer: 'Keep dates, amounts, USD values, fees, exchange statements, and wallet records for every transaction. Accurate cost basis depends on complete history—especially if you use FIFO or LIFO across many trades.'
    },
    {
      question: 'Can crypto losses offset gains?',
      answer: 'In the US, capital losses can generally offset capital gains. Net losses may offset up to $3,000 of ordinary income per year, with excess carried forward. Limits and rules change—verify with current IRS guidance or a tax advisor.'
    }
  ]

  const steps = [
    { title: 'Add transactions', description: 'Enter buy and sell rows with date, amount, price per unit, and optional fees.' },
    { title: 'Choose cost basis method', description: 'Select FIFO, LIFO, or Average Cost to match sells with purchases.' },
    { title: 'Calculate', description: 'The tool pairs sells with buys and totals gains, losses, proceeds, and cost basis.' },
    { title: 'Review net result', description: 'See total gains, losses, and net gain or loss—not an estimated tax payment.' },
    { title: 'Consult a professional', description: 'Use results for planning; a CPA or crypto tax software is needed for accurate filing.' }
  ]

  const tips = [
    'This tool summarizes gains and losses—it does not calculate tax owed',
    'FIFO is common for matching lots, but holding period still affects tax rates',
    'Swaps, staking rewards, and airdrops may be taxable—track them separately',
    'Keep exchange CSV exports and wallet history for complete cost basis',
    'Consider our capital gains calculator for a single sale estimate',
    'Speak with a tax professional before filing'
  ]

  const howItWorksSteps = [
    {
      title: 'Enter buys and sells',
      description: 'List each transaction with date, type, quantity, price, and fees.'
    },
    {
      title: 'Pick a matching method',
      description: 'FIFO, LIFO, or Average Cost determines how sells consume purchase lots.'
    },
    {
      title: 'View gains and losses',
      description: 'See totals for proceeds, cost basis, gains, losses, and net result.'
    }
  ]

  const schemas = buildToolPageSchemas({
    tool: {
      name: 'Crypto Tax Calculator',
      description: 'Estimate cryptocurrency capital gains and losses using FIFO, LIFO, or average cost basis methods.',
      url: 'https://calcuzy.app/crypto-tax-calculator',
      category: 'FinanceApplication',
      features: ['FIFO cost basis', 'LIFO cost basis', 'Average cost method', 'Buy and sell transactions', 'Gains and losses summary'],
    },
    breadcrumbItems: [
      { name: 'Home', url: 'https://calcuzy.app' },
      { name: 'Tools', url: 'https://calcuzy.app/tools' },
      { name: 'Finance', url: 'https://calcuzy.app/tools#finance' },
      { name: 'Crypto Tax Calculator', url: 'https://calcuzy.app/crypto-tax-calculator' },
    ],
    faqs: faqData,
    howToSteps: howItWorksSteps,
    howTo: CALCULATOR_SEO['crypto-tax-calculator'].howTo,
    calculateAction: CALCULATOR_SEO['crypto-tax-calculator'].calculateAction,
  })

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <ToolJsonLd schemas={schemas} />
      <Navbar />
      
      <main className="container section-responsive">
        <Breadcrumbs
          items={[
            { name: 'Tools', url: '/tools' },
            { name: 'Finance', url: '/tools#finance' },
            { name: 'Crypto Tax Calculator', url: '/crypto-tax-calculator' }
          ]}
        />
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">
            Crypto Tax Calculator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Estimate capital gains and losses on cryptocurrency trades using FIFO, LIFO, or average cost. Enter buy and sell transactions to see a summary—not a tax bill or filing-ready report. US-focused; consult a tax professional before filing.
          </p>
        </div>

        <YMYLDisclaimer category="finance" />

        <div className="max-w-4xl mx-auto fade-in-up">
          <CryptoTaxCalculatorClient />
        </div>

        <AdUnit slot={1} />

        <section className="max-w-3xl mx-auto mt-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Cost basis and crypto taxes (US overview)</h2>
          <p className="text-slate-600 mb-4">
            When you sell crypto for more than you paid, you may have a capital gain; if less, a capital loss. Cost basis is what you paid (including fees in many cases). FIFO, LIFO, and average cost are different ways to match sells to earlier buys when you have multiple purchases.
          </p>
          <p className="text-slate-600 mb-4">
            This calculator helps you explore those totals for simple buy/sell histories. It does not handle every taxable event (swaps, income, wash sales, multi-wallet consolidation) and does not apply federal or state tax rates. For complex portfolios, use specialized crypto tax software or a qualified CPA.
          </p>
          <GuideLink toolPath="/crypto-tax-calculator" />
        </section>

        <AdUnit slot={2} />

        <HowItWorks
          title="How This Calculator Works"
          steps={howItWorksSteps}
          className="bg-slate-50/50"
        />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Crypto Tax Calculator"
            description={
              <>
                <p className="mb-4">
                  Add buy and sell transactions, choose a cost basis method, and calculate total gains, losses, and net result. Calculations run in your browser. Output is an estimate for education and planning— not IRS filing software.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">FIFO</h4>
                    <p className="text-sm text-blue-700">
                      Matches sells to your oldest purchase lots first.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">LIFO</h4>
                    <p className="text-sm text-amber-700">
                      Matches sells to your newest purchase lots first.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">Average cost</h4>
                    <p className="text-sm text-emerald-700">
                      Uses a blended average price across remaining holdings.
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

        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/crypto-tax-calculator" category="finance" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
