'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Card from './Card'

interface Tool {
  name: string
  url: string
  description: string
  category: string
  icon: string
  color: string
}

interface SmartSidebarProps {
  currentTool: string
  category: string
  className?: string
}

const toolDatabase: Tool[] = [
  // Finance Tools
  {
    name: 'Investment ROI Calculator',
    url: '/investment-roi-calculator',
    description: 'Calculate return on investment with compound interest analysis',
    category: 'finance',
    icon: '📈',
    color: 'emerald'
  },
  {
    name: 'Compound Interest Calculator',
    url: '/compound-interest-calculator',
    description: 'See how your money grows over time with compound interest',
    category: 'finance',
    icon: '💰',
    color: 'green'
  },
  {
    name: 'Retirement Calculator',
    url: '/retirement-calculator',
    description: 'Plan your retirement savings and income needs',
    category: 'finance',
    icon: '🏖️',
    color: 'blue'
  },
  {
    name: 'Loan Calculator',
    url: '/loan-calculator',
    description: 'Calculate monthly payments and total interest for loans',
    category: 'finance',
    icon: '💳',
    color: 'purple'
  },
  {
    name: 'Mortgage Calculator',
    url: '/mortgage-calculator',
    description: 'Calculate mortgage payments and amortization schedules',
    category: 'finance',
    icon: '🏠',
    color: 'indigo'
  },
  {
    name: 'Currency Converter',
    url: '/currency-converter',
    description: 'Convert between 150+ world currencies with real-time rates',
    category: 'finance',
    icon: '🌍',
    color: 'cyan'
  },
  
  // Health Tools
  {
    name: 'BMI Calculator',
    url: '/bmi-calculator',
    description: 'Calculate your Body Mass Index and health category',
    category: 'health',
    icon: '⚖️',
    color: 'red'
  },
  {
    name: 'Calorie Calculator',
    url: '/calorie-calculator',
    description: 'Calculate daily calorie needs based on your goals',
    category: 'health',
    icon: '🔥',
    color: 'orange'
  },
  {
    name: 'Age Calculator',
    url: '/age-calculator',
    description: 'Calculate exact age in years, months, days, and hours',
    category: 'health',
    icon: '🎂',
    color: 'pink'
  },
  
  // Date/Time Tools
  {
    name: 'Date Calculator',
    url: '/date-calculator',
    description: 'Add or subtract dates and calculate duration between dates',
    category: 'date-tools',
    icon: '📅',
    color: 'slate'
  },
  {
    name: 'Christmas Countdown',
    url: '/christmas-countdown',
    description: 'Count down to Christmas with days, hours, minutes, seconds',
    category: 'date-tools',
    icon: '🎄',
    color: 'red'
  },
  {
    name: 'New Year Countdown',
    url: '/new-year-countdown',
    description: 'Count down to New Year with precise timing',
    category: 'date-tools',
    icon: '🎊',
    color: 'amber'
  },
  
  // Utility Tools
  {
    name: 'Password Generator',
    url: '/password-generator',
    description: 'Generate secure passwords with customizable options',
    category: 'utility',
    icon: '🔐',
    color: 'gray'
  },
  {
    name: 'QR Code Generator',
    url: '/qr-code-generator',
    description: 'Create QR codes for URLs, text, and other data',
    category: 'utility',
    icon: '📱',
    color: 'blue'
  },
  {
    name: 'Random Number Generator',
    url: '/random-number-generator',
    description: 'Generate random numbers with customizable ranges',
    category: 'utility',
    icon: '🎲',
    color: 'purple'
  }
]

const categoryRelations: Record<string, string[]> = {
  finance: ['finance', 'utility'],
  health: ['health', 'utility'],
  'date-tools': ['date-tools', 'utility'],
  utility: ['utility', 'finance', 'health'],
  countdown: ['date-tools', 'countdown'],
  names: ['names', 'utility'],
  quotes: ['quotes', 'utility']
}

