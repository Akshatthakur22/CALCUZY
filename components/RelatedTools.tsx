import Link from 'next/link'

interface Tool {
  name: string
  href: string
  description: string
  icon?: string
}

interface RelatedToolsProps {
  currentTool: string
  category?: 'calculators' | 'date-tools' | 'generators' | 'finance' | 'health' | 'utility' | 'names'
  customTools?: Tool[]
  maxItems?: number
}

// Comprehensive tool database for smart interlinking
const toolDatabase: Record<string, Tool[]> = {
  calculators: [
    { name: 'BMI Calculator', href: '/bmi-calculator', description: 'Calculate body mass index', icon: '💪' },
    { name: 'Age Calculator', href: '/age-calculator', description: 'Calculate your exact age', icon: '🎂' },
    { name: 'Date Difference', href: '/date-difference', description: 'Days between two dates', icon: '📅' },
    { name: 'Unit Converter', href: '/unit-converter', description: 'Convert units instantly', icon: '🔄' },
  ],
  'date-tools': [
    { name: 'Age Calculator', href: '/age-calculator', description: 'Calculate your exact age', icon: '🎂' },
    { name: 'Date Difference', href: '/date-difference', description: 'Days between two dates', icon: '📅' },
    { name: 'Christmas Countdown', href: '/days-until-christmas', description: 'Days until Christmas', icon: '🎄' },
    { name: 'Halloween Countdown', href: '/days-until-halloween', description: 'Days until Halloween', icon: '🎃' },
    { name: 'New Year Countdown', href: '/days-until-new-year', description: 'Days until New Year', icon: '🎆' },
    { name: 'Easter Countdown', href: '/easter-countdown', description: 'Days until Easter', icon: '🐣' },
  ],
  generators: [
    { name: 'Random Number', href: '/random-number-generator', description: 'Generate random numbers', icon: '🎲' },
    { name: 'Password Tools', href: '/password-tools', description: 'Password strength & hash', icon: '🔐' },
    { name: 'NDA Generator', href: '/nda-generator', description: 'Create NDA documents', icon: '📝' },
    { name: 'Will Generator', href: '/will-generator', description: 'Create will documents', icon: '📜' },
  ],
  finance: [
    { name: 'Capital Gains', href: '/capital-gains-calculator', description: 'Calculate investment tax', icon: '📈' },
    { name: 'Crypto Tax', href: '/crypto-tax-calculator', description: 'Cryptocurrency tax calc', icon: '₿' },
    { name: 'Property Tax', href: '/property-tax-estimator', description: 'Estimate property tax', icon: '🏠' },
    { name: 'Rent Affordability', href: '/rent-affordability-calculator', description: 'How much rent can you afford', icon: '🏢' },
    { name: 'Index Fund Returns', href: '/index-fund-return-calculator', description: 'Investment return calc', icon: '💰' },
  ],
  health: [
    { name: 'BMI Calculator', href: '/bmi-calculator', description: 'Body mass index', icon: '💪' },
    { name: 'Ovulation Calculator', href: '/ovulation-calculator', description: 'Fertility tracking', icon: '📊' },
    { name: 'Age Calculator', href: '/age-calculator', description: 'Calculate exact age', icon: '🎂' },
  ],
  utility: [
    { name: 'Unit Converter', href: '/unit-converter', description: 'Convert between units', icon: '🔄' },
    { name: 'Random Number', href: '/random-number-generator', description: 'Random number generator', icon: '🎲' },
    { name: 'Password Tools', href: '/password-tools', description: 'Password security tools', icon: '🔐' },
    { name: 'Paint Calculator', href: '/paint-cost-calculator', description: 'Paint cost estimator', icon: '🎨' },
  ],
  names: [
    { name: 'Baby Boy Names', href: '/baby-boy-names', description: 'Popular baby boy names', icon: '👶' },
    { name: 'Baby Girl Names', href: '/baby-girl-names', description: 'Popular baby girl names', icon: '👧' },
    { name: 'Dog Names', href: '/dog-names', description: 'Creative dog names', icon: '🐕' },
    { name: 'Cat Names', href: '/cat-names', description: 'Unique cat names', icon: '🐱' },
    { name: 'American Last Names', href: '/american-last-names', description: 'Common American surnames', icon: '📛' },
  ],
}

