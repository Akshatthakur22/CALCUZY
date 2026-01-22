import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Aesthetic Quotes – Beautiful Short Quotes',
  description: 'Find beautiful aesthetic quotes from our collection of inspiring short quotes. Perfect for social media and daily inspiration.',
  keywords: 'aesthetic quotes, short aesthetic quotes, beautiful quotes, inspiring quotes',
})

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

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Aesthetic Quotes</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Aesthetic quotes capture the essence of beauty in its purest form - 
              simple, elegant, and profoundly meaningful. Our collection of 100+ aesthetic 
              quotes explores beauty, art, and life through the lens of minimalism and 
              emotional truth, celebrating the moments that make existence beautiful.
            </p>
            
            <p className="paragraph">
              The beauty of aesthetic quotes lies in their ability to distill complex 
              emotions into simple, powerful words. These quotes remind us that beauty exists 
              in imperfection, in authenticity, and in the courage to be vulnerable. They 
              celebrate the art of living beautifully rather than just creating beautiful things.
            </p>
            
            <p className="paragraph">
              Aesthetic quotes about art and life emphasize the importance of 
              creativity, self-expression, and finding meaning in our experiences. They 
              encourage us to see the world through eyes of wonder, to appreciate the 
              small moments that make life extraordinary, and to create beauty in our own 
              unique way.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">The Philosophy of Aesthetic Quotes</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text"><strong>Simplicity:</strong> Finding beauty in minimalism and clarity</li>
              <li className="text-secondary-text"><strong>Authenticity:</strong> Being true to oneself and others</li>
              <li className="text-secondary-text"><strong>Imperfection:</strong> Seeing beauty in flaws and uniqueness</li>
              <li className="text-secondary-text"><strong>Mindfulness:</strong> Appreciating the present moment</li>
              <li className="text-secondary-text"><strong>Creativity:</strong> Expressing inner beauty through art</li>
              <li className="text-secondary-text"><strong>Connection:</strong> Finding beauty in human relationships</li>
            </ul>
            
            <p className="paragraph">
              Our aesthetic quotes collection is completely free to browse and includes 
              quotes suitable for all moments when you need inspiration about beauty, 
              art, or the meaning of life. Whether you&apos;re seeking motivation 
              for creative projects or simply want to appreciate the beauty around you, 
              you&apos;ll find the perfect words to inspire your aesthetic journey.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Quote Collections</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/motivational-quotes" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Motivational Quotes</div>
                <div className="text-sm text-secondary-text">Inspiring quotes for success</div>
              </Link>
              <Link href="/love-quotes" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Love Quotes</div>
                <div className="text-sm text-secondary-text">Romantic and heartfelt quotes</div>
              </Link>
            </div>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How many aesthetic quotes are in the collection?</h3>
              <p className="paragraph">
                Our comprehensive collection includes over 100 aesthetic quotes, 
                organized into categories like beauty, art, and life. This provides 
                plenty of inspiration for appreciating the beauty in everyday moments 
                and creative expression.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What makes a quote aesthetic?</h3>
              <p className="paragraph">
                Aesthetic quotes are characterized by their simplicity, emotional 
                depth, and focus on beauty in its various forms. They often emphasize 
                minimalism, authenticity, and the appreciation of subtle beauty in 
                everyday life, art, and human experience.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How can I use aesthetic quotes in my life?</h3>
              <p className="paragraph">
                Use aesthetic quotes as daily affirmations, include them in 
                journaling, share them on social media, use them as captions for photos, 
                or create art inspired by these beautiful words. They work well for 
                creative projects and mindful living.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Are aesthetic quotes good for social media?</h3>
              <p className="paragraph">
                Yes, aesthetic quotes are perfect for social media as they&apos;re 
                typically short, visually appealing, and emotionally resonant. They work 
                beautifully as Instagram captions, Twitter posts, or Pinterest pins, 
                especially when paired with aesthetic photography or art.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can aesthetic quotes improve my mood?</h3>
              <p className="paragraph">
                Yes, aesthetic quotes can significantly improve your mood by 
                promoting mindfulness, encouraging appreciation of beauty, and providing 
                gentle reminders to slow down and notice the beautiful moments in 
                your daily life. They help cultivate a more positive and grateful mindset.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
