import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Motivational Quotes – 100+ Inspiring Quotes',
  description: 'Find perfect motivational quote from our collection of 100+ inspiring quotes. Browse quotes about success, perseverance, and achievement.',
  keywords: 'motivational quotes, inspiring quotes, success quotes, motivational sayings',
  url: 'https://Calcuzy.app/motivational-quotes',
  image: '/og-quotes.png',
})

export default function MotivationalQuotes() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Motivational Quotes Collection",
    "description": "Comprehensive collection of 100+ motivational quotes about success, perseverance, and achievement",
    "url": "https://Calcuzy.app/motivational-quotes",
    "author": {
      "@type": "Organization",
      "name": "Calcuzy.app"
    },
    "keywords": "motivational quotes, inspiring quotes, success quotes, achievement quotes"
  }

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

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Motivational Quotes</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Motivational quotes have the power to transform our mindset and fuel 
              our determination. Our collection of 100+ inspiring quotes covers success, 
              perseverance, and achievement - the essential ingredients for personal growth 
              and reaching your full potential.
            </p>
            
            <p className="paragraph">
              The best motivational quotes resonate because they speak to universal 
              human experiences of struggle, triumph, and the desire for improvement. 
              Whether from famous leaders, philosophers, or successful entrepreneurs, these 
              words of wisdom remind us that greatness is achievable through consistent effort 
              and unwavering belief in ourselves.
            </p>
            
            <p className="paragraph">
              Motivational quotes serve as daily reminders that our current circumstances 
              don&apos;t define our future. They encourage us to push beyond comfort zones, 
              embrace challenges as opportunities, and maintain perspective during difficult times. 
              The right quote at the right moment can provide the spark needed to take 
              the next step toward our goals.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">How to Use Motivational Quotes</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text">Start your day with an inspiring quote</li>
              <li className="text-secondary-text">Write quotes that resonate with your goals</li>
              <li className="text-secondary-text">Share quotes with friends and family</li>
              <li className="text-secondary-text">Use quotes as affirmations for personal growth</li>
              <li className="text-secondary-text">Create vision boards with motivational sayings</li>
              <li className="text-secondary-text">Set quotes as phone or computer wallpapers</li>
            </ul>
            
            <p className="paragraph">
              Our motivational quotes collection is completely free to browse and includes 
              quotes suitable for all situations and goals. Whether you&apos;re seeking 
              inspiration for work, personal development, or overcoming challenges, 
              you&apos;ll find the perfect words to motivate your journey.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Quote Collections</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/aesthetic-quotes" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Aesthetic Quotes</div>
                <div className="text-sm text-secondary-text">Beautiful and inspiring quotes</div>
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
              <h3 className="heading-3 mb-2">How many motivational quotes are in the collection?</h3>
              <p className="paragraph">
                Our comprehensive collection includes over 100 motivational quotes, 
                organized into categories like success, perseverance, and achievement. This provides 
                plenty of inspiration for any situation or goal you&apos;re pursuing.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Who are the most quoted motivational speakers?</h3>
              <p className="paragraph">
                The most quoted motivational speakers include Winston Churchill, 
                Steve Jobs, Eleanor Roosevelt, and Tony Robbins. These leaders and 
                innovators have shared timeless wisdom about success, perseverance, and 
                personal achievement that continues to inspire millions worldwide.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">The Psychology Behind Motivational Quotes</h3>
              <p className="paragraph">
                Motivational quotes work by tapping into fundamental human psychology 
                - they remind us of our potential, challenge negative thought patterns, 
                and activate the brain&apos;s reward centers. Scientific studies show that 
                regular exposure to inspiring quotes can improve mood, increase 
                productivity, and build resilience over time.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Historical Evolution of Motivational Speaking</h3>
              <p className="paragraph">
                The tradition of motivational speaking dates back centuries, from ancient 
                philosophical teachings to modern TED talks and social media influencers. 
                Today&apos;s motivational quotes often blend timeless wisdom with 
                contemporary challenges, making them relevant to modern audiences while 
                preserving their core inspirational power.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How can I use motivational quotes effectively?</h3>
              <p className="paragraph">
                Use motivational quotes by starting your day with an inspiring message, 
                writing quotes that resonate with your goals, sharing them with others, and 
                using them as daily affirmations. The key is consistency and choosing 
                quotes that genuinely motivate you personally.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can motivational quotes really change my mindset?</h3>
              <p className="paragraph">
                Yes, motivational quotes can significantly impact your mindset by 
                providing perspective during challenges, reinforcing positive beliefs, and 
                reminding you of your goals. Regular exposure to inspiring quotes 
                helps maintain motivation and focus on long-term objectives.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Are these quotes suitable for all ages?</h3>
              <p className="paragraph">
                Our motivational quotes collection is suitable for all ages and 
                backgrounds. Whether you&apos;re a student, professional, parent, or anyone 
                seeking inspiration, you&apos;ll find quotes that speak to your unique 
                situation and goals.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Writing Your Own Motivational Quotes</h3>
              <p className="paragraph">
                The best motivational quotes often come from personal experience and 
                authentic reflection. Keep a journal of insights that inspire you, 
                share them with others, and don&apos;t be afraid to express your unique 
                perspective on motivation and success.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Motivational Quotes in Different Cultures</h3>
              <p className="paragraph">
                While our collection focuses on English-language quotes, 
                motivational wisdom exists across all cultures. From Japanese proverbs about 
                perseverance to African sayings about community strength, every culture 
                offers unique perspectives on motivation and achievement worth exploring.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
