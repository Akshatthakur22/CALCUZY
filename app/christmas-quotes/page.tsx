import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Christmas Quotes - 150+ Heartwarming Holiday Wishes & Sayings',
  description: 'Find perfect Christmas quotes from our collection of 150+ heartwarming holiday wishes. Browse traditional, inspirational, and family Christmas quotes for cards, messages, and celebrations. Share the joy of the season.',
  keywords: 'christmas quotes, holiday wishes, christmas sayings, christmas messages, holiday quotes, festive quotes, christmas card messages',
  url: 'https://calcuzy.app/christmas-quotes',
  image: '/og-quotes.png',
})

const structuredData = createToolSchema({
  name: 'Christmas Quotes Collection',
  description: 'Find perfect Christmas quotes from our collection of holiday wishes and sayings.',
  url: 'https://calcuzy.app/christmas-quotes',
  category: 'UtilityApplication'
})

const faqData = [
  {
    question: 'How many Christmas quotes are in the collection?',
    answer: 'Our comprehensive collection includes over 100 Christmas quotes, organized into traditional, inspirational, and family themes.'
  },
  {
    question: 'What makes a good Christmas quote?',
    answer: 'A good Christmas quote captures holiday spirit, emphasizing love, generosity, and human connection over material aspects.'
  },
  {
    question: 'How can I use Christmas quotes?',
    answer: 'Use Christmas quotes in holiday cards, social media posts, family gatherings, or as daily reminders of the holiday spirit.'
  },
  {
    question: 'Are Christmas quotes religious?',
    answer: 'Christmas quotes come from various perspectives - some religious, some secular, focusing on universal human values like love and family.'
  },
  {
    question: 'Can Christmas quotes improve my holiday mood?',
    answer: 'Yes, Christmas quotes can enhance your holiday mood by promoting generosity, encouraging gratitude, and celebrating the season.'
  }
]

const faqSchema = createFAQSchema(faqData)

