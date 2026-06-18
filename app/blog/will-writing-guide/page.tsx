import { Metadata } from 'next'
import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { buildBlogGuideSchemas } from '@/lib/build-blog-schemas'
import { getGuideBySlug } from '@/lib/guides'
import BlogGuideLayout from '@/components/blog/BlogGuideLayout'

const guide = getGuideBySlug('will-writing-guide')!
const datePublished = guide.date

export const metadata: Metadata = createMetadata({
  title: guide.title,
  description: guide.excerpt,
  keywords:
    'will writing guide, last will and testament, basic will template, estate planning basics, executor beneficiary',
  url: `https://calcuzy.app/blog/${guide.slug}`,
  image: guide.ogImage,
})

const faqData = [
  {
    question: 'Do I need a will?',
    answer:
      'A will lets you name who inherits your property and who manages your estate. Without one, state intestacy laws decide distribution—which may not match your wishes.',
  },
  {
    question: 'Is an online will legally valid?',
    answer:
      'Validity depends on state law: witnesses, notarization, capacity, and proper signing matter more than how the document was drafted. Complex estates usually need an attorney.',
  },
  {
    question: 'What should a basic will include?',
    answer:
      'Typically: your identity, executor appointment, beneficiary designations, specific bequests, residuary clause, and witness/signature blocks per state rules.',
  },
  {
    question: 'What does a will not cover?',
    answer:
      'Assets with beneficiary designations (life insurance, 401(k), IRA), trust assets, and many digital accounts pass outside a will. Guardianship for minor children and tax planning need specialized documents.',
  },
]

const schemas = buildBlogGuideSchemas({
  slug: guide.slug,
  headline: guide.title,
  description: guide.excerpt,
  datePublished,
  image: guide.ogImage,
  faqs: faqData,
})

export default function WillWritingGuidePage() {
  return (
      <BlogGuideLayout
        schemas={schemas}
        category={guide.category}
        title={guide.title}
        description="Understand what a will does, essential clauses for a simple estate, and how to use a free template as a starting point—not a substitute for legal advice."
        datePublished={datePublished}
        readTime={guide.readTime}
        slug={guide.slug}
        ymylCategory="legal"
        tocItems={[
          { id: 'why-will', label: 'Why You Need a Will' },
          { id: 'key-parts', label: 'Key Parts of a Basic Will' },
          { id: 'signing', label: 'Signing & Witness Rules' },
          { id: 'when-attorney', label: 'When to Hire an Attorney' },
          { id: 'use-generator', label: 'Using a Will Generator' },
        ]}
        sections={[
          {
            id: 'why-will',
            title: 'Why You Need a Will',
            content: (
              <p className="text-gray-600">
                A <strong>last will and testament</strong> states who receives your property (beneficiaries) and who settles
                your estate (executor). Without a valid will, probate courts apply <strong>intestacy</strong> rules—often
                prioritizing spouses and children in fixed shares that may not fit blended families or specific wishes.
              </p>
            ),
          },
          {
            id: 'key-parts',
            title: 'Key Parts of a Basic Will',
            content: (
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li><strong>Testator identification</strong> — your full legal name and residence</li>
                <li><strong>Executor</strong> — person who pays debts and distributes assets</li>
                <li><strong>Beneficiaries</strong> — who inherits and in what shares</li>
                <li><strong>Specific bequests</strong> — particular items to named people</li>
                <li><strong>Residuary clause</strong> — who gets everything not specifically listed</li>
                <li><strong>Witness block</strong> — signature lines per state requirements</li>
              </ul>
            ),
          },
          {
            id: 'signing',
            title: 'Signing & Witness Rules',
            content: (
              <p className="text-gray-600">
                Most US states require the testator to sign in the presence of witnesses—commonly two adults who are not
                beneficiaries. Some states allow holographic (handwritten) wills or self-proving affidavits. Requirements vary;
                check your state bar association or a local estate attorney before signing.
              </p>
            ),
          },
          {
            id: 'when-attorney',
            title: 'When to Hire an Attorney',
            content: (
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>Minor children needing a named guardian</li>
                <li>Blended families or estranged heirs</li>
                <li>Business ownership or partnership interests</li>
                <li>Real estate in multiple states</li>
                <li>Desire for trusts, tax planning, or charitable giving structures</li>
              </ul>
            ),
          },
          {
            id: 'use-generator',
            title: 'Using a Will Generator',
            content: (
              <p className="text-gray-600">
                Our{' '}
                <Link href="/will-generator/" className="text-blue-600 hover:underline font-medium">
                  free will generator
                </Link>{' '}
                assembles a plain-text template with executor, beneficiaries, and bequests. Copy the output, complete
                placeholders (city, state), sign with witnesses per local law, and have an attorney review if your situation
                is not simple. Also update beneficiary designations on retirement accounts and life insurance—they override
                your will.
              </p>
            ),
          },
        ]}
        faqs={faqData}
        ctaTitle="Draft a Basic Will Template"
        ctaDescription="Free starting point with beneficiaries, executor, and asset bequests."
        ctaHref={`${guide.toolPath}/`}
        ctaLabel={`Open ${guide.toolName}`}
      />
  )
}
