import { ReactNode } from 'react'

interface Step {
  title: string
  description: string
}

interface FAQ {
  question: string
  answer: string
}

interface ToolInfoProps {
  title: string
  description: string | ReactNode
  steps?: Step[]
  faqs?: FAQ[]
  tips?: string[]
  className?: string
}

/**
 * ToolInfo - Contextual SEO content component
 * Renders "How to Use" and "FAQ" sections with clean typography
 * Increases dwell time and provides valuable content for SEO
 */
export default function ToolInfo({
  title,
  description,
  steps,
  faqs,
  tips,
  className = '',
}: ToolInfoProps) {
  return (
    <div className={`max-w-4xl mx-auto space-y-10 ${className}`}>
      {/* About Section */}
      <section>
        <h2 className="text-2xl lg:text-3xl font-semibold text-slate-900 mb-4">
          About {title}
        </h2>
        <div className="text-base lg:text-lg text-slate-600 leading-relaxed">
          {typeof description === 'string' ? <p>{description}</p> : description}
        </div>
      </section>

      {/* How to Use Steps */}
      {steps && steps.length > 0 && (
        <section>
          <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-6">
            How to Use This Tool
          </h3>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 
                  hover:bg-slate-100 hover:border-slate-200 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full 
                  flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-slate-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Pro Tips */}
      {tips && tips.length > 0 && (
        <section className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-lg font-semibold text-slate-900">Pro Tips</h3>
          </div>
          <ul className="space-y-2">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-600">{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section>
          <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-6">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden
                  hover:border-slate-300 transition-all duration-200"
              >
                <summary className="flex items-center justify-between p-4 cursor-pointer 
                  font-medium text-slate-900 hover:bg-slate-50 transition-colors list-none">
                  <span>{faq.question}</span>
                  <svg 
                    className="w-5 h-5 text-slate-400 transition-transform duration-200 
                      group-open:rotate-180" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

/**
 * QuickFAQ - Compact FAQ display for inline use
 */
interface QuickFAQProps {
  faqs: FAQ[]
  className?: string
}

export function QuickFAQ({ faqs, className = '' }: QuickFAQProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {faqs.map((faq, index) => (
        <div key={index} className="p-4 bg-slate-50 rounded-xl">
          <h4 className="font-medium text-slate-900 mb-2">{faq.question}</h4>
          <p className="text-sm text-slate-600">{faq.answer}</p>
        </div>
      ))}
    </div>
  )
}

/**
 * InfoCard - Single info card for key points
 */
interface InfoCardProps {
  icon: ReactNode
  title: string
  description: string
  color?: 'blue' | 'emerald' | 'amber' | 'red' | 'purple'
}

export function InfoCard({ icon, title, description, color = 'blue' }: InfoCardProps) {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-100 text-blue-600',
    emerald: 'bg-emerald-50 border-emerald-100 text-emerald-600',
    amber: 'bg-amber-50 border-amber-100 text-amber-600',
    red: 'bg-red-50 border-red-100 text-red-600',
    purple: 'bg-purple-50 border-purple-100 text-purple-600',
  }

  return (
    <div className={`p-4 rounded-xl border ${colorClasses[color]}`}>
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h4 className="font-semibold text-slate-900">{title}</h4>
      </div>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  )
}
