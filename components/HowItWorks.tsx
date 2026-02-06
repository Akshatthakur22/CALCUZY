import React from 'react'

interface HowItWorksProps {
  title?: string
  steps: Array<{
    title: string
    description: string
    icon?: React.ReactNode
  }>
  className?: string
}

export default function HowItWorks({ 
  title = "How It Works", 
  steps, 
  className = "" 
}: HowItWorksProps) {
  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            {title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                
                {/* Icon (if provided) */}
                {step.icon && (
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                )}
                
                <h3 className="font-semibold text-slate-900 mb-3 text-lg">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Predefined configurations for different tool types
export const calculatorHowItWorks = [
  {
    title: "Input Your Data",
    description: "Enter your financial information, investment details, or personal data into our secure calculator interface."
  },
  {
    title: "Instant Calculation",
    description: "Our advanced algorithms process your information instantly using proven mathematical models and current tax rates."
  },
  {
    title: "Get Results & Insights",
    description: "Receive comprehensive results with expert insights, optimization strategies, and actionable recommendations."
  }
]

export const generatorHowItWorks = [
  {
    title: "Choose Your Preferences",
    description: "Select your preferred style, category, or criteria from our comprehensive options and filters."
  },
  {
    title: "Generate Instantly",
    description: "Our intelligent generator creates personalized results based on your preferences using advanced algorithms."
  },
  {
    title: "Customize & Export",
    description: "Refine your results with customization options and export in your preferred format for immediate use."
  }
]

export const countdownHowItWorks = [
  {
    title: "Select Your Event",
    description: "Choose from popular holidays, events, or create custom countdowns for your special occasions."
  },
  {
    title: "Real-Time Tracking",
    description: "Our precision timer updates in real-time, showing exact days, hours, minutes, and seconds remaining."
  },
  {
    title: "Plan & Prepare",
    description: "Use our planning tools and reminders to prepare perfectly for your upcoming events and deadlines."
  }
]
