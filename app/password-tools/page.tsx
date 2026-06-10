import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import PasswordToolsClient from '@/components/tools/PasswordToolsClient'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import Breadcrumbs from '@/components/Breadcrumbs'
import HowItWorks from '@/components/HowItWorks'
import { createMetadata, createToolSchema, createFAQSchema, createBreadcrumbSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Password Strength Checker & Hash Generator',
  description: 'Check password strength with a simple score and generate SHA-256 hashes in your browser. Nothing is stored or sent to our servers.',
  keywords: 'password strength checker, password security, SHA-256 hash generator, password tester, strong password',
  url: 'https://calcuzy.app/password-tools',
  image: '/og/og-tools.svg',
})

export default function PasswordToolsPage() {
  const structuredData = createToolSchema({
    name: 'Password Strength Checker & Hash Generator',
    description: 'Score password strength from length and character variety, and generate SHA-256 hashes locally in the browser.',
    url: 'https://calcuzy.app/password-tools',
    category: 'UtilityApplication',
    features: ['Strength score', 'Length and variety checks', 'Common pattern detection', 'SHA-256 hashing', 'Browser-only processing'],
  })

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://calcuzy.app' },
    { name: 'Tools', url: 'https://calcuzy.app/tools' },
    { name: 'Password Tools', url: 'https://calcuzy.app/password-tools' },
  ])

  const faqData = [
    {
      question: 'How does the strength checker score passwords?',
      answer: 'It adds points for length (8+, 12+, 16+ characters), lowercase, uppercase, numbers, and symbols, and subtracts points for obvious patterns like repeated characters or common strings such as "123" or "password". The label ranges from Very Weak to Strong based on the total score.',
    },
    {
      question: 'Is this the same as a breach check?',
      answer: 'No. This tool does not compare your password against leaked databases. Use a service like Have I Been Pwned or your password manager\'s breach alert for that. A strong score here does not mean the password has never been exposed.',
    },
    {
      question: 'Are my passwords sent to Calcuzy?',
      answer: 'No. Strength checks and hashing use JavaScript in your browser. We do not receive, log, or store what you type.',
    },
    {
      question: 'What does the SHA-256 generator do?',
      answer: 'It creates a one-way SHA-256 hash of the text you enter—useful for developers testing hash output or verifying file checksums. SHA-256 is not how websites should store login passwords; production apps use slow password hashes like bcrypt or Argon2 with salts.',
    },
    {
      question: 'What makes a good password in practice?',
      answer: 'Use a unique password for every account, prefer long passphrases (random words or 16+ characters), and enable two-factor authentication where available. A password manager helps generate and store unique credentials.',
    },
    {
      question: 'Can I reverse a SHA-256 hash to get the password back?',
      answer: 'No. Hash functions are one-way. Anyone with the hash cannot recover the original password from it alone—though weak passwords can still be guessed by attackers trying common options.',
    },
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'Enter a password', description: 'Type or paste text into the strength field to see a live score.' },
    { title: 'Review the label', description: 'Check length, variety, and whether common patterns were detected.' },
    { title: 'Generate a hash (optional)', description: 'Use the hash tool when you need a SHA-256 hex string for development or verification.' },
    { title: 'Copy if needed', description: 'Copy the hash output—do not share live passwords in chat or email.' },
  ]

  const tips = [
    'Use a unique password for every site—reuse is the main risk after a breach',
    'Long passphrases beat short complex passwords for most people',
    'Turn on two-factor authentication on email, banking, and social accounts',
    'Never enter your real banking password on third-party sites you do not trust',
    'For apps you build, store passwords with bcrypt or Argon2—not plain SHA-256',
  ]

  const howItWorksSteps = [
    {
      title: 'Analyze locally',
      description: 'Your browser checks length, character types, and simple patterns.',
    },
    {
      title: 'Show a strength label',
      description: 'A bar and label (Very Weak through Strong) reflect the score.',
    },
    {
      title: 'Hash on demand',
      description: 'SHA-256 runs via the Web Crypto API when you generate a hash.',
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
            { name: 'Password Tools', url: '/password-tools' },
          ]}
        />
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">Password Strength Checker & Hash Generator</h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Test how strong a password looks based on length and character mix, or generate a SHA-256 hash for development. Everything runs in your browser—we never see your input.
          </p>
        </div>

        <div className="max-w-4xl mx-auto fade-in-up">
          <PasswordToolsClient />
        </div>

        <AdUnit slot={1} />

        <section className="max-w-3xl mx-auto mt-12 prose prose-slate">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Password security basics</h2>
          <p className="text-slate-600 mb-4">
            Most account takeovers start with reused or guessable passwords. This checker is a quick sanity check—not a guarantee of safety. Pair strong unique passwords with a password manager and 2FA on important accounts.
          </p>
          <p className="text-slate-600 mb-4">
            The hash tool outputs a SHA-256 digest of whatever text you enter. That is useful for checksums and API testing, not for securing user login databases.
          </p>
        </section>

        <AdUnit slot={2} />

        <HowItWorks title="How These Tools Work" steps={howItWorksSteps} className="bg-slate-50/50" />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Password Tools"
            description={
              <>
                <p className="mb-4">
                  The strength meter scores passwords on length, character variety, and avoidance of common patterns. The hash generator uses the browser&apos;s built-in SHA-256 implementation. Neither feature sends data to our servers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">Strength score</h4>
                    <p className="text-sm text-blue-700">Simple rules—not a full entropy or breach audit.</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">Private</h4>
                    <p className="text-sm text-emerald-700">Processing stays on your device.</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">SHA-256 only</h4>
                    <p className="text-sm text-amber-700">For dev/testing—not password storage for live apps.</p>
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
          <RelatedTools currentTool="/password-tools" category="utility" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
