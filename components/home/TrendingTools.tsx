'use client'

import Link from 'next/link'
import { saveRecentTool } from './RecentTools'

interface TrendingTool {
  name: string
  description: string
  href: string
  icon: string
  category: string
}

const trendingTools: TrendingTool[] = [
  {
    name: 'Age Calculator',
    description: 'Calculate exact age in years, months, and days',
    href: '/age-calculator',
    icon: '🎂',
    category: 'Calculator'
  },
  {
    name: 'BMI Calculator',
    description: 'Check your body mass index instantly',
    href: '/bmi-calculator',
    icon: '⚖️',
    category: 'Health'
  },
  {
    name: 'Capital Gains Calculator',
    description: 'Calculate tax on investment profits',
    href: '/capital-gains-calculator',
    icon: '📈',
    category: 'Finance'
  },
  {
    name: 'Crypto Tax Calculator',
    description: 'Simplify cryptocurrency tax calculations',
    href: '/crypto-tax-calculator',
    icon: '₿',
    category: 'Finance'
  },
  {
    name: 'Will Generator',
    description: 'Create a legally sound will online',
    href: '/will-generator',
    icon: '📜',
    category: 'Legal'
  },
  {
    name: 'Password Tools',
    description: 'Generate and test password strength',
    href: '/password-tools',
    icon: '🔐',
    category: 'Security'
  },
  {
    name: 'Ovulation Calculator',
    description: 'Track fertility and calculate fertile days',
    href: '/ovulation-calculator',
    icon: '📅',
    category: 'Health'
  },
  {
    name: 'Paint Cost Calculator',
    description: 'Estimate paint needed for your project',
    href: '/paint-cost-calculator',
    icon: '🎨',
    category: 'Home'
  }
]

function TrendingCard({ tool, index }: { tool: TrendingTool; index: number }) {
  const handleClick = () => {
    saveRecentTool(tool.name, tool.href)
  }

  return (
    <Link
      href={tool.href}
      onClick={handleClick}
      className="group relative bg-white rounded-[20px] p-5 md:p-6 transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <span className="text-2xl">{tool.icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-semibold text-slate-900 truncate">
              {tool.name}
            </h3>
            <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 font-medium whitespace-nowrap">
              {tool.category}
            </span>
          </div>
          <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
            {tool.description}
          </p>
        </div>
      </div>
      
      {/* Hover arrow */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default function TrendingTools() {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
              🔥 Trending Tools
            </h2>
            <p className="text-slate-500">
              The most popular tools people are using right now
            </p>
          </div>
          <Link 
            href="/tools" 
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            View all
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingTools.map((tool, index) => (
            <TrendingCard key={tool.href} tool={tool} index={index} />
          ))}
        </div>
        
        <div className="mt-6 text-center md:hidden">
          <Link 
            href="/tools" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            View all tools
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
