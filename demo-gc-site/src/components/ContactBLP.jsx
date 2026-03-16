import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, ArrowRight, CheckCircle, Loader2 } from 'lucide-react'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/erich.b.mayne@gmail.com'
const inputClass = 'w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-800 placeholder:text-navy-300 focus:border-accent-400 focus:ring-2 focus:ring-accent-100 outline-none transition-all'

export default function ContactBLP() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData.entries())
    payload._subject = 'become a pro app.'
    payload._template = 'table'
    payload._captcha = 'false'
    payload['Form Type'] = 'Contractor - Become a Pro'

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => null)
      if (res.ok || (json && json.success)) {
        setStatus('success')
        e.target.reset()
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch (err) {
      console.error('Form error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-sm font-600 mb-4">
            Join the Network
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-700 text-navy-900 mb-4">
            Ready to Get Real Appointments?
          </h2>
          <p className="text-navy-500 text-lg max-w-2xl mx-auto">
            Tell us about your business. If you&apos;re a quality pro who delivers great work, let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 sm:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-3"
          >
            {status === 'success' && (
              <div className="mb-6 flex items-center gap-3 px-5 py-4 rounded-xl bg-green-50 border border-green-200 text-green-800 animate-fade-in-up">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="font-600">Your submission has been sent!</p>
              </div>
            )}
            {status === 'error' && (
              <div className="mb-6 px-5 py-4 rounded-xl bg-red-50 border border-red-200 text-red-800 animate-fade-in-up">
                <p className="font-600">Something went wrong. Please call us at (240) 780-2608.</p>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Full Name" required className={inputClass} />
                <input type="tel" name="phone" placeholder="Phone Number" required className={inputClass} />
              </div>
              <input type="email" name="email" placeholder="Email Address" required className={inputClass} />
              <input type="text" name="trade" placeholder="Your Trade / Specialty" required className={inputClass} />
              <input type="text" name="service_area" placeholder="Service Area (City / Zip)" required className={inputClass} />
              <textarea name="message" rows={3} placeholder="Tell us about your business and experience..." className={`${inputClass} resize-none`} />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group w-full flex items-center justify-center gap-2 py-4 rounded-full text-white font-600 text-base transition-all shadow-lg disabled:opacity-70 bg-navy-800 hover:bg-navy-900 shadow-navy-800/25"
              >
                {status === 'sending' ? (
                  <><Loader2 className="w-4 h-4 animate-spin" />Sending...</>
                ) : (
                  <>Apply to Join<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-navy-50 rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-lg font-700 text-navy-800 mb-5">Talk to Us Directly</h3>
              <div className="space-y-5">
                <a href="tel:2407802608" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-sm text-navy-400 mb-0.5">Call Now</p>
                    <p className="font-600 text-navy-800 group-hover:text-accent-600 transition-colors">(240) 780-2608</p>
                  </div>
                </a>
                <a href="mailto:info@bestlocalpro.us" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-sm text-navy-400 mb-0.5">Email</p>
                    <p className="font-600 text-navy-800 group-hover:text-accent-600 transition-colors">info@bestlocalpro.us</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-navy-900 rounded-2xl p-6 sm:p-8">
              <p className="text-accent-400 font-display font-700 text-lg mb-2">Our Standards</p>
              <p className="text-navy-300 text-sm leading-relaxed mb-4">
                We only work with high-quality pros who maintain strong workmanship, customer service, and high satisfaction scores.
              </p>
              <ul className="space-y-2 text-sm text-navy-300">
                <li className="flex items-center gap-2"><span className="text-accent-400">✓</span> Licensed & Insured</li>
                <li className="flex items-center gap-2"><span className="text-accent-400">✓</span> Proven Track Record</li>
                <li className="flex items-center gap-2"><span className="text-accent-400">✓</span> Professional Customer Service</li>
              </ul>
            </div>

            <Link to="/" className="block text-center text-sm text-navy-400 hover:text-accent-500 transition-colors py-2">
              Need a pro for your home project? →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
