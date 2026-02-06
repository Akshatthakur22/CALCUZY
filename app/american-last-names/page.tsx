import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

import ReadMore from '../../components/ReadMore'

export const metadata = createMetadata({
  title: 'American Last Names: A Deep Dive into US Surnames & Heritage (2026)',
  description: 'Explore the evolution of American last names. From colonial occupational surnames to modern multicultural shifts, learn the history behind 100+ common US family names.',
  keywords: 'american last names, us surnames, common american names, family names, surname history, census, onomastics, heritage',
  url: 'https://calcuzy.app/american-last-names',
  image: '/og-names.png',
})

export default function AmericanLastNames() {
  const structuredData = createToolSchema({
    name: 'American Last Names',
    description: 'Find popular American last names from our list of common US surnames and family names.',
    url: 'https://calcuzy.app/american-last-names',
    category: 'LifestyleApplication',
    features: ['100+ surnames', 'Common names', 'Traditional names', 'Modern names']
  })

  const faqData = [
    {
      question: "Why is 'Smith' consistently the #1 last name in America?",
      answer: "Beyond its English roots, Smith was a common translation for similar occupational names in other languages (like the German Schmidt or Polish Kowalski), making it a 'collector' name for various ethnicities."
    },
    {
      question: 'How did the US Census influence the popularity of surnames?',
      answer: "The Census is the primary record-keeper of American names. Every decade, it tracks the 'Surname Frequency,' which helps sociologists understand migration patterns and the integration of new immigrant groups."
    },
    {
      question: 'What is a “Habitational” surname?',
      answer: 'These are names derived from specific locations, such as Lincoln or Washington. In the US, these often denote a family’s historical ties to a specific region or estate.'
    },
    {
      question: 
        "Are there uniquely 'American' last names that don't exist in Europe?",
      answer: "Yes. Many surnames emerged in America through the blending of cultures, the translation of Native American names into English, or the creative spelling of names by pioneers."
    },
    {
      question: 'How do I legally protect my family name?',
      answer: "While you can't 'own' a surname, you can trademark a name if it is used as a brand or business entity. For personal use, the common law protects your right to use your ancestral name."
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const commonNames = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez',
    'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee',
    'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Young'
  ]

  const traditionalNames = [
    'Washington', 'Jefferson', 'Lincoln', 'Hamilton', 'Jackson', 'Van Buren', 'Harrison', 'Tyler', 'Polk', 'Taylor',
    'Fillmore', 'Pierce', 'Buchanan', 'Lincoln', 'Johnson', 'Grant', 'Hayes', 'Garfield', 'Arthur', 'Cleveland',
    'McKinley', 'Roosevelt', 'Taft', 'Wilson', 'Harding', 'Coolidge', 'Hoover', 'Truman', 'Eisenhower', 'Kennedy'
  ]

  const modernNames = [
    'Anderson', 'Taylor', 'Thomas', 'Moore', 'Jackson', 'Martin', 'Lee', 'Thompson', 'White', 'Harris', 'Clark',
    'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Green', 'Baker',
    'Adams', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker'
  ]

  return (
    <div className="min-h-screen bg-primary-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="container py-12">
        <div className="text-center mb-12">
          <h1 className="heading-1 text-center mb-6">
            American Last Names – 100+ Common Surnames
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Explore the evolution of American last names. From colonial occupational surnames to modern multicultural shifts, learn the history behind 100+ common US family names.
          </p>
        </div>

        <ReadMore>
          <section className="prose max-w-4xl mx-auto py-10">
            <h2>The Etymology of America: How Surnames Shaped National Identity</h2>
            <p className="mb-4 text-gray-700">
              American surnames are far more than identifiers; they are a linguistic map of global migration, social adaptation, and the "Melting Pot" philosophy. Unlike many European nations where surnames remained static for centuries, American last names underwent a unique "Anglicization" process. Between the 18th and early 20th centuries, millions of immigrants arriving at Ellis Island had their names altered—sometimes voluntarily to avoid discrimination, and other times due to clerical errors by immigration officials.
            </p>
            <h2>The Four Pillars of Surnames</h2>
            <p className="mb-4 text-gray-700">
              To understand the 100+ names in our collection, we must categorize them by their etymological roots:
            </p>
            <ul className="mb-4 text-gray-700">
              <li><b>Occupational (Metonymic):</b> Names like Smith (Blacksmith), Miller, and Taylor reflect the vital trades of early colonial life. These remain the most common because every village required these specialists.</li>
              <li><b>Patronymic:</b> Johnson (Son of John) and Williams reflect the English and Welsh traditions of identifying lineage through the father.</li>
              <li><b>Topographic:</b> Moore (living near a moor) or Hill identify where a family once lived.</li>
              <li><b>Descriptive:</b> Brown or White originally referred to the physical characteristics (hair or skin tone) of the family patriarch.</li>
            </ul>
            <h2>The Rise of Hispanic Surnames</h2>
            <p className="mb-4 text-gray-700">
              One of the most significant shifts in American onomastics in the 21st century is the rise of Hispanic surnames in the "Top 10." According to the most recent US Census data, names like Garcia, Rodriguez, and Martinez have overtaken traditional English names in many states. This reflects the demographic vitality of the United States and the enduring influence of Spanish colonial history in the Southwest.
            </p>
            <h2>Presidents and Power: Traditional Surnames</h2>
            <p className="mb-4 text-gray-700">
              Our "Traditional" list highlights names synonymous with American civic history. From Washington to Kennedy, these names often carry "prestige value." Interestingly, Washington is now considered the "Blackest" surname in America, with 90% of its bearers identifying as African American—a legacy of post-Civil War history where formerly enslaved people chose surnames representing the nation’s founders or concepts of liberty.
            </p>
            <h2>Modern Trends and the "Surnames-as-First-Names" Phenomenon</h2>
            <p className="mb-4 text-gray-700">
              In 2026, we see a recursive trend where common American last names are migrating into the "First Name" slot. Taylor, Jackson, and Anderson are now more popular as given names than surnames in some demographics. This fluid exchange shows that American naming conventions are more dynamic than ever, favoring "Surname Chic" as a way to honor maternal lineages or establish a sense of modern tradition.
            </p>
            <h2>Curator’s Insights (Sociological Commentary)</h2>
            <p className="mb-4 text-gray-700">
              <b>On Diversity:</b> "We curated this list to reflect the current demographic reality. It's not just a British-English list; it's a reflection of a 2026 multicultural society."<br />
              <b>On Genealogy:</b> "When researching these names, always look for the 'Original Spelling.' A Miller might have once been a German Mueller or a Dutch Mulder."
            </p>
          </section>
        </ReadMore>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="heading-2 mb-8">Common American Last Names</h2>
          <div className="italic text-sm text-gray-500 mb-4">
            <b>Curator's Note:</b> The "Common" category features names that have persisted through centuries of American history, often due to their occupational or patronymic roots. These names are a living record of the trades and lineages that built the nation, and their prevalence today reflects both tradition and the ongoing blending of cultures in the US.
          </div>
          <Card className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
              {commonNames.map((name, index) => (
                <div key={index} className="text-center p-2 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="font-medium text-primary-text">{name}</div>
                </div>
              ))}
            </div>
          </Card>

          <h2 className="heading-2 mb-8">Traditional American Last Names</h2>
          <div className="italic text-sm text-gray-500 mb-4">
            <b>Curator's Note:</b> Our "Traditional" list highlights names that echo the legacy of American presidents and civic leaders. These surnames often carry a sense of prestige and are deeply woven into the fabric of US history, symbolizing both leadership and the aspirations of generations.
          </div>
          <Card className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
              {traditionalNames.map((name, index) => (
                <div key={index} className="text-center p-2 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="font-medium text-primary-text">{name}</div>
                </div>
              ))}
            </div>
          </Card>

          <h2 className="heading-2 mb-8">Modern American Last Names</h2>
          <div className="italic text-sm text-gray-500 mb-4">
            <b>Curator's Note:</b> The "Modern" category showcases names that have gained popularity in recent decades, often crossing over into use as first names. This trend reflects the evolving nature of American identity, where tradition meets innovation and naming conventions adapt to a changing society.
          </div>
          <Card className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
              {modernNames.map((name, index) => (
                <div key={index} className="text-center p-2 bg-primary-bg border border-border rounded hover:bg-card-hover transition-colors">
                  <div className="font-medium text-primary-text">{name}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About American Last Names</h2>
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              American last names reflect the rich cultural heritage and diverse history of the United States. Our comprehensive list of 100+ American surnames includes traditional family names, modern variations, and unique options that celebrate American identity and ancestry.
            </p>
            <p className="paragraph">
              The most common American last names often have English, Scottish, Irish, or German origins, reflecting the early settlers who shaped the nation. Names like Smith, Johnson, and Williams have remained popular for generations, while newer additions reflect America's growing diversity and multicultural heritage.
            </p>
            <p className="paragraph">
              When selecting an American last name, consider its historical significance, cultural meaning, and how it represents your family's story. Many American surnames carry fascinating histories tied to immigration, settlement patterns, and the American experience of building new lives in a new land.
            </p>
            <h3 className="heading-3 mt-8 mb-4">American Last Name Origins</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text"><strong>English:</strong> Smith, Johnson, Williams, Brown, Jones</li>
              <li className="text-secondary-text"><strong>Scottish:</strong> Campbell, Stewart, Robertson, Anderson</li>
              <li className="text-secondary-text"><strong>Irish:</strong> Murphy, Kelly, O'Brien, Ryan</li>
              <li className="text-secondary-text"><strong>German:</strong> Miller, Wagner, Schmidt, Becker</li>
              <li className="text-secondary-text"><strong>Italian:</strong> Rossi, Romano, Ferrari, Bianchi</li>
              <li className="text-secondary-text"><strong>Spanish:</strong> Garcia, Rodriguez, Martinez, Lopez</li>
            </ul>
            <p className="paragraph">
              Our American last names list is completely free to browse and includes names suitable for all families and backgrounds. Whether you're researching your family history or choosing a name for your family, you'll find plenty of inspiration here.
            </p>
          </div>
          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Name Lists</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/baby-girl-names" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Baby Girl Names</div>
                <div className="text-sm text-secondary-text">Find baby girl names</div>
              </Link>
              <Link href="/baby-boy-names" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Baby Boy Names</div>
                <div className="text-sm text-secondary-text">Find baby boy names</div>
              </Link>
            </div>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqData.map((faq, idx) => (
              <div key={idx}>
                <h3 className="heading-3 mb-2">{faq.question}</h3>
                <p className="paragraph">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs text-gray-400 text-center mt-12 mb-4">
          Historical data sourced from US Census Bureau and Onomastic Research archives.
        </div>
      </main>
      <Footer />
    </div>
  )
}
