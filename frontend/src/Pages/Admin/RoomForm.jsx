import React, { useState } from "react";
import axios from "axios"; // Import Axios for API calls

const RoomForm = () => {
  const [room, setRoom] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
  });

  const [error, setError] = useState(""); // State to store error messages
  const [successMessage, setSuccessMessage] = useState(""); // State to store success messages

  // Handle input changes
  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    setSuccessMessage(""); // Reset success message

    // Validate form fields
    if (!room.name || !room.image || !room.description || !room.price) {
      setError("All fields are required.");
      return;
    }

    try {
      // Send POST request to the backend to add a room
      const response = await axios.post("http://localhost:5000/admin/add-room", room);
      setSuccessMessage(response.data.message); // Display success message
      setRoom({ name: "", image: "", description: "", price: "" }); // Reset form fields
    } catch (err) {
      console.error("Error adding room:", err);
      setError("Failed to add the room. Please try again.");
    }
  };

  return (
    <div className="room-form-container">
      <h2>Hotel Room Management</h2>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
      
      <form className="room-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Room Name"
          value={room.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={room.image}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={room.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={room.price}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Room</button>
      </form>
    </div>
  );
};

export default RoomForm;
