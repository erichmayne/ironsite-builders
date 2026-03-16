import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Heart, Clock } from 'lucide-react'

const badges = [
  { icon: Shield, label: '100% Free for Homeowners' },
  { icon: Heart, label: 'Trusted & Recommended Pros' },
  { icon: Clock, label: 'Fast, Confirmed Appointments' },
]

export default function HeroFLP() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/img/hero.jpg" alt="Beautiful home" className="w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-navy-950/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 w-full">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-500 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
            We Know the Pros
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-800 leading-[1.05] text-white mb-5 sm:mb-6">
            Real Help for
            <br />
            <span className="text-accent-400">Real Projects</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-200 text-base sm:text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-8 sm:mb-10">
            We connect homeowners with the most trusted local professionals for
            every home project — kitchens, baths, roofs, decks, and everything
            in between. Always free.
          </p>

          <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 text-white font-600 rounded-full text-base hover:bg-accent-600 transition-all shadow-xl shadow-accent-500/30 hover:shadow-accent-500/50"
            >
              Find a Pro
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/pros"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-500 rounded-full text-base hover:border-accent-400 hover:text-accent-400 transition-all"
            >
              Are You a Pro?
            </Link>
          </div>

          <div className="animate-fade-in-up animate-delay-400 flex flex-wrap gap-4 sm:gap-6">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-sm text-white/70">
                <div className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Icon className="w-4 h-4 text-accent-400" />
                </div>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
