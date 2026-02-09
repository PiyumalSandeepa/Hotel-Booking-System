import React, { useState } from "react";

const RoomList = ({ rooms, updateRoom, deleteRoom }) => {
  const [editMode, setEditMode] = useState(null);
  const [editRoom, setEditRoom] = useState({ number: "", type: "Standard", price: "", status: "Available", image: "" });

  const handleEdit = (room) => {
    setEditMode(room.id);
    setEditRoom(room);
  };

  const handleChange = (e) => {
    setEditRoom({ ...editRoom, [e.target.name]: e.target.value });
  };

  const handleUpdate = (id) => {
    updateRoom(id, editRoom);
    setEditMode(null);
  };

  return (
    <div className="room-list-table">
      {rooms.length === 0 ? (
        <p className="no-rooms">No rooms available.</p>
      ) : (
        <table className="rooms-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Room #</th>
              <th>Type</th>
              <th>Price/Night</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.id} className={`room-row ${editMode === room.id ? "edit-mode" : ""}`}>
                <td className="image-cell">
                  <img src={room.image} alt={`Room ${room.number}`} className="room-image" />
                </td>
                <td>
                  {editMode === room.id ? (
                    <input
                      type="number"
                      name="number"
                      value={editRoom.number}
                      onChange={handleChange}
                      className="edit-input"
                    />
                  ) : (
                    <strong>{room.number}</strong>
                  )}
                </td>
                <td>
                  {editMode === room.id ? (
                    <select name="type" value={editRoom.type} onChange={handleChange} className="edit-select">
                      <option value="Standard">Standard</option>
                      <option value="Deluxe">Deluxe</option>
                      <option value="Suite">Suite</option>
                    </select>
                  ) : (
                    room.type
                  )}
                </td>
                <td>
                  {editMode === room.id ? (
                    <input
                      type="number"
                      name="price"
                      value={editRoom.price}
                      onChange={handleChange}
                      className="edit-input"
                    />
                  ) : (
                    `$${room.price}`
                  )}
                </td>
                <td>
                  {editMode === room.id ? (
                    <select name="status" value={editRoom.status} onChange={handleChange} className="edit-select">
                      <option value="Available">Available</option>
                      <option value="Occupied">Occupied</option>
                    </select>
                  ) : (
                    <span className={`status-badge ${room.status.toLowerCase()}`}>
                      {room.status}
                    </span>
                  )}
                </td>
                <td className="actions-cell">
                  {editMode === room.id ? (
                    <>
                      <input
                        type="text"
                        name="image"
                        value={editRoom.image}
                        onChange={handleChange}
                        placeholder="Image URL"
                        className="edit-input image-input"
                      />
                      <button
                        onClick={() => handleUpdate(room.id)}
                        className="btn btn-save"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditMode(null)}
                        className="btn btn-cancel"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(room)}
                        className="btn btn-edit"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteRoom(room.id)}
                        className="btn btn-delete"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RoomList;
