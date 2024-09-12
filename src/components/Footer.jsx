import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="footer-logo">
                                <img src={""} alt="" className="img-fluid" />
                            </div>  
                        </div>

                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="footer-title">
                                <h5>Company</h5>
                            </div>
                            <div className="footer-links">
                                <ul>
                                    <li><Link>About Us</Link></li>
                                    <li><Link>Our Team</Link></li>  
                                    <li><Link>Careers</Link></li>
                                    <li><Link>News</Link></li>
                                    <li><Link>Media</Link></li>
                                </ul>   
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="footer-title">
                                <h5>Support</h5>
                            </div>
                            <div className="footer-links">
                                <ul>
                                    <li><Link>FAQs</Link></li>
                                    <li><Link>Help</Link></li>  
                                    <li><Link>Shipping</Link></li>
                                    <li><Link>Returns</Link></li>
                                    <li><Link>Terms & Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="footer-title">
                                <h5>Contact Us</h5>
                            </div>
                            <div className="footer-links">
                                <ul>
                                    <li><Link>Call Us</Link></li>
                                    <li><Link>Chat with Us</Link></li>  
                                    <li><Link>Mail Us</Link></li>
                                    <li><Link>Address</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;