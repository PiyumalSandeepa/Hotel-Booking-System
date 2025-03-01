// import React, { useState } from "react";

// const BookingList = ({ bookings, updateBooking, deleteBooking }) => {
//   const [editMode, setEditMode] = useState(null);
//   const [editBooking, setEditBooking] = useState({ name: "", room: "", date: "" });

//   const handleEdit = (booking) => {
//     setEditMode(booking.id);
//     setEditBooking(booking);
//   };

//   const handleChange = (e) => {
//     setEditBooking({ ...editBooking, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = (id) => {
//     updateBooking(id, editBooking);
//     setEditMode(null);
//   };

//   return (
//     <div className="booking-list">
//       <h2>Bookings</h2>
//       {bookings.length === 0 && <p>No bookings found.</p>}
//       {bookings.map((booking) => (
//         <div key={booking.id} className="booking-item">
//           {editMode === booking.id ? (
//             <>
//               <input type="text" name="name" value={editBooking.name} onChange={handleChange} />
//               <input type="number" name="room" value={editBooking.room} onChange={handleChange} />
//               <input type="date" name="date" value={editBooking.date} onChange={handleChange} />
//               <button onClick={() => handleUpdate(booking.id)}>Save</button>
//               <button onClick={() => setEditMode(null)}>Cancel</button>
//             </>
//           ) : (
//             <>
//               <p>
//                 <strong>{booking.name}</strong> - Room {booking.room} - {booking.date}
//               </p>
//               <button onClick={() => handleEdit(booking)}>Edit</button>
//               <button onClick={() => deleteBooking(booking.id)}>Delete</button>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BookingList;


// import React, { useState } from "react";

// const RoomList = ({ rooms, updateRoom, deleteRoom }) => {
//   const [editMode, setEditMode] = useState(null);
//   const [editRoom, setEditRoom] = useState({ number: "", type: "Standard", price: "", status: "Available" });

//   const handleEdit = (room) => {
//     setEditMode(room.id);
//     setEditRoom(room);
//   };

//   const handleChange = (e) => {
//     setEditRoom({ ...editRoom, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = (id) => {
//     updateRoom(id, editRoom);
//     setEditMode(null);
//   };

//   return (
//     <div className="room-list">
//       <h2>Room List</h2>
//       {rooms.length === 0 && <p>No rooms available.</p>}
//       {rooms.map((room) => (
//         <div key={room.id} className="room-item">
//           {editMode === room.id ? (
//             <>
//               <input type="number" name="number" value={editRoom.number} onChange={handleChange} />
//               <select name="type" value={editRoom.type} onChange={handleChange}>
//                 <option value="Standard">Standard</option>
//                 <option value="Deluxe">Deluxe</option>
//                 <option value="Suite">Suite</option>
//               </select>
//               <input type="number" name="price" value={editRoom.price} onChange={handleChange} />
//               <select name="status" value={editRoom.status} onChange={handleChange}>
//                 <option value="Available">Available</option>
//                 <option value="Occupied">Occupied</option>
//               </select>
//               <button onClick={() => handleUpdate(room.id)}>Save</button>
//               <button onClick={() => setEditMode(null)}>Cancel</button>
//             </>
//           ) : (
//             <>
//               <p>
//                 Room {room.number} - {room.type} - ${room.price} - <strong>{room.status}</strong>
//               </p>
//               <button onClick={() => handleEdit(room)}>Edit</button>
//               <button onClick={() => deleteRoom(room.id)}>Delete</button>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RoomList;




import React, { useState } from "react";

const RoomList = ({ rooms, updateRoom, deleteRoom }) => {
  const [editMode, setEditMode] = useState(null);
  const [editRoom, setEditRoom] = useState({ number: "", type: "Standard", price: "", status: "Available" });

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
    <div className="room-list">
      <h2>Room List</h2>
      {rooms.length === 0 && <p>No rooms available.</p>}
      {rooms.map((room) => (
        <div key={room.id} className="room-item">
          {editMode === room.id ? (
            <>
              <input type="number" name="number" value={editRoom.number} onChange={handleChange} />
              <select name="type" value={editRoom.type} onChange={handleChange}>
                <option value="Standard">Standard</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Suite">Suite</option>
              </select>
              <input type="number" name="price" value={editRoom.price} onChange={handleChange} />
              <select name="status" value={editRoom.status} onChange={handleChange}>
                <option value="Available">Available</option>
                <option value="Occupied">Occupied</option>
              </select>
              <button onClick={() => handleUpdate(room.id)}>Save</button>
              <button onClick={() => setEditMode(null)}>Cancel</button>
            </>
          ) : (
            <>
              <p>
                Room {room.number} - {room.type} - ${room.price} - <strong>{room.status}</strong>
              </p>
              <button onClick={() => handleEdit(room)}>Edit</button>
              <button onClick={() => deleteRoom(room.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default RoomList;
