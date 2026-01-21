import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DateDifferenceClient from '@/components/client/DateDifferenceClient'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Date Difference Calculator – Calculate Days Between Dates',
  description: 'Calculate the exact number of days between two dates with our free date difference calculator. Perfect for planning and tracking important dates.',
  keywords: 'calculate days between dates, date difference, date calculator',
})

export default function DateDifference() {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      
      <main className="container py-12">
        <div className="text-center mb-12">
          <h1 className="heading-1 text-center mb-6">
            Date Difference Calculator
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Calculate the exact number of days between two dates. Perfect for planning events, 
            tracking deadlines, or calculating time periods.
          </p>
        </div>

        <AdUnit slot={1} />

        <DateDifferenceClient />

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Date Difference Calculator</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Our date difference calculator provides precise calculations between any two dates, 
              showing the exact number of days, weeks, months, and years. This tool is 
              essential for project planning, event coordination, and tracking important milestones 
              in your personal and professional life.
            </p>
            
            <p className="paragraph">
              Date calculations are crucial for many real-world applications. From planning 
              vacations and business projects to tracking pregnancy terms, calculating service 
              periods, or measuring time until important deadlines, knowing the exact duration 
              between dates helps with precise planning and organization.
            </p>
            
            <p className="paragraph">
              The calculator accounts for leap years and varying month lengths, ensuring 
              accurate results regardless of which dates you select. This precision makes it reliable 
              for both short-term and long-term date difference calculations, from days to 
              decades.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Common Uses for Date Calculation</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text">Planning vacation and travel itineraries</li>
              <li className="text-secondary-text">Tracking project deadlines and milestones</li>
              <li className="text-secondary-text">Calculating age and time elapsed</li>
              <li className="text-secondary-text">Planning events and appointments</li>
              <li className="text-secondary-text">Calculating service periods and subscriptions</li>
            </ul>
            
            <p className="paragraph">
              Our date difference calculator is completely free to use and provides instant 
              results without requiring any registration or personal information. The tool works 
              seamlessly on all devices and browsers for your convenience.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/age-calculator" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Age Calculator</div>
                <div className="text-sm text-secondary-text">Calculate your exact age</div>
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
              <h3 className="heading-3 mb-2">How accurate is this date calculator?</h3>
              <p className="paragraph">
                Our date calculator is extremely accurate, accounting for leap years and varying 
                month lengths. It provides precise results down to the exact day, making 
                it suitable for official and planning purposes.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can I calculate dates in the past?</h3>
              <p className="paragraph">
                Yes, you can calculate differences between any two dates, whether they're in 
                the past, present, or future. The calculator will show negative results 
                for past dates and positive results for future dates.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What date format should I use?</h3>
              <p className="paragraph">
                Use the standard date format (MM/DD/YYYY) by selecting dates from the 
                calendar picker. The calculator accepts any valid date format and automatically 
                handles different input methods for your convenience.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Does this account for time zones?</h3>
              <p className="paragraph">
                The calculator uses your local timezone for date calculations. For accurate 
                results across different time zones, ensure both dates are in the same 
                timezone context or use UTC-based calculations.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Is my data secure when using this calculator?</h3>
              <p className="paragraph">
                Yes, your privacy is completely protected. All calculations happen locally 
                in your browser, and we don't store any date information or results. 
                Your calculations remain private and secure.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
