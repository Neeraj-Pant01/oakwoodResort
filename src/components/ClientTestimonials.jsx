import React, { useState, useEffect } from 'react';
import UserRev from './UserReview';
import { revData } from '../pages/data';

const ClientTestimonials = () => {
  const [index, setIndex] = useState(0);

  // Function to update index automatically
  const updateIndex = () => {
    const newIndex = (index + 1) % revData.length;
    setIndex(newIndex);
  };

  // useEffect hook to run the updateIndex function at regular intervals
  useEffect(() => {
    const interval = setInterval(updateIndex, 5000); // Change item every 5 seconds (5000 milliseconds)
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [index]); // Run useEffect whenever index changes

  return (
    <div className='flex flex-col mx-3 md:mx-0 md:mt-[140px] mt-[70px]'>
      <div className='flex flex-col md:px-20 gap-3'>
      <p className="mb-2 text-center" style={{fontSize:'32px',fontWeight:600}}>
            Reviews By The
            <span className="text-uppercase" style={{ color: "#FEA116" }}>
              {" "}
             Customers
            </span>
          </p>
        {/* <p className='text-[grey]'>Hear What Our Clients Have To Say About Us</p> */}
      </div>
      <div className='flex md:px-8 md:my-6 bg-no-repeat bg-cover justify-center md:gap-10'>
        <UserRev index={index} />
      </div>
      <div className='flex gap-2 justify-center items-center'>
        {revData.map((r, i) => (
          <button
            key={i}
            className={`rounded-full hover:bg-[#FEA116] ${i !== index ? 'bg-[lightgrey]' : ''} ${
              i === index ? 'bg-[#FEA116]' : 'bg-[lightgrey]'
            } w-[10px] h-[10px] md:w-[14px] md:h-[14px]`}
            onClick={() => setIndex(i)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonials;
