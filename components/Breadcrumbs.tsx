'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  name: string
  href: string
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', href: '/' }
    ]

    // Define category mappings
    const categoryMap: { [key: string]: { name: string; href: string } } = {
      'tools': { name: 'Tools', href: '/tools' },
      'countdowns': { name: 'Countdowns', href: '/countdowns' },
      'names': { name: 'Names', href: '/names' },
      'quotes': { name: 'Quotes', href: '/quotes' },
      'about': { name: 'About', href: '/about' },
      'contact': { name: 'Contact', href: '/contact' },
      'privacy-policy': { name: 'Privacy Policy', href: '/privacy-policy' },
      'terms': { name: 'Terms', href: '/terms' },
      'pdf-tools': { name: 'PDF Tools', href: '/pdf-tools' }
    }

    // Define friendly names for common tools
    const friendlyNames: { [key: string]: string } = {
      'age-calculator': 'Age Calculator',
      'bmi-calculator': 'BMI Calculator',
      'capital-gains-calculator': 'Capital Gains Calculator',
      'crypto-tax-calculator': 'Crypto Tax Calculator',
      'index-fund-return-calculator': 'Index Fund Calculator',
      'ovulation-calculator': 'Ovulation Calculator',
      'paint-cost-calculator': 'Paint Cost Calculator',
      'property-tax-estimator': 'Property Tax Estimator',
      'rent-affordability-calculator': 'Rent Affordability Calculator',
      'unit-converter': 'Unit Converter',
      'date-difference': 'Date Difference Calculator',
      'days-until-christmas': 'Christmas Countdown',
      'days-until-halloween': 'Halloween Countdown',
      'days-until-new-year': 'New Year Countdown',
      'thanksgiving-countdown': 'Thanksgiving Countdown',
      'easter-countdown': 'Easter Countdown',
      'black-friday-countdown': 'Black Friday Countdown',
      'will-generator': 'Will Generator',
      'nda-generator': 'NDA Generator',
      'dog-names': 'Dog Names',
      'cat-names': 'Cat Names',
      'baby-boy-names': 'Baby Boy Names',
      'baby-girl-names': 'Baby Girl Names',
      'american-last-names': 'American Last Names',
      'motivational-quotes': 'Motivational Quotes',
      'love-quotes': 'Love Quotes',
      'christmas-quotes': 'Christmas Quotes',
      'graduation-quotes': 'Graduation Quotes',
      'aesthetic-quotes': 'Aesthetic Quotes',
      'password-tools': 'Password Tools',
      'random-number-generator': 'Random Number Generator',
      'pdf-merger': 'PDF Merger',
      'pdf-splitter': 'PDF Splitter',
      'pdf-compressor': 'PDF Compressor',
      'pdf-to-word': 'PDF to Word',
      'word-to-pdf': 'Word to PDF'
    }

    // Build breadcrumbs based on path
    let currentPath = ''
    
    for (let i = 0; i < pathSegments.length; i++) {
      const segment = pathSegments[i]
      currentPath += `/${segment}`
      
      // Check if this segment is a category
      if (categoryMap[segment]) {
        breadcrumbs.push(categoryMap[segment])
      } else if (i === pathSegments.length - 1) {
        // This is the final segment (tool/page name)
        // Use friendly name if available, otherwise convert kebab-case to Title Case
        const pageTitle = friendlyNames[segment] || segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
        
        breadcrumbs.push({
          name: pageTitle,
          href: currentPath
        })
      }
    }

    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()

  // Don't show breadcrumbs on homepage
  if (pathname === '/') {
    return null
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://calcuzy.app${item.href}`
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav className="container section-responsive py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-secondary-text">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index === breadcrumbs.length - 1 ? (
                <span className="text-primary-text font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link 
                    href={item.href}
                    className="hover:text-primary-text transition-colors duration-200 focus-ring"
                  >
                    {item.name}
                  </Link>
                  <svg 
                    className="w-4 h-4 mx-2 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
