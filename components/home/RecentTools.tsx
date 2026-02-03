'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface RecentTool {
  name: string
  url: string
  icon: string
  timestamp: number
}

const toolIcons: Record<string, string> = {
  '/age-calculator': '🎂',
  '/bmi-calculator': '⚖️',
  '/capital-gains-calculator': '📈',
  '/crypto-tax-calculator': '₿',
  '/ovulation-calculator': '📅',
  '/paint-cost-calculator': '🎨',
  '/will-generator': '📜',
  '/nda-generator': '📋',
  '/days-until-christmas': '🎄',
  '/days-until-new-year': '🎉',
  '/days-until-halloween': '🎃',
  '/thanksgiving-countdown': '🦃',
  '/easter-countdown': '🐰',
  '/black-friday-countdown': '🛍️',
  '/dog-names': '🐕',
  '/cat-names': '🐱',
  '/baby-boy-names': '👶',
  '/baby-girl-names': '👧',
  '/motivational-quotes': '💪',
  '/love-quotes': '❤️',
  '/password-tools': '🔐',
  '/random-number-generator': '🎲',
  '/unit-converter': '🔄',
  '/date-difference': '📆',
  '/property-tax-estimator': '🏠',
  '/rent-affordability-calculator': '💰',
  '/index-fund-return-calculator': '📊',
}

export function getToolIcon(url: string): string {
  return toolIcons[url] || '🔧'
}

export function saveRecentTool(name: string, url: string) {
  if (typeof window === 'undefined') return
  
  const stored = localStorage.getItem('calcuzy_recent_tools')
  const tools: RecentTool[] = stored ? JSON.parse(stored) : []
  
  // Remove if already exists
  const filtered = tools.filter(t => t.url !== url)
  
  // Add to beginning
  filtered.unshift({
    name,
    url,
    icon: getToolIcon(url),
    timestamp: Date.now()
  })
  
  // Keep only last 8
  const trimmed = filtered.slice(0, 8)
  localStorage.setItem('calcuzy_recent_tools', JSON.stringify(trimmed))
}

export default function RecentTools() {
  const [recentTools, setRecentTools] = useState<RecentTool[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('calcuzy_recent_tools')
    if (stored) {
      const tools: RecentTool[] = JSON.parse(stored)
      setRecentTools(tools.slice(0, 4))
    }
  }, [])

  if (!mounted || recentTools.length === 0) {
    return null
  }

  return (
    <section className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Recently Used
          </h2>
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {recentTools.map((tool, index) => (
            <Link
              key={tool.url}
              href={tool.url}
              className="flex-shrink-0 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-3 px-4 py-3 bg-white border border-slate-100 rounded-xl shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgb(0,0,0,0.08)] hover:border-blue-100 transition-all duration-300 min-w-[180px]">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </span>
                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors truncate">
                  {tool.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
