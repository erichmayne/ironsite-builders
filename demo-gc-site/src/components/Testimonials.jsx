import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "I was dreading having to call a dozen contractors. BLP matched me with an incredible kitchen guy in 24 hours. He showed up on time, knew exactly what I needed, and the price was fair. This is how it should always work.",
    name: 'Sarah M.',
    role: 'Homeowner — Kitchen Remodel',
    type: 'homeowner',
  },
  {
    quote: "I used to spend thousands on lead services and half the leads were garbage. With BLP, every appointment is a real homeowner who actually wants the work done. I close at nearly double my old rate.",
    name: 'Mike R.',
    role: 'Licensed General Contractor',
    type: 'pro',
  },
  {
    quote: "They scheduled my appointment, confirmed it three times, and even followed up after the pro visited to make sure everything went well. I\u2019ve never had a service care this much about the experience.",
    name: 'Jennifer L.',
    role: 'Homeowner — Bathroom Renovation',
    type: 'homeowner',
  },
  {
    quote: "No retainer, no monthly fee — I only pay when they put me in front of a real opportunity. That\u2019s how confident they are. And honestly, they deliver. Best lead source I\u2019ve ever used.",
    name: 'David K.',
    role: 'Roofing & Siding Contractor',
    type: 'pro',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 6000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[current]

  return (
    <section className="py-20 sm:py-28 bg-navy-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-sm font-600 mb-4">
            Real Results
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-700 text-navy-900">
            What People Are Saying
          </h2>
        </motion.div>

        <div className="relative bg-white rounded-2xl shadow-lg border border-navy-100 p-6 sm:p-10 md:p-12 min-h-[280px] flex flex-col justify-center">
          <Quote className="w-10 h-10 text-accent-200 mb-4" />

          <p className="text-base sm:text-xl md:text-2xl text-navy-700 leading-relaxed mb-6 font-500 italic">
            &ldquo;{t.quote}&rdquo;
          </p>

          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-700 text-sm ${
              t.type === 'pro' ? 'bg-navy-700' : 'bg-accent-500'
            }`}>
              {t.name[0]}
            </div>
            <div>
              <p className="font-600 text-navy-800">{t.name}</p>
              <p className="text-sm text-navy-400">{t.role}</p>
            </div>
            <span className={`ml-auto px-3 py-1 rounded-full text-xs font-600 uppercase tracking-wider ${
              t.type === 'pro'
                ? 'bg-navy-100 text-navy-600'
                : 'bg-accent-100 text-accent-700'
            }`}>
              {t.type === 'pro' ? 'Pro' : 'Homeowner'}
            </span>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-accent-500 w-8' : 'bg-navy-200 hover:bg-navy-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
