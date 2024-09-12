import React from "react";
import Slider from "react-slick";
import banner1 from "../assets/banner/Banner-1.jpg";
import banner2 from "../assets/banner/Banner-2.jpg";
import banner3 from "../assets/banner/Banner-3.jpg";
import banner4 from "../assets/banner/Banner-4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
 function BannerCorousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1500,
  };
   
  var images=[banner1,banner2,banner3,banner4];
  return (
    <Container>
        <Slider {...settings}>
            {images.map((image)=>{
                return(
                    <div>
                    <Link><img src={image} alt="" className="img-fluid" /></Link>
                    </div>
                )
            })}
        
        </Slider>
    </Container>
  );
}
const Container = styled.div`
.slick-slide img {
    width: 100%;
    height: 600px;
}

@media only screen and (max-width: 600px) {
    .slick-slide img {
        height: 300px;
    }
}

`;
export default BannerCorousel;