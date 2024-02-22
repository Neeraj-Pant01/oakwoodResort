import React, { useEffect, useState } from 'react';
import { AiFillCloseSquare, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillMobile, AiFillYoutube, AiOutlineMenu, AiOutlineTwitter } from "react-icons/ai"
import { FaFacebook } from 'react-icons/fa';
import { IoMdPin } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

// const Links = ["Home", "About-us", "Services", "Contact"]

const Links = [
    {
        name:"Home",
        a:'/'
    },
    {
        name:"About",
        a:'/about-us'
    },
    {
        name:"Services",
        a:'/services'
    },
    {
        name:"Contact",
        a:'/contact'
    }
]

const Navbar = ({active,openMenu,setOpenMenu}) => {
    const {pathname} = useLocation();
    // const [openMenu, setOpenMenu] = useState(false)
    const [isAtTop, setIsAtTop] = useState(false);

    console.log(openMenu)

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.navbar-container');
            const rect = element.getBoundingClientRect();
            setIsAtTop(rect.top === 0);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    console.log(isAtTop)

  return (
    <>
    <div className={`container-fluid bg-dark px-5 d-none d-lg-block ${pathname !== '/' && 'd-none'}`}>
        <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                    <small className="me-3 text-light flex items-center gap-2"><IoMdPin/> gopeshwar, chamoli , uttrakhand , INDIA</small>
                    <small className="me-3 text-light flex items-center gap-2"><AiFillMobile /> +012 345 6789</small>
                    <small className="text-light flex items-center gap-2"><AiFillMail /> info@example.com</small>
                </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
                <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"><AiOutlineTwitter /> </Link>
                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"><FaFacebook /></Link>
                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"><AiFillLinkedin /></Link>
                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"><AiFillInstagram /></Link>
                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"><AiFillYoutube /></Link>
                </div>
            </div>
        </div>
    </div>

    {/* {
            openMenu ?
            <AiFillCloseSquare className='flex md:hidden text-xl' onClick={()=>setOpenMenu(false)}/>
            :
        <AiOutlineMenu className='flex md:hidden text-xl' onClick={()=>setOpenMenu(true)}/>
        }


    {
        openMenu &&
        <div className={`flex md:hidden ${openMenu ? 'h-[200px]' : 'h-[0px]'} bg-[white] transition-all flex-col justify-around px-4`}>
        {
            Links.map((l,i)=><Link to={`${l.a}`} className={`text-lg ${pathname===l.a ? 'text-[palegreen]' : 'text-[black]'} text-xl`} key={i} onClick={()=>setOpenMenu(false)}>{l.name}</Link>)
        }
        </div>
    } */}
</>
  );
};

export default Navbar;
