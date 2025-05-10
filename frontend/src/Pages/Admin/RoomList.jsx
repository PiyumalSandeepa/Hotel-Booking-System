import React, { useState } from "react";

const RoomList = ({ rooms, updateRoom, deleteRoom }) => {
  const [editingRoom, setEditingRoom] = useState(null);
  const [updatedRoom, setUpdatedRoom] = useState({
    id: "",
    name: "",
    image: "",
    description: "",
    price: "",
  });

  const handleEditClick = (room) => {
    setEditingRoom(room.id);
    setUpdatedRoom(room);
  };

  const handleChange = (e) => {
    setUpdatedRoom({ ...updatedRoom, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateRoom(updatedRoom);
    setEditingRoom(null);
  };

  return (
    <div className="room-list">
      <h2>Room List</h2>
      {rooms.length === 0 && <p>No rooms available.</p>}
      {rooms.map((room) => (
        <div key={room.id} className="room-item">
          {editingRoom === room.id ? (
            <div>
              <input
                type="text"
                name="name"
                value={updatedRoom.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="image"
                value={updatedRoom.image}
                onChange={handleChange}
              />
              <textarea
                name="description"
                value={updatedRoom.description}
                onChange={handleChange}
              />
              <input
                type="number"
                name="price"
                value={updatedRoom.price}
                onChange={handleChange}
              />
              <button onClick={handleUpdate}>Save</button>
              <button onClick={() => setEditingRoom(null)}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>
                {room.name} - ${room.price}
              </p>
              <img src={room.image} alt={room.name} width="100" />
              <p>{room.description}</p>
              <button onClick={() => handleEditClick(room)}>Edit</button>
              <button onClick={() => deleteRoom(room.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RoomList;
