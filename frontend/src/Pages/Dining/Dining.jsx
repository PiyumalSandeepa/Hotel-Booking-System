import React from 'react'
import './dining.css'
import Restaurants from './Restuarent';

const Dining = () => {
  return (
    <>
     <div className='caption'>
          <h1>Select Your Restaurent</h1>
          <p> Scrolldown for Experience luxury and comfort like never before.</p>
        </div>
    <div className='hero-dining'></div>
    <Restaurants/>
    </>
  )
}

export default Dining;

