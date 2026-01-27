'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/Card'

interface Beneficiary {
  id: string
  name: string
  relationship: string
  percentage: number
}

interface Asset {
  id: string
  type: string
  description: string
  value: string
}

interface WillData {
  testatorName: string
  executor: string
  beneficiaries: Beneficiary[]
  assets: Asset[]
  specialWishes: string
  alternateExecutor: string
  guardian: string
  witnesses: string[]
}

export default function WillGeneratorClient() {
  const [willData, setWillData] = useState<WillData>({
    testatorName: '',
    executor: '',
    beneficiaries: [{ id: '1', name: '', relationship: '', percentage: 0 }],
    assets: [{ id: '1', type: '', description: '', value: '' }],
    specialWishes: '',
    alternateExecutor: '',
    guardian: '',
    witnesses: ['', '']
  })
  const [generatedWill, setGeneratedWill] = useState('')
  const [error, setError] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const totalPercentage = willData.beneficiaries.reduce((sum, b) => sum + (b.percentage || 0), 0)
  const isValidDistribution = Math.abs(totalPercentage - 100) < 0.01

  const addBeneficiary = () => {
    const newBeneficiary: Beneficiary = {
      id: Date.now().toString(),
      name: '',
      relationship: '',
      percentage: 0
    }
    setWillData(prev => ({
      ...prev,
      beneficiaries: [...prev.beneficiaries, newBeneficiary]
    }))
  }

  const removeBeneficiary = (id: string) => {
    if (willData.beneficiaries.length > 1) {
      setWillData(prev => ({
        ...prev,
        beneficiaries: prev.beneficiaries.filter(b => b.id !== id)
      }))
    }
  }

  const updateBeneficiary = (id: string, field: keyof Beneficiary, value: any) => {
    setWillData(prev => ({
      ...prev,
      beneficiaries: prev.beneficiaries.map(b => 
        b.id === id ? { ...b, [field]: value } : b
      )
    }))
  }

  const addAsset = () => {
    const newAsset: Asset = {
      id: Date.now().toString(),
      type: '',
      description: '',
      value: ''
    }
    setWillData(prev => ({
      ...prev,
      assets: [...prev.assets, newAsset]
    }))
  }

  const removeAsset = (id: string) => {
    if (willData.assets.length > 1) {
      setWillData(prev => ({
        ...prev,
        assets: prev.assets.filter(a => a.id !== id)
      }))
    }
  }

  const updateAsset = (id: string, field: keyof Asset, value: any) => {
    setWillData(prev => ({
      ...prev,
      assets: prev.assets.map(a => 
        a.id === id ? { ...a, [field]: value } : a
      )
    }))
  }

  const validateWill = (): string[] => {
    const errors: string[] = []
    
    if (!willData.testatorName.trim()) {
      errors.push('Testator name is required')
    }
    
    if (!willData.executor.trim()) {
      errors.push('Executor name is required')
    }
    
    const validBeneficiaries = willData.beneficiaries.filter(b => b.name.trim())
    if (validBeneficiaries.length === 0) {
      errors.push('At least one beneficiary is required')
    }
    
    validBeneficiaries.forEach(b => {
      if (!b.relationship.trim()) {
        errors.push(`Relationship is required for beneficiary: ${b.name}`)
      }
      if (b.percentage <= 0) {
        errors.push(`Percentage must be greater than 0 for: ${b.name}`)
      }
    })
    
    if (validBeneficiaries.length > 0 && !isValidDistribution) {
      errors.push(`Beneficiary percentages must total 100%. Current total: ${totalPercentage}%`)
    }
    
    return errors
  }

  const generateWill = async () => {
    const errors = validateWill()
    if (errors.length > 0) {
      setError(errors.join('. '))
      return
    }

    setError('')
    setIsGenerating(true)

    // Simulate processing for better UX
    await new Promise(resolve => setTimeout(resolve, 1000))

    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    const validBeneficiaries = willData.beneficiaries.filter(b => b.name.trim())
    const validAssets = willData.assets.filter(a => a.type.trim() && a.description.trim())

    const will = `LAST WILL AND TESTAMENT OF ${willData.testatorName.toUpperCase()}

I, ${willData.testatorName}, residing in [City, State], being of sound mind and memory, do hereby declare this to be my Last Will and Testament, and hereby revoke all former wills and codicils made by me.

ARTICLE I: APPOINTMENT OF EXECUTOR
I appoint ${willData.executor} to be the Executor of this will. If my named Executor is unable or unwilling to serve, I appoint ${willData.alternateExecutor || '[Alternate Executor Name]'} as successor Executor.

ARTICLE II: GUARDIAN APPOINTMENTS
${willData.guardian ? `I appoint ${willData.guardian} as guardian of my minor children.` : 'No guardian appointments are made as I have no minor children.'}

ARTICLE III: DISPOSITION OF PROPERTY
I give, devise, and bequeath all of my estate, both real and personal, to my beneficiaries as follows:

${validBeneficiaries.map((b, i) => 
  `  ${i + 1}. ${b.name} (${b.relationship}): ${b.percentage}% of my estate`
).join('\n')}

ARTICLE IV: SPECIFIC BEQUESTS
${validAssets.length > 0 ? validAssets.map((asset, i) => 
  `  ${i + 1}. ${asset.type}: ${asset.description} (Value: ${asset.value})`
).join('\n') : 'No specific bequests are made.'}

ARTICLE V: SPECIAL WISHES
${willData.specialWishes.trim() || 'I have no special requests regarding the disposition of my remains.'}

ARTICLE VI: GENERAL PROVISIONS
I direct that all my just debts, funeral expenses, and expenses of last illness be paid as soon as possible after my death.

ARTICLE VII: EXECUTOR POWERS
I grant my Executor full power to administer my estate, including but not limited to: collecting assets, paying debts, selling property, and making distributions as provided in this will.

ARTICLE VIII: GOVERNING LAW
This will shall be governed by the laws of the State of [State].

ARTICLE IX: SEPARABILITY
If any provision of this will is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.

IN WITNESS WHEREOF, I have signed this will this ${currentDate}.

_______________________________
${willData.testatorName}

We, the undersigned, certify that ${willData.testatorName} signed this will in our presence, and that they appeared to be of sound mind and memory. We sign this will as witnesses in their presence and at their request.

_______________________________
${willData.witnesses[0] || 'Witness 1 - Name & Address'}

_______________________________
${willData.witnesses[1] || 'Witness 2 - Name & Address'}

_______________________________
Date

IMPORTANT LEGAL DISCLAIMER:
This is a basic will template and does NOT constitute legal advice. Laws regarding wills vary significantly by jurisdiction and personal circumstances. For a legally binding will that properly addresses your specific situation, consult with a qualified estate planning attorney in your state. This template may not be suitable for complex estates, minor children, or special tax planning needs.`

    setGeneratedWill(will)
    setIsGenerating(false)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedWill)
      // Show success feedback
      const button = document.getElementById('copy-button')
      if (button) {
        const originalText = button.textContent
        button.textContent = 'Copied!'
        button.classList.add('bg-green-600')
        setTimeout(() => {
          button.textContent = originalText
          button.classList.remove('bg-green-600')
        }, 2000)
      }
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const downloadWill = () => {
    const blob = new Blob([generatedWill], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `Last_Will_${willData.testatorName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const clearForm = () => {
    setWillData({
      testatorName: '',
      executor: '',
      beneficiaries: [{ id: '1', name: '', relationship: '', percentage: 0 }],
      assets: [{ id: '1', type: '', description: '', value: '' }],
      specialWishes: '',
      alternateExecutor: '',
      guardian: '',
      witnesses: ['', '']
    })
    setGeneratedWill('')
    setError('')
  }

  return (
    <Card className="max-w-4xl mx-auto mb-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary-text mb-2">
            Will Generator
          </h1>
          <p className="text-secondary-text">
            Create a basic last will and testament document
          </p>
        </div>

        {/* Basic Information */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-primary-text">Basic Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-primary-text font-medium mb-2">
                Your Full Name *
                <span className="text-secondary-text font-normal ml-2">e.g., John Doe</span>
              </label>
              <input
                type="text"
                value={willData.testatorName}
                onChange={(e) => setWillData(prev => ({ ...prev, testatorName: e.target.value }))}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-primary-text font-medium mb-2">
                Executor Name *
                <span className="text-secondary-text font-normal ml-2">e.g., Jane Doe</span>
              </label>
              <input
                type="text"
                value={willData.executor}
                onChange={(e) => setWillData(prev => ({ ...prev, executor: e.target.value }))}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label className="block text-primary-text font-medium mb-2">
                Alternate Executor
                <span className="text-secondary-text font-normal ml-2">Optional</span>
              </label>
              <input
                type="text"
                value={willData.alternateExecutor}
                onChange={(e) => setWillData(prev => ({ ...prev, alternateExecutor: e.target.value }))}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="Alternate executor name"
              />
            </div>

            <div>
              <label className="block text-primary-text font-medium mb-2">
                Guardian for Minor Children
                <span className="text-secondary-text font-normal ml-2">Optional</span>
              </label>
              <input
                type="text"
                value={willData.guardian}
                onChange={(e) => setWillData(prev => ({ ...prev, guardian: e.target.value }))}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="Guardian name"
              />
            </div>
          </div>
        </div>

        {/* Beneficiaries */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-primary-text">Beneficiaries</h3>
            <div className="flex items-center gap-4">
              <div className={`text-sm ${isValidDistribution ? 'text-green-600' : 'text-red-600'}`}>
                Total: {totalPercentage}%
              </div>
              <button
                onClick={addBeneficiary}
                className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
              >
                Add Beneficiary
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {willData.beneficiaries.map((beneficiary) => (
              <div key={beneficiary.id} className="border border-border rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <input
                    type="text"
                    value={beneficiary.name}
                    onChange={(e) => updateBeneficiary(beneficiary.id, 'name', e.target.value)}
                    className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="Beneficiary name"
                  />
                  <input
                    type="text"
                    value={beneficiary.relationship}
                    onChange={(e) => updateBeneficiary(beneficiary.id, 'relationship', e.target.value)}
                    className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="Relationship (spouse, child, etc.)"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={beneficiary.percentage || ''}
                      onChange={(e) => updateBeneficiary(beneficiary.id, 'percentage', parseFloat(e.target.value) || 0)}
                      className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      placeholder="Percentage"
                      min="0"
                      max="100"
                      step="1"
                    />
                    <span className="text-sm text-secondary-text">%</span>
                  </div>
                  <button
                    onClick={() => removeBeneficiary(beneficiary.id)}
                    disabled={willData.beneficiaries.length === 1}
                    className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assets */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-primary-text">Specific Assets</h3>
            <button
              onClick={addAsset}
              className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              Add Asset
            </button>
          </div>

          <div className="space-y-4">
            {willData.assets.map((asset) => (
              <div key={asset.id} className="border border-border rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <input
                    type="text"
                    value={asset.type}
                    onChange={(e) => updateAsset(asset.id, 'type', e.target.value)}
                    className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="Asset type (house, car, etc.)"
                  />
                  <input
                    type="text"
                    value={asset.description}
                    onChange={(e) => updateAsset(asset.id, 'description', e.target.value)}
                    className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="Description"
                  />
                  <input
                    type="text"
                    value={asset.value}
                    onChange={(e) => updateAsset(asset.id, 'value', e.target.value)}
                    className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="Value"
                  />
                  <button
                    onClick={() => removeAsset(asset.id)}
                    disabled={willData.assets.length === 1}
                    className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Wishes */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-primary-text">Special Wishes</h3>
          <textarea
            value={willData.specialWishes}
            onChange={(e) => setWillData(prev => ({ ...prev, specialWishes: e.target.value }))}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            rows={4}
            placeholder="I wish to be buried at..."
          />
        </div>

        {/* Witnesses */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-primary-text">Witnesses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-primary-text font-medium mb-2">
                Witness 1 Name & Address
              </label>
              <input
                type="text"
                value={willData.witnesses[0]}
                onChange={(e) => setWillData(prev => ({
                  ...prev,
                  witnesses: [e.target.value, prev.witnesses[1]]
                }))}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="Witness 1 - Name & Address"
              />
            </div>
            <div>
              <label className="block text-primary-text font-medium mb-2">
                Witness 2 Name & Address
              </label>
              <input
                type="text"
                value={willData.witnesses[1]}
                onChange={(e) => setWillData(prev => ({
                  ...prev,
                  witnesses: [prev.witnesses[0], e.target.value]
                }))}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="Witness 2 - Name & Address"
              />
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={generateWill}
            disabled={isGenerating}
            className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? 'Generating...' : 'Generate Will'}
          </button>
          <button
            onClick={clearForm}
            className="px-6 py-3 border border-border rounded-lg hover:bg-card-hover transition-colors"
          >
            Clear Form
          </button>
        </div>

        {/* Generated Will */}
        {generatedWill && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-primary-text">Generated Will Document</h3>
                <div className="flex gap-2">
                  <button
                    id="copy-button"
                    onClick={copyToClipboard}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Copy to Clipboard
                  </button>
                  <button
                    onClick={downloadWill}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Download
                  </button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-300 max-h-96 overflow-y-auto">
                <pre className="whitespace-pre-wrap font-serif text-sm leading-relaxed text-gray-800">
                  {generatedWill}
                </pre>
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-red-800 mb-1">
                    ⚠️ Important Legal Disclaimer
                  </p>
                  <p className="text-sm text-red-700">
                    This is a basic will template and does NOT constitute legal advice. 
                    Estate planning laws vary significantly by state and personal circumstances. 
                    For a legally binding will that properly addresses your specific situation, 
                    consult with a qualified estate planning attorney. This template may not be suitable 
                    for complex estates, minor children, or special tax planning needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}