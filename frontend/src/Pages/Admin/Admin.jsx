import React, { useState } from "react";
import RoomForm from "./RoomForm";
import RoomList from "./RoomList";
import "./admin.css";

const AdminPanel = () => {
  const [rooms, setRooms] = useState([
    { id: 1, number: 101, type: "Deluxe", price: 150, status: "Available", image: "https://via.placeholder.com/300x200?text=Deluxe+Room+101" },
    { id: 2, number: 202, type: "Standard", price: 100, status: "Occupied", image: "https://via.placeholder.com/300x200?text=Standard+Room+202" },
  ]);

  const addRoom = (room) => {
    setRooms([...rooms, { ...room, id: Date.now() }]);
  };

  const updateRoom = (id, updatedRoom) => {
    setRooms(rooms.map((room) => (room.id === id ? updatedRoom : room)));
  };

  const deleteRoom = (id) => {
    setRooms(rooms.filter((room) => room.id !== id));
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Hotel Room Management</h1>
        <p className="subtitle">Manage your hotel rooms and availability</p>
      </div>

      <div className="admin-content">
        <div className="admin-section room-form-section">
          <div className="section-header">
            <h2>Add New Room</h2>
            <p>Create and manage hotel rooms</p>
          </div>
          <RoomForm addRoom={addRoom} />
        </div>

        <div className="admin-section room-list-section">
          <div className="section-header">
            <h2>Room Inventory</h2>
            <p>All available rooms in your system</p>
          </div>
          <RoomList rooms={rooms} updateRoom={updateRoom} deleteRoom={deleteRoom} />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
