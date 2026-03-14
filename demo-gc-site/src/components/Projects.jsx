import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'

const projects = [
  {
    title: 'Wallingford Craftsman Renovation',
    category: 'Residential',
    image: '/img/proj-meridian.jpg',
    desc: 'Full interior renovation of a 1920s craftsman. Opened floor plan, new kitchen, and restored original millwork throughout.',
  },
  {
    title: 'Capitol Hill Mixed-Use',
    category: 'Commercial',
    image: '/img/proj-cascade.jpg',
    desc: 'Ground-up 4-story mixed-use building. Retail on the ground floor with 12 residential units above.',
  },
  {
    title: 'Magnolia Custom Home',
    category: 'New Build',
    image: '/img/proj-harbor.jpg',
    desc: '3,800 sq ft custom home with Puget Sound views. Engineered for the hillside lot with a 3-car garage below grade.',
  },
  {
    title: 'Fremont Restaurant Build-Out',
    category: 'Commercial',
    image: '/img/proj-terrace.jpg',
    desc: 'Complete restaurant build-out in a historic Fremont building. Commercial kitchen, bar, and 80-seat dining room.',
  },
  {
    title: 'Ballard ADU + Deck',
    category: 'Residential',
    image: '/img/proj-bridge.jpg',
    desc: 'Detached 650 sq ft ADU with a connected deck and outdoor kitchen. Permitted and built in 4 months.',
  },
  {
    title: 'Bellevue Office Remodel',
    category: 'Commercial',
    image: '/img/proj-pinnacle.jpg',
    desc: '8,000 sq ft office space modernization. Open floor plan, conference rooms, and break area with exposed concrete.',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="h-[3px] w-16 bg-gold-500 mx-auto mb-6" />
          <p className="text-gold-600 uppercase tracking-[0.2em] text-sm font-600 mb-3">Our Portfolio</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-700">Featured Projects</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.button
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onClick={() => setSelected(project)}
              className="group text-left relative overflow-hidden aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
              <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/30 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <span className="text-gold-400 text-xs uppercase tracking-[0.2em] font-600">{project.category}</span>
                <h3 className="font-display text-xl text-white font-600 mt-1 group-hover:text-gold-300 transition-colors">{project.title}</h3>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <ArrowRight className="w-4 h-4 text-white -rotate-45" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/90 flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="bg-white max-w-3xl w-full overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80 sm:h-96">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-stone-950/60 flex items-center justify-center text-white hover:bg-stone-950 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-5 sm:p-8">
                <span className="text-gold-600 text-xs uppercase tracking-[0.2em] font-600">{selected.category}</span>
                <h3 className="font-display text-lg sm:text-2xl font-700 mt-2 mb-4">{selected.title}</h3>
                <p className="text-stone-600 leading-relaxed">{selected.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
