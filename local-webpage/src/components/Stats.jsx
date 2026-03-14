import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 150, suffix: '+', label: 'Websites Launched' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 3, suffix: 'x', label: 'More Leads on Average' },
  { value: 92, suffix: '%', label: 'Clients on Google Page 1' },
]

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const stepTime = 20
    const steps = duration / stepTime
    const increment = target / steps
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {stats.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group text-center p-4 sm:p-8 rounded-2xl bg-white/50 border border-eggshell-300/50 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-500"
            >
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-800 text-gradient mb-2">
                <AnimatedCounter target={value} suffix={suffix} inView={inView} />
              </div>
              <p className="text-sm text-blue-900/50 font-medium">{label}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
