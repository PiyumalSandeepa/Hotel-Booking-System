import React from 'react'
import{BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import Book from './Pages/Book/Book';
import RoomCard from './Pages/SelectRoom/RoomCard';
import Card from './Pages/SelectRoom/RoomList';


const App = () => {
  return (
    <Router>
    <Navbar/>
      <Routes>        
        <Route path="/" element={<Home />} />  
        <Route path="/book" element={<Book />} />   
        <Route path="/roomcard" element={<Card/>} />   
      </Routes>
    <Footer/>
   </Router>
  )
}

export default App