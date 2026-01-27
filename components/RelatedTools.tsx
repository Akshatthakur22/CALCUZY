import Link from 'next/link'

interface Tool {
  title: string
  url: string
  description?: string
}

interface RelatedToolsProps {
  tools: Tool[]
  className?: string
}

export default function RelatedTools({ tools, className = "" }: RelatedToolsProps) {
  if (!tools || tools.length === 0) {
    return null
  }

  return (
    <div className={`mt-12 fade-in-up ${className}`}>
      <h3 className="heading-3 mb-6">Related Tools</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <Link 
            key={tool.url}
            href={tool.url}
            className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-all duration-200 hover:scale-[1.01] hover:shadow-md focus-ring"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="font-medium text-primary-text mb-1 line-clamp-2">
              {tool.title}
            </div>
            {tool.description && (
              <div className="text-sm text-secondary-text line-clamp-2">
                {tool.description}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

// Predefined tool groupings for different categories
export const toolGroupings = {
  calculators: [
    { title: "BMI Calculator", url: "/bmi-calculator", description: "Calculate body mass index" },
    { title: "Age Calculator", url: "/age-calculator", description: "Calculate age from date" },
    { title: "Date Difference Calculator", url: "/date-difference", description: "Calculate days between dates" },
    { title: "Capital Gains Calculator", url: "/capital-gains-calculator", description: "Calculate capital gains tax" },
    { title: "Crypto Tax Calculator", url: "/crypto-tax-calculator", description: "Calculate cryptocurrency taxes" },
    { title: "Index Fund Return Calculator", url: "/index-fund-return-calculator", description: "Calculate investment returns" },
    { title: "Ovulation Calculator", url: "/ovulation-calculator", description: "Track fertility window" },
    { title: "Paint Cost Calculator", url: "/paint-cost-calculator", description: "Estimate painting costs" },
    { title: "Property Tax Estimator", url: "/property-tax-estimator", description: "Estimate property taxes" },
    { title: "Rent Affordability Calculator", url: "/rent-affordability-calculator", description: "Calculate affordable rent" },
    { title: "Unit Converter", url: "/unit-converter", description: "Convert between units" }
  ],
  countdowns: [
    { title: "Christmas Countdown", url: "/days-until-christmas", description: "Countdown to Christmas" },
    { title: "New Year Countdown", url: "/days-until-new-year", description: "Countdown to New Year" },
    { title: "Halloween Countdown", url: "/days-until-halloween", description: "Countdown to Halloween" },
    { title: "Thanksgiving Countdown", url: "/thanksgiving-countdown", description: "Countdown to Thanksgiving" },
    { title: "Easter Countdown", url: "/easter-countdown", description: "Countdown to Easter" },
    { title: "Black Friday Countdown", url: "/black-friday-countdown", description: "Countdown to Black Friday" }
  ],
  names: [
    { title: "Baby Boy Names", url: "/baby-boy-names", description: "Find baby boy names" },
    { title: "Baby Girl Names", url: "/baby-girl-names", description: "Find baby girl names" },
    { title: "American Last Names", url: "/american-last-names", description: "American surname generator" },
    { title: "Cat Names", url: "/cat-names", description: "Find cat names" },
    { title: "Dog Names", url: "/dog-names", description: "Find dog names" }
  ],
  quotes: [
    { title: "Motivational Quotes", url: "/motivational-quotes", description: "Get motivated" },
    { title: "Love Quotes", url: "/love-quotes", description: "Romantic quotes" },
    { title: "Christmas Quotes", url: "/christmas-quotes", description: "Holiday quotes" },
    { title: "Graduation Quotes", url: "/graduation-quotes", description: "Graduation inspiration" },
    { title: "Aesthetic Quotes", url: "/aesthetic-quotes", description: "Beautiful quotes" }
  ],
  generators: [
    { title: "Will Generator", url: "/will-generator", description: "Create legal will" },
    { title: "NDA Generator", url: "/nda-generator", description: "Create NDA document" },
    { title: "Password Tools", url: "/password-tools", description: "Generate secure passwords" },
    { title: "Random Number Generator", url: "/random-number-generator", description: "Generate random numbers" }
  ],
  "pdf-tools": [
    { title: "PDF Splitter", url: "/pdf-tools/pdf-splitter", description: "Split PDF files into multiple documents" },
    { title: "PDF Compressor", url: "/pdf-tools/pdf-compressor", description: "Compress PDF files to reduce size" },
    { title: "PDF to Word", url: "/pdf-tools/pdf-to-word", description: "Convert PDF to Word documents" },
    { title: "Word to PDF", url: "/pdf-tools/word-to-pdf", description: "Convert Word to PDF files" }
  ]
}

// Helper function to get related tools by category
export function getRelatedToolsByCategory(category: keyof typeof toolGroupings, currentToolUrl?: string, limit: number = 4): Tool[] {
  const tools = toolGroupings[category] || []
  
  // Filter out current tool if provided
  const filteredTools = currentToolUrl 
    ? tools.filter(tool => tool.url !== currentToolUrl)
    : tools
  
  // Return limited number of tools
  return filteredTools.slice(0, limit)
}
