import Navbar from '../components/Navbar'
import HeroFLP from '../components/HeroFLP'
import HowItWorks from '../components/HowItWorks'
import Services from '../components/Services'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import ContactFLP from '../components/ContactFLP'
import Footer from '../components/Footer'

export default function HomeownerPage() {
  return (
    <>
      <Navbar variant="flp" />
      <HeroFLP />
      <HowItWorks />
      <Services />
      <Stats variant="flp" />
      <Testimonials variant="flp" />
      <ContactFLP />
      <Footer variant="flp" />
    </>
  )
}
