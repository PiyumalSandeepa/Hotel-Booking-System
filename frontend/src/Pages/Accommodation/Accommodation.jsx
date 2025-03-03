import React, { useState, useEffect } from 'react';
import RoomCard from '../../components/RoomCard/RoomCard';
import "./accommodation.css";

function Accommodation() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/accommodation') // Ensure your backend is running
      .then(response => response.json())
      .then(data => {
        console.log("Fetched Room Data:", data); // Debugging log
        setRooms(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching rooms:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="room-list">
      {loading ? (
        <p>Loading rooms...</p>
      ) : rooms.length > 0 ? (
        rooms.map((room, index) => <RoomCard key={index} room={room} />)
      ) : (
        <p>No rooms available.</p>
      )}
    </div>
  );
}

export default Accommodation;
