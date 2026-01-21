import { Inter } from 'next/font/google'
import './globals.css'
import { createMetadata } from '@/lib/metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata = createMetadata({
  title: 'Calcuzy.com - Simple Online Tools, Countdowns & Everyday Utilities',
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
        {children}
      </body>
    </html>
  )
}
