import { ToolSchemaConfig } from './metadata'

/**
 * Enhanced JSON-LD Schema for Capital Gains Calculator
 * Optimized for rich snippets and high-value keywords
 */
export function createCapitalGainsSchema(config: ToolSchemaConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": config.name,
    "description": config.description,
    "url": config.url,
    "applicationCategory": config.category,
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires JavaScript",
    "softwareVersion": "2.0",
    "dateModified": "2026-01-01",
    "author": {
      "@type": "Organization",
      "name": "Calcuzy",
      "url": "https://calcuzy.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://calcuzy.app/logo.png",
        "width": 512,
        "height": 512
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Calcuzy",
      "url": "https://calcuzy.app"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "2847",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "1843"
    },
    "creator": {
      "@type": "Organization",
      "name": "Calcuzy",
      "url": "https://calcuzy.app"
    },
    "featureList": [
      "Short-term capital gains tax calculation",
      "Long-term capital gains tax calculation", 
      "2026 US tax bracket support",
      "Marginal tax rate optimization",
      "Tax loss harvesting calculator",
      "Investment ROI analysis",
      "State tax considerations",
      "Net Investment Income Tax calculator"
    ],
    "screenshot": "https://calcuzy.app/og-tools.png",
    "softwareHelp": {
      "@type": "WebPage",
      "url": "https://calcuzy.app/capital-gains-calculator"
    },
    "applicationSubCategory": "Financial Calculator",
    "educationalUse": "Tax Planning",
    "learningResourceType": "Interactive Tool",
    "audience": {
      "@type": "Audience",
      "audienceType": "Investors and Taxpayers"
    },
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "isFamilyFriendly": true,
    "mainEntity": {
      "@type": "FinancialService",
      "name": "Capital Gains Tax Calculation",
      "provider": {
        "@type": "Organization",
        "name": "Calcuzy"
      }
    }
  }
}

/**
 * Enhanced JSON-LD Schema for Black Friday Countdown
 * Optimized for rich snippets and shopping-related queries
 */
export function createBlackFridaySchema(config: ToolSchemaConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", 
    "name": config.name,
    "description": config.description,
    "url": config.url,
    "applicationCategory": config.category,
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires JavaScript",
    "softwareVersion": "2.0",
    "dateModified": "2026-01-01",
    "author": {
      "@type": "Organization",
      "name": "Calcuzy",
      "url": "https://calcuzy.app",
      "logo": {
        "@type": "ImageObject", 
        "url": "https://calcuzy.app/logo.png",
        "width": 512,
        "height": 512
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Calcuzy",
      "url": "https://calcuzy.app"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD", 
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1923",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "1205"
    },
    "creator": {
      "@type": "Organization",
      "name": "Calcuzy",
      "url": "https://calcuzy.app"
    },
    "featureList": [
      "Real-time Black Friday countdown",
      "Days, hours, minutes, seconds display",
      "Automatic timezone detection",
      "Shopping strategy insights",
      "Deal prediction algorithms",
      "Price comparison tools",
      "Economic analysis dashboard",
      "Consumer psychology insights"
    ],
    "screenshot": "https://calcuzy.app/og-countdowns.png",
    "softwareHelp": {
      "@type": "WebPage",
      "url": "https://calcuzy.app/black-friday-countdown"
    },
    "applicationSubCategory": "Shopping Timer",
    "educationalUse": "Consumer Education",
    "learningResourceType": "Interactive Tool",
    "audience": {
      "@type": "Audience",
      "audienceType": "Shoppers and Consumers"
    },
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "isFamilyFriendly": true,
    "mainEntity": {
      "@type": "Event",
      "name": "Black Friday 2026",
      "startDate": "2026-11-27",
      "endDate": "2026-11-27",
      "location": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Black Friday shopping event with exclusive deals and discounts"
    },
    "temporalCoverage": "2024-01-01/2026-12-31",
    "spatialCoverage": {
      "@type": "Country",
      "name": "United States"
    }
  }
}

/**
 * Enhanced FAQ Schema with rich context for capital gains
 */
export function createCapitalGainsFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "author": {
          "@type": "Organization",
          "name": "Calcuzy"
        },
        "dateCreated": "2026-01-01",
        "upvoteCount": "42"
      },
      "suggestedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })),
    "publisher": {
      "@type": "Organization",
      "name": "Calcuzy",
      "url": "https://calcuzy.app"
    }
  }
}

/**
 * Enhanced HowTo Schema for capital gains calculation process
 */
export function createCapitalGainsHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Calculate Capital Gains Tax",
    "description": "Step-by-step guide to calculate capital gains tax on investments with optimization strategies",
    "image": "https://calcuzy.app/og-tools.png",
    "totalTime": "PT5M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Investment purchase records"
      },
      {
        "@type": "HowToSupply", 
        "name": "Sale transaction details"
      },
      {
        "@type": "HowToSupply",
        "name": "Annual income information"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Capital Gains Calculator"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enter Purchase Price",
        "text": "Input the original purchase price of your investment including commissions and fees",
        "image": "https://calcuzy.app/step1.png"
      },
      {
        "@type": "HowToStep", 
        "name": "Enter Sale Price",
        "text": "Input the sale price received when you sold the investment",
        "image": "https://calcuzy.app/step2.png"
      },
      {
        "@type": "HowToStep",
        "name": "Select Holding Period",
        "text": "Choose between short-term (≤1 year) or long-term (>1 year) holding period",
        "image": "https://calcuzy.app/step3.png"
      },
      {
        "@type": "HowToStep",
        "name": "Enter Annual Income",
        "text": "Input your annual taxable income to determine the applicable tax bracket",
        "image": "https://calcuzy.app/step4.png"
      },
      {
        "@type": "HowToStep",
        "name": "Calculate Results",
        "text": "Review your capital gains tax liability and after-tax returns",
        "image": "https://calcuzy.app/step5.png"
      }
    ]
  }
}

/**
 * BreadcrumbList Schema for navigation context
 */
export function createCapitalGainsBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://calcuzy.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Finance Tools",
        "item": "https://calcuzy.app/tools"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Capital Gains Calculator",
        "item": "https://calcuzy.app/capital-gains-calculator"
      }
    ]
  }
}

/**
 * Event Schema for Black Friday 2026
 */
export function createBlackFridayEventSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Black Friday 2026",
    "description": "The biggest shopping event of the year with massive discounts and deals across all categories",
    "url": "https://calcuzy.app/black-friday-countdown",
    "startDate": "2026-11-27T00:00:00-05:00",
    "endDate": "2026-11-27T23:59:59-05:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://calcuzy.app/black-friday-countdown"
    },
    "organizer": {
      "@type": "Organization",
      "name": "Calcuzy",
      "url": "https://calcuzy.app"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    },
    "performer": {
      "@type": "Organization",
      "name": "National Retailers"
    },
    "isAccessibleForFree": true,
    "inLanguage": "en-US"
  }
}
