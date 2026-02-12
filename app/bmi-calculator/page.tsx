import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BMICalculatorClient from '@/components/client/BMICalculatorClient'
import RelatedTools from '@/components/RelatedTools'
import ToolInfo from '@/components/ToolInfo'
import AdUnit from '@/components/AdUnit'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createMetadata, createToolSchema, createFAQSchema, createBreadcrumbSchema } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'BMI Calculator',
  description: 'Calculate your Body Mass Index (BMI) instantly with our free health tool. Get accurate results based on WHO and CDC guidelines, understand health categories, and track your wellness journey. No data storage, 100% private.',
  keywords: 'BMI calculator, body mass index, health calculator, weight assessment, WHO BMI, CDC BMI, health screening, wellness tool',
  url: 'https://calcuzy.app/bmi-calculator',
  image: '/og/og-default.png'
})

export default function BMICalculator() {
  const structuredData = createToolSchema({
    name: 'BMI Calculator',
    description: 'Calculate your Body Mass Index (BMI) instantly with our free health tool. Get accurate results based on WHO and CDC guidelines, understand health categories, and track your wellness journey.',
    url: 'https://calcuzy.app/bmi-calculator',
    category: 'HealthApplication',
    features: ['Metric and Imperial units', 'Instant BMI calculation', 'Health category classification', 'WHO standards', 'Privacy-focused calculations', 'Adult BMI assessments']
  })

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://calcuzy.app' },
    { name: 'Tools', url: 'https://calcuzy.app/tools' },
    { name: 'Health', url: 'https://calcuzy.app/tools#health' },
    { name: 'BMI Calculator', url: 'https://calcuzy.app/bmi-calculator' }
  ])

  const expertFaqData = [
    {
      question: 'Why does BMI not distinguish between muscle and fat?',
      answer: 'BMI is a measure of total mass; it cannot differentiate between high muscle density and high adipose tissue, which is why athletes often have \"Obese\" BMIs despite low body fat.'
    },
    {
      question: 'Is this calculator accurate for children and teens?',
      answer: 'While the basic formula is the same, children\'s BMI must be interpreted as a percentile relative to their age and sex. This tool is optimized for adults 20 and older.'
    },
    {
      question: 'What are the clinical ranges for Obesity Classes I, II, and III?',
      answer: 'Class I is 30.0-34.9, Class II is 35.0-39.9, and Class III (Severe Obesity) is ≥ 40.0.'
    },
    {
      question: 'How does waist circumference factor into a BMI result?',
      answer: 'For those with a BMI between 25.0 and 34.9, doctors often measure waist circumference to better assess abdominal fat risk.'
    },
    {
      question: 'Can BMI be used to diagnose a medical condition?',
      answer: 'No, BMI is a screening tool only. A clinical diagnosis requires further assessment like skinfold thickness, diet evaluation, and physical activity history.'
    }
  ]

  const faqSchema = createFAQSchema(expertFaqData)

  // Remove howToSchema as it doesn't exist in the current metadata API

  const steps = [
    { title: 'Select Unit System', description: 'Choose between Metric (kg, m) or Imperial (lbs, inches) based on your preference.' },
    { title: 'Enter Your Weight', description: 'Input your current weight in the selected unit system.' },
    { title: 'Enter Your Height', description: 'Input your height in meters or inches depending on your unit choice.' },
    { title: 'View Your Results', description: 'See your BMI value and health category classification instantly.' },
    { title: 'Understand Your Category', description: 'Learn what your BMI means and recommended actions if needed.' }
  ]

  const tips = [
    'Measure weight at the same time each day for consistency',
    'BMI is one metric - also consider waist circumference and body composition',
    'Athletes may have higher BMI due to muscle mass, which is healthy',
    'Focus on sustainable lifestyle changes rather than quick fixes',
    'Consult a healthcare provider for personalized health advice'
  ]

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      
      <main className="container section-responsive">
        <Breadcrumbs 
          items={[
            { name: 'Tools', url: '/tools' },
            { name: 'Health', url: '/tools#health' },
            { name: 'BMI Calculator', url: '/bmi-calculator' }
          ]}
        />
        <div className="text-center mb-12 slide-up">
          <h1 className="heading-1 text-center mb-6">
            BMI Calculator
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            <strong>Welcome to the most comprehensive BMI Calculator online.</strong> Our tool is designed for accuracy, privacy, and education—empowering you to understand your health beyond just a number. Unlike generic calculators, we provide context, expert guidance, and actionable next steps, all based on the latest clinical research and global health standards.<br /><br />
            <span className="text-primary-text/80">
              <strong>What makes this tool unique?</strong> We combine instant calculation with in-depth explanations, real-world use cases, and expert tips. Whether you are a patient, athlete, parent, or healthcare professional, you’ll find tailored advice and resources to help you interpret your BMI and take meaningful action.
            </span>
          </p>
        </div>

        <AdUnit slot={1} />

        <BMICalculatorClient />

        <AdUnit slot={2} />

        {/* Deep Concept Dive Accordion */}
        <details className="mb-6 bg-white rounded-lg shadow p-6">
          <summary className="font-semibold text-lg cursor-pointer">Deep Concept Dive: The Science & History of BMI</summary>
          <div className="mt-4 text-base text-primary-text/90">
            <p>
              <strong>What is BMI?</strong> Body Mass Index (BMI) is a simple, widely used method to estimate body fat based on height and weight. It was introduced by Adolphe Quetelet in the 19th century and is now recommended by the <a href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">World Health Organization (WHO)</a> and <a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">CDC</a> as a first-line screening tool for weight-related health risks.<br /><br />
              <strong>Why does BMI matter?</strong> High or low BMI values are linked to increased risk of chronic diseases, including heart disease, diabetes, and hypertension. However, BMI is not a diagnostic tool—it’s a starting point for further health assessment.
            </p>
            <ul className="list-disc ml-6 mt-4">
              <li><strong>Limitations:</strong> BMI does not account for muscle mass, bone density, or fat distribution. Athletes and older adults may have misleading results.</li>
              <li><strong>Clinical Use:</strong> Doctors use BMI alongside other measures (waist circumference, blood tests, lifestyle review) for a complete health picture.</li>
              <li><strong>Global Standard:</strong> BMI cutoffs are standardized by WHO and CDC, but some countries use adjusted ranges for specific populations.</li>
            </ul>
            <p className="mt-4 text-sm text-primary-text/60">Sources: <a href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" target="_blank" rel="noopener noreferrer" className="underline">WHO</a>, <a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html" target="_blank" rel="noopener noreferrer" className="underline">CDC</a></p>
          </div>
        </details>

        {/* Real-World Use Cases & User Stories */}
        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Real-World Use Cases & User Stories</h2>
          <ul className="list-disc ml-6 text-base text-primary-text/90">
            <li><strong>Health Screening:</strong> Priya, a 32-year-old office worker, uses the BMI calculator to check if her weight is in the healthy range before her annual checkup. She brings her BMI result to her doctor for a more detailed metabolic assessment.</li>
            <li><strong>Fitness Tracking:</strong> Alex, a competitive swimmer, tracks his BMI and body fat percentage over time to ensure his training is building muscle, not just weight. He uses the tool to spot trends and adjust his nutrition plan.</li>
            <li><strong>Pediatric Monitoring:</strong> Parents use the calculator to prepare for pediatrician visits, ensuring their child’s height and weight are on track for their age and sex. The tool helps them ask better questions about growth and nutrition.</li>
            <li><strong>Public Health:</strong> Community health workers use BMI data to identify at-risk populations and design targeted wellness programs.</li>
          </ul>
        </section>

        {/* Comprehensive Health & Wellness Guide */}
        <section className="mb-12">
          <h2 className="font-semibold text-lg mb-6">Complete Guide to Body Mass Index & Health Assessment</h2>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="paragraph">
              Body Mass Index (BMI) is one of the most widely used health screening tools globally, serving as a fundamental indicator of body composition and potential health risks. Developed by Belgian mathematician Adolphe Quetelet in the 1830s, BMI has evolved from a simple mathematical concept to a cornerstone of preventive healthcare. Our comprehensive BMI calculator not only provides instant results but also delivers the context and understanding needed to interpret these numbers meaningfully.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Understanding BMI Categories and Health Implications</h3>
            <p className="paragraph mb-6">
              The World Health Organization (WHO) and Centers for Disease Control (CDC) have established standardized BMI categories that help healthcare professionals and individuals assess potential health risks. These categories—Underweight (BMI &lt; 18.5), Normal (18.5-24.9), Overweight (25.0-29.9), and Obese (BMI ≥ 30.0)—are based on extensive research linking BMI values to mortality rates and disease prevalence. However, it's crucial to understand that BMI is a screening tool, not a diagnostic instrument, and should be interpreted alongside other health indicators.
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-100 mb-6">
              <h4 className="font-semibold text-green-900 mb-3">BMI Categories for Adults (WHO/CDC Standards)</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Underweight:</strong> BMI &lt; 18.5</p>
                  <p className="text-green-700">Potential nutritional deficiencies, weakened immune system</p>
                </div>
                <div>
                  <p><strong>Normal Weight:</strong> BMI 18.5-24.9</p>
                  <p className="text-green-700">Lowest risk of weight-related diseases</p>
                </div>
                <div>
                  <p><strong>Overweight:</strong> BMI 25.0-29.9</p>
                  <p className="text-green-700">Increased risk of heart disease, diabetes</p>
                </div>
                <div>
                  <p><strong>Obese:</strong> BMI ≥ 30.0</p>
                  <p className="text-green-700">High risk of cardiovascular diseases, certain cancers</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Beyond BMI: Comprehensive Health Assessment</h3>
            <p className="paragraph mb-6">
              While BMI provides valuable insights, optimal health assessment requires a multifaceted approach. Healthcare professionals recommend considering additional measurements including waist circumference, body fat percentage, waist-to-hip ratio, and overall physical fitness level. Waist circumference, for instance, helps identify visceral fat (dangerous abdominal fat) that BMI might miss, while body fat percentage provides clarity on muscle-to-fat ratio that BMI cannot distinguish. Our calculator serves as your first step in understanding your body composition, but we encourage using it as part of a broader health monitoring strategy.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Special Considerations for Different Populations</h3>
            <p className="paragraph mb-6">
              BMI interpretation requires careful consideration of individual factors that can affect results. Athletes and individuals with high muscle mass may have elevated BMIs despite low body fat percentages, as muscle tissue is denser than fat tissue. Older adults may experience changes in height and muscle mass that affect BMI accuracy. Additionally, different ethnic groups may have varying health risk profiles at the same BMI values, leading some health organizations to recommend adjusted BMI cutoffs for specific populations. These nuances highlight why BMI should be considered alongside other health indicators and professional medical advice.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Practical Applications and Next Steps</h3>
            <p className="paragraph mb-6">
              Your BMI result serves as a valuable starting point for health discussions with healthcare providers. If your BMI falls outside the normal range, consider consulting with a registered dietitian for personalized nutrition guidance, a certified fitness trainer for exercise planning, or your primary care physician for comprehensive health assessment. Even within normal range, regular monitoring of BMI trends can help maintain long-term health and catch potential issues early. Remember that sustainable lifestyle changes—balanced nutrition, regular physical activity, adequate sleep, and stress management—are more impactful than focusing on BMI numbers alone.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-900 mb-3">Key Takeaways for BMI Users</h4>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>Use BMI as a screening tool, not a definitive health diagnosis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>Consider additional health metrics for complete assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>Account for individual factors like muscle mass and age</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>Focus on sustainable lifestyle changes over quick fixes</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Math/Logic Section Accordion with LaTeX */}
        <details className="mb-6 bg-white rounded-lg shadow p-6">
          <summary className="font-semibold text-lg cursor-pointer">The Math & Logic Behind BMI</summary>
          <div className="mt-4 text-base text-primary-text/90">
            <p><strong>How is BMI calculated?</strong></p>
            <div className="my-2">
              <span className="katex-display">{`$$BMI = \frac{weight\ (kg)}{height\ (m)^2}$$`}</span>
            </div>
            <p>For Imperial units, the formula is:</p>
            <div className="my-2">
              <span className="katex-display">{`$$BMI = \frac{weight\ (lb)}{height\ (in)^2} \times 703$$`}</span>
            </div>
            <p>
              <strong>Why these formulas?</strong> The metric formula is based on the original Quetelet Index, while the 703 factor in the imperial formula standardizes results to match metric BMI categories. Our calculator uses these formulas and maps your result to the latest WHO/CDC health categories for adults.
            </p>
            <p className="mt-2 text-sm text-primary-text/60">Reference: <a href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html" target="_blank" rel="noopener noreferrer" className="underline">CDC: About Adult BMI</a></p>
          </div>
        </details>

        {/* Strategic FAQ & Expert Insights */}
        <section className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Strategic FAQ & Expert Insights</h2>
          <ul className="list-disc ml-6 text-base text-primary-text/90">
            <li><strong>Why does BMI not distinguish between muscle and fat?</strong> BMI is a measure of total mass; it cannot differentiate between high muscle density and high adipose tissue, which is why athletes often have 'Obese' BMIs despite low body fat. <span className="text-primary-text/60">Tip: If you are very athletic, consider a body composition test for more accurate results.</span></li>
            <li><strong>Is this calculator accurate for children and teens?</strong> While the basic formula is the same, children's BMI must be interpreted as a percentile relative to their age and sex. This tool is optimized for adults 20 and older. <span className="text-primary-text/60">Tip: Use the CDC’s BMI-for-age charts for pediatric assessment.</span></li>
            <li><strong>What are the clinical ranges for Obesity Classes I, II, and III?</strong> Class I is $30.0-34.9$, Class II is $35.0-39.9$, and Class III (Severe Obesity) is $\ge 40.0$. <span className="text-primary-text/60">Source: <a href="https://www.cdc.gov/obesity/basics/adult-defining.html" target="_blank" rel="noopener noreferrer" className="underline">CDC Obesity Definitions</a></span></li>
            <li><strong>How does waist circumference factor into a BMI result?</strong> For those with a BMI between $25.0$ and $34.9$, doctors often measure waist circumference to better assess abdominal fat risk. <span className="text-primary-text/60">Tip: A waist circumference over 40 inches (men) or 35 inches (women) increases health risk.</span></li>
            <li><strong>Can BMI be used to diagnose a medical condition?</strong> No, BMI is a screening tool only. A clinical diagnosis requires further assessment like skinfold thickness, diet evaluation, and physical activity history. <span className="text-primary-text/60">Tip: Always consult a healthcare provider for a full evaluation.</span></li>
          </ul>
        </section>

        {/* Did You Know? & Authoritative Resources */}
        <section className="mb-10">
          <h2 className="font-semibold text-lg mb-2">Did You Know?</h2>
          <ul className="list-disc ml-6 text-base text-primary-text/90">
            <li>The BMI formula was invented in the 1830s—almost 200 years ago!</li>
            <li>Some countries use different BMI cutoffs for Asian populations due to higher health risks at lower BMI values.</li>
            <li>BMI is used in major epidemiological studies to track global health trends.</li>
            <li>Waist-to-height ratio is emerging as a complementary metric for health risk assessment.</li>
          </ul>
          <p className="mt-4 text-sm text-primary-text/60">For more information, visit the <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm" target="_blank" rel="noopener noreferrer" className="underline">National Heart, Lung, and Blood Institute</a> or <a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html" target="_blank" rel="noopener noreferrer" className="underline">CDC BMI Resources</a>.</p>
        </section>

        <AdUnit slot={3} />

        <RelatedTools currentTool="/bmi-calculator" category="health" />
      </main>

      <Footer />
    </div>
  )
}