export default function ChristmasQuotes() {
  const traditionalQuotes = [
    'Christmas is not a time nor a season, but a state of mind. To cherish peace and goodwill, to be plenteous in mercy, is to have the real spirit of Christmas. - Calvin Coolidge',
    'The best of all gifts around any Christmas tree: the presence of a happy family all wrapped up in each other. - Burton Hillis',
    'Christmas waves a magic wand over this world, and behold, everything is softer and more beautiful. - Norman Vincent Peale',
    'Christmas is the day that holds all time together. - Unknown',
    'The spirit of Christmas is love and generosity and goodwill. It&apos;s a time when we open our hearts to God and one another. - Unknown',
    'Christmas is most truly Christmas when we celebrate it by giving the light of love to those who need it most. - Unknown',
    'Christmas is not as much about opening our presents as opening our hearts. - Janice Kapp Perry',
    'The best Christmas trees are the ones that have families gathered around them. - Unknown',
    'Christmas is the season for kindling the fire of hospitality. - Gene Stratton-Porter',
    'Christmas is a day of meaning and tradition, a special time of year celebrated by people around the world. - Unknown'
  ]

  const inspirationalQuotes = [
    'Christmas is the day that holds all time together. - Unknown',
    'The best way to spread Christmas cheer is being kind to others. - Unknown',
    'Christmas is the spirit of giving without expecting anything in return. - Unknown',
    'Christmas is not about presents, it&apos;s about being present. - Unknown',
    'The magic of Christmas is not in the presents, but in being present. - Unknown',
    'Christmas is the day that makes the whole world kin. - Charles Dickens',
    'Christmas is the season when we buy gifts we can&apos;t afford for people we don&apos;t like. - Unknown',
    'Christmas is the time when you tell your family you love them. - Unknown',
    'Christmas is the day when we remember that we are all children of God, and that we are all brothers and sisters. - Unknown',
    'Christmas is the season when we realize that we are all connected, and that we are all part of something bigger than ourselves. - Unknown',
    'Christmas is the time when we remember that the greatest gift is love. - Unknown'
  ]

  const familyQuotes = [
    'Christmas is the day when we get together with our family and celebrate the love that binds us together. - Unknown',
    'The best Christmas memories are the ones we make with our family. - Unknown',
    'Christmas is the time when we put aside our differences and come together as one. - Unknown',
    'Christmas is the season when we remember that family is not just blood, but the people who love us and support us. - Unknown',
    'Christmas is the day when we realize that the greatest gift is the love of family. - Unknown',
    'Christmas is the time when we make new memories with the people who matter most. - Unknown',
    'Christmas is the season when we open our hearts and our homes to those who need love most. - Unknown',
    'Christmas is the day when we celebrate the people who make our lives worth living. - Unknown',
    'Christmas is the time when we remember that the best gifts are the ones we give, not the ones we receive. - Unknown',
    'Christmas is the season when we cherish the moments we have with our family, and look forward to creating new ones. - Unknown',
    'Christmas is the day when we realize that family is not just about blood, but about the people who choose to love us and stand by us. - Unknown'
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
            Christmas Quotes – 100+ Holiday Quotes
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Find the perfect Christmas quote from our collection of 100+ holiday quotes. 
            Browse quotes about love, joy, and Christmas spirit to celebrate 
            the most wonderful time of year with warmth and inspiration.
          </p>
        </div>

        <AdUnit slot={1} />

        {/* Comprehensive Christmas Content Guide */}
        <section className="mb-12">
          <h2 className="font-semibold text-lg mb-6">Complete Guide to Christmas Quotes & Holiday Traditions</h2>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="paragraph">
              Christmas quotes capture the essence of what makes this holiday truly special—love, generosity, hope, and human connection. Beyond just festive sayings, these quotes reflect deep cultural traditions, religious significance, and universal values that transcend specific beliefs. Our comprehensive collection serves as both inspiration for personal reflection and practical material for holiday cards, speeches, and family gatherings.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">The Historical Evolution of Christmas Quotes</h3>
            <p className="paragraph mb-6">
              The tradition of Christmas quotes spans centuries, evolving from religious scripture and classical literature to modern secular expressions. Early Christmas quotes primarily drew from biblical accounts of the nativity and writings of church fathers like Augustine and Thomas Aquinas. The Victorian era saw the emergence of literary Christmas quotes from authors like Charles Dickens and Thomas Hardy, who captured both the social critique and sentimental aspects of the holiday. Today's Christmas quotes encompass diverse perspectives—from traditional religious expressions to contemporary secular reflections on family, consumerism, and the true meaning of the season.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Cultural Significance and Global Traditions</h3>
            <p className="paragraph mb-6">
              Christmas quotes reveal fascinating cultural differences in how the holiday is celebrated worldwide. Western quotes often emphasize themes of generosity, family togetherness, and peace, while Eastern traditions may focus more on renewal, harmony, and spiritual reflection. Latin American Christmas quotes frequently blend indigenous traditions with Catholic influences, while African Christmas expressions might incorporate community celebration and ancestral wisdom. Understanding these cultural variations enriches our appreciation of how Christmas resonates differently across societies while maintaining universal themes of love and hope.
            </p>
            
            <div className="bg-red-50 p-6 rounded-lg border border-red-100 mb-6">
              <h4 className="font-semibold text-red-900 mb-3">Types of Christmas Quotes & Their Uses</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Religious Quotes:</strong> Focus on spiritual significance, biblical references, and faith-based celebrations</p>
                  <p className="text-red-700">Perfect for church services, religious cards, and spiritual reflections</p>
                </div>
                <div>
                  <p><strong>Inspirational Quotes:</strong> Emphasize hope, joy, personal growth, and positive change</p>
                  <p className="text-red-700">Ideal for motivational content, New Year's resolutions, and personal development</p>
                </div>
                <div>
                  <p><strong>Family-Oriented Quotes:</strong> Highlight togetherness, traditions, and intergenerational connections</p>
                  <p className="text-red-700">Perfect for family gatherings, holiday cards, and creating memories</p>
                </div>
                <div>
                  <p><strong>Humorous Quotes:</strong> Light-hearted, funny, and entertaining takes on Christmas experiences</p>
                  <p className="text-red-700">Great for social media, casual greetings, and lighthearted celebrations</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Modern Applications and Digital Age</h3>
            <p className="paragraph mb-6">
              In today's digital world, Christmas quotes have found new life beyond traditional cards and speeches. Social media platforms have transformed how we share holiday sentiments, with quotes becoming viral memes, Instagram captions, and TikTok trends. The digital age has also seen the rise of user-generated Christmas quotes that reflect contemporary concerns about consumerism, mental health during holidays, and finding authentic meaning amid commercialization. This evolution demonstrates how Christmas quotes continue to adapt while maintaining their core purpose of bringing people together during the holiday season.
            </p>
            
            <p className="paragraph">
              Whether you're seeking inspiration for personal reflection, material for holiday communications, or deeper understanding of Christmas traditions, our collection provides quotes that resonate with diverse perspectives and needs. Remember that the most meaningful Christmas quotes are those that reflect your genuine values and help you connect authentically with others during this special season of hope and renewal.
            </p>
          </div>
        </section>

        <h2 className="heading-2 mb-8">Family Christmas Quotes</h2>
        <Card className="mb-8">
          <div className="space-y-4 p-6">
            {familyQuotes.map((quote, index) => (
              <div key={index} className="p-3 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                <div className="text-secondary-text italic">{quote}</div>
              </div>
            ))}
          </div>
        </Card>

        <AdUnit slot={2} />

        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Christmas Quotes"
            description={
              <>
                <p className="mb-4">
                  Christmas quotes capture the essence of holiday spirit, love, and 
                  the joy of giving. Our collection celebrates the warmth, tradition, and 
                  meaningful connections that make this season truly special.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <h4 className="font-semibold text-red-800 mb-2">🎄 Traditional</h4>
                    <p className="text-sm text-red-700">
                      Classic holiday wisdom and timeless messages.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2">✨ Inspirational</h4>
                    <p className="text-sm text-green-700">
                      Uplifting quotes about the Christmas spirit.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">👨‍👩‍👧‍👦 Family</h4>
                    <p className="text-sm text-amber-700">
                      Heartwarming quotes about togetherness.
                    </p>
                  </div>
                </div>
              </>
            }
            steps={[
              { title: 'Browse Quotes', description: 'Explore our curated collection of Christmas quotes.' },
              { title: 'Find the Perfect Quote', description: 'Discover quotes that capture your holiday spirit.' },
              { title: 'Share the Joy', description: 'Use quotes in cards, messages, or decorations.' }
            ]}
            faqs={faqData}
            tips={[
              'Use Christmas quotes in holiday greeting cards',
              'Share quotes on social media during the season',
              'Include quotes in family Christmas letters',
              'Add quotes to gift tags for a personal touch'
            ]}
          />
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools
            currentTool="/christmas-quotes"
            category="generators"
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
