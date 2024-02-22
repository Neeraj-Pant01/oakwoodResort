import React from 'react'
import UserRev from './UserReview'

const ClientTestimonials = () => {
  return (
    <div className='flex flex-col mx-3 md:mx-0 md:mt-[140px] mt-[70px]'>
        <div className='flex flex-col md:px-20 gap-3'>
        <h1 className='text-3xl md:text-5xl text-[#FEA116]'>Client Testimonials</h1>
            <p className='text-[grey]'>Hear What Our Clients Have To Say About Us</p>
        </div>
        <div className='flex md:px-8 md:my-6 bg-no-repeat bg-cover justify-center flex-wrap md:gap-10'>
      <UserRev />
      <UserRev />
      <UserRev />
      <UserRev />
    </div>
    </div>
  )
}

export default ClientTestimonials
