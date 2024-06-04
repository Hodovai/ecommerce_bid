import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'
import navlogos from '../../assets/ecrack.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='navbar-logo'>
    <img src={navlogos} alt='logo' className='navbar-logo'/>
   
    <p >ECRACK</p>
    </div>
        {/* <img src={navlogo} alt="" className="nav-logo"/> */}
        <img src={navProfile} alt="" className="nav-profile"/>
    </div>
  )
}

export default Navbar