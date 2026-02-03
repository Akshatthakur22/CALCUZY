import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import PasswordToolsClient from '@/components/tools/PasswordToolsClient'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Password Strength Checker & Hash Generator',
  description: 'Check password strength and generate SHA-256 hashes with our free password security tools. Analyze password security, get improvement tips, and create secure hashes.',
  keywords: 'password strength checker, password security, hash generator, SHA-256, password analyzer, secure password checker, password tips',
  url: 'https://calcuzy.app/password-tools',
  image: '/og-tools.png',
})

export default function PasswordToolsPage() {
  const structuredData = createToolSchema({
    name: 'Password Strength Checker & Hash Generator',
    description: 'Check password strength, get security recommendations, and generate SHA-256 hashes',
    url: 'https://calcuzy.app/password-tools',
    category: 'UtilityApplication',
    features: ['Password strength analysis', 'Security recommendations', 'SHA-256 hash generation', 'Privacy-first design', 'No data storage']
  })

  const faqData = [
    {
      question: 'Is my password safe when using this tool?',
      answer: 'Yes, your password is completely safe. Our password strength checker runs entirely in your browser using JavaScript. No passwords are ever sent to our servers, stored, or logged. All analysis happens locally on your device, ensuring complete privacy.'
    },
    {
      question: 'What makes a password strong?',
      answer: 'A strong password is at least 12 characters long, combines uppercase and lowercase letters, numbers, and special characters, avoids common words or patterns, and is unique to each account. Our tool checks all these factors and provides specific improvement suggestions.'
    },
    {
      question: 'What is SHA-256 hashing and why would I use it?',
      answer: 'SHA-256 is a cryptographic hash function that converts any input into a unique 64-character hexadecimal string. It\'s a one-way function – you can\'t reverse it to get the original text. Developers use it for password storage, file integrity verification, and digital signatures.'
    },
    {
      question: 'Should I use this hash for storing passwords in my application?',
      answer: 'For production password storage, use specialized algorithms like bcrypt, Argon2, or PBKDF2 with salt. Plain SHA-256 is vulnerable to rainbow table attacks. Our hash generator is useful for educational purposes, file verification, and understanding cryptographic concepts.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'Enter Your Password', description: 'Type or paste a password into the input field. Your password never leaves your device.' },
    { title: 'Review Strength Analysis', description: 'See the real-time strength meter and score based on length, complexity, and patterns.' },
    { title: 'Check Improvement Tips', description: 'Review specific suggestions to make your password stronger and more secure.' },
    { title: 'Generate Hash (Optional)', description: 'Click to generate a SHA-256 hash of your password for verification or educational purposes.' }
  ]

  const tips = [
    'Use a password manager to generate and store unique passwords for each account',
    'Enable two-factor authentication (2FA) wherever available for extra security',
    'Avoid using personal information like birthdays, names, or phone numbers',
    'Consider using passphrases – multiple random words strung together',
    'Change passwords immediately if a service reports a data breach'
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
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">
            Password Strength Checker & Hash Generator
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Check your password strength and generate SHA-256 hashes with our comprehensive 
            password security tools. Analyze password security and create secure hashes.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <PasswordToolsClient />
        </div>

        <AdUnit slot={2} />

        {/* Tool Info Section */}
        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Password Security Tools"
            description={
              <>
                <p className="mb-4">
                  Password security is your first line of defense against unauthorized access. 
                  Strong passwords protect your personal data, financial accounts, and digital identity 
                  from hackers and automated attacks.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">🔒 Strength Checker</h4>
                    <p className="text-sm text-blue-700">
                      Analyzes length, character variety, patterns, and common weaknesses to score your password.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">🔐 Hash Generator</h4>
                    <p className="text-sm text-emerald-700">
                      Creates SHA-256 cryptographic hashes for verification, development, and security testing.
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
          <RelatedTools currentTool="/password-tools" category="utility" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
