import React from 'react'
import './Check.css'

const Check = () => {
  return (
    <che class="booking-container">
        <form class="booking-form">
        
      <label>Check-In Date</label> 
      <input type="date" class="form-control" required />
      <label>Check-Out Date</label> 
      <input type="date" class="form-control" required />

      <select class="form-control" required>
        <option value="">NATIONALITY</option>
        <option value="Sri Lankan">Sri Lankan</option>
        <option value="Foreign">Foreign</option>
       
        
      </select>

      <input type="text" class="form-control" placeholder="Promo Code" />

      <button type="submit" class="btn-submit">BOOK NOW</button>
        </form>


    </che>
  )
}

export default Check