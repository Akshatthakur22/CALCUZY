import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import PaintCostCalculatorClient from '@/components/tools/PaintCostCalculatorClient'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Paint Cost Calculator',
  description: 'Calculate paint cost for rooms with our free paint calculator. Estimate paint needed, coverage area, and total cost for your painting project.',
  keywords: 'paint cost calculator, paint estimator, room painting cost, paint coverage calculator, how much paint needed, painting cost estimator',
  url: 'https://calcuzy.app/paint-cost-calculator',
  image: '/og-tools.png',
})

export default function PaintCostCalculatorPage() {
  const structuredData = createToolSchema({
    name: 'Paint Cost Calculator',
    description: 'Calculate paint cost and coverage for room painting projects.',
    url: 'https://calcuzy.app/paint-cost-calculator',
    category: 'UtilityApplication'
  })

  const faqData = [
    {
      question: 'How much paint do I need for a 12x12 room?',
      answer: 'For a standard 12x12 room with 8-foot ceilings, you\'ll typically need about 2-3 gallons of paint for two coats.'
    },
    {
      question: 'Should I paint ceiling or walls first?',
      answer: 'Professional painters typically paint the ceiling first, then walls, then trim to prevent drips.'
    },
    {
      question: 'Do I need to prime before painting?',
      answer: 'Primer is necessary when painting over dark colors, glossy surfaces, new drywall, or stained areas.'
    },
    {
      question: 'How long does paint take to dry?',
      answer: 'Most latex paints are dry to the touch in 1-2 hours and can be recoated in 4 hours.'
    },
    {
      question: 'What\'s the difference between cheap and expensive paint?',
      answer: 'Premium paints offer better coverage, durability, and color retention with higher-quality resins.'
    },
    {
      question: 'How do I calculate paint for textured walls?',
      answer: 'For textured surfaces, add 20-25% more paint. For heavily textured surfaces, you may need up to 50% more.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

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
            Paint Cost Calculator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Calculate paint cost for your room with our comprehensive paint calculator. 
            Estimate paint needed, coverage area, and total cost for your painting project.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <PaintCostCalculatorClient />
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={300}>
            <h2 className="heading-2 mb-6">About Paint Cost Calculation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="heading-3 mb-3">Understanding Paint Coverage</h3>
                <p className="paragraph">
                  Paint coverage refers to the area that a specific amount of paint can cover. 
                  Most paint manufacturers provide coverage information on the product label, typically 
                  measured in square feet or square meters per gallon/liter. Standard coverage rates 
                  range from 250-400 square feet per gallon for interior paints.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Factors Affecting Paint Coverage</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Surface Texture</h4>
                    <p className="paragraph mb-0">
                      Rough or textured surfaces like brick, stucco, or popcorn ceilings require more paint 
                      than smooth surfaces like drywall or plaster. These surfaces may need up to 25% more paint.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Surface Color</h4>
                    <p className="paragraph mb-0">
                      Painting over dark colors with light colors requires more coats. Similarly, covering 
                      bright or bold colors may need additional primer and paint coats for proper coverage.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Paint Quality</h4>
                    <p className="paragraph mb-0">
                      Premium paints typically offer better coverage and may require fewer coats than 
                      economy paints. Higher-quality paints often provide better hiding power and durability.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Application Method</h4>
                    <p className="paragraph mb-0">
                      Rollers generally provide better coverage than brushes, while sprayers may use more 
                      paint due to overspray. The technique and tools used can significantly impact paint consumption.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Paint Calculation Formula</h3>
                <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                  Wall Area = 2 × (Length × Height) + 2 × (Width × Height)<br />
                  Ceiling Area = Length × Width<br />
                  Total Area = Wall Area + Ceiling Area - Door/Window Areas<br />
                  Paint Needed = (Total Area × Number of Coats) ÷ Coverage per Liter<br />
                  Total Cost = Paint Needed × Cost per Liter
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Standard Paint Coverage Rates</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-200 px-4 py-2 text-left">Paint Type</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Coverage (m²/liter)</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Recommended Coats</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">Interior Latex</td>
                        <td className="border border-gray-200 px-4 py-2">8-12</td>
                        <td className="border border-gray-200 px-4 py-2">2</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">Interior Oil-Based</td>
                        <td className="border border-gray-200 px-4 py-2">10-14</td>
                        <td className="border border-gray-200 px-4 py-2">2</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">Exterior Paint</td>
                        <td className="border border-gray-200 px-4 py-2">6-10</td>
                        <td className="border border-gray-200 px-4 py-2">2-3</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">Primer</td>
                        <td className="border border-gray-200 px-4 py-2">10-15</td>
                        <td className="border border-gray-200 px-4 py-2">1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Money-Saving Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Buy paint in bulk for larger projects to get volume discounts</li>
                  <li>Use primer when painting over dark colors to reduce topcoat needs</li>
                  <li>Consider paint and primer in one products for simple color changes</li>
                  <li>Proper surface preparation reduces the need for extra coats</li>
                  <li>Calculate carefully to avoid overbuying - check return policies</li>
                  <li>Look for seasonal sales and manufacturer rebates</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <AdUnit slot={3} />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Paint Cost Calculator"
            description={
              <>
                <p className="mb-4">
                  Calculate paint cost for your room with our comprehensive paint calculator. 
                  Estimate paint needed, coverage area, and total cost for any painting project.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">🎨 Coverage</h4>
                    <p className="text-sm text-blue-700">
                      Calculate exact paint needed for walls and ceilings.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2">💰 Cost</h4>
                    <p className="text-sm text-green-700">
                      Get accurate cost estimates for your project.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">📐 Precision</h4>
                    <p className="text-sm text-amber-700">
                      Account for doors, windows, and texture.
                    </p>
                  </div>
                </div>
              </>
            }
            steps={[
              { title: 'Enter Dimensions', description: 'Input your room length, width, and height.' },
              { title: 'Customize Options', description: 'Set paint price, coverage, and number of coats.' },
              { title: 'Get Estimate', description: 'View total area, paint needed, and cost breakdown.' }
            ]}
            faqs={faqData}
            tips={[
              'Buy paint in bulk for larger projects to get volume discounts',
              'Use primer when painting over dark colors to reduce topcoat needs',
              'Proper surface preparation reduces the need for extra coats',
              'Look for seasonal sales and manufacturer rebates'
            ]}
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
