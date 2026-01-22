import { Inter } from 'next/font/google'
import './globals.css'
import { createMetadata } from '@/lib/metadata'
import { Analytics } from '@vercel/analytics/react'
import ErrorBoundary from '@/components/ErrorBoundary'
import LoadingBoundary from '@/components/LoadingBoundary'

const inter = Inter({ subsets: ['latin'] })

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
