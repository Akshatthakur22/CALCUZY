import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { buildBlogGuideSchemas } from '@/lib/build-blog-schemas'
import { getGuideBySlug } from '@/lib/guides'
import BlogGuideJsonLd from '@/components/blog/BlogGuideJsonLd'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import YMYLDisclaimer from '@/components/YMYLDisclaimer'
import Link from 'next/link'

const guide = getGuideBySlug('bmi-calculator-guide')!

export const metadata: Metadata = createMetadata({
  title: 'BMI Calculator Guide: What BMI Means and How to Use It',
  description: guide.excerpt,
  keywords: 'BMI calculator, body mass index, healthy weight, BMI categories, WHO BMI, CDC BMI',
  url: `https://calcuzy.app/blog/${guide.slug}`,
  image: guide.ogImage,
})

const faqData = [
  {
    question: 'What is BMI?',
    answer: 'Body Mass Index (BMI) is weight in kilograms divided by height in meters squared (or the equivalent formula in pounds and inches). It is a screening tool that groups adults into broad weight categories—it does not measure body fat directly.'
  },
  {
    question: 'How accurate is BMI for measuring health?',
    answer: 'BMI is useful for population screening and a first look at weight status, but it has limits. It does not separate muscle from fat, so athletes may score high despite low body fat. Providers often use waist circumference and other tests alongside BMI.'
  },
  {
    question: 'What is a healthy BMI range for adults?',
    answer: 'For adults 20 and older, WHO and CDC commonly use: underweight below 18.5, normal 18.5–24.9, overweight 25.0–29.9, and obese 30.0 and above. Some Asian populations may face higher health risks at lower BMI values—ask your clinician what applies to you.'
  },
  {
    question: 'How often should I check my BMI?',
    answer: 'Checking every few months—or when your weight changes noticeably—is enough for most people. Daily weight fluctuates with hydration and meals, so avoid reacting to day-to-day BMI shifts.'
  }
]

const schemas = buildBlogGuideSchemas({
  slug: guide.slug,
  headline: guide.title,
  description: guide.excerpt,
  datePublished: '2024-01-15',
  dateModified: '2026-03-18',
  image: guide.ogImage,
  faqs: faqData,
})

