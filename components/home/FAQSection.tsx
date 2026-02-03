'use client'

import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'What is Calcuzy?',
    answer: "Calcuzy is your all-in-one online tools platform offering 100+ free tools including calculators, generators, converters, finance tools, legal document generators, and daily utilities. Everything is designed to be fast, accurate, and easy to use."
  },
  {
    question: 'Are these tools really free?',
    answer: "Yes, all tools on Calcuzy are completely free forever. We're supported by non-intrusive advertisements, so you don't need to pay, sign up, or provide any personal information to use any of our tools."
  },
  {
    question: 'How accurate are the calculators?',
    answer: "Our calculators use verified formulas and are regularly updated to ensure accuracy. Financial tools incorporate current tax laws, health calculators follow medical guidelines, and all mathematical computations are precision-tested. However, always consult professionals for critical decisions."
  },
  {
    question: 'Will more tools be added?',
    answer: "Absolutely! We add new tools every month based on user feedback and trending needs. We're also developing AI-powered tools for future release. Check back regularly or follow our updates to discover new utilities."
  },
  {
    question: 'Do I need to create an account?',
    answer: "No account required. All tools work instantly without registration. We don't collect personal data, and all calculations happen locally in your browser for complete privacy."
  },
  {
    question: 'How does Calcuzy earn money?',
    answer: "Calcuzy is funded through advertisements displayed strategically on the site. This allows us to keep all tools free while maintaining high-quality service. We ensure ads are non-intrusive and don't interfere with tool functionality."
  }
]

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="bg-white rounded-[16px] overflow-hidden transition-all duration-300 shadow-[0_2px_12px_rgb(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-slate-50/50 transition-colors"
      >
        <h3 className="text-base md:text-lg font-semibold text-slate-900 pr-4">
          {faq.question}
        </h3>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-blue-500' : 'bg-slate-100'}`}>
          <svg
            className={`w-4 h-4 transition-all duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-slate-500'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="px-5 md:px-6 pb-5 md:pb-6 text-slate-500 text-sm md:text-base leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center tracking-tight">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
