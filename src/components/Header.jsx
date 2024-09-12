import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";
function Header(params) {
    return (
        <div>
             <div className="container-fluid headpart1">
                    <div className="headloc">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Allow location access for local store menu and promos</span>
                        <button className="location">Set Location</button>
                    </div>
             </div>
            <Navbar />
        </div>
    )
}

export default Header;