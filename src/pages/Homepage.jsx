import About from '../components/About'
import OurDeals from '../components/OurDeals'
import LuxuryLiving from '../components/LuxuryLiving'
import Services from '../components/Services'
import ClientTestimonials from '../components/ClientTestimonials'


const Homepage = ({active}) => {
  return (
    <>
    {/* <CarouselComponent active={active}/> */}
    <About />
    <Services />
    <LuxuryLiving />
    <OurDeals />
    {/* <ClientTestimonials /> */}
    {/* <Team /> */}
    </>
  )
}

export default Homepage
