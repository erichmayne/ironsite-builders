import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Sparkles, Zap, Shield, ExternalLink } from 'lucide-react'

const wordReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const wordChild = {
  hidden: { y: 80, opacity: 0, rotateX: -40 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { type: 'spring', damping: 12, stiffness: 100 },
  },
}

const badges = [
  { icon: Zap, label: 'Fast Turnaround', accent: false },
  { icon: Shield, label: 'Mobile-First', accent: false },
  { icon: Sparkles, label: 'SEO Built Into Every Page', accent: true },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated background blobs */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-blue-200/30 blur-[120px] animate-float" />
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-blue-300/20 blur-[100px] animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-[150px]" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(30,58,95,1) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,95,1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <motion.div style={{ opacity }} className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Now Booking for Spring 2026
          </motion.div>

          {/* Headline with word reveal */}
          <motion.h1
            variants={wordReveal}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-800 leading-[0.95] tracking-tight mb-8"
            style={{ perspective: '600px' }}
          >
            {['Websites', 'That', 'Work'].map((word, i) => (
              <motion.span key={i} variants={wordChild} className="inline-block mr-[0.25em]">
                {word}
              </motion.span>
            ))}
            <br />
            {['As', 'Hard', 'As'].map((word, i) => (
              <motion.span key={i + 3} variants={wordChild} className="inline-block mr-[0.25em] text-blue-900/40">
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span variants={wordChild} className="inline-block text-gradient">
              You Do.
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="text-lg sm:text-xl text-blue-900/60 max-w-2xl leading-relaxed mb-10"
          >
            We build stunning, lightning-fast websites for plumbers, electricians, roofers,
            and every trade in between. Your skills deserve an online presence that
            actually brings in customers.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              See Pricing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://demo.ironsite.builders"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-blue-800 bg-white/60 border border-blue-200/50 rounded-full hover:bg-white hover:border-blue-300/60 shadow-sm hover:shadow-md transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              View Website Demo
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            {badges.map(({ icon: Icon, label, accent }) => (
              <div key={label} className={`flex items-center gap-2 text-sm ${
                accent
                  ? 'text-blue-700 font-semibold px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60'
                  : 'text-blue-900/50'
              }`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  accent
                    ? 'bg-blue-600 shadow-md shadow-blue-600/25'
                    : 'bg-blue-50 border border-blue-100'
                }`}>
                  <Icon className={`w-4 h-4 ${accent ? 'text-white' : 'text-blue-600'}`} />
                </div>
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating mockup card */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: 3 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 60 }}
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[5%]"
        >
          <div className="animate-float relative w-[360px]">
            <div className="rounded-2xl bg-white shadow-2xl shadow-blue-900/10 border border-eggshell-300/60 overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-eggshell-200/50 border-b border-eggshell-300/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                </div>
                <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-eggshell-100 text-xs text-blue-900/30 font-mono">
                  joes-plumbing.com
                </div>
              </div>
              {/* Mock website content */}
              <div className="p-5">
                <div className="w-full h-36 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 flex items-center justify-center">
                  <span className="text-white/90 font-display font-700 text-lg">Joe's Plumbing</span>
                </div>
                <div className="space-y-2.5">
                  <div className="h-3 bg-eggshell-200 rounded-full w-full" />
                  <div className="h-3 bg-eggshell-200 rounded-full w-4/5" />
                  <div className="h-3 bg-eggshell-200 rounded-full w-3/5" />
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="h-9 flex-1 rounded-lg bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">Call Now</span>
                  </div>
                  <div className="h-9 flex-1 rounded-lg bg-eggshell-200 flex items-center justify-center">
                    <span className="text-blue-900/40 text-xs font-semibold">Book Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.8, type: 'spring' }}
              className="absolute -left-16 top-24 bg-white rounded-xl shadow-xl shadow-blue-900/10 border border-eggshell-300/60 px-4 py-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-blue-900">New Lead!</p>
                <p className="text-[11px] text-blue-900/40">From Google Search</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
