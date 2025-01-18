import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Check from "../../components/Check/Check";
import Intro from "./Intro";
import Footer from "../../components/Footer/Footer";
function Home(){
    return(
        <>
       
        <Hero />
        <Check />
        <Intro/>
        
        </>

    )
}
export default Home;