import React from 'react';
import './RoomCard.css';
import bedroom from '../../assets/bedroom.jpg'; 
import Check from '../../components/Check/Check';

const RoomCard = () => {
  return (
    
    <div className="room-box">
      <img src={bedroom} alt="This is an image of the room" className="room-image" />
      <div className="description">
        <h2>Deluxe Room</h2>
        <p>Experience ultimate comfort and luxury in our Deluxe Room.</p>
      </div>
    </div>
  );
};

export default RoomCard;




