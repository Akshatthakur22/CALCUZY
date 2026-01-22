import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      
      <main className="container section-responsive">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center space-y-6">
            <div className="text-6xl">🔍</div>
            
            <div>
              <h1 className="heading-2 mb-4">Page Not Found</h1>
              <p className="paragraph text-secondary-text">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
              </p>
            </div>

            <div className="grid-responsive-2 gap-4">
              <Link href="/" className="btn-primary text-center">
                Go Home
              </Link>
              <Link href="/tools" className="btn-secondary text-center">
                Browse Tools
              </Link>
            </div>

            <div className="border-t pt-6">
              <p className="text-sm text-gray-500 mb-4">
                Looking for something specific? Try our popular tools:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Link href="/age-calculator" className="link-accent text-sm">
                  Age Calculator
                </Link>
                <Link href="/bmi-calculator" className="link-accent text-sm">
                  BMI Calculator
                </Link>
                <Link href="/days-until-christmas" className="link-accent text-sm">
                  Christmas Countdown
                </Link>
                <Link href="/unit-converter" className="link-accent text-sm">
                  Unit Converter
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
