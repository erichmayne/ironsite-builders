import { Star, Quote } from 'lucide-react'

const testimonials = [
  { name: 'Joe Martinez', trade: 'Plumber, Federal Way', text: "I was getting maybe 5 calls a month off Craigslist. IronSite built me a site and now I'm turning work away. Wish I'd done this 5 years ago.", stars: 5, initials: 'JM' },
  { name: 'Sarah Kim', trade: 'Electrician, Bellevue', text: "They understood my business from the first call. No upselling, no BS. Site was live in 2 days and my Google rankings jumped within a month.", stars: 5, initials: 'SK' },
  { name: 'Marcus Johnson', trade: 'Roofer, Tacoma', text: "The before-and-after gallery they built for me does the selling on its own. I just point people to the site and the phone rings.", stars: 5, initials: 'MJ' },
  { name: 'Dave Castillo', trade: 'Handyman, Seattle', text: "I thought I didn't need a website — I was wrong. Online booking alone saved me 2 hours a day of back-and-forth phone calls.", stars: 5, initials: 'DC' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-100/30 blur-[120px] -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/50 text-blue-600 text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 tracking-tight mb-4">
            Don&apos;t Take Our Word. <span className="text-gradient">Take Theirs.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map(({ name, trade, text, stars, initials }) => (
            <div
              key={name}
              className="group relative p-5 sm:p-7 rounded-2xl bg-white/60 border border-eggshell-300/50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200/40 transition-all duration-500"
            >
              <Quote className="absolute top-5 right-5 w-10 h-10 text-blue-100 group-hover:text-blue-200 transition-colors" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-blue-500 text-blue-500" />
                ))}
              </div>
              <p className="text-blue-900/70 leading-relaxed mb-6 relative z-10">&ldquo;{text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-blue-600/20">
                  {initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{name}</p>
                  <p className="text-xs text-blue-900/40">{trade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
