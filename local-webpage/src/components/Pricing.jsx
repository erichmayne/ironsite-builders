import { Check, ArrowRight, Zap } from 'lucide-react'

const plans = [
  {
    name: 'Essentials', price: '250', period: 'one-time',
    desc: 'A professional site built once and handed off to you. Clean, fast, and yours forever.',
    features: ['You own the site — full ownership', 'Custom design tailored to your trade', 'Mobile-responsive on every device', 'Contact form + click-to-call', 'Google Maps integration', 'Basic on-page SEO setup', 'Delivered in 48 hours'],
    cta: 'Get Started', popular: false,
  },
  {
    name: 'Premium', price: '499', period: 'one-time',
    desc: 'Full site ownership with unlimited changes and ongoing SEO support. The whole package.',
    features: ['You own the site — full ownership', 'Custom design tailored to your trade', 'Unlimited revisions & changes, forever', 'Ongoing SEO optimization & support', 'Online booking system', 'Google review integration', 'Before & after project gallery', 'Analytics dashboard', 'Priority support'],
    cta: 'Go Premium', popular: true,
  },
  {
    name: 'Rental', price: '50', period: '/month',
    desc: 'No upfront cost. Full-featured site with SEO and unlimited updates for one flat monthly fee.',
    features: ['No upfront cost — just $50/mo', 'Full-featured custom website', 'Unlimited changes & content updates', 'Ongoing SEO optimization', 'Online booking system', 'Google review integration', 'Analytics dashboard', 'Cancel anytime, no contracts'],
    cta: 'Start Renting', popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/50 text-blue-600 text-sm font-semibold mb-4">
            Simple Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 tracking-tight mb-4">
            Invest in Your <span className="text-gradient">Digital Storefront</span>
          </h2>
          <p className="text-lg text-blue-900/50 max-w-2xl mx-auto">
            No hidden fees. No long contracts. Just a website that pays for itself in the first week.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {plans.map(({ name, price, period, desc, features, cta, popular }) => (
            <div
              key={name}
              className={`relative group rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                popular
                  ? 'bg-gradient-to-b from-blue-600 to-blue-800 text-white shadow-2xl shadow-blue-600/25 lg:scale-105'
                  : 'bg-white/60 border border-eggshell-300/50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5'
              }`}
            >
              {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-400 text-white text-xs font-bold shadow-lg shadow-blue-500/30">
                  <Zap className="w-3 h-3" /> Most Popular
                </div>
              )}
              <div className="p-5 sm:p-8">
                <h3 className={`font-display text-xl font-700 mb-2 ${popular ? 'text-white' : ''}`}>{name}</h3>
                <p className={`text-sm mb-6 ${popular ? 'text-blue-100/70' : 'text-blue-900/50'}`}>{desc}</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className={`font-display text-5xl font-800 ${popular ? 'text-white' : 'text-gradient'}`}>${price}</span>
                  <span className={`text-sm ${popular ? 'text-blue-200/60' : 'text-blue-900/40'}`}>{period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${popular ? 'bg-blue-400/30' : 'bg-blue-100'}`}>
                        <Check className={`w-3 h-3 ${popular ? 'text-blue-100' : 'text-blue-600'}`} strokeWidth={3} />
                      </div>
                      <span className={`text-sm ${popular ? 'text-blue-100/80' : 'text-blue-900/60'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`group/btn w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  popular
                    ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-lg shadow-blue-900/20'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35'
                }`}>
                  {cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-blue-900/40 mt-8">
          All plans include SSL certificate, mobile-responsive design, and 30-day money-back guarantee. Ownership plans include first year of hosting free.
        </p>
      </div>
    </section>
  )
}
