import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calcuzy.com - Simple Online Tools, Countdowns & Everyday Utilities',
  description: 'Minimal. Fast. Search-Optimized. Revenue-Ready. Simple online tools, countdown timers, and everyday utilities designed for speed and simplicity.',
  keywords: 'online tools, countdown timers, calculators, simple utilities',
  openGraph: {
    title: 'Calcuzy.com - Simple Online Tools & Countdowns',
    description: 'Minimal. Fast. Search-Optimized. Simple online tools and countdown timers.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-bg text-primary-text antialiased`}>
        {children}
      </body>
    </html>
  )
}
