import React, { useState } from "react";

const RoomForm = ({ addRoom }) => {
  const [room, setRoom] = useState({ number: "", type: "Standard", price: "", status: "Available", image: "" });

  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!room.number || !room.price || !room.image) {
      alert("Please fill in all fields including image URL");
      return;
    }
    addRoom(room);
    setRoom({ number: "", type: "Standard", price: "", status: "Available", image: "" });
  };

  return (
    <form className="room-form" onSubmit={handleSubmit}>
      <input type="number" name="number" placeholder="Room Number" value={room.number} onChange={handleChange} required />
      <select name="type" value={room.type} onChange={handleChange}>
        <option value="Standard">Standard</option>
        <option value="Deluxe">Deluxe</option>
        <option value="Suite">Suite</option>
      </select>
      <input type="number" name="price" placeholder="Price per night" value={room.price} onChange={handleChange} required />
      <select name="status" value={room.status} onChange={handleChange}>
        <option value="Available">Available</option>
        <option value="Occupied">Occupied</option>
      </select>
      <input type="text" name="image" placeholder="Image URL" value={room.image} onChange={handleChange} required />
      <button type="submit">Add Room</button>
    </form>
  );
};

export default RoomForm;
