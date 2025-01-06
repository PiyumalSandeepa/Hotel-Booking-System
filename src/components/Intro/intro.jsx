import React from "react";
import "./Intro.css";
import intro1 from "../../assets/pool.jpg";
import intro2 from "../../assets/bedroom.jpg";
import logo1 from "../../assets/logo1.png";

const intro = () => {
  return (
    <div className="container">
      <div className="content">
          <div className="image-section2">
            <img src={intro2} alt="Image of Bedroom" />
          </div>
        <div className="text-section">
          <div className="Text1">Where Luxury Meets Nature...</div>
          <h2>Experience Unparalleled Relaxation at Blue Sapphire</h2>
          

          <p>
          
          Welcome to Blue Sapphire Luxury Hotel, where you can relax and enjoy excellent service in a beautiful and comfortable setting.             
            With modern rooms, top-quality amenities, and friendly service,
             it’s designed to make your stay relaxing and enjoyable. Whether 
             you’re here for business or leisure, you’ll find everything you need for a memorable experience.
          </p>
        </div>
        <div className="image-section1">
          <img src={intro1} alt="Image of Pool With Palm trees" />
        </div>
      </div>
    </div>
  );
};

export default intro;
