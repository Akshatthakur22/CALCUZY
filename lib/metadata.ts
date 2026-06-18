import { Metadata } from 'next'
import { getOpenGraphImageType, OG_IMAGES } from './og-images'

const SITE_ORIGIN = 'https://calcuzy.app'

/**
 * Normalizes paths and full URLs to canonical form with trailing slashes
 * (matches next.config trailingSlash: true). Preserves URL hash fragments.
 */
export function normalizeCanonicalUrl(pathOrUrl: string): string {
  if (!pathOrUrl) return `${SITE_ORIGIN}/`

  let pathname: string
  let hash = ''

  if (pathOrUrl.startsWith('http')) {
    const parsed = new URL(pathOrUrl)
    pathname = parsed.pathname
    hash = parsed.hash
  } else {
    const hashIndex = pathOrUrl.indexOf('#')
    if (hashIndex >= 0) {
      hash = pathOrUrl.slice(hashIndex)
      pathOrUrl = pathOrUrl.slice(0, hashIndex)
    }
    pathname = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  }

  if (pathname !== '/' && !pathname.endsWith('/')) {
    pathname = `${pathname}/`
  }

  return `${SITE_ORIGIN}${pathname}${hash}`
}

interface MetadataConfig {
  title: string
  description: string
  keywords?: string
  url?: string
  image?: string
  noIndex?: boolean
}

export interface ToolSchemaConfig {
  name: string
  description: string
  url: string
  category: 'CalculatorApplication' | 'FinanceApplication' | 'HealthApplication' | 'UtilityApplication' | 'LifestyleApplication'
  features?: string[]
}

/**
 * Creates Next.js Metadata with OpenGraph, Twitter Cards, and canonical tags
 * Optimized for US market SEO and social sharing
 * High-CTR title format: '[Tool Name] | Fast, Free & Accurate - Calcuzy'
 */
export function createMetadata({
  title,
  description,
  keywords = "",
  url = "",
  image = OG_IMAGES.default,
  noIndex = false,
}: MetadataConfig): Metadata {
  // High-CTR title format for tool pages
  const fullTitle = title.includes('Calcuzy') 
    ? title 
    : title.includes('|') 
      ? title 
      : `${title} | Fast, Free & Accurate - Calcuzy`

  const canonicalUrl = url ? normalizeCanonicalUrl(url) : undefined
  
  return {
    title: fullTitle,
    description,
    keywords,

    metadataBase: new URL(SITE_ORIGIN),

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: false,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: "Calcuzy",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
          type: getOpenGraphImageType(image),
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@calcuzy",
      site: "@calcuzy",
    },

    icons: {
      icon: [{ url: '/logo.svg', type: 'image/svg+xml' }],
      apple: [{ url: '/logo.svg', type: 'image/svg+xml' }],
    },

    manifest: '/manifest.json',
    
    // Additional meta for US market
    other: {
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'format-detection': 'telephone=no',
    },
  }
}

/**
 * Generates SoftwareApplication JSON-LD schema for tool pages
 * This schema helps Google understand your tools and can enable rich snippets
 */
export function createToolSchema({
  name,
  description,
  url,
  category,
  features = [],
}: ToolSchemaConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": normalizeCanonicalUrl(url),
    "applicationCategory": category,
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires JavaScript",
    "softwareVersion": "1.0",
    "author": {
      "@type": "Organization",
      "name": "Calcuzy",
      "url": `${SITE_ORIGIN}/`
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    ...(features.length > 0 && {
      "featureList": features.join(", ")
    })
  }
}

/**
 * Generates WebPage JSON-LD for content pages
 */
export function createWebPageSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "url": normalizeCanonicalUrl(url),
    "isPartOf": {
      "@type": "WebSite",
      "name": "Calcuzy",
      "url": `${SITE_ORIGIN}/`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Calcuzy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://calcuzy.app/logo.svg"
      }
    }
  }
}

/**
 * Generates FAQ schema for pages with FAQ sections
 */
export function createFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

/**
 * Generates CalculateAction JSON-LD schema for calculator tools
 * This schema helps Google understand calculation actions and can enable rich snippets
 */
export function createCalculateActionSchema({
  name,
  description,
  url,
  inputType = "number",
  outputType = "number"
}: {
  name: string
  description: string
  url: string
  inputType?: string
  outputType?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CalculateAction",
    "name": name,
    "description": description,
    "url": normalizeCanonicalUrl(url),
    "object": {
      "@type": "Thing",
      "name": "Input Value",
      "additionalType": inputType
    },
    "result": {
      "@type": "Thing",
      "name": "Calculated Result",
      "additionalType": outputType
    },
    "agent": {
      "@type": "Organization",
      "name": "Calcuzy",
      "url": `${SITE_ORIGIN}/`
    }
  }
}

/**
 * Generates BreadcrumbList schema for navigation
 */
export function createBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? normalizeCanonicalUrl(item.url) : item.url
    }))
  }
}

export type HowToStepInput = { title: string; description: string }

/**
 * Generates HowTo JSON-LD for tool usage instructions
 */
export function createHowToSchema({
  name,
  description,
  url,
  steps,
}: {
  name: string
  description: string
  url: string
  steps: HowToStepInput[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "url": normalizeCanonicalUrl(url),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description,
    })),
    "tool": {
      "@type": "HowToTool",
      "name": "Calcuzy Web Tool",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Calcuzy",
      "url": `${SITE_ORIGIN}/`,
    },
  }
}

/**
 * Generates Article / BlogPosting JSON-LD for guide pages
 */
export function createArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image = `${SITE_ORIGIN}/og/og-default.png`,
}: {
  headline: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "url": normalizeCanonicalUrl(url),
    "datePublished": datePublished,
    "dateModified": dateModified ?? datePublished,
    "image": image.startsWith('http') ? image : `${SITE_ORIGIN}${image}`,
    "author": {
      "@type": "Organization",
      "name": "Calcuzy",
      "url": `${SITE_ORIGIN}/`,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Calcuzy",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_ORIGIN}/logo.svg`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": normalizeCanonicalUrl(url),
    },
  }
}

/**
 * WebSite schema with SearchAction for site-level discovery
 */
export function createWebSiteSchema({
  sameAs = [],
}: {
  sameAs?: string[]
} = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    "name": "Calcuzy",
    "description": "Free online tools platform with calculators, generators, and utilities",
    "url": `${SITE_ORIGIN}/`,
    "publisher": { "@id": `${SITE_ORIGIN}/#organization` },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_ORIGIN}/tools/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    ...(sameAs.length > 0 && { sameAs }),
  }
}

/**
 * Organization schema with stable @id for entity resolution
 */
export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_ORIGIN}/#organization`,
    "name": "Calcuzy",
    "alternateName": "Calcuzy.app",
    "url": `${SITE_ORIGIN}/`,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_ORIGIN}/logo.svg`,
    },
    "description": "Free online tools platform with calculators, generators, and utilities for finance, health, legal, and everyday tasks.",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Akshat Thakur",
      "jobTitle": "Founder & Developer",
      "url": `${SITE_ORIGIN}/about/`,
    },
    "knowsAbout": [
      "Online calculators",
      "Capital gains tax estimation",
      "Cryptocurrency tax",
      "Body Mass Index",
      "Estate planning documents",
      "Rent affordability",
      "Financial planning tools",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": `${SITE_ORIGIN}/contact/`,
    },
    "sameAs": [
      "https://twitter.com/calcuzy",
      "https://github.com/calcuzy",
    ],
  }
}

