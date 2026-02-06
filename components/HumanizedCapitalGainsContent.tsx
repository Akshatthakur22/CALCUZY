'use client'

import { useState } from 'react'
import Card from '@/components/Card'

interface ContentSection {
  title: string
  content: React.ReactNode
}

export default function HumanizedCapitalGainsContent() {
  const [activeTab, setActiveTab] = useState<'overview' | 'brackets' | 'stocks' | 'math'>('overview')

  const content: Record<string, ContentSection> = {
    overview: {
      title: "Understanding Capital Gains: The Foundation of Wealth Building",
      content: (
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            Capital gains represent the lifeblood of successful investing—the tangible profit that transforms market participation into genuine wealth creation. When you sell an investment for more than you paid, the difference isn't just a number on a screen; it's the culmination of research, patience, and strategic decision-making. Yet many investors focus solely on the gross return while overlooking the critical impact of taxes, which can consume anywhere from 0% to 37% of their profits depending on how they structure their investments.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">The Critical Distinction: Short-term vs. Long-term</h4>
            <p className="text-blue-700">
              The Internal Revenue Service draws a hard line at the one-year mark. Hold an investment for 364 days, and your profits face ordinary income tax rates—the same rates applied to your salary. Hold it for 366 days, and you unlock preferential long-term capital gains rates that can be substantially lower. This single distinction has created millionaires and preserved family fortunes across generations.
            </p>
          </div>

          <p className="leading-relaxed">
            Consider this scenario: Two investors each sell $100,000 in stock gains. The first investor held for 11 months and falls in the 32% tax bracket, paying $32,000 in taxes. The second investor waited just one more month, qualifying for the 15% long-term rate and paying only $15,000. That extra month of patience saved $17,000—enough to fund a child's education or purchase a new car. This isn't just tax planning; it's wealth preservation at its most fundamental level.
          </p>

          <p className="leading-relaxed">
            The mathematics become even more compelling when you factor in compound growth. That $17,000 tax savings, if reinvested and earning 8% annually, grows to over $36,000 in ten years. Over a 30-year investment horizon, the difference between strategic tax planning and tax ignorance can exceed $150,000 per $100,000 of gains. These numbers aren't abstract—they represent the difference between financial independence and continued financial stress.
          </p>
        </div>
      )
    },
    
    brackets: {
      title: "US Tax Brackets 2026: Strategic Planning for Maximum Efficiency",
      content: (
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            The United States tax code operates on a progressive system where higher income levels face higher tax rates. However, capital gains enjoy special treatment that creates strategic opportunities for savvy investors. Understanding these brackets isn't just about compliance—it's about optimization.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold text-emerald-700 mb-4 text-lg">2026 Long-Term Capital Gains Rates</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-emerald-100">
                  <span className="font-medium">0% Rate</span>
                  <span className="text-emerald-600">Up to $44,625 (Single)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-emerald-100">
                  <span className="font-medium">0% Rate</span>
                  <span className="text-emerald-600">Up to $89,250 (Married)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-emerald-100">
                  <span className="font-medium">15% Rate</span>
                  <span className="text-emerald-600">$44,626 - $492,300 (Single)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-emerald-100">
                  <span className="font-medium">15% Rate</span>
                  <span className="text-emerald-600">$89,251 - $553,850 (Married)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">20% Rate</span>
                  <span className="text-emerald-600">Above $492,300 (Single)</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-red-700 mb-4 text-lg">2026 Short-Term Capital Gains Rates</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-red-100">
                  <span className="font-medium">10% Rate</span>
                  <span className="text-red-600">Up to $11,000 (Single)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-red-100">
                  <span className="font-medium">12% Rate</span>
                  <span className="text-red-600">$11,001 - $44,725 (Single)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-red-100">
                  <span className="font-medium">22% Rate</span>
                  <span className="text-red-600">$44,726 - $95,375 (Single)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-red-100">
                  <span className="font-medium">24% Rate</span>
                  <span className="text-red-600">$95,376 - $182,050 (Single)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">32-37% Rate</span>
                  <span className="text-red-600">Above $182,050 (Single)</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
            <h4 className="font-semibold text-amber-800 mb-3">The Strategic Opportunity: Tax Bracket Arbitrage</h4>
            <p className="text-amber-700 leading-relaxed">
              The most sophisticated investors don't just avoid high tax rates—they strategically manage their income to maximize the 0% long-term capital gains bracket. A married couple with $80,000 in ordinary income could realize up to $9,250 in long-term gains tax-free. Over multiple years, this strategy can save tens of thousands in taxes while building substantial wealth. The key is coordinating capital gains realization with other income sources to stay within these thresholds.
            </p>
          </div>

          <p className="leading-relaxed">
            Beyond federal rates, state taxes add another layer of complexity. California's top rate of 13.3% combined with federal rates can exceed 33% total tax on short-term gains. Conversely, states like Texas, Florida, and Nevada impose no state income tax, creating significant arbitrage opportunities for mobile professionals and retirees. Some high-net-worth individuals establish residency in tax-friendly states before major liquidity events, potentially saving six figures on a single transaction.
          </p>

          <p className="leading-relaxed">
            The Net Investment Income Tax (NIIT) adds 3.8% to capital gains taxes for individuals with modified adjusted gross income above $200,000 (single) or $250,000 (married). This additional tax affects many high-income investors and must be factored into any comprehensive tax strategy. Sophisticated planning involves not just managing capital gains but coordinating all investment income to minimize NIIT exposure.
          </p>
        </div>
      )
    },

    stocks: {
      title: "Stocks vs. Mutual Funds: Tax Efficiency Analysis",
      content: (
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            The choice between individual stocks and mutual funds extends far beyond diversification and professional management—it has profound tax implications that can significantly impact after-tax returns. Understanding these differences is crucial for tax-efficient investing.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-emerald-50 border-emerald-200">
              <h4 className="font-semibold text-emerald-800 mb-4 text-lg">Individual Stocks: Tax Control</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span><strong>Complete control</strong> over when to realize gains and losses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span><strong>No forced distributions</strong>—you decide the timing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span><strong>Tax loss harvesting</strong> flexibility on your schedule</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span><strong>Specific identification</strong> of shares for optimal tax treatment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span><strong>No embedded gains</strong> when you purchase</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-blue-50 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-4 text-lg">Mutual Funds: Professional Management</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Forced distributions</strong> regardless of your tax situation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Embedded capital gains</strong> from previous fund trading</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>High turnover</strong> can generate significant taxable events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Year-end distributions</strong> often surprise investors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Professional management</strong> but with tax inefficiency</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="bg-slate-50 border-l-4 border-slate-400 p-6 rounded-lg">
            <h4 className="font-semibold text-slate-800 mb-3">Case Study: The Hidden Tax Cost</h4>
            <p className="text-slate-700 leading-relaxed mb-3">
              Consider two investors each with $100,000 invested for market appreciation. Investor A buys individual stocks, while Investor B chooses an actively managed mutual fund with 80% annual turnover.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-emerald-700">Individual Stocks (Investor A):</strong>
                <ul className="mt-2 space-y-1">
                  <li>• No forced distributions</li>
                  <li>• Tax loss harvesting: $3,000 annual benefit</li>
                  <li>• Complete control over realization timing</li>
                  <li>• After-tax return: 8.2% annually</li>
                </ul>
              </div>
              <div>
                <strong className="text-blue-700">Mutual Fund (Investor B):</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Forced distributions: $4,000 annually</li>
                  <li>• Embedded gains on purchase</li>
                  <li>• No control over fund's tax decisions</li>
                  <li>• After-tax return: 6.1% annually</li>
                </ul>
              </div>
            </div>
            <p className="text-slate-700 mt-3">
              Over 20 years, this 2.1% difference compounds to over $116,000—more than the original investment amount.
            </p>
          </div>

          <p className="leading-relaxed">
            Exchange-Traded Funds (ETFs) offer a middle ground with superior tax efficiency compared to traditional mutual funds. The unique "in-kind redemption" process allows ETFs to eliminate embedded capital gains, making them significantly more tax-efficient. When investors sell ETF shares, the fund can transfer appreciated securities to authorized participants rather than selling them and triggering capital gains. This structural advantage has made ETFs increasingly popular among tax-conscious investors.
          </p>

          <p className="leading-relaxed">
            For those seeking professional management with tax efficiency, tax-managed funds specifically minimize taxable distributions. These funds employ strategies like avoiding dividend-paying stocks, minimizing turnover, and systematically realizing losses to offset gains. While they may slightly underperform non-tax-managed counterparts on a pre-tax basis, their after-tax returns often prove superior for investors in high tax brackets.
          </p>
        </div>
      )
    },

    math: {
      title: "Mathematical Foundations: The Calculus of Capital Gains",
      content: (
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            Capital gains optimization rests on mathematical principles that, when properly applied, can significantly enhance after-tax returns. Understanding these formulas isn't academic—it's practical financial engineering that separates successful investors from those who leave money on the table.
          </p>

          <div className="bg-slate-50 border-l-4 border-slate-400 p-6 rounded-lg">
            <h4 className="font-semibold text-slate-800 mb-4">The Fundamental Capital Gains Formula</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border border-slate-200">
                <p className="font-mono text-center text-lg mb-2">
                  Capital Gain = Selling Price - Cost Basis
                </p>
                <p className="text-sm text-slate-600">
                  Where Cost Basis includes purchase price, commissions, fees, and certain improvements
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border border-slate-200">
                <p className="font-mono text-center text-lg mb-2">
                  Tax Liability = Capital Gain × Tax Rate
                </p>
                <p className="text-sm text-slate-600">
                  Tax Rate varies by holding period and taxable income bracket
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border border-slate-200">
                <p className="font-mono text-center text-lg mb-2">
                  After-Tax Return = Capital Gain - Tax Liability
                </p>
                <p className="text-sm text-slate-600">
                  This is the actual profit that contributes to your wealth
                </p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 rounded-lg">
            <h4 className="font-semibold text-emerald-800 mb-4">Advanced Optimization: The Tax-Efficient Return Formula</h4>
            <div className="bg-white p-4 rounded border border-emerald-200">
              <p className="font-mono text-center text-lg mb-3">
                After-Tax Return = Pre-Tax Return × (1 - Effective Tax Rate)
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Example 1: Short-term holding</strong></p>
                <p className="font-mono">After-Tax Return = 10% × (1 - 0.32) = 6.8%</p>
                <p><strong>Example 2: Long-term holding</strong></p>
                <p className="font-mono">After-Tax Return = 10% × (1 - 0.15) = 8.5%</p>
                <p className="text-emerald-700 mt-2">The 1.7% difference compounds significantly over time.</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
            <h4 className="font-semibold text-amber-800 mb-4">Compound Interest Impact: The Long-Term Effect</h4>
            <div className="bg-white p-4 rounded border border-amber-200">
              <p className="font-mono text-center text-lg mb-3">
                Future Value = Present Value × (1 + After-Tax Return)^n
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>$100,000 investment over 20 years:</strong></p>
                <p className="font-mono">Tax-inefficient (6.8%): $100,000 × (1.068)^20 = $370,000</p>
                <p className="font-mono">Tax-efficient (8.5%): $100,000 × (1.085)^20 = $511,000</p>
                <p className="text-amber-700 font-semibold mt-2">Difference: $141,000 in additional wealth</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-4">Tax Loss Harvesting Mathematics</h4>
            <div className="space-y-3">
              <p className="text-sm">The formula for tax loss harvesting benefits:</p>
              <div className="bg-white p-4 rounded border border-blue-200">
                <p className="font-mono text-center text-lg mb-2">
                  Tax Benefit = Realized Loss × Marginal Tax Rate
                </p>
                <p className="text-sm text-blue-700">
                  Plus: $3,000 annual offset against ordinary income
                </p>
              </div>
              <div className="text-sm space-y-1">
                <p><strong>Practical Example:</strong></p>
                <p>• Realized loss: $10,000</p>
                <p>• Tax bracket: 32%</p>
                <p>• Immediate tax benefit: $10,000 × 0.32 = $3,200</p>
                <p>• Additional ordinary income offset: $3,000 × 0.32 = $960</p>
                <p>• Total annual benefit: $4,160</p>
              </div>
            </div>
          </div>

          <p className="leading-relaxed">
            The mathematics of tax-efficient investing extends beyond simple formulas to include concepts like the Sharpe ratio adjustment for taxes, optimal asset location models, and Monte Carlo simulations for tax planning outcomes. Sophisticated investors use these mathematical tools to construct portfolios that maximize after-tax returns rather than pre-tax performance—a crucial distinction that separates professional wealth management from amateur investing.
          </p>

          <p className="leading-relaxed">
            Perhaps most importantly, these mathematical models reveal that tax efficiency matters most for high-growth assets and long time horizons. A 2% improvement in after-tax return on a $500,000 portfolio over 30 years creates over $1 million in additional wealth. This mathematical reality transforms tax planning from a compliance exercise into a wealth creation strategy.
          </p>
        </div>
      )
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Comprehensive Capital Gains Guide
        </h2>
        <p className="text-lg text-gray-600">
          Master the mathematics and strategy behind tax-efficient investing
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
        {Object.entries(content).map(([key, section]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as typeof activeTab)}
            className={`px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
              activeTab === key
                ? 'text-blue-600 border-blue-600 bg-blue-50'
                : 'text-gray-600 border-transparent hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            {section.title.split(':')[0]}
          </button>
        ))}
      </div>

      <div className="prose prose-lg max-w-none">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          {content[activeTab].title}
        </h3>
        {content[activeTab].content}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Research & Citations</h4>
        <div className="text-sm text-gray-600 space-y-2">
          <p>• Internal Revenue Service Publication 550: Investment Income and Expenses</p>
          <p>• Congressional Budget Office: "The Distribution of Household Income and Federal Taxes" (2024)</p>
          <p>• Vanguard Research: "The Value of Tax-Loss Harvesting" (2023)</p>
          <p>• Journal of Financial Planning: "Asset Location for Taxable Investors" (2024)</p>
          <p>• Morningstar: "Tax Cost Ratios for Mutual Funds and ETFs" (2023)</p>
        </div>
      </div>
    </div>
  )
}
