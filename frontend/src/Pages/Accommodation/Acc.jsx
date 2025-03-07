import React from "react";
import Accommodation from "./Accommodation";
import "./acc_Hero.css";

function Acc(){
    return(
        <> 
        <div className='caption'>
          <h1>Select Your Room</h1>
          <p> Scrolldown for Experience luxury and comfort like never before.</p>
        </div>
        <div className="acc_hero"></div>       
        <Accommodation/>
        </>
    )
}
export default Acc;