import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary-bg border-t border-gray-200 mt-16 fade-in">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-heading-bold text-primary-text mb-4">
              Calcuzy.app
            </h3>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              Simple online tools, countdown timers, and everyday utilities designed for speed and simplicity. 
              Minimal. Fast. Search-Optimized.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-primary-text mb-4 text-sm">Tools</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/age-calculator" 
                  className="text-sm text-gray-500 hover:text-accent transition-colors duration-200 focus-ring py-1 inline-block"
                >
                  Age Calculator
                </Link>
              </li>
              <li>
                <Link 
                  href="/bmi-calculator" 
                  className="text-sm text-gray-500 hover:text-accent transition-colors duration-200 focus-ring py-1 inline-block"
                >
                  BMI Calculator
                </Link>
              </li>
              <li>
                <Link 
                  href="/date-difference" 
                  className="text-sm text-gray-500 hover:text-accent transition-colors duration-200 focus-ring py-1 inline-block"
                >
                  Date Difference
                </Link>
              </li>
              <li>
                <Link 
                  href="/unit-converter" 
                  className="text-sm text-gray-500 hover:text-accent transition-colors duration-200 focus-ring py-1 inline-block"
                >
                  Unit Converter
                </Link>
              </li>
              <li>
                <Link 
                  href="/random-number-generator" 
                  className="text-sm text-gray-500 hover:text-accent transition-colors duration-200 focus-ring py-1 inline-block"
                >
                  Random Number Generator
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-primary-text mb-4 text-sm">Legal & Info</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-gray-500 hover:text-accent transition-colors duration-200 focus-ring py-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm text-gray-500 hover:text-accent transition-colors duration-200 focus-ring py-1 inline-block"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="text-sm text-gray-500 hover:text-accent transition-colors duration-200 focus-ring py-1 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-sm text-gray-500 hover:text-accent transition-colors duration-200 focus-ring py-1 inline-block"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2024 Calcuzy.app. All rights reserved. Simple tools built beautifully.
            </p>
            <div className="flex flex-wrap items-center justify-center space-x-4 text-sm text-gray-500">
              <Link 
                href="/privacy-policy" 
                className="hover:text-accent transition-colors duration-200 focus-ring py-1"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-400">•</span>
              <Link 
                href="/terms" 
                className="hover:text-accent transition-colors duration-200 focus-ring py-1"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