// Smart tool suggestions based on current tool
const toolRelationships: Record<string, string[]> = {
  '/bmi-calculator': ['/age-calculator', '/ovulation-calculator', '/date-difference', '/unit-converter'],
  '/age-calculator': ['/date-difference', '/bmi-calculator', '/days-until-christmas', '/random-number-generator'],
  '/date-difference': ['/age-calculator', '/days-until-christmas', '/days-until-new-year', '/easter-countdown'],
  '/random-number-generator': ['/password-tools', '/unit-converter', '/age-calculator', '/date-difference'],
  '/capital-gains-calculator': ['/crypto-tax-calculator', '/property-tax-estimator', '/rent-affordability-calculator', '/index-fund-return-calculator'],
  '/crypto-tax-calculator': ['/capital-gains-calculator', '/index-fund-return-calculator', '/property-tax-estimator', '/rent-affordability-calculator'],
  '/ovulation-calculator': ['/bmi-calculator', '/age-calculator', '/date-difference', '/days-until-christmas'],
  '/password-tools': ['/random-number-generator', '/nda-generator', '/will-generator', '/unit-converter'],
  '/unit-converter': ['/bmi-calculator', '/paint-cost-calculator', '/random-number-generator', '/age-calculator'],
  '/paint-cost-calculator': ['/unit-converter', '/property-tax-estimator', '/rent-affordability-calculator', '/age-calculator'],
  '/nda-generator': ['/will-generator', '/password-tools', '/random-number-generator', '/date-difference'],
  '/will-generator': ['/nda-generator', '/password-tools', '/age-calculator', '/property-tax-estimator'],
  '/property-tax-estimator': ['/rent-affordability-calculator', '/capital-gains-calculator', '/crypto-tax-calculator', '/paint-cost-calculator'],
  '/rent-affordability-calculator': ['/property-tax-estimator', '/capital-gains-calculator', '/index-fund-return-calculator', '/paint-cost-calculator'],
  '/index-fund-return-calculator': ['/capital-gains-calculator', '/crypto-tax-calculator', '/rent-affordability-calculator', '/property-tax-estimator'],
  '/days-until-christmas': ['/christmas-quotes', '/days-until-new-year', '/easter-countdown', '/thanksgiving-countdown'],
  '/days-until-halloween': ['/days-until-thanksgiving', '/days-until-christmas', '/black-friday-countdown', '/easter-countdown'],
  '/days-until-new-year': ['/days-until-christmas', '/easter-countdown', '/age-calculator', '/date-difference'],
  '/thanksgiving-countdown': ['/black-friday-countdown', '/days-until-christmas', '/days-until-halloween', '/easter-countdown'],
  '/black-friday-countdown': ['/thanksgiving-countdown', '/days-until-christmas', '/days-until-new-year', '/easter-countdown'],
  '/easter-countdown': ['/days-until-christmas', '/days-until-new-year', '/days-until-halloween', '/thanksgiving-countdown'],
}

// Get all tools as a flat array
const getAllTools = (): Tool[] => {
  const allTools: Tool[] = []
  Object.values(toolDatabase).forEach((tools) => {
    tools.forEach((tool) => {
      if (!allTools.some((t) => t.href === tool.href)) {
        allTools.push(tool)
      }
    })
  })
  return allTools
}

/**
 * RelatedTools - Intelligent tool interlinking component
 * Increases session duration by suggesting relevant tools
 */
export default function RelatedTools({
  currentTool,
  category,
  customTools,
  maxItems = 4,
}: RelatedToolsProps) {
  // Determine which tools to show
  let tools: Tool[] = []

  if (customTools && customTools.length > 0) {
    // Use custom tools if provided
    tools = customTools
  } else if (toolRelationships[currentTool]) {
    // Use smart relationships
    const allTools = getAllTools()
    const relatedPaths = toolRelationships[currentTool]
    tools = relatedPaths
      .map((path) => allTools.find((t) => t.href === path))
      .filter((t): t is Tool => t !== undefined)
  } else if (category && toolDatabase[category]) {
    // Fall back to category-based tools
    tools = toolDatabase[category].filter((t) => t.href !== currentTool)
  } else {
    // Default: show popular tools
    tools = [
      { name: 'BMI Calculator', href: '/bmi-calculator', description: 'Calculate body mass index', icon: '💪' },
      { name: 'Age Calculator', href: '/age-calculator', description: 'Calculate your exact age', icon: '🎂' },
      { name: 'Random Number', href: '/random-number-generator', description: 'Generate random numbers', icon: '🎲' },
      { name: 'Unit Converter', href: '/unit-converter', description: 'Convert between units', icon: '🔄' },
    ].filter((t) => t.href !== currentTool)
  }

  // Limit to maxItems
  tools = tools.slice(0, maxItems)

  if (tools.length === 0) return null

  return (
    <div className="mt-12">
      <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-6">
        Related Tools
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group block p-4 bg-white border border-slate-100 rounded-xl 
              hover:bg-slate-50 hover:border-slate-200 hover:shadow-md
              transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <div className="flex items-start gap-3">
              {tool.icon && (
                <span className="text-xl flex-shrink-0" aria-hidden="true">
                  {tool.icon}
                </span>
              )}
              <div>
                <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </div>
                <div className="text-sm text-slate-500 mt-0.5">
                  {tool.description}
                </div>
              </div>
              <svg 
                className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all ml-auto flex-shrink-0 mt-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
