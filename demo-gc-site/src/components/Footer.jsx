import { Link } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'

const flpFooterLinks = {
  'Homeowners': [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Project Types', href: '#services' },
    { label: 'Find a Pro', href: '#contact' },
  ],
  'Company': [
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
}

const blpFooterLinks = {
  'For Pros': [
    { label: 'Why BLP', href: '#why-blp' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Become a Pro', href: '#contact' },
  ],
  'Company': [
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
}

export default function Footer({ variant = 'flp' }) {
  const isFLP = variant === 'flp'
  const footerLinks = isFLP ? flpFooterLinks : blpFooterLinks

  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-nav.png" alt="Best Local Pro" className="h-10 w-auto" />
              <span className="font-display font-700 text-lg text-white">
                {isFLP ? (
                  <>find<span className="text-accent-400">local</span>pros</>
                ) : (
                  <>Best<span className="text-accent-400">Local</span>Pro</>
                )}
              </span>
            </div>
            <p className="text-navy-400 text-sm leading-relaxed mb-6 max-w-xs">
              {isFLP
                ? 'Connecting homeowners with the most trusted local professionals for every home project. Always free.'
                : 'We help the best local pros grow their business with qualified, confirmed appointments. Pay only for wins.'
              }
            </p>
            <div className="space-y-3">
              <a href="tel:2407802608" className="flex items-center gap-2 text-sm text-navy-300 hover:text-accent-400 transition-colors">
                <Phone className="w-4 h-4" />(240) 780-2608
              </a>
              <a href="mailto:info@bestlocalpro.us" className="flex items-center gap-2 text-sm text-navy-300 hover:text-accent-400 transition-colors">
                <Mail className="w-4 h-4" />info@bestlocalpro.us
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display font-700 text-sm uppercase tracking-wider text-white mb-4">{heading}</h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-navy-400 hover:text-accent-400 transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display font-700 text-sm uppercase tracking-wider text-white mb-4">
              {isFLP ? 'For Pros' : 'For Homeowners'}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to={isFLP ? '/pros' : '/'} className="text-sm text-accent-400 hover:text-accent-300 transition-colors font-500">
                  {isFLP ? 'Become a Pro →' : 'Find a Pro →'}
                </Link>
              </li>
              <li>
                <a href="tel:2407802608" className="text-sm text-navy-400 hover:text-accent-400 transition-colors">Call Us</a>
              </li>
            </ul>
          </div>
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
