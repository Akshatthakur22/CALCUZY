import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Aesthetic Quotes – Beautiful Short Quotes',
  description: 'Find beautiful aesthetic quotes from our collection of inspiring short quotes. Perfect for social media and daily inspiration.',
  keywords: 'aesthetic quotes, short aesthetic quotes, beautiful quotes, inspiring quotes',
})

const structuredData = createToolSchema({
  name: 'Aesthetic Quotes Collection',
  description: 'Find beautiful aesthetic quotes from our collection of inspiring short quotes.',
  url: 'https://calcuzy.app/aesthetic-quotes',
  category: 'UtilityApplication'
})

const faqData = [
  {
    question: 'How many aesthetic quotes are in the collection?',
    answer: 'Our comprehensive collection includes over 100 aesthetic quotes, organized into beauty, art, and life categories.'
  },
  {
    question: 'What makes a quote aesthetic?',
    answer: 'Aesthetic quotes are characterized by simplicity, emotional depth, and focus on beauty in its various forms.'
  },
  {
    question: 'How can I use aesthetic quotes in my life?',
    answer: 'Use aesthetic quotes as daily affirmations, in journaling, on social media, or as captions for photos.'
  },
  {
    question: 'Are aesthetic quotes good for social media?',
    answer: 'Yes, aesthetic quotes are perfect for social media as they are short, visually appealing, and emotionally resonant.'
  },
  {
    question: 'Can aesthetic quotes improve my mood?',
    answer: 'Yes, aesthetic quotes can improve your mood by promoting mindfulness and encouraging appreciation of beauty.'
  }
]

const faqSchema = createFAQSchema(faqData)

export default function AestheticQuotes() {
  const beautyQuotes = [
    'Beauty begins the moment you decide to be yourself. - Coco Chanel',
    'The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart. - Helen Keller',
    'Beauty is power; a smile is its sword. - John Ray',
    'The beauty of a woman must be seen from in her eyes, because that is the doorway to her heart. - Audrey Hepburn',
    'Beauty is not in the face; beauty is a light in the heart. - Kahlil Gibran',
    'The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart. - Helen Keller',
    'Beauty is about enhancing what you have, not striving for what you don&apos;t. - Bobbi Brown',
    'The beauty of a woman is not in a facial mole, but the true beauty in a woman is reflected in her soul. - Audrey Hepburn',
    'Beauty is the illumination of your soul. - John O&apos;Donohue',
    'The most beautiful makeup for a woman is passion. But cosmetics are easier to buy. - Yves Saint Laurent',
    'Beauty is about being comfortable in your own skin. - Unknown'
  ]

  const artQuotes = [
    'Art enables us to find ourselves and lose ourselves at the same time. - Thomas Merton',
    'Art is not what you see, but what you make others see. - Edgar Degas',
    'The purpose of art is washing the dust of daily life off our souls. - Pablo Picasso',
    'Every artist was first an amateur. - Ralph Waldo Emerson',
    'Art is the lie that enables us to realize the truth. - Pablo Picasso',
    'Creativity takes courage. - Henri Matisse',
    'Art is the most intense mode of individualism that the world has known. - Oscar Wilde',
    'The artist is nothing without the gift, but the gift is nothing without work. - Emile Zola',
    'Art is not freedom from discipline, but the most profound use of individuality. - Henry Miller',
    'Art is the only way to run away without leaving home. - Twyla Tharp',
    'Every child is an artist. The problem is how to remain an artist once we grow up. - Pablo Picasso'
  ]

  const lifeQuotes = [
    'Life is a journey that must be traveled no matter how bad the roads and accommodations. - Oliver Goldsmith',
    'The purpose of our lives is to be happy. - Dalai Lama',
    'Life is what happens when you&apos;re busy making other plans. - John Lennon',
    'Life is really simple, but we insist on making it complicated. - Confucius',
    'Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll',
    'Life is a succession of lessons which must be lived to be understood. - Helen Keller',
    'Life is either a daring adventure or nothing at all. - Helen Keller',
    'Life is short, and it is up to you to make it sweet. - Unknown',
    'Life is not measured by the number of breaths we take, but by the moments that take our breath away. - Maya Angelou',
    'Life is what happens to you while you&apos;re busy making other plans. - John Lennon'
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
            Aesthetic Quotes – 100+ Beautiful Quotes
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Find the perfect aesthetic quote from our collection of 100+ beautiful quotes. 
            Browse quotes about beauty, art, and life that celebrate the 
            simple, elegant moments and profound truths of human existence.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="heading-2 mb-8">Beauty Quotes</h2>
          <Card className="mb-8">
            <div className="space-y-4 p-6">
              {beautyQuotes.map((quote, index) => (
                <div key={index} className="p-3 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="text-secondary-text italic">{quote}</div>
                </div>
              ))}
            </div>
          </Card>

          <h2 className="heading-2 mb-8">Art Quotes</h2>
          <Card className="mb-8">
            <div className="space-y-4 p-6">
              {artQuotes.map((quote, index) => (
                <div key={index} className="p-3 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="text-secondary-text italic">{quote}</div>
                </div>
              ))}
            </div>
          </Card>

          <h2 className="heading-2 mb-8">Life Quotes</h2>
          <Card className="mb-8">
            <div className="space-y-4 p-6">
              {lifeQuotes.map((quote, index) => (
                <div key={index} className="p-3 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="text-secondary-text italic">{quote}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <AdUnit slot= {2} />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Aesthetic Quotes"
            description={
              <>
                <p className="mb-4">
                  Aesthetic quotes capture the essence of beauty in its purest form - 
                  simple, elegant, and profoundly meaningful. Our collection explores 
                  beauty, art, and life through the lens of minimalism and emotional truth.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
                    <h4 className="font-semibold text-pink-800 mb-2">✨ Beauty</h4>
                    <p className="text-sm text-pink-700">
                      Quotes celebrating inner and outer beauty.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <h4 className="font-semibold text-purple-800 mb-2">🎨 Art</h4>
                    <p className="text-sm text-purple-700">
                      Wisdom about creativity and self-expression.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">🌿 Life</h4>
                    <p className="text-sm text-blue-700">
                      Reflections on the beauty of existence.
                    </p>
                  </div>
                </div>
              </>
            }
            steps={[
              { title: 'Browse Quotes', description: 'Explore our curated collection of aesthetic quotes.' },
              { title: 'Find Your Aesthetic', description: 'Discover quotes that resonate with your style.' },
              { title: 'Share & Inspire', description: 'Use quotes on social media or in creative projects.' }
            ]}
            faqs={faqData}
            tips={[
              'Use aesthetic quotes as Instagram captions',
              'Create wallpapers or prints with your favorites',
              'Include quotes in journals or bullet journals',
              'Share quotes to inspire your creative community'
            ]}
          />
        </div>

        <AdUnit slot= {3} />

        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/aesthetic-quotes" category="generators" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
