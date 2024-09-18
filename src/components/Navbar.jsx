import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import kfclogo from "../assets/kfclogo.jpg";
import sigin from "../assets/signinicon.jpg";
import bucket from "../assets/bucket.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
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
        <div className="col-4 menubar"><FontAwesomeIcon icon={faBars} /></div>
        <div className="col-4 logo">
          <Link to="/">
            <img src={kfclogo} className="kfclogo-mob" alt="kfclogo" />
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
    </div>
  );
}

export default Navbar;
