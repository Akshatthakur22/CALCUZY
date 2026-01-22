'use client'

import { useState } from 'react'

interface Beneficiary {
  name: string
  relationship: string
  percentage: number
}

interface Asset {
  type: string
  description: string
  value: string
}

export default function WillGeneratorClient() {
  const [testatorName, setTestatorName] = useState('')
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([
    { name: '', relationship: '', percentage: 0 }
  ])
  const [assets, setAssets] = useState<Asset[]>([
    { type: '', description: '', value: '' }
  ])
  const [specialWishes, setSpecialWishes] = useState('')
  const [executor, setExecutor] = useState('')
  const [generatedWill, setGeneratedWill] = useState('')

  const addBeneficiary = () => {
    setBeneficiaries([...beneficiaries, { name: '', relationship: '', percentage: 0 }])
  }

  const removeBeneficiary = (index: number) => {
    setBeneficiaries(beneficiaries.filter((_, i) => i !== index))
  }

  const updateBeneficiary = (index: number, field: keyof Beneficiary, value: any) => {
    const updated = [...beneficiaries]
    updated[index] = { ...updated[index], [field]: value }
    setBeneficiaries(updated)
  }

  const addAsset = () => {
    setAssets([...assets, { type: '', description: '', value: '' }])
  }

  const removeAsset = (index: number) => {
    setAssets(assets.filter((_, i) => i !== index))
  }

  const updateAsset = (index: number, field: keyof Asset, value: any) => {
    const updated = [...assets]
    updated[index] = { ...updated[index], [field]: value }
    setAssets(updated)
  }

  const generateWill = () => {
    if (!testatorName) return

    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    const totalPercentage = beneficiaries.reduce((sum, b) => sum + (b.percentage || 0), 0)
    const validDistribution = Math.abs(totalPercentage - 100) < 1

    const will = `\
LAST WILL AND TESTAMENT OF ${testatorName.toUpperCase()}

I, ${testatorName}, residing in [City, State], being of sound mind and memory, do hereby declare this to be my Last Will and Testament, and hereby revoke all former wills and codicils made by me.

ARTICLE I: APPOINTMENT OF EXECUTOR
I appoint ${executor || '[Executor Name]'} to be the Executor of this will. If my named Executor is unable or unwilling to serve, I appoint [Alternate Executor Name] as successor Executor.

ARTICLE II: DISPOSITION OF PROPERTY
I give, devise, and bequeath all of my estate, both real and personal, to my beneficiaries as follows:

${beneficiaries.map((b, i) => 
  `${i + 1}. ${b.name} (${b.relationship}): ${b.percentage}% of my estate`
).join('\n')}

${validDistribution ? '' : '\nNOTE: Beneficiary percentages do not total 100%. Please adjust the distribution.'}

ARTICLE III: SPECIFIC BEQUESTS
${assets.map((asset, i) => 
  asset.type && asset.description ? 
    `${i + 1}. ${asset.type}: ${asset.description} (Value: ${asset.value})` : ''
).join('\n')}

ARTICLE IV: SPECIAL WISHES
${specialWishes || 'I have no special requests regarding the disposition of my remains.'}

ARTICLE V: GENERAL PROVISIONS
I direct that all my just debts, funeral expenses, and expenses of last illness be paid as soon as possible after my death.

ARTICLE VI: EXECUTOR POWERS
I grant my Executor full power to administer my estate, including but not limited to: collecting assets, paying debts, selling property, and making distributions as provided in this will.

ARTICLE VII: GOVERNING LAW
This will shall be governed by the laws of the State of [State].

IN WITNESS WHEREOF, I have signed this will this ${currentDate}.

_______________________________
${testatorName}

We, the undersigned, certify that ${testatorName} signed this will in our presence, and that they appeared to be of sound mind and memory. We sign this will as witnesses in their presence and at their request.

_______________________________
Witness 1 - Name & Address

_______________________________
Witness 2 - Name & Address

_______________________________
Date

IMPORTANT LEGAL DISCLAIMER:
This is a basic will template and does NOT constitute legal advice. Laws regarding wills vary significantly by jurisdiction and personal circumstances. For a legally binding will that properly addresses your specific situation, consult with a qualified estate planning attorney in your state. This template may not be suitable for complex estates, minor children, or special tax planning needs.
    `

    setGeneratedWill(will)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedWill)
    alert('Will copied to clipboard!')
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
      <div className="space-y-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Full Name
          </label>
          <input
            type="text"
            value={testatorName}
            onChange={(e) => setTestatorName(e.target.value)}
            className="input-field"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Executor Name
          </label>
          <input
            type="text"
            value={executor}
            onChange={(e) => setExecutor(e.target.value)}
            className="input-field"
            placeholder="Jane Doe"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Beneficiaries</h3>
          {beneficiaries.map((beneficiary, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  value={beneficiary.name}
                  onChange={(e) => updateBeneficiary(index, 'name', e.target.value)}
                  className="input-field"
                  placeholder="Beneficiary name"
                />
                <input
                  type="text"
                  value={beneficiary.relationship}
                  onChange={(e) => updateBeneficiary(index, 'relationship', e.target.value)}
                  className="input-field"
                  placeholder="Relationship (spouse, child, etc.)"
                />
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={beneficiary.percentage || ''}
                    onChange={(e) => updateBeneficiary(index, 'percentage', parseFloat(e.target.value) || 0)}
                    className="input-field"
                    placeholder="Percentage"
                    min="0"
                    max="100"
                    step="1"
                  />
                  <span className="text-sm text-gray-600">%</span>
                  {beneficiaries.length > 1 && (
                    <button
                      onClick={() => removeBeneficiary(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={addBeneficiary}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add Beneficiary
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Assets</h3>
          {assets.map((asset, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  value={asset.type}
                  onChange={(e) => updateAsset(index, 'type', e.target.value)}
                  className="input-field"
                  placeholder="Asset type (house, car, etc.)"
                />
                <input
                  type="text"
                  value={asset.description}
                  onChange={(e) => updateAsset(index, 'description', e.target.value)}
                  className="input-field"
                  placeholder="Description"
                />
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={asset.value}
                    onChange={(e) => updateAsset(index, 'value', e.target.value)}
                    className="input-field"
                    placeholder="Value"
                  />
                  {assets.length > 1 && (
                    <button
                      onClick={() => removeAsset(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={addAsset}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add Asset
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Special Wishes (funeral arrangements, etc.)
          </label>
          <textarea
            value={specialWishes}
            onChange={(e) => setSpecialWishes(e.target.value)}
            className="input-field"
            rows={3}
            placeholder="I wish to be buried at..."
          />
        </div>
      </div>

      <button
        onClick={generateWill}
        className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
      >
        Generate Will
      </button>

      {generatedWill && (
        <div className="mt-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Generated Will</h3>
            <button
              onClick={copyToClipboard}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm"
            >
              Copy to Clipboard
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-300 text-sm leading-relaxed max-h-96 overflow-y-auto">
            <pre className="whitespace-pre-wrap font-serif">{generatedWill}</pre>
          </div>

          <div className="mt-4 p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-red-800">
              <strong>⚠️ Legal Disclaimer:</strong> This is a basic will template and does NOT constitute legal advice. 
              Estate planning laws vary significantly by state and personal circumstances. For a legally valid will, 
              consult with a qualified estate planning attorney. This template may not be suitable for complex estates, 
              minor children, or tax planning needs.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}