import Link from 'next/link'

interface RelatedTool {
  name: string
  href: string
  description: string
  icon: string
  category?: string
  gradient?: string
}

interface RelatedToolsBentoProps {
  currentTool: string
  tools: RelatedTool[]
  title?: string
  className?: string
}

const defaultGradients = {
  finance: 'from-emerald-50 to-emerald-100/50',
  health: 'from-blue-50 to-blue-100/50',
  generator: 'from-purple-50 to-purple-100/50',
  countdown: 'from-violet-50 to-violet-100/50',
  legal: 'from-amber-50 to-amber-100/50',
  home: 'from-rose-50 to-rose-100/50',
  security: 'from-red-50 to-red-100/50',
  default: 'from-slate-50 to-slate-100/50'
}

function RelatedToolCard({ tool, index }: { tool: RelatedTool; index: number }) {
  const gradient = tool.gradient || defaultGradients[tool.category as keyof typeof defaultGradients] || defaultGradients.default
  
  return (
    <Link
      href={tool.href}
      className={`group relative overflow-hidden rounded-[20px] bg-gradient-to-br ${gradient} p-5 transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100/50`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-white/80 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
          <span className="text-2xl">{tool.icon}</span>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="font-semibold text-slate-900 truncate text-base">
              {tool.name}
            </h3>
            {tool.category && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/70 text-slate-600 font-medium whitespace-nowrap">
                {tool.category}
              </span>
            )}
          </div>
          
          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {tool.description}
          </p>
        </div>
      </div>
      
      {/* Hover arrow */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default function RelatedToolsBento({ 
  currentTool, 
  tools, 
  title = "Related Tools You'll Love",
  className = "" 
}: RelatedToolsBentoProps) {
  // Filter out current tool and limit to 8 tools for bento grid
  const filteredTools = tools
    .filter(tool => tool.href !== currentTool)
    .slice(0, 8)

  if (filteredTools.length === 0) return null

  return (
    <section className={`w-full py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
            {title}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Discover more tools to enhance your productivity and solve everyday problems
          </p>
        </div>
        
        {/* Bento Grid - Responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredTools.map((tool, index) => (
            <RelatedToolCard key={tool.href} tool={tool} index={index} />
          ))}
        </div>
        
        {/* View all tools CTA */}
        <div className="text-center mt-10">
          <Link 
            href="/tools" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Explore All Tools
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Predefined tool collections for different categories
export const financeRelatedTools: RelatedTool[] = [
  { name: 'Crypto Tax Calculator', href: '/crypto-tax-calculator', description: 'Calculate cryptocurrency taxes', icon: '₿', category: 'finance' },
  { name: 'Index Fund Returns', href: '/index-fund-return-calculator', description: 'Estimate investment returns', icon: '📊', category: 'finance' },
  { name: 'Loan Calculator', href: '/loan-calculator', description: 'Calculate loan payments', icon: '💰', category: 'finance' },
  { name: 'Retirement Calculator', href: '/retirement-calculator', description: 'Plan your retirement savings', icon: '🏖️', category: 'finance' },
  { name: 'Budget Planner', href: '/budget-planner', description: 'Create monthly budgets', icon: '📝', category: 'finance' },
  { name: 'Savings Calculator', href: '/savings-calculator', description: 'Track savings growth', icon: '🪙', category: 'finance' }
]

export const generatorRelatedTools: RelatedTool[] = [
  { name: 'Baby Girl Names', href: '/baby-girl-names', description: 'Find baby girl names', icon: '👧', category: 'generator' },
  { name: 'Dog Names', href: '/dog-names', description: 'Browse dog name ideas', icon: '🐕', category: 'generator' },
  { name: 'Cat Names', href: '/cat-names', description: 'Find perfect cat name', icon: '🐱', category: 'generator' },
  { name: 'Business Name Generator', href: '/business-name-generator', description: 'Generate business names', icon: '🏢', category: 'generator' },
  { name: 'Username Generator', href: '/username-generator', description: 'Create unique usernames', icon: '@', category: 'generator' },
  { name: 'Password Generator', href: '/password-generator', description: 'Generate secure passwords', icon: '🔐', category: 'security' }
]

export const countdownRelatedTools: RelatedTool[] = [
  { name: 'Christmas Countdown', href: '/christmas-countdown', description: 'Count down to Christmas', icon: '🎄', category: 'countdown' },
  { name: 'New Year Countdown', href: '/new-year-countdown', description: 'New Year countdown timer', icon: '🎊', category: 'countdown' },
  { name: 'Date Calculator', href: '/date-calculator', description: 'Calculate date differences', icon: '📅', category: 'calculator' },
  { name: 'Age Calculator', href: '/age-calculator', description: 'Calculate exact age', icon: '🎂', category: 'calculator' },
  { name: 'Event Planner', href: '/event-planner', description: 'Plan your events', icon: '📋', category: 'tool' },
  { name: 'Holiday Calendar', href: '/holiday-calendar', description: 'View all holidays', icon: '🗓️', category: 'tool' }
]
