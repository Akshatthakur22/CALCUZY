import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import RentAffordabilityCalculatorClient from '@/components/tools/RentAffordabilityCalculatorClient'
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
  title: 'Rent Affordability Calculator',
  description: 'See how much rent fits your budget using the 30% guideline, your income, and monthly expenses. Estimate only—not financial advice.',
  keywords: 'rent affordability calculator, how much rent can I afford, 30 percent rule, rent budget, housing affordability',
  url: 'https://calcuzy.app/rent-affordability-calculator',
  image: '/og/og-tools.png',
})

export default function RentAffordabilityCalculatorPage() {
  const faqData = [
    {
      question: 'How does this calculator work?',
      answer: 'Enter your gross monthly income, desired rent, other monthly expenses, and a rent guideline percentage (30% by default). The tool shows a recommended maximum rent (income × percentage), rent as a share of income, money left after rent and expenses, and a simple comfortable / moderate / stretched status.'
    },
    {
      question: 'What is the 30% rule?',
      answer: 'A common rule of thumb says housing costs should stay at or below about 30% of gross monthly income. It is a starting point, not a law—high-cost cities, debt loads, and savings goals may mean you need a lower share or a different budget split.'
    },
    {
      question: 'Should I use gross or net income?',
      answer: 'This tool uses gross (pre-tax) income for the percentage guideline, which matches how many housing counselors describe the 30% rule. For a tighter view, include taxes and other deductions inside your “total monthly expenses” field.'
    },
    {
      question: 'What expenses should I include besides rent?',
      answer: 'Include recurring non-housing costs: loan payments, insurance, groceries, transportation, subscriptions, childcare, and savings you commit to each month. The more complete your expense total, the more realistic your “remaining income” figure.'
    },
    {
      question: 'Does this include utilities or renters insurance?',
      answer: 'Only if you add them to your desired rent figure or monthly expenses. Some leases bundle utilities; others do not. Factor parking, pet fees, and renters insurance into your housing budget separately if needed.'
    },
    {
      question: 'Is this financial advice?',
      answer: 'No. This is a simple budgeting estimate. Landlords, lenders, and local programs may use different criteria. Speak with a housing counselor or financial advisor for decisions that affect your lease or long-term finances.'
    }
  ]

  const steps = [
    { title: 'Enter gross income', description: 'Input your total monthly income before taxes.' },
    { title: 'Add desired rent', description: 'Enter the monthly rent you are considering.' },
    { title: 'List other expenses', description: 'Include non-rent bills so remaining income reflects real cash flow.' },
    { title: 'Set guideline %', description: 'Keep 30% or adjust the housing percentage target.' },
    { title: 'Review results', description: 'Compare recommended max rent, rent share of income, and affordability status.' }
  ]

  const tips = [
    'In expensive cities, many renters exceed 30%—know the trade-off to savings and emergencies',
    'Include utilities, parking, and renters insurance in your housing number when they are separate',
    'Roommates or a longer commute can lower rent without changing income',
    'Aim to keep an emergency fund even if rent fits the guideline',
    'Re-run the calculator when income or expenses change'
  ]

  const howItWorksSteps = [
    {
      title: 'Enter income and rent',
      description: 'Provide gross monthly income and the rent amount you want to check.'
    },
    {
      title: 'Subtract other bills',
      description: 'Add monthly expenses outside of rent to see what is left after housing.'
    },
    {
      title: 'Compare to the guideline',
      description: 'See recommended max rent, percent of income, and a simple status label.'
    }
  ]

  const schemas = buildToolPageSchemas({
    tool: {
      name: 'Rent Affordability Calculator',
      description: 'Estimate affordable rent based on gross monthly income, other expenses, and a configurable percentage guideline.',
      url: 'https://calcuzy.app/rent-affordability-calculator',
      category: 'FinanceApplication',
      features: ['30% rule default', 'Custom rent percentage', 'Expense adjustment', 'Affordability status', 'Remaining income'],
    },
    breadcrumbItems: [
      { name: 'Home', url: 'https://calcuzy.app' },
      { name: 'Tools', url: 'https://calcuzy.app/tools' },
      { name: 'Finance', url: 'https://calcuzy.app/tools#finance' },
      { name: 'Rent Affordability Calculator', url: 'https://calcuzy.app/rent-affordability-calculator' },
    ],
    faqs: faqData,
    howToSteps: howItWorksSteps,
    howTo: CALCULATOR_SEO['rent-affordability-calculator'].howTo,
    calculateAction: CALCULATOR_SEO['rent-affordability-calculator'].calculateAction,
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
            { name: 'Rent Affordability', url: '/rent-affordability-calculator' }
          ]}
        />
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">
            Rent Affordability Calculator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Check whether a rent fits your budget using gross income, monthly expenses, and the common 30% housing guideline. This is an estimate for planning—not financial or rental advice.
          </p>
        </div>

        <YMYLDisclaimer category="finance" />

        <div className="max-w-4xl mx-auto fade-in-up">
          <RentAffordabilityCalculatorClient />
        </div>

        <AdUnit slot={1} />

        <section className="max-w-3xl mx-auto mt-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">The 30% rule in practice</h2>
          <p className="text-slate-600 mb-4">
            Many housing counselors suggest spending roughly 30% or less of gross income on rent. At 25% or below, you may have more room for savings and unexpected bills. Above 35%, rent can strain day-to-day finances unless other costs are very low or income is stable and rising.
          </p>
          <p className="text-slate-600 mb-4">
            Location matters: market rents in some cities push households above 30% without other options. Use this calculator to see your numbers, then weigh commute costs, utilities, debt payments, and emergency savings—not the headline rent alone.
          </p>
          <GuideLink toolPath="/rent-affordability-calculator" />
        </section>

        <AdUnit slot={2} />

        <HowItWorks
          title="How This Calculator Works"
          steps={howItWorksSteps}
          className="bg-slate-50/50"
        />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Rent Affordability Calculator"
            description={
              <>
                <p className="mb-4">
                  Compare your desired rent to a percentage-based cap and to what is left after other monthly expenses. Status labels use rent as a share of income: up to 30% comfortable, 31–40% moderate, above 40% stretched.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">Comfortable</h4>
                    <p className="text-sm text-emerald-700">
                      Rent is about 30% of gross income or less in this tool’s labels.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">Moderate</h4>
                    <p className="text-sm text-amber-700">
                      Rent is roughly 31–40% of income— workable but tighter.
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <h4 className="font-semibold text-red-800 mb-2">Stretched</h4>
                    <p className="text-sm text-red-700">
                      Rent exceeds about 40% of income— consider lower housing or higher income.
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
          <RelatedTools currentTool="/rent-affordability-calculator" category="finance" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
