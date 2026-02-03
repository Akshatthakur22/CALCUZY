import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://calcuzy.app'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/private/',
        ],
      },
      {
        // Google AdSense bot - full access
        userAgent: 'Mediapartners-Google',
        allow: '/',
      },
      {
        // Google AdsBot for ad quality
        userAgent: 'AdsBot-Google',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
