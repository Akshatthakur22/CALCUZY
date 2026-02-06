import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Countdown Timers - Holiday & Event Countdowns',
  description: 'Free countdown timers for all major holidays and events. Track days until Christmas, New Year, Halloween, Easter, Thanksgiving, Black Friday, and more. Accurate, real-time countdowns with timezone support.',
  keywords: 'countdown timers, holiday countdown, days until christmas, new year countdown, halloween countdown, event timers, holiday tracker',
  url: 'https://calcuzy.app/countdowns',
  image: '/og-default.png',
})

const countdowns = [
  {
    href: '/days-until-christmas',
    icon: '🎄',
    title: 'Christmas Countdown',
    description: 'Count down the days until Christmas. See exactly how long until Santa arrives!',
    gradient: 'from-red-50 to-green-50',
    iconBg: 'bg-red-100',
  },
  {
    href: '/days-until-new-year',
    icon: '🎊',
    title: 'New Year Countdown',
    description: 'Track the countdown to the New Year. Perfect for planning your celebrations.',
    gradient: 'from-purple-50 to-pink-50',
    iconBg: 'bg-purple-100',
  },
  {
    href: '/days-until-halloween',
    icon: '🎃',
    title: 'Halloween Countdown',
    description: 'Count down to Halloween. Perfect for planning costumes and decorations!',
    gradient: 'from-orange-50 to-amber-50',
    iconBg: 'bg-orange-100',
  },
  {
    href: '/thanksgiving-countdown',
    icon: '🦃',
    title: 'Thanksgiving Countdown',
    description: 'Track the days until Thanksgiving. Great for meal planning and preparation.',
    gradient: 'from-amber-50 to-yellow-50',
    iconBg: 'bg-amber-100',
  },
  {
    href: '/easter-countdown',
    icon: '🐰',
    title: 'Easter Countdown',
    description: 'Track the days until Easter. Perfect for planning egg hunts and celebrations.',
    gradient: 'from-blue-50 to-green-50',
    iconBg: 'bg-blue-100',
  },
  {
    href: '/black-friday-countdown',
    icon: '🛍️',
    title: 'Black Friday Countdown',
    description: 'Track the biggest shopping day of the year. Prepare your deals list!',
    gradient: 'from-slate-100 to-slate-50',
    iconBg: 'bg-slate-200',
  },
]

