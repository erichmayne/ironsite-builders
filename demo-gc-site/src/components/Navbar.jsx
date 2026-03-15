import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Services', href: '#services' },
  { label: 'For Pros', href: '#for-pros' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-accent-500 flex items-center justify-center">
            <span className="text-white font-display font-800 text-sm">B</span>
          </div>
          <span className={`font-display font-700 text-lg transition-colors ${scrolled ? 'text-navy-800' : 'text-white'}`}>
            Best<span className="text-accent-500">Local</span>Pro
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`text-sm font-500 transition-colors hover:text-accent-500 ${
                scrolled ? 'text-navy-600' : 'text-white/80'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:2407802608" className={`flex items-center gap-2 text-sm font-600 transition-colors ${
            scrolled ? 'text-navy-700' : 'text-white'
          }`}>
            <Phone className="w-4 h-4" />
            (240) 780-2608
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-accent-500 text-white text-sm font-600 rounded-full hover:bg-accent-600 transition-colors shadow-lg shadow-accent-500/25"
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 ${scrolled ? 'text-navy-800' : 'text-white'}`}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-navy-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-navy-700 font-500 hover:bg-navy-50 rounded-lg transition-colors"
              >
                {label}
              </a>
            ))}
            <div className="pt-3 border-t border-navy-100 mt-3">
              <a href="tel:2407802608" className="flex items-center gap-2 px-4 py-3 text-navy-700 font-600">
                <Phone className="w-4 h-4" />
                (240) 780-2608
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center mt-2 px-5 py-3 bg-accent-500 text-white font-600 rounded-full"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
