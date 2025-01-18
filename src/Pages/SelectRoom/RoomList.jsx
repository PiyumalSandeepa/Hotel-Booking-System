import React from 'react';
import RoomCard from './RoomCard'; // Import RoomCard component

function RoomList() {
  // Sample room data
  const rooms = [
    {
      name: 'Deluxe Suite',
      description: 'A spacious suite with a king-size bed and a stunning city view.',
      price: 200,
      image: 'https://via.placeholder.com/300x200?text=Deluxe+Suite',
      amenities: ['King-size bed', 'Free Wi-Fi', 'Ocean view', 'Mini bar', '24/7 room service'],
    },
    {
      name: 'Standard Room',
      description: 'A comfortable room with a queen-size bed and basic amenities.',
      price: 120,
      image: 'https://via.placeholder.com/300x200?text=Standard+Room',
      amenities: ['Queen-size bed', 'Free Wi-Fi', 'TV', 'Mini fridge'],
    },
    {
      name: 'Family Room',
      description: 'A large room with two double beds, perfect for families.',
      price: 180,
      image: 'https://via.placeholder.com/300x200?text=Family+Room',
      amenities: ['Two double beds', 'Free Wi-Fi', 'TV', 'Mini fridge', 'Family-friendly'],
    },
  ];

  return (
    <div className="room-list">
      {rooms.map((room, index) => (
        <RoomCard key={index} room={room} />
      ))}
    </div>
  );
}

export default RoomList;
