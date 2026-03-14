import { Phone, Palette, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  { num: '01', icon: Phone, title: 'Free Consultation', desc: '15-minute call. We learn about your trade, your market, and what you need. No pressure, no jargon.' },
  { num: '02', icon: Palette, title: 'Design & Build', desc: 'We design your site, you review it. One round of revisions included. Most sites done in 48 hours.' },
  { num: '03', icon: Rocket, title: 'Launch Day', desc: 'We handle hosting, domain, SSL, speed optimization — all the tech. You just approve and we go live.' },
  { num: '04', icon: TrendingUp, title: 'Grow & Dominate', desc: 'Ongoing SEO, monthly reports, and updates. Watch your phone ring more than it ever has.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/50 text-blue-600 text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 tracking-tight mb-4">
            Four Steps to <span className="text-gradient">Your New Site</span>
          </h2>
          <p className="text-lg text-blue-900/50 max-w-2xl mx-auto">
            We keep it simple. You focus on your craft, we handle the digital side.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent -translate-y-1/2" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ num, icon: Icon, title, desc }) => (
              <div key={num} className="relative text-center group">
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-white border-2 border-eggshell-300 group-hover:border-blue-300 shadow-lg shadow-blue-900/5 group-hover:shadow-blue-600/10 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2">
                  <Icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {num}
                  </span>
                </div>
                <h3 className="font-display text-xl font-700 mb-2">{title}</h3>
                <p className="text-sm text-blue-900/50 leading-relaxed max-w-[260px] mx-auto">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
