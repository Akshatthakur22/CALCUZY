import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import PropertyTaxEstimatorClient from '@/components/tools/PropertyTaxEstimatorClient'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import Breadcrumbs from '@/components/Breadcrumbs'
import HowItWorks from '@/components/HowItWorks'
import YMYLDisclaimer from '@/components/YMYLDisclaimer'
import { createMetadata, createToolSchema, createFAQSchema, createBreadcrumbSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Property Tax Estimator',
  description: 'Estimate annual and monthly property tax from home value, local tax rate, and exemptions. Simple formula for budgeting—not a bill from your assessor.',
  keywords: 'property tax estimator, property tax calculator, annual property tax, homestead exemption, effective tax rate',
  url: 'https://calcuzy.app/property-tax-estimator',
  image: '/og/og-tools.svg',
})

export default function PropertyTaxEstimatorPage() {
  const structuredData = createToolSchema({
    name: 'Property Tax Estimator',
    description: 'Estimate property taxes from assessed or market value, tax rate percentage, and dollar exemptions.',
    url: 'https://calcuzy.app/property-tax-estimator',
    category: 'FinanceApplication',
    features: ['Annual tax estimate', 'Monthly payment', 'Exemption field', 'Effective rate', 'Custom tax rate'],
  })

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://calcuzy.app' },
    { name: 'Tools', url: 'https://calcuzy.app/tools' },
    { name: 'Finance', url: 'https://calcuzy.app/tools#finance' },
    { name: 'Property Tax Estimator', url: 'https://calcuzy.app/property-tax-estimator' },
  ])

  const faqData = [
    {
      question: 'How does this estimator calculate tax?',
      answer: 'It subtracts your exemption amount from property value to get taxable value, multiplies by your tax rate (as a percent), and divides by 100 for annual tax. Monthly tax is annual ÷ 12. Effective rate is annual tax divided by full property value.',
    },
    {
      question: 'What tax rate should I enter?',
      answer: 'Use the combined rate for your county, city, school district, and special levies if you know it—often roughly 0.5%–2.5% of assessed value in the US, but it varies widely. Your property tax bill or county assessor website is the best source.',
    },
    {
      question: 'Assessed value vs market value?',
      answer: 'Tax bills usually use assessed value, which may differ from what your home would sell for. If you only know market value, enter that as a rough starting point and expect your actual bill to follow local assessment rules.',
    },
    {
      question: 'What exemptions can I include?',
      answer: 'Enter the total dollar reduction you qualify for—common examples include homestead, senior, veteran, or disability exemptions where your locality offers them. Rules and amounts differ by state and county.',
    },
    {
      question: 'Does this include all local fees?',
      answer: 'No. Special assessments, mello-roos, stormwater fees, or bond measures may appear on a real bill but are not modeled here unless you fold them into your rate manually.',
    },
    {
      question: 'Is this tax or financial advice?',
      answer: 'No. This is a simplified budgeting calculator. For appeals, deductions, or investment decisions, consult your county assessor or a qualified tax professional.',
    },
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'Enter property value', description: 'Use assessed value if you have it; otherwise market value as a proxy.' },
    { title: 'Set tax rate', description: 'Enter your local effective rate as a percentage (default 1.2% is only an example).' },
    { title: 'Add exemptions', description: 'Subtract homestead or other exemptions in dollars if applicable.' },
    { title: 'Review results', description: 'See annual tax, monthly equivalent, taxable value, and effective rate.' },
  ]

  const tips = [
    'Check your county assessor site for official rates and exemption forms',
    'Reassessment after purchase can change taxes even if rates stay flat',
    'Budget for annual increases—rates and values both can rise',
    'Itemized filers may deduct property tax up to federal SALT limits',
    'Appeal the assessment if comparable homes are taxed lower',
  ]

  const howItWorksSteps = [
    {
      title: 'Taxable value',
      description: 'Property value minus exemptions (not below zero).',
    },
    {
      title: 'Apply rate',
      description: 'Taxable value × rate ÷ 100 = estimated annual tax.',
    },
    {
      title: 'Monthly view',
      description: 'Annual tax ÷ 12 for escrow or budgeting purposes.',
    },
  ]

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <main className="container section-responsive">
        <Breadcrumbs
          items={[
            { name: 'Tools', url: '/tools' },
            { name: 'Finance', url: '/tools#finance' },
            { name: 'Property Tax Estimator', url: '/property-tax-estimator' },
          ]}
        />
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">Property Tax Estimator</h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Estimate annual and monthly property tax from home value, your local rate, and exemptions. Useful for homebuying budgets—not a substitute for an official tax bill.
          </p>
        </div>

        <YMYLDisclaimer category="finance" />

        <div className="max-w-4xl mx-auto fade-in-up">
          <PropertyTaxEstimatorClient />
        </div>

        <AdUnit slot={1} />

        <section className="max-w-3xl mx-auto mt-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Understanding property tax</h2>
          <p className="text-slate-600 mb-4">
            Local governments fund schools, roads, and services partly through property tax. Your bill depends on how the assessor values your home and the tax rates voters and officials set in your area.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm not-prose text-slate-800">
            Annual tax = (Property value − Exemptions) × Rate ÷ 100<br />
            Monthly tax = Annual tax ÷ 12
          </div>
          <p className="text-slate-600 mt-4">
            Example: $350,000 value, $25,000 homestead exemption, 1.2% rate → ($350,000 − $25,000) × 0.012 = $3,900/year ($325/month).
          </p>
        </section>

        <AdUnit slot={2} />

        <HowItWorks title="How This Estimator Works" steps={howItWorksSteps} className="bg-slate-50/50" />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Property Tax Estimator"
            description={
              <>
                <p className="mb-4">
                  Enter value, rate, and exemptions to see a straight-line estimate. Real bills may include multiple line items, caps, and assessment ratios that this tool does not model.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">Annual + monthly</h4>
                    <p className="text-sm text-blue-700">See yearly tax and a monthly figure for budgeting.</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">Exemptions</h4>
                    <p className="text-sm text-emerald-700">Reduce taxable value when you know your exemption total.</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">Estimate only</h4>
                    <p className="text-sm text-amber-700">Confirm rates and values with your local assessor.</p>
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
          <Card animation="fade-in-up">
            <h2 className="heading-2 mb-4">Further reading</h2>
            <ul className="list-disc list-inside space-y-2 text-secondary-text">
              <li>
                <a href="https://taxfoundation.org/data/all/state/property-taxes-by-state-county-2023/" target="_blank" rel="noopener noreferrer" className="underline">
                  Tax Foundation: property taxes by state
                </a>
              </li>
              <li>
                <a href="https://www.nolo.com/legal-encyclopedia/how-property-taxes-are-calculated.html" target="_blank" rel="noopener noreferrer" className="underline">
                  Nolo: how property taxes are calculated
                </a>
              </li>
              <li>
                <Link href="/rent-affordability-calculator" className="underline">
                  Rent affordability calculator
                </Link>{' '}
                — compare housing costs
              </li>
            </ul>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/property-tax-estimator" category="finance" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
