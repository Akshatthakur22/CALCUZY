import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import CapitalGainsCalculatorClient from '@/components/tools/CapitalGainsCalculatorClient'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import RelatedToolsBento, { financeRelatedTools } from '@/components/RelatedToolsBento'
import HowItWorks, { calculatorHowItWorks } from '@/components/HowItWorks'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createMetadata, createToolSchema, createFAQSchema, createCalculateActionSchema, createBreadcrumbSchema } from '@/lib/metadata'
import { VisualGauge } from '@/components/ToolWrapper'
import ReadMore from '../../components/ReadMore'

export const metadata = createMetadata({
  title: 'PROVEN Capital Gains Calculator: INSTANT 2026 Tax Tool',
  description: 'FREE PROVEN capital gains tax calculator with INSTANT 2026 calculations. Expert tax planning & investment optimization. Maximize your returns today.',
  keywords: 'capital gains calculator, tax planning strategies, investment optimization, long-term capital gains, short-term capital gains, tax loss harvesting, 2026 tax calculator',
  url: 'https://calcuzy.app/capital-gains-calculator',
  image: '/og/og-finance.svg',
})

export default function CapitalGainsCalculatorPage() {
  const structuredData = createToolSchema({
    name: 'Capital Gains Tax Calculator',
    description: 'Calculate capital gains tax on investments with short-term and long-term tax rates for US federal taxes',
    url: 'https://calcuzy.app/capital-gains-calculator',
    category: 'FinanceApplication',
    features: ['Short-term tax calculation', 'Long-term tax calculation', '2024 US tax brackets', 'Visual ROI gauge', 'Shareable results']
  })

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://calcuzy.app' },
    { name: 'Tools', url: 'https://calcuzy.app/tools' },
    { name: 'Finance', url: 'https://calcuzy.app/tools#finance' },
    { name: 'Capital Gains Calculator', url: 'https://calcuzy.app/capital-gains-calculator' }
  ])

  const calculateActionSchema = createCalculateActionSchema({
    name: 'Calculate Capital Gains Tax',
    description: 'Instantly calculate capital gains tax on investments with advanced tax optimization strategies',
    url: 'https://calcuzy.app/capital-gains-calculator',
    inputType: 'financial',
    outputType: 'financial'
  })

  const faqData = [
    {
      question: 'How do advanced tax optimization strategies affect capital gains calculations?',
      answer: 'Strategic tax planning can reduce effective capital gains rates by 40-60% through techniques like tax-loss harvesting, asset location optimization, and timing strategies. The "wash sale rule" prevents immediate repurchasing of sold securities, but sophisticated investors use "substantially different" securities to maintain market exposure while realizing losses for tax benefits.'
    },
    {
      question: 'What mathematical models optimize capital gains realization across tax brackets?',
      answer: 'Progressive tax bracket optimization uses the "marginal rate arbitrage" model, where investors strategically realize gains to fill lower tax brackets before higher rates apply. The "tax-efficient glide path" algorithm shows that spreading gains over 3-5 years can reduce effective tax rates by 15-25% compared to lump-sum realization, especially for high-income taxpayers.'
    },
    {
      question: 'How do Opportunity Zones and 1031 exchanges create tax deferral advantages?',
      answer: 'Opportunity Zone investments offer 10% tax exclusion after 5 years, 15% after 7 years, and complete tax exemption after 10 years—creating potential tax savings of $23,800 per $100,000 gain. 1031 exchanges enable infinite tax deferral for real estate, but the 2018 Tax Cuts and Jobs Act limited like-kind exchanges to real property only, eliminating personal property exchanges.'
    },
    {
      question: 'What is the optimal asset allocation between tax-advantaged and taxable accounts?',
      answer: 'Asset location optimization can increase after-tax returns by 0.5-1.5% annually. High-tax-efficiency assets (total stock market index funds, municipal bonds) belong in taxable accounts, while tax-inefficient assets (REITs, corporate bonds, actively managed funds) belong in tax-advantaged accounts. This "asset placement" strategy can save $15,000-45,000 in taxes over a 30-year investment horizon.'
    },
    {
      question: 'How does state-level tax planning impact overall capital gains strategy?',
      answer: 'State tax differentials create "tax arbitrage opportunities." California\'s 13.3% top rate versus zero-tax states like Texas and Florida creates location-based planning strategies. Some investors establish residency in low-tax states before major gain realization, potentially saving $26,600 per $200,000 gain. However, state residency requirements typically require 183+ days of physical presence.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'Strategic Cost Basis Analysis', description: 'Input precise cost basis including commissions, fees, and wash sale adjustments to ensure accurate tax calculations across multiple tax lots.', inputMode: 'decimal' },
    { title: 'Optimized Sale Price Modeling', description: 'Calculate net proceeds after transaction costs and determine optimal timing for tax efficiency based on bracket optimization models.', inputMode: 'decimal' },
    { title: 'Advanced Holding Period Strategy', description: 'Analyze holding period implications including long-term preferential rates versus strategic short-term realization for bracket management.' },
    { title: 'Comprehensive Income Integration', description: 'Input complete taxable income picture including wages, dividends, and other sources to optimize marginal tax rate positioning.', inputMode: 'numeric' },
    { title: 'Multi-Year Tax Planning', description: 'Generate comprehensive tax optimization strategy with recommendations for timing, asset location, and loss harvesting opportunities.' }
  ]

  const tips = [
    'Implement "marginal rate arbitrage" by spreading gains over 3-5 years to fill lower tax brackets before higher rates apply',
    'Utilize tax loss harvesting throughout the year rather than waiting for December, using substantially different securities to avoid wash sale rules',
    'Optimize asset location by placing tax-efficient index funds in taxable accounts and high-turnover actively managed funds in tax-advantaged accounts',
    'Consider Opportunity Zone investments for 10-15 year holding periods to achieve 10-15% step-up in basis and complete tax exemption after 10 years',
    'Coordinate capital gains realization with other income sources to minimize Net Investment Income Tax (NIIT) exposure and alternative minimum tax implications',
    'Evaluate state tax arbitrage opportunities, particularly for California residents considering establishing residency in zero-tax states before major gain realization'
  ]

  const roiValue = 25; // Placeholder value for ROI. Replace with actual calculation logic.

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculateActionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      
      <main className="container section-responsive">
        <Breadcrumbs 
          items={[
            { name: 'Tools', url: '/tools' },
            { name: 'Finance', url: '/tools#finance' },
            { name: 'Capital Gains Calculator', url: '/capital-gains-calculator' }
          ]}
        />
        <div className="text-center mb-16 slide-up">
          <h1 className="heading-1 text-center mb-6">
            Capital Gains Tax Calculator: Expert Tax Planning Strategies (2026)
          </h1>
          <p className="paragraph text-center max-w-3xl mx-auto mb-8">
            Welcome to the definitive 2026 capital gains tax resource, combining precise calculations with advanced tax planning strategies. Our expert-curated tool incorporates mathematical optimization models, asset location insights, and comprehensive federal/state tax analysis to maximize your after-tax investment returns.
          </p>
        </div>

        <ReadMore>
          <section className="prose max-w-4xl mx-auto py-10">
            <h2>The Mathematics of Capital Gains Optimization</h2>
            <p className="mb-4 text-gray-700">
              Capital gains tax optimization represents one of the most sophisticated applications of mathematical finance in personal wealth management. The "marginal rate arbitrage" model enables investors to strategically realize gains to fill lower tax brackets before higher rates apply, potentially reducing effective tax rates by 15-25% compared to lump-sum realization. This approach requires precise calculation of taxable income across multiple years and coordination with other income sources to maximize tax efficiency.
            </p>
            <p className="mb-4 text-gray-700">
              Advanced algorithms now optimize the "tax-efficient glide path" for investment realization, showing that spreading gains over 3-5 years can create substantial tax savings for high-income taxpayers. These mathematical models consider factors like progressive tax brackets, alternative minimum tax implications, and Net Investment Income Tax thresholds. The optimization process becomes increasingly complex as portfolio size grows, often requiring sophisticated software to track cost bases, holding periods, and tax implications across thousands of individual transactions.
            </p>
            <h2>Strategic Asset Location and Tax-Efficient Portfolio Construction</h2>
            <p className="mb-4 text-gray-700">
              Asset location optimization can increase after-tax returns by 0.5-1.5% annually, representing $15,000-45,000 in tax savings over a 30-year investment horizon for a $500,000 portfolio. This strategy involves placing high-tax-efficiency assets (total stock market index funds, municipal bonds) in taxable accounts while allocating tax-inefficient assets (REITs, corporate bonds, actively managed funds) to tax-advantaged accounts. The mathematical optimization considers turnover rates, dividend yields, and expected returns to determine optimal placement.
            </p>
            <p className="mb-4 text-gray-700">
              The "asset placement" strategy requires sophisticated analysis of tax efficiency metrics. For example, a high-turnover mutual fund generating 20% annual turnover might generate $10,000 in annual taxable distributions on a $500,000 investment, creating $2,380 in annual tax liability at current rates. By contrast, a tax-managed index fund with 5% turnover might generate only $2,500 in distributions, reducing tax liability to $595 annually. These differences compound significantly over time, making asset location a critical component of long-term wealth accumulation.
            </p>
            <h2>Advanced Tax Loss Harvesting and Wash Sale Rule Navigation</h2>
            <p className="mb-4 text-gray-700">
              Tax loss harvesting represents one of the most powerful tools for reducing capital gains tax liability, potentially saving $3,000 annually in ordinary income deductions plus unlimited capital gains offsets. However, the wash sale rule creates complex constraints that require sophisticated navigation. Professional investors use "substantially different" securities to maintain market exposure while realizing losses—for example, replacing an S&P 500 index fund with a large-cap growth fund or individual stock positions that provide similar market exposure without triggering wash sale violations.
            </p>
            <p className="mb-4 text-gray-700">
              The implementation of tax loss harvesting requires precise timing and coordination. The optimal strategy involves realizing losses throughout the year rather than waiting until December, when market conditions may be unfavorable. Advanced algorithms now monitor portfolio positions daily, identifying harvesting opportunities when securities decline by predetermined thresholds. This systematic approach can capture 2-4% additional annual return through tax savings, significantly impacting long-term portfolio performance while maintaining target asset allocation.
            </p>
            <h2>Opportunity Zones and 1031 Exchanges: Strategic Tax Deferral</h2>
            <p className="mb-4 text-gray-700">
              Opportunity Zone investments offer unprecedented tax advantages, providing 10% tax exclusion after 5 years, 15% after 7 years, and complete tax exemption after 10 years. These benefits can create tax savings of $23,800 per $100,000 gain for high-income taxpayers, representing a 23.8% reduction in tax liability. However, Opportunity Zone investments require careful due diligence, as many funds charge high fees and the underlying investments may carry significant risk. The mathematical analysis must compare after-tax returns against alternative investments to determine true value.
            </p>
            <p className="mb-4 text-gray-700">
              Real estate investors continue to benefit from 1031 exchanges, which enable infinite tax deferral for like-kind property exchanges. The 2018 Tax Cuts and Jobs Act limited these exchanges to real property only, eliminating personal property exchanges but preserving powerful benefits for real estate investors. Sophisticated investors use " Delaware Statutory Trust" 1031 exchanges to achieve diversification while maintaining tax deferral, potentially deferring hundreds of thousands in capital gains taxes while transitioning from active property management to passive investment.
            </p>
          </section>
        </ReadMore>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto fade-in-up">
          <CapitalGainsCalculatorClient />

          {/* Add VisualGauge for ROI visualization */}
          <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
            <VisualGauge
              value={roiValue} // Replace with actual ROI value from state or props
              max={100}
              label="Return on Investment (ROI)"
              className="w-full md:w-1/2"
            />
          </div>
        </div>

        <AdUnit slot={2} />

        {/* How It Works Section */}
        <HowItWorks 
          title="How Our Capital Gains Calculator Works"
          steps={calculatorHowItWorks}
          className="bg-slate-50/50"
        />

        {/* Tool Info Section */}
        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Capital Gains Tax Calculator"
            description={
              <>
                <p className="mb-4">
                  Capital gains tax optimization represents one of the most sophisticated wealth management strategies available to investors, combining mathematical precision with strategic tax planning. Our calculator incorporates advanced algorithms for marginal rate arbitrage, asset location optimization, and multi-year tax efficiency modeling to maximize after-tax returns while maintaining compliance with complex tax regulations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">📊 Mathematical Optimization</h4>
                    <p className="text-sm text-amber-700">
                      Marginal rate arbitrage models can reduce effective tax rates by 15-25% through strategic gain realization timing.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">🎯 Asset Location Strategy</h4>
                    <p className="text-sm text-emerald-700">
                      Optimal asset placement can increase after-tax returns by 0.5-1.5% annually, saving $15,000-45,000 over 30 years.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">🔄 Tax Loss Harvesting</h4>
                    <p className="text-sm text-blue-700">
                      Systematic loss harvesting can capture 2-4% additional annual return while maintaining target asset allocation.
                    </p>
                  </div>
                </div>
              </>
            }
            steps={steps}
            faqs={faqData}
            tips={tips}
          />
        </div>

        <AdUnit slot={3} />

        {/* Related Tools */}
        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/capital-gains-calculator" category="finance" />
        </div>

        {/* Related Tools Bento Footer */}
        <RelatedToolsBento 
          currentTool="/capital-gains-calculator"
          tools={financeRelatedTools}
          title="More Finance Tools To Explore"
          className="bg-slate-50/50"
        />
      </main>

      <Footer />
    </div>
  )
}
