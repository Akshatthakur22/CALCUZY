import Link from 'next/link'

const footerLinks = {
  tools: [
    { href: '/age-calculator', label: 'Age Calculator' },
    { href: '/bmi-calculator', label: 'BMI Calculator' },
    { href: '/date-difference', label: 'Date Difference' },
    { href: '/unit-converter', label: 'Unit Converter' },
    { href: '/random-number-generator', label: 'Random Number' },
  ],
  explore: [
    { href: '/tools', label: 'All Tools' },
    { href: '/countdowns', label: 'Countdowns' },
    { href: '/names', label: 'Name Generators' },
    { href: '/quotes', label: 'Quotes' },
  ],
  legal: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/60 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 mb-4 group"
            >
              <span className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-500 transition-colors">
                Calcuzy
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              100+ precision tools for everyday calculations. Simple, fast, and beautifully designed.
            </p>
          </div>
          
          {/* Tools Column */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm tracking-wide uppercase">
              Popular Tools
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.tools.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-slate-500 hover:text-blue-500 transition-colors duration-200 py-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Explore Column */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm tracking-wide uppercase">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-slate-500 hover:text-blue-500 transition-colors duration-200 py-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal Column */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm tracking-wide uppercase">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-slate-500 hover:text-blue-500 transition-colors duration-200 py-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-200/60 mt-10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400 text-center sm:text-left">
              © {new Date().getFullYear()} Calcuzy.app · Made with precision
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link 
                href="/privacy-policy" 
                className="text-slate-400 hover:text-blue-500 transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link 
                href="/terms" 
                className="text-slate-400 hover:text-blue-500 transition-colors duration-200"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
