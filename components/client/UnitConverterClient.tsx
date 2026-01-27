'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/Card'

interface ConversionHistory {
  id: string
  fromValue: number
  fromUnit: string
  toValue: number
  toUnit: string
  timestamp: Date
}

export default function UnitConverterClient() {
  const [value, setValue] = useState('')
  const [fromUnit, setFromUnit] = useState('meters')
  const [toUnit, setToUnit] = useState('feet')
  const [result, setResult] = useState('')
  const [history, setHistory] = useState<ConversionHistory[]>([])
  const [error, setError] = useState('')
  const [category, setCategory] = useState<'length' | 'weight' | 'temperature' | 'volume'>('length')

  const conversions: { [key: string]: { [key: string]: number | string } } = {
    // Length units (base: meters)
    'nanometers': { 'meters': 1e-9, 'kilometers': 1e-12, 'centimeters': 1e-7, 'millimeters': 1e-6, 'micrometers': 0.001, 'miles': 6.21371e-13, 'yards': 1.09361e-9, 'feet': 3.28084e-9, 'inches': 3.93701e-8 },
    'micrometers': { 'meters': 1e-6, 'kilometers': 1e-9, 'centimeters': 0.0001, 'millimeters': 0.001, 'nanometers': 1000, 'miles': 6.21371e-10, 'yards': 1.09361e-6, 'feet': 3.28084e-6, 'inches': 3.93701e-5 },
    'millimeters': { 'meters': 0.001, 'kilometers': 1e-6, 'centimeters': 0.1, 'nanometers': 1e6, 'micrometers': 1000, 'miles': 6.21371e-7, 'yards': 0.00109361, 'feet': 0.00328084, 'inches': 0.0393701 },
    'centimeters': { 'meters': 0.01, 'kilometers': 1e-5, 'millimeters': 10, 'nanometers': 1e7, 'micrometers': 10000, 'miles': 6.21371e-6, 'yards': 0.0109361, 'feet': 0.0328084, 'inches': 0.393701 },
    'meters': { 'centimeters': 100, 'millimeters': 1000, 'kilometers': 0.001, 'nanometers': 1e9, 'micrometers': 1e6, 'miles': 0.000621371, 'yards': 1.09361, 'feet': 3.28084, 'inches': 39.3701 },
    'kilometers': { 'meters': 1000, 'centimeters': 100000, 'millimeters': 1000000, 'nanometers': 1e12, 'micrometers': 1e9, 'miles': 0.621371, 'yards': 1093.61, 'feet': 3280.84, 'inches': 39370.1 },
    'inches': { 'meters': 0.0254, 'kilometers': 2.54e-5, 'centimeters': 2.54, 'millimeters': 25.4, 'nanometers': 2.54e7, 'micrometers': 25400, 'feet': 0.0833333, 'yards': 0.0277778, 'miles': 1.57828e-5 },
    'feet': { 'meters': 0.3048, 'kilometers': 0.0003048, 'centimeters': 30.48, 'millimeters': 304.8, 'nanometers': 3.048e8, 'micrometers': 304800, 'inches': 12, 'yards': 0.333333, 'miles': 0.000189394 },
    'yards': { 'meters': 0.9144, 'kilometers': 0.0009144, 'centimeters': 91.44, 'millimeters': 914.4, 'nanometers': 9.144e8, 'micrometers': 914400, 'inches': 36, 'feet': 3, 'miles': 0.000568182 },
    'miles': { 'meters': 1609.34, 'kilometers': 1.60934, 'centimeters': 160934, 'millimeters': 1.609e6, 'nanometers': 1.609e12, 'micrometers': 1.609e9, 'inches': 63360, 'feet': 5280, 'yards': 1760 },
    
    // Weight units (base: kilograms)
    'milligrams': { 'grams': 0.001, 'kilograms': 1e-6, 'ounces': 3.5274e-5, 'pounds': 2.2046e-6, 'stones': 1.5747e-7, 'tons': 1e-9 },
    'grams': { 'milligrams': 1000, 'kilograms': 0.001, 'ounces': 0.035274, 'pounds': 0.00220462, 'stones': 0.000157473, 'tons': 1e-6 },
    'kilograms': { 'grams': 1000, 'milligrams': 1e6, 'ounces': 35.274, 'pounds': 2.20462, 'stones': 0.157473, 'tons': 0.001 },
    'ounces': { 'grams': 28.3495, 'kilograms': 0.0283495, 'milligrams': 28349.5, 'pounds': 0.0625, 'stones': 0.00446429, 'tons': 2.835e-5 },
    'pounds': { 'grams': 453.592, 'kilograms': 0.453592, 'milligrams': 453592, 'ounces': 16, 'stones': 0.0714286, 'tons': 0.000453592 },
    'stones': { 'grams': 6350.29, 'kilograms': 6.35029, 'milligrams': 6.350e6, 'ounces': 224, 'pounds': 14, 'tons': 0.00635029 },
    'tons': { 'grams': 1e6, 'kilograms': 1000, 'milligrams': 1e9, 'ounces': 35274, 'pounds': 2204.62, 'stones': 157.473 },
    
    // Temperature units (special conversion)
    'celsius': { 'fahrenheit': 'c_to_f', 'kelvin': 'c_to_k' },
    'fahrenheit': { 'celsius': 'f_to_c', 'kelvin': 'f_to_k' },
    'kelvin': { 'celsius': 'k_to_c', 'fahrenheit': 'k_to_f' },
    
    // Volume units (base: liters)
    'milliliters': { 'liters': 0.001, 'gallons': 0.000264172, 'quarts': 0.00105669, 'pints': 0.00211338, 'cups': 0.00422675, 'fluid_ounces': 0.033814, 'tablespoons': 0.067628, 'teaspoons': 0.202884 },
    'liters': { 'milliliters': 1000, 'gallons': 0.264172, 'quarts': 1.05669, 'pints': 2.11338, 'cups': 4.22675, 'fluid_ounces': 33.814, 'tablespoons': 67.628, 'teaspoons': 202.884 },
    'gallons': { 'milliliters': 3785.41, 'liters': 3.78541, 'quarts': 4, 'pints': 8, 'cups': 16, 'fluid_ounces': 128, 'tablespoons': 256, 'teaspoons': 768 },
    'quarts': { 'milliliters': 946.353, 'liters': 0.946353, 'gallons': 0.25, 'pints': 2, 'cups': 4, 'fluid_ounces': 32, 'tablespoons': 64, 'teaspoons': 192 },
    'pints': { 'milliliters': 473.176, 'liters': 0.473176, 'gallons': 0.125, 'quarts': 0.5, 'cups': 2, 'fluid_ounces': 16, 'tablespoons': 32, 'teaspoons': 96 },
    'cups': { 'milliliters': 236.588, 'liters': 0.236588, 'gallons': 0.0625, 'quarts': 0.25, 'pints': 0.5, 'fluid_ounces': 8, 'tablespoons': 16, 'teaspoons': 48 },
    'fluid_ounces': { 'milliliters': 29.5735, 'liters': 0.0295735, 'gallons': 0.0078125, 'quarts': 0.03125, 'pints': 0.0625, 'cups': 0.125, 'tablespoons': 2, 'teaspoons': 6 },
    'tablespoons': { 'milliliters': 14.7868, 'liters': 0.0147868, 'gallons': 0.00390625, 'quarts': 0.015625, 'pints': 0.03125, 'cups': 0.0625, 'fluid_ounces': 0.5, 'teaspoons': 3 },
    'teaspoons': { 'milliliters': 4.92892, 'liters': 0.00492892, 'gallons': 0.00130208, 'quarts': 0.00520833, 'pints': 0.0104167, 'cups': 0.0208333, 'fluid_ounces': 0.166667, 'tablespoons': 0.333333 }
  }

  const unitCategories = {
    length: ['nanometers', 'micrometers', 'millimeters', 'centimeters', 'meters', 'kilometers', 'inches', 'feet', 'yards', 'miles'],
    weight: ['milligrams', 'grams', 'kilograms', 'ounces', 'pounds', 'stones', 'tons'],
    temperature: ['celsius', 'fahrenheit', 'kelvin'],
    volume: ['milliliters', 'liters', 'gallons', 'quarts', 'pints', 'cups', 'fluid_ounces', 'tablespoons', 'teaspoons']
  }

  const convertTemperature = (value: number, from: string, to: string): number => {
    if (from === to) return value
    
    // Convert to Celsius first
    let celsius: number
    if (from === 'fahrenheit') {
      celsius = (value - 32) * 5/9
    } else if (from === 'kelvin') {
      celsius = value - 273.15
    } else {
      celsius = value
    }
    
    // Convert from Celsius to target
    if (to === 'fahrenheit') {
      return celsius * 9/5 + 32
    } else if (to === 'kelvin') {
      return celsius + 273.15
    } else {
      return celsius
    }
  }

  const convert = () => {
    if (!value) {
      setResult('')
      setError('')
      return
    }

    const numValue = parseFloat(value)
    if (isNaN(numValue)) {
      setError('Please enter a valid number')
      setResult('')
      return
    }

    if (fromUnit === toUnit) {
      setResult(`${numValue} ${fromUnit} = ${numValue} ${toUnit}`)
      setError('')
      return
    }

    try {
      let convertedValue: number
      
      if (category === 'temperature') {
        convertedValue = convertTemperature(numValue, fromUnit, toUnit)
      } else {
        const conversionFactor = conversions[fromUnit]?.[toUnit]
        if (!conversionFactor) {
          setError('Conversion not available')
          setResult('')
          return
        }
        if (typeof conversionFactor === 'number') {
          convertedValue = numValue * conversionFactor
        } else {
          setError('Conversion not available')
          setResult('')
          return
        }
      }

      const formattedResult = convertedValue < 0.01 || convertedValue > 1000000 
        ? convertedValue.toExponential(6)
        : convertedValue.toFixed(6).replace(/\.?0+$/, '')

      setResult(`${numValue} ${fromUnit} = ${formattedResult} ${toUnit}`)
      setError('')

      // Add to history
      const historyItem: ConversionHistory = {
        id: Date.now().toString(),
        fromValue: numValue,
        fromUnit,
        toValue: convertedValue,
        toUnit,
        timestamp: new Date()
      }
      
      setHistory(prev => [historyItem, ...prev.slice(0, 4)]) // Keep last 5 items
    } catch (error) {
      setError('Conversion failed')
      setResult('')
    }
  }

  const swapUnits = () => {
    setFromUnit(toUnit)
    setToUnit(fromUnit)
  }

  const loadFromHistory = (historyItem: ConversionHistory) => {
    setValue(historyItem.fromValue.toString())
    setFromUnit(historyItem.fromUnit)
    setToUnit(historyItem.toUnit)
  }

  const clearHistory = () => {
    setHistory([])
  }

  useEffect(() => {
    convert()
  }, [value, fromUnit, toUnit, category])

  useEffect(() => {
    // Reset units when category changes
    const availableUnits = unitCategories[category]
    if (!availableUnits.includes(fromUnit)) {
      setFromUnit(availableUnits[0])
    }
    if (!availableUnits.includes(toUnit)) {
      setToUnit(availableUnits[1] || availableUnits[0])
    }
  }, [category])

  const availableUnits = unitCategories[category]

  return (
    <Card className="max-w-4xl mx-auto mb-12">
      <div className="space-y-6">
        {/* Category Selection */}
        <div>
          <label className="block text-primary-text font-medium mb-3">
            Category
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.keys(unitCategories).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat as any)}
                className={`p-3 rounded-lg border-2 transition-all capitalize ${
                  category === cat 
                    ? 'border-accent bg-accent/10 text-accent' 
                    : 'border-border hover:border-accent/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Value Input */}
        <div>
          <label className="block text-primary-text font-medium mb-2">
            Value
            <span className="text-secondary-text font-normal ml-2">
              e.g., {category === 'length' ? '100' : category === 'weight' ? '70' : category === 'temperature' ? '25' : '2.5'}
            </span>
          </label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter value to convert"
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            step="any"
          />
        </div>

        {/* Unit Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-primary-text font-medium mb-2">
              From Unit
            </label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent capitalize"
            >
              {availableUnits.map(unit => (
                <option key={unit} value={unit}>{unit.replace('_', ' ')}</option>
              ))}
            </select>
          </div>

          <div className="flex justify-center">
            <button
              onClick={swapUnits}
              className="p-3 border border-border rounded-lg hover:bg-card-hover transition-colors"
              title="Swap units"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>
          </div>

          <div>
            <label className="block text-primary-text font-medium mb-2">
              To Unit
            </label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent capitalize"
            >
              {availableUnits.map(unit => (
                <option key={unit} value={unit}>{unit.replace('_', ' ')}</option>
              ))}
            </select>
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

        {/* Result */}
        {result && (
          <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-text mb-2">
                {result}
              </div>
            </div>
          </div>
        )}

        {/* History */}
        {history.length > 0 && (
          <div className="p-4 bg-secondary-bg rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium text-primary-text">Recent Conversions</h4>
              <button
                onClick={clearHistory}
                className="text-sm text-secondary-text hover:text-primary-text transition-colors"
              >
                Clear
              </button>
            </div>
            <div className="space-y-2">
              {history.map((item) => (
                <div 
                  key={item.id}
                  className="flex justify-between items-center p-2 bg-primary-bg rounded border border-border hover:bg-card-hover transition-colors cursor-pointer"
                  onClick={() => loadFromHistory(item)}
                >
                  <div className="text-sm">
                    <span className="text-primary-text">{item.fromValue} {item.fromUnit.replace('_', ' ')}</span>
                    <span className="text-secondary-text mx-2">→</span>
                    <span className="text-primary-text">
                      {item.toValue < 0.01 || item.toValue > 1000000 
                        ? item.toValue.toExponential(3)
                        : item.toValue.toFixed(3).replace(/\.?0+$/, '')
                      } {item.toUnit.replace('_', ' ')}
                    </span>
                  </div>
                  <div className="text-xs text-secondary-text">
                    {item.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
