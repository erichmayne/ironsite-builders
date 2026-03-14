import { Shield, Award, Clock, Users } from 'lucide-react'

const values = [
  { icon: Shield, label: 'Licensed, Bonded & Insured' },
  { icon: Award, label: '20+ Years Experience' },
  { icon: Clock, label: 'On-Time Delivery' },
  { icon: Users, label: 'Family-Owned & Operated' },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&h=500&fit=crop&q=80"
                alt="Construction team at work"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-[3px] border-gold-500 hidden lg:block" />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 sm:-bottom-8 left-4 sm:left-8 bg-stone-950 px-5 sm:px-8 py-4 sm:py-6 shadow-2xl">
              <p className="font-display text-3xl sm:text-4xl text-gold-500 font-700">20+</p>
              <p className="text-white/60 text-sm uppercase tracking-wider mt-1">Years in Business</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="h-[3px] w-16 bg-gold-500 mb-6" />
            <p className="text-gold-600 uppercase tracking-[0.2em] text-sm font-600 mb-3">About Summit</p>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-700 leading-tight mb-6">
              Built on Trust,
              <br />Driven by Quality
            </h2>

            <p className="text-stone-600 leading-relaxed mb-6">
              Summit General Contractors was founded on a simple belief: honest work and
              quality craftsmanship speak louder than any advertisement. For over two
              decades, we&apos;ve been building homes, renovating businesses, and earning the
              trust of families across the Seattle metro area.
            </p>

            <p className="text-stone-600 leading-relaxed mb-10">
              From kitchen remodels to ground-up commercial builds, we bring the same
              attention to detail and respect for your property to every project —
              regardless of size. We show up on time, communicate clearly, and stand
              behind every nail we drive.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {values.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-stone-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gold-600" strokeWidth={1.8} />
                  </div>
                  <span className="text-sm text-stone-700 font-500">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
