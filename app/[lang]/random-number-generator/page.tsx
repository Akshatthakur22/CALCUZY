import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RandomNumberClient from '@/components/client/RandomNumberClient'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Random Number Generator – Generate Random Numbers',
  description: 'Generate random numbers instantly with our free random number generator. Set custom range and quantity for random number generation.',
  keywords: 'random number generator, generate random numbers, random number tool',
})

export default function RandomNumberGenerator() {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      
      <main className="container py-12">
        <div className="text-center mb-12">
          <h1 className="heading-1 text-center mb-6">
            Random Number Generator
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Generate random numbers instantly with customizable range and quantity. 
            Perfect for games, contests, statistics, and random selection needs.
          </p>
        </div>

        <AdUnit slot={1} />

        <RandomNumberClient />

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Random Number Generator</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Our random number generator provides truly random numbers using JavaScript&apos;s 
              Math.random() function, which generates uniformly distributed random values. 
              This tool is perfect for games, contests, statistical sampling, and any 
              situation requiring random selection.
            </p>
            
            <p className="paragraph">
              Random number generation is essential in many fields from computer science 
              and statistics to gaming and cryptography. Our generator allows you to specify 
              custom ranges and quantities, making it versatile for different applications 
              from simple dice rolls to complex statistical sampling.
            </p>
            
            <p className="paragraph">
              The generator produces numbers within your specified range with equal probability 
              for each possible value. This ensures true randomness suitable for fair games, 
              unbiased sampling, and legitimate random selection processes. Each generation is 
              independent and unpredictable.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Common Uses for Random Numbers</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text">Games and entertainment (dice, cards, lottery)</li>
              <li className="text-secondary-text">Statistical sampling and research</li>
              <li className="text-secondary-text">Contests and giveaways</li>
              <li className="text-secondary-text">Security and password generation</li>
              <li className="text-secondary-text">Educational purposes and demonstrations</li>
            </ul>
            
            <p className="paragraph">
              Our random number generator is completely free to use and provides instant 
              results without requiring any registration or personal information. The tool works 
              on all devices and browsers, making it accessible whenever you need 
              random numbers.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/age-calculator" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Age Calculator</div>
                <div className="text-sm text-secondary-text">Calculate your exact age</div>
              </Link>
              <Link href="/unit-converter" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Unit Converter</div>
                <div className="text-sm text-secondary-text">Convert between units</div>
              </Link>
            </div>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How random are the numbers?</h3>
              <p className="paragraph">
                Our generator uses JavaScript&apos;s Math.random() function which produces 
                cryptographically secure random numbers suitable for most applications. Each number 
                has equal probability of being selected within your range.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What range can I use?</h3>
              <p className="paragraph">
                You can set any range where minimum is less than maximum. 
                The generator supports ranges from 1 to very large numbers, making 
                it suitable for dice games (1-6) to lottery numbers and beyond.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How many numbers can I generate?</h3>
              <p className="paragraph">
                You can generate up to 1000 random numbers at once. This limit 
                ensures optimal performance while handling most practical needs from single 
                numbers to large statistical samples.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Are the numbers truly random?</h3>
              <p className="paragraph">
                Yes, each number is independently generated with equal probability. 
                The randomness is suitable for games, contests, and statistical 
                applications where unbiased selection is important.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Is my data secure when using this generator?</h3>
              <p className="paragraph">
                Yes, your privacy is completely protected. All number generation 
                happens locally in your browser, and we don&apos;t store any generated 
                numbers or settings. Your random numbers remain private and secure.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
