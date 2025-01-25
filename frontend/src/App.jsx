import React from 'react'
import{BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import Book from './Pages/Book/Book';

import Card from './Pages/SelectRoom/RoomList';
import RoomList from './Pages/SelectRoom/RoomList';
import Accommodation from './Pages/Accommodation/Accommodation';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';



const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<Book />} />
      <Route path="/roomlist" element={<RoomList />} />
      <Route path="/accommodation" element={<Accommodation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    <Footer />
  </Router>
)

export default App