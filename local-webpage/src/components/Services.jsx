import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Smartphone, Search, CalendarCheck, Star, BarChart3, MessageSquare, Camera } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Custom Websites',
    desc: 'Professionally designed sites tailored to your trade. No templates, no cookie-cutter garbage.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: '70% of your customers search on their phone. Your site will look flawless on every screen.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Search,
    title: 'Local SEO Domination',
    desc: 'Every page is engineered to rank. Schema markup, speed optimization, local keywords — SEO is in the DNA, not bolted on after.',
    color: 'from-blue-600 to-blue-800',
    featured: true,
  },
  {
    icon: CalendarCheck,
    title: 'Online Booking',
    desc: 'Let customers book appointments directly from your site. No more phone tag.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Star,
    title: 'Review Integration',
    desc: 'Showcase your Google reviews front and center. Social proof that converts visitors into calls.',
    color: 'from-blue-400 to-blue-700',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'See exactly how many people visit, call, and book — in plain English, not tech jargon.',
    color: 'from-blue-500 to-blue-800',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat & Forms',
    desc: "Capture leads 24/7 even when you're on the job. Never miss an opportunity.",
    color: 'from-blue-600 to-indigo-700',
  },
  {
    icon: Camera,
    title: 'Photo & Video',
    desc: "We'll make your work look as good online as it does in person. Before and after galleries that sell.",
    color: 'from-blue-400 to-blue-600',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/50 text-blue-600 text-sm font-semibold mb-4">
            What We Build
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-800 tracking-tight mb-4">
            Everything Your Trade <span className="text-gradient">Needs Online</span>
          </h2>
          <p className="text-lg text-blue-900/50 max-w-2xl mx-auto">
            From the first Google search to the booked appointment — we build the entire digital pipeline that turns strangers into paying customers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc, color, featured }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative"
              style={{ perspective: '800px' }}
            >
              <div className={`relative h-full p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1 ${
                featured
                  ? 'bg-gradient-to-br from-blue-700 to-blue-900 text-white shadow-xl shadow-blue-700/20 border border-blue-600/30 hover:shadow-2xl hover:shadow-blue-700/30 ring-1 ring-blue-500/20'
                  : 'bg-white/60 border border-eggshell-300/50 hover:bg-white hover:border-blue-200/50 hover:shadow-xl hover:shadow-blue-900/5'
              }`}>
                {featured && (
                  <span className="absolute -top-2.5 right-4 px-3 py-0.5 rounded-full bg-blue-400 text-white text-[10px] font-bold uppercase tracking-wider shadow-md shadow-blue-500/30">
                    Core Feature
                  </span>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                  featured
                    ? 'bg-white/15 group-hover:bg-white/25 shadow-lg shadow-blue-900/20'
                    : `bg-gradient-to-br ${color} shadow-lg shadow-blue-600/15 group-hover:scale-110 group-hover:shadow-blue-600/25`
                }`}>
                  <Icon className={`w-6 h-6 ${featured ? 'text-blue-200' : 'text-white'}`} strokeWidth={1.8} />
                </div>
                <h3 className={`font-display text-lg font-700 mb-2 transition-colors ${
                  featured ? 'text-white' : 'group-hover:text-blue-700'
                }`}>
                  {title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  featured ? 'text-blue-100/70' : 'text-blue-900/50'
                }`}>
                  {desc}
                </p>
                {!featured && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
