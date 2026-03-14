import { ArrowUpRight } from 'lucide-react'

const DEMO_URL = 'https://demo.ironsite.builders'

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-blue-950 noise overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900/95 to-blue-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-800/50 border border-blue-700/50 text-blue-300 text-sm font-semibold mb-4">
            Our Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 tracking-tight text-white mb-4">
            Sites That <span className="text-blue-400">Actually Perform</span>
          </h2>
          <p className="text-lg text-blue-200/50 max-w-2xl mx-auto">
            Real results for real tradesmen. Every site built to bring in business, not just look pretty.
          </p>
        </div>

        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block rounded-2xl overflow-hidden bg-blue-900/30 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=500&fit=crop&q=80"
                alt="Summit General Contractors demo"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-950/80 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent lg:hidden" />
            </div>
            <div className="p-5 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider">
                  Live Demo
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                  General Contractor
                </span>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-800 text-white mb-3">
                Summit General Contractors
              </h3>
              <p className="text-blue-200/50 leading-relaxed mb-6">
                Full general contractor website with project portfolio, services breakdown, testimonial carousel, and estimate request form. Click to explore the live site.
              </p>
              <div className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:text-white transition-colors">
                View Website Demo
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
