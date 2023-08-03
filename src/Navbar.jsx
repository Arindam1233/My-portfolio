import React from "react";
import "./index.css"


function Navbar(){
 return( <div id="Nav">
      <h6>Arindam</h6>
      <ol id="navbar">
         <li><a href="/"><span id="spanid">Home</span></a></li>
         <li><a href="#About">About</a></li>
         <li><a href="#Project">Projects</a></li>
         <li><a href="#footer1">Contact</a></li>
         
      </ol>
  </div>)
}
export default Navbar;