export default function BMICalculatorGuide() {
  return (
    <>
      <BlogGuideJsonLd schemas={schemas} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navbar />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="text-sm mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="text-blue-600 hover:text-blue-700">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/blog/" className="text-blue-600 hover:text-blue-700">Blog</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600">BMI Calculator Guide</li>
            </ol>
          </nav>

          <header className="text-center mb-8">
            <div className="mb-4">
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                Health
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              BMI Calculator Guide: What the Numbers Mean
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              How Body Mass Index is calculated, standard adult categories from WHO and CDC guidance, and when to use BMI as a screen—not a diagnosis.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500 space-x-4">
              <time dateTime="2024-01-15">January 15, 2024</time>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </header>

          <div className="mb-12">
            <YMYLDisclaimer category="health" />
          </div>

          <AdUnit slot={1} className="mb-12" />

          <Card className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
            <nav>
              <ul className="space-y-2">
                <li><a href="#what-is-bmi" className="text-blue-600 hover:text-blue-700">What is BMI?</a></li>
                <li><a href="#how-to-calculate" className="text-blue-600 hover:text-blue-700">How to Calculate BMI</a></li>
                <li><a href="#bmi-categories" className="text-blue-600 hover:text-blue-700">BMI Categories</a></li>
                <li><a href="#limitations" className="text-blue-600 hover:text-blue-700">Limitations of BMI</a></li>
                <li><a href="#health-implications" className="text-blue-600 hover:text-blue-700">What BMI Can and Cannot Tell You</a></li>
                <li><a href="#improve-bmi" className="text-blue-600 hover:text-blue-700">Next Steps</a></li>
                <li><a href="#sources" className="text-blue-600 hover:text-blue-700">Sources</a></li>
              </ul>
            </nav>
          </Card>

          <article className="prose prose-lg max-w-none">
            <section id="what-is-bmi" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is BMI?</h2>
              <p className="text-gray-600 mb-4">
                Body Mass Index (BMI) relates your weight to your height. It was developed in the 19th century and is now used by organizations such as the{' '}
                <a href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">World Health Organization (WHO)</a>
                {' '}and the{' '}
                <a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">U.S. Centers for Disease Control and Prevention (CDC)</a>
                {' '}as a population-level screening tool for weight status in adults.
              </p>
              <p className="text-gray-600 mb-4">
                BMI alone does not diagnose illness. It helps flag when further assessment—such as waist measurement, blood work, or a clinical exam—may be useful.
              </p>
            </section>

            <section id="how-to-calculate" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Calculate BMI</h2>
              <p className="text-gray-600 mb-6">
                The standard formulas are:
              </p>
              <Card className="bg-blue-50 border-blue-200 p-6 mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Metric</h3>
                <div className="bg-white p-4 rounded-lg font-mono text-center">
                  BMI = weight (kg) ÷ height (m)²
                </div>
              </Card>
              <Card className="bg-blue-50 border-blue-200 p-6 mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Imperial</h3>
                <div className="bg-white p-4 rounded-lg font-mono text-center">
                  BMI = (weight (lb) ÷ height (in)²) × 703
                </div>
              </Card>
              <p className="text-gray-600 mb-4">
                Use our{' '}
                <Link href="/bmi-calculator/" className="text-blue-600 hover:text-blue-700 font-medium">
                  free BMI calculator
                </Link>
                {' '}to compute your result in metric or imperial units. Calculations run in your browser.
              </p>
            </section>

            <AdUnit slot={2} className="mb-12" />

            <section id="bmi-categories" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">BMI Categories</h2>
              <p className="text-gray-600 mb-6">
                For adults 20 and older, WHO and CDC use these broad categories (see{' '}
                <a href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CDC adult BMI</a>
                ):
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left">BMI Range</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Category</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Below 18.5</td>
                      <td className="border border-gray-300 px-4 py-3">Underweight</td>
                      <td className="border border-gray-300 px-4 py-3">May warrant clinical review</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">18.5 – 24.9</td>
                      <td className="border border-gray-300 px-4 py-3">Normal weight</td>
                      <td className="border border-gray-300 px-4 py-3">Typical reference range</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">25.0 – 29.9</td>
                      <td className="border border-gray-300 px-4 py-3">Overweight</td>
                      <td className="border border-gray-300 px-4 py-3">Higher associated risk</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">30.0 – 34.9</td>
                      <td className="border border-gray-300 px-4 py-3">Obesity Class I</td>
                      <td className="border border-gray-300 px-4 py-3">CDC obesity class</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">35.0 – 39.9</td>
                      <td className="border border-gray-300 px-4 py-3">Obesity Class II</td>
                      <td className="border border-gray-300 px-4 py-3">CDC obesity class</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">40.0 and above</td>
                      <td className="border border-gray-300 px-4 py-3">Obesity Class III</td>
                      <td className="border border-gray-300 px-4 py-3">Severe obesity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Children and teens use BMI-for-age percentiles, not these adult cutoffs. See{' '}
                <a href="https://www.cdc.gov/bmi/child-teen-calculator/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CDC BMI for children and teens</a>.
              </p>
            </section>

            <section id="limitations" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitations of BMI</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li><strong>Muscle vs fat:</strong> Muscular people may have a high BMI with low body fat.</li>
                <li><strong>Body composition:</strong> Two people with the same BMI can differ in fat percentage.</li>
                <li><strong>Age:</strong> Older adults may lose height or muscle, affecting interpretation.</li>
                <li><strong>Ethnicity:</strong> Some groups face health risks at lower BMI values than standard cutoffs suggest.</li>
                <li><strong>Fat location:</strong> Waist size and visceral fat matter; BMI does not measure where fat is stored.</li>
              </ul>
            </section>

            <section id="health-implications" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What BMI Can and Cannot Tell You</h2>
              <p className="text-gray-600 mb-4">
                Higher BMI is associated with increased risk of conditions such as type 2 diabetes and cardiovascular disease in population studies. Very low BMI may signal undernutrition or other issues. These are statistical associations—not diagnoses for any one person.
              </p>
              <p className="text-gray-600 mb-4">
                A healthcare provider may combine BMI with blood pressure, lipids, waist circumference, family history, and lifestyle when assessing your health.
              </p>
            </section>

            <section id="improve-bmi" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Next Steps</h2>
              <p className="text-gray-600 mb-6">
                If your BMI is outside the normal range, consider discussing it with a doctor or registered dietitian before making major diet or exercise changes. Sustainable habits—balanced nutrition, regular activity, adequate sleep—matter more than chasing a number alone.
              </p>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-green-700 mb-3">If BMI is high</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>Ask your provider about safe weight-management goals.</li>
                    <li>Focus on whole foods and consistent movement you can maintain.</li>
                    <li>Track waist circumference if your provider recommends it.</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">If BMI is low</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>Rule out underlying conditions with a clinical evaluation.</li>
                    <li>Work with a professional on nutrient-dense meals and strength training if appropriate.</li>
                    <li>Avoid extreme restriction without medical supervision.</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section id="sources" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sources</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <a href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    WHO — Obesity and overweight
                  </a>
                </li>
                <li>
                  <a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    CDC — About adult BMI
                  </a>
                </li>
                <li>
                  <a href="https://www.cdc.gov/obesity/basics/adult-defining.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    CDC — Defining adult overweight and obesity
                  </a>
                </li>
                <li>
                  <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    NHLBI — BMI information
                  </a>
                </li>
              </ul>
            </section>
          </article>

          <AdUnit slot={3} className="mb-12" />

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <Card key={index}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </section>

          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Calculate Your BMI
            </h2>
            <p className="mb-6 text-blue-100">
              Use our free BMI calculator for instant results in metric or imperial units.
            </p>
            <Link
              href="/bmi-calculator/"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Open BMI Calculator
            </Link>
          </Card>
        </main>

        <Footer />
      </div>
    </>
  )
}
