import React from "react";
import "./dining.css"; 

const restaurants = [
  {
    name: "The Seven Seas",
    image: "https://cdn.kiwicollection.com/media/property/PR004141/ll/004141-04-Hi_LW0645_62522111_il_carpaccio_00008.jpg", 
  },
  {
    name: "Admiral’s Room",
    image: "https://inspirationsandcelebrations.net/wp-content/uploads/2019/03/Luxury-Hotel-Restaurants-with-Gorgeous-Views-Drift-Kitchen.jpg", 
  },
  {
    name: "The Dragon Boat",
    image: "https://www.foodandwine.com/thmb/PaoecZHt9nF1URfTQvbrgT8_-vs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/global-tastemakers-international-hotel-restaurants-mandarin-oriental-hong-kong-a6c433d632724430a0eca1ca3871d835.jpg", 
  },
];

export default function Restaurants() {
  return (
    <div className="restaurants-container">
      <div className="restaurant-grid">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
            <div className="restaurant-tag">RESTAURANT</div>
            <div className="restaurant-details">MORE DETAILS →</div>
          </div>
        ))}
      </div>
      <div className="restaurant-names">
        {restaurants.map((restaurant, index) => (
          <span key={index}>{restaurant.name}</span>
        ))}
      </div>
    </div>
  );
}
