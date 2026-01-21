'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'Age Calculator – Calculate Age from Date',
  description: 'Calculate your exact age in years, months, and days with our free age calculator. Enter your birth date to get precise age calculations instantly.',
  keywords: 'age from date, calculate age, age calculator, birthday calculator',
  openGraph: {
    title: 'Age Calculator – Calculate Age from Date',
    description: 'Calculate your exact age in years, months, and days with our free age calculator.',
    type: 'website',
  },
}

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [result, setResult] = useState('')

  const calculateAge = () => {
    if (!birthDate || !currentDate) {
      setResult('Please select both birth date and current date')
      return
    }

    const birth = new Date(birthDate)
    const current = new Date(currentDate)

    if (birth > current) {
      setResult('Birth date cannot be in the future')
      return
    }

    let years = current.getFullYear() - birth.getFullYear()
    let months = current.getMonth() - birth.getMonth()
    let days = current.getDate() - birth.getDate()

    if (days < 0) {
      months--
      const lastMonth = new Date(current.getFullYear(), current.getMonth(), 0)
      days += lastMonth.getDate()
    }

    if (months < 0) {
      years--
      months += 12
    }

    setResult(`You are ${years} years, ${months} months, and ${days} days old`)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      
      <main className="container py-12">
        <div className="text-center mb-12">
          <h1 className="heading-1 text-center mb-6">
            Age Calculator
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Calculate your exact age in years, months, and days. Simply enter your birth date 
            and current date to get precise age calculations instantly.
          </p>
        </div>

        <AdUnit slot={1} />

        <Card className="max-w-2xl mx-auto mb-12">
          <div className="space-y-6">
            <div>
              <label className="block text-primary-text font-medium mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                max={today}
              />
            </div>

            <div>
              <label className="block text-primary-text font-medium mb-2">
                Current Date
              </label>
              <input
                type="date"
                value={currentDate}
                onChange={(e) => setCurrentDate(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                max={today}
              />
            </div>

            <button
              onClick={calculateAge}
              className="w-full btn-primary"
            >
              Calculate Age
            </button>

            {result && (
              <div className="p-4 bg-secondary-bg rounded-lg text-center">
                <div className="text-lg font-medium text-primary-text">
                  {result}
                </div>
              </div>
            )}
          </div>
        </Card>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Age Calculator</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Our age calculator provides precise age calculations in years, months, and days. 
              This tool is perfect for knowing your exact age for important milestones, legal purposes, 
              or simply out of curiosity. The calculator accounts for leap years and varying month 
              lengths to ensure accuracy.
            </p>
            
            <p className="paragraph">
              Age calculation is important for many life events and legal requirements. From determining 
              eligibility for school enrollment, voting, driving, retirement, and other age-based 
              criteria, knowing your exact age is essential. Our calculator makes this process simple 
              and accurate.
            </p>
            
            <p className="paragraph">
              The concept of age calculation varies across cultures, but the standard method used 
              globally counts completed years, months, and days. This calculator follows the 
              internationally accepted method, making it suitable for official documents, applications, 
              and personal use.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Common Uses for Age Calculation</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text">Filling out official forms and applications</li>
              <li className="text-secondary-text">Planning birthday celebrations and milestones</li>
              <li className="text-secondary-text">Checking eligibility for age-restricted activities</li>
              <li className="text-secondary-text">Calculating retirement dates and benefits</li>
              <li className="text-secondary-text">Tracking children's development and growth</li>
            </ul>
            
            <p className="paragraph">
              Our age calculator is completely free to use and works instantly without requiring any 
              personal information or registration. Simply enter your dates and get accurate results 
              immediately. The tool works on all devices and browsers for your convenience.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/date-difference" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Date Difference Calculator</div>
                <div className="text-sm text-secondary-text">Calculate days between dates</div>
              </Link>
              <Link href="/bmi-calculator" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">BMI Calculator</div>
                <div className="text-sm text-secondary-text">Calculate body mass index</div>
              </Link>
            </div>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How accurate is this age calculator?</h3>
              <p className="paragraph">
                Our age calculator is extremely accurate, accounting for leap years and varying 
                month lengths. It calculates your exact age down to the day, making it suitable 
                for official purposes and precise calculations.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What date format should I use?</h3>
              <p className="paragraph">
                Use the standard date format (MM/DD/YYYY) by selecting dates from the calendar 
                picker. The calculator accepts any valid date and automatically handles different 
                date formats for your convenience.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can I calculate someone else's age?</h3>
              <p className="paragraph">
                Yes, you can calculate anyone's age by entering their birth date and the current 
                date. This is useful for calculating family members' ages, planning celebrations, 
                or filling out forms for others.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Does this account for leap years?</h3>
              <p className="paragraph">
                Yes, our age calculator automatically accounts for leap years and the varying 
                number of days in each month. This ensures your age calculation is precise 
                regardless of when you were born.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Is my data stored when using this calculator?</h3>
              <p className="paragraph">
                No, we don't store any of your personal data or calculation results. All calculations 
                happen locally in your browser, ensuring complete privacy and security of your information.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
