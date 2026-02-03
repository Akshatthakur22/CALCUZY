import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import CryptoTaxCalculatorClient from '@/components/tools/CryptoTaxCalculatorClient'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Crypto Tax Calculator',
  description: 'Calculate cryptocurrency taxes, capital gains, and cost basis using FIFO, LIFO, or Average Cost methods. Free crypto tax calculator for Bitcoin, Ethereum, and altcoins.',
  keywords: 'crypto tax calculator, bitcoin tax, cryptocurrency capital gains, FIFO LIFO, crypto cost basis, crypto tax software',
  url: 'https://calcuzy.app/crypto-tax-calculator',
  image: '/og-tools.png',
})

export default function CryptoTaxCalculatorPage() {
  const structuredData = createToolSchema({
    name: 'Crypto Tax Calculator',
    description: 'Calculate cryptocurrency taxes, capital gains, and cost basis using different accounting methods',
    url: 'https://calcuzy.app/crypto-tax-calculator',
    category: 'FinanceApplication',
    features: ['FIFO calculation', 'LIFO calculation', 'Average Cost method', 'Multi-transaction support', 'Tax summary report']
  })

  const faqData = [
    {
      question: 'What is the difference between FIFO and LIFO for crypto taxes?',
      answer: 'FIFO (First In, First Out) sells your oldest crypto first, often resulting in long-term capital gains. LIFO (Last In, First Out) sells your newest crypto first, which may result in short-term gains or losses depending on market conditions.'
    },
    {
      question: 'How does the IRS treat cryptocurrency?',
      answer: 'The IRS treats cryptocurrency as property. Every sale, trade, or use of crypto is a taxable event. You must report capital gains or losses based on the difference between your cost basis and fair market value at the time of transaction.'
    },
    {
      question: 'Do I need to report crypto if I just hold it?',
      answer: 'No, simply holding cryptocurrency is not a taxable event. You only need to report when you sell, trade, spend, or receive crypto as income (mining, staking, airdrops).'
    },
    {
      question: 'What records should I keep for crypto taxes?',
      answer: 'Keep records of all transactions including dates, amounts, prices, fees, wallet addresses, and exchange statements. Document the fair market value at the time of each transaction.'
    },
    {
      question: 'Can I deduct crypto losses on my taxes?',
      answer: 'Yes, you can offset capital gains with crypto losses. If losses exceed gains, you can deduct up to $3,000 against ordinary income annually, with excess losses carried forward to future years.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'Add Transactions', description: 'Enter your buy and sell transactions with dates, amounts, prices, and any fees paid.' },
    { title: 'Select Cost Basis Method', description: 'Choose FIFO, LIFO, or Average Cost based on your tax strategy and preference.' },
    { title: 'Review Calculations', description: 'The calculator matches sells with buys and calculates gains/losses for each transaction.' },
    { title: 'Get Tax Summary', description: 'View your total capital gains, losses, and estimated tax liability.' },
    { title: 'Export Results', description: 'Copy or share your tax summary for record-keeping or tax preparation.' }
  ]

  const tips = [
    'Use FIFO for long-term holders to maximize long-term capital gains rates',
    'Consider LIFO during market downturns to realize short-term losses',
    'Track every transaction including swaps, which are taxable events',
    'Document your cost basis for airdrops and mining rewards',
    'Consider tax-loss harvesting before year-end to offset gains'
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

        {/* Tool Info Section */}
        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Crypto Tax Calculator"
            description={
              <>
                <p className="mb-4">
                  Cryptocurrency tax is calculated on capital gains when you sell, trade, or spend your digital assets. 
                  The IRS treats cryptocurrency as property, meaning every taxable event requires calculating the difference 
                  between your cost basis and the fair market value at the time of the transaction.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">FIFO</h4>
                    <p className="text-sm text-blue-700">First In, First Out - sells oldest crypto first</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">LIFO</h4>
                    <p className="text-sm text-amber-700">Last In, First Out - sells newest crypto first</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">Average Cost</h4>
                    <p className="text-sm text-emerald-700">Uses average price across all purchases</p>
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
          <RelatedTools currentTool="/crypto-tax-calculator" category="finance" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
