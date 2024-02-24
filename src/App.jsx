import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useEffect, useState } from 'react'
import Homepage from './pages/Homepage';
import NavigationBar from './components/NavigationBar';
import Aboutus from './pages/Aboutus/Aboutus';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Contact from './pages/contact/ContactUs';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './pages/Services/Services';


const App = () => {
  const [active, setActive] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const isActive = () =>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=>{
    window.addEventListener("scroll", isActive)

    return () =>{
      window.removeEventListener("scroll", isActive)
    }
  },[])
  return (
    <>
    {/* <NavigationBar active={active} /> */}
    <Navbar active={active} setOpenMenu={setOpenMenu} openMenu={openMenu}/>
    <Header setOpenMenu={setOpenMenu} openMenu={openMenu}/>
    <Routes >
      <Route path='/' element={<Homepage active={active}/>}/>
      <Route path='/about-us' element={<Aboutus />}/>
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services/>} />

    </Routes>
    <Footer />
    </>
  )
}

export default App

