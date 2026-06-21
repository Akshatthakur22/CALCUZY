import Link from 'next/link'
import { getToolGuide, type ToolGuideSlug } from '@/lib/tool-guides'

interface ToolEducationalGuideProps {
  slug: ToolGuideSlug
}

export default function ToolEducationalGuide({ slug }: ToolEducationalGuideProps) {
  const guide = getToolGuide(slug)
  if (!guide) return null

  return (
    <div className="max-w-3xl mx-auto mt-12 space-y-10 prose prose-slate">
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3 not-prose">{guide.whatIsTitle}</h2>
        {guide.whatIs.map((p) => (
          <p key={p.slice(0, 40)} className="text-slate-600 mb-4">
            {p}
          </p>
        ))}
      </section>

      {guide.formula && (
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3 not-prose">Formula</h2>
          <div className="not-prose bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-sm text-slate-800 space-y-2">
            {guide.formula.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          {guide.formula.notes && (
            <p className="text-sm text-slate-600 mt-3">{guide.formula.notes}</p>
          )}
        </section>
      )}

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3 not-prose">How the calculation works</h2>
        <ol className="text-slate-600 space-y-2 list-decimal pl-5">
          {guide.calculationSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      {guide.examples.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-4 not-prose">Worked examples</h2>
          <div className="not-prose space-y-4">
            {guide.examples.map((ex) => (
              <div key={ex.title} className="p-4 bg-white rounded-xl border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{ex.title}</h3>
                <ul className="text-sm text-slate-600 space-y-1 mb-2">
                  {ex.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <p className="text-sm text-slate-600">{ex.interpretation}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="not-prose grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Practical uses</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            {guide.practicalUses.map((use) => (
              <li key={use} className="flex gap-2">
                <span className="text-emerald-500">•</span>
                {use}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Limitations</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            {guide.limitations.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-amber-500">!</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {guide.references.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3 not-prose">References</h2>
          <ul className="not-prose space-y-2 text-sm">
            {guide.references.map((ref) => (
              <li key={ref.url}>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {ref.name}
                </a>
                {ref.note ? <span className="text-slate-600"> — {ref.note}</span> : null}
              </li>
            ))}
          </ul>
          {guide.blogGuidePath && (
            <p className="text-sm text-slate-500 mt-3 not-prose">
              Read our{' '}
              <Link href={guide.blogGuidePath} className="text-blue-600 hover:underline">
                in-depth guide
              </Link>{' '}
              for more detail.
            </p>
          )}
        </section>
      )}
    </div>
  )
}
