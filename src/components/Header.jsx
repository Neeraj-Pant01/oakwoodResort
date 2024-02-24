import React, { useEffect, useState } from 'react'
import { AiFillCloseSquare, AiOutlineMenu } from 'react-icons/ai'
import { IoMdPin } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'

const Links = [
    {
        name: "Home",
        a: '/'
    },
    {
        name: "About",
        a: '/about-us'
    },
    {
        name: "Services",
        a: '/services'
    },
    {
        name: "Contact",
        a: '/contact'
    }
]

const Header = ({ openMenu, setOpenMenu }) => {
    // const [openMenu, setOpenMenu] = useState(false)
    const [isAtTop, setIsAtTop] = useState(false);
    const { pathname } = useLocation()

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

    return (
        <div className='flex relative h-[600px] bg-[url("/img/main.jpg")] bg-cover flex-col'>
            <div className="absolute top-0 left-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)]  to-[rgba(0,0,0,0.7)] h-[100%] w-[100%]">
            </div>

            <div className={`navbar-container transition-all flex flex-col md:flex-row md:px-5 md:py-5 px-3  text-[#FEA116] sticky top-[0px] z-50 ${isAtTop ? 'md:bg-white' : 'md:bg-[transparent]'} bg-[white] ${!isAtTop && 'border-b border-[#646363]'} ${isAtTop ? 'md:py-2' : 'md:py-4'} py-3`}>
                <div className="flex-1 flex items-center gap-3">
                    <IoMdPin className='text-xl md:text-5xl' />
                    <h1 className='text-xl md:text-5xl text-[#FEA116] font-bold'>Oakwood Resort
                    </h1>
                    {
                    openMenu ?
                        <AiFillCloseSquare className='flex md:hidden text-xl ml-auto' onClick={() => setOpenMenu(false)} />
                        :
                        <AiOutlineMenu className='flex md:hidden text-xl ml-auto' onClick={() => setOpenMenu(true)} />
                }
                </div>


                {
                    openMenu &&
                    <div className={`flex md:hidden ${openMenu ? 'h-[200px]' : 'h-[0px]'} bg-[white] transition-all flex-col justify-around px-4`}>
                        {
                            Links.map((l, i) => <Link to={`${l.a}`} className={`text-lg ${pathname === l.a ? 'text-[palegreen]' : 'text-[black]'} text-xl`} key={i} onClick={() => setOpenMenu(false)}>{l.name}</Link>)
                        }
                    </div>
                }



                <div className="flex-1 hidden md:flex items-center justify-between">
                    {
                        Links.map((l, i) => <Link style={{ textDecoration: `${pathname === l.a ? 'underline palegreen' : 'none'}` }} to={`${l.a}`} className={`text ${pathname === l.a && 'underline'} text-xl`} key={i}>{l.name}</Link>)
                    }
                </div>
            </div>



            <div className='flex flex-col z-[9] mt-auto mb-auto'>
                <h1 className='md:text-5xl text-2xl text-[white] text-center font-bold'>Enjoy Your Vacation With Us</h1>
                <p className='text-[lightgrey] text-center mt-3 text-xl'>Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
                <div className='flex md:px-4 px-2 md:py-3 rounded-full border md:w-[60%] self-center ml-auto mr-auto bg-[white] items-center justify-between mb-4 w-[80%] py-1 mt-5'>
                    <input className='border-none flex-1 md:px-6' type='text' placeholder='search here...' />
                    <button className='btn custom-btn rounded-full md:px-4'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Header
