import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import PasswordToolsClient from '@/components/tools/PasswordToolsClient'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Password Strength Checker & Hash Generator | Calcuzy.app',
  description: 'Check password strength and generate SHA-256 hashes with our free password security tools. Analyze password security and create secure hashes.',
  keywords: 'password strength checker, password security, hash generator, SHA-256, password analyzer, secure password checker',
  url: 'https://Calcuzy.app/password-tools',
  image: '/og-tools.png',
})

export default function PasswordToolsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Password Tools",
    "description": "Check password strength and generate SHA-256 hashes for security",
    "url": "https://Calcuzy.app/password-tools",
    "applicationCategory": "SecurityApplication",
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

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={300}>
            <h2 className="heading-2 mb-6">About Password Security</h2>
            <div className="space-y-6">
              <div>
                <h3 className="heading-3 mb-3">Understanding Password Strength</h3>
                <p className="paragraph">
                  Password strength is a measure of how difficult a password is to guess or crack through 
                  brute force attacks. Strong passwords typically combine length, complexity, and unpredictability. 
                  Modern computing power can crack simple passwords in seconds, making strong password practices 
                  essential for online security.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Components of a Strong Password</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Length (12+ characters)</h4>
                    <p className="paragraph mb-0">
                      Longer passwords exponentially increase the time required to crack them. Each additional 
                      character multiplies the complexity by the number of possible characters.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Character Variety</h4>
                    <p className="paragraph mb-0">
                      Mix uppercase letters, lowercase letters, numbers, and special characters. This creates 
                      a larger character set, making brute force attacks more difficult.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Unpredictability</h4>
                    <p className="paragraph mb-0">
                      Avoid common patterns, dictionary words, personal information, and sequential characters. 
                      Random combinations are much harder to guess than memorable phrases.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Understanding Hash Functions</h3>
                <p className="paragraph">
                  A hash function is a mathematical algorithm that converts input data into a fixed-size 
                  string of characters. SHA-256 (Secure Hash Algorithm 256-bit) is a cryptographic hash 
                  function that produces a unique 256-bit (64-character) hash for any input. Hashes are 
                  one-way functions - you can&apos;t reverse-engineer the original input from the hash.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Common Password Vulnerabilities</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Using personal information (birthdays, names, phone numbers)</li>
                  <li>Common words and phrases (password, 123456, qwerty)</li>
                  <li>Sequential or repeated characters (abcdef, 111111)</li>
                  <li>Using the same password across multiple accounts</li>
                  <li>Storing passwords in unencrypted text files</li>
                  <li>Sharing passwords via email or messaging apps</li>
                </ul>
              </div>

              <div>
                <h3 className="heading-3 mb-3">Password Security Best Practices</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Use unique passwords for each account</li>
                  <li>Enable two-factor authentication (2FA) when available</li>
                  <li>Use a reputable password manager for storage</li>
                  <li>Change passwords regularly for sensitive accounts</li>
                  <li>Avoid using public Wi-Fi for password-sensitive activities</li>
                  <li>Be cautious of phishing attempts requesting password changes</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={400}>
            <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="heading-3 mb-2">How secure is this password strength checker?</h3>
                <p className="paragraph">
                  Our password strength checker runs entirely in your browser using JavaScript. No passwords 
                  are sent to our servers or stored anywhere. All calculations happen locally on your device, 
                  ensuring your passwords remain private and secure.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What makes a password truly secure?</h3>
                <p className="paragraph">
                  A truly secure password is long (12+ characters), complex (mix of character types), 
                  unique to each account, and unpredictable. The most secure approach is using a password 
                  manager to generate and store random passwords for each account.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Why should I use a hash generator?</h3>
                <p className="paragraph">
                  Hash generators are useful for developers storing passwords securely, verifying file integrity, 
                  and creating digital signatures. When storing passwords, always use salted hashes with proper 
                  cryptographic algorithms like bcrypt or Argon2, not plain SHA-256.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Can passwords be cracked from their hashes?</h3>
                <p className="paragraph">
                  Yes, simple hashes can be cracked using rainbow tables and dictionary attacks. That&apos;s why 
                  password storage should use salted hashes with slow algorithms like bcrypt. Our hash generator 
                  is for educational purposes and verification, not for secure password storage.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">How often should I change my passwords?</h3>
                <p className="paragraph">
                  For high-security accounts, change passwords every 3-6 months or immediately if you suspect 
                  a breach. For less critical accounts, annual changes may suffice. Always change passwords 
                  after security incidents or when a service reports a data breach.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What is two-factor authentication (2FA)?</h3>
                <p className="paragraph">
                  2FA adds an extra layer of security by requiring two forms of identification: something 
                  you know (password) and something you have (phone, authenticator app). Even if someone 
                  steals your password, they can&apos;t access your account without the second factor.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Are password managers safe?</h3>
                <p className="paragraph">
                  Reputable password managers are generally very safe, using strong encryption and security 
                  practices. They&apos;re much safer than reusing passwords or storing them in plain text. 
                  Choose well-established providers with good security reputations and enable 2FA.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto fade-in-up">
          <Card animation="fade-in-up" delay={500}>
            <h2 className="heading-2 mb-6">Related Security Tools</h2>
            <div className="grid-responsive-3 gap-6">
              <Link href="/tools" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">All Security Tools</h3>
                  <p className="text-sm text-gray-600">Explore our complete collection of security utilities</p>
                </div>
              </Link>
              <Link href="/random-number-generator" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">Random Number Generator</h3>
                  <p className="text-sm text-gray-600">Generate secure random numbers for various purposes</p>
                </div>
              </Link>
              <Link href="/unit-converter" className="block group">
                <div className="p-6 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent">Unit Converter</h3>
                  <p className="text-sm text-gray-600">Convert between different units of measurement</p>
                </div>
              </Link>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
