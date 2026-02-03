import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Graduation Quotes – Inspiring Commencement Sayings',
  description: 'Find perfect graduation quotes from our collection of inspiring commencement sayings. Motivational messages for graduates and students.',
  keywords: 'graduation quotes, commencement quotes, inspiring graduation sayings',
})

const structuredData = createToolSchema({
  name: 'Graduation Quotes Collection',
  description: 'Find perfect graduation quotes from our collection of inspiring commencement sayings.',
  url: 'https://calcuzy.app/graduation-quotes',
  category: 'UtilityApplication'
})

const faqData = [
  {
    question: 'How many graduation quotes are in the collection?',
    answer: 'Our comprehensive collection includes over 100 graduation quotes, organized into categories like achievement, future, and wisdom.'
  },
  {
    question: 'Who are the most quoted graduation speakers?',
    answer: 'The most quoted graduation speakers include Eleanor Roosevelt, Nelson Mandela, Steve Jobs, and Dr. Seuss.'
  },
  {
    question: 'How can I use graduation quotes effectively?',
    answer: 'Use graduation quotes in speeches, cards, yearbooks, or as personal affirmations. They work beautifully for social media posts celebrating graduation.'
  },
  {
    question: 'Are graduation quotes good for all ages?',
    answer: 'Yes, graduation quotes are suitable for all ages and educational levels, from kindergarten to advanced degrees.'
  },
  {
    question: 'Can graduation quotes help with career planning?',
    answer: 'Absolutely! Graduation quotes often contain wisdom about career success, goal setting, and professional development.'
  }
]

const faqSchema = createFAQSchema(faqData)

export default function GraduationQuotes() {
  const achievementQuotes = [
    'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
    'Education is the most powerful weapon which you can use to change the world. - Nelson Mandela',
    'The beautiful thing about learning is that no one can take it away from you. - B.B. King',
    'Your time is limited, so don&apos;t waste it living someone else&apos;s life. - Steve Jobs',
    'Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill',
    'The only way to do great work is to love what you do. - Steve Jobs',
    'Don&apos;t watch the clock; do what it does. Keep going. - Sam Levenson',
    'The expert in anything was once a beginner. - Helen Hayes',
    'It does not matter how slowly you go as long as you do not stop. - Confucius',
    'The only impossible journey is the one you never begin. - Tony Robbins'
  ]

  const futureQuotes = [
    'Go confidently in the direction of your dreams. Live the life you have imagined. - Henry David Thoreau',
    'The future starts today, not tomorrow. - Pope John Paul II',
    'Your limitation—it&apos;s only your imagination. - Unknown',
    'Great things never come from comfort zones. - Unknown',
    'Dream big and dare to fail. - Norman Vaughan',
    'The best way to predict the future is to create it. - Peter Drucker',
    'If you want to fly, you have to give up what weighs you down. - Roy T. Bennett',
    'The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh',
    'Don&apos;t be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett',
    'The secret of getting ahead is getting started. - Mark Twain',
    'The future depends on what you do today. - Mahatma Gandhi'
  ]

  const wisdomQuotes = [
    'Graduation is not the end; it&apos;s the beginning. - Senator Orrin Hatch',
    'The tassel was worth the hassle. - Unknown',
    'Education is not preparation for life; education is life itself. - John Dewey',
    'Learning never exhausts the mind. - Leonardo da Vinci',
    'The roots of education are bitter, but the fruit is sweet. - Aristotle',
    'Education is the passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X',
    'The beautiful thing about learning is that no one can take it away from you. - B.B. King',
    'Education is the movement from darkness to light. - Allan Bloom',
    'The more that you read, the more things you will know. The more that you learn, the more places you&apos;ll go. - Dr. Seuss',
    'Education is not the filling of a pail, but the lighting of a fire. - William Butler Yeats',
    'The capacity to learn is a gift; the ability to learn is a skill. - Unknown'
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
            Graduation Quotes – 100+ Inspiring Quotes
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Find the perfect graduation quote from our collection of 100+ inspiring quotes. 
            Browse quotes about achievement, success, and new beginnings to celebrate 
            this important milestone and inspire your future journey.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto mb-12">
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

          <h2 className="heading-2 mb-8">Future Quotes</h2>
          <Card className="mb-8">
            <div className="space-y-4 p-6">
              {futureQuotes.map((quote, index) => (
                <div key={index} className="p-3 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="text-secondary-text italic">{quote}</div>
                </div>
              ))}
            </div>
          </Card>

          <h2 className="heading-2 mb-8">Wisdom Quotes</h2>
          <Card className="mb-8">
            <div className="space-y-4 p-6">
              {wisdomQuotes.map((quote, index) => (
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
            title="Graduation Quotes"
            description={
              <>
                <p className="mb-4">
                  Graduation quotes capture the essence of achievement, hope, and the 
                  exciting journey ahead. Our collection celebrates the culmination of 
                  years of hard work and the beginning of new possibilities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">🎓 Achievement</h4>
                    <p className="text-sm text-blue-700">
                      Celebrate academic success and personal growth.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2">🚀 Future</h4>
                    <p className="text-sm text-green-700">
                      Embrace the exciting possibilities that await.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <h4 className="font-semibold text-purple-800 mb-2">📚 Wisdom</h4>
                    <p className="text-sm text-purple-700">
                      Timeless advice for the journey ahead.
                    </p>
                  </div>
                </div>
              </>
            }
            steps={[
              { title: 'Browse Quotes', description: 'Explore our curated collection of graduation quotes.' },
              { title: 'Find Your Favorite', description: 'Discover quotes that resonate with your achievement.' },
              { title: 'Share & Celebrate', description: 'Use quotes in speeches, cards, or social media.' }
            ]}
            faqs={faqData}
            tips={[
              'Use graduation quotes in commencement speeches',
              'Include quotes in graduation cards and yearbooks',
              'Share quotes on social media to celebrate achievements',
              'Use quotes as motivation during career transitions'
            ]}
          />
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/graduation-quotes" category="generators" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
