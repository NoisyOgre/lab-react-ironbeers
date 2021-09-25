import React from "react";
import { NavLink } from "react-router-dom";
import House from "./assets/home_i.png";

function Header() {
return(
    <div className="header">
        <NavLink exact to="/">
            <img  className="house"src={House} alt="house"/>
        </NavLink>

    </div>
)

};
export default Header;