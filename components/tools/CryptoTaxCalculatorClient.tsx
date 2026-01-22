'use client'

import { useState } from 'react'

interface Transaction {
  date: string
  type: 'buy' | 'sell'
  amount: number
  price: number
  fee?: number
}

interface CalculationResult {
  totalCostBasis: number
  totalProceeds: number
  totalGains: number
  totalLosses: number
  netGains: number
  transactions: Transaction[]
}

export default function CryptoTaxCalculatorClient() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { date: '', type: 'buy', amount: 0, price: 0, fee: 0 }
  ])
  const [method, setMethod] = useState<'FIFO' | 'LIFO' | 'Average'>('FIFO')
  const [result, setResult] = useState<CalculationResult | null>(null)

  const addTransaction = () => {
    setTransactions([...transactions, { date: '', type: 'buy', amount: 0, price: 0, fee: 0 }])
  }

  const removeTransaction = (index: number) => {
    setTransactions(transactions.filter((_, i) => i !== index))
  }

  const updateTransaction = (index: number, field: keyof Transaction, value: any) => {
    const updated = [...transactions]
    updated[index] = { ...updated[index], [field]: value }
    setTransactions(updated)
  }

  const calculateTax = () => {
    const buys = transactions.filter(t => t.type === 'buy').sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    )
    const sells = transactions.filter(t => t.type === 'sell')
    
    let totalGains = 0
    let totalLosses = 0
    let totalCostBasis = 0
    let totalProceeds = 0
    let remainingBuys = [...buys]

    sells.forEach(sell => {
      let sellAmount = sell.amount
      let sellCostBasis = 0

      while (sellAmount > 0 && remainingBuys.length > 0) {
        let buyIndex = 0
        if (method === 'LIFO') {
          buyIndex = remainingBuys.length - 1
        } else if (method === 'Average') {
          const avgPrice = remainingBuys.reduce((sum, b) => sum + b.price * b.amount, 0) / 
                         remainingBuys.reduce((sum, b) => sum + b.amount, 0)
          sellCostBasis = sellAmount * avgPrice
          break
        }

        const buy = remainingBuys[buyIndex]
        const useAmount = Math.min(sellAmount, buy.amount)
        
        sellCostBasis += useAmount * buy.price
        sellAmount -= useAmount
        buy.amount -= useAmount

        if (buy.amount <= 0) {
          remainingBuys.splice(buyIndex, 1)
        }
      }

      const proceeds = sell.amount * sell.price
      const costBasis = method === 'Average' ? sellCostBasis : 
        (sell.amount * sells.reduce((sum, s) => sum + s.price * s.amount, 0) / 
         sells.reduce((sum, s) => sum + s.amount, 0))
      
      const gain = proceeds - costBasis - (sell.fee || 0)

      if (gain > 0) {
        totalGains += gain
      } else {
        totalLosses += Math.abs(gain)
      }

      totalProceeds += proceeds
      totalCostBasis += costBasis
    })

    totalCostBasis = buys.reduce((sum, b) => sum + b.amount * b.price + (b.fee || 0), 0)

    setResult({
      totalCostBasis,
      totalProceeds,
      totalGains,
      totalLosses,
      netGains: totalGains - totalLosses,
      transactions
    })
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cost Basis Method
        </label>
        <select 
          value={method}
          onChange={(e) => setMethod(e.target.value as 'FIFO' | 'LIFO' | 'Average')}
          className="input-field"
        >
          <option value="FIFO">First In, First Out (FIFO)</option>
          <option value="LIFO">Last In, First Out (LIFO)</option>
          <option value="Average">Average Cost</option>
        </select>
      </div>

      <div className="space-y-4 mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Transactions</h3>
        {transactions.map((transaction, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <input
                type="date"
                value={transaction.date}
                onChange={(e) => updateTransaction(index, 'date', e.target.value)}
                className="input-field"
                placeholder="Date"
              />
              <select
                value={transaction.type}
                onChange={(e) => updateTransaction(index, 'type', e.target.value)}
                className="input-field"
              >
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
              </select>
              <input
                type="number"
                value={transaction.amount || ''}
                onChange={(e) => updateTransaction(index, 'amount', parseFloat(e.target.value) || 0)}
                className="input-field"
                placeholder="Amount"
                step="0.00000001"
              />
              <input
                type="number"
                value={transaction.price || ''}
                onChange={(e) => updateTransaction(index, 'price', parseFloat(e.target.value) || 0)}
                className="input-field"
                placeholder="Price ($)"
                step="0.01"
              />
              <input
                type="number"
                value={transaction.fee || ''}
                onChange={(e) => updateTransaction(index, 'fee', parseFloat(e.target.value) || 0)}
                className="input-field"
                placeholder="Fee ($)"
                step="0.01"
              />
              <button
                onClick={() => removeTransaction(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={addTransaction}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add Transaction
        </button>
        <button
          onClick={calculateTax}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Calculate Tax
        </button>
      </div>

      {result && (
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Tax Calculation Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Total Cost Basis:</p>
              <p className="text-lg font-semibold">${result.totalCostBasis.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Proceeds:</p>
              <p className="text-lg font-semibold">${result.totalProceeds.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Gains:</p>
              <p className="text-lg font-semibold text-green-600">${result.totalGains.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Losses:</p>
              <p className="text-lg font-semibold text-red-600">${result.totalLosses.toFixed(2)}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-gray-600">Net Gains/Losses:</p>
              <p className={`text-2xl font-bold ${result.netGains >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${result.netGains.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
