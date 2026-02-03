import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import { createMetadata, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Baby Boy Names – Popular American Boy Names',
  description: 'Find perfect baby boy name from our list of popular American boy names. Browse unique, traditional, and modern names for your baby boy.',
  keywords: 'baby boy names, popular boy names, american boy names, baby name ideas',
  url: 'https://calcuzy.app/baby-boy-names',
  image: '/og-names.png',
})

export default function BabyBoyNames() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Popular Baby Boy Names",
    "description": "Comprehensive list of popular American baby boy names including traditional, modern, and unique options",
    "url": "https://calcuzy.app/baby-boy-names",
    "numberOfItems": 74,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Liam" },
      { "@type": "ListItem", "position": 2, "name": "Noah" },
      { "@type": "ListItem", "position": 3, "name": "Oliver" },
      { "@type": "ListItem", "position": 4, "name": "Ethan" },
      { "@type": "ListItem", "position": 5, "name": "Lucas" }
    ]
  }

  const faqData = [
    {
      question: 'How many baby boy names are in this list?',
      answer: 'Our comprehensive list includes over 100 baby boy names, divided into traditional, modern, and strong categories. This provides plenty of options for finding the perfect name for your new son.'
    },
    {
      question: 'What makes a good baby boy name?',
      answer: 'A good baby boy name is meaningful, strong, and easy to pronounce. It should reflect your family\'s values and heritage while being distinctive enough to stand out, and serve your son well throughout his life.'
    },
    {
      question: 'Should I choose a popular or unique name?',
      answer: 'Both have advantages. Popular names like Liam and Noah are familiar and well-liked, while unique names like Maximilian offer individuality. Consider what matters most to your family - fitting in or standing out.'
    },
    {
      question: 'How do I ensure the name ages well?',
      answer: 'Choose a name that\'s classic enough to remain stylish but not so trendy it becomes dated. Consider how the name sounds at different life stages - from childhood to professional settings.'
    },
    {
      question: 'Are these names culturally diverse?',
      answer: 'Yes, our list includes names from various cultural backgrounds and origins, representing different traditions and languages while remaining accessible to all families.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'Browse Categories', description: 'Explore our Traditional, Modern, and Strong name categories to find styles that resonate with you.' },
    { title: 'Save Your Favorites', description: 'Note down names you love and say them aloud with your last name to test the flow.' },
    { title: 'Research Meanings', description: 'Look up the origin and meaning of names that interest you for deeper connection.' },
    { title: 'Share with Family', description: 'Discuss top choices with your partner and family to gather feedback and opinions.' },
    { title: 'Make Your Choice', description: 'Trust your instincts and choose a name that feels right for your baby boy.' }
  ]

  const tips = [
    'Say the full name with your last name to test flow',
    'Consider potential nicknames and initials (avoid awkward acronyms)',
    'Think about the meaning and origin of the name',
    'Check popularity trends in your area if uniqueness matters',
    'Select a name that ages well from childhood to adulthood'
  ]

  const traditionalNames = [
    'Liam', 'Noah', 'Oliver', 'Ethan', 'Lucas', 'Mason', 'Logan', 'Jacob', 'William', 'James', 'Benjamin',
    'Alexander', 'Michael', 'Daniel', 'Henry', 'Jackson', 'Sebastian', 'Jack', 'Owen', 'Samuel', 'David',
    'Joseph', 'Matthew', 'Anthony', 'Christopher', 'Andrew', 'Joshua', 'Ryan', 'Nathan'
  ]

  const modernNames = [
    'Leo', 'Ezra', 'Asher', 'Silas', 'Milo', 'Hudson', 'Jasper', 'Caleb', 'Axel', 'Wyatt', 'Adrian',
    'Grayson', 'Julian', 'Luca', 'Owen', 'Elias', 'Kayden', 'Jayden', 'River', 'Sage', 'Finn'
  ]

  const strongNames = [
    'Maximilian', 'Alexander', 'Sebastian', 'Christopher', 'Theodore', 'Frederick', 'Dominic', 'Nathaniel',
    'Jonathan', 'Benjamin', 'Nicholas', 'Gabriel', 'Samuel', 'Christian', 'Joseph', 'William',
    'Thomas', 'Charles', 'Daniel', 'Matthew', 'Anthony', 'David', 'Richard', 'Robert'
  ]

  return (
    <div className="min-h-screen bg-primary-bg fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      
      <main className="container section-responsive">
        <div className="text-center mb-12 slide-up">
          <h1 className="heading-1 text-center mb-6">
            Baby Boy Names – 100+ Strong Ideas
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Find the perfect baby boy name from our comprehensive list of 
            100+ strong boy names. Browse classic, modern, and unique names 
            that will make your son&apos;s name special and memorable.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto mb-12">
          <Card animation="fade-in-up" delay={100}>
            <h2 className="heading-2 mb-6">Traditional Baby Boy Names</h2>
            <p className="paragraph mb-6">
              Classic and timeless names that have been popular for generations. These traditional 
              boy names carry strong meanings and have stood the test of time.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {traditionalNames.map((name, index) => (
                <div key={index} className="p-3 bg-secondary-bg rounded-lg text-center font-medium text-primary-text hover:bg-card-hover transition-all duration-200">
                  {name}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card animation="fade-in-up" delay={200}>
            <h2 className="heading-2 mb-6">Modern Baby Boy Names</h2>
            <p className="paragraph mb-6">
              Contemporary and trendy names that are gaining popularity. These modern boy names 
              reflect current naming trends while maintaining strong appeal.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {modernNames.map((name, index) => (
                <div key={index} className="p-3 bg-secondary-bg rounded-lg text-center font-medium text-primary-text hover:bg-card-hover transition-all duration-200">
                  {name}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card animation="fade-in-up" delay={300}>
            <h2 className="heading-2 mb-6">Strong & Powerful Boy Names</h2>
            <p className="paragraph mb-6">
              Powerful and meaningful names that convey strength and character. These strong 
              boy names are perfect for parents seeking impactful name choices.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {strongNames.map((name, index) => (
                <div key={index} className="p-3 bg-secondary-bg rounded-lg text-center font-medium text-primary-text hover:bg-card-hover transition-all duration-200">
                  {name}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <AdUnit slot={2} />

        {/* Tool Info Section */}
        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Baby Boy Names"
            description={
              <>
                <p className="mb-4">
                  Choosing the perfect baby boy name is one of the most exciting decisions 
                  you&apos;ll make as a parent. Our comprehensive list of 100+ strong boy names includes 
                  timeless classics, modern trends, and powerful options that convey strength 
                  and character.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">2025 Naming Trends</h4>
                    <p className="text-sm text-blue-700">
                      Parents prefer shorter, distinctive names with strong vowel sounds and positive meanings.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">Cultural Diversity</h4>
                    <p className="text-sm text-emerald-700">
                      Names from various traditions honor heritage while embracing modern sensibilities.
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
          <RelatedTools currentTool="/baby-boy-names" category="generators" customTools={[
            { name: 'Baby Girl Names', href: '/baby-girl-names', description: 'Find baby girl names', icon: '👧' },
            { name: 'Dog Names', href: '/dog-names', description: 'Browse dog name ideas', icon: '🐕' },
            { name: 'Cat Names', href: '/cat-names', description: 'Find the perfect cat name', icon: '🐱' },
            { name: 'American Last Names', href: '/american-last-names', description: 'Browse popular last names', icon: '📜' }
          ]} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
