import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import SearchBar from '@/components/SearchBar'
import { createMetadata } from '@/lib/metadata'
import { Language, getDictionary, createTranslationFunction, getAlternateLanguages } from '@/src/lib/i18n'

export async function generateMetadata({ params }: { params: { lang: Language } }) {
  const { lang } = params
  const dictionary = getDictionary(lang)
  const alternates = getAlternateLanguages(`/${lang}`)
  
  return createMetadata({
    title: dictionary.common.siteName + ' - ' + dictionary.common.tagline,
    description: dictionary.common.description,
    keywords: dictionary.common.keywords,
    url: `/${lang}`,
  }).metadataBase && {
    alternates: {
      canonical: `/${lang}`,
      languages: alternates as Record<string, string>,
    },
  }
}

export default async function HomePage({ params }: { params: { lang: Language } }) {
  const { lang } = params
  const dictionary = getDictionary(lang)
  const t = createTranslationFunction(dictionary)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": dictionary.common.siteName,
    "description": dictionary.common.description,
    "url": `https://calcuzy.app/${lang}`,
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": `https://calcuzy.app/${lang}?q={search_term_string}`,
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
              {t('homepage.heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-secondary-text mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('homepage.heroDescription')}
            </p>
            
            <SearchBar />
          </div>
        </section>

        <AdUnit slot={1} />

        {/* Categories Section */}
        <section className="container section-responsive py-16">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold text-primary-text mb-4">{t('homepage.categoriesTitle')}</h2>
            <p className="text-xl text-secondary-text max-w-2xl mx-auto">
              {t('homepage.categoriesSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card animation="fade-in-up" delay={100}>
              <div className="text-center">
                <div className="text-4xl mb-4">🧮</div>
                <h3 className="heading-3 mb-3">{t('common.tools')}</h3>
                <p className="paragraph text-sm mb-4">{t('homepage.categoriesDescription')}</p>
                <Link href={`/${lang}/age-calculator`} className="link-accent font-medium">{t('common.explore')} {t('common.tools')} →</Link>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={200}>
              <div className="text-center">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="heading-3 mb-3">{t('common.countdowns')}</h3>
                <p className="paragraph text-sm mb-4">{t('homepage.countdownsDescription')}</p>
                <Link href={`/${lang}/days-until-christmas`} className="link-accent font-medium">{t('common.viewAll')} {t('common.countdowns')} →</Link>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={300}>
              <div className="text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="heading-3 mb-3">{t('homepage.legalTools')}</h3>
                <p className="paragraph text-sm mb-4">{t('homepage.legalGeneratorsDescription')}</p>
                <Link href={`/${lang}/will-generator`} className="link-accent font-medium">{t('homepage.legalTools')} →</Link>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={400}>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="heading-3 mb-3">{t('homepage.financeTools')}</h3>
                <p className="paragraph text-sm mb-4">{t('homepage.financeToolsDescription')}</p>
                <Link href={`/${lang}/capital-gains-calculator`} className="link-accent font-medium">{t('homepage.financeTools')} →</Link>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={500}>
              <div className="text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="heading-3 mb-3">{t('homepage.homeTools')}</h3>
                <p className="paragraph text-sm mb-4">{t('homepage.homeRealEstateDescription')}</p>
                <Link href={`/${lang}/paint-cost-calculator`} className="link-accent font-medium">{t('common.home')} {t('common.tools')} →</Link>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={600}>
              <div className="text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="heading-3 mb-3">{t('common.names')}</h3>
                <p className="paragraph text-sm mb-4">{t('homepage.namesDescription')}</p>
                <Link href={`/${lang}/dog-names`} className="link-accent font-medium">{t('common.names')} {t('common.tools')} →</Link>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={700}>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="heading-3 mb-3">{t('homepage.securityTools')}</h3>
                <p className="paragraph text-sm mb-4">{t('homepage.securityToolsDescription')}</p>
                <Link href={`/${lang}/password-tools`} className="link-accent font-medium">{t('homepage.securityTools')} →</Link>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={800}>
              <div className="text-center">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="heading-3 mb-3">{t('homepage.pdfTools')}</h3>
                <p className="paragraph text-sm mb-4">{t('homepage.pdfToolsDescription')}</p>
                <Link href={`/${lang}/pdf-tools/pdf-merger`} className="link-accent font-medium">{t('homepage.pdfTools')} →</Link>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={900}>
              <div className="text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="heading-3 mb-3">{t('common.quotes')} & Content</h3>
                <p className="paragraph text-sm mb-4">{t('homepage.quotesContentDescription')}</p>
                <Link href={`/${lang}/motivational-quotes`} className="link-accent font-medium">{t('common.content')} {t('common.tools')} →</Link>
              </div>
            </Card>
          </div>
        </section>

        <AdUnit slot={2} />

        {/* Trending Tools Section */}
        <section className="container section-responsive py-16">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold text-primary-text mb-4">{t('homepage.featuredTitle')}</h2>
            <p className="text-xl text-secondary-text max-w-2xl mx-auto">
              {t('homepage.featuredSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card animation="fade-in-up" delay={100}>
              <h3 className="heading-3 mb-3">{t('tools.ageCalculator.title')}</h3>
              <p className="paragraph text-sm mb-4">{t('tools.ageCalculator.description')}</p>
              <Link href={`/${lang}/age-calculator`} className="link-accent font-medium text-sm">{t('common.calculate')} {t('tools.ageCalculator.title').split(' ')[0]} →</Link>
            </Card>

            <Card animation="fade-in-up" delay={200}>
              <h3 className="heading-3 mb-3">{t('tools.bmiCalculator.title')}</h3>
              <p className="paragraph text-sm mb-4">{t('tools.bmiCalculator.description')}</p>
              <Link href={`/${lang}/bmi-calculator`} className="link-accent font-medium text-sm">{t('common.calculate')} BMI →</Link>
            </Card>

            <Card animation="fade-in-up" delay={300}>
              <h3 className="heading-3 mb-3">{t('tools.capitalGainsCalculator.title')}</h3>
              <p className="paragraph text-sm mb-4">{t('tools.capitalGainsCalculator.description')}</p>
              <Link href={`/${lang}/capital-gains-calculator`} className="link-accent font-medium text-sm">{t('common.calculate')} Gains →</Link>
            </Card>

            <Card animation="fade-in-up" delay={400}>
              <h3 className="heading-3 mb-3">{t('tools.cryptoTaxCalculator.title')}</h3>
              <p className="paragraph text-sm mb-4">{t('tools.cryptoTaxCalculator.description')}</p>
              <Link href={`/${lang}/crypto-tax-calculator`} className="link-accent font-medium text-sm">{t('common.calculate')} Tax →</Link>
            </Card>

            <Card animation="fade-in-up" delay={500}>
              <h3 className="heading-3 mb-3">{t('tools.ovulationCalculator.title')}</h3>
              <p className="paragraph text-sm mb-4">{t('tools.ovulationCalculator.description')}</p>
              <Link href={`/${lang}/ovulation-calculator`} className="link-accent font-medium text-sm">{t('homepage.trackOvulation')} →</Link>
            </Card>

            <Card animation="fade-in-up" delay={600}>
              <h3 className="heading-3 mb-3">{t('tools.paintCostCalculator.title')}</h3>
              <p className="paragraph text-sm mb-4">{t('tools.paintCostCalculator.description')}</p>
              <Link href={`/${lang}/paint-cost-calculator`} className="link-accent font-medium text-sm">{t('common.calculate')} Paint →</Link>
            </Card>

            <Card animation="fade-in-up" delay={700}>
              <h3 className="heading-3 mb-3">{t('tools.willGenerator.title')}</h3>
              <p className="paragraph text-sm mb-4">{t('tools.willGenerator.description')}</p>
              <Link href={`/${lang}/will-generator`} className="link-accent font-medium text-sm">{t('tools.willGenerator.title').split(' ')[0]} →</Link>
            </Card>

            <Card animation="fade-in-up" delay={800}>
              <h3 className="heading-3 mb-3">{t('homepage.pdfTools')}</h3>
              <p className="paragraph text-sm mb-4">{t('homepage.pdfToolsDescription')}</p>
              <Link href={`/${lang}/pdf-tools/pdf-merger`} className="link-accent font-medium text-sm">{t('homepage.mergePdfs')} →</Link>
            </Card>

            <Card animation="fade-in-up" delay={900}>
              <h3 className="heading-3 mb-3">{t('tools.passwordTools.title')}</h3>
              <p className="paragraph text-sm mb-4">{t('tools.passwordTools.description')}</p>
              <Link href={`/${lang}/password-tools`} className="link-accent font-medium text-sm">{t('tools.passwordTools.title').split(' ')[0]} →</Link>
            </Card>
          </div>
        </section>

        {/* Why Calcuzy Section */}
        <section className="container section-responsive py-16">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold text-primary-text mb-4">{t('homepage.whyChooseCalcuzy')}</h2>
            <p className="text-xl text-secondary-text max-w-2xl mx-auto">
              {t('homepage.builtForSpeed')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card animation="fade-in-up" delay={100} className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="heading-3 mb-3">{t('homepage.fast')}</h3>
              <p className="paragraph text-sm">{t('homepage.fastDescription')}</p>
            </Card>

            <Card animation="fade-in-up" delay={200} className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="heading-3 mb-3">{t('homepage.accurate')}</h3>
              <p className="paragraph text-sm">{t('homepage.accurateDescription')}</p>
            </Card>

            <Card animation="fade-in-up" delay={300} className="text-center">
              <div className="text-4xl mb-4">🆓</div>
              <h3 className="heading-3 mb-3">{t('homepage.freeForever')}</h3>
              <p className="paragraph text-sm">{t('homepage.freeForeverDescription')}</p>
            </Card>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="container section-responsive py-16">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold text-primary-text mb-4">{t('homepage.featuredCategories')}</h2>
            <p className="text-xl text-secondary-text max-w-2xl mx-auto">
              {t('homepage.featuredCategoriesDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card animation="fade-in-up" delay={100} className="p-8">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">💰</div>
                <h3 className="heading-3">{t('homepage.financeTools')}</h3>
              </div>
              <p className="paragraph text-sm mb-6">{t('homepage.financeToolsLongDescription')}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">{t('homepage.tagTaxCalculators')}</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">{t('homepage.tagInvestmentTools')}</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">{t('homepage.tagBudgetPlanners')}</span>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={200} className="p-8">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">⚖️</div>
                <h3 className="heading-3">{t('homepage.legalTools')}</h3>
              </div>
              <p className="paragraph text-sm mb-6">{t('homepage.legalToolsLongDescription')}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">{t('homepage.tagWillGenerator')}</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">{t('homepage.tagLegalTemplates')}</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">{t('homepage.tagDocumentTools')}</span>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={300} className="p-8">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🏠</div>
                <h3 className="heading-3">{t('homepage.homeTools')}</h3>
              </div>
              <p className="paragraph text-sm mb-6">{t('homepage.homeToolsLongDescription')}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">{t('homepage.tagMortgageTools')}</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">{t('homepage.tagPaintCalculator')}</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">{t('homepage.tagHomePlanning')}</span>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={400} className="p-8">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">📄</div>
                <h3 className="heading-3">{t('homepage.pdfTools')}</h3>
              </div>
              <p className="paragraph text-sm mb-6">{t('homepage.pdfToolsLongDescription')}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">{t('homepage.tagPdfMerger')}</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">{t('homepage.tagPdfSplitter')}</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">{t('homepage.tagPdfConverter')}</span>
              </div>
            </Card>

            <Card animation="fade-in-up" delay={500} className="p-8">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🤖</div>
                <h3 className="heading-3">{t('homepage.aiTools')}</h3>
              </div>
              <p className="paragraph text-sm mb-6">{t('homepage.aiToolsLongDescription')}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">{t('homepage.tagComingSoon')}</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">{t('homepage.tagAiPowered')}</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">{t('homepage.tagSmartTools')}</span>
              </div>
            </Card>
          </div>
        </section>

        {/* Trust Section */}
        <section className="container section-responsive py-16">
          <div className="text-center fade-in">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl mb-6">🌍</div>
              <h2 className="text-3xl font-bold text-primary-text mb-4">{t('homepage.trustedWorldwide')}</h2>
              <p className="text-xl text-secondary-text mb-8">
                {t('homepage.trustedDescription')}
              </p>
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">10M+</div>
                  <div className="text-sm text-secondary-text">{t('homepage.monthlyUsers')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">150+</div>
                  <div className="text-sm text-secondary-text">{t('homepage.countries')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">100+</div>
                  <div className="text-sm text-secondary-text">{t('homepage.toolsAvailable')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdUnit slot={3} />

        {/* SEO Content Block */}
        <section className="container section-responsive py-16">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-3xl font-bold text-primary-text mb-6">{t('homepage.seoTitle')}</h2>
            
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
            <h2 className="text-3xl font-bold text-primary-text mb-8 text-center">{t('homepage.faqTitle')}</h2>
            
            <div className="space-y-6">
              <Card>
                <h3 className="heading-3 mb-3">{t('homepage.faqWhatIsCalcuzy')}</h3>
                <p className="paragraph text-sm">
                  {t('homepage.faqWhatIsCalcuzyAnswer')}
                </p>
              </Card>
              
              <Card>
                <h3 className="heading-3 mb-3">{t('homepage.faqAreToolsFree')}</h3>
                <p className="paragraph text-sm">
                  {t('homepage.faqAreToolsFreeAnswer')}
                </p>
              </Card>
              
              <Card>
                <h3 className="heading-3 mb-3">{t('homepage.faqHowAccurate')}</h3>
                <p className="paragraph text-sm">
                  {t('homepage.faqHowAccurateAnswer')}
                </p>
              </Card>
              
              <Card>
                <h3 className="heading-3 mb-3">{t('homepage.faqMoreTools')}</h3>
                <p className="paragraph text-sm">
                  {t('homepage.faqMoreToolsAnswer')}
                </p>
              </Card>
              
              <Card>
                <h3 className="heading-3 mb-3">{t('homepage.faqAccountRequired')}</h3>
                <p className="paragraph text-sm">
                  {t('homepage.faqAccountRequiredAnswer')}
                </p>
              </Card>
              
              <Card>
                <h3 className="heading-3 mb-3">{t('homepage.faqHowEarnMoney')}</h3>
                <p className="paragraph text-sm">
                  {t('homepage.faqHowEarnMoneyAnswer')}
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
  