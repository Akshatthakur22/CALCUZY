import { Inter } from 'next/font/google'
import './globals.css'
import { createMetadata } from '@/lib/metadata'
import { Analytics } from '@vercel/analytics/react'
import ErrorBoundary from '@/components/ErrorBoundary'
import LoadingBoundary from '@/components/LoadingBoundary'
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export const metadata = createMetadata({
  title: 'Calcuzy.app - Simple Online Tools, Countdowns & Everyday Utilities',
  description:
    'Minimal. Fast. Search-Optimized. Revenue-Ready. Simple online tools, countdown timers, and everyday utilities designed for speed and simplicity.',
  keywords: 'online tools, countdown timers, calculators, simple utilities',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Adsense */}
        <meta
          name="google-adsense-account"
          content="ca-pub-2612507905879561"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2612507905879561"
          crossOrigin="anonymous"
        ></script>

        {/* Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* ⭐ Google Analytics (GA4) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JFXJRQZ7SQ"
        />
        <Script id="ga4-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JFXJRQZ7SQ');
          `}
        </Script>
      </head>

      <body className={`${inter.className} bg-primary-bg text-primary-text antialiased`}>
        <ErrorBoundary>
          <LoadingBoundary>
            {children}
          </LoadingBoundary>
        </ErrorBoundary>

        <Analytics />
      </body>
    </html>
  )
}
