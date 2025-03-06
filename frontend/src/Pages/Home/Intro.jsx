import React from "react";
import "./Intro.css";
import intro1 from "../../assets/pool.jpg";
import intro2 from "../../assets/bedroom.jpg";
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import gallery5 from "../../assets/gallery5.jpg";
import gallery6 from "../../assets/gallery6.jpg";

const Intro = () => {
  return (
    <>
    <div className="container">
      <div className="content">
          <div className="image-section2">
            <img src={intro2} alt="Image of Bedroom" />
          </div>
        <div className="text-section">
          <div className="Text1"><h1>Where Luxury Meets Nature...</h1></div>
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

    <div className="container2">
      <div className="content2">
        <div className="Text1">
          <h1>GALLERY</h1>
        </div>
        <div className="gallerylist">
          <img src={gallery1} alt="Image of Dining Room"></img>
          <img src={gallery2} alt="Image of Dining Room"></img>
          <img src={gallery3} alt="Image of Dining Room"></img>
          <img src={gallery4} alt="Image of Dining Room"></img>
          <img src={gallery5} alt="Image of Dining Room"></img>
          <img src={gallery6} alt="Image of Dining Room"></img>
        </div>
        


      </div>
    </div>
    </>
  );
};

export default Intro;