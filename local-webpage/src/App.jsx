import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TradeMarquee from './components/TradeMarquee'

const BrandMessage = lazy(() => import('./components/BrandMessage'))
const Stats = lazy(() => import('./components/Stats'))
const Services = lazy(() => import('./components/Services'))
const SEOCallout = lazy(() => import('./components/SEOCallout'))
const Process = lazy(() => import('./components/Process'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Pricing = lazy(() => import('./components/Pricing'))
const CTA = lazy(() => import('./components/CTA'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <TradeMarquee />
      <Suspense fallback={null}>
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
      </Suspense>
    </div>
  )
}
