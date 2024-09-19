import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import kfclogo from "../assets/kfclogo.jpg";
import sigin from "../assets/signinicon.jpg";
import bucket from "../assets/bucket.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import RedBar from "./RedBar";
import MenuIcon from "./MenuIcon";

function Navbar() {
  const [iconchange, seticonchange] = useState(true);
  return (
    <div className="container-fluid ">
      <div className="row pt-4 pb-3 desktop">
        <div className="col-lg-6">
          <ul className="headmenus">
            <Link to="/">
              <img src={kfclogo} alt="kfclogo" />
            </Link>
            <Link to="/menu">Menu</Link>
            <Link to="/deal">Deals</Link>
          </ul>
        </div>
        <div className="col-lg-6">
          <ul className="headicons">
            <Link to="/" className="signin">
              <img src={sigin} alt="sigin" />
              <span>Sign In</span>
            </Link>

            <Link to="/" className="bucket">
              <span>0$</span>
              <img src={bucket} alt="bucket" />
            </Link>
          </ul>
        </div>
      </div>
      <div className="mobile">
      <div className="row">     
        <div className="col-4 menubar"><Link onClick={(e)=>seticonchange(!iconchange)}> 
        {iconchange?<FontAwesomeIcon icon={faBars} />:
          <FontAwesomeIcon icon={faXmark} />}
        </Link></div>
        <div className="col-4 logo">
          <Link to="/">
           {!iconchange?<RedBar  hgt="25px" wdt="8px" spc="10px" clr="red" />
           : <img src={kfclogo} className="kfclogo-mob" alt="kfclogo" />}  
          </Link>
        </div>
        <div className="col-4" style={{"textAlign": "end"}}>
          <Link to="/" className="bucket">
            <span>0$</span>
            <img src={bucket} alt="bucket" />
          </Link>
        </div>
      </div>
      </div>
      {!iconchange && <MenuIcon />}
    </div>
  );
}

export default Navbar;
