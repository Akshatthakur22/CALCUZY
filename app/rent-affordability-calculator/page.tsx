import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import RentAffordabilityCalculatorClient from '@/components/tools/RentAffordabilityCalculatorClient'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Rent Affordability Calculator - How Much Rent Can I Afford? | Calcuzy.com',
  description: 'Calculate how much rent you can afford based on income and expenses. Free rent affordability calculator with 30% rule and financial guidelines.',
  keywords: 'rent affordability calculator, how much rent can i afford, rent to income ratio, 30 rule rent, housing budget calculator',
  url: 'https://calcuzy.com/rent-affordability-calculator',
  image: '/og-tools.png',
})

export default function RentAffordabilityCalculatorPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Rent Affordability Calculator",
    "description": "Calculate how much rent you can afford based on income and expenses",
    "url": "https://calcuzy.com/rent-affordability-calculator",
    "provider": {
      "@type": "Organization",
      "name": "Calcuzy.com",
      "url": "https://calcuzy.com"
    },
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
            Rent Affordability Calculator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Calculate how much rent you can comfortably afford based on your income, expenses, 
            and financial guidelines. Make informed housing decisions with our comprehensive calculator.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <RentAffordabilityCalculatorClient />
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={300}>
            <h2 className="heading-2 mb-6">Understanding Rent Affordability</h2>
            <div className="space-y-6">
              <div>
                <h3 className="heading-3 mb-3">The 30% Rule Explained</h3>
                <p className="paragraph">
                  The 30% rule is a widely accepted financial guideline suggesting that you should spend no more 
                  than 30% of your gross monthly income on housing costs. This standard helps ensure you have 
                  enough income left for other essential expenses, savings, and discretionary spending.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-3">US Housing Affordability Guidelines</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Conservative (25% or less)</h4>
                    <p className="paragraph mb-0">
                      Ideal for financial stability. Allows for comfortable savings, emergency fund building, 
                      and discretionary spending while covering all housing costs comfortably.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Moderate (26-35%)</h4>
                    <p className="paragraph mb-0">
                      Manageable but may require careful budgeting. Still within acceptable range for most 
                      renters, especially in high-cost areas.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Stretched (Above 35%)</h4>
                    <p className="paragraph mb-0">
                      May cause financial stress. Consider finding cheaper housing, increasing income, or 
                      reducing other expenses to improve financial health.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Rent Affordability Formula</h3>
                <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                  Maximum Rent = Monthly Income × (Rent Percentage / 100)<br />
                  Available Income = Monthly Income - Other Monthly Expenses<br />
                  Affordable Rent = Minimum(Maximum Rent, Available Income)
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Factors Affecting Rent Affordability</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Location and local housing market conditions</li>
                  <li>Household size and space requirements</li>
                  <li>Transportation costs and commute time</li>
                  <li>Utility costs and additional housing expenses</li>
                  <li>Job stability and income growth potential</li>
                  <li>Emergency fund and savings goals</li>
                </ul>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Tips for Affordable Renting</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Consider roommates to split housing costs</li>
                  <li>Look in neighborhoods slightly further from city centers</li>
                  <li>Negotiate rent, especially for longer leases</li>
                  <li>Consider older buildings or units with fewer amenities</li>
                  <li>Look for move-in specials or landlord incentives</li>
                  <li>Factor in all costs including utilities, parking, and fees</li>
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
                <h3 className="heading-3 mb-2">Is the 30% rule still relevant today?</h3>
                <p className="paragraph">
                  Yes, the 30% rule remains a useful guideline, but it may need adjustment based on your location. 
                  In high-cost areas like San Francisco or New York, many people spend 35-40% on housing due to 
                  elevated rental prices. Consider your overall financial picture rather than strictly following one rule.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What expenses should I include in monthly expenses?</h3>
                <p className="paragraph">
                  Include all recurring expenses except rent: loan payments, credit card minimums, insurance premiums, 
                  utilities (if not included in rent), transportation costs, groceries, entertainment, and savings 
                  contributions. Be thorough to get an accurate picture of your financial obligations.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Should I use gross or net income for calculations?</h3>
                <p className="paragraph">
                  The traditional 30% rule uses gross (pre-tax) income. However, using net income provides a more 
                  realistic picture of what you can actually afford. Our calculator uses gross income but allows you 
                  to account for taxes and other deductions in your monthly expenses.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">How can I afford rent in expensive cities?</h3>
                <p className="paragraph">
                  Consider strategies like finding roommates, choosing neighborhoods further from downtown, looking for 
                  rent-controlled buildings, negotiating your lease terms, or increasing your income through side hustles. 
                  Some cities also offer housing assistance programs for qualifying residents.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What if my desired rent exceeds the recommended amount?</h3>
                <p className="paragraph">
                  If your desired rent is higher than recommended, consider whether the trade-offs are worth it. 
                  You might need to cut other expenses, increase income, or look for more affordable options. 
                  Remember that being house-poor can limit your ability to save and handle emergencies.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">How often should I reassess my rent affordability?</h3>
                <p className="paragraph">
                  Review your housing costs annually or whenever your income changes significantly. As your career 
                  progresses and income increases, you might be able to afford better housing, or you might find 
                  opportunities to save more by downsizing or relocating.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={500}>
            <h2 className="heading-2 mb-6">Related Financial Tools</h2>
            <div className="grid-responsive-3 gap-6">
              <Link href="/property-tax-estimator" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">Property Tax Calculator</h3>
                  <p className="text-sm text-gray-600">Estimate property taxes for homeownership planning</p>
                </div>
              </Link>
              <Link href="/index-fund-return-calculator" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">SIP Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate investment returns and plan your savings goals</p>
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
