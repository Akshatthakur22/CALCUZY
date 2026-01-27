import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedTools, { getRelatedToolsByCategory } from '@/components/RelatedTools'
import AgeCalculatorClient from '@/components/client/AgeCalculatorClient'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Age Calculator – Calculate Age from Date',
  description: 'Calculate your exact age in years, months, and days with our free age calculator. Enter your birth date to get precise age calculations instantly.',
  keywords: 'age from date, calculate age, age calculator, birthday calculator',
  url: 'https://Calcuzy.app/age-calculator',
  image: '/og-tools.png',
})

export default function AgeCalculator() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Age Calculator",
    "description": "Calculate your exact age in years, months, and days with our free age calculator",
    "url": "https://Calcuzy.app/age-calculator",
    "applicationCategory": "Utility",
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
      <Breadcrumbs />
      
      <main className="container section-responsive">
        <div className="text-center mb-12 slide-up">
          <h1 className="heading-1 text-center mb-6">
            Age Calculator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Calculate your exact age in years, months, and days. Simply enter your birth date 
            and current date to get precise age calculations instantly.
          </p>
        </div>

        <AdUnit slot={1} />

        <AgeCalculatorClient />

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <h2 className="heading-2 mb-6">About Age Calculator</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Our age calculator provides precise age calculations in years, months, and days. 
              This tool is perfect for knowing your exact age for important milestones, legal purposes, 
              or simply out of curiosity. The calculator accounts for leap years and varying month 
              lengths to ensure accuracy.
            </p>
            
            <p className="paragraph">
              Age calculation is important for many life events and legal requirements. From determining 
              eligibility for school enrollment, voting, driving, retirement, and other age-based 
              criteria, knowing your exact age is essential. Our calculator makes this process simple 
              and accurate. For health-related calculations, tools like the <Link href="/bmi-calculator" className="link-accent">BMI Calculator</Link> can provide additional insights into your physical wellness.
            </p>
            
            <p className="paragraph">
              The concept of age calculation varies across cultures, but the standard method used 
              globally counts completed years, months, and days. This calculator follows the 
              internationally accepted method, making it suitable for official documents, applications, 
              and personal use.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Common Uses for Age Calculation</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text">Filling out official forms and applications</li>
              <li className="text-secondary-text">Planning birthday celebrations and milestones</li>
              <li className="text-secondary-text">Checking eligibility for age-restricted activities</li>
              <li className="text-secondary-text">Calculating retirement dates and benefits</li>
              <li className="text-secondary-text">Tracking children&apos;s development and growth</li>
            </ul>
            
            <p className="paragraph">
              Our age calculator is completely free to use and works instantly without requiring any 
              personal information or registration. Simply enter your dates and get accurate results 
              immediately. The tool works on all devices and browsers for your convenience. If you need to calculate the time between two specific dates, our <Link href="/date-difference" className="link-accent">Date Difference Calculator</Link> can help you find the exact duration. For planning future events, you might also find our <Link href="/days-until-christmas" className="link-accent">Christmas Countdown</Link> useful for holiday preparations.
            </p>
          </div>

          <RelatedTools tools={getRelatedToolsByCategory('calculators', '/age-calculator')} />
        </div>

        <div className="max-w-4xl mx-auto mt-16 fade-in-up">
          <h2 className="heading-2 mb-6">Examples & Use Cases</h2>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li className="text-secondary-text"><strong>Parent Planning:</strong> Calculate exactly when your baby turns 6 months for vaccination schedules, or determine school eligibility cutoff dates for kindergarten enrollment</li>
            <li className="text-secondary-text"><strong>Retirement Planning:</strong> Find out your exact age for Social Security eligibility, pension calculations, or required minimum distribution (RMD) deadlines</li>
            <li className="text-secondary-text"><strong>Legal Documentation:</strong> Determine precise ages for driver&apos;s license applications, voting registration, consent forms, or age-restricted service eligibility</li>
            <li className="text-secondary-text"><strong>Milestone Celebrations:</strong> Plan exact birthday celebrations, calculate golden birthdays, or determine significant age milestones like &quot;over the hill&quot; at 40</li>
            <li className="text-secondary-text"><strong>Medical Requirements:</strong> Calculate ages for pediatric checkup schedules, age-specific medical screenings, or insurance eligibility requirements</li>
            <li className="text-secondary-text"><strong>Sports & Activities:</strong> Determine age categories for youth sports leagues, competition eligibility, or age-based program enrollment</li>
          </ul>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16 fade-in-up">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How accurate is this age calculator?</h3>
              <p className="paragraph">
                Our age calculator is extremely accurate, accounting for leap years and varying 
                month lengths. It calculates your exact age down to the day, making it suitable 
                for official purposes and precise calculations.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What date format should I use?</h3>
              <p className="paragraph">
                Use the standard date format (MM/DD/YYYY) by selecting dates from the calendar 
                picker. The calculator accepts any valid date and automatically handles different 
                date formats for your convenience.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can I calculate someone else&apos;s age?</h3>
              <p className="paragraph">
                Yes, you can calculate anyone&apos;s age by entering their birth date and the current 
                date. This is useful for calculating family members&apos; ages, planning celebrations, 
                or filling out forms for others.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Does this account for leap years?</h3>
              <p className="paragraph">
                Yes, our age calculator automatically accounts for leap years and the varying 
                number of days in each month. This ensures your age calculation is precise 
                regardless of when you were born.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Is my data stored when using this calculator?</h3>
              <p className="paragraph">
                No, we don&apos;t store any of your personal data or calculation results. All calculations 
                happen locally in your browser, ensuring complete privacy and security of your information.
              </p>
            </div>
          </div>

          {/* Contextual Cross-Links */}
          <div className="mt-12 p-6 bg-secondary-bg rounded-xl">
            <h3 className="heading-3 mb-4 text-center">Related Calculators & Tools</h3>
            <p className="paragraph text-center mb-6 text-secondary-text">
              Explore other calculators and tools that complement age calculations
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/date-difference" className="block p-4 bg-white rounded-lg border border-border hover:border-accent transition-colors duration-200">
                <div className="text-center">
                  <div className="text-2xl mb-2">📅</div>
                  <h4 className="font-medium text-primary-text mb-1">Date Difference Calculator</h4>
                  <p className="text-sm text-secondary-text">Calculate days between any two dates</p>
                </div>
              </Link>
              <Link href="/days-until-christmas" className="block p-4 bg-white rounded-lg border border-border hover:border-accent transition-colors duration-200">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎄</div>
                  <h4 className="font-medium text-primary-text mb-1">Christmas Countdown</h4>
                  <p className="text-sm text-secondary-text">Count down to upcoming holidays</p>
                </div>
              </Link>
              <Link href="/ovulation-calculator" className="block p-4 bg-white rounded-lg border border-border hover:border-accent transition-colors duration-200">
                <div className="text-center">
                  <div className="text-2xl mb-2">👶</div>
                  <h4 className="font-medium text-primary-text mb-1">Ovulation Calculator</h4>
                  <p className="text-sm text-secondary-text">Track fertility and important dates</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
