import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { UserCheck, CalendarCheck, Trophy } from 'lucide-react'

const steps = [
  {
    icon: UserCheck,
    step: '01',
    title: 'We Find the Homeowner',
    desc: 'Our FindLocalPros platform connects us with property owners actively looking for help with real projects. We qualify every lead before you hear about it.',
  },
  {
    icon: CalendarCheck,
    step: '02',
    title: 'We Triple-Confirm the Appointment',
    desc: 'We schedule, confirm, and re-confirm. You show up to meet a real decision-maker who knows who you are, wants what you offer, and has time for you.',
  },
  {
    icon: Trophy,
    step: '03',
    title: 'You Win the Job',
    desc: 'You just need to be the best pro to help with their solution. We handle the lead gen — you handle the craft. You only pay when we deliver a win.',
  },
]

export default function HowBLP() {
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
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-700 text-navy-900 mb-4">
            We Get You <span className="text-accent-500">In the Door</span>
          </h2>
          <p className="text-navy-500 text-lg max-w-2xl mx-auto">
            No chasing. No cold calls. No wasted time. We deliver qualified appointments — you deliver great work.
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
                <div className="w-14 h-14 rounded-xl bg-navy-800 flex items-center justify-center shadow-lg shadow-navy-800/20 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-accent-400" strokeWidth={1.8} />
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
