import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Check from './components/Check/Check'
import Intro from './components/Intro/intro'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Check/>
      <Intro/>
    </div>
  )
}

export default App