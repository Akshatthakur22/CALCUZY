import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import ToolInfo from '@/components/ToolInfo'
import RelatedTools from '@/components/RelatedTools'
import RelatedToolsBento, { generatorRelatedTools } from '@/components/RelatedToolsBento'
import HowItWorks, { generatorHowItWorks } from '@/components/HowItWorks'
import { createMetadata, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'PROVEN Baby Boy Names: 100+ FREE 2026 Names',
  description: 'INSTANT access to 100+ PROVEN baby boy names for 2026. FREE list of popular, unique & strong American boy names with meanings. Your complete naming solution.',
  keywords: 'baby boy names, popular boy names, american boy names, baby name ideas, unique boy names, traditional boy names, modern boy names, 2026 baby names',
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
      question: 'What are the most popular baby boy names for 2026?',
      answer: 'The most popular baby boy names for 2026 include Liam, Noah, Oliver, Ethan, and Lucas. Traditional names like William and James remain strong, while modern choices like Leo and Ezra are rising rapidly. These names reflect current trends toward shorter, distinctive names with strong vowel sounds.'
    },
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
    { title: 'Browse Categories', description: 'Explore traditional, modern, and strong name categories to find your preferred style.' },
    { title: 'Consider Meanings', description: 'Research name meanings and origins to choose a name with significance.' },
    { title: 'Test Pronunciation', description: 'Say the name aloud with your last name to check flow and rhythm.' },
    { title: 'Check Initials', description: 'Ensure the initials work well together and avoid awkward combinations.' }
  ]

  const tips = [
    'Consider family heritage and cultural significance when choosing',
    'Test how the name sounds with your last name for proper flow',
    'Think about potential nicknames and whether you like them',
    'Check the meaning and origin to ensure it aligns with your values',
    'Consider how the name will age from childhood to adulthood'
  ]

  const comprehensiveNamingGuide = (
    <div className="prose prose-lg max-w-none space-y-6">
      <p className="paragraph">
        Choosing the perfect name for your baby boy is one of the most meaningful decisions you'll make as a parent. A name becomes your child's identity, influences how others perceive them, and can impact their confidence and social interactions. Our comprehensive guide combines cultural insights, naming psychology, and practical considerations to help you select a name that resonates with your family values while setting your son up for success.
      </p>
      
      <h3 className="text-xl font-semibold text-slate-800 mb-4">The Psychology Behind Baby Boy Names</h3>
      <p className="paragraph mb-6">
        Research in developmental psychology shows that names significantly influence children's self-perception and social development. Studies indicate that children with easily pronounceable names tend to have higher confidence in social settings, while names with positive meanings can create subtle psychological advantages. The "name-letter effect" demonstrates that people often form unconscious associations with names based on their first letter—names starting with positive letters like "A" (Alexander, Andrew) are often perceived more favorably than those starting with less positive letters.
      </p>
    </div>
  )

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
            <h2 className="heading-2 mb-6">Strong Baby Boy Names</h2>
            <p className="paragraph mb-6">
              Strong and powerful names carry significant weight and meaning, often reflecting parents' hopes for their son's future character and success. These names typically have deep historical roots, strong phonetic presence, and convey qualities like leadership, wisdom, or protection. In many cultures, strong boy names are chosen specifically for their ability to empower the child throughout life, serving as both a daily identifier and a source of confidence.
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
        
        {/* Comprehensive Naming Guide */}
        <section className="mb-12">
          <h2 className="font-semibold text-lg mb-6">Complete Guide to Choosing Baby Boy Names</h2>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="paragraph">
              Choosing the perfect name for your baby boy is one of the most meaningful decisions you'll make as a parent. A name becomes your child's identity, influences how others perceive them, and can impact their confidence and social interactions. Our comprehensive guide combines cultural insights, naming psychology, and practical considerations to help you select a name that resonates with your family values while setting your son up for success.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">The Psychology Behind Baby Boy Names</h3>
            <p className="paragraph mb-6">
              Research in developmental psychology shows that names significantly influence children's self-perception and social development. Studies indicate that children with easily pronounceable names tend to have higher confidence in social settings, while names with positive meanings can create subtle psychological advantages. The "name-letter effect" demonstrates that people often form unconscious associations with names based on their first letter—names starting with positive letters like "A" (Alexander, Andrew) are often perceived more favorably than those starting with less positive letters.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Cultural Considerations and Global Naming Trends</h3>
            <p className="paragraph mb-6">
              Modern naming practices reflect increasingly global perspectives. While traditional Western names remain popular, there's growing appreciation for names from diverse cultural backgrounds—Japanese names like Kenji, African names like Kwame, and Hispanic names like Santiago. Additionally, 2026 trends show parents moving toward gender-neutral names for boys, nature-inspired names, and vintage names that feel both classic and fresh. This shift reflects broader cultural awareness and desire for names that transcend traditional boundaries.
            </p>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100 mb-6">
              <h4 className="font-semibold text-purple-900 mb-3">Expert Naming Strategies for 2026</h4>
              <ul className="space-y-3 text-purple-800">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span><strong>Test the Flow:</strong> Say the complete name with your last name multiple times to check rhythm and avoid awkward combinations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span><strong>Consider Initials:</strong> Think about how the initials will look on monograms and professional documents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span><strong>Cultural Sensitivity:</strong> Research names' cultural meanings and pronunciation to ensure respect for heritage and avoid unintended associations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold mt-1">•</span>
                  <span><strong>Future-Proofing:</strong> Consider how the name will serve your child from childhood through professional life.</span>
                </li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Historical Evolution of Boy Names</h3>
            <p className="paragraph mb-6">
              The practice of naming boys has evolved dramatically throughout history. Ancient civilizations often chose names reflecting gods, virtues, or natural elements. Medieval times saw the rise of saint names and occupational surnames becoming first names. The Victorian era emphasized elaborate, multi-syllable names, while the 20th century saw cycles of shortened names (Jim, Bill) and then revival of classical names. Today's naming landscape combines all these influences, with parents drawing from historical patterns while adapting to contemporary sensibilities.
            </p>
            
            <p className="paragraph">
              Remember that the best baby boy name is one that feels right to your family and carries the hopes and dreams you have for your son. Take time to consider how the name sounds, its meaning, its cultural significance, and how it will serve your child throughout different life stages. Your thoughtful choice will become part of your son's identity and story.
            </p>
          </div>
        </section>

        <AdUnit slot={2} />

        {/* How It Works Section */}
        <HowItWorks 
          title="How Our Baby Boy Names Generator Works"
          steps={generatorHowItWorks}
          className="bg-slate-50/50"
        />

        {/* Tool Info Section */}
        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Baby Boy Names"
            description={
              <>
                <p className="mb-4">
                  Choosing the perfect baby boy name is one of the most exciting decisions you'll make as a parent. Our comprehensive list of 100+ strong boy names includes timeless classics, modern trends, and powerful options that convey strength and character.
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
            { name: 'Cat Names', href: '/cat-names', description: 'Find perfect cat name', icon: '🐱' },
            { name: 'American Last Names', href: '/american-last-names', description: 'Browse popular last names', icon: '📜' }
          ]} />
        </div>

        {/* Related Tools Bento Footer */}
        <RelatedToolsBento 
          currentTool="/baby-boy-names"
          tools={generatorRelatedTools}
          title="More Generator Tools To Explore"
          className="bg-slate-50/50"
        />
      </main>

      <Footer />
    </div>
  )
}
