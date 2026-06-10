import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import PaintCostCalculatorClient from '@/components/tools/PaintCostCalculatorClient'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import Breadcrumbs from '@/components/Breadcrumbs'
import HowItWorks from '@/components/HowItWorks'
import { createMetadata, createToolSchema, createFAQSchema, createBreadcrumbSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Paint Cost Calculator',
  description: 'Estimate paint quantity and cost for a rectangular room. Enter room dimensions in meters, number of coats, and price per liter. Rough planning estimate only.',
  keywords: 'paint cost calculator, how much paint do I need, room paint estimate, paint coverage calculator, DIY painting budget',
  url: 'https://calcuzy.app/paint-cost-calculator',
  image: '/og/og-tools.svg',
})

export default function PaintCostCalculatorPage() {
  const structuredData = createToolSchema({
    name: 'Paint Cost Calculator',
    description: 'Estimate paint liters and total cost for walls and ceiling of a rectangular room using room dimensions, coats, and price per liter.',
    url: 'https://calcuzy.app/paint-cost-calculator',
    category: 'UtilityApplication',
    features: ['Wall and ceiling area', 'Standard door/window deduction', 'Multiple coats', 'Liter estimate', 'Cost total'],
  })

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://calcuzy.app' },
    { name: 'Tools', url: 'https://calcuzy.app/tools' },
    { name: 'Paint Cost Calculator', url: 'https://calcuzy.app/paint-cost-calculator' },
  ])

  const faqData = [
    {
      question: 'How does this calculator estimate paint needed?',
      answer: 'It calculates wall area from room length, width, and height (four walls), subtracts a fixed allowance for one standard door and one window, adds ceiling area, multiplies by your number of coats, and divides by a default coverage of 10 square meters per liter.',
    },
    {
      question: 'Why are dimensions in meters?',
      answer: 'The tool uses meters for room size and liters for paint volume. If you measure in feet, convert to meters first (1 foot ≈ 0.305 meters). Coverage and pricing should match the units on your paint can label.',
    },
    {
      question: 'Does this account for primer or textured walls?',
      answer: 'No. Primer, rough surfaces, dark-to-light color changes, and porous drywall often need extra coats or more paint than a smooth, primed wall. Buy a little extra rather than relying on this as an exact order quantity.',
    },
    {
      question: 'How accurate is the coverage rate?',
      answer: 'Real coverage varies by paint brand, finish (flat vs gloss), application method, and surface. Labels often cite roughly 8–12 m² per liter for interior wall paint. This tool uses 10 m²/L as a middle estimate—check your product label.',
    },
    {
      question: 'Should I include trim, doors, or furniture?',
      answer: 'This calculator covers walls and ceiling only. Trim, cabinets, and furniture need separate measurements. Moving furniture and taping edges also affect time and materials but are not included here.',
    },
    {
      question: 'Is this a quote from a paint store?',
      answer: 'No. This is a free browser-based estimate for DIY planning. Always confirm quantities with your retailer and factor in sales tax, brushes, rollers, tape, and drop cloths separately.',
    },
  ]

  const faqSchema = createFAQSchema(faqData)

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
    {
      title: 'Enter room size',
      description: 'Length, width, and height define the wall and ceiling surface area.',
    },
    {
      title: 'Apply coverage math',
      description: 'Total area × coats ÷ 10 m²/L gives an approximate liter count.',
    },
    {
      title: 'Multiply by price',
      description: 'Liters × cost per liter produces a rough materials budget.',
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
            { name: 'Paint Cost Calculator', url: '/paint-cost-calculator' },
          ]}
        />
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">Paint Cost Calculator</h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Estimate how much paint you need and what it might cost for a rectangular room. Enter dimensions in meters, number of coats, and price per liter. Results are a planning guide—not a professional takeoff.
          </p>
        </div>

        <div className="max-w-4xl mx-auto fade-in-up">
          <PaintCostCalculatorClient />
        </div>

        <AdUnit slot={1} />

        <section className="max-w-3xl mx-auto mt-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Planning a paint project</h2>
          <p className="text-slate-600 mb-4">
            Most interior jobs need two coats for even color, especially when covering a darker shade. Ceilings, closets, and accent walls change the total area—this tool assumes you paint all four walls plus the ceiling in one color.
          </p>
          <p className="text-slate-600 mb-4">
            Prep work (cleaning, patching, sanding, taping) affects how much paint actually covers. Check the coverage figure on your paint can and round up when ordering.
          </p>
        </section>

        <AdUnit slot={2} />

        <HowItWorks title="How This Calculator Works" steps={howItWorksSteps} className="bg-slate-50/50" />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Paint Cost Calculator"
            description={
              <>
                <p className="mb-4">
                  This tool totals wall and ceiling square meters, subtracts a standard door and window opening, applies your coat count, and converts to liters using 10 m² per liter. All math runs locally in your browser.
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
            faqs={faqData}
            tips={tips}
          />
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/paint-cost-calculator" category="calculators" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
