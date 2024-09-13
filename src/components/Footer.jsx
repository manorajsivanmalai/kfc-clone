import { Link } from "react-router-dom";
import logo from "../assets/kfclogofooter.jpg";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
function Footer() {
  return (
    <Container as="footer">
      <div className="footer">
        <div className="container">
          <div className="row pt-2 pb-4">
            <div className={"col-lg-6  col-12 foot-flex"}>
              <div className="col-lg-3  col-12 kfc-logo">
                <div className="footer-logo">
                  <img src={logo} alt="" className="img-fluid" />
                </div>
              </div>

              <div className="col-lg-3  col-12">
                <div className="footer-title">
                  <h5>KFC India</h5>
                  <div className="angleDown-icon">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                </div>
                <div className="footer-links">
                  <ul>
                    <li>
                      <Link>About KFC</Link>
                    </li>
                    <li>
                      <Link>KFC Care</Link>
                    </li>
                    <li>
                      <Link>Careers</Link>
                    </li>
                    <li>
                      <Link>Our Golden Past</Link>
                    </li>
                    <li>
                      <Link>Responsible Disclosure</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3  col-12">
                <div className="footer-title">
                  <h5>Legal</h5>
                  <div className="angleDown-icon">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                </div>
                <div className="footer-links">
                  <ul>
                    <li>
                      <Link>Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link>Shipping</Link>
                    </li>
                    <li>
                      <Link>Disclaimer</Link>
                    </li>
                    <li>
                      <Link>Caution Notice</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3  col-12">
                <div className="footer-title">
                  <h5>KFC Food</h5>
                  <div className="angleDown-icon">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                </div>
                <div className="footer-links">
                  <ul>
                    <li>
                      <Link>Menu</Link>
                    </li>
                    <li>
                      <Link>Order Lookup</Link>
                    </li>
                    <li>
                      <Link>Gift Card</Link>
                    </li>
                    <li>
                      <Link>Nutrition & Allergen</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3  col-12">
                <div className="footer-title">
                  <h5>Support</h5>
                  <div className="angleDown-icon">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                </div>
                <div className="footer-links">
                  <ul>
                    <li>
                      <Link>Get Help</Link>
                    </li>
                    <li>
                      <Link>Contact Us</Link>
                    </li>
                    <li>
                      <Link>KFC Feedback</Link>
                    </li>
                    <li>
                      <Link>Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6  col-12 gandaicon">
              <div className="col-lg-3  col-12 find-kfc">
                <FontAwesomeIcon icon={faLocationDot} />
                <Link>Find a KFC</Link>
              </div>
              <div className="col-lg-3  col-12 find-kfc">
                <img
                  src={
                    "https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"
                  }
                  alt=""
                />
              </div>
              <div className="col-lg-3  col-12 find-kfc">
                <img
                  src={
                    "https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-12 copyright">
            <div></div>
            <p>Copyright © KFC Corporation 2024 All rights reserved</p>
            <div className="column social-div">
              <ul className="social-icons">
                <li>
                  <Link
                    className="support-links-menu"
                    target="_blank"
                    tabIndex="0"
                    data-testid=""
                    to="https://www.instagram.com/kfcindia_official/"
                  >
                    <img
                      src="//images.ctfassets.net/wtodlh47qxpt/4ZHyPA2EeaoP3aqtNDriBA/463462a9c27b0aa585e12b21ce3766e0/Social_Insta_White.svg"
                      alt="Instagram"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="support-links-menu"
                    target="_blank"
                    tabIndex="0"
                    data-testid=""
                    to="https://www.facebook.com/KFCIndia"
                  >
                    <img
                      src="//images.ctfassets.net/wtodlh47qxpt/dKiu2meLcfz2DNwsg7nZw/7194830b1ba6f25b158a23d6b2c4752c/Social_Facebook_White.svg"
                      alt="Facebook"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="support-links-menu"
                    target="_blank"
                    tabIndex="0"
                    data-testid=""
                    href="https://twitter.com/KFC_India"
                  >
                    <img
                      src="//images.ctfassets.net/wtodlh47qxpt/78z9x0WwdkdXwGVK726EKX/6599ca34ec88e2a6f46d7d94ed85a8ad/Social_Twitter_White.svg"
                      alt="Twitter"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .footer {
    background-color: #202124;
    padding: 60px 0 0 0;
  }
  .kfc-logo {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .footer-title {
  }
  .footer-title div {
    display: none;
  }
  .footer-logo img {
    width: 60px;
  }
  .footer-title h5 {
    font-weight: bold;
    font-size: 14px;
    color: #fff;
  }

  .footer-links ul li {
    margin-bottom: 4px;
    font-size: 14px;
  }
  .footer-links ul,
  a {
    list-style: none;
    padding: 0;
    color: #fff;
    text-decoration: none;
  }
  .foot-flex {
    display: flex;
  }
    .find-kfc{
     display: block !important;
     
     }
  .find-kfc a {
    color: #fff;
  }
  .find-kfc svg {
    margin-right: 10px;
    color: red;
  }
  .gandaicon {
    display: flex;
    justify-content: end;
    margin: 22px 0px;
  }
  .copyright {
    display: flex;
    justify-content: space-between;
    margin: 73px 0px 6px 0px;
  }
  .copyright p {
    text-align: center;
    color: #fff;
    font-size: 14px;
  }
  .social-icons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  .social-icons img {
    width: 30px;
  }

  @media only screen and (max-width: 1024px) {
    .foot-flex,
    .gandaicon,
    .copyright {
      flex-direction: column;
    }
    .social-icons,
    .kfc-logo {
      justify-content: center;
    }
    .footer-title div {
      display: block;
      color: #fff;
    }
    .footer-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      border-bottom: solid 1px #9e8989;
      border-top: solid 1px #9e8989;
    }
    .footer-links {
      display: none;
    }
  }
  .find-kfc {
    justify-content: center;
    display: flex ${window.innerWidth <= 600 ? "!important" : ""};
    padding: 13px 0px 0 0;
  }
  .copyright {
    margin: 10px 0px 6px 0px;
  }
  .copyright p {
    font-size: 12px;
  }
  .kfc-logo {
    padding-bottom: 20px;
  }
`;

export default Footer;
