import Link from 'next/link'
import { Metadata } from 'next'
import { createMetadata, createWebPageSchema } from '@/lib/metadata'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = createMetadata({
  title: 'Calcuzy Blog - Guides & Tutorials',
  description: 'Guides and tutorials for Calcuzy calculators and online tools. Learn how to use our free BMI calculator and other utilities.',
  keywords: 'calculator blog, health calculators, BMI guide, online tools tutorials',
  url: 'https://calcuzy.app/blog',
  image: '/og/og-default.svg',
})

const blogSchema = createWebPageSchema({
  name: 'Calcuzy Blog',
  description: 'Guides and tutorials for online calculators and productivity tools',
  url: 'https://calcuzy.app/blog',
})

/** Only list posts that have a published route under app/blog/ */
const blogPosts = [
  {
    title: 'Complete Guide to BMI Calculator: Understanding Your Health Metrics',
    excerpt: 'Learn what Body Mass Index means, how to calculate it, what the categories indicate, and when to talk to a healthcare provider.',
    category: 'Health',
    url: '/blog/bmi-calculator-guide',
    date: '2024-01-15',
    readTime: '8 min read',
  },
]

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Calcuzy Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical guides to help you get more from our calculators and tools.
            </p>
          </div>

          <AdUnit slot={1} className="mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card key={post.url} hover animation="fade-in" delay={index * 100}>
                <article className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link href={post.url} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <Link
                      href={post.url}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              </Card>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mb-12">
            More guides are in progress. Have a topic request?{' '}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact us
            </Link>
            .
          </p>

          <AdUnit slot={2} className="mb-12" />
          <AdUnit slot={3} className="mt-12" />
        </main>

        <Footer />
      </div>
    </>
  )
}
