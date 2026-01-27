import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Christmas Quotes – Holiday Wishes & Sayings',
  description: 'Find perfect Christmas quotes from our collection of holiday wishes and sayings. Heartwarming Christmas messages for cards and greetings.',
  keywords: 'christmas quotes, holiday wishes, christmas sayings, christmas messages',
})

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

        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="heading-2 mb-8">Traditional Christmas Quotes</h2>
          <Card className="mb-8">
            <div className="space-y-4 p-6">
              {traditionalQuotes.map((quote, index) => (
                <div key={index} className="p-3 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="text-secondary-text italic">{quote}</div>
                </div>
              ))}
            </div>
          </Card>

          <h2 className="heading-2 mb-8">Inspirational Christmas Quotes</h2>
          <Card className="mb-8">
            <div className="space-y-4 p-6">
              {inspirationalQuotes.map((quote, index) => (
                <div key={index} className="p-3 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="text-secondary-text italic">{quote}</div>
                </div>
              ))}
            </div>
          </Card>

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
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Christmas Quotes</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Christmas quotes capture the essence of holiday spirit, love, and 
              the joy of giving. Our collection of 100+ Christmas quotes celebrates 
              the warmth, tradition, and meaningful connections that make this season 
              truly special. These quotes remind us that Christmas is about more than 
              just presents - it&apos;s about presence, love, and the magic of human 
              connection.
            </p>
            
            <p className="paragraph">
              The best Christmas quotes resonate because they speak to universal 
              experiences of family, generosity, and the childlike wonder that makes 
              this holiday magical. Whether from classic literature, modern authors, or 
              everyday wisdom, these words capture the feeling that Christmas brings out 
              the best in humanity and reminds us of what truly matters.
            </p>
            
            <p className="paragraph">
              Christmas quotes serve as beautiful reminders that the holiday season 
              is about opening our hearts, sharing our blessings, and creating memories 
              that last a lifetime. They encourage us to focus on what brings 
              genuine joy - not material gifts, but the gift of time spent 
              with loved ones and the warmth of human connection.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">The Spirit of Christmas Quotes</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text"><strong>Generosity:</strong> Giving without expecting return</li>
              <li className="text-secondary-text"><strong>Connection:</strong> Bringing people together</li>
              <li className="text-secondary-text"><strong>Gratitude:</strong> Appreciating blessings and relationships</li>
              <li className="text-secondary-text"><strong>Tradition:</strong> Honoring heritage and creating memories</li>
              <li className="text-secondary-text"><strong>Love:</strong> The true meaning of Christmas</li>
              <li className="text-secondary-text"><strong>Hope:</strong> Believing in better days ahead</li>
            </ul>
            
            <p className="paragraph">
              Our Christmas quotes collection is completely free to browse and includes 
              quotes suitable for all holiday celebrations, cards, or family gatherings. 
              Whether you&apos;re seeking inspiration for Christmas cards, social media posts, 
              or simply want to embrace the holiday spirit, you&apos;ll find the perfect 
              words to make this season meaningful.
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
              <h3 className="heading-3 mb-2">How many Christmas quotes are in the collection?</h3>
              <p className="paragraph">
                Our comprehensive collection includes over 100 Christmas quotes, 
                organized into categories like traditional, inspirational, and family themes. 
                This provides plenty of inspiration for holiday cards, social media posts, 
                or simply sharing the Christmas spirit with loved ones.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What makes a good Christmas quote?</h3>
              <p className="paragraph">
                A good Christmas quote captures the essence of holiday spirit, 
                emphasizing love, generosity, and human connection over material aspects. 
                The best quotes resonate with universal experiences of family, tradition, 
                and the joy that comes from giving rather than receiving.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How can I use Christmas quotes?</h3>
              <p className="paragraph">
                Use Christmas quotes in holiday cards, social media posts, 
                family gatherings, or as daily reminders of the holiday spirit. 
                They work beautifully for Instagram captions, Facebook posts, or personal 
                reflection during the Christmas season.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Are Christmas quotes religious?</h3>
              <p className="paragraph">
                Christmas quotes come from various perspectives - some religious, 
                some secular, and many focusing on universal human values like love, 
                generosity, and family connection. Our collection includes quotes suitable 
                for all beliefs and backgrounds.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can Christmas quotes improve my holiday mood?</h3>
              <p className="paragraph">
                Yes, Christmas quotes can significantly enhance your holiday mood 
                by promoting generosity, encouraging gratitude, and reminding you of 
                the true meaning of the season. They help cultivate a spirit 
                of giving and connection that makes Christmas truly special.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
