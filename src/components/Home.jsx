import React from "react";

import Navbar from "./Navbar";
import Teams from "./Team";
import VideoSection from "./VideoSection";
import Departments from "./Departments";
import Footer from "./Footer";

function Home(){
    return(
        <>
            <Navbar/>
            <Departments/>
            <VideoSection/>
            <Teams/>
            <Footer/>
        </>
    )
}

export default Home;