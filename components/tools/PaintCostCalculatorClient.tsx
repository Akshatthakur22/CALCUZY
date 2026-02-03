'use client'

import { useState } from 'react'

export default function PaintCostCalculatorClient() {
  const [roomLength, setRoomLength] = useState('')
  const [roomWidth, setRoomWidth] = useState('')
  const [roomHeight, setRoomHeight] = useState('')
  const [coats, setCoats] = useState('2')
  const [paintCost, setPaintCost] = useState('')
  const [results, setResults] = useState<{
    wallArea: number
    totalArea: number
    paintNeeded: number
    totalCost: number
  } | null>(null)

  const calculatePaintCost = () => {
    if (!roomLength || !roomWidth || !roomHeight || !paintCost) return

    const length = parseFloat(roomLength)
    const width = parseFloat(roomWidth)
    const height = parseFloat(roomHeight)
    const numCoats = parseInt(coats)
    const costPerLiter = parseFloat(paintCost)

    // Calculate wall area (4 walls)
    const wallArea = 2 * (length * height) + 2 * (width * height)
    
    // Subtract standard door and window areas (optional, but we'll include)
    const doorArea = 1.9 * 0.8 // Standard door
    const windowArea = 1.2 * 1.0 // Standard window
    const netWallArea = wallArea - doorArea - windowArea
    
    // Add ceiling area
    const ceilingArea = length * width
    const totalArea = netWallArea + ceilingArea
    
    // Paint needed (assuming 1 liter covers 10 square meters per coat)
    const coveragePerLiter = 10
    const paintNeeded = (totalArea * numCoats) / coveragePerLiter
    
    // Total cost
    const totalCost = paintNeeded * costPerLiter

    setResults({
      wallArea: Math.round(wallArea * 10) / 10,
      totalArea: Math.round(totalArea * 10) / 10,
      paintNeeded: Math.ceil(paintNeeded * 100) / 100,
      totalCost: Math.round(totalCost * 100) / 100
    })
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Paint Cost Calculator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Room Length (meters)
          </label>
          <input
            type="number"
            inputMode="decimal"
            value={roomLength}
            onChange={(e) => setRoomLength(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="4.0"
            step="0.1"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Room Width (meters)
          </label>
          <input
            type="number"
            inputMode="decimal"
            value={roomWidth}
            onChange={(e) => setRoomWidth(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="3.5"
            step="0.1"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Room Height (meters)
          </label>
          <input
            type="number"
            inputMode="decimal"
            value={roomHeight}
            onChange={(e) => setRoomHeight(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="2.4"
            step="0.1"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Coats
          </label>
          <select
            value={coats}
            onChange={(e) => setCoats(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="1">1 Coat</option>
            <option value="2">2 Coats</option>
            <option value="3">3 Coats</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Paint Cost per Liter ($)
          </label>
          <input
            type="number"
            value={paintCost}
            onChange={(e) => setPaintCost(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="15.99"
            step="0.01"
            min="0"
          />
        </div>
      </div>

      <button
        onClick={calculatePaintCost}
        className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Calculate Paint Cost
      </button>

      {results && (
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Paint Calculation Results</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Wall Area</p>
              <p className="text-2xl font-bold text-blue-600">{results.wallArea} m²</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Total Area (walls + ceiling)</p>
              <p className="text-2xl font-bold text-blue-600">{results.totalArea} m²</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Paint Needed</p>
              <p className="text-2xl font-bold text-green-600">{results.paintNeeded} liters</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Total Cost</p>
              <p className="text-2xl font-bold text-green-600">${results.totalCost}</p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> Calculations assume standard door (1.9m × 0.8m) and window (1.2m × 1.0m) areas. 
              Paint coverage is estimated at 10m² per liter per coat.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
