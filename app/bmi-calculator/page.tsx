import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BMICalculatorClient from '@/components/client/BMICalculatorClient'
import RelatedTools from '@/components/RelatedTools'
import ToolInfo from '@/components/ToolInfo'
import AdUnit from '@/components/AdUnit'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'BMI Calculator',
  description: 'Calculate your BMI online with our free body mass index calculator. Get instant BMI results and health category classification.',
  keywords: 'bmi online, body mass index tool, bmi calculator, healthy weight',
  url: 'https://calcuzy.app/bmi-calculator',
  image: '/og-tools.png',
})

export default function BMICalculator() {
  const structuredData = createToolSchema({
    name: 'BMI Calculator',
    description: 'Calculate your Body Mass Index (BMI) online with our free health tool',
    url: 'https://calcuzy.app/bmi-calculator',
    category: 'HealthApplication',
    features: ['Metric and Imperial units', 'Instant BMI calculation', 'Health category classification', 'WHO standards']
  })

  const faqData = [
    {
      question: 'What is BMI and how is it calculated?',
      answer: 'BMI (Body Mass Index) is calculated by dividing your weight in kilograms by your height in meters squared (kg/m²). For imperial units, the formula is (weight in lbs × 703) / (height in inches)².'
    },
    {
      question: 'What are the BMI categories?',
      answer: 'WHO BMI categories are: Underweight (below 18.5), Normal weight (18.5-24.9), Overweight (25-29.9), and Obese (30 and above). These categories help assess weight-related health risks.'
    },
    {
      question: 'Is BMI accurate for everyone?',
      answer: 'BMI is a useful screening tool but has limitations. It may not be accurate for athletes with high muscle mass, elderly individuals, or pregnant women. It doesn\'t distinguish between muscle and fat mass.'
    },
    {
      question: 'What is a healthy BMI range?',
      answer: 'A healthy BMI range is typically 18.5 to 24.9. However, individual health depends on many factors beyond BMI, including diet, exercise, family history, and overall lifestyle.'
    },
    {
      question: 'How often should I check my BMI?',
      answer: 'Checking BMI monthly or quarterly is sufficient for tracking trends. More important is focusing on healthy habits like regular exercise and balanced nutrition rather than frequent BMI checks.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'Select Unit System', description: 'Choose between Metric (kg, m) or Imperial (lbs, inches) based on your preference.' },
    { title: 'Enter Your Weight', description: 'Input your current weight in the selected unit system.' },
    { title: 'Enter Your Height', description: 'Input your height in meters or inches depending on your unit choice.' },
    { title: 'View Your Results', description: 'See your BMI value and health category classification instantly.' },
    { title: 'Understand Your Category', description: 'Learn what your BMI means and recommended actions if needed.' }
  ]

  const tips = [
    'Measure weight at the same time each day for consistency',
    'BMI is one metric - also consider waist circumference and body composition',
    'Athletes may have higher BMI due to muscle mass, which is healthy',
    'Focus on sustainable lifestyle changes rather than quick fixes',
    'Consult a healthcare provider for personalized health advice'
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

        <ToolInfo
          title="BMI Calculator"
          description="Our Body Mass Index (BMI) calculator provides instant health assessments based on your weight and height measurements. BMI is a widely used metric developed in the 19th century that helps determine whether your weight is healthy relative to your height. While it doesn't directly measure body fat, it provides a reliable indicator of healthy weight ranges for most adults based on WHO standards."
          steps={steps}
          tips={tips}
          faqs={faqData}
        />

        <AdUnit slot={3} />

        <RelatedTools currentTool="/bmi-calculator" category="health" />
      </main>

      <Footer />
    </div>
  )
}
