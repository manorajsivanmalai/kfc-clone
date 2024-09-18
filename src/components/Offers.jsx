import React from "react";
import RedBar from "./RedBar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import off1 from "../assets/offers/ADDCHK99.jpg";
import off2 from "../assets/offers/CHKZINGER.jpg";
import off3 from "../assets/offers/BIGSAVE.jpg";
import off4 from "../assets/offers/VEGZINGER.jpg";
// import off from "../assets/offers/signin.jpg";
import { useState } from "react";
import Slider from "react-slick";

function Offers(params) {
  const [isMobile, setIsMobile] = useState(window.innerWidth);
      var offers = [
      
        {
          img: off1,
          text: "1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users.",
        },
        {
            img: off2,
            text: "Upto Rs 100 off on min cart value of Rs 699 or more . Applicable on 4th order onwards for signed in user..",
          },
          {
            img: off3,
            text: "Add 2 Pc Hot n Crispy Chicken at just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd order for signed",
          },
          {
            img: off4, 
            text: "1 Pc free Veg Zinger on a cart value of Rs.499 or above on first order. Only for registered users",
          },
        
      ]
      window.addEventListener("resize", () => {
        setIsMobile(window.innerWidth);
      })
  
      const settings = {
        dots: false,
        infinite: false,
        className: "center",
        centerMode: isMobile <= 600 ? true : false,
        centerPadding: "60px",  
        speed: 500,
        slidesToShow: 4, // Show 2 items per row
        slidesToScroll: 4, // Scroll 2 items at a time
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (    
        <Container className="container-fluid off-main">
          <div className="container offers">
          <div className="bar">
                <RedBar hgt="25px" wdt="8px" spc="10px" clr="red"/>
           </div>
        <div className="offer-title">
             <div>
                <h5 className="text-uppercase">Exclusive Offers for you</h5>
                <Link to="/deal">View All Deals</Link>
             </div>
    
        </div>
        <Slider {...settings} className="row">
            {
                offers.map((offer,j) => {
                    return (
                       
                          <Card img={offer.img} title={offer.text} text={offer.text} key={j} />
                        
                    );
                })
            }
        
        </Slider>
          </div>
        </Container>
    );

}
const Container = styled.div`

 background-color: #202124;
 
.bar{
   width:50px;
}
.offer-title{
padding: 42px 0px;}


.offer-title div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  color: white;
  
}
  .offer-title a{
    color: white;
  }
  @media only screen and (max-width: 768px) {
  
  .offer-title div{
   flex-direction: column;
  }
.slick-prev, .slick-next{
    width:60px ;
  }
  .offers{
   overflow: hidden;
  }
  }


`;
export default Offers;