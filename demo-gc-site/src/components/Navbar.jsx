import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-stone-950/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-gold-500 flex items-center justify-center">
            <span className="font-display text-gold-500 font-700 text-lg leading-none">S</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-white text-lg font-600 leading-tight tracking-wide">SUMMIT</p>
            <p className="text-[10px] text-gold-400 uppercase tracking-[0.25em] font-500">General Contractors</p>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a key={href} href={href} className="text-sm text-white/70 hover:text-gold-400 transition-colors uppercase tracking-wider font-500">
              {label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+12066604218" className="flex items-center gap-2 text-sm text-gold-400 font-600">
            <Phone className="w-4 h-4" />
            (206) 660-4218
          </a>
          <a href="#contact" className="px-6 py-2.5 bg-gold-500 text-white text-sm font-600 uppercase tracking-wider hover:bg-gold-600 transition-colors">
            Free Estimate
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-stone-950/98 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-6 space-y-4">
            {links.map(({ label, href }) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="block text-white/70 hover:text-gold-400 uppercase tracking-wider text-sm font-500">
                {label}
              </a>
            ))}
            <a href="tel:+12066604218" className="block pt-4 text-gold-400 font-600 text-sm">
              <Phone className="w-4 h-4 inline mr-2" />(206) 660-4218
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
