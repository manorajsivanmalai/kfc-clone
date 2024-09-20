import React from "react";
import RedBar from "../components/RedBar";
import BannerCorousel from "../components/BannerCorousel";
import Categories from "../components/Categories";
import Offers from "../components/Offers";
import CurrentLocation from "../components/CurrentLocation";
import styled from "styled-components";
function Home() {
    return(
        <Container>
                <CurrentLocation />
                <div>
                    <RedBar hgt="25px" wdt="8px" spc="10px" clr="red"/>
                    <div className="d-grid justify-content-center">
                        <h5 className="text-center pt-4 pb-4 text-uppercase fonts">Select your order type to start</h5>
                        <div className="homeorders fonts">
                            <button className="active">DELEVERY</button>
                            <button>PICK UP</button>
                            <button>DINE IN</button>
                        </div>
                    </div>

                </div>
                <div className="w-100 overflow-hidden pt-4">
                     <BannerCorousel />
                </div>
                <div className="container">
                    <div className="browse-categories">
                        <h4>browse categories</h4>
                        <div></div>
                    </div>
                </div>
                <div>
                    <Categories />
                </div>
                <div>
                    <Offers />
                </div>
             

        </Container>

    );
}

const Container = styled.div`

.homeorders{
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: small;
    font-weight: 600;
    margin-top: 9px;
    justify-content: space-between;
    background-color: #e3e3e3;
    border: 1px solid #e3e3e3;
    width: 404px;
    padding: 1px 2px;
    border-radius: 100px;
}

    

.homeorders button{ 
    padding: 11px 35px;
    background-color: #e3e3e3;
    border: 1px solid #e3e3e3; 
    border-radius: 32px;
    color: black;
    font-weight: bold;
}
.active{
    color: white !important;
    background-color: red !important;
}
.browse-categories{
     height: 150px;
     display: flex;
     align-items: center;
}
.browse-categories h4   {
    font-size: 28px;
    font-weight: bold;
    text-transform: uppercase;
   
}
.browse-categories div{
    height: 2px;
    background-color: #dabcbc;
    width: 71%;
    margin-left: 78px;
}

@media only screen and (max-width:600px){

    .fonts{
     font-size: 16px;
    font-weight: 600;
    letter-spacing: 0px;
    font-family: fantasy;
    }
    .homeorders button{
        padding: 11px 26px;
    }
    .homeorders{
        width: 360px;
    }
    .browse-categories div{
        height: 2px;
        background-color: #dabcbc;
        width: 50%;
        margin-left: 20px;
    }

    .browse-categories h4   {
        font-size: 15px;
    }
    .browse-categories{
        height: 100px;
       
   }
}
`;
export default Home;