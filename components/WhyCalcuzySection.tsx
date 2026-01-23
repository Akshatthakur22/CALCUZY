import Link from 'next/link'
import Card from '@/components/Card'

export default function WhyCalcuzySection() {
  return (
    <section className="container section-responsive py-16">
      <div className="text-center mb-12 fade-in">
        <h2 className="text-4xl font-bold text-primary-text mb-4">Why Choose Calcuzy?</h2>
        <p className="text-xl text-secondary-text max-w-2xl mx-auto">
          Built for speed, accuracy, and simplicity
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card animation="fade-in-up" delay={100} className="text-center">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="heading-3 mb-3">Fast</h3>
          <p className="paragraph text-sm">Instant calculations and real-time results. No loading, no waiting.</p>
        </Card>

        <Card animation="fade-in-up" delay={200} className="text-center">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="heading-3 mb-3">Accurate</h3>
          <p className="paragraph text-sm">Verified formulas and precise calculations you can trust.</p>
        </Card>

        <Card animation="fade-in-up" delay={300} className="text-center">
          <div className="text-4xl mb-4">🆓</div>
          <h3 className="heading-3 mb-3">Free Forever</h3>
          <p className="paragraph text-sm">Ad-supported, no login required. Always free, always accessible.</p>
        </Card>
      </div>
    </section>
  )
}
