import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RandomNumberClient from '@/components/client/RandomNumberClient'
import RelatedTools from '@/components/RelatedTools'
import ToolInfo from '@/components/ToolInfo'
import ToolEducationalGuide from '@/components/ToolEducationalGuide'
import AdUnit from '@/components/AdUnit'
import ToolJsonLd from '@/components/ToolJsonLd'
import { buildToolPageSchemas } from '@/lib/build-tool-schemas'
import { CALCULATOR_SEO } from '@/lib/calculator-seo-config'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Random Number Generator',
  description:
    'Generate random integers in a custom range. Uses Math.random() in your browser—fine for games and sampling, not for passwords or cryptography.',
  keywords:
    'random number generator, random integer, dice roller, lottery picker, random range generator',
  url: 'https://calcuzy.app/random-number-generator',
  image: '/og/og-tools.png',
})

export default function RandomNumberGenerator() {
  const faqData = [
    {
      question: 'How random are the numbers?',
      answer:
        'The tool uses JavaScript Math.random(), which produces pseudorandom numbers with roughly uniform distribution in your chosen range. That is adequate for games, classroom picks, and casual sampling—not for cryptographic secrets.',
    },
    {
      question: 'What range can I use?',
      answer:
        'Set any minimum and maximum integers supported by the inputs. Very large ranges work, but remember Math.random() has finite precision.',
    },
    {
      question: 'Can I generate multiple numbers at once?',
      answer:
        'Yes. Choose how many values to draw. Decide whether duplicates are allowed based on your use case (sampling with vs without replacement).',
    },
    {
      question: 'Is this suitable for passwords or security tokens?',
      answer:
        'No. Use crypto.getRandomValues() or a password manager for security-sensitive randomness.',
    },
    {
      question: 'Is my data stored?',
      answer: 'No. Generation runs locally in your browser.',
    },
  ]

  const steps = [
    { title: 'Set minimum', description: 'Enter the lowest integer in your range (e.g., 1 for a die).' },
    { title: 'Set maximum', description: 'Enter the highest integer (e.g., 6 for a standard die).' },
    { title: 'Choose quantity', description: 'Pick how many numbers to generate.' },
    { title: 'Generate and copy', description: 'Run the generator and copy results if needed.' },
  ]

  const tips = [
    'Use 1–6 for dice, 1–52 for card indices, 1–100 for percentage picks',
    'For raffles, document the time and range you used',
    'Do not use this tool for cryptographic keys or gambling audits',
    'Math.random() is pseudorandom—patterns exist if the seed were known',
  ]

  const schemas = buildToolPageSchemas({
    tool: {
      name: 'Random Number Generator',
      description: 'Generate random integers in a custom range for games, contests, and sampling.',
      url: 'https://calcuzy.app/random-number-generator',
      category: 'UtilityApplication',
      features: ['Custom range', 'Multiple numbers', 'Browser-local', 'Copy results'],
    },
    faqs: faqData,
    howToSteps: steps,
    howTo: CALCULATOR_SEO['random-number-generator'].howTo,
    calculateAction: CALCULATOR_SEO['random-number-generator'].calculateAction,
  })

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <ToolJsonLd schemas={schemas} />
      <Navbar />

      <main className="container section-responsive">
        <div className="text-center mb-12 slide-up">
          <h1 className="heading-1 text-center mb-6">Random Number Generator</h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Pick random integers between a minimum and maximum. Useful for dice, classroom picks, and quick
            samples. Not for cryptography—see the guide below for when to use a secure generator instead.
          </p>
        </div>

        <AdUnit slot={1} />

        <RandomNumberClient />

        <section className="max-w-3xl mx-auto mt-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Pseudorandom vs secure random</h2>
          <p className="text-slate-600 mb-4">
            Most browser random APIs are <strong>pseudorandom</strong>: good enough that each value in your range
            is roughly equally likely, but predictable if an attacker knows the internal state. That is fine for
            board games; it is not fine for session tokens or encryption keys.
          </p>
          <p className="text-sm text-slate-500">
            Reference:{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              MDN — Math.random()
            </a>
          </p>
        </section>

        <ToolEducationalGuide slug="random-number-generator" />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Random Number Generator"
            description={
              <p className="mb-4">
                Generates uniform integers in your range using Math.random(). Results stay in your browser.
              </p>
            }
            steps={steps}
            faqs={faqData}
            tips={tips}
          />
        </div>

        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/random-number-generator" category="utility" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
