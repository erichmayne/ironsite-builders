import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-stone-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border-2 border-gold-500 flex items-center justify-center">
                <span className="font-display text-gold-500 font-700 text-lg leading-none">S</span>
              </div>
              <div>
                <p className="font-display text-white text-lg font-600 tracking-wide">SUMMIT</p>
                <p className="text-[10px] text-gold-400 uppercase tracking-[0.2em]">General Contractors</p>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Building across the greater Seattle metro area since 2004. Licensed, bonded, and insured.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-600 text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Projects', 'Testimonials', 'Contact'].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-sm text-white/40 hover:text-gold-400 transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-600 text-sm uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {['Kitchen & Bath', 'Home Additions', 'Commercial', 'New Construction', 'Exterior & Siding', 'Structural Repairs'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/40 hover:text-gold-400 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-600 text-sm uppercase tracking-wider mb-5">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+12066604218" className="flex items-center gap-3 text-sm text-white/40 hover:text-gold-400 transition-colors">
                <Phone className="w-4 h-4 text-gold-500" /> (206) 660-4218
              </a>
              <a href="mailto:info@summitgc.com" className="flex items-center gap-3 text-sm text-white/40 hover:text-gold-400 transition-colors">
                <Mail className="w-4 h-4 text-gold-500" /> info@summitgc.com
              </a>
              <p className="flex items-center gap-3 text-sm text-white/40">
                <MapPin className="w-4 h-4 text-gold-500" /> Seattle, WA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-xs text-white/20">&copy; {new Date().getFullYear()} Summit General Contractors. All rights reserved.</p>
          <p className="text-xs text-white/20">WA License #SUMMIGC*834KZ</p>
        </div>
      </div>
    </footer>
  )
}
