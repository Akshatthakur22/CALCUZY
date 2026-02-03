'use client'

import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import RelatedTools from '@/components/RelatedTools'
import ToolInfo from '@/components/ToolInfo'

interface Step {
  title: string
  description: string
}

interface FAQ {
  question: string
  answer: string
}

interface ToolPageWrapperProps {
  children: ReactNode
  
  // Page metadata (for SEO sections)
  toolName: string
  toolPath: string
  toolDescription: string
  category?: 'calculators' | 'date-tools' | 'generators' | 'finance' | 'health' | 'utility' | 'names'
  
  // Content sections
  steps?: Step[]
  faqs?: FAQ[]
  tips?: string[]
  
  // Customization
  showAds?: boolean
  showRelatedTools?: boolean
  showToolInfo?: boolean
  className?: string
}

/**
 * ToolPageWrapper - Universal wrapper for all tool pages
 * Provides consistent layout, SEO content, and high-retention features
 * 
 * Features included:
 * - Navbar + Footer
 * - Ad slots (configurable)
 * - Related Tools section
 * - ToolInfo (How-to, FAQ, Tips)
 * - Fade-in animations
 * - Mobile-responsive layout
 */
export default function ToolPageWrapper({
  children,
  toolName,
  toolPath,
  toolDescription,
  category = 'calculators',
  steps,
  faqs,
  tips,
  showAds = true,
  showRelatedTools = true,
  showToolInfo = true,
  className = '',
}: ToolPageWrapperProps) {
  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <Navbar />
      
      <main className={`container section-responsive ${className}`}>
        {/* Hero Section */}
        <div className="text-center mb-12 slide-up">
          <h1 className="heading-1 text-center mb-6">
            {toolName}
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            {toolDescription}
          </p>
        </div>

        {/* Ad Slot 1 */}
        {showAds && <AdUnit slot={1} />}

        {/* Main Tool Content */}
        <div className="fade-in-up">
          {children}
        </div>

        {/* Ad Slot 2 */}
        {showAds && <AdUnit slot={2} />}

        {/* Tool Info Section (How to Use, Tips, FAQ) */}
        {showToolInfo && (steps || faqs || tips) && (
          <div className="mt-16 fade-in-up">
            <ToolInfo
              title={toolName}
              description={toolDescription}
              steps={steps}
              faqs={faqs}
              tips={tips}
            />
          </div>
        )}

        {/* Related Tools Section */}
        {showRelatedTools && (
          <div className="max-w-4xl mx-auto fade-in-up">
            <RelatedTools currentTool={toolPath} category={category} />
          </div>
        )}

        {/* Ad Slot 3 */}
        {showAds && <AdUnit slot={3} />}
      </main>

      <Footer />
    </div>
  )
}

/**
 * ToolHeroSection - Standalone hero for custom layouts
 */
interface ToolHeroProps {
  title: string
  description: string
  badge?: string
}

export function ToolHeroSection({ title, description, badge }: ToolHeroProps) {
  return (
    <div className="text-center mb-12 slide-up">
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
          bg-blue-50 text-blue-600 mb-4">
          {badge}
        </span>
      )}
      <h1 className="heading-1 text-center mb-6">{title}</h1>
      <p className="paragraph text-center max-w-3xl mx-auto mb-8">{description}</p>
    </div>
  )
}

/**
 * ToolSection - Wrapper for content sections
 */
interface ToolSectionProps {
  children: ReactNode
  title?: string
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export function ToolSection({ 
  children, 
  title, 
  className = '',
  maxWidth = 'lg' 
}: ToolSectionProps) {
  const maxWidthClasses = {
    sm: 'max-w-xl',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-5xl',
    full: 'max-w-full',
  }

  return (
    <section className={`${maxWidthClasses[maxWidth]} mx-auto ${className}`}>
      {title && (
        <h2 className="text-2xl lg:text-3xl font-semibold text-slate-900 mb-6">{title}</h2>
      )}
      {children}
    </section>
  )
}
