import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TradeMarquee from './components/TradeMarquee'
import BrandMessage from './components/BrandMessage'
import Stats from './components/Stats'
import Services from './components/Services'
import SEOCallout from './components/SEOCallout'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <TradeMarquee />
      <BrandMessage />
      <Stats />
      <Services />
      <SEOCallout />
      <Process />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
