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
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter'
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        
        {/* Accessibility and SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light" />
        
        <meta
          name="google-adsense-account"
          content="ca-pub-2612507905879561"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                      console.log('SW registered: ', registration);
                    })
                    .catch((registrationError) => {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `
          }}
        />
        
        {/* Deferred AdSense Loading */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', () => {
                const script = document.createElement('script');
                script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2612507905879561';
                script.crossOrigin = 'anonymous';
                script.async = true;
                document.head.appendChild(script);
              });
            `
          }}
        />
      </head>
      <body className={`${inter.className} bg-primary-bg text-primary-text antialiased`}>
        <ErrorBoundary>
          <LoadingBoundary>
            {children}
          </LoadingBoundary>
        </ErrorBoundary>
        <Analytics />
        
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
      </body>
    </html>
  )
}
