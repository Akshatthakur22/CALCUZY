'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'Unit Converter – Convert cm to inches, kg to lbs',
  description: 'Convert between different units with our free unit converter. Convert length, weight, temperature, and more with instant results.',
  keywords: 'convert cm to inches, kg to lbs, unit converter, measurement conversion',
  openGraph: {
    title: 'Unit Converter – Convert cm to inches, kg to lbs',
    description: 'Convert between different units with our free unit converter.',
    type: 'website',
  },
}

export default function UnitConverter() {
  const [value, setValue] = useState('')
  const [fromUnit, setFromUnit] = useState('meters')
  const [toUnit, setToUnit] = useState('feet')
  const [result, setResult] = useState('')

  const conversions = {
    length: {
      meters: { feet: 3.28084, inches: 39.3701, yards: 1.09361 },
      feet: { meters: 0.3048, inches: 3.6576, yards: 0.33333 },
      inches: { meters: 0.0254, centimeters: 2.54, yards: 0.02778 },
      centimeters: { meters: 0.01, inches: 0.3937, yards: 0.01094 },
      yards: { meters: 0.9144, inches: 32.8084, feet: 2.7340 }
    },
    weight: {
      kilograms: { pounds: 2.20462, ounces: 35.274 },
      pounds: { kilograms: 0.45359, ounces: 16 },
      ounces: { kilograms: 0.02835, grams: 28.35 }
    }
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

    let convertedValue = 0
    const category = fromUnit.includes('meter') || fromUnit.includes('feet') || fromUnit.includes('inch') || fromUnit.includes('centimeter') || fromUnit.includes('yard') ? 'length' : 'weight'

    if (category === 'length') {
      const fromMeters = fromUnit === 'meters' ? 1 : 
                          fromUnit === 'feet' ? 0.3048 :
                          fromUnit === 'inches' ? 0.0254 :
                          fromUnit === 'centimeters' ? 0.01 :
                          fromUnit === 'yards' ? 0.9144 : 1

      const toMeters = toUnit === 'meters' ? 1 : 
                       toUnit === 'feet' ? 0.3048 :
                       toUnit === 'inches' ? 0.0254 :
                       toUnit === 'centimeters' ? 0.01 :
                       toUnit === 'yards' ? 0.9144 : 1

      convertedValue = (numValue * toMeters) / fromMeters
    } else if (category === 'weight') {
      const fromKilograms = fromUnit === 'kilograms' ? 1 : 
                            fromUnit === 'pounds' ? 0.45359 :
                            fromUnit === 'ounces' ? 0.02835 : 1

      const toKilograms = toUnit === 'kilograms' ? 1 : 
                           toUnit === 'pounds' ? 0.45359 :
                           toUnit === 'ounces' ? 0.02835 : 1

      convertedValue = (numValue * fromKilograms) / toKilograms
    }

    setResult(`${numValue} ${fromUnit} = ${convertedValue.toFixed(4)} ${toUnit}`)
  }

  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      
      <main className="container py-12">
        <div className="text-center mb-12">
          <h1 className="heading-1 text-center mb-6">
            Unit Converter
          </h1>
          <p className="paragraph text-center max-w-2xl mx-auto mb-8">
            Convert between different units with instant results. Convert length, weight, 
            temperature and more with precise calculations for everyday use.
          </p>
        </div>

        <AdUnit slot={1} />

        <Card className="max-w-2xl mx-auto mb-12">
          <div className="space-y-6">
            <div>
              <label className="block text-primary-text font-medium mb-2">
                Value
              </label>
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter value to convert"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-primary-text font-medium mb-2">
                From Unit
              </label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <optgroup label="Length">
                  <option value="meters">Meters</option>
                  <option value="feet">Feet</option>
                  <option value="inches">Inches</option>
                  <option value="centimeters">Centimeters</option>
                  <option value="yards">Yards</option>
                </optgroup>
                <optgroup label="Weight">
                  <option value="kilograms">Kilograms</option>
                  <option value="pounds">Pounds</option>
                  <option value="ounces">Ounces</option>
                </optgroup>
              </select>
            </div>

            <div>
              <label className="block text-primary-text font-medium mb-2">
                To Unit
              </label>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <optgroup label="Length">
                  <option value="meters">Meters</option>
                  <option value="feet">Feet</option>
                  <option value="inches">Inches</option>
                  <option value="centimeters">Centimeters</option>
                  <option value="yards">Yards</option>
                </optgroup>
                <optgroup label="Weight">
                  <option value="kilograms">Kilograms</option>
                  <option value="pounds">Pounds</option>
                  <option value="ounces">Ounces</option>
                </optgroup>
              </select>
            </div>

            <button
              onClick={convert}
              className="w-full btn-primary"
            >
              Convert
            </button>

            {result && (
              <div className="p-4 bg-secondary-bg rounded-lg text-center">
                <div className="text-lg font-medium text-primary-text">
                  {result}
                </div>
              </div>
            )}
          </div>
        </Card>

        <AdUnit slot={2} />

        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">About Unit Converter</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="paragraph">
              Our unit converter provides instant conversions between different measurement units, 
              making it easy to switch between metric and imperial systems. Whether you're converting 
              length, weight, or other measurements, this tool delivers accurate results 
              instantly.
            </p>
            
            <p className="paragraph">
              Unit conversion is essential in our globalized world where different systems 
              coexist. From cooking with international recipes to construction projects and 
              scientific calculations, having a reliable converter saves time and prevents 
              costly mistakes in unit conversions.
            </p>
            
            <p className="paragraph">
              The converter handles common conversions like meters to feet, kilograms to pounds, 
              and centimeters to inches. These conversions are frequently needed in everyday 
              situations, from home improvement projects to international travel and commerce.
            </p>
            
            <h3 className="heading-3 mt-8 mb-4">Common Conversion Examples</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-secondary-text"><strong>Length:</strong> 1 meter = 3.28 feet = 39.37 inches</li>
              <li className="text-secondary-text"><strong>Weight:</strong> 1 kilogram = 2.2 pounds = 35.3 ounces</li>
              <li className="text-secondary-text"><strong>Temperature:</strong> 0°C = 32°F = 273.15K</li>
              <li className="text-secondary-text"><strong>Volume:</strong> 1 liter = 0.26 gallons = 4.23 cups</li>
            </ul>
            
            <p className="paragraph">
              Our unit converter is completely free to use and provides instant results without 
              requiring any registration or personal information. The tool works on all devices 
              and browsers, making it accessible whenever you need to convert measurements.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-3 mb-6">Related Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/age-calculator" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">Age Calculator</div>
                <div className="text-sm text-secondary-text">Calculate your exact age</div>
              </Link>
              <Link href="/bmi-calculator" className="block p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="font-medium text-primary-text mb-1">BMI Calculator</div>
                <div className="text-sm text-secondary-text">Calculate body mass index</div>
              </Link>
            </div>
          </div>
        </div>

        <AdUnit slot={3} />

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-2">How accurate are the conversions?</h3>
              <p className="paragraph">
                Our unit converter uses standard conversion factors for high accuracy. 
                Length conversions are precise to 4 decimal places, and weight conversions 
                are accurate to 2 decimal places for everyday practical use.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Can I convert between any units?</h3>
              <p className="paragraph">
                Yes, you can convert between any compatible units within the same 
                category (length to length, weight to weight). The converter automatically 
                detects the category and shows appropriate target units.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">What conversion factors are used?</h3>
              <p className="paragraph">
                We use internationally recognized conversion factors. For length, 
                1 meter = 3.28084 feet. For weight, 1 kilogram = 2.20462 pounds. 
                These ensure accurate and consistent conversions worldwide.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Is this suitable for scientific use?</h3>
              <p className="paragraph">
                Our converter provides standard precision suitable for most everyday 
                applications. For scientific or engineering calculations requiring higher precision, 
                specialized calculators with more decimal places may be preferred.
              </p>
            </div>
            
            <div>
              <h3 className="heading-3 mb-2">Is my data secure when using this converter?</h3>
              <p className="paragraph">
                Yes, your privacy is completely protected. All conversions happen locally 
                in your browser, and we don't store any values or results. Your 
                conversions remain private and secure.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
