import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, MapPin, TrendingUp, CheckCircle2 } from 'lucide-react'

const seoFeatures = [
  'Google Business Profile optimization',
  'Schema markup for local trades',
  'City + service page targeting',
  'Mobile speed score 95+',
  'Automatic sitemap & indexing',
  'Meta titles & descriptions for every page',
]

export default function SEOCallout() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-eggshell-100 via-blue-50/40 to-eggshell-100" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, type: 'spring' }}
            className="relative"
          >
            {/* Fake search result card */}
            <div className="rounded-2xl bg-white shadow-2xl shadow-blue-900/8 border border-eggshell-300/60 overflow-hidden">
              {/* Search bar */}
              <div className="px-5 py-4 border-b border-eggshell-200 flex items-center gap-3">
                <div className="flex items-center gap-2 flex-1 px-4 py-2.5 rounded-full bg-eggshell-100 border border-eggshell-300/50">
                  <Search className="w-4 h-4 text-blue-900/30" />
                  <span className="text-sm text-blue-900/60 font-medium">plumber near me seattle</span>
                </div>
              </div>

              {/* Results */}
              <div className="p-5 space-y-4">
                {/* #1 result - highlighted */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="relative p-4 rounded-xl bg-blue-50/80 border-2 border-blue-300/50"
                >
                  <div className="absolute -top-2.5 -left-2.5 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold shadow-md shadow-blue-600/30">
                    #1 RESULT
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-blue-800">Your Business Name</p>
                      <p className="text-xs text-blue-600/70">yourbusiness.com</p>
                      <p className="text-xs text-blue-900/40 mt-1 leading-relaxed">
                        Licensed plumber serving Seattle &amp; surrounding areas. 24/7 emergency service. Free estimates. Call now...
                      </p>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-500 text-xs">&#9733;</span>
                        ))}
                        <span className="text-[10px] text-blue-900/40 ml-1">4.9 (127 reviews)</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Greyed out competitors */}
                {['CompetitorPlumbing.com', 'OtherGuyPlumbing.net'].map((name, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.15 }}
                    className="p-3 rounded-lg opacity-40"
                  >
                    <div className="h-2.5 bg-eggshell-300 rounded-full w-3/5 mb-2" />
                    <div className="h-2 bg-eggshell-200 rounded-full w-2/5 mb-2" />
                    <div className="h-2 bg-eggshell-200 rounded-full w-4/5" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 1, type: 'spring' }}
              className="absolute -bottom-6 -right-4 sm:right-8 bg-white rounded-xl shadow-xl shadow-blue-900/10 border border-eggshell-300/60 px-5 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-lg font-bold text-blue-900">+312%</p>
                  <p className="text-[11px] text-blue-900/40">Organic traffic increase</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/50 text-blue-600 text-sm font-semibold mb-6">
              <Search className="w-3.5 h-3.5" />
              SEO That Actually Works
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-800 tracking-tight mb-6 leading-tight">
              Show Up <span className="text-gradient">First</span> When
              <br />Customers Search
            </h2>

            <p className="text-lg text-blue-900/50 leading-relaxed mb-8">
              Every site we build is engineered from the ground up to rank in local search.
              Not as an add-on. Not as an afterthought.{' '}
              <span className="text-blue-900/80 font-semibold">SEO is baked into the foundation</span> — 
              from the code structure to the content strategy to the technical performance.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {seoFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" strokeWidth={2} />
                  <span className="text-sm text-blue-900/60">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="p-5 rounded-xl bg-blue-950 text-white">
              <p className="text-sm font-semibold text-blue-300 mb-1">The reality:</p>
              <p className="text-sm text-blue-100/70 leading-relaxed">
                97% of people find local services through Google. If your business
                doesn&apos;t show up on the first page, you don&apos;t exist to them.
                We make sure you exist.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