export default function SmartSidebar({ currentTool, category, className = '' }: SmartSidebarProps) {
  const [recommendedTools, setRecommendedTools] = useState<Tool[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Simulate loading for better UX
    const loadingTimer = setTimeout(() => {
      const recommendations = getRecommendedTools(currentTool, category)
      setRecommendedTools(recommendations)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(loadingTimer)
  }, [currentTool, category])

  const getRecommendedTools = (currentUrl: string, currentCategory: string): Tool[] => {
    // Get related categories based on current category
    const relatedCategories = categoryRelations[currentCategory] || [currentCategory]
    
    // Filter tools from related categories, excluding current tool
    const filteredTools = toolDatabase.filter(tool => {
      const isRelatedCategory = relatedCategories.includes(tool.category)
      const isNotCurrentTool = tool.url !== currentUrl
      return isRelatedCategory && isNotCurrentTool
    })

    // Score tools based on relevance
    const scoredTools = filteredTools.map(tool => {
      let score = 0
      
      // Higher score for same category
      if (tool.category === currentCategory) score += 10
      
      // Boost score for popular tools (based on typical usage patterns)
      const popularTools = [
        'investment-roi-calculator',
        'compound-interest-calculator',
        'bmi-calculator',
        'password-generator',
        'date-calculator'
      ]
      if (popularTools.includes(tool.url.replace('/', ''))) score += 5
      
      // Add some randomness to prevent same recommendations every time
      score += Math.random() * 3
      
      return { ...tool, score }
    })

    // Sort by score and take top 3
    return scoredTools
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(({ score, ...tool }) => tool)
  }

  const handleToolClick = (url: string) => {
    // Track click event for analytics (you can integrate with your analytics)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'smart_sidebar_click', {
        tool_name: url,
        current_tool: currentTool,
        category: category
      })
    }
    
    router.push(url)
  }

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; hover: string; text: string; border: string }> = {
      emerald: { bg: 'bg-emerald-50', hover: 'hover:bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200' },
      green: { bg: 'bg-green-50', hover: 'hover:bg-green-100', text: 'text-green-700', border: 'border-green-200' },
      blue: { bg: 'bg-blue-50', hover: 'hover:bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' },
      purple: { bg: 'bg-purple-50', hover: 'hover:bg-purple-100', text: 'text-purple-700', border: 'border-purple-200' },
      indigo: { bg: 'bg-indigo-50', hover: 'hover:bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-200' },
      cyan: { bg: 'bg-cyan-50', hover: 'hover:bg-cyan-100', text: 'text-cyan-700', border: 'border-cyan-200' },
      red: { bg: 'bg-red-50', hover: 'hover:bg-red-100', text: 'text-red-700', border: 'border-red-200' },
      orange: { bg: 'bg-orange-50', hover: 'hover:bg-orange-100', text: 'text-orange-700', border: 'border-orange-200' },
      pink: { bg: 'bg-pink-50', hover: 'hover:bg-pink-100', text: 'text-pink-700', border: 'border-pink-200' },
      slate: { bg: 'bg-slate-50', hover: 'hover:bg-slate-100', text: 'text-slate-700', border: 'border-slate-200' },
      amber: { bg: 'bg-amber-50', hover: 'hover:bg-amber-100', text: 'text-amber-700', border: 'border-amber-200' },
      gray: { bg: 'bg-gray-50', hover: 'hover:bg-gray-100', text: 'text-gray-700', border: 'border-gray-200' }
    }
    return colorMap[color] || colorMap.blue
  }

  if (isLoading) {
    return (
      <div className={`sticky top-4 w-full ${className}`}>
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Tools</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    )
  }

  if (recommendedTools.length === 0) {
    return null
  }

  return (
    <div className={`sticky top-4 w-full ${className}`}>
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Recommended Tools
          </h3>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            Smart Suggestions
          </span>
        </div>
        
        <div className="space-y-3">
          {recommendedTools.map((tool, index) => {
            const colors = getColorClasses(tool.color)
            
            return (
              <div
                key={tool.url}
                className={`group cursor-pointer p-3 rounded-lg border transition-all duration-200 ${colors.bg} ${colors.border} ${colors.hover}`}
                onClick={() => handleToolClick(tool.url)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-start space-x-3">
                  <div className="text-2xl flex-shrink-0">
                    {tool.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-medium ${colors.text} group-hover:font-semibold transition-colors duration-200`}>
                      {tool.name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {tool.description}
                    </p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <span className="capitalize">{tool.category.replace('-', ' ')}</span>
                      <span className="mx-2">•</span>
                      <span>Click to explore</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <svg 
                      className={`w-5 h-5 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <button
            onClick={() => router.push('/tools')}
            className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            View All Tools →
          </button>
        </div>

        <div className="mt-4 text-xs text-gray-500 text-center">
          AI-powered recommendations based on your interests
        </div>
      </Card>
    </div>
  )
}

// Add TypeScript declaration for gtag
declare global {
  interface Window {
    gtag?: (command: string, action: string, options: Record<string, any>) => void
  }
}
