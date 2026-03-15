import { Phone, Mail } from 'lucide-react'

const footerLinks = {
  'For Homeowners': [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Project Types', href: '#services' },
    { label: 'Find a Pro', href: '#contact' },
  ],
  'For Pros': [
    { label: 'Why BLP', href: '#for-pros' },
    { label: 'Become a Pro', href: '#contact' },
    { label: 'Call Us', href: 'tel:2407802608' },
  ],
  'Company': [
    { label: 'About', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-nav.png" alt="Best Local Pro" className="h-10 w-auto" />
              <span className="font-display font-700 text-lg text-white">
                Best<span className="text-accent-400">Local</span>Pro
              </span>
            </div>
            <p className="text-navy-400 text-sm leading-relaxed mb-6 max-w-xs">
              Connecting property owners with the best local professionals for every home improvement project. Free for homeowners, always.
            </p>
            <div className="space-y-3">
              <a href="tel:2407802608" className="flex items-center gap-2 text-sm text-navy-300 hover:text-accent-400 transition-colors">
                <Phone className="w-4 h-4" />
                (240) 780-2608
              </a>
              <a href="mailto:info@bestlocalpro.us" className="flex items-center gap-2 text-sm text-navy-300 hover:text-accent-400 transition-colors">
                <Mail className="w-4 h-4" />
                info@bestlocalpro.us
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display font-700 text-sm uppercase tracking-wider text-white mb-4">{heading}</h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-navy-400 hover:text-accent-400 transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-navy-500 text-sm">
            &copy; {new Date().getFullYear()} Best Local Pro. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-navy-500 text-sm">
            <span>Website by</span>
            <a href="https://ironsite.builders" target="_blank" rel="noopener noreferrer" className="text-accent-400 font-600 hover:underline">
              IronSite Builders
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
