import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
function Header(params) {
    return (
        <Conatiner as="header" className="header">
             <div className="container-fluid headpart1">
                    <div className="headloc">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Allow location access for local store menu and promos</span>
                        <button className="location">Set Location</button>
                    </div>
             </div>
            <Navbar />
            
        </Conatiner>
    )
}
const Conatiner = styled.div`

    position: sticky;
    width: 100%;
    top: 0;
    z-index: 101111;
    background: #ffffff;

.headpart1{
    padding: 8px;
    border-bottom:solid 1px rgb(241, 228, 228) ;
}


.headloc{
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: small;
    font-weight: 600;
    margin-top: 9px;
    justify-content: center;
}
.headloc .location{
    padding: 6px 32px;
    border-radius: 30px;
    background-color: black;
    color: #ffffff;
    font-weight: bold;
    border: none;
    font-size: 12px;
}
.headloc svg{
    color: red;
    font-size: 15px;
}
@media only screen and (max-width:600px){
    .headloc .location{
        padding: 4px 31px; 
        font-size: 8px;
    }
    
}

`;
export default Header;