import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BMICalculatorClient from '@/components/client/BMICalculatorClient'
import RelatedTools from '@/components/RelatedTools'
import ToolInfo from '@/components/ToolInfo'
import AdUnit from '@/components/AdUnit'
import Breadcrumbs from '@/components/Breadcrumbs'
import HowItWorks from '@/components/HowItWorks'
import YMYLDisclaimer from '@/components/YMYLDisclaimer'
import ToolJsonLd from '@/components/ToolJsonLd'
import { buildToolPageSchemas } from '@/lib/build-tool-schemas'
import { CALCULATOR_SEO } from '@/lib/calculator-seo-config'
import { createMetadata } from '@/lib/metadata'
import ToolEducationalGuide from '@/components/ToolEducationalGuide'

export const metadata = createMetadata({
  title: 'BMI Calculator',
  description: 'Calculate Body Mass Index (BMI) using metric or imperial units. See WHO/CDC adult categories for ages 20+. Screening tool only—not a medical diagnosis.',
  keywords: 'BMI calculator, body mass index, health calculator, weight assessment, WHO BMI, CDC BMI, adult BMI',
  url: 'https://calcuzy.app/bmi-calculator',
  image: '/og/og-default.png',
})

export default function BMICalculator() {
  const faqData = [
    {
      question: 'How is BMI calculated?',
      answer: 'Metric: BMI = weight (kg) ÷ height (m)². Imperial: BMI = weight (lb) ÷ height (in)² × 703. This calculator applies the standard formula and maps your result to WHO/CDC adult categories.'
    },
    {
      question: 'Why does BMI not distinguish between muscle and fat?',
      answer: 'BMI uses total body weight relative to height. It cannot tell muscle from fat, so athletes or very muscular people may have a high BMI despite low body fat. Body composition tests or waist measurements can add context.'
    },
    {
      question: 'Is this calculator for children and teens?',
      answer: 'No. The same formula applies, but children\'s BMI must be interpreted using age- and sex-specific percentiles. This tool uses adult cutoffs for people 20 and older. Use CDC BMI-for-age charts for pediatric assessment.'
    },
    {
      question: 'What are the adult BMI categories?',
      answer: 'Underweight: below 18.5. Normal: 18.5–24.9. Overweight: 25.0–29.9. Obese: 30.0 and above. Class II obesity is 35.0–39.9; Class III (severe) is 40.0 and above.'
    },
    {
      question: 'How does waist circumference relate to BMI?',
      answer: 'For adults with BMI between 25 and 34.9, providers often measure waist circumference to assess abdominal fat. Rough guidance: increased risk is often cited above 40 inches (men) or 35 inches (women)—confirm with your clinician.'
    },
    {
      question: 'Can BMI diagnose a medical condition?',
      answer: 'No. BMI is a screening tool only. Diagnosis requires a full clinical evaluation including history, exam, and sometimes lab work or other measurements.'
    }
  ]

  const howItWorksSteps = [
    {
      title: 'Enter height and weight',
      description: 'Choose metric or imperial units and fill in both fields.'
    },
    {
      title: 'Apply the BMI formula',
      description: 'Weight is divided by height squared (× 703 for imperial).'
    },
    {
      title: 'See your category',
      description: 'Your number is mapped to standard adult underweight, normal, overweight, or obese ranges.'
    }
  ]

  const schemas = buildToolPageSchemas({
    tool: {
      name: 'BMI Calculator',
      description: 'Calculate Body Mass Index with metric or imperial units and view WHO/CDC adult weight categories.',
      url: 'https://calcuzy.app/bmi-calculator',
      category: 'HealthApplication',
      features: ['Metric and imperial units', 'Instant BMI calculation', 'WHO/CDC adult categories', 'Privacy-focused', 'Adults 20+'],
    },
    breadcrumbItems: [
      { name: 'Home', url: 'https://calcuzy.app' },
      { name: 'Tools', url: 'https://calcuzy.app/tools' },
      { name: 'Health', url: 'https://calcuzy.app/tools#health' },
      { name: 'BMI Calculator', url: 'https://calcuzy.app/bmi-calculator' },
    ],
    faqs: faqData,
    howToSteps: howItWorksSteps,
    howTo: CALCULATOR_SEO['bmi-calculator'].howTo,
    calculateAction: CALCULATOR_SEO['bmi-calculator'].calculateAction,
  })

  const steps = [
    { title: 'Choose units', description: 'Select metric (kg, m) or imperial (lb, in).' },
    { title: 'Enter weight', description: 'Input your current weight in the selected unit system.' },
    { title: 'Enter height', description: 'Input your height in meters or inches.' },
    { title: 'Calculate', description: 'View your BMI value and WHO/CDC category instantly.' },
    { title: 'Discuss with a provider', description: 'Use the result as a starting point for health conversations, not as a diagnosis.' }
  ]

  const tips = [
    'BMI is for adults 20+; use pediatric charts for children',
    'Athletes may have high BMI from muscle—consider body composition if relevant',
    'Waist circumference can help assess abdominal fat when BMI is borderline',
    'Track trends over time rather than reacting to a single reading',
    'Consult a healthcare provider for personalized advice'
  ]

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <ToolJsonLd schemas={schemas} />
      <Navbar />
      
      <main className="container section-responsive">
        <Breadcrumbs 
          items={[
            { name: 'Tools', url: '/tools' },
            { name: 'Health', url: '/tools#health' },
            { name: 'BMI Calculator', url: '/bmi-calculator' }
          ]}
        />
        <div className="text-center mb-12 slide-up">
          <h1 className="heading-1 text-center mb-6">
            BMI Calculator
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Calculate your Body Mass Index using metric or imperial units. Results follow WHO and CDC adult categories for ages 20 and up. BMI is a screening tool—not a diagnosis.
          </p>
        </div>

        <YMYLDisclaimer category="health" />

        <BMICalculatorClient />

        <AdUnit slot={1} />

        <section className="max-w-3xl mx-auto mt-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">What BMI means</h2>
          <p className="text-slate-600 mb-4">
            Body Mass Index relates weight to height. It is widely used as a first-step screen for weight-related health risks but does not measure body fat directly. High or low values may warrant further assessment with a healthcare provider.
          </p>

          <div className="not-prose bg-green-50 p-6 rounded-lg border border-green-100 mb-6">
            <h3 className="font-semibold text-green-900 mb-3">Adult BMI categories (WHO/CDC)</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-green-800">
              <div>
                <p><strong>Underweight:</strong> below 18.5</p>
              </div>
              <div>
                <p><strong>Normal:</strong> 18.5–24.9</p>
              </div>
              <div>
                <p><strong>Overweight:</strong> 25.0–29.9</p>
              </div>
              <div>
                <p><strong>Obese:</strong> 30.0 and above</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-500">
            Read our{' '}
            <Link href="/blog/bmi-calculator-guide/" className="text-blue-600 hover:underline">
              BMI calculator guide
            </Link>
            {' '}for a longer explanation. Sources:{' '}
            <a href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">WHO</a>
            {' · '}
            <a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CDC</a>
          </p>
        </section>

        <AdUnit slot={2} />

                <ToolEducationalGuide slug="bmi-calculator" />

        <HowItWorks
          title="How This Calculator Works"
          steps={howItWorksSteps}
          className="bg-slate-50/50"
        />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="BMI Calculator"
            description={
              <>
                <p className="mb-4">
                  Enter height and weight to compute BMI and see a standard adult category. Calculations run in your browser—nothing is stored on our servers. For children, athletes, older adults, or clinical decisions, interpret results with a qualified provider.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">Screening only</h4>
                    <p className="text-sm text-emerald-700">
                      BMI flags possible risk—it does not diagnose disease on its own.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">Muscle vs fat</h4>
                    <p className="text-sm text-amber-700">
                      Very muscular people may score high despite low body fat.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">Adults 20+</h4>
                    <p className="text-sm text-blue-700">
                      Pediatric BMI uses age- and sex-specific percentiles, not these cutoffs.
                    </p>
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
          <RelatedTools currentTool="/bmi-calculator" category="health" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
