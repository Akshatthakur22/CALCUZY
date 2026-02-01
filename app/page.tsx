import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import SearchBar from '@/components/SearchBar'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Calcuzy - Your All-In-One Online Tools Platform',
  description: 'Smart calculators, generators, converters, finance tools, legal tools, naming tools, and daily utilities — all free, fast, and beautifully designed.',
  keywords: 'online tools platform, calculators, generators, converters, finance tools, legal tools, name generators, countdown timers, security tools, content tools',
  url: 'https://calcuzy.app',
  image: '/og-default.png',
})

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Calcuzy",
    "description": "Your All-In-One Online Tools Platform - Smart calculators, generators, converters, finance tools, legal tools, naming tools, and daily utilities",
    "url": "https://calcuzy.app",
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": "https://calcuzy.app?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      
      <main className="min-h-screen bg-primary-bg">
        {/* Hero Section */}
        <section className="container section-responsive py-20">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-text mb-6 leading-tight">
              Your All-In-One
              <br />
              <span className="text-accent">Online Tools Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-text mb-12 max-w-3xl mx-auto leading-relaxed">
              Smart calculators, generators, converters, finance tools, legal tools, naming tools, and daily utilities — all free, fast, and beautifully designed.
            </p>
            
            <SearchBar />
          </div>
        </section>

        <AdUnit slot={1} />

        {/* Categories Section */}
        <section className="container section-responsive py-16">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold text-primary-text mb-4">Explore Every Tool You Need</h2>
            <p className="text-xl text-secondary-text max-w-2xl mx-auto">
              From everyday calculations to specialized utilities, find everything in one place
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card animation="fade-in-up" delay={100}>
              <div className="text-center">
                <div className="text-4xl mb-4">🧮</div>
                <h3 className="heading-3 mb-3">Calculators</h3>
                <p className="paragraph text-sm mb-4">Age, BMI, loan, mortgage, and more specialized calculators</p>
                <Link href="/age-calculator" className="link-accent font-medium">Explore Calculators →</Link>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={200}>
              <div className="text-center">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="heading-3 mb-3">Countdowns</h3>
                <p className="paragraph text-sm mb-4">Track holidays, events, and important dates with precision</p>
                <Link href="/days-until-christmas" className="link-accent font-medium">View Countdowns →</Link>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={300}>
              <div className="text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="heading-3 mb-3">Legal Generators</h3>
                <p className="paragraph text-sm mb-4">Will generator, lease agreements, and legal document templates</p>
                <Link href="/will-generator" className="link-accent font-medium">Legal Tools →</Link>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={400}>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="heading-3 mb-3">Finance Tools</h3>
                <p className="paragraph text-sm mb-4">Tax calculators, investment tools, and budget planners</p>
                <Link href="/capital-gains-calculator" className="link-accent font-medium">Finance Tools →</Link>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={500}>
              <div className="text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="heading-3 mb-3">Home & Real Estate</h3>
                <p className="paragraph text-sm mb-4">Mortgage calculators, paint cost, and home improvement tools</p>
                <Link href="/paint-cost-calculator" className="link-accent font-medium">Home Tools →</Link>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={600}>
              <div className="text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="heading-3 mb-3">Name Generators</h3>
                <p className="paragraph text-sm mb-4">Baby names, pet names, business names, and more</p>
                <Link href="/dog-names" className="link-accent font-medium">Name Tools →</Link>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={700}>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="heading-3 mb-3">Security Tools</h3>
                <p className="paragraph text-sm mb-4">Password generators, strength checkers, and encryption tools</p>
                <Link href="/password-tools" className="link-accent font-medium">Security Tools →</Link>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={800}>
              <div className="text-center">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="heading-3 mb-3">PDF Tools</h3>
                <p className="paragraph text-sm mb-4">Merge, split, compress, and convert PDF files with ease</p>
                <Link href="/pdf-tools/pdf-merger" className="link-accent font-medium">PDF Tools →</Link>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={900}>
              <div className="text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="heading-3 mb-3">Quotes & Content</h3>
                <p className="paragraph text-sm mb-4">Inspirational quotes, content generators, and writing tools</p>
                <Link href="/motivational-quotes" className="link-accent font-medium">Content Tools →</Link>
              </div>
            </Card>
          </div>
        </section>

        <AdUnit slot={2} />

        {/* Trending Tools Section */}
        <section className="container section-responsive py-16">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold text-primary-text mb-4">Trending Tools Today</h2>
            <p className="text-xl text-secondary-text max-w-2xl mx-auto">
              The most popular tools people are using right now
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card animation="fade-in-up" delay={100}>
              <h3 className="heading-3 mb-3">Age Calculator</h3>
              <p className="paragraph text-sm mb-4">Calculate exact age in years, months, and days</p>
              <Link href="/age-calculator" className="link-accent font-medium text-sm">Calculate Age →</Link>
            </Card>

            <Card animation="fade-in-up" delay={200}>
              <h3 className="heading-3 mb-3">BMI Calculator</h3>
              <p className="paragraph text-sm mb-4">Check your body mass index instantly</p>
              <Link href="/bmi-calculator" className="link-accent font-medium text-sm">Calculate BMI →</Link>
            </Card>

            <Card animation="fade-in-up" delay={300}>
              <h3 className="heading-3 mb-3">Capital Gains Calculator</h3>
              <p className="paragraph text-sm mb-4">Calculate tax on investment profits</p>
              <Link href="/capital-gains-calculator" className="link-accent font-medium text-sm">Calculate Gains →</Link>
            </Card>

            <Card animation="fade-in-up" delay={400}>
              <h3 className="heading-3 mb-3">Crypto Tax Calculator</h3>
              <p className="paragraph text-sm mb-4">Simplify cryptocurrency tax calculations</p>
              <Link href="/crypto-tax-calculator" className="link-accent font-medium text-sm">Calculate Tax →</Link>
            </Card>

            <Card animation="fade-in-up" delay={500}>
              <h3 className="heading-3 mb-3">Ovulation Calculator</h3>
              <p className="paragraph text-sm mb-4">Track fertility and calculate fertile days</p>
              <Link href="/ovulation-calculator" className="link-accent font-medium text-sm">Track Ovulation →</Link>
            </Card>

            <Card animation="fade-in-up" delay={600}>
              <h3 className="heading-3 mb-3">Paint Cost Calculator</h3>
              <p className="paragraph text-sm mb-4">Estimate paint needed for your project</p>
              <Link href="/paint-cost-calculator" className="link-accent font-medium text-sm">Calculate Paint →</Link>
            </Card>

            <Card animation="fade-in-up" delay={700}>
              <h3 className="heading-3 mb-3">Will Generator</h3>
              <p className="paragraph text-sm mb-4">Create a legally sound will online</p>
              <Link href="/will-generator" className="link-accent font-medium text-sm">Generate Will →</Link>
            </Card>

            <Card animation="fade-in-up" delay={800}>
              <h3 className="heading-3 mb-3">PDF Merger</h3>
              <p className="paragraph text-sm mb-4">Combine multiple PDF files into one document</p>
              <Link href="/pdf-tools/pdf-merger" className="link-accent font-medium text-sm">Merge PDFs →</Link>
            </Card>

            <Card animation="fade-in-up" delay={900}>
              <h3 className="heading-3 mb-3">Password Tools</h3>
              <p className="paragraph text-sm mb-4">Generate secure passwords and test strength</p>
              <Link href="/password-tools" className="link-accent font-medium text-sm">Password Tools →</Link>
            </Card>
          </div>
        </section>

        {/* Why Calcuzy Section */}
        <section className="container section-responsive py-16">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold text-primary-text mb-4">Why Choose Calcuzy?</h2>
            <p className="text-xl text-secondary-text max-w-2xl mx-auto">
              Built for speed, accuracy, and simplicity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card animation="fade-in-up" delay={100} className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="heading-3 mb-3">Fast</h3>
              <p className="paragraph text-sm">Instant calculations and real-time results. No loading, no waiting.</p>
            </Card>

            <Card animation="fade-in-up" delay={200} className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="heading-3 mb-3">Accurate</h3>
              <p className="paragraph text-sm">Verified formulas and precise calculations you can trust.</p>
            </Card>

            <Card animation="fade-in-up" delay={300} className="text-center">
              <div className="text-4xl mb-4">🆓</div>
              <h3 className="heading-3 mb-3">Free Forever</h3>
              <p className="paragraph text-sm">Ad-supported, no login required. Always free, always accessible.</p>
            </Card>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="container section-responsive py-16">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold text-primary-text mb-4">Featured Categories</h2>
            <p className="text-xl text-secondary-text max-w-2xl mx-auto">
              Deep dives into our most comprehensive tool collections
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card animation="fade-in-up" delay={100} className="p-8">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">💰</div>
                <h3 className="heading-3">Finance Tools</h3>
              </div>
              <p className="paragraph text-sm mb-6">Complete financial planning toolkit with tax calculators, investment tools, loan calculators, and budget planners. Make informed financial decisions with confidence.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Tax Calculators</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Investment Tools</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Budget Planners</span>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={200} className="p-8">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">⚖️</div>
                <h3 className="heading-3">Legal Tools</h3>
              </div>
              <p className="paragraph text-sm mb-6">Professional legal document generators including wills, lease agreements, power of attorney forms, and more. Save thousands on legal fees with our validated templates.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Will Generator</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Legal Templates</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Document Tools</span>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={300} className="p-8">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🏠</div>
                <h3 className="heading-3">Home Tools</h3>
              </div>
              <p className="paragraph text-sm mb-6">Everything for homeowners and renters. Mortgage calculators, paint cost estimators, room dimension planners, and home improvement budget tools.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Mortgage Tools</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Paint Calculator</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Home Planning</span>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={400} className="p-8">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">📄</div>
                <h3 className="heading-3">PDF Tools</h3>
              </div>
              <p className="paragraph text-sm mb-6">Complete PDF toolkit with merger, splitter, compressor, and converters. Handle all your PDF needs in one place with professional-grade tools.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">PDF Merger</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">PDF Splitter</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">PDF Converter</span>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={500} className="p-8">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🤖</div>
                <h3 className="heading-3">AI Tools</h3>
              </div>
              <p className="paragraph text-sm mb-6">Coming soon: Advanced AI-powered tools including content generators, data analyzers, prediction models, and intelligent automation utilities.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">Coming Soon</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">AI Powered</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">Smart Tools</span>
              </div>
            </Card>
          </div>
        </section>

        {/* Trust Section */}
        <section className="container section-responsive py-16">
          <div className="text-center fade-in">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl mb-6">🌍</div>
              <h2 className="text-3xl font-bold text-primary-text mb-4">Trusted Worldwide</h2>
              <p className="text-xl text-secondary-text mb-8">
                Calcuzy is used by people in 150+ countries.
                <br />
                100% free. No sign-up. No data tracking.
              </p>
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">10M+</div>
                  <div className="text-sm text-secondary-text">Monthly Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">150+</div>
                  <div className="text-sm text-secondary-text">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">100+</div>
                  <div className="text-sm text-secondary-text">Tools Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdUnit slot={3} />

        {/* SEO Content Block */}
        <section className="container section-responsive py-16">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-3xl font-bold text-primary-text mb-6">The Complete Online Tools Platform for Modern Life</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="paragraph mb-6">
                In today&apos;s fast-paced digital world, having access to reliable online tools is essential for both personal and professional success. Calcuzy has emerged as the premier all-in-one platform that brings together every conceivable utility you might need, from complex financial calculations to simple everyday conversions. Our comprehensive suite of tools eliminates the need to bookmark multiple websites or switch between different applications, providing a seamless experience that saves time and boosts productivity.
              </p>
              
              <p className="paragraph mb-6">
                What sets Calcuzy apart is our unwavering commitment to excellence in every tool we offer. Whether you&apos;re calculating your BMI for health monitoring, determining capital gains taxes for investment planning, or generating a legal will for estate planning, each tool is meticulously designed with accuracy and user experience in mind. Our platform serves millions of users worldwide, from students and professionals to homeowners and entrepreneurs, all relying on our tools to make informed decisions quickly and confidently.
              </p>
              
              <p className="paragraph mb-6">
                The breadth of our offering is unmatched in the online tools space. Our calculators category covers everything from basic arithmetic to complex financial modeling, including age calculators that provide precise breakdowns in years, months, and days, BMI calculators for health tracking, and sophisticated investment calculators for financial planning. The countdown timers help users stay organized and prepared for important events, whether it&apos;s counting down to Christmas, New Year, or personal milestones. Our legal tools section provides access to professionally drafted document templates, including will generators that help users create legally sound estate plans without expensive attorney fees.
              </p>
              
              <p className="paragraph mb-6">
                Finance tools represent one of our most robust categories, featuring tax calculators that simplify complex tax computations, investment return calculators that help users make informed financial decisions, and budget planners that enable better money management. These tools are particularly valuable for individuals navigating the complexities of personal finance, small business owners managing their accounts, and investors tracking their portfolios. Each financial tool incorporates current tax laws and financial best practices, ensuring users receive accurate and actionable insights.
              </p>
              
              <p className="paragraph mb-6">
                Our home and real estate tools category addresses the practical needs of homeowners and renters alike. From mortgage calculators that help users understand their financing options to paint cost calculators that assist in home improvement planning, these tools empower users to make informed decisions about their living spaces. The name generators category showcases our creative side, helping users find the perfect names for babies, pets, businesses, and projects. Security tools demonstrate our commitment to digital safety, offering password generators and strength checkers that help users protect their online presence.
              </p>
              
              <p className="paragraph mb-6">
                The quotes and content tools category serves those seeking inspiration and assistance with content creation. From motivational quotes that provide daily encouragement to content generators that help overcome writer&apos;s block, these tools support both personal growth and professional development. What makes Calcuzy particularly valuable is that all these tools are available in one place, eliminating the friction of searching for and learning to use multiple different platforms.
              </p>
              
              <p className="paragraph mb-6">
                Looking toward the future, Calcuzy is actively developing AI-powered tools that will revolutionize how users interact with online utilities. These upcoming features will leverage artificial intelligence to provide even more sophisticated calculations, predictions, and automation capabilities. Our vision is to create an intelligent assistant that anticipates user needs and provides proactive solutions, making Calcuzy not just a collection of tools, but a comprehensive digital partner for modern life.
              </p>
              
              <p className="paragraph mb-6">
                The importance of having an all-in-one tools platform cannot be overstated in today&apos;s fragmented digital landscape. Users waste countless hours navigating between different websites, learning new interfaces, and managing multiple accounts. Calcuzy eliminates this inefficiency by providing a unified experience where every tool shares the same design language, quality standards, and user-friendly interface. This consistency means that once you&apos;re familiar with one Calcuzy tool, you can easily use any other tool on our platform without additional learning curves.
              </p>
              
              <p className="paragraph mb-6">
                Our commitment to accessibility and inclusivity ensures that Calcuzy serves users from all backgrounds and technical skill levels. Every tool is designed with intuitive interfaces that require no technical expertise, making advanced calculations and complex tasks accessible to everyone. The platform&apos;s responsive design ensures seamless functionality across all devices, from desktop computers to smartphones, allowing users to access their favorite tools wherever they are.
              </p>
              
              <p className="paragraph">
                Calcuzy represents the future of online utilities – a comprehensive, intelligent, and user-friendly platform that adapts to evolving user needs. As we continue to expand our tool library and incorporate cutting-edge technologies like artificial intelligence, we remain committed to our core values of accuracy, accessibility, and user privacy. Whether you&apos;re a student, professional, homeowner, or simply someone looking for reliable online tools, Calcuzy is your trusted partner in navigating the complexities of modern digital life. Join millions of users worldwide who have discovered the convenience and reliability of having all their online tools in one place.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container section-responsive py-16">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-3xl font-bold text-primary-text mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card>
                <h3 className="heading-3 mb-3">What is Calcuzy?</h3>
                <p className="paragraph text-sm">
                  Calcuzy is your all-in-one online tools platform offering 100+ free tools including calculators, generators, converters, finance tools, legal document generators, and daily utilities. Everything is designed to be fast, accurate, and easy to use.
                </p>
              </Card>
              
              <Card>
                <h3 className="heading-3 mb-3">Are these tools really free?</h3>
                <p className="paragraph text-sm">
                  Yes, all tools on Calcuzy are completely free forever. We&apos;re supported by non-intrusive advertisements, so you don&apos;t need to pay, sign up, or provide any personal information to use any of our tools.
                </p>
              </Card>
              
              <Card>
                <h3 className="heading-3 mb-3">How accurate are the calculators?</h3>
                <p className="paragraph text-sm">
                  Our calculators use verified formulas and are regularly updated to ensure accuracy. Financial tools incorporate current tax laws, health calculators follow medical guidelines, and all mathematical computations are precision-tested. However, always consult professionals for critical decisions.
                </p>
              </Card>
              
              <Card>
                <h3 className="heading-3 mb-3">Will more tools be added?</h3>
                <p className="paragraph text-sm">
                  Absolutely! We add new tools every month based on user feedback and trending needs. We&apos;re also developing AI-powered tools for future release. Check back regularly or follow our updates to discover new utilities.
                </p>
              </Card>
              
              <Card>
                <h3 className="heading-3 mb-3">Do I need to create an account?</h3>
                <p className="paragraph text-sm">
                  No account required. All tools work instantly without registration. We don&apos;t collect personal data, and all calculations happen locally in your browser for complete privacy.
                </p>
              </Card>
              
              <Card>
                <h3 className="heading-3 mb-3">How does Calcuzy earn money?</h3>
                <p className="paragraph text-sm">
                  Calcuzy is funded through advertisements displayed strategically on the site. This allows us to keep all tools free while maintaining high-quality service. We ensure ads are non-intrusive and don&apos;t interfere with tool functionality.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
  