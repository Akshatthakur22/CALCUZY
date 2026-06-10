import { Inter } from 'next/font/google'
import './globals.css'
import { createMetadata } from '@/lib/metadata'
import { Analytics } from '@vercel/analytics/react'
import ErrorBoundary from '@/components/ErrorBoundary'
import LoadingBoundary from '@/components/LoadingBoundary'
import { ToastProvider } from '@/components/Toast'
import ServiceWorkerProvider from '@/components/ServiceWorkerProvider'
import CalculatorClickTracker from '@/components/CalculatorClickTracker'
import Script from "next/script"

// Optimized font loading with display: swap for better LCP
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata = createMetadata({
  title: 'Calcuzy - Your All-In-One Online Tools Platform',
  description:
    'Free online calculators, generators, converters, and utilities. 31 tools for finance, health, legal, and everyday use.',
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
        
        {/* DNS prefetch for analytics */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Adsense verification meta */}
        <meta name="google-adsense-account" content="ca-pub-2612507905879561" />

        {/* Icons */}
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color for PWA */}
        <meta name="theme-color" content="#667eea" />
        
        {/* Apple touch bar icon */}
        <link rel="apple-touch-startup-image" href="/logo.svg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Calcuzy" />
        
        {/* Microsoft PWA */}
        <meta name="msapplication-TileColor" content="#667eea" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>

      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        <ErrorBoundary>
          <LoadingBoundary>
            <ToastProvider>
              <ServiceWorkerProvider />
              <CalculatorClickTracker />
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
              anonymize_ip: true,
            });
          `}
        </Script>

        <Analytics />
      </body>
    </html>
  )
}
