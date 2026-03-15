import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  { title: 'Kitchens & Baths', image: '/img/kitchen.jpg', desc: 'Full remodels, cabinetry, countertops, tile, and fixtures' },
  { title: 'Roofing & Gutters', image: '/img/roofing.jpg', desc: 'Replacement, repair, inspection, and gutter systems' },
  { title: 'Decks & Patios', image: '/img/deck.jpg', desc: 'New builds, repairs, staining, and outdoor living spaces' },
  { title: 'Painting', image: '/img/painting.jpg', desc: 'Interior and exterior, prep work, staining, and finishing' },
  { title: 'Landscaping', image: '/img/landscape.jpg', desc: 'Design, hardscape, irrigation, fencing, and maintenance' },
  { title: 'Flooring', image: '/img/flooring.jpg', desc: 'Hardwood, tile, LVP, carpet, and refinishing' },
  { title: 'Windows & Doors', image: '/img/windows.jpg', desc: 'Replacement, installation, energy-efficient upgrades' },
  { title: 'Handyman & Repairs', image: '/img/handyman.jpg', desc: 'Small fixes, drywall, plumbing, electrical, and more' },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-navy-100 text-navy-700 text-sm font-600 mb-4">
            Every Project Type
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-700 text-navy-900 mb-4">
            Whatever Your Home Needs
          </h2>
          <p className="text-navy-500 text-lg max-w-2xl mx-auto">
            From quick repairs to full renovations — we have vetted pros ready for every type of home improvement project.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {categories.map(({ title, image, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent" />
              <div className="absolute inset-0 bg-accent-500/0 group-hover:bg-accent-500/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h3 className="font-display text-lg font-700 text-white mb-1 group-hover:text-accent-300 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-white/60 leading-snug">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
