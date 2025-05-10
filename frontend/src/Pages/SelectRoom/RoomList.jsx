import React, { useState, useEffect } from 'react';
import './roomlist.css';
import RoomCard from '../../components/RoomCard/RoomCard';

function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkIn = localStorage.getItem('checkIn');
    const checkOut = localStorage.getItem('checkOut');

    fetch('http://localhost:5000/available-rooms', { // endpoint
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ check_in: checkIn, check_out: checkOut })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Available Rooms:", data); // Debugging
        setRooms(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching available rooms:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="room-list">
      {loading ? (
        <p>Loading available rooms...</p>
      ) : rooms.length > 0 ? (
        rooms.map((room, index) => <RoomCard key={index} room={room} />)
      ) : (
        <p>No available rooms for the selected dates.</p>
      )}
    </div>
  );
}

export default RoomList;
