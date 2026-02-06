"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AgeCalculatorClient from '@/components/client/AgeCalculatorClient'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createToolSchema, createFAQSchema } from '@/lib/metadata'
import { useState } from 'react'

function ReadMore({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="relative max-w-4xl mx-auto">
      <div
        className={
          expanded
            ? 'prose max-w-4xl mx-auto py-10 transition-all duration-300'
            : 'prose max-w-4xl mx-auto py-10 overflow-hidden max-h-[400px] relative transition-all duration-300'
        }
        style={{ position: 'relative' }}
      >
        {children}
        {!expanded && (
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
        )}
      </div>
      <button
        className="flex items-center gap-1 text-blue-600 hover:underline mt-2 mx-auto"
        style={{ display: 'block' }}
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {expanded ? <><span className="inline-block rotate-180">▼</span> Read Less</> : <><span className="inline-block">▼</span> Read More</>}
      </button>
    </div>
  )
}

export default function AgeCalculator() {
  const structuredData = createToolSchema({
    name: 'Age Calculator',
    description: 'Calculate your exact age in years, months, and days with our free age calculator',
    url: 'https://calcuzy.app/age-calculator',
    category: 'UtilityApplication',
    features: ['Years, months, days breakdown', 'Leap year support', 'Instant calculation', 'Privacy-focused']
  })

  const faqData = [
    {
      question: 'How does the calculator handle the transition between the Julian and Gregorian calendars for historical dates?',
      answer: "Our tool is optimized for post-1582 Gregorian dates. For historical genealogy before the 'Calendar Act' of 1752 (in the UK/US), users should manually adjust for the 11-day shift."
    },
    {
      question: "Why does the 'Age in Days' sometimes vary between different online tools?",
      answer: "Many tools use an 'Average Year' ($365.25$ days). Calcuzy uses 'Calendar Specificity,' counting the exact leap days that occurred during your specific lifetime."
    },
    {
      question: 'Can this tool be used for “Age of Majority” legal verification?',
      answer: 'Yes. It provides the precise chronological delta required to determine if an individual has reached the legal age for voting, driving, or contract signing.'
    },
    {
      question: "How is the 'remaining days' calculated in a month?",
      answer: "We use the Reference Month approach, where the number of days in the month immediately preceding the target date is used to calculate the fractional remainder."
    },
    {
      question: 'Is there a limit to how far back the birth date can go?',
      answer: 'The tool supports dates back to the year 1900, covering all living human spans and most modern genealogical records.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'Enter Birth Date', description: 'Select your date of birth using the calendar picker.' },
    { title: 'Set Target Date', description: 'Choose the date to calculate your age as of (defaults to today).' },
    { title: 'View Results', description: 'See your exact age in years, months, and days instantly.' },
    { title: 'Review Details', description: 'Check additional age information and milestones.' },
    { title: 'Share or Save', description: 'Copy results for forms or share with others.' }
  ]

  const tips = [
    'Use this for official forms requiring exact age calculations',
    'The calculator accounts for leap years automatically',
    'Great for tracking children\'s developmental milestones',
    'Calculate age at any future or past date',
    'All calculations happen locally for complete privacy'
  ]

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
        <div className="text-center mb-12 slide-up">
          <h1 className="heading-1 text-center mb-6">
            Age Calculator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Calculate your exact age in years, months, and days. Simply enter your birth date 
            and current date to get precise age calculations instantly.
          </p>
        </div>

        <ReadMore>
          <section className="prose max-w-4xl mx-auto py-10">
            <h2>More Than a Birthday: The Complexity of Chronological Tracking</h2>
            <p className="mb-4 text-gray-700">
              Age calculation is an exercise in applied mathematics and historical consensus. While it appears as a simple subtraction of dates, the underlying logic must navigate the irregularities of the Gregorian calendar—a system refined in 1582 to correct the drift of the Julian calendar. To calculate age with 100% precision, one must account for the varying lengths of months (28 to 31 days) and the quadrennial insertion of a leap day.
            </p>
            <h2>The Leap Year Logic and Legal Precedents</h2>
            <p className="mb-4 text-gray-700">
              One of the most fascinating edge cases in chronometry is the "Leap Day Birthday." For those born on February 29th, the legal definition of their age can vary by jurisdiction. In many legal systems, a person born on a leap day officially ages by one year on March 1st in non-leap years. Our calculator utilizes a high-precision algorithm that treats each year as a unique segment of time, ensuring that whether you are filing for school enrollment or retirement benefits, the day-count remains accurate to the legal standard.
            </p>
            <h2>Medical and Developmental Significance</h2>
            <p className="mb-4 text-gray-700">
              In the fields of pediatrics and gerontology, "Chronological Age" is the primary independent variable. For infants, age is often measured in weeks or total days to track critical developmental milestones. A delay of even a few days in certain biological markers can be significant. This tool provides a granular breakdown (Years, Months, Days) that assists parents and healthcare providers in maintaining accurate longitudinal records.
            </p>
            <h2>The Mathematics of the Date Delta</h2>
            <p className="mb-4 text-gray-700">
              Behind the user interface, Calcuzy employs a "Date Delta" algorithm. Unlike simplified calculators that divide total days by 365, we use a borrow-and-carry method:<br />
              If the target day is less than the birth day, we "borrow" days from the preceding month.<br />
              We then check the specific month length (e.g., April has 30, while May has 31) to determine the exact remainder.<br />
              This ensures that a person born on January 31st and checking their age on March 1st receives a result that reflects the actual days elapsed through February’s unique 28-day cycle.
            </p>
            <h2>Curator’s Insights (Technical Commentary)</h2>
            <p className="mb-4 text-gray-700">
              <b>On Accuracy:</b> "We built this tool to resolve the '30-day month' error common in generic scripts. Every calculation is verified against the ISO 8601 date representation standard."<br />
              <b>On Privacy:</b> "In an era of data harvesting, your birth date is sensitive. We’ve architected this tool to be 'zero-server,' meaning your DOB never leaves your local device."
            </p>
          </section>
        </ReadMore>

        <AdUnit slot={1} />

        <div className="flex items-center gap-2 mb-4 max-w-2xl mx-auto">
          <svg className="text-green-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            <path d="M12 2v4m0 4v2m0-8v2"/>
          </svg>
          <span className="text-xs text-green-700 font-medium">Privacy Verified: Calculated locally in-browser via V8 Engine. No server-side storage.</span>
        </div>

        <AgeCalculatorClient />

        <AdUnit slot={2} />

        <ToolInfo
          title="Age Calculator"
          description="Calcuzy provides an analytical breakdown of lifespan duration using ISO-compliant date-delta logic, essential for legal filings and developmental tracking."
          steps={steps}
          tips={tips}
          faqs={faqData}
        />

        <AdUnit slot={3} />

        <RelatedTools currentTool="/age-calculator" category="calculators" />
      </main>
      <Footer />
    </div>
  )
}
