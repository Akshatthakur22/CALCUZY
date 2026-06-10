import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import CapitalGainsCalculatorClient from '@/components/tools/CapitalGainsCalculatorClient'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import RelatedToolsBento, { financeRelatedTools } from '@/components/RelatedToolsBento'
import HowItWorks from '@/components/HowItWorks'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createMetadata, createToolSchema, createFAQSchema, createCalculateActionSchema, createBreadcrumbSchema } from '@/lib/metadata'
import YMYLDisclaimer from '@/components/YMYLDisclaimer'

export const metadata = createMetadata({
  title: 'Capital Gains Tax Calculator',
  description: 'Estimate US federal capital gains tax on a single investment sale. Enter purchase price, sale price, holding period, and income to see short-term or long-term tax estimates using 2024 federal brackets.',
  keywords: 'capital gains calculator, capital gains tax, short-term capital gains, long-term capital gains, investment tax calculator, federal tax estimate',
  url: 'https://calcuzy.app/capital-gains-calculator',
  image: '/og/og-finance.svg',
})

export default function CapitalGainsCalculatorPage() {
  const structuredData = createToolSchema({
    name: 'Capital Gains Tax Calculator',
    description: 'Estimate US federal capital gains tax on an investment sale using purchase price, sale price, holding period, and taxable income.',
    url: 'https://calcuzy.app/capital-gains-calculator',
    category: 'FinanceApplication',
    features: ['Short-term tax estimate', 'Long-term tax estimate', '2024 US federal brackets', 'After-tax return', 'Shareable results']
  })

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://calcuzy.app' },
    { name: 'Tools', url: 'https://calcuzy.app/tools' },
    { name: 'Finance', url: 'https://calcuzy.app/tools#finance' },
    { name: 'Capital Gains Calculator', url: 'https://calcuzy.app/capital-gains-calculator' }
  ])

  const calculateActionSchema = createCalculateActionSchema({
    name: 'Calculate Capital Gains Tax',
    description: 'Estimate federal capital gains tax from purchase price, sale price, holding period, and annual income.',
    url: 'https://calcuzy.app/capital-gains-calculator',
    inputType: 'financial',
    outputType: 'financial'
  })

  const faqData = [
    {
      question: 'What is capital gains tax?',
      answer: 'Capital gains tax applies when you sell an asset for more than you paid. The gain is generally the sale price minus your cost basis. In the US, gains are taxed as short-term (held one year or less) or long-term (held more than one year), with different federal rate schedules for each.'
    },
    {
      question: 'What is the difference between short-term and long-term capital gains?',
      answer: 'Short-term gains are taxed at ordinary income tax rates, which depend on your total taxable income. Long-term gains on assets held more than one year usually qualify for lower federal rates (0%, 15%, or 20% for most investments). This calculator lets you compare both scenarios for a single sale.'
    },
    {
      question: 'How does this calculator estimate my tax?',
      answer: 'Enter your purchase price, sale price, holding period, and annual income. The tool calculates your capital gain and applies simplified 2024 federal brackets to estimate a rate and tax amount. It assumes a single sale with no adjustments for fees, wash sales, or multiple tax lots.'
    },
    {
      question: 'What does this calculator not include?',
      answer: 'This is a rough federal estimate only. It does not include state or local taxes, the 3.8% Net Investment Income Tax (NIIT), alternative minimum tax (AMT), filing status, deductions, or other income that may change your bracket. Real tax liability depends on your full return—consult a tax professional before filing.'
    },
    {
      question: 'Can I use this for stocks, crypto, or real estate?',
      answer: 'The basic gain math (sale price minus cost basis) applies to many asset types, but tax rules differ. Crypto, collectibles, and some real estate sales have special rules. This tool provides a general federal estimate; use our crypto tax calculator for transaction-level crypto cost basis tracking.'
    },
    {
      question: 'What tax year do the rates reflect?',
      answer: 'Rates are based on 2024 US federal brackets for single-filer-style income thresholds. Tax laws and brackets change annually. Always verify current IRS guidance or speak with a qualified tax advisor before making financial decisions.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'Enter purchase price', description: 'Input what you originally paid for the investment (your cost basis before fees or adjustments).' },
    { title: 'Enter sale price', description: 'Input the amount you received or expect to receive when selling.' },
    { title: 'Choose holding period', description: 'Select short-term (one year or less) or long-term (more than one year) to apply the correct rate type.' },
    { title: 'Add annual income', description: 'Enter your approximate taxable income so the tool can pick a federal bracket for the estimate.' },
    { title: 'Review your estimate', description: 'See capital gain, estimated tax, after-tax return, and copy or share your results.' }
  ]

  const tips = [
    'Assets held more than one year often qualify for lower long-term federal rates',
    'Keep records of purchase date, sale date, cost basis, and any fees paid',
    'Capital losses can offset capital gains; up to $3,000 of excess losses may offset ordinary income per year',
    'State capital gains taxes vary widely and are not included in this estimate',
    'Speak with a CPA or tax advisor for filing, loss harvesting, or complex situations'
  ]

  const howItWorksSteps = [
    {
      title: 'Enter your sale details',
      description: 'Provide purchase price, sale price, holding period, and approximate annual income.'
    },
    {
      title: 'Calculate your gain',
      description: 'The tool subtracts cost basis from proceeds and selects a federal rate based on holding period and income.'
    },
    {
      title: 'Review the estimate',
      description: 'View estimated tax owed, after-tax return, and a summary you can copy or share.'
    }
  ]

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculateActionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      
      <main className="container section-responsive">
        <Breadcrumbs 
          items={[
            { name: 'Tools', url: '/tools' },
            { name: 'Finance', url: '/tools#finance' },
            { name: 'Capital Gains Calculator', url: '/capital-gains-calculator' }
          ]}
        />
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">
            Capital Gains Tax Calculator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Estimate US federal capital gains tax on a single investment sale. Enter your purchase price, sale price, how long you held the asset, and your income to see short-term or long-term tax estimates.
          </p>
        </div>

        <YMYLDisclaimer category="finance" />

        <div className="max-w-4xl mx-auto fade-in-up">
          <CapitalGainsCalculatorClient />
        </div>

        <AdUnit slot={1} />

        <section className="max-w-3xl mx-auto mt-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">How capital gains tax works</h2>
          <p className="text-slate-600 mb-4">
            When you sell an investment for more than you paid, the profit is a capital gain. The IRS treats gains differently depending on how long you owned the asset. Gains on assets held one year or less are short-term and generally taxed at ordinary income rates. Gains on assets held more than one year are long-term and typically taxed at lower federal rates.
          </p>
          <p className="text-slate-600 mb-4">
            Your actual tax bill depends on your full tax picture—income, filing status, deductions, state taxes, and other factors. This calculator gives a simplified federal estimate for one sale so you can plan ahead, not a substitute for professional tax preparation.
          </p>
        </section>

        <AdUnit slot={2} />

        <HowItWorks 
          title="How This Calculator Works"
          steps={howItWorksSteps}
          className="bg-slate-50/50"
        />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Capital Gains Tax Calculator"
            description={
              <>
                <p className="mb-4">
                  Use this free tool to estimate federal capital gains tax on a single sale. It applies 2024 US federal bracket logic to your inputs and shows capital gain, estimated tax, and after-tax return. All calculations run in your browser—nothing is stored on our servers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">Short-term gains</h4>
                    <p className="text-sm text-amber-700">
                      Taxed at ordinary income rates based on your entered annual income.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">Long-term gains</h4>
                    <p className="text-sm text-emerald-700">
                      Assets held more than one year may qualify for reduced federal rates (0%, 15%, or 20%).
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">Estimate only</h4>
                    <p className="text-sm text-blue-700">
                      Does not include state tax, NIIT, AMT, or filing-status adjustments.
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
          <RelatedTools currentTool="/capital-gains-calculator" category="finance" />
        </div>

        <RelatedToolsBento 
          currentTool="/capital-gains-calculator"
          tools={financeRelatedTools}
          title="More Finance Tools To Explore"
          className="bg-slate-50/50"
        />
      </main>

      <Footer />
    </div>
  )
}
