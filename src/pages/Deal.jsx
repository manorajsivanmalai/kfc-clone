import React from 'react'
import styled from 'styled-components'
import CurrentLocation from '../components/CurrentLocation';
import Offers from '../components/Offers';
import offbanner from "../assets/offer_deals_banner.jpg"
export default function Deal() {
  return (
    <Container>
       <div>
          <CurrentLocation/>
            <div className='banner'>
                <h3>Offers</h3>
            </div>
          <Offers/>
       </div>
    </Container>
  )
}

const Container = styled.div`
.offer-title a {
     color:black;
 }
.off-main{
 background-color: #f8f7f5;
}
.offer-title div {
 color:black;
 }
.banner{
  background-image: url(${offbanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 300px;
   display: flex;
    align-items: center;
    justify-content: center;
  
}
.banner h3{
    color: #ffff;
    letter-spacing: 5px;
    font-family: auto
    font-weight: 900;
    font-size: 90px;
}    
@media only screen and (max-width: 768px) {
 .bar {
    width: 100%; 
}

}

`;