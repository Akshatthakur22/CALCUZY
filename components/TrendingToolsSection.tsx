import Link from 'next/link'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'

export default function TrendingToolsSection() {
  return (
    <>
      <section className="container section-responsive py-16">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold text-primary-text mb-4">Trending Tools Today</h2>
          <p className="text-xl text-secondary-text max-w-2xl mx-auto">
            The most popular tools people are using right now
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card animation="fade-in-up" delay={100}>
            <h3 className="heading-3 mb-3">Age Calculator</h3>
            <p className="paragraph text-sm mb-4">Calculate exact age in years, months, and days</p>
            <Link href="/age-calculator" className="link-accent font-medium text-sm">Calculate Age →</Link>
          </Card>

          <Card animation="fade-in-up" delay={200}>
            <h3 className="heading-3 mb-3">BMI Calculator</h3>
            <p className="paragraph text-sm mb-4">Check your body mass index instantly</p>
            <Link href="/bmi-calculator" className="link-accent font-medium text-sm">Calculate BMI →</Link>
          </Card>

          <Card animation="fade-in-up" delay={300}>
            <h3 className="heading-3 mb-3">Capital Gains Calculator</h3>
            <p className="paragraph text-sm mb-4">Calculate tax on investment profits</p>
            <Link href="/capital-gains-calculator" className="link-accent font-medium text-sm">Calculate Gains →</Link>
          </Card>

          <Card animation="fade-in-up" delay={400}>
            <h3 className="heading-3 mb-3">Crypto Tax Calculator</h3>
            <p className="paragraph text-sm mb-4">Simplify cryptocurrency tax calculations</p>
            <Link href="/crypto-tax-calculator" className="link-accent font-medium text-sm">Calculate Tax →</Link>
          </Card>

          <Card animation="fade-in-up" delay={500}>
            <h3 className="heading-3 mb-3">Ovulation Calculator</h3>
            <p className="paragraph text-sm mb-4">Track fertility and calculate fertile days</p>
            <Link href="/ovulation-calculator" className="link-accent font-medium text-sm">Track Ovulation →</Link>
          </Card>

          <Card animation="fade-in-up" delay={600}>
            <h3 className="heading-3 mb-3">Paint Cost Calculator</h3>
            <p className="paragraph text-sm mb-4">Estimate paint needed for your project</p>
            <Link href="/paint-cost-calculator" className="link-accent font-medium text-sm">Calculate Paint →</Link>
          </Card>

          <Card animation="fade-in-up" delay={700}>
            <h3 className="heading-3 mb-3">Will Generator</h3>
            <p className="paragraph text-sm mb-4">Create a legally sound will online</p>
            <Link href="/will-generator" className="link-accent font-medium text-sm">Generate Will →</Link>
          </Card>

          <Card animation="fade-in-up" delay={800}>
            <h3 className="heading-3 mb-3">Password Strength Tool</h3>
            <p className="paragraph text-sm mb-4">Test and improve your password security</p>
            <Link href="/password-strength-checker" className="link-accent font-medium text-sm">Check Strength →</Link>
          </Card>
        </div>
      </section>

      <AdUnit slot={3} />
    </>
  )
}
