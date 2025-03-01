import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import Book from './Pages/Book/Book';
import RoomList from './Pages/SelectRoom/RoomList';
import Accommodation from './Pages/Accommodation/Acc';
import Dining from './Pages/Dining/Dining';
import BookingForm from './Pages/Reserve/Reserve';
import BookingConfirm from './Pages/Confirm/Confirm';
import AdminPanel from './Pages/Admin/Admin';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<Book />} />
      <Route path="/roomlist" element={<RoomList />} />
      <Route path="/accommodation" element={<Accommodation />} />
      <Route path="/dining" element={<Dining />} />
      <Route path="/reserve" element={<BookingForm />} />
      <Route path="/confirm" element={<BookingConfirm />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
