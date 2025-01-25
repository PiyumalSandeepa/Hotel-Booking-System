import React from 'react'
import Check from '../../components/Check/Check'
import Hero from '../../components/Hero/Hero'
import './book.css';

const Book = () => {
  return (
    <div>
        <Hero/>
        <Check className="position"/>
    </div>
  )
}

export default Book