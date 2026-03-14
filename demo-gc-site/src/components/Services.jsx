const services = [
  {
    title: 'Kitchen & Bath Remodels',
    desc: 'Complete gut renovations to cosmetic refreshes. Custom cabinetry, tile, countertops, and fixtures — designed and installed to last.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Home Additions',
    desc: 'Need more space? We build room additions, second stories, ADUs, and garage conversions that match your existing home seamlessly.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Commercial Build-Outs',
    desc: 'Tenant improvements, retail spaces, restaurants, and offices. We work within your timeline and budget to get your doors open.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'New Construction',
    desc: 'Custom homes built from the ground up. We manage every phase — from permits and foundation to finishing touches and final walk-through.',
    image: 'https://images.unsplash.com/photo-1513467535987-db81bc0d0222?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Exterior & Siding',
    desc: 'Siding replacement, window installations, decks, patios, and exterior repairs. Built to handle Pacific Northwest weather.',
    image: 'https://images.unsplash.com/photo-1597079910443-49a3f4b3e28b?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Structural Repairs',
    desc: 'Foundation work, load-bearing wall modifications, seismic retrofitting, and rot repair. We fix what others are afraid to touch.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&q=80',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="h-[3px] w-16 bg-gold-500 mx-auto mb-6" />
          <p className="text-gold-600 uppercase tracking-[0.2em] text-sm font-600 mb-3">What We Do</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-700">Our Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {services.map(({ title, desc, image }) => (
            <div
              key={title}
              className="group bg-white overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors duration-500" />
              </div>
              <div className="p-5 sm:p-7">
                <h3 className="font-display text-xl font-600 mb-3 group-hover:text-gold-600 transition-colors">{title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
