import Link from 'next/link'
import {
  RENT_AFFORDABILITY_ADVANTAGES,
  RENT_AFFORDABILITY_EXAMPLES,
  RENT_AFFORDABILITY_LIMITATIONS,
  RENT_AFFORDABILITY_MISTAKES,
  RENT_AFFORDABILITY_PRACTICAL_USES,
  RENT_AFFORDABILITY_REFERENCES,
  RENT_AFFORDABILITY_RELATED,
} from '@/lib/rent-affordability-content'

const statusStyles = {
  comfortable: 'bg-emerald-50 text-emerald-800 border-emerald-100',
  moderate: 'bg-amber-50 text-amber-800 border-amber-100',
  stretched: 'bg-red-50 text-red-800 border-red-100',
}

function formatCurrency(value: number) {
  return `$${value.toLocaleString()}`
}

export default function RentAffordabilityGuideContent() {
  return (
    <div className="max-w-3xl mx-auto mt-12 space-y-14 prose prose-slate">
      {/* Calculator Description */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3 not-prose">Calculator Description</h2>
        <p className="text-slate-600">
          The Calcuzy Rent Affordability Calculator estimates whether a proposed monthly rent fits within your
          income and expense picture. Enter gross monthly income, desired rent, recurring non-rent expenses, and
          an optional housing guideline (30% by default). You receive a recommended maximum rent, rent as a
          percentage of income, remaining income after bills, and a status label.
        </p>
        <div className="not-prose overflow-x-auto mt-4">
          <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left p-3 font-semibold text-slate-900 border-b border-slate-200">Input</th>
                <th className="text-left p-3 font-semibold text-slate-900 border-b border-slate-200">What to enter</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr className="border-b border-slate-100">
                <td className="p-3 font-medium">Monthly gross income</td>
                <td className="p-3">Pre-tax earnings per month</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-3 font-medium">Desired monthly rent</td>
                <td className="p-3">Rent on the listing or lease you are evaluating</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-3 font-medium">Total monthly expenses</td>
                <td className="p-3">Debt, insurance, groceries, transport, subscriptions, committed savings</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Rent percentage guideline</td>
                <td className="p-3">Housing cap as share of gross income (default 30%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What is Rent Affordability */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3 not-prose">What is Rent Affordability?</h2>
        <p className="text-slate-600 mb-4">
          Rent affordability describes whether your housing payment leaves enough room in your budget for
          necessities, debt, savings, and unexpected costs. It is not simply whether you can write the check on
          the first of the month—it is whether paying that rent month after month supports your broader financial
          stability.
        </p>
        <p className="text-slate-600 mb-4">
          Housing counselors, researchers, and many federal programs often reference a{' '}
          <strong>30% of gross income</strong> benchmark. If housing costs exceed roughly 30% of income, a
          household may be described as <em>cost-burdened</em>; above 50%, <em>severely cost-burdened</em>.
          These labels come from long-standing U.S. housing policy—not from a landlord’s lease application.
        </p>
        <p className="text-slate-600">
          Affordability also depends on what else you owe. Two people with the same income and same rent can have
          very different outcomes if one carries heavy student loan payments and the other has no debt. That is why
          this calculator asks for expenses beyond rent, not just income.
        </p>
      </section>

      {/* Formula */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3 not-prose">Formula</h2>
        <div className="not-prose space-y-4">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-sm text-slate-800">
            <p className="mb-2">Recommended Max Rent = Gross Monthly Income × (Rent Guideline % ÷ 100)</p>
            <p className="mb-2">Rent % of Income = (Desired Rent ÷ Gross Monthly Income) × 100</p>
            <p className="mb-2">Remaining Income = Gross Income − Total Expenses − Desired Rent</p>
            <p>Actual Max Rent = max(0, Gross Income − Total Expenses)</p>
          </div>
          <ul className="text-sm text-slate-600 space-y-2 list-disc pl-5">
            <li>
              <strong>Gross Monthly Income</strong> — pre-tax earnings per month
            </li>
            <li>
              <strong>Rent Guideline %</strong> — your target housing share (default 30)
            </li>
            <li>
              <strong>Desired Rent</strong> — the monthly rent you are evaluating
            </li>
            <li>
              <strong>Total Monthly Expenses</strong> — recurring costs excluding rent
            </li>
            <li>
              <strong>Actual Max Rent</strong> — income left for housing after other bills
            </li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm not-prose">
            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 text-emerald-800">
              <strong>≤ 30%</strong> — Comfortable
            </div>
            <div className="bg-amber-50 p-3 rounded-lg border border-amber-100 text-amber-800">
              <strong>31–40%</strong> — Moderate
            </div>
            <div className="bg-red-50 p-3 rounded-lg border border-red-100 text-red-800">
              <strong>&gt; 40%</strong> — Stretched
            </div>
          </div>
        </div>
      </section>

      {/* How the Calculation Works */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3 not-prose">How the Calculation Works</h2>
        <ol className="text-slate-600 space-y-3 list-decimal pl-5">
          <li>
            <strong>Enter gross monthly income.</strong> If paid biweekly, multiply gross paycheck by 26 and
            divide by 12.
          </li>
          <li>
            <strong>Enter desired rent.</strong> Add utilities or parking here if they are separate from base
            rent—or include them in expenses, not both.
          </li>
          <li>
            <strong>Enter total monthly expenses.</strong> List recurring obligations excluding rent.
          </li>
          <li>
            <strong>Set your rent guideline.</strong> Leave 30% unless you want a tighter or looser target.
          </li>
          <li>
            <strong>Review outputs.</strong> Compare desired rent to recommended max, check remaining income, and
            read the status label.
          </li>
          <li>
            <strong>Stress-test.</strong> Increase rent by $100 or add $200 to expenses—if status flips, your
            margin is thin.
          </li>
        </ol>
      </section>

      {/* Worked Examples */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-4 not-prose">Worked Examples</h2>
        <div className="not-prose space-y-4">
          {RENT_AFFORDABILITY_EXAMPLES.map((ex) => (
            <div key={ex.title} className="p-5 bg-white rounded-xl border border-slate-200">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 className="font-semibold text-slate-900">{ex.title}</h3>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full border capitalize ${statusStyles[ex.status]}`}
                >
                  {ex.status}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm mb-3">
                <div>
                  <p className="text-slate-500">Income</p>
                  <p className="font-medium">{formatCurrency(ex.income)}/mo</p>
                </div>
                <div>
                  <p className="text-slate-500">Rent</p>
                  <p className="font-medium">{formatCurrency(ex.rent)}/mo</p>
                </div>
                <div>
                  <p className="text-slate-500">Expenses</p>
                  <p className="font-medium">{formatCurrency(ex.expenses)}/mo</p>
                </div>
                <div>
                  <p className="text-slate-500">Guideline</p>
                  <p className="font-medium">{ex.guideline}%</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm bg-slate-50 p-3 rounded-lg mb-3">
                <p>
                  <span className="text-slate-500">Max rent: </span>
                  <strong>{formatCurrency(ex.recommendedMax)}</strong>
                </p>
                <p>
                  <span className="text-slate-500">Rent %: </span>
                  <strong>{ex.rentPercent}%</strong>
                </p>
                <p>
                  <span className="text-slate-500">Remaining: </span>
                  <strong>{formatCurrency(ex.remaining)}</strong>
                </p>
              </div>
              <p className="text-sm text-slate-600">{ex.interpretation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Uses */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3 not-prose">Practical Uses</h2>
        <ul className="text-slate-600 space-y-2 list-disc pl-5">
          {RENT_AFFORDABILITY_PRACTICAL_USES.map((use) => (
            <li key={use}>{use}</li>
          ))}
        </ul>
      </section>

      {/* Advantages & Limitations */}
      <section className="not-prose grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Advantages</h2>
          <ul className="space-y-2">
            {RENT_AFFORDABILITY_ADVANTAGES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="text-emerald-500 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Limitations</h2>
          <ul className="space-y-2">
            {RENT_AFFORDABILITY_LIMITATIONS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="text-amber-500 mt-0.5">!</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Common Mistakes */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-4 not-prose">Common Mistakes</h2>
        <div className="not-prose space-y-3">
          {RENT_AFFORDABILITY_MISTAKES.map((mistake) => (
            <div key={mistake.title} className="p-4 bg-red-50/50 rounded-xl border border-red-100">
              <h3 className="font-medium text-slate-900 mb-1">{mistake.title}</h3>
              <p className="text-sm text-slate-600">{mistake.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Calculators */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-4 not-prose">Related Calculators</h2>
        <div className="not-prose grid sm:grid-cols-2 gap-3">
          {RENT_AFFORDABILITY_RELATED.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="p-4 rounded-xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 transition-colors"
            >
              <p className="font-medium text-blue-600 mb-1">{tool.name}</p>
              <p className="text-sm text-slate-600">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* References */}
      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-4 not-prose">References</h2>
        <ul className="not-prose space-y-3 text-sm">
          {RENT_AFFORDABILITY_REFERENCES.map((ref) => (
            <li key={ref.url}>
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                {ref.name}
              </a>
              <span className="text-slate-600"> — {ref.note}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-500 mt-4 not-prose">
          Read our{' '}
          <Link href="/blog/rent-affordability-guide/" className="text-blue-600 hover:underline">
            rent affordability guide
          </Link>{' '}
          for more on the 30% rule and landlord income requirements.
        </p>
      </section>
    </div>
  )
}
