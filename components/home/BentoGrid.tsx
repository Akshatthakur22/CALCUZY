'use client'

import Link from 'next/link'

interface CategoryItem {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  gradient: string
  iconBg: string
  size: 'large' | 'medium' | 'small'
  tools?: string[]
}

// Premium SVG Icons with soft blue tint
const icons = {
  calculator: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="8" y2="10.01" />
      <line x1="12" y1="10" x2="12" y2="10.01" />
      <line x1="16" y1="10" x2="16" y2="10.01" />
      <line x1="8" y1="14" x2="8" y2="14.01" />
      <line x1="12" y1="14" x2="12" y2="14.01" />
      <line x1="16" y1="14" x2="16" y2="14.01" />
      <line x1="8" y1="18" x2="16" y2="18" />
    </svg>
  ),
  finance: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  countdown: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  legal: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <rect x="8" y="8" width="8" height="5" rx="1" />
      <path d="M4 3h16" />
      <path d="M4 21h16" />
    </svg>
  ),
  home: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  names: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  security: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  quotes: (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
}

const categories: CategoryItem[] = [
  {
    title: 'Calculators',
    description: 'Age, BMI, loans, dates & more precision tools',
    icon: icons.calculator,
    href: '/age-calculator',
    gradient: 'from-blue-50 to-blue-100/50',
    iconBg: 'bg-blue-500',
    size: 'large',
    tools: ['Age Calculator', 'BMI Calculator', 'Date Difference']
  },
  {
    title: 'Finance Tools',
    description: 'Tax calculators, investments & budget planners',
    icon: icons.finance,
    href: '/capital-gains-calculator',
    gradient: 'from-emerald-50 to-emerald-100/50',
    iconBg: 'bg-emerald-500',
    size: 'large',
    tools: ['Capital Gains', 'Crypto Tax', 'Index Fund Returns']
  },
  {
    title: 'Countdowns',
    description: 'Track holidays & important events',
    icon: icons.countdown,
    href: '/countdowns',
    gradient: 'from-violet-50 to-violet-100/50',
    iconBg: 'bg-violet-500',
    size: 'medium',
    tools: ['Christmas', 'New Year', 'Halloween']
  },
  {
    title: 'Legal Tools',
    description: 'Document generators & templates',
    icon: icons.legal,
    href: '/will-generator',
    gradient: 'from-amber-50 to-amber-100/50',
    iconBg: 'bg-amber-500',
    size: 'medium',
    tools: ['Will Generator', 'NDA Generator']
  },
  {
    title: 'Home & Real Estate',
    description: 'Mortgage, paint cost & planning',
    icon: icons.home,
    href: '/paint-cost-calculator',
    gradient: 'from-rose-50 to-rose-100/50',
    iconBg: 'bg-rose-500',
    size: 'small'
  },
  {
    title: 'Name Generators',
    description: 'Baby, pet & business names',
    icon: icons.names,
    href: '/names',
    gradient: 'from-cyan-50 to-cyan-100/50',
    iconBg: 'bg-cyan-500',
    size: 'small'
  },
  {
    title: 'Security Tools',
    description: 'Password generators & checkers',
    icon: icons.security,
    href: '/password-tools',
    gradient: 'from-red-50 to-red-100/50',
    iconBg: 'bg-red-500',
    size: 'small'
  },
  {
    title: 'Quotes & Content',
    description: 'Inspiration & writing tools',
    icon: icons.quotes,
    href: '/quotes',
    gradient: 'from-indigo-50 to-indigo-100/50',
    iconBg: 'bg-indigo-500',
    size: 'small'
  }
]

function BentoCard({ item, index }: { item: CategoryItem; index: number }) {
  const sizeClasses = {
    large: 'col-span-1 md:col-span-2 md:row-span-2',
    medium: 'col-span-1 md:col-span-1 md:row-span-2',
    small: 'col-span-1 md:col-span-1 md:row-span-1'
  }

  return (
    <Link
      href={item.href}
      className={`group relative overflow-hidden rounded-[24px] bg-gradient-to-br ${item.gradient} p-6 md:p-8 transition-all duration-300 ease-out hover:scale-[1.02] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] ${sizeClasses[item.size]} min-h-[160px] md:min-h-[180px] flex flex-col`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div className={`w-12 h-12 md:w-14 md:h-14 ${item.iconBg} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
          {item.icon}
        </div>
        
        <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 leading-tight">
          {item.title}
        </h3>
        
        <p className="text-sm md:text-base text-slate-500 mb-4 flex-grow leading-relaxed">
          {item.description}
        </p>
        
        {/* Tool tags for larger cards */}
        {item.tools && item.size !== 'small' && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {item.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs px-3 py-1.5 rounded-full bg-white/80 text-slate-600 font-medium shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
        
        {/* Arrow indicator */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8">
          <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
            <svg
              className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function BentoGrid() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Explore Every Tool You Need
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            From everyday calculations to specialized utilities, find everything in one place
          </p>
        </div>
        
        {/* Bento Grid - 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
          {categories.map((item, index) => (
            <BentoCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
