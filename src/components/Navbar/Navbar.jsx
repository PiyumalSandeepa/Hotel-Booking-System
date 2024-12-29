import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="cv" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Accomodation</li>
            <li>Dining</li>
            <li>wedding</li>
            <li><button className='btn'>Book Now</button></li> 

        </ul>
    </nav>
  )
}

export default Navbar