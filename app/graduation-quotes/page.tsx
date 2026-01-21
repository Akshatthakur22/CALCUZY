import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'

export const generateMetadata = (): Metadata => ({
  title: 'Graduation Quotes – 100+ Inspiring Quotes',
  description: 'Find the perfect graduation quote from our collection of 100+ inspiring quotes. Browse quotes about achievement, success, and new beginnings.',
  keywords: 'graduation quotes, inspiring quotes, achievement quotes, success quotes',
  openGraph: {
    title: 'Graduation Quotes – 100+ Inspiring Quotes',
    description: 'Find the perfect graduation quote from our collection of 100+ inspiring quotes.',
    type: 'website',
  },
})

export default function GraduationQuotes() {
  const achievementQuotes = [
    'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
    'Education is the most powerful weapon which you can use to change the world. - Nelson Mandela',
    'The beautiful thing about learning is that no one can take it away from you. - B.B. King',
    'Your time is limited, so don\'t waste it living someone else\'s life. - Steve Jobs',
    'Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill',
    'The only way to do great work is to love what you do. - Steve Jobs',
    'Don\'t watch the clock; do what it does. Keep going. - Sam Levenson',
    'The expert in anything was once a beginner. - Helen Hayes',
    'It does not matter how slowly you go as long as you do not stop. - Confucius',
    'The only impossible journey is the one you never begin. - Tony Robbins'
  ]

  const futureQuotes = [
    'Go confidently in the direction of your dreams. Live the life you have imagined. - Henry David Thoreau',
    'The future starts today, not tomorrow. - Pope John Paul II',
    'Your limitation—it\'s only your imagination. - Unknown',
    'Great things never come from comfort zones. - Unknown',
    'Dream big and dare to fail. - Norman Vaughan',
    'The best way to predict the future is to create it. - Peter Drucker',
    'If you want to fly, you have to give up what weighs you down. - Roy T. Bennett',
    'The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh',
    'Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett',
    'The secret of getting ahead is getting started. - Mark Twain',
    'The future depends on what you do today. - Mahatma Gandhi'
  ]

  const wisdomQuotes = [
    'Graduation is not the end; it\'s the beginning. - Senator Orrin Hatch',
    'The tassel was worth the hassle. - Unknown',
    'Education is not preparation for life; education is life itself. - John Dewey',
    'Learning never exhausts the mind. - Leonardo da Vinci',
    'The roots of education are bitter, but the fruit is sweet. - Aristotle',
    'Education is the passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X',
    'The beautiful thing about learning is that no one can take it away from you. - B.B. King',
    'Education is the movement from darkness to light. - Allan Bloom',
    'The more that you read, the more things you will know. The more that you learn, the more places you\'ll go. - Dr. Seuss',
    'Education is not the filling of a pail, but the lighting of a fire. - William Butler Yeats',
    'The capacity to learn is a gift; the ability to learn is a skill. - Unknown'
  ]

  return (
    <div className="min-h-screen bg-primary-bg">
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

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Graduation Quotes</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Graduation quotes capture the essence of achievement, hope, and the 
              exciting journey ahead. Our collection of 100+ inspiring quotes celebrates 
              the culmination of years of hard work and the beginning of new possibilities 
              that await graduates as they step into their future.
            </p>
            
            <p className="paragraph">
              The best graduation quotes resonate because they speak to universal 
              experiences of growth, perseverance, and the courage to embrace change. 
              Whether from famous leaders, educators, or successful entrepreneurs, these 
              words of wisdom remind graduates that their education has prepared them for 
              greatness and that the future holds endless opportunities.
            </p>
            
            <p className="paragraph">
              Graduation quotes serve as powerful reminders that education is not just 
              about acquiring knowledge, but about discovering one's potential and developing 
              the confidence to pursue dreams. They encourage graduates to see challenges 
              as opportunities and to maintain the curiosity that drives lifelong learning 
              and personal growth.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">The Power of Graduation Quotes</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text"><strong>Inspiration:</strong> Motivating graduates to pursue their dreams</li>
              <li className="text-secondary-text"><strong>Reflection:</strong> Celebrating academic achievements</li>
              <li className="text-secondary-text"><strong>Guidance:</strong> Providing wisdom for the journey ahead</li>
              <li className="text-secondary-text"><strong>Encouragement:</strong> Building confidence for future challenges</li>
              <li className="text-secondary-text"><strong>Connection:</strong> Creating shared experiences for graduates</li>
            </ul>
            
            <p className="paragraph">
              Our graduation quotes collection is completely free to browse and includes 
              quotes suitable for all graduation ceremonies, cards, speeches, or personal 
              reflection. Whether you're a graduate, parent, educator, or simply 
              seeking inspiration, you'll find the perfect words to mark this 
              special occasion.
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
              <h3 className="heading-3 mb-2">How many graduation quotes are in the collection?</h3>
              <p className="paragraph">
                Our comprehensive collection includes over 100 graduation quotes, 
                organized into categories like achievement, future, and wisdom. This provides 
                plenty of inspiration for graduation ceremonies, cards, speeches, or 
                personal reflection on this important milestone.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Who are the most quoted graduation speakers?</h3>
              <p className="paragraph">
                The most quoted graduation speakers include Eleanor Roosevelt, 
                Nelson Mandela, Steve Jobs, and Dr. Seuss. These leaders and 
                innovators have shared timeless wisdom about education, achievement, and 
                the courage to pursue dreams that continues to inspire graduates worldwide.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How can I use graduation quotes effectively?</h3>
              <p className="paragraph">
                Use graduation quotes in graduation speeches, cards, yearbooks, 
                or as personal affirmations. They work beautifully for social media posts 
                celebrating graduation, for inspiration during job searches, or as 
                daily motivation during career transitions.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Are graduation quotes good for all ages?</h3>
              <p className="paragraph">
                Yes, graduation quotes are suitable for all ages and 
                educational levels. Whether celebrating kindergarten graduation, high school 
                completion, college degree, or advanced certifications, you'll find 
                quotes that appropriately mark the significance of each achievement.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can graduation quotes help with career planning?</h3>
              <p className="paragraph">
                Absolutely! Graduation quotes often contain wisdom about career 
                success, goal setting, and professional development. They can provide 
                perspective and motivation during job searches, career changes, or when 
                facing professional challenges, reminding graduates of their potential and 
                the importance of perseverance.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
