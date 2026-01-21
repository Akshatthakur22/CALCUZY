import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary-bg border-t border-border mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-heading-bold text-primary-text mb-4">
              Calcuzy.com
            </h3>
            <p className="text-secondary-text mb-4">
              Simple online tools, countdown timers, and everyday utilities designed for speed and simplicity. 
              Minimal. Fast. Search-Optimized.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-primary-text mb-4">Tools</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/age-calculator" className="text-secondary-text hover:text-accent transition-colors">
                  Age Calculator
                </Link>
              </li>
              <li>
                <Link href="/bmi-calculator" className="text-secondary-text hover:text-accent transition-colors">
                  BMI Calculator
                </Link>
              </li>
              <li>
                <Link href="/date-difference" className="text-secondary-text hover:text-accent transition-colors">
                  Date Difference
                </Link>
              </li>
              <li>
                <Link href="/unit-converter" className="text-secondary-text hover:text-accent transition-colors">
                  Unit Converter
                </Link>
              </li>
              <li>
                <Link href="/random-number-generator" className="text-secondary-text hover:text-accent transition-colors">
                  Random Number Generator
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-primary-text mb-4">Popular Pages</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/days-until-christmas" className="text-secondary-text hover:text-accent transition-colors">
                  Christmas Countdown
                </Link>
              </li>
              <li>
                <Link href="/days-until-new-year" className="text-secondary-text hover:text-accent transition-colors">
                  New Year Countdown
                </Link>
              </li>
              <li>
                <Link href="/dog-names" className="text-secondary-text hover:text-accent transition-colors">
                  Dog Names
                </Link>
              </li>
              <li>
                <Link href="/motivational-quotes" className="text-secondary-text hover:text-accent transition-colors">
                  Motivational Quotes
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-secondary-text text-sm">
            © 2024 Calcuzy.com. All rights reserved. Simple tools built beautifully.
          </p>
        </div>
      </div>
    </footer>
  )
}
