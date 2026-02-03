import { MetadataRoute } from 'next'

// All tool pages with their priority and update frequency
const toolPages = [
  // Calculators (High Priority)
  { path: '/age-calculator', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/bmi-calculator', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/capital-gains-calculator', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/crypto-tax-calculator', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/index-fund-return-calculator', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/ovulation-calculator', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/paint-cost-calculator', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/property-tax-estimator', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/rent-affordability-calculator', priority: 0.8, changeFrequency: 'monthly' as const },
  
  // Converters & Utilities
  { path: '/unit-converter', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/date-difference', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/random-number-generator', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/password-tools', priority: 0.8, changeFrequency: 'monthly' as const },
  
  // Legal Generators (High Value)
  { path: '/will-generator', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/nda-generator', priority: 0.9, changeFrequency: 'monthly' as const },
  
  // Countdown Timers (Seasonal - High Priority during peak)
  { path: '/days-until-christmas', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/days-until-new-year', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/days-until-halloween', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/thanksgiving-countdown', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/easter-countdown', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/black-friday-countdown', priority: 0.7, changeFrequency: 'weekly' as const },
  
  // Name Generators
  { path: '/dog-names', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/cat-names', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/baby-boy-names', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/baby-girl-names', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/american-last-names', priority: 0.6, changeFrequency: 'monthly' as const },
  
  // Quote Pages
  { path: '/motivational-quotes', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/love-quotes', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/aesthetic-quotes', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/christmas-quotes', priority: 0.5, changeFrequency: 'weekly' as const },
  { path: '/graduation-quotes', priority: 0.5, changeFrequency: 'monthly' as const },
]

// Category hub pages
const categoryPages = [
  { path: '/tools', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/countdowns', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/names', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/quotes', priority: 0.7, changeFrequency: 'weekly' as const },
]

// Static pages
const staticPages = [
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.5, changeFrequency: 'monthly' as const },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://calcuzy.app'
  const currentDate = new Date().toISOString()

  // Homepage
  const homepage = {
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }

  // Generate all page entries
  const allPages = [
    homepage,
    ...categoryPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...toolPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  ]

  return allPages
}
