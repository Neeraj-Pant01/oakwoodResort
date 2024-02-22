import React from 'react'
import CarouselComponent from '../components/CarousalComponent'
import About from '../components/About'
import OurDeals from '../components/OurDeals'
import LuxuryLiving from '../components/LuxuryLiving'
import Services from '../components/Services'
import Testimonial from '../components/Testimonials'
import Team from '../components/Team'

const Homepage = ({active}) => {
  return (
    <>
    {/* <CarouselComponent active={active}/> */}
    <About />
    <Services />
    <LuxuryLiving />
    <OurDeals />
    <Testimonial />
    {/* <Team /> */}
    </>
  )
}

export default Homepage