export default function CountdownsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Countdown Timers",
    "description": "Collection of countdown timers for holidays and special events",
    "url": "https://calcuzy.app/countdowns",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": countdowns.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.title,
        "url": `https://calcuzy.app${item.href}`
      }))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-white" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-br from-purple-100/30 via-transparent to-transparent rounded-full blur-3xl" />
          
          <div className="relative container mx-auto px-4 pt-20 pb-12 md:pt-28 md:pb-16">
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
                <span className="text-lg">⏱️</span>
                <span className="text-sm font-medium text-purple-600">Holiday Countdowns</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
                Countdown Timers
              </h1>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="paragraph">
                  Countdown timers serve as powerful tools for anticipation, planning, and celebration. Whether you're counting down to major holidays, tracking special events, or managing deadlines, our comprehensive collection of countdown timers provides precise, real-time tracking that helps you prepare and make the most of every moment. These tools combine accuracy with user-friendly design, ensuring you never miss an important date or celebration again.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Why Countdown Timers Matter</h3>
                  <ul className="space-y-3 text-blue-800">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold mt-1">•</span>
                      <span><strong>Event Planning:</strong> Countdowns help with preparation, scheduling, and coordination of celebrations and deadlines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold mt-1">•</span>
                      <span><strong>Anticipation Building:</strong> Creates excitement and psychological preparation for upcoming events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold mt-1">•</span>
                      <span><strong>Time Management:</strong> Provides clear timeline visualization for project planning and goal setting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold mt-1">•</span>
                      <span><strong>Shared Experience:</strong> Enables groups to synchronize countdowns for collective anticipation</span>
                    </li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Types of Countdown Timers & Their Applications</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Holiday Countdowns</h4>
                    <p className="text-slate-700 mb-4">Track major holidays like Christmas, New Year, Halloween, Easter, Thanksgiving, and more. Perfect for holiday planning, gift preparation, and celebration coordination.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Event Countdowns</h4>
                    <p className="text-slate-700 mb-4">Count down to weddings, birthdays, conferences, concerts, and personal milestones. Ideal for event planning and deadline tracking.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Personal Countdowns</h4>
                    <p className="text-slate-700 mb-4">Track fitness goals, project deadlines, savings targets, and personal objectives. Great for motivation and time management.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Business Countdowns</h4>
                    <p className="text-slate-700 mb-4">Product launches, marketing campaigns, quarterly reviews, and fiscal year endings. Essential for business planning and team coordination.</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Features of Our Countdown Timers</h3>
                <p className="paragraph mb-6">
                  Our countdown timers are designed with precision and user experience in mind. Each timer features automatic timezone detection, real-time updates every second, and responsive design that works perfectly on all devices. The interface displays days, hours, minutes, and seconds in a clear, readable format, making it easy to see exactly how much time remains at a glance. Additional features include the ability to share countdowns on social media, set notifications, and customize display preferences.
                </p>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-4">The Psychology of Countdown Timers</h3>
                <p className="paragraph mb-6">
                  Research shows that countdown timers tap into fundamental human psychology of anticipation and time perception. The visual representation of decreasing time creates urgency and motivation, while the structured timeline helps reduce anxiety about upcoming events. Countdowns also leverage the "goal gradient" effect—where motivation increases as the target date approaches—making them particularly effective for habit formation and deadline achievement. This psychological understanding explains why countdown timers are so popular for everything from New Year's resolutions to product launches.
                </p>
                
                <p className="paragraph">
                  Whether you're planning a major holiday celebration, tracking a personal goal, or coordinating with others, our countdown timers provide the structure and motivation needed to make every moment count. Explore our collection to find the perfect timer for your needs and start building anticipation for your next big moment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AdUnit slot={1} format="horizontal" />

        {/* Countdown Grid */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {countdowns.map((countdown, index) => (
                  <Link 
                    key={countdown.href}
                    href={countdown.href} 
                    className="group relative"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={`
                      relative bg-gradient-to-br ${countdown.gradient} 
                      rounded-2xl md:rounded-[20px] p-5 md:p-6
                      border border-slate-100
                      transition-all duration-300
                      hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                      hover:scale-[1.02]
                      active:scale-[0.98]
                    `}>
                      {/* Icon */}
                      <div className={`
                        w-12 h-12 md:w-14 md:h-14 ${countdown.iconBg} 
                        rounded-xl md:rounded-2xl flex items-center justify-center mb-4
                        group-hover:scale-110 transition-transform duration-300
                      `}>
                        <span className="text-2xl md:text-3xl">{countdown.icon}</span>
                      </div>
                      
                      {/* Content */}
                      <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                        {countdown.title}
                      </h2>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                        {countdown.description}
                      </p>
                      
                      {/* Arrow indicator */}
                      <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AdUnit slot={2} format="rectangle" />

        {/* Info Section */}
        <section className="py-12 md:py-16 bg-slate-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl md:rounded-[24px] p-6 md:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100">
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  About Our Countdown Timers
                </h2>
                <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
                  <p>
                    Our countdown timers provide real-time tracking for all major holidays and events. 
                    Each timer displays days, hours, minutes, and seconds remaining, automatically 
                    updating to ensure you never miss an important moment.
                  </p>
                  <p>
                    Whether you&apos;re planning holiday celebrations, tracking seasonal shopping events, 
                    or just excited about an upcoming occasion, our countdowns help you stay prepared 
                    and build anticipation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
