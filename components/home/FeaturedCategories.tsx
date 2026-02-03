import Link from 'next/link'

interface FeaturedCategory {
  title: string
  description: string
  icon: string
  href: string
  tags: string[]
  gradient: string
}

const featuredCategories: FeaturedCategory[] = [
  {
    title: 'Finance Tools',
    description: 'Complete financial planning toolkit with tax calculators, investment tools, loan calculators, and budget planners.',
    icon: '💰',
    href: '/capital-gains-calculator',
    tags: ['Tax Calculators', 'Investment Tools', 'Budget Planners'],
    gradient: 'from-emerald-500/10 to-emerald-600/5'
  },
  {
    title: 'Legal Tools',
    description: 'Professional legal document generators including wills, lease agreements, and power of attorney forms.',
    icon: '⚖️',
    href: '/will-generator',
    tags: ['Will Generator', 'NDA Generator', 'Legal Templates'],
    gradient: 'from-amber-500/10 to-amber-600/5'
  },
  {
    title: 'Home & Real Estate',
    description: 'Everything for homeowners and renters. Mortgage calculators, paint cost estimators, and planning tools.',
    icon: '🏠',
    href: '/paint-cost-calculator',
    tags: ['Mortgage Tools', 'Paint Calculator', 'Home Planning'],
    gradient: 'from-rose-500/10 to-rose-600/5'
  },
  {
    title: 'AI Tools',
    description: 'Coming soon: Advanced AI-powered tools including content generators and intelligent automation.',
    icon: '🤖',
    href: '/tools',
    tags: ['Coming Soon', 'AI Powered', 'Smart Tools'],
    gradient: 'from-violet-500/10 to-violet-600/5'
  }
]

export default function FeaturedCategories() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
            Featured Categories
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Deep dives into our most comprehensive tool collections
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {featuredCategories.map((category, index) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative bg-white rounded-[24px] p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl md:text-4xl">{category.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                          tag === 'Coming Soon'
                            ? 'bg-slate-100 text-slate-500'
                            : 'bg-blue-50 text-blue-600'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
