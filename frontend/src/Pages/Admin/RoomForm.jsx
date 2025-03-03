import React, { useState } from "react";

const RoomForm = ({ addRoom }) => {
  const [room, setRoom] = useState({ id: "", name: "", image: "", description: "", price: "" });

  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!room.id || !room.name || !room.image || !room.description || !room.price) return;
    addRoom(room);
    setRoom({ id: "", name: "", image: "", description: "", price: "" });
  };

  return (
    <form className="room-form" onSubmit={handleSubmit}>
      
      <input type="text" name="name" placeholder="Room Name" value={room.name} onChange={handleChange} required />
      <input type="text" name="image" placeholder="Image URL" value={room.image} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={room.description} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={room.price} onChange={handleChange} required />
      <button type="submit">Add Room</button>
    </form>
  );
};

export default RoomForm;
