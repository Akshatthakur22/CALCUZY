'use client'

import { useState } from 'react'
import { ToolWrapper, ToolInput, ToolResult, ToolButton } from '@/components/ToolWrapper'
import CopyButton from '@/components/CopyButton'

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
    <ToolWrapper>
      <div className="space-y-6">
        <ToolInput
          id="password"
          label="Enter Password to Test"
          type="text"
          value={password}
          onChange={(val) => {
            setPassword(val)
            calculateStrength(val)
          }}
          placeholder="Type your password here..."
          helpText="Your password is never stored or transmitted"
        />

        {password && (
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">Password Strength</span>
                <span className="text-sm font-bold" style={{ 
                  color: strength.color.replace('bg-', '').replace('-500', '') === 'red' ? '#ef4444' :
                         strength.color.replace('bg-', '').replace('-500', '') === 'orange' ? '#f97316' :
                         strength.color.replace('bg-', '').replace('-500', '') === 'yellow' ? '#eab308' :
                         strength.color.replace('bg-', '').replace('-500', '') === 'blue' ? '#3b82f6' : '#22c55e'
                }}>
                  {strength.label}
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all duration-300 ${strength.color}`}
                  style={{ width: strength.width }}
                />
              </div>
            </div>

            {getPasswordTips().length > 0 && (
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                <h4 className="font-medium text-amber-800 mb-2">Suggestions to improve:</h4>
                <ul className="text-sm text-amber-700 space-y-1">
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

        <div className="border-t border-slate-100 pt-6">
          <ToolButton 
            onClick={generateHash}
            disabled={!password}
          >
            Generate SHA-256 Hash
          </ToolButton>

          {hashResult && (
            <ToolResult 
              copyText={hashResult}
              copyLabel="SHA-256 Hash"
              className="mt-4"
            >
              <div className="text-left">
                <h4 className="font-medium text-slate-700 mb-2 text-center">SHA-256 Hash:</h4>
                <div className="bg-white p-3 rounded-lg border border-slate-200 break-all font-mono text-xs">
                  {hashResult}
                </div>
              </div>
            </ToolResult>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
            <h4 className="font-medium text-blue-800 mb-2">Strong Password Tips:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Use 12+ characters</li>
              <li>• Mix uppercase, lowercase, numbers</li>
              <li>• Include special characters</li>
              <li>• Avoid personal information</li>
              <li>• Use unique passwords per site</li>
            </ul>
          </div>
          
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
            <h4 className="font-medium text-emerald-800 mb-2">Security Best Practices:</h4>
            <ul className="text-sm text-emerald-700 space-y-1">
              <li>• Enable two-factor authentication</li>
              <li>• Use a password manager</li>
              <li>• Update passwords regularly</li>
              <li>• Never share passwords</li>
              <li>• Monitor for breaches</li>
            </ul>
          </div>
        </div>
      </div>
    </ToolWrapper>
  )
}
