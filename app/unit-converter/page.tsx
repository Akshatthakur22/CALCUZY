import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UnitConverterClient from '@/components/client/UnitConverterClient'
import RelatedTools from '@/components/RelatedTools'
import ToolInfo from '@/components/ToolInfo'
import AdUnit from '@/components/AdUnit'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Unit Converter',
  description: 'Convert between different units of measurement instantly. Free unit converter for length, weight, temperature, and volume. Metric to imperial and more.',
  keywords: 'unit converter, measurement converter, length converter, weight converter, metric converter, imperial converter, cm to inches, kg to lbs',
  url: 'https://calcuzy.app/unit-converter',
  image: '/og-tools.png',
})

export default function UnitConverter() {
  const structuredData = createToolSchema({
    name: 'Unit Converter',
    description: 'Convert between different units of measurement including length, weight, temperature, and volume',
    url: 'https://calcuzy.app/unit-converter',
    category: 'UtilityApplication',
    features: ['Length conversion', 'Weight conversion', 'Metric to imperial', 'Instant results', 'High precision']
  })

  const faqData = [
    {
      question: 'How accurate are the unit conversions?',
      answer: 'Our unit converter uses precise mathematical formulas based on international standards. Results are calculated to 6 decimal places for high precision, making it suitable for scientific, engineering, and everyday calculations.'
    },
    {
      question: 'What unit categories are supported?',
      answer: 'We support length (cm, inches, feet, meters, km), weight (kg, lbs, oz, grams, tons), and we\'re continuously adding more categories including temperature and volume conversions.'
    },
    {
      question: 'Can I convert between metric and imperial units?',
      answer: 'Yes, our converter fully supports conversions between metric (SI) and imperial (US customary) units. Convert centimeters to inches, kilograms to pounds, and many more cross-system conversions.'
    },
    {
      question: 'Does this converter work offline?',
      answer: 'Yes, once loaded, the unit converter works completely offline in your browser. All calculations are performed locally on your device, ensuring both privacy and availability without internet connection.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'Enter Value', description: 'Type the numerical value you want to convert in the input field.' },
    { title: 'Select Source Unit', description: 'Choose the unit you\'re converting from (e.g., centimeters, kilograms).' },
    { title: 'Select Target Unit', description: 'Choose the unit you want to convert to (e.g., inches, pounds).' },
    { title: 'Get Result', description: 'Click Convert to see your precise result instantly.' }
  ]

  const tips = [
    'Switch between length and weight by selecting units from different categories',
    'Results are shown with 6 decimal places for maximum precision',
    'Common conversions: 1 inch = 2.54 cm, 1 kg = 2.205 lbs, 1 mile = 1.609 km',
    'All calculations happen in your browser – your data stays private'
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
            Unit Converter
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Convert between different units of measurement instantly. 
            Support for length, weight, temperature, and more unit conversions.
          </p>
        </div>

        <AdUnit slot={1} />

        <UnitConverterClient />

        <AdUnit slot={2} />

        {/* Tool Info Section */}
        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Unit Converter"
            description={
              <>
                <p className="mb-4">
                  Our unit converter provides instant, accurate conversions between different measurement systems. 
                  Whether you&apos;re converting between metric and imperial units or working within the same system, 
                  our tool delivers precise results for everyday needs and professional applications.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">📏 Length Conversions</h4>
                    <p className="text-sm text-blue-700">
                      Centimeters, inches, feet, meters, kilometers – perfect for DIY, construction, and travel.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">⚖️ Weight Conversions</h4>
                    <p className="text-sm text-emerald-700">
                      Kilograms, pounds, ounces, grams, tons – ideal for cooking, shipping, and health tracking.
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

        {/* Related Tools */}
        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/unit-converter" category="utility" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
