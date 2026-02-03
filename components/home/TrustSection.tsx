export default function TrustSection() {
  const stats = [
    { value: '10M+', label: 'Monthly Users' },
    { value: '150+', label: 'Countries' },
    { value: '100+', label: 'Tools Available' }
  ]

  const features = [
    { icon: '⚡', title: 'Fast', description: 'Instant calculations with no loading delays' },
    { icon: '✅', title: 'Accurate', description: 'Verified formulas you can trust' },
    { icon: '🆓', title: 'Free Forever', description: 'No login required, always free' }
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Trust Banner */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-50 to-slate-100/50 p-8 md:p-16">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center">
            <div className="text-5xl md:text-6xl mb-6">🌍</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Trusted Worldwide
            </h2>
            <p className="text-lg text-slate-500 mb-12 max-w-xl mx-auto leading-relaxed">
              Calcuzy is used by people in 150+ countries.
              <br className="hidden md:block" />
              100% free. No sign-up. No data tracking.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto mb-16">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-5xl font-bold text-blue-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-slate-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-[20px] p-6 md:p-8 text-center shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
