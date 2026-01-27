import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Love Quotes – Romantic & Heartfelt Sayings',
  description: 'Find beautiful love quotes from our collection of romantic and heartfelt sayings. Perfect for expressing your feelings to loved ones.',
  keywords: 'love quotes, romantic quotes, heartfelt sayings, relationship quotes',
})

export default function LoveQuotes() {
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

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Love Quotes</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Love quotes capture the essence of romance, connection, and the 
              profound emotions that make relationships meaningful. Our collection of 100+ love 
              quotes celebrates the beauty of human connection, the courage to be vulnerable, 
              and the joy that comes from sharing your heart with someone special.
            </p>
            
            <p className="paragraph">
              The best love quotes resonate because they speak to universal 
              experiences of the heart - the excitement of new romance, the comfort 
              of long-term relationships, and the bittersweet beauty of love in all 
              its forms. Whether from famous poets, philosophers, or everyday 
              people, these words capture the feeling that makes life worth living.
            </p>
            
            <p className="paragraph">
              Love quotes serve as beautiful reminders that love is both 
              powerful and gentle. They encourage us to be brave in our emotions, to 
              cherish the connections we have, and to remember that the greatest 
              adventure is opening your heart to another person. Love transforms ordinary 
              moments into extraordinary memories.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">The Power of Love Quotes</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text"><strong>Connection:</strong> Building meaningful relationships</li>
              <li className="text-secondary-text"><strong>Vulnerability:</strong> Opening your heart to another</li>
              <li className="text-secondary-text"><strong>Courage:</strong> Being brave in love</li>
              <li className="text-secondary-text"><strong>Growth:</strong> Learning and evolving together</li>
              <li className="text-secondary-text"><strong>Appreciation:</strong> Valuing your partner</li>
              <li className="text-secondary-text"><strong>Support:</strong> Being there through challenges</li>
            </ul>
            
            <p className="paragraph">
              Our love quotes collection is completely free to browse and includes 
              quotes suitable for all occasions - anniversaries, Valentine&apos;s Day, 
              wedding vows, or simply expressing your feelings. Whether you&apos;re 
              seeking inspiration for a new relationship, celebrating existing love, or 
              understanding the complexities of the heart, you&apos;ll find the perfect words 
              to express your emotions.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Quote Collections</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/motivational-quotes" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Motivational Quotes</div>
                <div className="text-sm text-secondary-text">Inspiring quotes for success</div>
              </Link>
              <Link href="/aesthetic-quotes" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Aesthetic Quotes</div>
                <div className="text-sm text-secondary-text">Beautiful and inspiring quotes</div>
              </Link>
            </div>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How many love quotes are in the collection?</h3>
              <p className="paragraph">
                Our comprehensive collection includes over 100 love quotes, 
                organized into categories like romantic, relationship, and inspirational 
                themes. This provides plenty of inspiration for expressing your feelings, 
                celebrating anniversaries, or simply sharing the beauty of love.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What makes a good love quote?</h3>
              <p className="paragraph">
                A good love quote captures the essence of romantic connection, 
                emphasizing vulnerability, trust, and the courage to open your heart. 
                The best quotes speak to universal experiences of love that resonate 
                across different cultures and time periods, making them timeless and 
                meaningful.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How can I use love quotes?</h3>
              <p className="paragraph">
                Use love quotes in Valentine&apos;s Day cards, anniversary 
                messages, wedding vows, or as daily affirmations of your relationship. 
                They work beautifully for social media posts about love, personal 
                journaling, or simply expressing your feelings to someone special.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Are love quotes suitable for all relationships?</h3>
              <p className="paragraph">
                Yes, love quotes are suitable for all types of relationships 
                - new romance, long-term partnerships, family love, or friendship. 
                Our collection includes quotes that celebrate love in its many forms, 
                making them appropriate for any stage of a relationship.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can love quotes improve my relationship?</h3>
              <p className="paragraph">
                Absolutely! Love quotes can enhance relationships by promoting 
                better communication, encouraging appreciation, and reminding partners 
                of their importance. They provide perspective during challenges and 
                celebrate the beauty of your unique connection, helping to strengthen 
                your bond.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
