import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Projects = lazy(() => import('./components/Projects'))
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
        <About />
        <Services />
        <Projects />
        <Stats />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </>
  )
}
