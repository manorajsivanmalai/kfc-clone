import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
function CurrentLocation(params) {
    return (
           <Container >
                <div className="container-fluid homepart1">
                    <div className="homeloc">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>KFC | Order KFC Chicken Online & Find Restaurants</span>
                        <button className="homelocation">change</button>
                    </div>
                </div>
             </Container>
    )
}
const Container = styled.div`
.homepart1{
    padding: 15px;
    background-color: black;
    color: #ffff;
}
    
.homeloc svg{
    color: red;
    font-size: 17px;
}
.homeloc{
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: small;
    font-weight: 600;
    margin-top: 9px;
    justify-content: center;
   
}
.homeloc .homelocation{
    padding: 6px 32px;
    border-radius: 30px;
    background-color: black;
    color: #ffffff;
    font-weight: bold;
   
    font-size: 12px;
    border: solid 1px rgb(241, 228, 228) ;
}
    @media only screen and (max-width:600px){
        .homeloc .homelocation{
            padding: 4px 31px; 
            font-size: 11px;
        }
}
`;  
export default CurrentLocation;