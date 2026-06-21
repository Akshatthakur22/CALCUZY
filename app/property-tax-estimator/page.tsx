import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import PropertyTaxEstimatorClient from '@/components/tools/PropertyTaxEstimatorClient'
import PropertyTaxGuideContent from '@/components/PropertyTaxGuideContent'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import Breadcrumbs from '@/components/Breadcrumbs'
import HowItWorks from '@/components/HowItWorks'
import YMYLDisclaimer from '@/components/YMYLDisclaimer'
import ToolJsonLd from '@/components/ToolJsonLd'
import { buildToolPageSchemas } from '@/lib/build-tool-schemas'
import { CALCULATOR_SEO } from '@/lib/calculator-seo-config'
import { PROPERTY_TAX_FAQS } from '@/lib/property-tax-content'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Property Tax Estimator — Annual & Monthly',
  description:
    'Estimate annual and monthly property tax from home value, local rate, and exemptions. Formulas, examples, and references—not an official tax bill.',
  keywords:
    'property tax estimator, property tax calculator, annual property tax, homestead exemption, effective tax rate',
  url: 'https://calcuzy.app/property-tax-estimator',
  image: '/og/og-finance.png',
})

export default function PropertyTaxEstimatorPage() {
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
    { title: 'Taxable value', description: 'Property value minus exemptions (not below zero).' },
    { title: 'Apply rate', description: 'Taxable value × rate ÷ 100 = estimated annual tax.' },
    { title: 'Monthly view', description: 'Annual tax ÷ 12 for escrow or budgeting purposes.' },
  ]

  const schemas = buildToolPageSchemas({
    tool: {
      name: 'Property Tax Estimator',
      description:
        'Estimate property taxes from assessed or market value, tax rate percentage, and dollar exemptions.',
      url: 'https://calcuzy.app/property-tax-estimator',
      category: 'FinanceApplication',
      features: ['Annual tax estimate', 'Monthly payment', 'Exemption field', 'Effective rate', 'Custom tax rate'],
    },
    breadcrumbItems: [
      { name: 'Home', url: 'https://calcuzy.app' },
      { name: 'Tools', url: 'https://calcuzy.app/tools' },
      { name: 'Finance', url: 'https://calcuzy.app/tools#finance' },
      { name: 'Property Tax Estimator', url: 'https://calcuzy.app/property-tax-estimator' },
    ],
    faqs: PROPERTY_TAX_FAQS,
    howToSteps: howItWorksSteps,
    howTo: CALCULATOR_SEO['property-tax-estimator'].howTo,
    calculateAction: CALCULATOR_SEO['property-tax-estimator'].calculateAction,
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
            { name: 'Property Tax Estimator', url: '/property-tax-estimator' },
          ]}
        />
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">Property Tax Estimator</h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-4">
            Estimate annual and monthly property tax from home value, your local rate, and exemptions. Useful when
            comparing rent vs buy or building a housing budget.
          </p>
          <p className="paragraph text-center max-w-3xl mx-auto text-secondary-text">
            This is an educational estimate—not a bill from your assessor or tax advice. Confirm rates and assessed
            values with your county before making financial decisions.
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
            Local governments fund schools, roads, and services partly through property tax. Your bill depends on how
            the assessor values your home and the tax rates voters and officials set in your area.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm not-prose text-slate-800">
            Annual tax = (Property value − Exemptions) × Rate ÷ 100
            <br />
            Monthly tax = Annual tax ÷ 12
          </div>
        </section>

        <PropertyTaxGuideContent />

        <HowItWorks title="How This Estimator Works" steps={howItWorksSteps} className="bg-slate-50/50" />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Property Tax Estimator"
            description={
              <>
                <p className="mb-4">
                  Enter value, rate, and exemptions to see a straight-line estimate. Real bills may include multiple
                  line items, caps, and assessment ratios that this tool does not model.
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
            faqs={PROPERTY_TAX_FAQS}
            tips={tips}
          />
        </div>

        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <Card animation="fade-in-up">
            <h2 className="heading-2 mb-4">Compare housing costs</h2>
            <p className="text-secondary-text mb-4">
              Pair this estimate with our{' '}
              <Link href="/rent-affordability-calculator" className="text-blue-600 hover:underline">
                rent affordability calculator
              </Link>{' '}
              to see whether buying or renting fits your monthly budget.
            </p>
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
