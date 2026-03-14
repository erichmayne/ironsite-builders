import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    title: 'Kitchen & Bath Remodels',
    desc: 'Complete gut renovations to cosmetic refreshes. Custom cabinetry, tile, countertops, and fixtures — designed and installed to last.',
    image: '/img/svc-renovation.jpg',
  },
  {
    title: 'Home Additions',
    desc: 'Need more space? We build room additions, second stories, ADUs, and garage conversions that match your existing home seamlessly.',
    image: '/img/svc-commercial.jpg',
  },
  {
    title: 'Commercial Build-Outs',
    desc: 'Tenant improvements, retail spaces, restaurants, and offices. We work within your timeline and budget to get your doors open.',
    image: '/img/svc-development.jpg',
  },
  {
    title: 'New Construction',
    desc: 'Custom homes built from the ground up. We manage every phase — from permits and foundation to finishing touches and final walk-through.',
    image: '/img/svc-interior.jpg',
  },
  {
    title: 'Exterior & Siding',
    desc: 'Siding replacement, window installations, decks, patios, and exterior repairs. Built to handle Pacific Northwest weather.',
    image: '/img/svc-restoration.jpg',
  },
  {
    title: 'Structural Repairs',
    desc: 'Foundation work, load-bearing wall modifications, seismic retrofitting, and rot repair. We fix what others are afraid to touch.',
    image: '/img/svc-sustainability.jpg',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="services" className="py-24 sm:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="h-[3px] w-16 bg-gold-500 mx-auto mb-6" />
          <p className="text-gold-600 uppercase tracking-[0.2em] text-sm font-600 mb-3">What We Do</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-700">Our Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {services.map(({ title, desc, image }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors duration-500" />
              </div>
              <div className="p-5 sm:p-7">
                <h3 className="font-display text-xl font-600 mb-3 group-hover:text-gold-600 transition-colors">{title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
