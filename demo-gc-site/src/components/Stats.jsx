import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 50, suffix: '+', label: 'Project Types Covered' },
  { value: 100, suffix: '%', label: 'Free for Homeowners' },
  { value: 3, suffix: 'x', label: 'Confirmed Appointments' },
  { value: 4.9, suffix: '★', label: 'Average Pro Rating', decimals: 1 },
]

function Counter({ target, suffix, inView, decimals = 0 }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const steps = duration / 20
    const inc = target / steps
    const timer = setInterval(() => {
      start += inc
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(decimals ? parseFloat(start.toFixed(decimals)) : Math.floor(start))
    }, 20)
    return () => clearInterval(timer)
  }, [inView, target, decimals])
  return <span className="tabular-nums">{decimals ? count.toFixed(decimals) : count}{suffix}</span>
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-16 sm:py-20 bg-accent-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '24px 24px',
      }} />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map(({ value, suffix, label, decimals }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <p className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-800 mb-2">
                <Counter target={value} suffix={suffix} inView={inView} decimals={decimals} />
              </p>
              <p className="text-white/70 text-sm font-500 uppercase tracking-wider">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
