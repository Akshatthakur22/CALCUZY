import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import RentAffordabilityCalculatorClient from '@/components/tools/RentAffordabilityCalculatorClient'
import RentAffordabilityGuideContent from '@/components/RentAffordabilityGuideContent'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import Breadcrumbs from '@/components/Breadcrumbs'
import HowItWorks from '@/components/HowItWorks'
import YMYLDisclaimer from '@/components/YMYLDisclaimer'
import GuideLink from '@/components/GuideLink'
import ToolJsonLd from '@/components/ToolJsonLd'
import { buildToolPageSchemas } from '@/lib/build-tool-schemas'
import { CALCULATOR_SEO } from '@/lib/calculator-seo-config'
import {
  RENT_AFFORDABILITY_FAQS,
  RENT_AFFORDABILITY_HOW_IT_WORKS,
  RENT_AFFORDABILITY_STEPS,
  RENT_AFFORDABILITY_TIPS,
} from '@/lib/rent-affordability-content'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Rent Affordability Calculator — 30% Rule',
  description:
    'See how much rent fits your budget using gross income, monthly expenses, and the 30% guideline. Free instant estimate—not financial advice.',
  keywords:
    'rent affordability calculator, how much rent can I afford, 30 percent rule rent, rent to income ratio calculator, housing budget calculator, apartment affordability calculator',
  url: 'https://calcuzy.app/rent-affordability-calculator',
  image: '/og/og-finance.png',
})

export default function RentAffordabilityCalculatorPage() {
  const schemas = buildToolPageSchemas({
    tool: {
      name: 'Rent Affordability Calculator',
      description:
        'Estimate affordable rent based on gross monthly income, other expenses, and a configurable percentage guideline.',
      url: 'https://calcuzy.app/rent-affordability-calculator',
      category: 'FinanceApplication',
      features: [
        '30% rule default',
        'Custom rent percentage',
        'Expense adjustment',
        'Affordability status',
        'Remaining income',
      ],
    },
    breadcrumbItems: [
      { name: 'Home', url: 'https://calcuzy.app' },
      { name: 'Tools', url: 'https://calcuzy.app/tools' },
      { name: 'Finance', url: 'https://calcuzy.app/tools#finance' },
      { name: 'Rent Affordability Calculator', url: 'https://calcuzy.app/rent-affordability-calculator' },
    ],
    faqs: RENT_AFFORDABILITY_FAQS,
    howToSteps: RENT_AFFORDABILITY_HOW_IT_WORKS,
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
            { name: 'Rent Affordability', url: '/rent-affordability-calculator' },
          ]}
        />
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">Rent Affordability Calculator</h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-4">
            Signing a lease without running the numbers first is one of the fastest ways to turn a good apartment
            into a monthly stress test. This calculator helps you answer a practical question before you tour another
            unit: does this rent fit your real budget, not just your headline income?
          </p>
          <p className="paragraph text-center max-w-3xl mx-auto text-secondary-text">
            Enter gross monthly income, the rent you are considering, your other recurring expenses, and an optional
            housing guideline (30% by default). See recommended maximum rent, rent as a percentage of income, cash
            left after housing and bills, and a simple status—comfortable, moderate, or stretched. Built for renters,
            relocators, and anyone comparing listings—not a substitute for financial advice.
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
            Many housing counselors suggest spending roughly 30% or less of gross income on rent. At 25% or below, you
            may have more room for savings and unexpected bills. Above 35%, rent can strain day-to-day finances unless
            other costs are very low or income is stable and rising.
          </p>
          <p className="text-slate-600 mb-4">
            Location matters: market rents in some cities push households above 30% without other options. Use this
            calculator to see your numbers, then weigh commute costs, utilities, debt payments, and emergency
            savings—not the headline rent alone.
          </p>
          <GuideLink toolPath="/rent-affordability-calculator" />
        </section>

        <RentAffordabilityGuideContent />

        <AdUnit slot={2} />

        <HowItWorks
          title="How This Calculator Works"
          steps={RENT_AFFORDABILITY_HOW_IT_WORKS}
          className="bg-slate-50/50"
        />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Rent Affordability Calculator"
            description={
              <>
                <p className="mb-4">
                  Compare your desired rent to a percentage-based cap and to what is left after other monthly
                  expenses. Status labels use rent as a share of income: up to 30% comfortable, 31–40% moderate,
                  above 40% stretched.
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
                      Rent is roughly 31–40% of income—workable but tighter.
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <h4 className="font-semibold text-red-800 mb-2">Stretched</h4>
                    <p className="text-sm text-red-700">
                      Rent exceeds about 40% of income—consider lower housing or higher income.
                    </p>
                  </div>
                </div>
              </>
            }
            steps={RENT_AFFORDABILITY_STEPS}
            faqs={RENT_AFFORDABILITY_FAQS}
            tips={RENT_AFFORDABILITY_TIPS}
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
