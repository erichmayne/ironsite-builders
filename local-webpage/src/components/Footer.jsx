import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Custom Websites', href: '#services' },
    { label: 'Local SEO', href: '#services' },
    { label: 'Online Booking', href: '#services' },
    { label: 'Analytics', href: '#services' },
  ],
  Company: [
    { label: 'Our Work', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
  Trades: [
    { label: 'Plumbers', href: '#' },
    { label: 'Electricians', href: '#' },
    { label: 'Roofers', href: '#' },
    { label: 'Handymen', href: '#' },
    { label: 'Landscapers', href: '#' },
    { label: 'Painters', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 bg-blue-950 noise overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-blue-950/95" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-blue-800/30">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <img src="/logo.png" alt="IronSite Builders" className="w-9 h-9 rounded-xl" />
              <span className="font-display font-800 text-lg text-white tracking-tight">
                Iron<span className="text-blue-400">Site</span>
              </span>
            </a>
            <p className="text-sm text-blue-200/40 max-w-sm leading-relaxed mb-6">
              We build websites for the people who build everything else. Serving tradesmen across the greater Seattle area and beyond.
            </p>
            <div className="space-y-2">
              <a href="mailto:hello@ironsite.builders" className="flex items-center gap-2 text-sm text-blue-300/50 hover:text-blue-300 transition-colors">
                <Mail className="w-4 h-4" /> hello@ironsite.builders
              </a>
              <a href="tel:+12065551234" className="flex items-center gap-2 text-sm text-blue-300/50 hover:text-blue-300 transition-colors">
                <Phone className="w-4 h-4" /> (206) 555-1234
              </a>
              <p className="flex items-center gap-2 text-sm text-blue-300/50">
                <MapPin className="w-4 h-4" /> Seattle, WA
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-blue-300/40 hover:text-blue-300 transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-xs text-blue-300/30">
            &copy; {new Date().getFullYear()} IronSite Builders. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-blue-300/30 hover:text-blue-300/60 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-blue-300/30 hover:text-blue-300/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
