import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import PaintCostCalculatorClient from '@/components/tools/PaintCostCalculatorClient'
import PaintCostGuideContent from '@/components/PaintCostGuideContent'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import Breadcrumbs from '@/components/Breadcrumbs'
import HowItWorks from '@/components/HowItWorks'
import ToolJsonLd from '@/components/ToolJsonLd'
import { buildToolPageSchemas } from '@/lib/build-tool-schemas'
import { CALCULATOR_SEO } from '@/lib/calculator-seo-config'
import { PAINT_COST_FAQS } from '@/lib/paint-cost-content'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Paint Cost Calculator — Liters & Budget',
  description:
    'Estimate paint liters and cost for a rectangular room. Metric dimensions, coat count, coverage math, and worked examples for DIY planning.',
  keywords:
    'paint cost calculator, how much paint do I need, room paint estimate, paint coverage calculator, DIY painting budget',
  url: 'https://calcuzy.app/paint-cost-calculator',
  image: '/og/og-tools.png',
})

export default function PaintCostCalculatorPage() {
  const steps = [
    { title: 'Measure the room', description: 'Enter length, width, and height in meters.' },
    { title: 'Set coats', description: 'Choose how many coats you plan to apply (often two for a color change).' },
    { title: 'Enter paint price', description: 'Add your local cost per liter from the store or online listing.' },
    { title: 'Calculate', description: 'Review wall area, total painted area, liters needed, and estimated cost.' },
  ]

  const tips = [
    'Buy 10–15% extra paint for touch-ups and uneven surfaces',
    'Use primer when covering dark colors or bare drywall',
    'Test a sample patch in your room lighting before buying bulk',
    'Flat paint often covers better than high-gloss on large walls',
    'Ventilate the room and follow the manufacturer dry-time between coats',
  ]

  const howItWorksSteps = [
    { title: 'Enter room size', description: 'Length, width, and height define the wall and ceiling surface area.' },
    { title: 'Apply coverage math', description: 'Total area × coats ÷ 10 m²/L gives an approximate liter count.' },
    { title: 'Multiply by price', description: 'Liters × cost per liter produces a rough materials budget.' },
  ]

  const schemas = buildToolPageSchemas({
    tool: {
      name: 'Paint Cost Calculator',
      description:
        'Estimate paint liters and total cost for walls and ceiling of a rectangular room using room dimensions, coats, and price per liter.',
      url: 'https://calcuzy.app/paint-cost-calculator',
      category: 'UtilityApplication',
      features: ['Wall and ceiling area', 'Standard door/window deduction', 'Multiple coats', 'Liter estimate', 'Cost total'],
    },
    breadcrumbItems: [
      { name: 'Home', url: 'https://calcuzy.app' },
      { name: 'Tools', url: 'https://calcuzy.app/tools' },
      { name: 'Paint Cost Calculator', url: 'https://calcuzy.app/paint-cost-calculator' },
    ],
    faqs: PAINT_COST_FAQS,
    howToSteps: howItWorksSteps,
    howTo: CALCULATOR_SEO['paint-cost-calculator'].howTo,
    calculateAction: CALCULATOR_SEO['paint-cost-calculator'].calculateAction,
  })

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <ToolJsonLd schemas={schemas} />
      <Navbar />

      <main className="container section-responsive">
        <Breadcrumbs
          items={[
            { name: 'Tools', url: '/tools' },
            { name: 'Paint Cost Calculator', url: '/paint-cost-calculator' },
          ]}
        />
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">Paint Cost Calculator</h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-4">
            Estimate how much paint you need and what it might cost for a rectangular room. Enter dimensions in
            meters, number of coats, and price per liter.
          </p>
          <p className="paragraph text-center max-w-3xl mx-auto text-secondary-text">
            Results are a DIY planning guide—not a professional quantity survey. Check coverage on your paint can
            and round up when ordering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto fade-in-up">
          <PaintCostCalculatorClient />
        </div>

        <AdUnit slot={1} />

        <section className="max-w-3xl mx-auto mt-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Planning a paint project</h2>
          <p className="text-slate-600 mb-4">
            Most interior jobs need two coats for even color, especially when covering a darker shade. Ceilings,
            closets, and accent walls change the total area—this tool assumes you paint all four walls plus the
            ceiling in one color.
          </p>
          <p className="text-slate-600 mb-4">
            Prep work (cleaning, patching, sanding, taping) affects how much paint actually covers. The calculator
            uses 10 m² per liter per coat as a default—your label may say 8 or 12.
          </p>
        </section>

        <PaintCostGuideContent />

        <HowItWorks title="How This Calculator Works" steps={howItWorksSteps} className="bg-slate-50/50" />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Paint Cost Calculator"
            description={
              <>
                <p className="mb-4">
                  This tool totals wall and ceiling square meters, subtracts a standard door and window opening,
                  applies your coat count, and converts to liters using 10 m² per liter. All math runs locally in
                  your browser.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">Walls + ceiling</h4>
                    <p className="text-sm text-blue-700">Four walls and ceiling area from your room dimensions.</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">Fixed openings</h4>
                    <p className="text-sm text-emerald-700">One standard door and window subtracted from wall area.</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">Estimate only</h4>
                    <p className="text-sm text-amber-700">Coverage varies by product—verify on the label before buying.</p>
                  </div>
                </div>
              </>
            }
            steps={steps}
            faqs={PAINT_COST_FAQS}
            tips={tips}
          />
        </div>

        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/paint-cost-calculator" category="calculators" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
