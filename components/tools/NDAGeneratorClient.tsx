'use client'

import { useState } from 'react'

export default function NDAGeneratorClient() {
  const [disclosingParty, setDisclosingParty] = useState('')
  const [receivingParty, setReceivingParty] = useState('')
  const [duration, setDuration] = useState('5')
  const [purpose, setPurpose] = useState('To discuss potential business relationship')
  const [returnConfidential, setReturnConfidential] = useState(true)
  const [generatedNDA, setGeneratedNDA] = useState('')

  const generateNDA = () => {
    if (!disclosingParty || !receivingParty) return

    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    const nda = `
NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement ("Agreement") is entered into as of ${currentDate} ("Effective Date") by and between:

${disclosingParty} ("Disclosing Party")

and

${receivingParty} ("Receiving Party")

RECITALS

WHEREAS, Disclosing Party possesses certain confidential and proprietary information ("Confidential Information");
WHEREAS, Receiving Party desires to evaluate the Confidential Information for potential business relationship;
WHEREAS, Disclosing Party is willing to disclose the Confidential Information to Receiving Party on the terms set forth herein;

NOW, THEREFORE, in consideration of the mutual covenants contained herein and other good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged, the parties agree as follows:

1. DEFINITION OF CONFIDENTIAL INFORMATION
For purposes of this Agreement, "Confidential Information" shall include all information, whether oral, written, electronic, or otherwise, disclosed by Disclosing Party to Receiving Party, including but not limited to: business plans, financial information, customer lists, technical information, trade secrets, and any other information that would reasonably be considered confidential.

2. OBLIGATIONS OF RECEIVING PARTY
Receiving Party shall:
a) Hold all Confidential Information in strict confidence and take all reasonable precautions to protect such Confidential Information;
b) Use the Confidential Information solely for the purpose of ${purpose};
c) Not disclose any Confidential Information to any third party without the prior written consent of Disclosing Party;
d) Not reproduce or reverse engineer any Confidential Information without express written permission from Disclosing Party.

3. EXCLUSIONS
The obligations under this Agreement shall not apply to any information that:
a) Is or becomes publicly known through no wrongful act of Receiving Party;
b) Is rightfully in Receiving Party's possession prior to disclosure;
c) Is rightfully obtained from a third party without restriction on disclosure;
d) Is required to be disclosed by law or court order, provided Receiving Party gives Disclosing Party prompt written notice of such requirement.

4. TERM
This Agreement shall remain in effect for a period of ${duration} years from the Effective Date, unless terminated earlier by either party upon thirty (30) days written notice.

5. RETURN OF CONFIDENTIAL INFORMATION
${returnConfidential ? 'Upon termination of this Agreement, Receiving Party shall promptly return all materials containing Confidential Information to Disclosing Party.' : 'Upon termination of this Agreement, Receiving Party may destroy materials containing Confidential Information upon written request from Disclosing Party.'}

6. REMEDIES
Receiving Party acknowledges that any breach of this Agreement may cause irreparable harm to Disclosing Party, and that monetary damages may be an inadequate remedy. Accordingly, Receiving Party agrees that Disclosing Party shall be entitled to seek injunctive relief to prevent or stop any breach of this Agreement.

7. GOVERNING LAW
This Agreement shall be governed by and construed in accordance with the laws of the State of [State], without regard to its conflict of law principles.

8. ENTIRE AGREEMENT
This Agreement constitutes the entire understanding between the parties concerning the subject matter hereof and supersedes all prior agreements, whether written or oral.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the Effective Date.

_______________________________
${disclosingParty}
Disclosing Party

_______________________________
${receivingParty}
Receiving Party
    `.trim()

    setGeneratedNDA(nda)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedNDA)
    alert('NDA copied to clipboard!')
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Disclosing Party Name
          </label>
          <input
            type="text"
            value={disclosingParty}
            onChange={(e) => setDisclosingParty(e.target.value)}
            className="input-field"
            placeholder="ABC Corporation"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Receiving Party Name
          </label>
          <input
            type="text"
            value={receivingParty}
            onChange={(e) => setReceivingParty(e.target.value)}
            className="input-field"
            placeholder="XYZ Company"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Agreement Duration (Years)
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="input-field"
          >
            <option value="1">1 Year</option>
            <option value="2">2 Years</option>
            <option value="3">3 Years</option>
            <option value="5">5 Years</option>
            <option value="10">10 Years</option>
            <option value="indefinite">Indefinite</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Purpose of Disclosure
          </label>
          <input
            type="text"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="input-field"
            placeholder="To evaluate potential business relationship"
          />
        </div>

        <div className="md:col-span-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={returnConfidential}
              onChange={(e) => setReturnConfidential(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-700">
              Require return of confidential materials upon termination
            </span>
          </label>
        </div>
      </div>

      <button
        onClick={generateNDA}
        className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
      >
        Generate NDA
      </button>

      {generatedNDA && (
        <div className="mt-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Generated NDA</h3>
            <button
              onClick={copyToClipboard}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm"
            >
              Copy to Clipboard
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-300 text-sm leading-relaxed max-h-96 overflow-y-auto">
            <pre className="whitespace-pre-wrap font-serif">{generatedNDA}</pre>
          </div>

          <div className="mt-4 p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-red-800">
              <strong>⚠️ Legal Disclaimer:</strong> This is a basic NDA template and does not constitute legal advice. 
              For legally binding agreements, consult with a qualified attorney who can tailor this document 
              to your specific needs and jurisdiction.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
