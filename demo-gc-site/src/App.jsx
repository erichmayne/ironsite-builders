import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const HowItWorks = lazy(() => import('./components/HowItWorks'))
const Services = lazy(() => import('./components/Services'))
const ForPros = lazy(() => import('./components/ForPros'))
const Stats = lazy(() => import('./components/Stats'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <HowItWorks />
        <Services />
        <ForPros />
        <Stats />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </>
  )
}
