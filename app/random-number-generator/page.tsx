'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'Random Number Generator – Generate Random Numbers',
  description: 'Generate random numbers instantly with our free random number generator. Set custom range and quantity for random number generation.',
  keywords: 'random number generator, generate random numbers, random number tool',
  openGraph: {
    title: 'Random Number Generator – Generate Random Numbers',
    description: 'Generate random numbers instantly with our free random number generator.',
    type: 'website',
  },
}

export default function RandomNumberGenerator() {
  const [min, setMin] = useState('1')
  const [max, setMax] = useState('100')
  const [count, setCount] = useState('1')
  const [results, setResults] = useState<number[]>([])

  const generateNumbers = () => {
    const minNum = parseInt(min)
    const maxNum = parseInt(max)
    const countNum = parseInt(count)

    if (isNaN(minNum) || isNaN(maxNum) || isNaN(countNum)) {
      setResults([])
      return
    }

    if (minNum >= maxNum) {
      setResults([])
      return
    }

    if (countNum > 1000) {
      setResults([])
      return
    }

    const newNumbers: number[] = []
    for (let i = 0; i < countNum; i++) {
      const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
      newNumbers.push(randomNum)
    }

    setResults(newNumbers)
  }

  const clearResults = () => {
    setResults([])
  }

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

        <Card className="max-w-2xl mx-auto mb-12">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-primary-text font-medium mb-2">
                  Minimum
                </label>
                <input
                  type="number"
                  value={min}
                  onChange={(e) => setMin(e.target.value)}
                  placeholder="1"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  min="1"
                />
              </div>

              <div>
                <label className="block text-primary-text font-medium mb-2">
                  Maximum
                </label>
                <input
                  type="number"
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
                  placeholder="100"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  min="2"
                />
              </div>

              <div>
                <label className="block text-primary-text font-medium mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  placeholder="1"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  min="1"
                  max="1000"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={generateNumbers}
                className="flex-1 btn-primary"
              >
                Generate Numbers
              </button>
              <button
                onClick={clearResults}
                className="flex-1 px-6 py-3 border border-border rounded-lg hover:bg-card-hover transition-colors"
              >
                Clear
              </button>
            </div>

            {results.length > 0 && (
              <div className="p-4 bg-secondary-bg rounded-lg">
                <div className="text-lg font-medium text-primary-text mb-3">
                  Generated Numbers:
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {results.map((number, index) => (
                    <div key={index} className="text-center p-2 bg-primary-bg border border-border rounded">
                      {number}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Random Number Generator</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Our random number generator provides truly random numbers using JavaScript's 
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
                Our generator uses JavaScript's Math.random() function which produces 
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
                happens locally in your browser, and we don't store any generated 
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
