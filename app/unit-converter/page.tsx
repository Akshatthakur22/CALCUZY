import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UnitConverterClient from '@/components/client/UnitConverterClient'
import RelatedTools from '@/components/RelatedTools'
import ToolInfo from '@/components/ToolInfo'
import AdUnit from '@/components/AdUnit'
import Breadcrumbs from '@/components/Breadcrumbs'
import HowItWorks from '@/components/HowItWorks'
import { createMetadata, createToolSchema, createFAQSchema, createBreadcrumbSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Unit Converter',
  description: 'Convert length, weight, temperature, and volume between metric and imperial units. Free browser-based converter—no signup, calculations stay on your device.',
  keywords: 'unit converter, metric to imperial, length converter, weight converter, temperature converter, volume converter',
  url: 'https://calcuzy.app/unit-converter',
  image: '/og/og-tools.svg',
})

export default function UnitConverter() {
  const structuredData = createToolSchema({
    name: 'Unit Converter',
    description: 'Convert between length, weight, temperature, and volume units including metric and US customary measurements.',
    url: 'https://calcuzy.app/unit-converter',
    category: 'UtilityApplication',
    features: ['Length conversion', 'Weight conversion', 'Temperature conversion', 'Volume conversion', 'Instant results'],
  })

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://calcuzy.app' },
    { name: 'Tools', url: 'https://calcuzy.app/tools' },
    { name: 'Unit Converter', url: 'https://calcuzy.app/unit-converter' },
  ])

  const faqData = [
    {
      question: 'Which unit categories does this tool support?',
      answer: 'You can convert length (meters, feet, miles, etc.), weight (kilograms, pounds, ounces, etc.), temperature (Celsius, Fahrenheit, Kelvin), and volume (liters, gallons, cups, etc.). Pick a category, then choose from and to units.',
    },
    {
      question: 'How are temperature conversions handled?',
      answer: 'Temperature uses proper formulas—not a simple multiplier. Celsius, Fahrenheit, and Kelvin convert through standard offset and scaling rules so freezing and boiling points stay accurate.',
    },
    {
      question: 'How precise are the results?',
      answer: 'Results show several decimal places for everyday and light technical use. For legal or scientific work, confirm critical values against an official reference such as NIST.',
    },
    {
      question: 'Is my input sent to a server?',
      answer: 'No. Conversions run entirely in your browser. Nothing you type is stored or transmitted.',
    },
    {
      question: 'Why do US and UK units sometimes differ?',
      answer: 'Some names overlap but sizes differ—for example US gallons vs UK imperial gallons, or short tons vs metric tons. This tool uses the conversion factors built into each unit definition in the selector.',
    },
    {
      question: 'Can I convert compound units like miles per hour?',
      answer: 'Not in this version. It converts single quantities within one category at a time (e.g., miles to kilometers, not mph to km/h directly).',
    },
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'Pick a category', description: 'Choose length, weight, temperature, or volume.' },
    { title: 'Enter a value', description: 'Type the number you want to convert.' },
    { title: 'Select units', description: 'Set the from and to units in the dropdowns.' },
    { title: 'Read the result', description: 'The converted value updates as you change inputs.' },
  ]

  const tips = [
    'Double-check unit names—teaspoons and tablespoons differ from milliliters by region',
    'For recipes, weigh ingredients when precision matters',
    'Use Kelvin for science; Celsius and Fahrenheit for everyday weather',
    'When traveling, convert fuel economy and speed limits carefully (miles vs kilometers)',
    'Keep original measurements on engineering drawings—convert only for display',
  ]

  const howItWorksSteps = [
    {
      title: 'Choose a category',
      description: 'Length, weight, temperature, and volume each have their own unit lists.',
    },
    {
      title: 'Apply conversion factors',
      description: 'Most units convert through standard ratios; temperature uses dedicated formulas.',
    },
    {
      title: 'See the result',
      description: 'The output updates immediately—no button required after you enter a value.',
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
            { name: 'Unit Converter', url: '/unit-converter' },
          ]}
        />
        <div className="text-center mb-12 slide-up">
          <h1 className="heading-1 text-center mb-6">Unit Converter</h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Convert between metric and imperial units for length, weight, temperature, and volume. Handy for travel, cooking, homework, and quick everyday checks.
          </p>
        </div>

        <div className="max-w-4xl mx-auto fade-in-up">
          <UnitConverterClient />
        </div>

        <AdUnit slot={1} />

        <section className="max-w-3xl mx-auto mt-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Metric vs imperial</h2>
          <p className="text-slate-600 mb-4">
            Most countries use the metric system (meters, kilograms, liters). The United States commonly uses feet, pounds, and gallons for daily life. Mixing systems without converting caused famous engineering mistakes—always label your units.
          </p>
          <p className="text-slate-600 mb-4">
            This converter is for general use. Medical, aviation, and legal applications may require stricter standards and certified tools.
          </p>
        </section>

        <AdUnit slot={2} />

        <HowItWorks title="How This Converter Works" steps={howItWorksSteps} className="bg-slate-50/50" />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Unit Converter"
            description={
              <>
                <p className="mb-4">
                  Select a measurement type, enter a number, and pick source and target units. Conversions use published conversion factors; temperature uses standard Celsius, Fahrenheit, and Kelvin formulas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">Four categories</h4>
                    <p className="text-sm text-blue-700">Length, weight, temperature, and volume in one place.</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">Private</h4>
                    <p className="text-sm text-emerald-700">Calculations run locally—nothing is uploaded.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Quick checks</h4>
                    <p className="text-sm text-slate-700">For precise science or trade, verify with official references.</p>
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
          <RelatedTools currentTool="/unit-converter" category="utility" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
