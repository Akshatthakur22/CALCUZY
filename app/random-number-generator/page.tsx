import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RandomNumberClient from '@/components/client/RandomNumberClient'
import RelatedTools from '@/components/RelatedTools'
import ToolInfo from '@/components/ToolInfo'
import AdUnit from '@/components/AdUnit'
import { createMetadata, createToolSchema, createFAQSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Random Number Generator - Generate Random Numbers Instantly',
  description: 'Generate random numbers instantly with customizable range and quantity. Perfect for games, contests, statistics, random selection, and decision making. Cryptographically secure, mobile-friendly, and completely free.',
  keywords: 'random number generator, generate random numbers, random number tool, lottery number generator, dice roller, random picker, number generator',
  url: 'https://calcuzy.app/random-number-generator',
  image: '/og-tools.png',
})

export default function RandomNumberGenerator() {
  const structuredData = createToolSchema({
    name: 'Random Number Generator',
    description: 'Generate random numbers instantly with customizable range and quantity for games, contests, and statistics',
    url: 'https://calcuzy.app/random-number-generator',
    category: 'UtilityApplication',
    features: ['Custom range selection', 'Multiple number generation', 'Instant results', 'Copy to clipboard', 'Mobile-friendly']
  })

  const faqData = [
    {
      question: 'How random are the numbers generated?',
      answer: 'Our random number generator uses JavaScript\'s Math.random() function, which produces pseudorandom numbers with uniform distribution across the specified range. Each number has equal probability of being selected, ensuring true randomness for games, statistics, and general applications. The algorithm is cryptographically secure for standard use but not suitable for high-security cryptographic applications.'
    },
    {
      question: 'What is the range of numbers I can generate?',
      answer: 'You can generate random numbers within any range from 1 to 999,999,999. The generator also supports negative numbers and decimal values if needed. For large ranges, the tool efficiently handles the calculations while maintaining uniform distribution. The range flexibility makes it suitable for everything from simple dice rolls to complex statistical sampling.'
    },
    {
      question: 'Can I generate multiple numbers at once?',
      answer: 'Yes, our generator allows you to create multiple random numbers simultaneously, from 1 to 100 numbers at once. Each number is generated independently with uniform distribution, making it perfect for bulk operations, statistical sampling, or game scenarios requiring multiple random values. You can also specify whether duplicates are allowed based on your specific use case.'
    },
    {
      question: 'How does this compare to professional random number generators?',
      answer: 'Our generator provides high-quality pseudorandom numbers suitable for most applications including gaming, statistics, and casual use. For professional or cryptographic applications requiring true randomness, we recommend using specialized hardware random number generators or cryptographic libraries. However, for everyday use like games, contests, and general random selection, our generator provides excellent quality and reliability.'
    },
    {
      question: 'Is the randomness truly unpredictable?',
      answer: 'JavaScript\'s Math.random() produces pseudorandom numbers that are statistically random for practical purposes but not suitable for cryptographic security. The randomness quality can be tested using statistical methods like chi-square tests to verify uniform distribution. For applications requiring true randomness, consider using cryptographically secure methods or specialized random number generation services.'
    },
    {
      question: 'Can I use this for scientific research?',
      answer: 'Absolutely! Our random number generator is ideal for Monte Carlo simulations, statistical sampling, hypothesis testing, and experimental research. Generate large datasets for statistical analysis, create random samples for controlled experiments, or simulate complex systems. The uniform distribution ensures unbiased results, while the ability to set custom ranges and quantities makes it versatile for various research methodologies.'
    },
    {
      question: 'How does this work with probability calculations?',
      answer: 'While our generator focuses on producing random numbers, you can use the results for probability calculations. For example, calculate the probability of rolling a specific number on a die, or determine the likelihood of certain outcomes in statistical scenarios. The uniform distribution means each outcome has equal probability, making probability calculations straightforward and accurate.'
    },
    {
      question: 'Can I integrate this with other tools?',
      answer: 'Our random number generator provides clean, copyable results that can be easily integrated with other applications. The numbers can be copied individually or as a complete list, making it convenient for data entry into spreadsheets, statistical software, or other digital tools. This integration capability enhances workflow efficiency for data analysis, research, and project management.'
    },
    {
      question: 'What are the limitations of random number generation?',
      answer: 'Computer-generated random numbers are pseudorandom, meaning they follow predictable patterns if the starting point (seed) is known. For applications requiring true unpredictability, consider using atmospheric noise, quantum phenomena, or specialized hardware random number generators. Additionally, the range of numbers is limited by computer precision and the specific algorithm used. For critical applications requiring high security, use cryptographically secure methods instead of standard pseudorandom generation.'
    },
    {
      question: 'How can I verify the randomness quality?',
      answer: 'You can test randomness quality using statistical methods like frequency analysis, chi-square goodness-of-fit tests, or runs tests for autocorrelation. For our generator, you should see approximately uniform distribution across the specified range. Professional testing also includes checking for patterns, cycles, or other predictable behaviors that would indicate poor randomness quality.'
    },
    {
      question: 'Is the random number generator secure and private?',
      answer: 'Yes, all number generation happens locally in your browser. We don\'t send, store, or log any of your inputs or generated numbers. Your data remains completely private and secure on your device.'
    }
  ]

  const faqSchema = createFAQSchema(faqData)

  const steps = [
    { title: 'Set Minimum Value', description: 'Enter the lowest possible number you want in your range (e.g., 1 for dice rolls).' },
    { title: 'Set Maximum Value', description: 'Enter the highest possible number you want (e.g., 6 for a standard die, 100 for percentages).' },
    { title: 'Choose Quantity', description: 'Specify how many random numbers to generate (1-1000).' },
    { title: 'Generate & Copy', description: 'Click Generate to create your random numbers, then copy them with one click.' }
  ]

  const tips = [
    'Use 1-6 range for dice rolls, 1-52 for card draws, or 1-100 for percentages',
    'Generate multiple numbers at once for lottery picks or team assignments',
    'All numbers have equal probability within your range (uniform distribution)',
    'Results are instantly copyable for easy sharing or documentation'
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
            Random Number Generator
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            <strong>Welcome to the most versatile Random Number Generator online.</strong> Our tool is designed for fairness, privacy, and transparency—empowering you to generate random numbers for any purpose, from gaming to research.<br /><br />
            <span className="text-primary-text/80">
              <strong>What sets this tool apart?</strong> We combine instant results with in-depth explanations, real-world use cases, and expert tips. Whether you’re a teacher, developer, gamer, or scientist, you’ll find guidance and resources to help you use randomness responsibly and effectively.
            </span>
          </p>
        </div>

        <AdUnit slot={1} />

        <RandomNumberClient />

        <AdUnit slot={2} />

        {/* Deep Dive: The Science of Randomness */}
        <details className="mb-6 bg-white rounded-lg shadow p-6">
          <summary className="font-semibold text-lg cursor-pointer">Deep Dive: The Science of Randomness</summary>
          <div className="mt-4 text-base text-primary-text/90">
            <p>
              <strong>How does this generator work?</strong> Our tool uses JavaScript’s <code>Math.random()</code> function, which produces pseudorandom numbers with a uniform distribution. While suitable for most practical uses, it is not cryptographically secure.<br /><br />
              <strong>What is true randomness?</strong> True random numbers are generated from unpredictable physical processes (like radioactive decay or atmospheric noise). Most online tools—including this one—use algorithms to simulate randomness, which is sufficient for games, sampling, and education.
            </p>
            <ul className="list-disc ml-6 mt-4">
              <li><strong>Uniformity:</strong> Every number in your chosen range has an equal chance of being selected.</li>
              <li><strong>Privacy:</strong> All generation happens locally in your browser. No data is sent or stored.</li>
              <li><strong>Limitations:</strong> For cryptographic or security-critical applications, use a dedicated cryptographic random function.</li>
            </ul>
            <p className="mt-4 text-sm text-primary-text/60">Sources: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random" target="_blank" rel="noopener noreferrer" className="underline">MDN: Math.random()</a>, <a href="https://www.random.org/randomness/" target="_blank" rel="noopener noreferrer" className="underline">Random.org: What is True Randomness?</a></p>
          </div>
        </details>

        {/* Real-World Use Cases & User Stories */}
        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Real-World Use Cases & User Stories</h2>
          <ul className="list-disc ml-6 text-base text-primary-text/90">
            <li><strong>Gaming & Entertainment:</strong> Priya uses the generator to simulate dice rolls for her board game night, ensuring fair play for all participants.</li>
            <li><strong>Research & Statistics:</strong> Dr. Lee, a data scientist, generates random samples for A/B testing and unbiased data analysis.</li>
            <li><strong>Education:</strong> Teachers use the tool to assign students to random groups or select quiz questions.</li>
            <li><strong>Contests & Giveaways:</strong> Organizers pick winners transparently and fairly using the generator.</li>
          </ul>
        </section>

        {/* Comprehensive Random Number Guide */}
        <section className="mb-12">
          <h2 className="font-semibold text-lg mb-6">Complete Guide to Random Number Generation & Probability</h2>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="paragraph">
              Random number generation is a fascinating intersection of mathematics, computer science, and practical applications that touch countless aspects of modern life. Our comprehensive guide explores the underlying principles of randomness, the technology that makes it possible, and the diverse applications from gaming and statistics to cryptography and decision making. Understanding random number generation provides insights into probability theory, statistical methods, and the role of randomness in everything from scientific research to everyday problem-solving.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">The Science and Mathematics of Randomness</h3>
            <p className="paragraph mb-6">
              True randomness is one of the most intriguing concepts in mathematics and computer science. Unlike deterministic processes, random number generation relies on complex algorithms that produce unpredictable sequences. The quality of randomness is measured by properties like uniformity, independence, and unpredictability. Our generator uses JavaScript's Math.random() function, which produces pseudorandom numbers with uniform distribution—meaning each number in the specified range has equal probability of being selected.
              </p>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-100 mb-6">
              <h4 className="font-semibold text-green-900 mb-3">Types of Random Number Generation</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>True Random:</strong> Based on unpredictable physical phenomena (radioactive decay)</p>
                  <p className="text-green-700">Used for cryptography and high-security applications</p>
                </div>
                <div>
                  <p><strong>Pseudorandom:</strong> Algorithm-based with uniform distribution</p>
                  <p className="text-green-700">Most common for computers and general applications</p>
                </div>
                <div>
                  <p><strong>Cryptographic:</strong> Based on complex mathematical functions and entropy sources</p>
                  <p className="text-green-700">Used for security, simulations, and advanced applications</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Practical Applications and Use Cases</h3>
            <p className="paragraph mb-6">
              Random number generation serves countless practical purposes across various fields. In gaming and entertainment, it ensures fair gameplay by providing truly unpredictable outcomes for dice rolls, card shuffling, and random events. Scientific research uses random numbers for Monte Carlo simulations, statistical sampling, and hypothesis testing. In business, random selection helps with unbiased decision making, A/B testing, and quality control. Even in creative fields like art and music, random number generators inspire new ideas and break creative blocks.
              </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
              <h4 className="font-semibold text-blue-900 mb-3">Common Applications</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Gaming:</strong> Dice rolls, card games, random encounters</p>
                  <p className="text-blue-700">Ensures fair gameplay and unpredictable experiences</p>
                </div>
                <div>
                  <p><strong>Statistics:</strong> Sampling, surveys, data analysis</p>
                  <p className="text-blue-700">Provides unbiased selection for research and polling</p>
                </div>
                <div>
                  <p><strong>Cryptography:</strong> Key generation, security protocols</p>
                  <p className="text-blue-700">Essential for encryption and secure communications</p>
                </div>
                <div>
                  <p><strong>Simulations:</strong> Monte Carlo methods, scientific modeling</p>
                  <p className="text-blue-700">Used for complex system modeling and risk analysis</p>
                </div>
                <div>
                  <p><strong>Decision Making:</strong> Random selection, A/B testing</p>
                  <p className="text-blue-700">Provides unbiased choices and fair comparisons</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Quality and Security Considerations</h3>
            <p className="paragraph mb-6">
              The quality of random number generation depends on the algorithm's properties and implementation. Our generator uses industry-standard methods that produce statistically random sequences with good distribution properties. For security-sensitive applications like cryptography, cryptographically secure random number generators are essential. While our generator is perfect for games, statistics, and general use, we recommend using specialized cryptographic libraries for high-security needs. The randomness quality can be tested using statistical methods to ensure uniformity and independence.
              </p>
            
            <p className="paragraph">
              Whether you're running a tabletop game, conducting scientific research, making business decisions, or simply need a random number for everyday use, our generator provides reliable, fast results with the flexibility to customize range and quantity. Understanding the principles behind random number generation enhances your ability to use these tools effectively and appreciate the role of randomness in modern technology.
            </p>
          </div>
        </section>

        {/* Tool Info Section */}
        <div className="mt-16 fade-in-up">
          <ToolInfo
            title="Random Number Generator"
            description={
              <>
                <p className="mb-4">
                  Our random number generator provides uniformly distributed random values using 
                  JavaScript&apos;s Math.random() function. This tool is perfect for games, contests, 
                  statistical sampling, and any situation requiring fair random selection.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">🎲 Gaming & Entertainment</h4>
                    <p className="text-sm text-blue-700">
                      Dice rolls, card games, lottery picks, raffle winners, and contest selections.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">📊 Research & Statistics</h4>
                    <p className="text-sm text-emerald-700">
                      Statistical sampling, random assignments, A/B testing, and data analysis.
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

        {/* Did You Know? & Authoritative Resources */}
        <section className="mb-10">
          <h2 className="font-semibold text-lg mb-2">Did You Know?</h2>
          <ul className="list-disc ml-6 text-base text-primary-text/90">
            <li>True random numbers can be generated from physical processes like radioactive decay or atmospheric noise.</li>
            <li>Most online generators use algorithms to simulate randomness, which is sufficient for most non-security uses.</li>
            <li>Randomness is essential in cryptography, gaming, simulations, and scientific research.</li>
            <li>Random.org is a well-known service that provides true random numbers from atmospheric noise.</li>
          </ul>
          <p className="mt-4 text-sm text-primary-text/60">For more information, visit <a href="https://www.random.org/" target="_blank" rel="noopener noreferrer" className="underline">Random.org</a> or <a href="https://en.wikipedia.org/wiki/Random_number_generation" target="_blank" rel="noopener noreferrer" className="underline">Wikipedia: Random Number Generation</a>.</p>
        </section>

        <AdUnit slot={3} />

        {/* Related Tools */}
        <div className="max-w-4xl mx-auto mt-12 fade-in-up">
          <RelatedTools currentTool="/random-number-generator" category="utility" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
