import React from 'react'
import{BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Check from './components/Check/Check'
import Intro from './Pages/Home/Intro'
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
   </Router>
  )
}

export default App