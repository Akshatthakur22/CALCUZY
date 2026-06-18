import {
  createArticleSchema,
  createBreadcrumbSchema,
  createFAQSchema,
  createWebPageSchema,
  normalizeCanonicalUrl,
} from './metadata'

const SITE_ORIGIN = 'https://calcuzy.app'

export function buildBlogGuideSchemas({
  slug,
  headline,
  description,
  datePublished,
  dateModified,
  image,
  faqs,
}: {
  slug: string
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  image: string
  faqs: { question: string; answer: string }[]
}) {
  const url = `${SITE_ORIGIN}/blog/${slug}`

  return [
    createBreadcrumbSchema([
      { name: 'Home', url: SITE_ORIGIN },
      { name: 'Blog', url: `${SITE_ORIGIN}/blog` },
      { name: headline, url },
    ]),
    createArticleSchema({
      headline,
      description,
      url,
      datePublished,
      dateModified,
      image,
    }),
    createWebPageSchema({
      name: headline,
      description,
      url,
    }),
    createFAQSchema(faqs),
  ]
}

export function buildBlogIndexSchema() {
  return createWebPageSchema({
    name: 'Calcuzy Blog',
    description: 'Guides and tutorials for online calculators and productivity tools',
    url: `${SITE_ORIGIN}/blog`,
  })
}

export function buildGuidesItemListSchema(
  guides: { title: string; slug: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Calcuzy Guides',
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: guide.title,
      url: normalizeCanonicalUrl(`${SITE_ORIGIN}/blog/${guide.slug}`),
    })),
  }
}
