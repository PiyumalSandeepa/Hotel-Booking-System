// import React, { useState } from "react";

// const BookingForm = ({ addBooking }) => {
//   const [booking, setBooking] = useState({ name: "", room: "", date: "" });

//   const handleChange = (e) => {
//     setBooking({ ...booking, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!booking.name || !booking.room || !booking.date) return;
//     addBooking(booking);
//     setBooking({ name: "", room: "", date: "" });
//   };

//   return (
//     <form className="booking-form" onSubmit={handleSubmit}>
//       <input type="text" name="name" placeholder="Guest Name" value={booking.name} onChange={handleChange} required />
//       <input type="number" name="room" placeholder="Room Number" value={booking.room} onChange={handleChange} required />
//       <input type="date" name="date" value={booking.date} onChange={handleChange} required />
//       <button type="submit">Add Booking</button>
//     </form>
//   );
// };

// export default BookingForm;



// import React, { useState } from "react";

// const RoomForm = ({ addRoom }) => {
//   const [room, setRoom] = useState({ number: "", type: "Standard", price: "", status: "Available" });

//   const handleChange = (e) => {
//     setRoom({ ...room, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!room.number || !room.price) return;
//     addRoom(room);
//     setRoom({ number: "", type: "Standard", price: "", status: "Available" });
//   };

//   return (
//     <form className="room-form" onSubmit={handleSubmit}>
//       <input type="number" name="number" placeholder="Room Number" value={room.number} onChange={handleChange} required />
//       <select name="type" value={room.type} onChange={handleChange}>
//         <option value="Standard">Standard</option>
//         <option value="Deluxe">Deluxe</option>
//         <option value="Suite">Suite</option>
//       </select>
//       <input type="number" name="price" placeholder="Price per night" value={room.price} onChange={handleChange} required />
//       <select name="status" value={room.status} onChange={handleChange}>
//         <option value="Available">Available</option>
//         <option value="Occupied">Occupied</option>
//       </select>
//       <button type="submit">Add Room</button>
//     </form>
//   );
// };

// export default RoomForm;



import React, { useState } from "react";

const RoomForm = ({ addRoom }) => {
  const [room, setRoom] = useState({ number: "", type: "Standard", price: "", status: "Available" });

  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!room.number || !room.price) return;
    addRoom(room);
    setRoom({ number: "", type: "Standard", price: "", status: "Available" });
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
      <button type="submit">Add Room</button>
    </form>
  );
};

export default RoomForm;
