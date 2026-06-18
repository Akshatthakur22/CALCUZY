import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import OvulationCalculatorClient from '@/components/tools/OvulationCalculatorClient'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import HowItWorks from '@/components/HowItWorks'
import YMYLDisclaimer from '@/components/YMYLDisclaimer'
import ToolJsonLd from '@/components/ToolJsonLd'
import { buildToolPageSchemas } from '@/lib/build-tool-schemas'
import { CALCULATOR_SEO } from '@/lib/calculator-seo-config'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Ovulation Calculator',
  description: 'Estimate your fertile window and ovulation day using the calendar method. Enter cycle length and last period date for a rough fertility timeline—not medical advice.',
  keywords: 'ovulation calculator, fertile window, ovulation day, menstrual cycle calculator, fertility calendar, period tracker',
  url: 'https://calcuzy.app/ovulation-calculator',
  image: '/og/og-health.png',
})

export default function OvulationCalculatorPage() {
  const faqData = [
    {
      question: 'How does this ovulation calculator work?',
      answer: 'Enter your average cycle length and the first day of your last menstrual period. The tool estimates ovulation about 14 days before your next expected period, then shows a fertile window from 5 days before through 1 day after that estimated ovulation day. It uses the standard calendar (rhythm) method—not hormone tests or physical signs.'
    },
    {
      question: 'How accurate is the calendar method?',
      answer: 'Calendar estimates work best for people with regular cycles. Stress, illness, travel, and conditions like PCOS can shift ovulation, so predictions may be off by several days. For irregular cycles, ovulation predictor kits (LH tests), basal body temperature tracking, or cervical mucus observations are more reliable than calendar math alone.'
    },
    {
      question: 'What is the fertile window?',
      answer: 'The fertile window is the span when pregnancy is possible. Sperm can survive up to about 5 days, and an egg is typically viable for roughly 12–24 hours after ovulation. This calculator marks a 6-day window (5 days before estimated ovulation through 1 day after) based on common medical guidance.'
    },
    {
      question: 'Can I use this for birth control?',
      answer: 'No. Calendar-based “safe days” are not reliable contraception. Ovulation timing varies, and this tool should not be used as your only method to prevent pregnancy. Talk to a healthcare provider about effective birth control options.'
    },
    {
      question: 'Why does the calculator assume 14 days before the next period?',
      answer: 'Many cycles have a luteal phase (time from ovulation to the next period) of about 14 days, so ovulation is often estimated as cycle length minus 14. Individual luteal phases can range from about 10 to 16 days, which is one reason calendar estimates can be imprecise.'
    },
    {
      question: 'When should I see a healthcare provider?',
      answer: 'Consider speaking with a clinician if your cycles are irregular, you have been trying to conceive for 12 months (or 6 months if over 35), you suspect PCOS or other conditions, or you need personalized fertility or contraception guidance. This tool is for general education only.'
    }
  ]

  const steps = [
    { title: 'Enter cycle length', description: 'Input your average number of days from the start of one period to the start of the next (often 21–35 days).' },
    { title: 'Enter last period date', description: 'Select the first day of your most recent menstrual period.' },
    { title: 'Calculate', description: 'The tool estimates ovulation, fertile window, next period, and pre-fertile days using the calendar method.' },
    { title: 'Track over time', description: 'Log several cycles to see if your pattern is regular; irregular cycles reduce calendar accuracy.' },
    { title: 'Confirm with a provider', description: 'Use results as a rough guide—not a diagnosis or contraception plan.' }
  ]

  const tips = [
    'Track multiple cycles to confirm your average length before relying on estimates',
    'Ovulation predictor kits detect an LH surge, often 24–36 hours before ovulation',
    'Basal body temperature rises slightly after ovulation, confirming it after the fact',
    'Stress, illness, and schedule changes can shift ovulation from month to month',
    'Do not use calendar “safe days” as your only form of birth control',
    'See a healthcare provider for personalized fertility or contraception advice'
  ]

  const howItWorksSteps = [
    {
      title: 'Provide cycle details',
      description: 'Enter average cycle length and the first day of your last period.'
    },
    {
      title: 'Estimate ovulation',
      description: 'Ovulation is placed about 14 days before your next expected period start.'
    },
    {
      title: 'View your window',
      description: 'See estimated fertile days, next period date, and calendar-based pre-fertile days.'
    }
  ]

  const schemas = buildToolPageSchemas({
    tool: {
      name: 'Ovulation Calculator',
      description: 'Estimate ovulation day, fertile window, and next period using cycle length and the first day of your last period.',
      url: 'https://calcuzy.app/ovulation-calculator',
      category: 'HealthApplication',
      features: ['Fertile window estimate', 'Ovulation day estimate', 'Next period estimate', 'Calendar method', 'Cycle length input'],
    },
    faqs: faqData,
    howToSteps: howItWorksSteps,
    howTo: CALCULATOR_SEO['ovulation-calculator'].howTo,
    calculateAction: CALCULATOR_SEO['ovulation-calculator'].calculateAction,
  })

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <ToolJsonLd schemas={schemas} />
      <Navbar />
      
      <main className="container section-responsive">
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">
            Ovulation Calculator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Estimate when you may ovulate and your fertile window using the calendar method. Enter your cycle length and last period date for a rough timeline—this is not medical advice and is less accurate than hormone tests or provider-guided tracking.
          </p>
        </div>

        <YMYLDisclaimer category="health" />

        <div className="max-w-4xl mx-auto fade-in-up">
          <OvulationCalculatorClient />
        </div>

        <AdUnit slot={1} />

        <section className="max-w-3xl mx-auto mt-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Understanding ovulation</h2>
          <p className="text-slate-600 mb-4">
            Ovulation is when an ovary releases an egg, usually mid-cycle. The days around ovulation are when pregnancy is most likely. This calculator uses your cycle length and last period to estimate that timing—it does not measure hormones or physical signs.
          </p>
          <p className="text-slate-600 mb-4">
            For irregular cycles, calendar estimates may be wrong by several days. Ovulation predictor kits, basal body temperature charts, and clinical guidance can provide more personalized information. Always consult a healthcare provider for fertility treatment or contraception decisions.
          </p>
          <p className="text-sm text-slate-500">
            Learn more:{' '}
            <a href="https://www.acog.org/womens-health/faqs/ovulation-and-menstrual-cycle" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ACOG — Ovulation and menstrual cycle</a>
            {' · '}
            <a href="https://www.mayoclinic.org/healthy-lifestyle/getting-pregnant/in-depth/ovulation-calculator/art-20046839" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mayo Clinic — Ovulation calculator</a>
          </p>
        </section>

        <AdUnit slot={2} />

        <HowItWorks
          title="How This Calculator Works"
          steps={howItWorksSteps}
          className="bg-slate-50/50"
        />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Ovulation Calculator"
            description={
              <>
                <p className="mb-4">
                  This free tool applies the calendar method: it assumes ovulation occurs about 14 days before your next expected period, then highlights a 6-day fertile window. It also shows an estimated next period and days before the fertile window. Calculations run in your browser—no data is stored.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
                    <h4 className="font-semibold text-pink-800 mb-2">Fertile window</h4>
                    <p className="text-sm text-pink-700">
                      About 5 days before through 1 day after estimated ovulation—the window when conception is most likely.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <h4 className="font-semibold text-purple-800 mb-2">Calendar limits</h4>
                    <p className="text-sm text-purple-700">
                      Best for regular cycles. Irregular periods, PCOS, and stress can make estimates unreliable.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">Not contraception</h4>
                    <p className="text-sm text-blue-700">
                      Do not rely on calendar “safe days” alone to prevent pregnancy—use proven birth control methods.
                    </p>
                  </div>
                </div>
              </>
            }
            steps={steps}
            tips={tips}
            faqs={faqData}
          />
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/ovulation-calculator" category="health" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
