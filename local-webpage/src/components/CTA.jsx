import { ArrowRight, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-6 sm:p-10 md:p-16 overflow-hidden noise">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-400/20 blur-[100px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-blue-300/10 blur-[80px] translate-y-1/2 -translate-x-1/4" />

          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-800 text-white tracking-tight mb-6">
              Ready to Stop Losing
              <br />
              <span className="text-blue-300">Customers Online?</span>
            </h2>

            <p className="text-lg text-blue-100/60 mb-10 max-w-xl mx-auto">
              Every day without a website is a day your competitors get the calls that should be yours.
              Let&apos;s fix that — starting with a free 15-minute consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+12065551234"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-blue-700 bg-white rounded-full shadow-xl shadow-blue-900/30 hover:shadow-blue-900/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <Phone className="w-4 h-4" />
                Call (206) 555-1234
              </a>
              <a
                href="mailto:hello@ironsite.builders"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <p className="text-sm text-blue-200/30 mt-6">
              No pressure. No commitment. Just a conversation about what&apos;s possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
