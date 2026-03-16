import { Link } from 'react-router-dom'
import { ArrowRight, DollarSign, Target, TrendingUp } from 'lucide-react'

const badges = [
  { icon: DollarSign, label: 'Pay Only for Wins' },
  { icon: Target, label: 'Qualified Appointments' },
  { icon: TrendingUp, label: 'No Retainer, No Risk' },
]

export default function HeroBLP() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-navy-950">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-500/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 w-full">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/15 border border-accent-500/30 text-accent-400 text-sm font-600 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
            For Contractors & Pros
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-800 leading-[1.05] text-white mb-5 sm:mb-6">
            Don&apos;t Buy Leads.
            <br />
            <span className="text-accent-400">Buy Wins.</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-200 text-base sm:text-lg md:text-xl text-navy-300 max-w-2xl leading-relaxed mb-8 sm:mb-10">
            We schedule qualified, high-interest appointments with real property
            owners — decision-makers who want your service, have time to meet,
            and are ready to move forward. You only pay when we deliver.
          </p>

          <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 text-white font-600 rounded-full text-base hover:bg-accent-600 transition-all shadow-xl shadow-accent-500/30 hover:shadow-accent-500/50"
            >
              Become a Pro
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:2407802608"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-navy-600 text-white font-500 rounded-full text-base hover:border-accent-400 hover:text-accent-400 transition-all"
            >
              Call Now: (240) 780-2608
            </a>
          </div>

          <div className="animate-fade-in-up animate-delay-400 flex flex-wrap gap-4 sm:gap-6">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-sm text-navy-300">
                <div className="w-9 h-9 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-accent-400" />
                </div>
                {label}
              </div>
            ))}
          </div>

          <div className="animate-fade-in-up animate-delay-400 mt-10">
            <Link to="/" className="text-sm text-navy-400 hover:text-accent-400 transition-colors">
              Looking for a pro for your home project? →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
