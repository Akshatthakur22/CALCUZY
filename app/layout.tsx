import { Inter } from 'next/font/google'
import './globals.css'
import { createMetadata } from '@/lib/metadata'
import { Analytics } from '@vercel/analytics/react'
import ErrorBoundary from '@/components/ErrorBoundary'
import LoadingBoundary from '@/components/LoadingBoundary'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const metadata = createMetadata({
  title: 'Calcuzy.app - Simple Online Tools, Countdowns & Everyday Utilities',
  description: 'Minimal. Fast. Search-Optimized. Revenue-Ready. Simple online tools, countdown timers, and everyday utilities designed for speed and simplicity.',
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
        {/* Critical resource hints */}
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        
        <meta
          name="google-adsense-account"
          content="ca-pub-2612507905879561"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2612507905879561"
          crossOrigin="anonymous"
        ></script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
