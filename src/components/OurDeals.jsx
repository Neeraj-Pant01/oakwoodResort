import  { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WOW from 'wowjs';
import { IoStar } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaRupeeSign } from 'react-icons/fa';
const OurDeals = () => {
  useEffect(() => {
    // Initialize WOW.js
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  return (
    <div className="container-xxl py-5">
      <Container>
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title text-center text-uppercase"style={{color:'#FEA116',fontWeight:600}}>Our Deals</h6>
          <p className="mb-5" style={{fontSize:'32px',fontWeight:600}}>Best Price For <span className="text-uppercase" style={{color:'#FEA116'}}>Your Stay</span></p>
        </div>
        <Row className="g-4">
          <Col lg={4} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative" >
                <img className="img-fluid" src="img/camp.jpg" alt="" />
                <small style={{borderBottom:'0.4px solid rgb(223 223 223)'}} className="position-absolute start-0 top-100 translate-middle-y  w-100 p-2 bg-white d-flex justify-content-around" >
                  <div className='d-flex align-items-center justify-content-evenly gap-1' style={{fontSize:14,color:'#FEA116'}}><FaRupeeSign style={{fontSize:14,color:'#FEA116'}}/>1200</div>
                  <div className='d-flex align-items-center justify-content-evenly gap-1' style={{fontSize:14,color:'#FEA116'}}><MdAccessTimeFilled style={{fontSize:18,color:'#FEA116'}}/>2 days</div>
                  <div className='d-flex align-items-center justify-content-evenly gap-1' style={{fontSize:14,color:'#FEA116'}}><FaUser style={{fontSize:14,color:'#FEA116'}}/>2 people</div>
                </small>
               
              </div>
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <p className="mb-0" style={{color:'#0F172B',fontWeight:700,fontSize:20}}>Dome Tent</p>
                  <div className='d-flex justify-content-between gap-2'>
                    <IoStar style={{color:'#FEA116'}}/>  
                    <IoStar style={{color:'#FEA116'}}/>  
                    <IoStar style={{color:'#FEA116'}}/>  
                    <IoStar style={{color:'#FEA116'}}/>  
                  </div>
                </div>
                <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                <div className="d-flex justify-content-center mb-2">
                                <a href="#" className="btn btn-m  px-3 border-end text-white" style={{background:"#FEA116",borderRadius: '30px 0 0 30px'}}>Read More</a>
                                <a href="#" className="btn btn-m  px-3 text-white" style={{background:"#FEA116",borderRadius: '0 30px 30px 0'}}>Book Now</a>
                            </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative" >
                <img className="img-fluid" src="img/camp.jpg" alt="" />
                <small style={{borderBottom:'0.4px solid rgb(223 223 223)'}} className="position-absolute start-0 top-100 translate-middle-y  w-100 p-2 bg-white d-flex justify-content-around" >
                  <div className='d-flex align-items-center justify-content-evenly gap-1' style={{fontSize:14,color:'#FEA116'}}><FaRupeeSign style={{fontSize:14,color:'#FEA116'}}/>1200</div>
                  <div className='d-flex align-items-center justify-content-evenly gap-1' style={{fontSize:14,color:'#FEA116'}}><MdAccessTimeFilled style={{fontSize:18,color:'#FEA116'}}/>2 days</div>
                  <div className='d-flex align-items-center justify-content-evenly gap-1' style={{fontSize:14,color:'#FEA116'}}><FaUser style={{fontSize:14,color:'#FEA116'}}/>2 people</div>
                </small>
               
              </div>
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <p className="mb-0" style={{color:'#0F172B',fontWeight:700,fontSize:20}}>Dome Tent</p>
                  <div className='d-flex justify-content-between gap-2'>
                    <IoStar style={{color:'#FEA116'}}/>  
                    <IoStar style={{color:'#FEA116'}}/>  
                    <IoStar style={{color:'#FEA116'}}/>  
                    <IoStar style={{color:'#FEA116'}}/>  
                  </div>
                </div>
                <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                <div className="d-flex justify-content-center mb-2">
                                <a href="#" className="btn btn-m  px-3 border-end text-white" style={{background:"#FEA116",borderRadius: '30px 0 0 30px'}}>Read More</a>
                                <a href="#" className="btn btn-m  px-3 text-white" style={{background:"#FEA116",borderRadius: '0 30px 30px 0'}}>Book Now</a>
                            </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative" >
                <img className="img-fluid" src="img/camp.jpg" alt="" />
                <small style={{borderBottom:'0.4px solid rgb(223 223 223)'}} className="position-absolute start-0 top-100 translate-middle-y  w-100 p-2 bg-white d-flex justify-content-around" >
                  <div className='d-flex align-items-center justify-content-evenly gap-1' style={{fontSize:14,color:'#FEA116'}}><FaRupeeSign style={{fontSize:14,color:'#FEA116'}}/>1200</div>
                  <div className='d-flex align-items-center justify-content-evenly gap-1' style={{fontSize:14,color:'#FEA116'}}><MdAccessTimeFilled style={{fontSize:18,color:'#FEA116'}}/>2 days</div>
                  <div className='d-flex align-items-center justify-content-evenly gap-1' style={{fontSize:14,color:'#FEA116'}}><FaUser style={{fontSize:14,color:'#FEA116'}}/>2 people</div>
                </small>
               
              </div>
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <p className="mb-0" style={{color:'#0F172B',fontWeight:700,fontSize:20}}>Dome Tent</p>
                  <div className='d-flex justify-content-between gap-2'>
                    <IoStar style={{color:'#FEA116'}}/>  
                    <IoStar style={{color:'#FEA116'}}/>  
                    <IoStar style={{color:'#FEA116'}}/>  
                    <IoStar style={{color:'#FEA116'}}/>  
                  </div>
                </div>
                <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                <div className="d-flex justify-content-center mb-2">
                                <a href="#" className="btn btn-m  px-3 border-end text-white" style={{background:"#FEA116",borderRadius: '30px 0 0 30px'}}>Read More</a>
                                <a href="#" className="btn btn-m  px-3 text-white" style={{background:"#FEA116",borderRadius: '0 30px 30px 0'}}>Book Now</a>
                            </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurDeals;