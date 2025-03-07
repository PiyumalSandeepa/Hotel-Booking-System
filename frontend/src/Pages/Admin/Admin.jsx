import React, { useState, useEffect } from "react";
import RoomForm from "./RoomForm";
import RoomList from "./RoomList";
import "./admin.css";

const AdminPanel = () => {
  const [rooms, setRooms] = useState([]);

  // Fetch rooms from API
  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = () => {
    fetch("http://localhost:5000/admin/rooms")
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error("Error fetching rooms:", error));
  };

  // Add Room
  const addRoom = (room) => {
    fetch("http://localhost:5000/admin/add-room", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: room.name,
        image: room.image,
        description: room.description,
        price: room.price,
      }),
    })
      .then((response) => response.json())
      .then(() => fetchRooms()) // Refresh list
      .catch((error) => console.error("Error adding room:", error));
  };

  // Update Room
  const updateRoom = (updatedRoom) => {
    fetch(`http://localhost:5000/admin/update-room/${updatedRoom.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedRoom),
    })
      .then((response) => response.json())
      .then(() => fetchRooms()) // Refresh list
      .catch((error) => console.error("Error updating room:", error));
  };

  // Delete Room
  const deleteRoom = (id) => {
    fetch(`http://localhost:5000/admin/delete-room/${id}`, { method: "DELETE" })
      .then(() => fetchRooms()) // Refresh list
      .catch((error) => console.error("Error deleting room:", error));
  };

  return (
    <div className="admin-container">
      
      <RoomForm addRoom={addRoom} />
      <RoomList rooms={rooms} updateRoom={updateRoom} deleteRoom={deleteRoom} />
    </div>
  );
};

export default AdminPanel;
