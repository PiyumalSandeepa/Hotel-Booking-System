import React from 'react';
import './roomcard.css'; // Importing CSS for card styling

function RoomCard({ room }) {
  return (
    <div className="room-card">
      <img src={room.image} alt={room.name} className="room-card-image" />
      <div className="room-card-content">
        <h2 className="room-name">{room.name}</h2>
        <p className="room-description">{room.description}</p>
        <ul className="room-amenities">
          {room.amenities.map((amenity, index) => (
            <li key={index} className="amenity-item">{amenity}</li>
          ))}
        </ul>
        <div className="room-card-footer">
          <span className="room-price">${room.price} per night</span>
          <button className="book-button">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
