import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import OvulationCalculatorClient from '@/components/tools/OvulationCalculatorClient'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Ovulation Calculator - Fertile Window & Fertility Tracker | Calcuzy.app',
  description: 'Calculate your ovulation day, fertile window, and safe days with our free ovulation calculator. Track your menstrual cycle for family planning.',
  keywords: 'ovulation calculator, fertile window, fertility tracker, menstrual cycle, pregnancy planning, ovulation day calculator',
  url: 'https://Calcuzy.app/ovulation-calculator',
  image: '/og-health.png',
})

export default function OvulationCalculatorPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthApplication",
    "name": "Ovulation Calculator",
    "description": "Calculate ovulation day, fertile window, and safe days for family planning",
    "url": "https://Calcuzy.app/ovulation-calculator",
    "applicationCategory": "HealthApplication",
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
            Ovulation Calculator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Calculate your ovulation day, fertile window, and safe days with our comprehensive 
            fertility calculator. Track your menstrual cycle for effective family planning.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <OvulationCalculatorClient />
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={300}>
            <h2 className="heading-2 mb-6">Understanding Ovulation and Fertility</h2>
            <div className="space-y-6">
              <div>
                <h3 className="heading-3 mb-3">What is Ovulation?</h3>
                <p className="paragraph">
                  Ovulation is the process where a mature egg is released from the ovary, making it available 
                  for fertilization. This typically occurs once in each menstrual cycle and is the most fertile 
                  time for conception. The egg can survive for 12-24 hours after release, while sperm can survive 
                  for up to 5 days in the female reproductive tract.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-3">The Menstrual Cycle Phases</h3>
                <div className="space-y-3">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Follicular Phase (Days 1-14)</h4>
                    <p className="paragraph mb-0">
                      Begins with the first day of menstruation. The uterus sheds its lining, and follicles in 
                      the ovaries begin to mature under hormone stimulation.
                    </p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Ovulation (Around Day 14)</h4>
                    <p className="paragraph mb-0">
                      The mature egg is released from the ovary and travels down the fallopian tube. This is 
                      the peak fertility time, typically occurring 14 days before the next period.
                    </p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Luteal Phase (Days 15-28)</h4>
                    <p className="paragraph mb-0">
                      After ovulation, the corpus luteum produces progesterone to prepare the uterine lining 
                      for potential implantation. If pregnancy doesn&apos;t occur, hormone levels drop and the cycle restarts.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Fertility Window Calculation</h3>
                <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                  Ovulation Day = First Day of Last Period + (Cycle Length - 14 days)<br />
                  Fertile Window Start = Ovulation Day - 5 days<br />
                  Fertile Window End = Ovulation Day + 1 day<br />
                  Next Period = First Day of Last Period + Cycle Length
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Signs of Ovulation</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Changes in cervical mucus (becomes clear and stretchy)</li>
                  <li>Basal body temperature increase</li>
                  <li>Mild pelvic pain or twinges</li>
                  <li>Increased libido</li>
                  <li>Breast tenderness</li>
                  <li>Heightened sense of smell</li>
                </ul>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Factors Affecting Ovulation</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Stress and lifestyle factors</li>
                  <li>Age and hormonal changes</li>
                  <li>Weight fluctuations</li>
                  <li>Medical conditions like PCOS</li>
                  <li>Medications and birth control</li>
                  <li>Diet and exercise habits</li>
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
                <h3 className="heading-3 mb-2">How accurate is this ovulation calculator?</h3>
                <p className="paragraph">
                  Our calculator provides estimates based on average cycle patterns. While helpful for planning, 
                  individual cycles can vary. For most accurate results, track your cycles for several months and 
                  consider using additional methods like basal temperature tracking or ovulation predictor kits.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What is a normal menstrual cycle length?</h3>
                <p className="paragraph">
                  The average menstrual cycle is 28 days, but normal cycles can range from 21 to 35 days. 
                  Regular cycles are important for accurate ovulation prediction. If your cycles are irregular, 
                  consult with a healthcare provider for personalized guidance.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">How many days am I fertile each month?</h3>
                <p className="paragraph">
                  The fertile window typically spans about 6 days each month: 5 days before ovulation and 
                  1 day after. Sperm can survive up to 5 days, while the egg remains viable for 12-24 hours 
                  after release, creating this window of conception possibility.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Can I get pregnant during my period?</h3>
                <p className="paragraph">
                  While unlikely, it&apos;s possible to get pregnant during menstruation, especially if you have 
                  short cycles. Sperm can survive in the reproductive tract for several days, and ovulation 
                  might occur earlier than expected in some cycles.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What are safe days for avoiding pregnancy?</h3>
                <p className="paragraph">
                  Safe days are typically the days outside the fertile window, usually before day 5 of the 
                  cycle and after day 20 in a 28-day cycle. However, the rhythm method has a higher failure rate 
                  compared to other contraceptive methods and should be used with caution.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">When should I see a doctor about fertility?</h3>
                <p className="paragraph">
                  Consult a healthcare provider if you&apos;ve been trying to conceive for over a year (or 6 months 
                  if over 35), have irregular cycles, painful periods, or concerns about fertility. Regular 
                  gynecological check-ups are important for reproductive health.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={500}>
            <h2 className="heading-2 mb-6">Related Health Tools</h2>
            <div className="grid-responsive-3 gap-6">
              <Link href="/bmi-calculator" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">BMI Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate your Body Mass Index for health assessment</p>
                </div>
              </Link>
              <Link href="/age-calculator" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">Age Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate exact age and important life milestones</p>
                </div>
              </Link>
              <Link href="/tools" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">All Health Tools</h3>
                  <p className="text-sm text-gray-600">Explore our complete collection of health calculators</p>
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
