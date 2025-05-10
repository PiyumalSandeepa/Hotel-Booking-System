import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Check.css';

const Check = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('checkIn', checkIn);
    localStorage.setItem('checkOut', checkOut);

    navigate('/roomlist'); // Redirect to RoomList
  };

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>Check-In Date</label> 
        <input type="date" className="form-control" required value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />

        <label>Check-Out Date</label> 
        <input type="date" className="form-control" required value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />

        <button type="submit" className="btn-submit">BOOK NOW</button>
      </form>
    </div>
  );
};

export default Check;
