import Link from 'next/link'

export default function SEOContent() {
  return (
    <section className="w-full py-12 md:py-16 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Free calculators and tools — built to be useful, not noisy
          </h2>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-6 leading-relaxed">
              Calcuzy is a collection of free online calculators, converters, and document templates created by{' '}
              <Link href="/about/" className="text-blue-600 hover:underline">
                Akshat Thakur
              </Link>
              . Each tool runs in your browser when possible, so your inputs stay on your device. There is no signup wall and no paywall.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">What you will find here</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              The finance tools—{' '}
              <Link href="/rent-affordability-calculator/" className="text-blue-600 hover:underline">
                rent affordability
              </Link>
              ,{' '}
              <Link href="/capital-gains-calculator/" className="text-blue-600 hover:underline">
                capital gains tax
              </Link>
              ,{' '}
              <Link href="/crypto-tax-calculator/" className="text-blue-600 hover:underline">
                crypto tax
              </Link>
              , and{' '}
              <Link href="/property-tax-estimator/" className="text-blue-600 hover:underline">
                property tax
              </Link>
              —include formulas, worked examples, and links to official sources. They are educational starting points, not professional tax or legal advice.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Health and everyday tools like the{' '}
              <Link href="/bmi-calculator/" className="text-blue-600 hover:underline">
                BMI calculator
              </Link>
              ,{' '}
              <Link href="/age-calculator/" className="text-blue-600 hover:underline">
                age calculator
              </Link>
              , and{' '}
              <Link href="/unit-converter/" className="text-blue-600 hover:underline">
                unit converter
              </Link>{' '}
              explain how results are calculated and where the method comes from (for example WHO/CDC categories for adult BMI).
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">In-depth guides on the blog</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              For topics that need more context, we publish long-form guides on the{' '}
              <Link href="/blog/" className="text-blue-600 hover:underline">
                Calcuzy blog
              </Link>
              :{' '}
              <Link href="/blog/rent-affordability-guide/" className="text-blue-600 hover:underline">
                rent and the 30% rule
              </Link>
              ,{' '}
              <Link href="/blog/capital-gains-tax-guide/" className="text-blue-600 hover:underline">
                capital gains tax
              </Link>
              ,{' '}
              <Link href="/blog/crypto-tax-guide/" className="text-blue-600 hover:underline">
                crypto cost basis
              </Link>
              ,{' '}
              <Link href="/blog/bmi-calculator-guide/" className="text-blue-600 hover:underline">
                BMI explained
              </Link>
              , and{' '}
              <Link href="/blog/will-writing-guide/" className="text-blue-600 hover:underline">
                basic will writing
              </Link>
              . Every guide links back to a free tool you can use immediately.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">How we approach accuracy and privacy</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Formulas follow published standards where they exist. Finance and legal tools include clear disclaimers. We describe analytics and advertising practices in our{' '}
              <Link href="/privacy-policy/" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              . If you spot an error or want a new tool,{' '}
              <Link href="/contact/" className="text-blue-600 hover:underline">
                send feedback
              </Link>
              —many additions on Calcuzy started that way.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Browse the full directory on the{' '}
              <Link href="/tools/" className="text-blue-600 hover:underline">
                tools page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
