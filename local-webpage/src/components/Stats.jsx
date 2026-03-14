import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 150, suffix: '+', label: 'Websites Launched' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 3, suffix: 'x', label: 'More Leads on Average' },
  { value: 92, suffix: '%', label: 'Clients on Google Page 1' },
]

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const inc = target / 100
        const timer = setInterval(() => {
          start += inc
          if (start >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(start))
        }, 20)
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map(({ value, suffix, label }) => (
            <div
              key={label}
              className="relative group text-center p-4 sm:p-8 rounded-2xl bg-white/50 border border-eggshell-300/50 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-500"
            >
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-800 text-gradient mb-2">
                <AnimatedCounter target={value} suffix={suffix} />
              </div>
              <p className="text-sm text-blue-900/50 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
