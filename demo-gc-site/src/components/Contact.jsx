import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="h-[3px] w-16 bg-gold-500 mb-6" />
            <p className="text-gold-600 uppercase tracking-[0.2em] text-sm font-600 mb-3">Get In Touch</p>
            <h2 className="font-display text-4xl sm:text-5xl font-700 leading-tight mb-6">
              Ready to Start
              <br />Your Project?
            </h2>
            <p className="text-stone-600 leading-relaxed mb-10">
              Whether you have a detailed plan or just an idea, we&apos;re here to help.
              Give us a call or fill out the form for a free, no-obligation estimate.
            </p>

            <div className="space-y-5 mb-10">
              <a href="tel:+12066604218" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-stone-950 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-600 transition-colors">
                  <Phone className="w-5 h-5 text-gold-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wider">Call Us Directly</p>
                  <p className="text-lg font-600">(206) 660-4218</p>
                </div>
              </a>
              <a href="mailto:info@summitgc.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-stone-950 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-600 transition-colors">
                  <Mail className="w-5 h-5 text-gold-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wider">Email</p>
                  <p className="text-lg font-600">info@summitgc.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stone-950 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wider">Service Area</p>
                  <p className="text-lg font-600">Greater Seattle Metro</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stone-950 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wider">Hours</p>
                  <p className="text-lg font-600">Mon – Fri, 7 AM – 6 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-stone-50 p-8 sm:p-10">
              <h3 className="font-display text-2xl font-700 mb-6">Request a Free Estimate</h3>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-green-600" />
                  </div>
                  <p className="font-display text-xl font-600 mb-2">Message Sent!</p>
                  <p className="text-stone-500">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-stone-500 uppercase tracking-wider font-600 mb-1.5 block">First Name</label>
                      <input type="text" required className="w-full px-4 py-3 bg-white border border-stone-200 text-stone-900 focus:border-gold-500 focus:ring-0 outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="text-xs text-stone-500 uppercase tracking-wider font-600 mb-1.5 block">Last Name</label>
                      <input type="text" required className="w-full px-4 py-3 bg-white border border-stone-200 text-stone-900 focus:border-gold-500 focus:ring-0 outline-none transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-stone-500 uppercase tracking-wider font-600 mb-1.5 block">Phone</label>
                    <input type="tel" required className="w-full px-4 py-3 bg-white border border-stone-200 text-stone-900 focus:border-gold-500 focus:ring-0 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs text-stone-500 uppercase tracking-wider font-600 mb-1.5 block">Email</label>
                    <input type="email" required className="w-full px-4 py-3 bg-white border border-stone-200 text-stone-900 focus:border-gold-500 focus:ring-0 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs text-stone-500 uppercase tracking-wider font-600 mb-1.5 block">Project Type</label>
                    <select required defaultValue="" className="w-full px-4 py-3 bg-white border border-stone-200 text-stone-900 focus:border-gold-500 focus:ring-0 outline-none transition-colors">
                      <option value="" disabled>Select a service</option>
                      <option>Kitchen & Bath Remodel</option>
                      <option>Home Addition</option>
                      <option>New Construction</option>
                      <option>Commercial Build-Out</option>
                      <option>Exterior & Siding</option>
                      <option>Structural Repair</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-stone-500 uppercase tracking-wider font-600 mb-1.5 block">Tell Us About Your Project</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-white border border-stone-200 text-stone-900 focus:border-gold-500 focus:ring-0 outline-none transition-colors resize-none" />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gold-500 text-white font-600 uppercase tracking-wider text-sm hover:bg-gold-600 transition-colors"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
