import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import PropertyTaxEstimatorClient from '@/components/tools/PropertyTaxEstimatorClient'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Property Tax Estimator',
  description: 'Estimate property taxes based on home value and local tax rates. Free property tax calculator with exemptions and monthly payment estimates.',
  keywords: 'property tax calculator, home tax estimator, real estate tax, county tax rates, property tax assessment',
  url: 'https://calcuzy.app/property-tax-estimator',
  image: '/og-tools.png',
})

export default function PropertyTaxEstimatorPage() {
  const structuredData = createToolSchema({
    name: 'Property Tax Estimator',
    description: 'Calculate property taxes based on home value and local tax rates with exemption support',
    url: 'https://calcuzy.app/property-tax-estimator',
    category: 'FinanceApplication',
    features: ['Property value analysis', 'Tax rate calculation', 'Exemption support', 'Monthly payment breakdown']
  })

  const faqData = [
    {
      question: 'How are property taxes calculated?',
      answer: 'Property taxes are calculated by multiplying your property\'s assessed value by the local tax rate (mill rate). The assessed value may differ from market value depending on your jurisdiction.'
    },
    {
      question: 'What is a homestead exemption?',
      answer: 'A homestead exemption reduces the taxable value of your primary residence. Amounts vary by state but typically range from $5,000 to $50,000, lowering your annual tax bill.'
    },
    {
      question: 'How often are property taxes reassessed?',
      answer: 'Assessment frequency varies by location. Some areas reassess annually, while others do so every 2-5 years or only when property ownership changes.'
    },
    {
      question: 'Can I appeal my property tax assessment?',
      answer: 'Yes, most jurisdictions allow property tax appeals. You typically need to file within 30-90 days of receiving your assessment notice and provide evidence of lower value.'
    },
    {
      question: 'What are average property tax rates in the US?',
      answer: 'Average US property tax rates range from 0.5% to 2.2% depending on the state. New Jersey has the highest rates around 2.2%, while Hawaii has the lowest around 0.3%.'
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
            Property Tax Estimator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Estimate your annual property taxes based on home value and local tax rates. 
            Calculate monthly payments and understand your property tax obligations.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <PropertyTaxEstimatorClient />
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={300}>
            <h2 className="heading-2 mb-6">Understanding Property Taxes</h2>
            <div className="space-y-6">
              <div>
                <h3 className="heading-3 mb-3">What are Property Taxes?</h3>
                <p className="paragraph">
                  Property taxes are annual taxes levied by local governments on real estate ownership. 
                  The tax amount is typically calculated as a percentage of your property&apos;s assessed value, 
                  which may differ from market value. These taxes fund local services like schools, 
                  roads, and emergency services.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-3">How Property Tax is Calculated</h3>
                <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                  Annual Property Tax = (Property Value - Exemptions) × Tax Rate<br />
                  Monthly Property Tax = Annual Tax ÷ 12<br />
                  Effective Tax Rate = Annual Tax ÷ Property Value × 100
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Common Property Tax Exemptions</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Homestead Exemption</h4>
                    <p className="paragraph mb-0">
                      Reduces taxable value for primary residences. Amounts vary by state but typically 
                      range from $5,000 to $50,000 reduction in assessed value.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Senior Citizen Exemption</h4>
                    <p className="paragraph mb-0">
                      Additional tax relief for homeowners above certain age (usually 65+). May include 
                      income requirements and provide larger tax reductions.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Disability Exemption</h4>
                    <p className="paragraph mb-0">
                      Tax relief for homeowners with qualifying disabilities. Often requires medical 
                      documentation and may provide significant tax reductions.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">US Property Tax Rates by Region</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-200 px-4 py-2 text-left">Region</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Average Rate</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">Northeast</td>
                        <td className="border border-gray-200 px-4 py-2">1.5-2.2%</td>
                        <td className="border border-gray-200 px-4 py-2">Higher rates, older housing stock</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">Midwest</td>
                        <td className="border border-gray-200 px-4 py-2">1.2-1.8%</td>
                        <td className="border border-gray-200 px-4 py-2">Moderate rates, stable values</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">South</td>
                        <td className="border border-gray-200 px-4 py-2">0.5-1.5%</td>
                        <td className="border border-gray-200 px-4 py-2">Lower rates, faster growth</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">West</td>
                        <td className="border border-gray-200 px-4 py-2">0.8-2.0%</td>
                        <td className="border border-gray-200 px-4 py-2">Varies widely by state</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Property Tax Planning Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Review your property assessment annually for accuracy</li>
                  <li>Apply for all eligible exemptions and deductions</li>
                  <li>Consider property tax impact when buying a home</li>
                  <li>Budget for potential increases in tax rates</li>
                  <li>Appeal assessments that seem too high</li>
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
                <h3 className="heading-3 mb-2">How accurate are property tax estimates?</h3>
                <p className="paragraph">
                  Our estimates are based on typical tax rates and may differ from your actual tax bill. 
                  Local assessors use specific formulas and may include special district taxes, school taxes, 
                  or other levies that vary by location.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What&apos;s the difference between assessed value and market value?</h3>
                <p className="paragraph">
                  Assessed value is the tax authority&apos;s valuation of your property for tax purposes, 
                  often lower than market value. Market value is what your home would sell for on the open market. 
                  Property taxes are calculated on assessed value.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Can property taxes increase significantly?</h3>
                <p className="paragraph">
                  Yes, property taxes can increase due to reassessment, rate changes, or voter-approved 
                  measures. Many states limit annual increases (capping), but significant jumps can occur 
                  when properties are reassessed after ownership changes.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">How do I find my local property tax rate?</h3>
                <p className="paragraph">
                  Check your county assessor&apos;s website, tax collector&apos;s office, or property tax bill. 
                  Rates are usually expressed as mills (dollars per $1,000 of assessed value) or as a 
                  percentage of assessed value.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Are property tax payments tax deductible?</h3>
                <p className="paragraph">
                  Yes, property taxes are generally deductible on federal income taxes if you itemize deductions. 
                  However, the Tax Cuts and Jobs Act limited this deduction to $10,000 per year 
                  ($5,000 if married filing separately).
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What happens if I don&apos;t pay property taxes?</h3>
                <p className="paragraph">
                  Unpaid property taxes can result in penalties, interest charges, and eventually tax lien 
                  or foreclosure. Most jurisdictions offer payment plans and assistance programs for homeowners 
                  experiencing financial hardship.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={500}>
            <h2 className="heading-2 mb-6">Related Financial Tools</h2>
            <div className="grid-responsive-3 gap-6">
              <Link href="/rent-affordability-calculator" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">Rent Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate how much rent you can afford</p>
                </div>
              </Link>
              <Link href="/index-fund-return-calculator" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">Investment Calculator</h3>
                  <p className="text-sm text-gray-600">Plan your investment growth and returns</p>
                </div>
              </Link>
              <Link href="/tools" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">All Financial Tools</h3>
                  <p className="text-sm text-gray-600">Explore our complete collection of financial calculators</p>
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
