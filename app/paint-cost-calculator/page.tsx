import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import PaintCostCalculatorClient from '@/components/tools/PaintCostCalculatorClient'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Paint Cost Calculator - Room Painting Cost Estimator | Calcuzy.com',
  description: 'Calculate paint cost for rooms with our free paint calculator. Estimate paint needed, coverage area, and total cost for your painting project.',
  keywords: 'paint cost calculator, paint estimator, room painting cost, paint coverage calculator, how much paint needed, painting cost estimator',
  url: 'https://calcuzy.com/paint-cost-calculator',
  image: '/og-tools.png',
})

export default function PaintCostCalculatorPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Paint Cost Calculator",
    "description": "Calculate paint cost and coverage for room painting projects",
    "url": "https://calcuzy.com/paint-cost-calculator",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={400}>
            <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="heading-3 mb-2">How much paint do I need for a 12x12 room?</h3>
                <p className="paragraph">
                  For a standard 12x12 room with 8-foot ceilings, you&apos;ll typically need about 2-3 gallons 
                  of paint for two coats of walls and ceiling. This accounts for standard door and window 
                  openings. Always buy a little extra for touch-ups.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Should I paint ceiling or walls first?</h3>
                <p className="paragraph">
                  Professional painters typically paint the ceiling first, then walls, then trim. This prevents 
                  paint drips from the ceiling from marring freshly painted walls. It&apos;s also easier to cut in 
                  the wall-to-ceiling line when the ceiling is already painted.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Do I need to prime before painting?</h3>
                <p className="paragraph">
                  Primer is necessary when painting over dark colors, glossy surfaces, new drywall, or stained 
                  areas. For repainting a similar color over a clean, matte surface, you might skip primer. 
                  When in doubt, use primer for better results and potentially fewer topcoats.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">How long does paint take to dry?</h3>
                <p className="paragraph">
                  Most latex paints are dry to the touch in 1-2 hours and can be recoated in 4 hours. 
                  Oil-based paints take longer, typically 6-8 hours to dry and 24 hours before recoating. 
                  However, paint can take up to 30 days to fully cure and reach maximum hardness.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What&apos;s the difference between cheap and expensive paint?</h3>
                <p className="paragraph">
                  Premium paints offer better coverage, durability, color retention, and easier application. 
                  They often contain more pigments and higher-quality resins. While more expensive upfront, 
                  they may save money in the long run by requiring fewer coats and lasting longer between repaints.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">How do I calculate paint for textured walls?</h3>
                <p className="paragraph">
                  For textured surfaces like orange peel or knockdown textures, add 20-25% more paint to your 
                  calculation. For heavily textured surfaces like popcorn ceilings or brick, you may need 
                  up to 50% more paint. It&apos;s always better to have extra than to run out mid-project.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={500}>
            <h2 className="heading-2 mb-6">Related Tools</h2>
            <div className="grid-responsive-3 gap-6">
              <Link href="/tools" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">All Calculators</h3>
                  <p className="text-sm text-gray-600">Explore our complete collection of useful calculators</p>
                </div>
              </Link>
              <Link href="/unit-converter" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">Unit Converter</h3>
                  <p className="text-sm text-gray-600">Convert between different units of measurement</p>
                </div>
              </Link>
              <Link href="/random-number-generator" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">Random Number Generator</h3>
                  <p className="text-sm text-gray-600">Generate random numbers for various purposes</p>
                </div>
              </Link>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
