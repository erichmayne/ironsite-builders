import { ArrowRight, Sparkles, Zap, Shield, ExternalLink } from 'lucide-react'

const badges = [
  { icon: Zap, label: 'Fast Turnaround', accent: false },
  { icon: Shield, label: 'Mobile-First', accent: false },
  { icon: Sparkles, label: 'SEO Built Into Every Page', accent: true },
]

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-blue-200/30 blur-[120px] animate-float" />
        <div className="absolute bottom-20 left-[5%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-blue-300/20 blur-[100px] animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-blue-100/40 blur-[150px]" />
      </div>

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(30,58,95,1) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,95,1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-32">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Now Booking for Spring 2026
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-800 leading-[0.95] tracking-tight mb-6 sm:mb-8">
            Websites That Work
            <br />
            <span className="text-blue-900/40">As Hard As</span>
            <br />
            <span className="text-gradient">You Do.</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-200 text-base sm:text-lg md:text-xl text-blue-900/60 max-w-2xl leading-relaxed mb-8 sm:mb-10">
            We build stunning, lightning-fast websites for plumbers, electricians, roofers,
            and every trade in between. Your skills deserve an online presence that
            actually brings in customers.
          </p>

          <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              See Pricing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://demo.ironsite.builders"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-blue-800 bg-white/60 border border-blue-200/50 rounded-full hover:bg-white hover:border-blue-300/60 shadow-sm hover:shadow-md transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              View Website Demo
            </a>
          </div>

          <div className="animate-fade-in-up animate-delay-400 flex flex-wrap gap-3 sm:gap-6">
            {badges.map(({ icon: Icon, label, accent }) => (
              <div key={label} className={`flex items-center gap-2 text-sm ${
                accent
                  ? 'text-blue-700 font-semibold px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60'
                  : 'text-blue-900/50'
              }`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  accent
                    ? 'bg-blue-600 shadow-md shadow-blue-600/25'
                    : 'bg-blue-50 border border-blue-100'
                }`}>
                  <Icon className={`w-4 h-4 ${accent ? 'text-white' : 'text-blue-600'}`} />
                </div>
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[5%]">
          <div className="animate-fade-in-up animate-delay-300 animate-float relative w-[360px]">
            <div className="rounded-2xl bg-white shadow-2xl shadow-blue-900/10 border border-eggshell-300/60 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-eggshell-200/50 border-b border-eggshell-300/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                </div>
                <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-eggshell-100 text-xs text-blue-900/30 font-mono">
                  joes-plumbing.com
                </div>
              </div>
              <div className="p-5">
                <div className="w-full h-36 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 flex items-center justify-center">
                  <span className="text-white/90 font-display font-700 text-lg">Joe&apos;s Plumbing</span>
                </div>
                <div className="space-y-2.5">
                  <div className="h-3 bg-eggshell-200 rounded-full w-full" />
                  <div className="h-3 bg-eggshell-200 rounded-full w-4/5" />
                  <div className="h-3 bg-eggshell-200 rounded-full w-3/5" />
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="h-9 flex-1 rounded-lg bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">Call Now</span>
                  </div>
                  <div className="h-9 flex-1 rounded-lg bg-eggshell-200 flex items-center justify-center">
                    <span className="text-blue-900/40 text-xs font-semibold">Book Online</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up animate-delay-500 absolute -left-16 top-24 bg-white rounded-xl shadow-xl shadow-blue-900/10 border border-eggshell-300/60 px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-blue-900">New Lead!</p>
                <p className="text-[11px] text-blue-900/40">From Google Search</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
