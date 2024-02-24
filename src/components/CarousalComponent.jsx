import './carousal.css';


const CarouselComponent = () => {
  return (
    <>
     <div className="carousel-item-container relative">
      {/* <div className='absolute w-[100%] border-8 border-[red]'>
        this is the alyer
      </div> */}

      <div className='flex w-100 h-100 items-center justify-center py-5 bg-[#e7e6e6]'>
      <img className='d-block w-[90%] h-[100%]' src="img/main.jpg" alt="Image" />
      </div>
           <div className="carousel-caption d-flex flex-column align-items-center justify-content-center w-100">
             <div className="p-3 w-100">
               <p style={{fontSize:60,fontWeight:700}} className="section-title text-white  mb-3">Seasonal Specialties</p>
               <p  className="text-white mb-4 ">Our resort offers daily fresh products and professional yet convivial service to create a true gastronomic experience.</p>
               <div className='flex md:px-4 px-2 md:py-2 rounded-full border md:w-[60%] self-center ml-auto mr-auto bg-[white] items-center justify-between mb-4 w-[80%] py-1'>
                <input type='text' placeholder='search here...' id='input' />
                <button className='btn custom-btn rounded-full md:px-4'>Search</button>
               </div>
               <a href="" className="btn custom-btn py-md-3 px-md-5 me-3 animated slideInLeft">VIEW ALL SERVICES</a>
        </div>
           </div>
         </div>
    </>
    // <Carousel >
       
    //   <Carousel.Item>
    //     <div className="carousel-item-container">
    //       <img className="d-block " src="img/main.jpg" alt="Image" />
    //       <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
    //         <div className="p-3">
    //           <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
    //           <h1 className="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Hotel</h1>
    //           <a href="" className="btn custom-btn py-md-3 px-md-5 me-3 animated slideInLeft">VIEW ALL SERVICES</a>
    //    </div>
    //       </div>
    //     </div>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <div className="carousel-item-container">
    //       <img className="d-block w-100" src="img/f1.jpg" alt="Image" />
    //       <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
    //         <div className="p-3">
    //           <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
    //           <h1 className="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Hotel</h1>
    //           <a href="" className="btn custom-btn py-md-3 px-md-5 me-3 animated slideInLeft">VIEW ALL SERVICES</a>
    //     </div>
    //       </div>
    //     </div>
    //   </Carousel.Item>
    // </Carousel>
  );
};

export default CarouselComponent;
