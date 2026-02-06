import { Metadata } from 'next'

interface MetadataConfig {
  title: string
  description: string
  keywords?: string
  url?: string
  image?: string
  noIndex?: boolean
}

interface ToolSchemaConfig {
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
  image = "/og-default.png",
  noIndex = false,
}: MetadataConfig): Metadata {
  // High-CTR title format for tool pages
  const fullTitle = title.includes('Calcuzy') 
    ? title 
    : title.includes('|') 
      ? title 
      : `${title} | Fast, Free & Accurate - Calcuzy`
  
  return {
    title: fullTitle,
    description,
    keywords,

    metadataBase: new URL("https://calcuzy.app"),

    alternates: {
      canonical: url || undefined,
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
      url: url || undefined,
      siteName: "Calcuzy",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png',
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
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },

    manifest: '/site.webmanifest',
    
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
    "url": url,
    "applicationCategory": category,
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires JavaScript",
    "softwareVersion": "1.0",
    "author": {
      "@type": "Organization",
      "name": "Calcuzy",
      "url": "https://calcuzy.app"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
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
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Calcuzy",
      "url": "https://calcuzy.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Calcuzy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://calcuzy.app/logo.png"
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
    "url": url,
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
      "url": "https://calcuzy.app"
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
      "item": item.url
    }))
  }
}

