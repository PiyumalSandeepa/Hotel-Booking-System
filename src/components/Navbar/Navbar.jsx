import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="cv"/>
        <ul>
            <li>Home</li>
            <li>Accompodation</li>
            <li>Dining</li>
            <li>wedding</li>
            <li>Book Now</li>

        </ul>
    </nav>
  )
}

export default Navbar