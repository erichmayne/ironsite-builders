import Navbar from '../components/Navbar'
import HeroBLP from '../components/HeroBLP'
import ForPros from '../components/ForPros'
import HowBLP from '../components/HowBLP'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import ContactBLP from '../components/ContactBLP'
import Footer from '../components/Footer'

export default function ProPage() {
  return (
    <>
      <Navbar variant="blp" />
      <HeroBLP />
      <ForPros />
      <HowBLP />
      <Stats variant="blp" />
      <Testimonials variant="blp" />
      <ContactBLP />
      <Footer variant="blp" />
    </>
  )
}
