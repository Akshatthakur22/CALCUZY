import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UnitConverterClient from '@/components/client/UnitConverterClient'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Unit Converter – Convert Between Units',
  description: 'Convert between different units of measurement with our free unit converter. Supports length, weight, temperature, and more conversions.',
  keywords: 'unit converter, convert units, measurement converter, length converter',
})

export default function UnitConverter() {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      
      <main className="container py-12">
        <div className="text-center mb-12">
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

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Unit Converter</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Our unit converter provides instant conversions between different units of measurement, 
              making it easy to work with both metric and imperial systems. Whether you&apos;re converting 
              length, weight, or other measurements, our tool delivers accurate results instantly.
            </p>
            
            <p className="paragraph">
              Unit conversion is essential in many everyday situations, from cooking and construction 
              to international travel and scientific calculations. Our converter supports the most 
              commonly used units across different measurement systems, ensuring you can work with 
              any unit format you encounter.
            </p>
            
            <p className="paragraph">
              The converter handles complex conversions automatically, accounting for the precise 
              mathematical relationships between different units. This eliminates the need for 
              manual calculations and reduces the risk of conversion errors in your work.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Supported Unit Categories</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text">Length: centimeters, inches, feet, meters, kilometers</li>
              <li className="text-secondary-text">Weight: kilograms, pounds, ounces, grams, tons</li>
              <li className="text-secondary-text">Temperature: Celsius, Fahrenheit, Kelvin</li>
              <li className="text-secondary-text">Volume: liters, milliliters, gallons, cups</li>
            </ul>
            
            <p className="paragraph">
              Our unit converter is completely free to use and provides instant results without 
              requiring any registration or personal information. The tool works on all devices 
              and browsers, making it accessible whenever you need to convert measurements.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/age-calculator" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Age Calculator</div>
                <div className="text-sm text-secondary-text">Calculate your exact age</div>
              </Link>
              <Link href="/bmi-calculator" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">BMI Calculator</div>
                <div className="text-sm text-secondary-text">Calculate body mass index</div>
              </Link>
            </div>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How accurate are the conversions?</h3>
              <p className="paragraph">
                Our unit converter uses precise mathematical formulas for all conversions, ensuring 
                accurate results to several decimal places. The conversion factors are based on 
                international standards and are regularly updated for accuracy.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can I convert multiple units at once?</h3>
              <p className="paragraph">
                Currently, our converter handles one conversion at a time to maintain simplicity 
                and clarity. You can easily perform multiple conversions by entering different 
                values and selecting different unit pairs.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What units are supported?</h3>
              <p className="paragraph">
                We support the most commonly used units in each category, including both metric 
                and imperial systems. This includes centimeters, inches, feet, meters, kilometers 
                for length, and kilograms, pounds, ounces, grams, tons for weight.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Is this converter suitable for scientific use?</h3>
              <p className="paragraph">
                Yes, our converter provides accurate results suitable for most scientific and 
                engineering applications. However, for highly specialized scientific work, 
                always verify critical calculations with domain-specific tools.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Does this work offline?</h3>
              <p className="paragraph">
                Once loaded, the converter functions completely offline in your browser. 
                All calculations are performed locally, ensuring your privacy and enabling 
                use even without an internet connection.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
