// import React, { useEffect, useState } from "react";
// import "./admin.css";
// import axios from "axios";

// const AdminPanel = () => {
//   const [rooms, setRooms] = useState([]);
//   const [bookings, setBookings] = useState([]);
//   const [newRoom, setNewRoom] = useState({ name: "", price: "" });

//   useEffect(() => {
//     fetchRooms();
//     fetchBookings();
//   }, []);

//   const fetchRooms = async () => {
//     try {
//       const response = await axios.get("/api/rooms");
//       setRooms(response.data);
//     } catch (error) {
//       console.error("Error fetching rooms", error);
//     }
//   };

//   const fetchBookings = async () => {
//     try {
//       const response = await axios.get("/api/bookings");
//       setBookings(response.data);
//     } catch (error) {
//       console.error("Error fetching bookings", error);
//     }
//   };

//   const addRoom = async () => {
//     try {
//       await axios.post("/api/rooms", newRoom);
//       fetchRooms();
//       setNewRoom({ name: "", price: "" });
//     } catch (error) {
//       console.error("Error adding room", error);
//     }
//   };

//   const deleteRoom = async (id) => {
//     try {
//       await axios.delete(`/api/rooms/${id}`);
//       fetchRooms();
//     } catch (error) {
//       console.error("Error deleting room", error);
//     }
//   };

//   return (
//     <div className="admin-panel">
//       <h1>Admin Panel - Hotel Booking System</h1>

//       <section className="room-management">
//         <h2>Room Management</h2>
//         <input
//           type="text"
//           placeholder="Room Name"
//           value={newRoom.name}
//           onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={newRoom.price}
//           onChange={(e) => setNewRoom({ ...newRoom, price: e.target.value })}
//         />
//         <button onClick={addRoom}>Add Room</button>
//         <ul>
//           {rooms.map((room) => (
//             <li key={room.id}>
//               {room.name} - ${room.price} 
//               <button onClick={() => deleteRoom(room.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </section>

//       <section className="booking-management">
//         <h2>Booking Management</h2>
//         <ul>
//           {bookings.map((booking) => (
//             <li key={booking.id}>
//               {booking.customer} booked {booking.roomName} for {booking.nights} nights
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default AdminPanel;



// import React, { useState } from "react";
// import BookingForm from "./BookingForm";
// import BookingList from "./BookingList";
// import "./admin.css"; // Use a separate CSS file for styling

// const AdminPanel = () => {
//   const [bookings, setBookings] = useState([
//     { id: 1, name: "John Doe", room: 101, date: "2025-03-01" },
//     { id: 2, name: "Jane Smith", room: 202, date: "2025-03-05" },
//   ]);

//   const addBooking = (booking) => {
//     setBookings([...bookings, { ...booking, id: Date.now() }]);
//   };

//   const updateBooking = (id, updatedBooking) => {
//     setBookings(bookings.map((b) => (b.id === id ? updatedBooking : b)));
//   };

//   const deleteBooking = (id) => {
//     setBookings(bookings.filter((b) => b.id !== id));
//   };

//   return (
//     <div className="admin-container">
//       <h1>Hotel Booking Admin Panel</h1>
//       <BookingForm addBooking={addBooking} />
//       <BookingList bookings={bookings} updateBooking={updateBooking} deleteBooking={deleteBooking} />
//     </div>
//   );
// };

// export default AdminPanel;




// import React, { useState } from "react";
// import RoomForm from "./RoomForm";
// import RoomList from "./RoomList";
// import "./AdminPanel.css"; // Import CSS styles

// const AdminPanel = () => {
//   const [rooms, setRooms] = useState([
//     { id: 1, number: 101, type: "Deluxe", price: 150, status: "Available" },
//     { id: 2, number: 202, type: "Standard", price: 100, status: "Occupied" },
//   ]);

//   const addRoom = (room) => {
//     setRooms([...rooms, { ...room, id: Date.now() }]);
//   };

//   const updateRoom = (id, updatedRoom) => {
//     setRooms(rooms.map((room) => (room.id === id ? updatedRoom : room)));
//   };

//   const deleteRoom = (id) => {
//     setRooms(rooms.filter((room) => room.id !== id));
//   };

//   return (
//     <div className="admin-container">
//       <h1>Hotel Room Management</h1>
//       <RoomForm addRoom={addRoom} />
//       <RoomList rooms={rooms} updateRoom={updateRoom} deleteRoom={deleteRoom} />
//     </div>
//   );
// };

// export default AdminPanel;





import React, { useState } from "react";
import RoomForm from "./RoomForm";
import RoomList from "./RoomList";
import "./admin.css";

const AdminPanel = () => {
  const [rooms, setRooms] = useState([
    { id: 1, number: 101, type: "Deluxe", price: 150, status: "Available" },
    { id: 2, number: 202, type: "Standard", price: 100, status: "Occupied" },
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
      <h1>Hotel Room Management</h1>
      <RoomForm addRoom={addRoom} />
      <RoomList rooms={rooms} updateRoom={updateRoom} deleteRoom={deleteRoom} />
    </div>
  );
};

export default AdminPanel;
