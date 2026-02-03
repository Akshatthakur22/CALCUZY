import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'American Last Names',
  description: 'Find popular American last names from our list of common US surnames. Browse traditional and modern American family names.',
  keywords: 'american last names, us surnames, common american names, family names',
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
      question: 'How many American last names are in the list?',
      answer: 'Our comprehensive list includes over 100 American last names, divided into common, traditional, and modern categories.'
    },
    {
      question: 'What are the most common American last names?',
      answer: 'The most common American last names include Smith, Johnson, Williams, Brown, and Jones, reflecting English heritage of early settlers.'
    },
    {
      question: 'What origins do American last names have?',
      answer: 'American last names come from diverse origins including English, Scottish, Irish, German, Italian, Spanish, and many other backgrounds.'
    },
    {
      question: 'How do I research my American last name?',
      answer: 'Research your American last name through genealogy websites, census records, immigration documents, and family histories.'
    },
    {
      question: 'Can I change my American last name?',
      answer: 'Yes, you can legally change your American last name through court petition. The process involves filing paperwork and attending a court hearing.'
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
            Find the perfect American last name from our comprehensive list of 
            100+ common surnames. Browse traditional, modern, and unique family names 
            that reflect American heritage and culture.
          </p>
        </div>

        <AdUnit slot={1} />

        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="heading-2 mb-8">Common American Last Names</h2>
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
              American last names reflect the rich cultural heritage and diverse history 
              of the United States. Our comprehensive list of 100+ American surnames includes 
              traditional family names, modern variations, and unique options that celebrate 
              American identity and ancestry.
            </p>
            
            <p className="paragraph">
              The most common American last names often have English, Scottish, Irish, 
              or German origins, reflecting the early settlers who shaped the nation. Names like 
              Smith, Johnson, and Williams have remained popular for generations, while 
              newer additions reflect America&apos;s growing diversity and multicultural heritage.
            </p>
            
            <p className="paragraph">
              When selecting an American last name, consider its historical significance, 
              cultural meaning, and how it represents your family&apos;s story. Many American 
              surnames carry fascinating histories tied to immigration, settlement patterns, 
              and the American experience of building new lives in a new land.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">American Last Name Origins</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text"><strong>English:</strong> Smith, Johnson, Williams, Brown, Jones</li>
              <li className="text-secondary-text"><strong>Scottish:</strong> Campbell, Stewart, Robertson, Anderson</li>
              <li className="text-secondary-text"><strong>Irish:</strong> Murphy, Kelly, O&apos;Brien, Ryan</li>
              <li className="text-secondary-text"><strong>German:</strong> Miller, Wagner, Schmidt, Becker</li>
              <li className="text-secondary-text"><strong>Italian:</strong> Rossi, Romano, Ferrari, Bianchi</li>
              <li className="text-secondary-text"><strong>Spanish:</strong> Garcia, Rodriguez, Martinez, Lopez</li>
            </ul>
            
            <p className="paragraph">
              Our American last names list is completely free to browse and includes names 
              suitable for all families and backgrounds. Whether you&apos;re researching your 
              family history or choosing a name for your family, you&apos;ll find plenty 
              of inspiration here.
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
            <div>
              <h3 className="heading-3 mb-2">How many American last names are in the list?</h3>
              <p className="paragraph">
                Our comprehensive list includes over 100 American last names, divided into 
                common, traditional, and modern categories. This provides plenty of options 
                for finding the perfect surname for your family.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What are the most common American last names?</h3>
              <p className="paragraph">
                The most common American last names include Smith, Johnson, Williams, 
                Brown, and Jones. These names have remained popular for decades and 
                reflect the English heritage of many early American settlers.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What origins do American last names have?</h3>
              <p className="paragraph">
                American last names come from diverse origins including English, Scottish, 
                Irish, German, Italian, Spanish, and many other European and 
                international backgrounds. This diversity reflects America&apos;s multicultural 
                heritage and immigration history.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">How do I research my American last name?</h3>
              <p className="paragraph">
                Research your American last name through genealogy websites, census 
                records, immigration documents, and family histories. Many American surnames 
                have fascinating stories tied to your ancestors&apos; journey to America.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can I change my American last name?</h3>
              <p className="paragraph">
                Yes, you can legally change your American last name through court 
                petition. The process typically involves filing paperwork, publishing a notice, 
                and attending a court hearing. Many people change names for marriage, 
                divorce, or personal preference.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
