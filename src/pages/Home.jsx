import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import "./Home.css";
import RedBar from "../components/RedBar";
import BannerCorousel from "../components/BannerCorousel";
import Categories from "../components/Categories";
import Offers from "../components/Offers";
import Footer from "../components/Footer";
function Home() {
    return(
        <div>
                <div className="container-fluid homepart1">
                        <div className="homeloc">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>KFC | Order KFC Chicken Online & Find Restaurants</span>
                            <button className="homelocation">change</button>
                        </div>
                </div>
                <div>
                    <RedBar hgt="25px" wdt="8px" spc="10px" clr="red"/>
                    <div className="d-grid justify-content-center">
                        <h5 className="text-center pt-4 pb-4 text-uppercase">Select your order type to start</h5>
                        <div className="homeorders">
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
                <Footer/>

        </div>

    );
}

export default Home;