import { Metadata } from 'next'
import { createMetadata, createWebPageSchema, createBreadcrumbSchema, createFAQSchema } from '@/lib/metadata'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import Link from 'next/link'

export const metadata: Metadata = createMetadata({
  title: 'Complete Guide to BMI Calculator: Understanding Your Health Metrics',
  description: 'Learn everything about Body Mass Index, how to calculate it, what the numbers mean, and how to use BMI for better health management. Expert guide with examples.',
  keywords: 'BMI calculator, body mass index, healthy weight, health metrics, BMI guide, BMI chart',
  url: '/blog/bmi-calculator-guide'
})

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', url: 'https://calcuzy.app' },
  { name: 'Blog', url: 'https://calcuzy.app/blog' },
  { name: 'BMI Calculator Guide', url: 'https://calcuzy.app/blog/bmi-calculator-guide' }
])

const webPageSchema = createWebPageSchema({
  name: 'Complete Guide to BMI Calculator',
  description: 'Learn everything about Body Mass Index, how to calculate it, what the numbers mean, and how to use BMI for better health management.',
  url: 'https://calcuzy.app/blog/bmi-calculator-guide'
})

const faqSchema = createFAQSchema([
  {
    question: 'What is BMI and why is it important?',
    answer: 'BMI (Body Mass Index) is a measure that uses your height and weight to work out if your weight is healthy. It\'s important because it provides a quick and simple way to assess whether you might be at risk of health problems related to your weight.'
  },
  {
    question: 'How accurate is BMI for measuring health?',
    answer: 'BMI is a good general indicator for most people, but it has limitations. It doesn\'t distinguish between muscle and fat, so very muscular people might have a high BMI despite being healthy. It\'s best used as part of a broader health assessment.'
  },
  {
    question: 'What is a healthy BMI range?',
    answer: 'A healthy BMI range is typically between 18.5 and 24.9. Below 18.5 is considered underweight, 25-29.9 is overweight, and 30 or above is obese. However, these ranges can vary slightly depending on factors like age and ethnicity.'
  },
  {
    question: 'How often should I check my BMI?',
    answer: 'It\'s reasonable to check your BMI every few months or when you notice significant changes in your weight or body composition. However, don\'t obsess over daily fluctuations as weight can vary normally from day to day.'
  }
])

