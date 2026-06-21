import Link from 'next/link'
import {
  PROPERTY_TAX_EXAMPLES,
  PROPERTY_TAX_MISTAKES,
  PROPERTY_TAX_REFERENCES,
  PROPERTY_TAX_RELATED,
} from '@/lib/property-tax-content'

function fmt(n: number) {
  return `$${n.toLocaleString(undefined, { maximumFractionDigits: 2 })}`
}

export default function PropertyTaxGuideContent() {
  return (
    <div className="max-w-3xl mx-auto mt-12 space-y-14 prose prose-slate">
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3 not-prose">What is property tax?</h2>
        <p className="text-slate-600 mb-4">
          Property tax is a local levy on real estate, usually calculated from assessed value multiplied by tax rates
          set by counties, cities, school districts, and special districts. It funds schools, roads, emergency
          services, and other municipal programs.
        </p>
        <p className="text-slate-600">
          Your bill depends on <strong>how the assessor values the property</strong>, <strong>which exemptions you
          qualify for</strong>, and <strong>combined millage or percentage rates</strong> in your jurisdiction—not
          simply what a home listed for on a real estate site.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3 not-prose">Formula</h2>
        <div className="not-prose bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-sm text-slate-800 space-y-2">
          <p>Taxable value = max(0, Property value − Exemptions)</p>
          <p>Annual tax = Taxable value × (Rate ÷ 100)</p>
          <p>Monthly tax = Annual tax ÷ 12</p>
          <p>Effective rate = (Annual tax ÷ Property value) × 100</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-4 not-prose">Worked examples</h2>
        <div className="not-prose space-y-4">
          {PROPERTY_TAX_EXAMPLES.map((ex) => (
            <div key={ex.title} className="p-5 bg-white rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">{ex.title}</h3>
              <p className="text-sm text-slate-600 mb-2">
                Value {fmt(ex.value)} · Rate {ex.rate}% · Exemptions {fmt(ex.exemptions)}
              </p>
              <p className="text-sm font-medium text-slate-800 mb-2">
                Annual {fmt(ex.annualTax)} · Monthly {fmt(ex.monthlyTax)}
              </p>
              <p className="text-sm text-slate-600">{ex.interpretation}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-4 not-prose">Common mistakes</h2>
        <div className="not-prose space-y-3">
          {PROPERTY_TAX_MISTAKES.map((m) => (
            <div key={m.title} className="p-4 bg-amber-50/50 rounded-xl border border-amber-100">
              <h3 className="font-medium text-slate-900 mb-1">{m.title}</h3>
              <p className="text-sm text-slate-600">{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-4 not-prose">Related calculators</h2>
        <div className="not-prose grid sm:grid-cols-2 gap-3">
          {PROPERTY_TAX_RELATED.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="p-4 rounded-xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 transition-colors"
            >
              <p className="font-medium text-blue-600 mb-1">{t.name}</p>
              <p className="text-sm text-slate-600">{t.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-4 not-prose">References</h2>
        <ul className="not-prose space-y-2 text-sm">
          {PROPERTY_TAX_REFERENCES.map((r) => (
            <li key={r.url}>
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {r.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
