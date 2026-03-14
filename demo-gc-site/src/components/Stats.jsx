import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 20, suffix: '+', label: 'Years in Business' },
  { value: 100, suffix: '%', label: 'Licensed & Insured' },
  { value: 4.9, suffix: '★', label: 'Google Rating', decimals: 1 },
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
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=1920&h=600&fit=crop&q=80"
          alt="Construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-950/85" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
          {stats.map(({ value, suffix, label, decimals }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <p className="font-display text-3xl sm:text-4xl md:text-5xl text-gold-500 font-700 mb-2">
                <Counter target={value} suffix={suffix} inView={inView} decimals={decimals} />
              </p>
              <p className="text-white/50 text-sm uppercase tracking-wider">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
