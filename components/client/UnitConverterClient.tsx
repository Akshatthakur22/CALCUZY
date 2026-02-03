'use client'

import { useState } from 'react'
import { ToolWrapper, ToolInput, ToolResult, ToolButton } from '@/components/ToolWrapper'

export default function UnitConverterClient() {
  const [value, setValue] = useState('')
  const [fromUnit, setFromUnit] = useState('cm')
  const [toUnit, setToUnit] = useState('inches')
  const [result, setResult] = useState('')

  const conversions: { [key: string]: { [key: string]: number } } = {
    cm: { inches: 0.393701, feet: 0.0328084, meters: 0.01, km: 0.00001 },
    inches: { cm: 2.54, feet: 0.0833333, meters: 0.0254, km: 0.0000254 },
    feet: { cm: 30.48, inches: 12, meters: 0.3048, km: 0.0003048 },
    meters: { cm: 100, inches: 39.3701, feet: 3.28084, km: 0.001 },
    km: { cm: 100000, inches: 39370.1, feet: 3280.84, meters: 1000 },
    kg: { lbs: 2.20462, oz: 35.274, g: 1000, ton: 0.001 },
    lbs: { kg: 0.453592, oz: 16, g: 453.592, ton: 0.000453592 },
    oz: { kg: 0.0283495, lbs: 0.0625, g: 28.3495, ton: 0.0000283495 },
    g: { kg: 0.001, lbs: 0.00220462, oz: 0.035274, ton: 0.000001 },
    ton: { kg: 1000, lbs: 2204.62, oz: 35274, g: 1000000 }
  }

  const convert = () => {
    if (!value) {
      setResult('Please enter a value to convert')
      return
    }

    const numValue = parseFloat(value)
    if (isNaN(numValue)) {
      setResult('Please enter a valid number')
      return
    }

    if (fromUnit === toUnit) {
      setResult(`${numValue} ${fromUnit} = ${numValue} ${toUnit}`)
      return
    }

    const conversionFactor = conversions[fromUnit]?.[toUnit]
    if (!conversionFactor) {
      setResult('Conversion not available')
      return
    }

    const convertedValue = numValue * conversionFactor
    setResult(`${numValue} ${fromUnit} = ${convertedValue.toFixed(6)} ${toUnit}`)
  }

  const unitCategories = {
    length: ['cm', 'inches', 'feet', 'meters', 'km'],
    weight: ['kg', 'lbs', 'oz', 'g', 'ton']
  }

  const getCurrentCategory = () => {
    for (const [category, units] of Object.entries(unitCategories)) {
      if (units.includes(fromUnit) || units.includes(toUnit)) {
        return category
      }
    }
    return 'length'
  }

  const currentCategory = getCurrentCategory()
  const availableUnits = unitCategories[currentCategory as keyof typeof unitCategories]

  const unitOptions = availableUnits.map(unit => ({ value: unit, label: unit }))

  return (
    <ToolWrapper>
      <div className="space-y-6">
        <ToolInput
          id="value-input"
          label="Value"
          type="number"
          value={value}
          onChange={(val) => setValue(val)}
          placeholder="Enter value to convert"
          inputMode="decimal"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ToolInput
            id="from-unit"
            label="From Unit"
            type="select"
            value={fromUnit}
            onChange={(val) => setFromUnit(val)}
            options={unitOptions}
          />

          <ToolInput
            id="to-unit"
            label="To Unit"
            type="select"
            value={toUnit}
            onChange={(val) => setToUnit(val)}
            options={unitOptions}
          />
        </div>

        <ToolButton onClick={convert}>
          Convert
        </ToolButton>

        {result && (
          <ToolResult copyText={result} copyLabel="Conversion Result">
            <div className="text-lg font-medium text-slate-900 text-center">
              {result}
            </div>
          </ToolResult>
        )}
      </div>
    </ToolWrapper>
  )
}
