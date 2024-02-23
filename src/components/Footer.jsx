import { MdKeyboardArrowRight } from "react-icons/md";
import { IoLocationSharp , IoMail} from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { FaTwitter,FaFacebookF,FaGoogle,FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid text-light footer pt-5 mt-5 wow fadeIn"style={{background:"#0F172B"}} data-wow-delay="0.1s">
    <div className="container py-5">
        <div className="row g-5">
            <div className="col-lg-3 col-md-6">
                <p className="text-white mb-3" style={{fontSize:'24px',fontWeight:600}}>Company</p>
                <a className="d-flex align-items-center btn text-white"  href="/"><MdKeyboardArrowRight style={{fontSize:22}}/> <span>Home</span></a>
                <a className="d-flex  align-items-center btn text-white" href="/services"><MdKeyboardArrowRight style={{fontSize:22}}/> <span>Service</span></a>
                <a className="d-flex align-items-center btn text-white" href="/about-us"><MdKeyboardArrowRight style={{fontSize:22}}/> <span>Contact Us</span></a>
                <a className="d-flex  align-items-center btn text-white" href="/contact"><MdKeyboardArrowRight style={{fontSize:22}}/> <span>About Us</span></a>
            </div>
            <div className="col-lg-3 col-md-6">
                <p style={{fontSize:'24px',fontWeight:600}} className="text-white mb-3">Contact</p>
                <p className="mb-2 d-flex gap-2 align-items-center"><IoLocationSharp style={{fontSize:22}}/>123 Street, New York, USA</p>
                <p className="mb-2 d-flex gap-2 align-items-center"><MdCall style={{fontSize:22}}/>+012 345 67890</p>
                <p className="mb-2 d-flex gap-2 align-items-center"><IoMail style={{fontSize:22}}/>info@example.com</p>
                <div className="d-flex pt-2 gap-2">
                    <a className="d-flex align-items-center justify-content-center btn btn-outline-light" style={{width:40,height:40,borderRadius:'50%'}} href=""><FaTwitter /></a>
                    <a className="d-flex align-items-center justify-content-center btn btn-outline-light" style={{width:40,height:40,borderRadius:'50%'}} href=""><FaFacebookF /></a>
                    <a className="d-flex align-items-center justify-content-center btn btn-outline-light" style={{width:40,height:40,borderRadius:'50%'}} href=""><FaInstagram /></a>
                    <a className="d-flex align-items-center justify-content-center btn btn-outline-light" style={{width:40,height:40,borderRadius:'50%'}} href=""><FaGoogle /></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <p style={{fontSize:'24px',fontWeight:600}} className="text-white mb-3">Gallery</p>
                <div className="row g-2 pt-2">
                    <div className="col-4">
                        <img className="img-fluid bg-light p-1" src="img/f2.jpg" alt="" />
                    </div>
                    <div className="col-4">
                        <img className="img-fluid bg-light p-1" src="img/f3.jpg" alt="" />
                    </div>
                    <div className="col-4">
                        <img className="img-fluid bg-light p-1" src="img/f2.jpg" alt="" />
                    </div>
                    <div className="col-4">
                        <img className="img-fluid bg-light p-1" src="img/f3.jpg" alt="" />
                    </div>
                    <div className="col-4">
                        <img className="img-fluid bg-light p-1" src="img/slide1.jpeg" alt="" />
                    </div>
                    <div className="col-4">
                        <img className="img-fluid bg-light p-1" src="img/slide2.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
            <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13764.072483127351!2d79.30894009904627!3d30.407227752171146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909d458db25f9b9%3A0x3c8e88f7178344d7!2sGopeshwar%2C%20Uttarakhand%20246401!5e0!3m2!1sen!2sin!4v1707135428328!5m2!1sen!2sin"
          // width="600"
          // height="450"
          className="w-100 h-100"
          style={{border: "0"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          // onLoad={handleIframeLoad}
        ></iframe>
            </div>
        </div>
    </div>
    <div className="container p-2" >
        <div className="copyright" style={{borderTop:'1px solid darkslategray'}}>
            <div className="row p-3">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a className="border-bottom" href="#">Oakwood Resort</a>, All Right Reserved.
   Designed By <a className="border-bottom" >Team Oakwood</a>
                </div>
                
            </div>
        </div>
    </div>
</div>

  )
}

export default Footer
