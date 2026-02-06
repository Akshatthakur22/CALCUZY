import { Inter } from 'next/font/google'
import './globals.css'
import { createMetadata } from '@/lib/metadata'
import { Analytics } from '@vercel/analytics/react'
import ErrorBoundary from '@/components/ErrorBoundary'
import LoadingBoundary from '@/components/LoadingBoundary'
import { ToastProvider } from '@/components/Toast'
import Script from "next/script"

// Optimized font loading with display: swap for better LCP
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  // Optimize font loading by only loading necessary weights
  weight: ['300', '400', '500', '600', '700'],
  // Enable font fallback for faster rendering
  fallback: ['system-ui', 'arial', 'sans-serif'],
})

export const metadata = createMetadata({
  title: 'Calcuzy - Your All-In-One Online Tools Platform',
  description:
    'Free online calculators, generators, converters, and utilities. 100+ precision tools for finance, health, legal, and everyday use.',
  keywords: 'online tools, calculators, generators, converters, BMI calculator, age calculator, will generator, countdown timers',
  url: 'https://calcuzy.app',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Preconnect to critical origins for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        
        {/* DNS prefetch for analytics */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preload critical CSS and fonts */}
        <link
          rel="preload"
          href="/fonts/inter-v12-latin-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter-v12-latin-500.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Preload critical images for LCP */}
        <link
          rel="preload"
          href="/logo.png"
          as="image"
          type="image/png"
        />
        
        {/* Adsense verification meta */}
        <meta name="google-adsense-account" content="ca-pub-2612507905879561" />

        {/* Icons with optimized loading */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Critical CSS inlined for faster LCP */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            body {
              font-family: ${inter.style.fontFamily}, system-ui, -apple-system, sans-serif;
            }
            .fade-in {
              animation: fadeIn 0.3s ease-in;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            /* Prevent flash of unstyled content */
            .loading-skeleton {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: loading 1.5s infinite;
            }
            @keyframes loading {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `
        }} />
      </head>

      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        <ErrorBoundary>
          <LoadingBoundary>
            <ToastProvider>
              {children}
            </ToastProvider>
          </LoadingBoundary>
        </ErrorBoundary>

        {/* Google Analytics - loaded after interactive with strategy */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JFXJRQZ7SQ"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JFXJRQZ7SQ', {
              page_path: window.location.pathname,
              // Optimize for performance
              send_page_view: false,
              transport_type: 'beacon'
            });
            // Send page view after initialization
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href
            });
          `}
        </Script>

        {/* AdSense - loaded lazily to not block LCP */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2612507905879561"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />

        {/* Performance monitoring script */}
        <Script id="performance-monitor" strategy="afterInteractive">
          {`
            // Monitor Core Web Vitals
            if ('PerformanceObserver' in window) {
              const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                  if (entry.entryType === 'largest-contentful-paint') {
                    console.log('LCP:', entry.startTime);
                    // Send to analytics if needed
                    if (typeof gtag !== 'undefined') {
                      gtag('event', 'LCP', {
                        event_category: 'Web Vitals',
                        value: Math.round(entry.startTime),
                        non_interaction: true
                      });
                    }
                  }
                  if (entry.entryType === 'first-input') {
                    console.log('FID:', entry.processingStart - entry.startTime);
                  }
                });
              });
              observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
            }
          `}
        </Script>

        <Analytics />
      </body>
    </html>
  )
}
