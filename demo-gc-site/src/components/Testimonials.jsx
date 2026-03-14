import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Karen & Tom Whitfield',
    project: 'Wallingford Kitchen Remodel',
    text: "Summit completely transformed our 1940s kitchen. They uncovered some structural issues during demo and handled them without inflating the budget or timeline. The communication throughout was exceptional — we always knew what was happening and when. The finished product exceeded what we imagined.",
    stars: 5,
  },
  {
    name: 'David Chen',
    project: 'Capitol Hill Restaurant Build-Out',
    text: "Opening a restaurant is stressful enough without worrying about construction delays. Summit delivered on time and under budget, which in commercial contracting is almost unheard of. Their crew was professional, clean, and genuinely cared about getting the details right.",
    stars: 5,
  },
  {
    name: 'Rachel Nguyen',
    project: 'Ballard ADU Construction',
    text: "We needed an ADU for aging parents and Summit made the entire process painless. They handled the permits, designed a layout that worked for our lot, and built something that honestly looks better than our main house. Incredible work.",
    stars: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="h-[3px] w-16 bg-gold-500 mx-auto mb-6" />
          <p className="text-gold-600 uppercase tracking-[0.2em] text-sm font-600 mb-3">Client Reviews</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-700">What Our Clients Say</h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[idx].stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-base sm:text-xl md:text-2xl text-stone-800 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[idx].text}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div>
                <p className="font-600 text-stone-900">{testimonials[idx].name}</p>
                <p className="text-sm text-gold-600">{testimonials[idx].project}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <div className="flex justify-center gap-3 mt-10">
            <button onClick={prev} className="w-12 h-12 border border-stone-300 flex items-center justify-center hover:border-gold-500 hover:text-gold-600 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-12 h-12 border border-stone-300 flex items-center justify-center hover:border-gold-500 hover:text-gold-600 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === idx ? 'bg-gold-500 w-6' : 'bg-stone-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
