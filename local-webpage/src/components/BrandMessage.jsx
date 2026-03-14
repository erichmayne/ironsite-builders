import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function BrandMessage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-eggshell-100 via-blue-50/30 to-eggshell-100" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-100/20 blur-[120px]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-600/20"
        >
          <span className="font-display text-3xl text-white leading-none mt-1">&ldquo;</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-800 tracking-tight leading-snug mb-6"
        >
          Your Work Speaks for Itself.
          <br />
          <span className="text-gradient">Your Brand Should Too.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-blue-900/50 leading-relaxed mb-4"
        >
          In 2026, the first thing someone does before calling you is Google you.
          No website? You look temporary. A bad website? You look careless.
          Fair or not, that&apos;s the reality.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg text-blue-900/50 leading-relaxed mb-6"
        >
          <span className="text-blue-900/80 font-semibold">75% of people judge a business&apos;s credibility by its website.</span>{' '}
          The tradesmen who are booked out 6 weeks aren&apos;t necessarily better at the work —
          they&apos;re just easier to find and easier to trust at first glance.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="font-display text-lg sm:text-xl md:text-2xl font-700 text-blue-900/80 italic"
        >
          Your reputation took years to build.
          <br />
          Your online presence should reflect that.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: 80 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="h-[3px] bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-10 rounded-full"
        />
      </div>
    </section>
  )
}