export default function BMICalculatorGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navbar />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="text-blue-600 hover:text-blue-700">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/blog" className="text-blue-600 hover:text-blue-700">Blog</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600">BMI Calculator Guide</li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="text-center mb-12">
            <div className="mb-4">
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                Health
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Guide to BMI Calculator: Understanding Your Health Metrics
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Master Body Mass Index calculations, interpret your results, and take control of your health journey with our comprehensive guide.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500 space-x-4">
              <time>January 15, 2024</time>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </header>

          <AdUnit slot={1} className="mb-12" />

          {/* Table of Contents */}
          <Card className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
            <nav>
              <ul className="space-y-2">
                <li><a href="#what-is-bmi" className="text-blue-600 hover:text-blue-700">What is BMI?</a></li>
                <li><a href="#how-to-calculate" className="text-blue-600 hover:text-blue-700">How to Calculate BMI</a></li>
                <li><a href="#bmi-categories" className="text-blue-600 hover:text-blue-700">BMI Categories</a></li>
                <li><a href="#limitations" className="text-blue-600 hover:text-blue-700">Limitations of BMI</a></li>
                <li><a href="#health-implications" className="text-blue-600 hover:text-blue-700">Health Implications</a></li>
                <li><a href="#improve-bmi" className="text-blue-600 hover:text-blue-700">How to Improve Your BMI</a></li>
              </ul>
            </nav>
          </Card>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            <section id="what-is-bmi" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is BMI?</h2>
              <p className="text-gray-600 mb-4">
                Body Mass Index (BMI) is a mathematical measurement that uses your height and weight to determine if you have a healthy body weight. Developed in the 1830s by Adolphe Quetelet, BMI has become one of the most widely used tools for quickly assessing weight status in populations and individuals.
              </p>
              <p className="text-gray-600 mb-4">
                BMI provides a simple numerical value that categorizes individuals into different weight groups, making it easy for healthcare professionals and individuals to assess potential health risks associated with weight.
              </p>
            </section>

            <section id="how-to-calculate" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Calculate BMI</h2>
              <p className="text-gray-600 mb-6">
                The BMI calculation is straightforward and uses the following formula:
              </p>
              <Card className="bg-blue-50 border-blue-200 p-6 mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">BMI Formula</h3>
                <div className="bg-white p-4 rounded-lg font-mono text-center">
                  BMI = weight (kg) / height² (m²)
                </div>
              </Card>
              <p className="text-gray-600 mb-4">
                For those using imperial units (pounds and inches), the formula is:
              </p>
              <Card className="bg-blue-50 border-blue-200 p-6 mb-6">
                <div className="bg-white p-4 rounded-lg font-mono text-center">
                  BMI = (weight (lbs) / height² (in²)) × 703
                </div>
              </Card>
              <p className="text-gray-600 mb-4">
                While you can calculate BMI manually, our <Link href="/bmi-calculator" className="text-blue-600 hover:text-blue-700 font-medium">free BMI calculator</Link> makes this process instant and error-free.
              </p>
            </section>

            <AdUnit slot={2} className="mb-12" />

            <section id="bmi-categories" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">BMI Categories</h2>
              <p className="text-gray-600 mb-6">
                The World Health Organization (WHO) has established standard BMI categories for adults:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left">BMI Range</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Category</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Health Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Below 18.5</td>
                      <td className="border border-gray-300 px-4 py-3">Underweight</td>
                      <td className="border border-gray-300 px-4 py-3">Increased risk</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">18.5 - 24.9</td>
                      <td className="border border-gray-300 px-4 py-3">Normal weight</td>
                      <td className="border border-gray-300 px-4 py-3">Minimal risk</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">25.0 - 29.9</td>
                      <td className="border border-gray-300 px-4 py-3">Overweight</td>
                      <td className="border border-gray-300 px-4 py-3">Increased risk</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">30.0 - 34.9</td>
                      <td className="border border-gray-300 px-4 py-3">Obesity Class I</td>
                      <td className="border border-gray-300 px-4 py-3">High risk</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">35.0 - 39.9</td>
                      <td className="border border-gray-300 px-4 py-3">Obesity Class II</td>
                      <td className="border border-gray-300 px-4 py-3">Very high risk</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">40.0 and above</td>
                      <td className="border border-gray-300 px-4 py-3">Obesity Class III</td>
                      <td className="border border-gray-300 px-4 py-3">Extremely high risk</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="limitations" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitations of BMI</h2>
              <p className="text-gray-600 mb-4">
                While BMI is a useful screening tool, it has important limitations:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li><strong>Doesn't distinguish between muscle and fat:</strong> Very muscular individuals may have a high BMI despite low body fat.</li>
                <li><strong>Doesn't account for body composition:</strong> Two people with the same BMI can have very different body fat percentages.</li>
                <li><strong>Varies by age and sex:</strong> BMI categories may not be appropriate for children, adolescents, or elderly populations.</li>
                <li><strong>Ethnic differences:</strong> Some ethnic groups may have different health risks at the same BMI.</li>
                <li><strong>Doesn't consider fat distribution:</strong> Abdominal fat (visceral fat) is more dangerous than subcutaneous fat.</li>
              </ul>
            </section>

            <section id="health-implications" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Health Implications</h2>
              <p className="text-gray-600 mb-4">
                Your BMI can indicate potential health risks:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-red-700 mb-3">High BMI Risks</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Type 2 diabetes</li>
                    <li>• Heart disease</li>
                    <li>• High blood pressure</li>
                    <li>• Certain cancers</li>
                    <li>• Sleep apnea</li>
                    <li>• Joint problems</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Low BMI Risks</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Malnutrition</li>
                    <li>• Weakened immune system</li>
                    <li>• Bone loss (osteoporosis)</li>
                    <li>• Anemia</li>
                    <li>• Hormonal issues</li>
                    <li>• Muscle wasting</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section id="improve-bmi" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Improve Your BMI</h2>
              <p className="text-gray-600 mb-6">
                If your BMI falls outside the healthy range, consider these evidence-based strategies:
              </p>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-green-700 mb-3">For High BMI</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li><strong>Calorie control:</strong> Create a modest calorie deficit through diet and exercise.</li>
                    <li><strong>Balanced nutrition:</strong> Focus on whole foods, lean proteins, and plenty of vegetables.</li>
                    <li><strong>Regular exercise:</strong> Combine cardio (150+ minutes/week) with strength training.</li>
                    <li><strong>Portion control:</strong> Use smaller plates and be mindful of serving sizes.</li>
                    <li><strong>Consistent sleep:</strong> Aim for 7-9 hours of quality sleep per night.</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">For Low BMI</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li><strong>Calorie surplus:</strong> Eat more calories than you burn, focusing on nutrient-dense foods.</li>
                    <li><strong>Protein intake:</strong> Consume adequate protein to support muscle growth.</li>
                    <li><strong>Strength training:</strong> Build muscle mass to increase healthy weight.</li>
                    <li><strong>Frequent meals:</strong> Eat 5-6 smaller meals throughout the day.</li>
                    <li><strong>Healthy fats:</strong> Include nuts, avocados, and olive oil in your diet.</li>
                  </ul>
                </Card>
              </div>
            </section>
          </article>

          <AdUnit slot={3} className="mb-12" />

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: 'What is BMI and why is it important?',
                  answer: 'BMI (Body Mass Index) is a measure that uses your height and weight to work out if your weight is healthy. It\'s important because it provides a quick and simple way to assess whether you might be at risk of health problems related to your weight.'
                },
                {
                  question: 'How accurate is BMI for measuring health?',
                  answer: 'BMI is a good general indicator for most people, but it has limitations. It doesn\'t distinguish between muscle and fat, so very muscular people might have a high BMI despite being healthy. It\'s best used as part of a broader health assessment.'
                },
                {
                  question: 'What is a healthy BMI range?',
                  answer: 'A healthy BMI range is typically between 18.5 and 24.9. Below 18.5 is considered underweight, 25-29.9 is overweight, and 30 or above is obese. However, these ranges can vary slightly depending on factors like age and ethnicity.'
                },
                {
                  question: 'How often should I check my BMI?',
                  answer: 'It\'s reasonable to check your BMI every few months or when you notice significant changes in your weight or body composition. However, don\'t obsess over daily fluctuations as weight can vary normally from day to day.'
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Calculate Your BMI Now
            </h2>
            <p className="mb-6 text-blue-100">
              Ready to check your BMI? Use our free, instant calculator to get your results and personalized health recommendations.
            </p>
            <Link
              href="/bmi-calculator"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Calculate BMI
            </Link>
          </Card>
        </main>

        <Footer />
      </div>
    </>
  )
}
