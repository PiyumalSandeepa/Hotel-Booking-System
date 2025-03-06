import React, { useState } from "react";
import './confirm.css';
const BookingConfirm = () => {
  const [selectedPayment, setSelectedPayment] = useState("cybersource");

  return (
    <div className="booking-container-confirm">
      <h2>Booking Details</h2>
      <button className="book-more">Book more</button>

      <div className="room-details">
        <h3>Deluxe King</h3>
        
        <div className="checkin-checkout">
          <div>
            <strong>Check In</strong>
            <p>01 Mar 2025</p>
          </div>
          <div>
            <strong>Check Out</strong>
            <p>02 Mar 2025</p>
          </div>
          <div className="guests">👤 2</div>
        </div>
        <p>Room X 1 <span className="price">LKR 72,000</span></p>
        <p className="subtotal">Sub Total: <span className="price">LKR 72,000</span></p>
      </div>

      <div className="terms">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          By booking, you have agreed to our <a href="#">Terms and Conditions</a> | <a href="#">Payment Terms</a>
        </label>
      </div>

      <div className="newsletter">
        <input type="checkbox" id="subscribe" />
        <label htmlFor="subscribe">Subscribe to Blue Sapphire</label>
      </div>

      <h3>Total: <span className="price">LKR 72,000</span></h3>

      <h3>Payment Options</h3>
      <div className="payment-options">
        <label className={`payment-option ${selectedPayment === "cybersource" ? "selected" : ""}`}>
          <input
            type="radio"
            name="payment"
            value="cybersource"
            checked={selectedPayment === "cybersource"}
            onChange={() => setSelectedPayment("cybersource")}
          />
          <span>Debit Card</span>
          <p>Deposit Required: <strong>LKR 72,000</strong></p>
        </label>
        <label className={`payment-option ${selectedPayment === "amex" ? "selected" : ""}`}>
          <input
            type="radio"
            name="payment"
            value="amex"
            checked={selectedPayment === "amex"}
            onChange={() => setSelectedPayment("amex")}
          />
          <span>Credit Card</span>
        </label>
      </div>

      <button className="pay-now">Pay Now</button>
    </div>
  );
};

export default BookingConfirm;
