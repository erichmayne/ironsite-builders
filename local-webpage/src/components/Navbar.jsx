import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Wrench, Code2, ExternalLink } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass bg-eggshell-100/80 shadow-lg shadow-blue-900/5 border-b border-eggshell-300/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-600/25 group-hover:shadow-blue-600/40 transition-shadow">
            <Wrench className="w-4 h-4 text-white absolute -rotate-45 translate-x-[-2px] translate-y-[-1px]" strokeWidth={2.5} />
            <Code2 className="w-4 h-4 text-blue-200 absolute rotate-12 translate-x-[2px] translate-y-[2px]" strokeWidth={2.5} />
          </div>
          <span className="font-display font-800 text-xl tracking-tight">
            Trade<span className="text-blue-600">Site</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-blue-900/70 hover:text-blue-700 transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 rounded-full group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://demo.ironsite.builders" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200/60 rounded-full hover:bg-blue-100 hover:border-blue-300 transition-all">
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
          <a href="#contact" className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all hover:-translate-y-0.5 active:translate-y-0">
            Get Your Site
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-eggshell-200 transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass bg-eggshell-100/95 border-t border-eggshell-300/50 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-blue-900/70 hover:text-blue-700 hover:bg-eggshell-200/50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="https://demo.ironsite.builders" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-1.5 mt-3 px-6 py-3 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200/60 rounded-full">
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="block mt-2 px-6 py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full">
                Get Your Site
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
