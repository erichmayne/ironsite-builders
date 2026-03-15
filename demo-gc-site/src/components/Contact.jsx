import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, Loader2 } from 'lucide-react'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/erich.b.mayne@gmail.com'

const inputClass = 'w-full px-4 py-3.5 rounded-xl border border-navy-200 text-navy-800 placeholder:text-navy-300 focus:border-accent-400 focus:ring-2 focus:ring-accent-100 outline-none transition-all'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [tab, setTab] = useState('homeowner')
  const [status, setStatus] = useState('idle')
  const [successMsg, setSuccessMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    if (tab === 'homeowner') {
      data.set('_subject', 'looking for a pro')
    } else {
      data.set('_subject', 'become a pro app.')
    }

    data.set('_template', 'table')
    data.set('Form Type', tab === 'homeowner' ? 'Homeowner - Find a Pro' : 'Contractor - Become a Pro')

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        setSuccessMsg(
          tab === 'homeowner'
            ? 'We have your request and will reach out with the best fit!'
            : 'Your submission has been sent!'
        )
        form.reset()
        setTimeout(() => { setStatus('idle'); setSuccessMsg('') }, 6000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
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
            Get Started
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-700 text-navy-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-navy-500 text-lg max-w-2xl mx-auto">
            Whether you need a pro for your home or you <em>are</em> the pro — we&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 sm:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="flex gap-2 mb-6 bg-navy-50 p-1 rounded-full w-fit">
              <button
                onClick={() => { setTab('homeowner'); setStatus('idle'); setSuccessMsg('') }}
                className={`px-5 py-2.5 rounded-full text-sm font-600 transition-all ${
                  tab === 'homeowner'
                    ? 'bg-accent-500 text-white shadow-md'
                    : 'text-navy-500 hover:text-navy-700'
                }`}
              >
                I Need a Pro
              </button>
              <button
                onClick={() => { setTab('pro'); setStatus('idle'); setSuccessMsg('') }}
                className={`px-5 py-2.5 rounded-full text-sm font-600 transition-all ${
                  tab === 'pro'
                    ? 'bg-navy-800 text-white shadow-md'
                    : 'text-navy-500 hover:text-navy-700'
                }`}
              >
                I Am a Pro
              </button>
            </div>

            {status === 'success' && (
              <div className="mb-6 flex items-center gap-3 px-5 py-4 rounded-xl bg-green-50 border border-green-200 text-green-800 animate-fade-in-up">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="font-600">{successMsg}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 px-5 py-4 rounded-xl bg-red-50 border border-red-200 text-red-800 animate-fade-in-up">
                <p className="font-600">Something went wrong. Please call us at (240) 780-2608.</p>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Full Name" required className={inputClass} />
                <input type="tel" name="phone" placeholder="Phone Number" required className={inputClass} />
              </div>
              <input type="email" name="email" placeholder="Email Address" required className={inputClass} />

              {tab === 'homeowner' ? (
                <>
                  <select name="project_type" required className={`${inputClass} appearance-none bg-white`}>
                    <option value="">What type of project?</option>
                    <option>Kitchen & Bath</option>
                    <option>Roofing & Gutters</option>
                    <option>Decks & Patios</option>
                    <option>Painting</option>
                    <option>Landscaping & Hardscape</option>
                    <option>Flooring</option>
                    <option>Windows & Doors</option>
                    <option>Structural & Repairs</option>
                    <option>Handyman</option>
                    <option>Other</option>
                  </select>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </>
              ) : (
                <>
                  <input type="text" name="trade" placeholder="Your Trade / Specialty" required className={inputClass} />
                  <input type="text" name="service_area" placeholder="Service Area (City / Zip)" required className={inputClass} />
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your business..."
                    className={`${inputClass} resize-none`}
                  />
                </>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`group w-full flex items-center justify-center gap-2 py-4 rounded-full text-white font-600 text-base transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed ${
                  tab === 'homeowner'
                    ? 'bg-accent-500 hover:bg-accent-600 shadow-accent-500/25'
                    : 'bg-navy-800 hover:bg-navy-900 shadow-navy-800/25'
                }`}
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    {tab === 'homeowner' ? 'Find My Pro' : 'Apply to Join'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
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
              <h3 className="font-display text-lg font-700 text-navy-800 mb-5">Get in Touch</h3>
              <div className="space-y-5">
                <a href="tel:2407802608" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-sm text-navy-400 mb-0.5">Call Us</p>
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
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-sm text-navy-400 mb-0.5">Serving</p>
                    <p className="font-600 text-navy-800">Your Local Area</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-900 rounded-2xl p-6 sm:p-8 text-center">
              <p className="text-accent-400 font-display font-700 text-lg mb-2">Are You a Pro?</p>
              <p className="text-navy-300 text-sm mb-4 leading-relaxed">
                Stop buying leads. Start buying wins. Pay only when we deliver a qualified appointment.
              </p>
              <a href="tel:2407802608" className="inline-flex items-center gap-2 text-white font-600 hover:text-accent-400 transition-colors">
                <Phone className="w-4 h-4" />
                Call Now: (240) 780-2608
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
