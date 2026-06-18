import { MetadataRoute } from 'next'

const BASE_URL = 'https://calcuzy.app'

type PageEntry = {
  path: string
  priority: number
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

function sitemapUrl(path: string): string {
  if (path === '/') {
    return `${BASE_URL}/`
  }
  return `${BASE_URL}${path}/`
}

const toolPages: PageEntry[] = [
  { path: '/age-calculator', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/bmi-calculator', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/capital-gains-calculator', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/crypto-tax-calculator', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/index-fund-return-calculator', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ovulation-calculator', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/paint-cost-calculator', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/property-tax-estimator', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rent-affordability-calculator', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/unit-converter', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/date-difference', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/random-number-generator', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/password-tools', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/will-generator', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/nda-generator', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/days-until-christmas', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/days-until-new-year', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/days-until-halloween', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/thanksgiving-countdown', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/easter-countdown', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/black-friday-countdown', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/dog-names', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/cat-names', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/baby-boy-names', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/baby-girl-names', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/american-last-names', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/motivational-quotes', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/love-quotes', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/aesthetic-quotes', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/christmas-quotes', priority: 0.5, changeFrequency: 'weekly' },
  { path: '/graduation-quotes', priority: 0.5, changeFrequency: 'monthly' },
]

const categoryPages: PageEntry[] = [
  { path: '/tools', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/countdowns', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/names', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/quotes', priority: 0.7, changeFrequency: 'weekly' },
]

const staticPages: PageEntry[] = [
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
]

const blogPages: PageEntry[] = [
  { path: '/blog', priority: 0.5, changeFrequency: 'weekly' },
  { path: '/blog/bmi-calculator-guide', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog/capital-gains-tax-guide', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/crypto-tax-guide', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/will-writing-guide', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog/rent-affordability-guide', priority: 0.7, changeFrequency: 'monthly' },
]

function toSitemapEntries(pages: PageEntry[], lastModified: string): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: sitemapUrl(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString()

  return [
    {
      url: sitemapUrl('/'),
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...toSitemapEntries(categoryPages, lastModified),
    ...toSitemapEntries(toolPages, lastModified),
    ...toSitemapEntries(blogPages, lastModified),
    ...toSitemapEntries(staticPages, lastModified),
  ]
}
