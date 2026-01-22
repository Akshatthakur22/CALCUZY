import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BMICalculatorClient from '@/components/client/BMICalculatorClient'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'BMI Calculator – Body Mass Index Tool',
  description: 'Calculate your BMI online with our free body mass index calculator. Get instant BMI results and health category classification.',
  keywords: 'bmi online, body mass index tool, bmi calculator, healthy weight',
  url: 'https://Calcuzy.app/bmi-calculator',
  image: '/og-tools.png',
})

export default function BMICalculator() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BMI Calculator",
    "description": "Calculate your Body Mass Index (BMI) online with our free health tool",
    "url": "https://Calcuzy.app/bmi-calculator",
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
        <div className="text-center mb-12 slide-up">
          <h1 className="heading-1 text-center mb-6">
            BMI Calculator
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Calculate your Body Mass Index (BMI) instantly. Enter your weight and height 
            to get your BMI result and health category classification in seconds.
          </p>
        </div>

        <AdUnit slot={1} />

        <BMICalculatorClient />

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <h2 className="heading-2 mb-6">About BMI Calculator</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Our Body Mass Index (BMI) calculator provides instant health assessments based on your 
              weight and height measurements. BMI is a widely used metric that helps determine 
              whether your weight is healthy relative to your height.
            </p>
            
            <p className="paragraph">
              The BMI calculation was developed in the 19th century and remains one of the most 
              accessible health screening tools available. While it doesn&apos;t directly measure body fat, it 
              provides a reliable indicator of healthy weight ranges for most adults.
            </p>
            
            <p className="paragraph">
              Understanding your BMI can help you make informed decisions about diet, exercise, and 
              overall health management. Our calculator categorizes results into underweight, normal weight, 
              overweight, and obese categories based on World Health Organization standards.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">BMI Categories</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text"><strong>Underweight:</strong> BMI below 18.5</li>
              <li className="text-secondary-text"><strong>Normal weight:</strong> BMI 18.5-24.9</li>
              <li className="text-secondary-text"><strong>Overweight:</strong> BMI 25-29.9</li>
              <li className="text-secondary-text"><strong>Obese:</strong> BMI 30 and above</li>
            </ul>
            
            <p className="paragraph">
              Our BMI calculator is completely free to use and provides instant results without 
              requiring any personal information or registration. The tool works on all devices 
              and browsers, making it accessible whenever you need to check your BMI.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/age-calculator" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Age Calculator</div>
                <div className="text-sm text-secondary-text">Calculate your exact age</div>
              </Link>
              <Link href="/date-difference" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Date Difference Calculator</div>
                <div className="text-sm text-secondary-text">Calculate days between dates</div>
              </Link>
            </div>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How accurate is this BMI calculator?</h3>
              <p className="paragraph">
                Our BMI calculator uses the standard formula: weight (kg) ÷ height² (m²). 
                It provides accurate results to one decimal place and categorizes your BMI 
                according to World Health Organization standards.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What is a healthy BMI range?</h3>
              <p className="paragraph">
                A healthy BMI typically ranges from 18.5 to 24.9 for most adults. However, 
                factors like age, muscle mass, and overall health should be considered. Athletes 
                may have higher BMI due to increased muscle mass.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Should I use metric or imperial units?</h3>
              <p className="paragraph">
                Our calculator accepts weight in kilograms or pounds and height in centimeters 
                or inches. The BMI formula automatically converts to metric units, so you can 
                use whichever measurement system is most familiar to you.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How often should I check my BMI?</h3>
              <p className="paragraph">
                Most healthcare professionals recommend checking your BMI annually or whenever 
                there are significant changes in your weight or height. Regular monitoring helps 
                track your health progress and identify potential issues early.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Is my data secure when using this calculator?</h3>
              <p className="paragraph">
                Yes, your privacy is completely protected. All calculations happen locally 
                in your browser, and we don&apos;t store any personal information. Your BMI 
                results are not saved or shared with anyone.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
