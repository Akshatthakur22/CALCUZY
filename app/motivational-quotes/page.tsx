import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Motivational Quotes – 100+ Inspiring Quotes',
  description: 'Find perfect motivational quote from our collection of 100+ inspiring quotes. Browse quotes about success, perseverance, and achievement.',
  keywords: 'motivational quotes, inspiring quotes, success quotes, motivational sayings',
  url: 'https://calcuzy.app/motivational-quotes',
  image: '/og-quotes.png',
})

export default function MotivationalQuotes() {
  const structuredData = createToolSchema({
    name: 'Motivational Quotes Collection',
    description: 'Comprehensive collection of 100+ motivational quotes about success, perseverance, and achievement',
    url: 'https://calcuzy.app/motivational-quotes',
    category: 'UtilityApplication',
    features: ['100+ quotes', 'Success quotes', 'Perseverance quotes', 'Achievement quotes', 'Free to use']
  })

  const faqData = [
    {
      question: 'How many motivational quotes are in the collection?',
      answer: 'Our comprehensive collection includes over 100 motivational quotes, organized into categories like success, perseverance, and achievement. This provides plenty of inspiration for any situation or goal you\'re pursuing.'
    },
    {
      question: 'Who are the most quoted motivational speakers?',
      answer: 'The most quoted motivational speakers include Winston Churchill, Steve Jobs, Eleanor Roosevelt, and Tony Robbins. These leaders and innovators have shared timeless wisdom about success and achievement.'
    },
    {
      question: 'How can I use motivational quotes effectively?',
      answer: 'Use motivational quotes by starting your day with an inspiring message, writing quotes that resonate with your goals, sharing them with others, and using them as daily affirmations.'
    },
    {
      question: 'Can motivational quotes really change my mindset?',
      answer: 'Yes, motivational quotes can significantly impact your mindset by providing perspective during challenges, reinforcing positive beliefs, and reminding you of your goals.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const successQuotes = [
    'Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill',
    'The only way to do great work is to love what you do. - Steve Jobs',
    'Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau',
    'The road to success and the road to failure are almost exactly the same. - Colin R. Davis',
    'Success is not how high you have climbed, but how you make a positive difference to the world. - Unknown',
    'Don\'t watch the clock; do what it does. Keep going. - Sam Levenson',
    'The way to get started is to quit talking and begin doing. - Walt Disney',
    'Success is the sum of small efforts repeated day in and day out. - Robert Collier',
    'Believe you can and you\'re halfway there. - Theodore Roosevelt',
    'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt'
  ]

  const perseveranceQuotes = [
    'It does not matter how slowly you go as long as you do not stop. - Confucius',
    'Perseverance is not a long race; it is many short races one after the other. - Walter Elliot',
    'Our greatest glory is not in never falling, but in rising every time we fall. - Confucius',
    'The difference between a successful person and others is not a lack of strength, but a lack of will. - Vince Lombardi',
    'Courage doesn\'t always roar. Sometimes courage is the quiet voice at the end of the day saying, "I will try again tomorrow." - Mary Anne Radmacher',
    'Fall seven times, stand up eight. - Japanese Proverb',
    'A winner is just a loser who tried one more time. - Unknown',
    'It\'s not that I\'m so smart, it\'s just that I stay with problems longer. - Albert Einstein',
    'Perseverance is failing 19 times and succeeding the 20th. - Julie Andrews',
    'The man who moves mountains begins by carrying away small stones. - Confucius'
  ]

  const achievementQuotes = [
    'The only impossible journey is the one you never begin. - Tony Robbins',
    'Your limitation—it\'s only your imagination. - Unknown',
    'Great things never come from comfort zones. - Unknown',
    'Dream big and dare to fail. - Norman Vaughan',
    'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
    'If you want to fly, you have to give up what weighs you down. - Roy T. Bennett',
    'The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh',
    'Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett',
    'The harder you work for something, the greater you\'ll feel when you achieve it. - Unknown',
    'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer',
    'The secret of getting ahead is getting started. - Mark Twain'
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
            Motivational Quotes – 100+ Inspiring Quotes
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Find the perfect motivational quote from our collection of 100+ inspiring quotes. 
            Browse quotes about success, perseverance, and achievement to fuel your 
            daily motivation and personal growth.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="heading-2 mb-8">Success Quotes</h2>
          <Card className="mb-8">
            <div className="space-y-4 p-6">
              {successQuotes.map((quote, index) => (
                <div key={index} className="p-3 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="text-secondary-text italic">{quote}</div>
                </div>
              ))}
            </div>
          </Card>

          <h2 className="heading-2 mb-8">Perseverance Quotes</h2>
          <Card className="mb-8">
            <div className="space-y-4 p-6">
              {perseveranceQuotes.map((quote, index) => (
                <div key={index} className="p-3 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="text-secondary-text italic">{quote}</div>
                </div>
              ))}
            </div>
          </Card>

          <h2 className="heading-2 mb-8">Achievement Quotes</h2>
          <Card className="mb-8">
            <div className="space-y-4 p-6">
              {achievementQuotes.map((quote, index) => (
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
            title="Motivational Quotes"
            description={
              <>
                <p className="mb-4">
                  Motivational quotes have the power to transform our mindset and fuel 
                  our determination. Our collection of 100+ inspiring quotes covers success, 
                  perseverance, and achievement - the essential ingredients for personal growth.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">🏆 Success</h4>
                    <p className="text-sm text-amber-700">
                      Quotes about achieving your goals and reaching your potential.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">💪 Perseverance</h4>
                    <p className="text-sm text-blue-700">
                      Wisdom about staying strong through challenges and setbacks.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2">⭐ Achievement</h4>
                    <p className="text-sm text-green-700">
                      Inspiration for accomplishing your dreams and ambitions.
                    </p>
                  </div>
                </div>
              </>
            }
            steps={[
              { title: 'Browse Quotes', description: 'Explore our curated collection organized by theme.' },
              { title: 'Find Inspiration', description: 'Discover quotes that resonate with your goals.' },
              { title: 'Apply Daily', description: 'Use quotes as daily affirmations for motivation.' }
            ]}
            faqs={faqData}
            tips={[
              'Start your day with an inspiring quote',
              'Write quotes that resonate with your goals',
              'Share quotes with friends and family',
              'Use quotes as affirmations for personal growth',
              'Set quotes as phone or computer wallpapers'
            ]}
          />
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/motivational-quotes" category="generators" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
