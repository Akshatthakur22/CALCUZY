'use client'

import { useState } from 'react'

export default function PasswordToolsClient() {
  const [password, setPassword] = useState('')
  const [hashResult, setHashResult] = useState('')
  const [strength, setStrength] = useState({
    score: 0,
    label: 'Very Weak',
    color: 'bg-red-500',
    width: '0%'
  })

  const calculateStrength = (pwd: string) => {
    if (!pwd) {
      setStrength({
        score: 0,
        label: 'Very Weak',
        color: 'bg-red-500',
        width: '0%'
      })
      return
    }

    let score = 0
    
    // Length check
    if (pwd.length >= 8) score += 1
    if (pwd.length >= 12) score += 1
    if (pwd.length >= 16) score += 1
    
    // Character variety
    if (/[a-z]/.test(pwd)) score += 1
    if (/[A-Z]/.test(pwd)) score += 1
    if (/[0-9]/.test(pwd)) score += 1
    if (/[^a-zA-Z0-9]/.test(pwd)) score += 1
    
    // No common patterns
    if (!/(.)\1{2,}/.test(pwd)) score += 1
    if (!/123|abc|qwe|password/i.test(pwd)) score += 1

    const strengthLevels = [
      { max: 2, label: 'Very Weak', color: 'bg-red-500' },
      { max: 4, label: 'Weak', color: 'bg-orange-500' },
      { max: 6, label: 'Fair', color: 'bg-yellow-500' },
      { max: 8, label: 'Good', color: 'bg-blue-500' },
      { max: 10, label: 'Strong', color: 'bg-green-500' }
    ]

    const level = strengthLevels.find(l => score <= l.max) || strengthLevels[4]

    setStrength({
      score,
      label: level.label,
      color: level.color,
      width: `${(score / 10) * 100}%`
    })
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pwd = e.target.value
    setPassword(pwd)
    calculateStrength(pwd)
  }

  const generateHash = async () => {
    if (!password) return
    
    try {
      const encoder = new TextEncoder()
      const data = encoder.encode(password)
      const hashBuffer = await crypto.subtle.digest('SHA-256', data)
      const hashArray = Array.from(new Uint8Array(hashBuffer))
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
      setHashResult(hashHex)
    } catch (error) {
      console.error('Hash generation failed:', error)
      setHashResult('Error generating hash')
    }
  }

  const getPasswordTips = () => {
    const tips = []
    if (password.length < 12) tips.push('Use at least 12 characters')
    if (!/[a-z]/.test(password)) tips.push('Include lowercase letters')
    if (!/[A-Z]/.test(password)) tips.push('Include uppercase letters')
    if (!/[0-9]/.test(password)) tips.push('Include numbers')
    if (!/[^a-zA-Z0-9]/.test(password)) tips.push('Include special characters')
    if (/(.)\1{2,}/.test(password)) tips.push('Avoid repeated characters')
    if (/123|abc|qwe|password/i.test(password)) tips.push('Avoid common patterns')
    
    return tips
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Password Strength Checker & Hash Generator</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter Password to Test
          </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Type your password here..."
          />
        </div>

        {password && (
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Password Strength</span>
                <span className="text-sm font-bold" style={{ 
                  color: strength.color.replace('bg-', '').replace('-500', '') === 'red' ? '#ef4444' :
                         strength.color.replace('bg-', '').replace('-500', '') === 'orange' ? '#f97316' :
                         strength.color.replace('bg-', '').replace('-500', '') === 'yellow' ? '#eab308' :
                         strength.color.replace('bg-', '').replace('-500', '') === 'blue' ? '#3b82f6' : '#22c55e'
                }}>
                  {strength.label}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all duration-300 ${strength.color}`}
                  style={{ width: strength.width }}
                />
              </div>
            </div>

            {getPasswordTips().length > 0 && (
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-medium text-yellow-800 mb-2">Suggestions to improve:</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  {getPasswordTips().map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="border-t pt-6">
          <button
            onClick={generateHash}
            disabled={!password}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Generate SHA-256 Hash
          </button>

          {hashResult && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-2">SHA-256 Hash:</h4>
              <div className="bg-white p-3 rounded border border-gray-200 break-all font-mono text-sm">
                {hashResult}
              </div>
              <button
                onClick={() => navigator.clipboard.writeText(hashResult)}
                className="mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Copy to Clipboard
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Strong Password Tips:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Use 12+ characters</li>
              <li>• Mix uppercase, lowercase, numbers</li>
              <li>• Include special characters</li>
              <li>• Avoid personal information</li>
              <li>• Use unique passwords per site</li>
            </ul>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">Security Best Practices:</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Enable two-factor authentication</li>
              <li>• Use a password manager</li>
              <li>• Update passwords regularly</li>
              <li>• Never share passwords</li>
              <li>• Monitor for breaches</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
