import Link from 'next/link'
import {
  PAINT_COST_EXAMPLES,
  PAINT_COST_MISTAKES,
  PAINT_COST_REFERENCES,
  PAINT_COST_RELATED,
} from '@/lib/paint-cost-content'

export default function PaintCostGuideContent() {
  return (
    <div className="max-w-3xl mx-auto mt-12 space-y-14 prose prose-slate">
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3 not-prose">What does this calculator estimate?</h2>
        <p className="text-slate-600 mb-4">
          This tool estimates how many liters of paint you need for a rectangular room&apos;s four walls plus ceiling,
          then multiplies by your price per liter. It subtracts one standard door and one standard window opening from
          wall area—a rough planning figure, not a professional takeoff.
        </p>
        <p className="text-slate-600">
          Real jobs vary with surface texture, color change, primer needs, and application method. Always check the
          coverage figure printed on your paint can.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3 not-prose">Formula</h2>
        <div className="not-prose bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-sm text-slate-800 space-y-2">
          <p>Wall area = 2×(L×H) + 2×(W×H)</p>
          <p>Net walls = Wall area − door (1.9×0.8 m) − window (1.2×1.0 m)</p>
          <p>Total area = Net walls + ceiling (L×W)</p>
          <p>Liters = (Total area × Coats) ÷ 10 m²/L</p>
          <p>Cost = Liters × Price per liter</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-4 not-prose">Worked examples</h2>
        <div className="not-prose space-y-4">
          {PAINT_COST_EXAMPLES.map((ex) => (
            <div key={ex.title} className="p-5 bg-white rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">{ex.title}</h3>
              <p className="text-sm text-slate-600 mb-2">
                Room {ex.length}×{ex.width}×{ex.height} m · {ex.coats} coat(s) · ${ex.pricePerLiter}/L
              </p>
              <p className="text-sm font-medium text-slate-800 mb-2">
                ~{ex.liters} L · ~${ex.totalCost.toFixed(2)} paint cost
              </p>
              <p className="text-sm text-slate-600">{ex.interpretation}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-4 not-prose">Common mistakes</h2>
        <div className="not-prose space-y-3">
          {PAINT_COST_MISTAKES.map((m) => (
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
          {PAINT_COST_RELATED.map((t) => (
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
          {PAINT_COST_REFERENCES.map((r) => (
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
