import Link from 'next/link'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'

export default function CategoriesSection() {
  return (
    <>
      <section className="container section-responsive py-16">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold text-primary-text mb-4">Explore Every Tool You Need</h2>
          <p className="text-xl text-secondary-text max-w-2xl mx-auto">
            From everyday calculations to specialized utilities, find everything in one place
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card animation="fade-in-up" delay={100}>
            <div className="text-center">
              <div className="text-4xl mb-4">🧮</div>
              <h3 className="heading-3 mb-3">Calculators</h3>
              <p className="paragraph text-sm mb-4">Age, BMI, loan, mortgage, and more specialized calculators</p>
              <Link href="/age-calculator" className="link-accent font-medium">Explore Calculators →</Link>
            </div>
          </Card>

          <Card animation="fade-in-up" delay={200}>
            <div className="text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="heading-3 mb-3">Countdowns</h3>
              <p className="paragraph text-sm mb-4">Track holidays, events, and important dates with precision</p>
              <Link href="/days-until-christmas" className="link-accent font-medium">View Countdowns →</Link>
            </div>
          </Card>

          <Card animation="fade-in-up" delay={300}>
            <div className="text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="heading-3 mb-3">Legal Generators</h3>
              <p className="paragraph text-sm mb-4">Will generator, lease agreements, and legal document templates</p>
              <Link href="/will-generator" className="link-accent font-medium">Legal Tools →</Link>
            </div>
          </Card>

          <Card animation="fade-in-up" delay={400}>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="heading-3 mb-3">Finance Tools</h3>
              <p className="paragraph text-sm mb-4">Tax calculators, investment tools, and budget planners</p>
              <Link href="/capital-gains-calculator" className="link-accent font-medium">Finance Tools →</Link>
            </div>
          </Card>

          <Card animation="fade-in-up" delay={500}>
            <div className="text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="heading-3 mb-3">Home & Real Estate</h3>
              <p className="paragraph text-sm mb-4">Mortgage calculators, paint cost, and home improvement tools</p>
              <Link href="/paint-cost-calculator" className="link-accent font-medium">Home Tools →</Link>
            </div>
          </Card>

          <Card animation="fade-in-up" delay={600}>
            <div className="text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="heading-3 mb-3">Name Generators</h3>
              <p className="paragraph text-sm mb-4">Baby names, pet names, business names, and more</p>
              <Link href="/dog-names" className="link-accent font-medium">Name Tools →</Link>
            </div>
          </Card>

          <Card animation="fade-in-up" delay={700}>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="heading-3 mb-3">Security Tools</h3>
              <p className="paragraph text-sm mb-4">Password generators, strength checkers, and encryption tools</p>
              <Link href="/password-strength-checker" className="link-accent font-medium">Security Tools →</Link>
            </div>
          </Card>

          <Card animation="fade-in-up" delay={800}>
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="heading-3 mb-3">Quotes & Content</h3>
              <p className="paragraph text-sm mb-4">Inspirational quotes, content generators, and writing tools</p>
              <Link href="/motivational-quotes" className="link-accent font-medium">Content Tools →</Link>
            </div>
          </Card>
        </div>
      </section>

      <AdUnit slot={2} />
    </>
  )
}
