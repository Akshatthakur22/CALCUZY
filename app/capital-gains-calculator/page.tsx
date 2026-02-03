import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import CapitalGainsCalculatorClient from '@/components/tools/CapitalGainsCalculatorClient'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'
import { VisualGauge } from '@/components/ToolWrapper'

export const metadata = createMetadata({
  title: 'Capital Gains Tax Calculator',
  description: 'Calculate capital gains tax on stocks, investments, and assets. Short-term vs long-term tax rates with US federal tax brackets. Free investment tax calculator.',
  keywords: 'capital gains calculator, stock tax calculator, investment tax, long-term capital gains, short-term capital gains, tax brackets 2024',
  url: 'https://calcuzy.app/capital-gains-calculator',
  image: '/og-tools.png',
})

export default function CapitalGainsCalculatorPage() {
  const structuredData = createToolSchema({
    name: 'Capital Gains Tax Calculator',
    description: 'Calculate capital gains tax on investments with short-term and long-term tax rates for US federal taxes',
    url: 'https://calcuzy.app/capital-gains-calculator',
    category: 'FinanceApplication',
    features: ['Short-term tax calculation', 'Long-term tax calculation', '2024 US tax brackets', 'Visual ROI gauge', 'Shareable results']
  })

  const faqData = [
    {
      question: 'What is the difference between short-term and long-term capital gains?',
      answer: 'Short-term capital gains apply to assets held for one year or less and are taxed at ordinary income rates (10-37%). Long-term capital gains apply to assets held for more than one year and receive preferential rates (0%, 15%, or 20% depending on income).'
    },
    {
      question: 'Do I have to pay capital gains tax if I reinvest the money?',
      answer: 'Yes, capital gains tax is generally due when you sell an asset, regardless of whether you reinvest the proceeds. However, 1031 exchanges for real estate or investing in Opportunity Zones may offer tax deferral options.'
    },
    {
      question: 'Can I offset capital gains with capital losses?',
      answer: 'Yes, you can offset capital gains with capital losses. If your losses exceed your gains, you can deduct up to $3,000 of net capital losses against ordinary income annually, with remaining losses carried forward.'
    },
    {
      question: 'What about state capital gains tax?',
      answer: 'Most states also tax capital gains. States like California tax at ordinary income rates (up to 13.3%), while states like Florida, Texas, and Nevada have no state income tax on capital gains.'
    },
    {
      question: 'How is the Net Investment Income Tax (NIIT) calculated?',
      answer: 'The NIIT is an additional 3.8% tax on investment income for individuals with modified AGI above $200,000 (single) or $250,000 (married filing jointly). This applies on top of regular capital gains tax.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'Enter Purchase Price', description: 'Input the original cost basis of your investment, including any commissions or fees paid when buying.', inputMode: 'decimal' },
    { title: 'Enter Sale Price', description: 'Input the total amount you received (or expect to receive) from selling the asset.', inputMode: 'decimal' },
    { title: 'Select Holding Period', description: 'Choose whether you held the asset for more than one year (long-term) or one year or less (short-term).' },
    { title: 'Enter Annual Income', description: 'Input your annual taxable income to determine your applicable tax bracket and rate.', inputMode: 'numeric' },
    { title: 'Calculate & Share', description: 'Click calculate to see your estimated tax, then copy or share your results.' }
  ]

  const tips = [
    'Hold investments for over 1 year to qualify for lower long-term capital gains rates',
    'Consider tax-loss harvesting to offset gains with losses before year-end',
    'Use retirement accounts (401k, IRA) for investments with high turnover',
    'Track your cost basis carefully, including reinvested dividends',
    'Consult a tax professional for complex situations or large gains'
  ]

  const roiValue = 25; // Placeholder value for ROI. Replace with actual calculation logic.

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

          {/* Add VisualGauge for ROI visualization */}
          <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
            <VisualGauge
              value={roiValue} // Replace with actual ROI value from state or props
              max={100}
              label="Return on Investment (ROI)"
              className="w-full md:w-1/2"
            />
          </div>
        </div>

        <AdUnit slot={2} />

        {/* Tool Info Section */}
        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Capital Gains Tax Calculator"
            description={
              <>
                <p className="mb-4">
                  Capital gains are profits realized from the sale of capital assets such as stocks, bonds, real estate, 
                  or other investments. The gain is calculated as the difference between the selling price and the 
                  original purchase price (cost basis), minus any selling expenses.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">Short-term Capital Gains</h4>
                    <p className="text-sm text-amber-700">
                      Assets held for one year or less are taxed at ordinary income rates (10-37%).
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">Long-term Capital Gains</h4>
                    <p className="text-sm text-emerald-700">
                      Assets held over one year receive preferential rates (0%, 15%, or 20%).
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
          <RelatedTools currentTool="/capital-gains-calculator" category="finance" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
