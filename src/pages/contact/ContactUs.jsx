import React, { useState } from 'react';

const Contact = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <div className='flex gap-10 md:gap-0 flex-col-reverse md:flex-row mt-10 overflow-x-hidden'>
      <div className='flex flex-1 flex-col md:ml-40 mb-10'>
        <h1 className='text-[#2d2c2c] text-center md:text-left text-2xl md:text-4xl font-bold'>Get In Touch</h1>
        <form className='flex items-center md:items-start flex-col mt-10 w-full gap-2'>
          <input type='text' name='name' className='md:w-96 w-72 py-2 px-3 outline-none border-1 border-[black] rounded-md' placeholder='your name'></input>
          <input type='email' name='email' className='w-72 md:w-96 py-2 px-3 outline-none border-1 border-[black] rounded-md' placeholder='your email'></input>
          <textarea name='message' className='w-72 md:w-96 h-28 md:h-40 py-4 px-3 outline-none border-1 border-[black] resize-none rounded-md' placeholder='enter your message here' />

          <button className='md:px-12 md:py-3 text-[white] bg-[#ffa37b] w-fit px-10 py-2 rounded-sm '>send</button>
        </form>
        <div className='flex flex-col items-center md:items-start text-[grey] mt-10 gap-3'>
          <span>Address Line 1</span>
          <span>Chamoli, Gopeshwar</span>
          <span>Address Line 1</span>
        </div>
      </div>
      <div className='flex flex-1'>
        {!iframeLoaded && (
          <div className="flex items-center justify-center w-full h-full">
            <p className='text-[black] animate-pulse'>Loading...</p>
          </div>
        )}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13764.072483127351!2d79.30894009904627!3d30.407227752171146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909d458db25f9b9%3A0x3c8e88f7178344d7!2sGopeshwar%2C%20Uttarakhand%20246401!5e0!3m2!1sen!2sin!4v1707135428328!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{border: "0"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
