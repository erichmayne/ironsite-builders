import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ClipboardList, Users, ThumbsUp } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Tell Us About Your Project',
    desc: 'Kitchen remodel? New roof? Deck repair? Let us know what you need — any size project, interior or exterior.',
  },
  {
    icon: Users,
    step: '02',
    title: 'We Match You With a Top Pro',
    desc: 'We do the legwork. We find, vet, and match you with the best local professional for your specific project.',
  },
  {
    icon: ThumbsUp,
    step: '03',
    title: 'Get It Done Right',
    desc: 'We schedule and triple-confirm your appointment, follow up with a quality check, and stay with you through the finish line.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-sm font-600 mb-4">
            Simple & Free
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-700 text-navy-900 mb-4">
            How It Works for <span className="text-accent-500">Homeowners</span>
          </h2>
          <p className="text-navy-500 text-lg max-w-2xl mx-auto">
            Finding the right pro shouldn&apos;t be a project in itself. We handle the search so you don&apos;t have to.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-navy-100 hover:shadow-lg hover:border-accent-200 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-accent-500 flex items-center justify-center shadow-lg shadow-accent-500/20 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <span className="text-4xl font-display font-800 text-navy-100">{step}</span>
              </div>
              <h3 className="font-display text-xl font-700 text-navy-800 mb-3">{title}</h3>
              <p className="text-navy-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
