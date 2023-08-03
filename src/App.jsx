import React from "react";
import "./index.css"
import Navbar from "./Navbar";
import FirstPage from "./FirstPage";
import TechS from "./TechS";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";


function App(){
    return(
        <div>
            <Navbar />
            <FirstPage />
            <TechS />
            <About/>
            <Projects />
            <Footer />

            
        </div>
    )
}

export default  App