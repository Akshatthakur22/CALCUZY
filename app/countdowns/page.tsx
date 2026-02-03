import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdUnit from '@/components/AdUnit'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Countdown Timers',
  description: 'Free countdown timers for holidays and events. Track days until Christmas, New Year, Halloween, Easter, Thanksgiving and more. Simple, fast, and accurate.',
  keywords: 'countdown timers, holiday countdown, days until christmas, new year countdown, event timers',
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
              <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Track the days, hours, and minutes until your favorite holidays and special events. 
                Simple, accurate, and always up-to-date.
              </p>
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
