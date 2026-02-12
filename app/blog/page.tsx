import { Metadata } from 'next'
import { createMetadata, createWebPageSchema } from '@/lib/metadata'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = createMetadata({
  title: 'Calcuzy Blog - Expert Guides & Tutorials',
  description: 'Discover expert guides, tutorials, and insights on calculators, financial planning, health tools, and productivity. Learn how to make the most of our free online tools.',
  keywords: 'calculator blog, financial planning guides, health calculators, productivity tips, online tools tutorials',
  url: '/blog'
})

const blogSchema = createWebPageSchema({
  name: 'Calcuzy Blog',
  description: 'Expert guides and tutorials for online calculators and productivity tools',
  url: 'https://calcuzy.app/blog'
})

const blogPosts = [
  {
    title: 'Complete Guide to BMI Calculator: Understanding Your Health Metrics',
    excerpt: 'Learn everything about Body Mass Index, how to calculate it, what the numbers mean, and how to use BMI for better health management.',
    category: 'Health',
    url: '/blog/bmi-calculator-guide',
    date: '2024-01-15',
    readTime: '8 min read'
  },
  {
    title: 'Capital Gains Tax Calculator: Maximize Your Investment Returns',
    excerpt: 'Master capital gains tax calculations, understand tax brackets, and learn strategies to minimize your tax liability on investments.',
    category: 'Finance',
    url: '/blog/capital-gains-tax-guide',
    date: '2024-01-12',
    readTime: '10 min read'
  },
  {
    title: 'Age Calculator Guide: From Birth Dates to Life Milestones',
    excerpt: 'Explore different age calculations, understand chronological vs. biological age, and discover tools for life planning.',
    category: 'Lifestyle',
    url: '/blog/age-calculator-guide',
    date: '2024-01-10',
    readTime: '6 min read'
  },
  {
    title: 'Property Tax Estimator: Understanding Your Tax Obligations',
    excerpt: 'Learn how property taxes work, how to estimate them accurately, and ways to manage your property tax burden effectively.',
    category: 'Finance',
    url: '/blog/property-tax-guide',
    date: '2024-01-08',
    readTime: '12 min read'
  },
  {
    title: 'Will Generator Complete Guide: Protecting Your Legacy',
    excerpt: 'Understand the importance of wills, learn about different types, and discover how to create a legally sound will using online tools.',
    category: 'Legal',
    url: '/blog/will-generator-guide',
    date: '2024-01-05',
    readTime: '15 min read'
  },
  {
    title: 'Crypto Tax Calculator: Navigating Digital Asset Taxes',
    excerpt: 'Master cryptocurrency tax calculations, understand reporting requirements, and learn strategies for tax-efficient crypto investing.',
    category: 'Finance',
    url: '/blog/crypto-tax-guide',
    date: '2024-01-03',
    readTime: '11 min read'
  }
]

const categories = [
  { name: 'All', count: blogPosts.length },
  { name: 'Finance', count: blogPosts.filter(p => p.category === 'Finance').length },
  { name: 'Health', count: blogPosts.filter(p => p.category === 'Health').length },
  { name: 'Lifestyle', count: blogPosts.filter(p => p.category === 'Lifestyle').length },
  { name: 'Legal', count: blogPosts.filter(p => p.category === 'Legal').length }
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
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Calcuzy Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert guides, tutorials, and insights to help you master our tools and make informed decisions.
            </p>
          </div>

          <AdUnit slot={1} className="mb-12" />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  category.name === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
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
                    <a 
                      href={post.url}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </a>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <a
                      href={post.url}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </a>
                  </div>
                </article>
              </Card>
            ))}
          </div>

          <AdUnit slot={2} className="mb-12" />

          {/* Newsletter Section */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Stay Updated with Our Latest Guides
            </h2>
            <p className="mb-6 text-blue-100">
              Get expert tips, calculator tutorials, and productivity insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </Card>

          <AdUnit slot={3} className="mt-12" />
        </main>

        <Footer />
      </div>
    </>
  )
}
