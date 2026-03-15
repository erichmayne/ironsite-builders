import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, CalendarCheck, DollarSign, ShieldCheck, TrendingUp, Users } from 'lucide-react'

const benefits = [
  {
    icon: CalendarCheck,
    title: 'Triple-Confirmed Appointments',
    desc: 'Every appointment is scheduled, confirmed, and verified — you meet with real decision-makers who want your service.',
  },
  {
    icon: Target,
    title: 'Qualified & High-Interest',
    desc: 'No tire-kickers. Property owners know who you are, want what you offer, and have time for your meeting.',
  },
  {
    icon: DollarSign,
    title: 'Pay Only for Wins',
    desc: 'No retainer. No monthly fee. No commitment. You only pay when we deliver a real, qualified appointment.',
  },
  {
    icon: ShieldCheck,
    title: 'Limited Pros Per Area',
    desc: 'We cap the number of pros per project type and service area. Less competition, higher conversion.',
  },
  {
    icon: TrendingUp,
    title: 'Early-Partner Visibility Boost',
    desc: 'First pros in line get priority placement, initial-win discounts, and a free profile on FindLocalPros.',
  },
  {
    icon: Users,
    title: 'Optional Growth Services',
    desc: 'Review gathering, remarketing to past customers, and brand reputation enhancement — all available as add-ons.',
  },
]

export default function ForPros() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="for-pros" className="py-20 sm:py-28 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-500/20 text-accent-400 text-sm font-600 mb-4">
            For Contractors & Pros
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 text-white mb-4">
            Don&apos;t Buy Leads.
            <br />
            <span className="text-accent-400">Buy Wins.</span>
          </h2>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Stop paying for leads that go nowhere. BLP schedules qualified, high-interest
            appointments with verified property owners who are ready to move forward.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-navy-800/50 backdrop-blur-sm border border-navy-700/50 rounded-xl p-6 hover:border-accent-500/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent-500/15 flex items-center justify-center mb-4 group-hover:bg-accent-500/25 transition-colors">
                <Icon className="w-5 h-5 text-accent-400" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-lg font-700 text-white mb-2">{title}</h3>
              <p className="text-navy-300 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white font-600 rounded-full text-base hover:bg-accent-600 transition-all shadow-xl shadow-accent-500/30"
          >
            Become a Pro — Let&apos;s Talk
          </a>
          <p className="text-navy-400 text-sm mt-4">
            Call now: <a href="tel:2407802608" className="text-accent-400 font-600 hover:underline">(240) 780-2608</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
