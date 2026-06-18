import Link from 'next/link'
import { getGuideForTool, guideUrl } from '@/lib/guides'

interface GuideLinkProps {
  toolPath: string
  className?: string
}

export default function GuideLink({ toolPath, className = '' }: GuideLinkProps) {
  const guide = getGuideForTool(toolPath)
  if (!guide) return null

  return (
    <p className={`text-sm text-slate-500 ${className}`}>
      Read our{' '}
      <Link href={guideUrl(guide.slug)} className="text-blue-600 hover:underline font-medium">
        {guide.title}
      </Link>
      {' '}for a deeper explanation, examples, and FAQs.
    </p>
  )
}
