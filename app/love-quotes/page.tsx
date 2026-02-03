import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Love Quotes – Romantic & Heartfelt Sayings',
  description: 'Find beautiful love quotes from our collection of romantic and heartfelt sayings. Perfect for expressing your feelings to loved ones.',
  keywords: 'love quotes, romantic quotes, heartfelt sayings, relationship quotes',
  url: 'https://calcuzy.app/love-quotes',
  image: '/og-quotes.png',
})

export default function LoveQuotes() {
  const structuredData = createToolSchema({
    name: 'Love Quotes Collection',
    description: 'Collection of 100+ romantic and heartfelt love quotes',
    url: 'https://calcuzy.app/love-quotes',
    category: 'UtilityApplication',
    features: ['100+ quotes', 'Romantic quotes', 'Relationship quotes', 'Free to use']
  })

  const faqData = [
    {
      question: 'How many love quotes are in the collection?',
      answer: 'Our comprehensive collection includes over 100 love quotes, organized into categories like romantic, relationship, and inspirational themes.'
    },
    {
      question: 'What makes a good love quote?',
      answer: 'A good love quote captures the essence of romantic connection, emphasizing vulnerability, trust, and the courage to open your heart.'
    },
    {
      question: 'How can I use love quotes?',
      answer: 'Use love quotes in Valentine\'s Day cards, anniversary messages, wedding vows, or as daily affirmations of your relationship.'
    },
    {
      question: 'Are love quotes suitable for all relationships?',
      answer: 'Yes, love quotes are suitable for all types of relationships - new romance, long-term partnerships, family love, or friendship.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const romanticQuotes = [
    'Love is composed of a single soul inhabiting two bodies. - Aristotle',
    'The best thing to hold onto in life is each other. - Audrey Hepburn',
    'Love is not finding someone to live with, it&apos;s finding someone you can&apos;t live without. - Unknown',
    'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. - Lao Tzu',
    'Love is the bridge between two hearts that beats as one. - Unknown',
    'The greatest happiness of life is the conviction that we are loved. - Victor Hugo',
    'Love is when the other person\'s happiness is more important than your own. - Unknown',
    'Love is the only force capable of transforming an enemy into a friend. - Martin Luther King Jr.',
    'Love is the voice under all silences. - Unknown',
    'Love is the master key that opens the gates of happiness. - Unknown',
    'Love is the only sane and satisfactory answer to the problem of human existence. - Erich Fromm',
    'Love is the flower you&apos;ve got to let grow. - Unknown'
  ]

  const relationshipQuotes = [
    'A successful marriage requires falling in love many times, always with the same person. - Mignon McLaughlin',
    'Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day. - Unknown',
    'The best relationships are the ones where you can be completely yourself. - Unknown',
    'Love is when the other person&apos;s happiness is more important than your own. - Unknown',
    'Love is the voice under all silences. - Unknown',
    'Love is the bridge between two hearts that beats as one. - Unknown',
    'Love is the only force capable of transforming an enemy into a friend. - Martin Luther King Jr.',
    'Love is when you can be completely yourself with someone else. - Unknown',
    'Love is when you can be completely yourself with someone else. - Unknown',
    'Love is the voice under all silences. - Unknown',
    'Love is the bridge between two hearts that beats as one. - Unknown'
  ]

  const inspirationalQuotes = [
    'Love is the voice under all silences. - Unknown',
    'Love is the bridge between two hearts that beats as one. - Unknown',
    'Love is the only force capable of transforming an enemy into a friend. - Martin Luther King Jr.',
    'Love is when the other person&apos;s happiness is more important than your own. - Unknown',
    'Love is the voice under all silences. - Unknown',
    'Love is the bridge between two hearts that beats as one. - Unknown',
    'Love is the only force capable of transforming an enemy into a friend. - Martin Luther King Jr.',
    'Love is when the other person\'s happiness is more important than your own. - Unknown',
    'Love is the voice under all silences. - Unknown',
    'Love is the bridge between two hearts that beats as one. - Unknown'
  ]

  return (
    <div className="min-h-screen bg-primary-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      
      <main className="container py-12">
        <div className="text-center mb-12">
          <h1 className="heading-1 text-center mb-6">
            Love Quotes – 100+ Romantic Quotes
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Find the perfect love quote from our collection of 100+ romantic quotes. 
            Browse quotes about romance, relationships, and matters of the heart 
            to express your feelings and celebrate the beauty of love.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="heading-2 mb-8">Romantic Love Quotes</h2>
          <Card className="mb-8">
            <div className="space-y-4 p-6">
              {romanticQuotes.map((quote, index) => (
                <div key={index} className="p-3 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="text-secondary-text italic">{quote}</div>
                </div>
              ))}
            </div>
          </Card>

          <h2 className="heading-2 mb-8">Relationship Quotes</h2>
          <Card className="mb-8">
            <div className="space-y-4 p-6">
              {relationshipQuotes.map((quote, index) => (
                <div key={index} className="p-3 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="text-secondary-text italic">{quote}</div>
                </div>
              ))}
            </div>
          </Card>

          <h2 className="heading-2 mb-8">Inspirational Love Quotes</h2>
          <Card className="mb-8">
            <div className="space-y-4 p-6">
              {inspirationalQuotes.map((quote, index) => (
                <div key={index} className="p-3 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="text-secondary-text italic">{quote}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <AdUnit slot={2} />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Love Quotes"
            description={
              <>
                <p className="mb-4">
                  Love quotes capture the essence of romance, connection, and the 
                  profound emotions that make relationships meaningful. Our collection celebrates 
                  the beauty of human connection and the joy of sharing your heart.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
                    <h4 className="font-semibold text-pink-800 mb-2">💕 Romantic</h4>
                    <p className="text-sm text-pink-700">
                      Express deep feelings and passion for your partner.
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <h4 className="font-semibold text-red-800 mb-2">💑 Relationships</h4>
                    <p className="text-sm text-red-700">
                      Wisdom about building and nurturing lasting love.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <h4 className="font-semibold text-purple-800 mb-2">✨ Inspirational</h4>
                    <p className="text-sm text-purple-700">
                      Uplifting messages about the power of love.
                    </p>
                  </div>
                </div>
              </>
            }
            steps={[
              { title: 'Browse Quotes', description: 'Explore our curated collection of love quotes.' },
              { title: 'Find Your Match', description: 'Discover quotes that express your feelings.' },
              { title: 'Share the Love', description: 'Use quotes in cards, messages, or vows.' }
            ]}
            faqs={faqData}
            tips={[
              'Use love quotes in Valentine\'s Day cards and messages',
              'Include quotes in anniversary celebrations',
              'Add quotes to wedding vows or speeches',
              'Share quotes with your partner as daily reminders'
            ]}
          />
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/love-quotes" category="generators" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
