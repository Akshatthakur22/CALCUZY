type YMYLCategory = 'health' | 'legal' | 'finance'

const disclaimerText: Record<YMYLCategory, string> = {
  health:
    'This calculator is for informational purposes only and is not medical advice. Consult a qualified healthcare provider for personal health decisions.',
  legal:
    'This tool does not constitute legal advice. It produces a basic template only. Consult a licensed attorney in your jurisdiction before signing or relying on any legal document.',
  finance:
    'This information is for educational purposes only and should not replace professional financial or tax advice. Consult a qualified advisor for your specific situation.',
}

const styleClasses: Record<YMYLCategory, string> = {
  health: 'bg-amber-50 border-amber-200 text-amber-950',
  legal: 'bg-red-50 border-red-200 text-red-950',
  finance: 'bg-blue-50 border-blue-200 text-blue-950',
}

interface YMYLDisclaimerProps {
  category: YMYLCategory
  className?: string
}

export default function YMYLDisclaimer({ category, className = '' }: YMYLDisclaimerProps) {
  return (
    <div
      role="note"
      aria-label="Important disclaimer"
      className={`mb-6 max-w-4xl mx-auto rounded-lg border px-4 py-3 text-sm leading-relaxed ${styleClasses[category]} ${className}`}
    >
      <strong className="font-semibold">Disclaimer:</strong> {disclaimerText[category]}
    </div>
  )
}
