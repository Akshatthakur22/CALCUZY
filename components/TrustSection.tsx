import Card from '@/components/Card'

export default function TrustSection() {
  return (
    <section className="container section-responsive py-16">
      <div className="text-center fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="text-6xl mb-6">🌍</div>
          <h2 className="text-3xl font-bold text-primary-text mb-4">Trusted Worldwide</h2>
          <p className="text-xl text-secondary-text mb-8">
            Calcuzy is used by people in 150+ countries.
            <br />
            100% free. No sign-up. No data tracking.
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">10M+</div>
              <div className="text-sm text-secondary-text">Monthly Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">150+</div>
              <div className="text-sm text-secondary-text">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <div className="text-sm text-secondary-text">Tools Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
