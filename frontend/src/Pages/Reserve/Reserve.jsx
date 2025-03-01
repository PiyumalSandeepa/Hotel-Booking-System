import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./reserve.css";


const BookingForm = () => {
  const [isBookingForSomeoneElse, setIsBookingForSomeoneElse] = useState(false);
  
  return (
    <div className="booking-container-reserve">
      <div className="booking-section">
        <h2 className="room-title">Deluxe King</h2>
        <div className="check-details">
          <p><strong>Check In</strong><br />05 Mar 2025</p>
          <p><strong>Check Out</strong><br />06 Mar 2025</p>
        </div>
        <div className="guest-details">
          <label className="section-label">Guest Details *</label>
          <div className="input-group">
            <input type="text" placeholder="First Name" className="input-field" />
            <input type="text" placeholder="Last Name" className="input-field" />
          </div>
          <div className="select-group">
            <label>Adult</label>
            <select className="select-field">
              <option>1</option>
              <option selected>2</option>
              <option>3</option>
            </select>
            <label>Child</label>
            <select className="select-field">
              <option selected>0</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <label className="section-label">Special Request</label>
          <textarea placeholder="Special Request" className="text-area"></textarea>
          <label className="section-label">Estimated arrival time</label>
          <select className="select-field">
            <option selected>12:00 pm</option>
            <option>01:00 pm</option>
            <option>02:00 pm</option>
            <option>03:00 pm</option>
            <option>04:00 pm</option>
          </select>
        </div>
      </div>

      <div className="contact-details">
        <label className="toggle-label">
          <input type="checkbox" checked={isBookingForSomeoneElse} onChange={() => setIsBookingForSomeoneElse(!isBookingForSomeoneElse)} />
          I am booking for someone else
        </label>
        <div className="input-group">
          <label className="section-label">Country code *</label>
          <div className="phone-input">
            <span className="flag">🇱🇰 +94</span>
            <input type="text" placeholder="Contact no" className="input-field" />
          </div>
        </div>
        <div className="input-group">
          <label className="section-label">Email *</label>
          <input type="email" placeholder="example@email.com" className="input-field" />
        </div>
        <Link to="/confirm">
      <button type="submit" class="btn-submit">Pay Now</button>
    </Link>
      </div>
    </div>
  );
};

export default BookingForm;