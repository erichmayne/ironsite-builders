import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&q=80"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/70 to-stone-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-stone-950/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-3xl">
          {/* Gold accent line */}
          <div className="h-[3px] w-20 bg-gold-500 mb-8" />

          <p className="text-gold-400 uppercase tracking-[0.15em] sm:tracking-[0.3em] text-xs sm:text-sm font-600 mb-4">
            Seattle Metro&apos;s Trusted Builder
          </p>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-700 leading-[1.05] mb-6">
            Building with
            <br />
            <span className="text-gold-400">Purpose & Precision</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-8 sm:mb-10">
            Residential and commercial general contracting across the greater Seattle
            area. Over 20 years of building homes, businesses, and lasting relationships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold-500 text-white font-600 uppercase tracking-wider text-sm hover:bg-gold-600 transition-all"
            >
              Request a Free Estimate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-500 uppercase tracking-wider text-sm hover:border-gold-400 hover:text-gold-400 transition-all"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold-500 to-transparent animate-bounce" />
      </div>
    </section>
  )
}
