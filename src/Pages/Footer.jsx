import { Link } from "react-router-dom";
import logo from "../assets/logo 1.png";
const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-bg" style={{ width: "100%", padding: "70px 50px", backgroundColor: "#121212", color: "#fff" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={logo} />
                                <p style={{ lineHeight: "30px", fontWeight: 300 }}>Smart automation solutions for a seamless, secure, and connected home. Upgrade your lifestyle
                                    today!</p>

                                <div className="social" style={{ display: "flex", gap: "40px", fontSize: "20px" }}>
                                    <a href="https://www.facebook.com/smartautomator/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                    <a href="https://www.instagram.com/smartautomator/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/smart-automator/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a href="https://www.pinterest.com/smartautomator/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-pinterest"></i>
                                    </a>
                                </div>

                            </div>

                            <div className="col-md-3">
                                <h4>Services</h4>
                                <hr style={{ width: "50%", color: "#F9AC25" }} />
                                <ul className="footer-nav">
                                    <li><a href="/customized-solutions">Customize Solutions</a></li>
                                    <li><a href="/smart-home-essentials">Smart Home Essentials</a></li>
                                    <li><a href="/maintenance-plans">Maintenance & Support</a></li>
                                    <li><a href="/terms-of-service">Terms Of Service</a></li>
                                    <li><a href="/privacy-policy">privacy privacy</a></li>
                                </ul>
                            </div>

                            <div className="col-md-3">
                                <h4>Quick Links</h4>
                                <hr style={{ width: "50%", color: "#F9AC25" }} />
                                <ul className="footer-nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/aboutus">About Us</Link></li>
                                    <li><Link to="/PortfolioGallery">Gallery</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/faq" style={{ color: "white" }}>FAQ</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>

                            <div className="col-md-3">
                                <h4>Contact</h4>
                                <hr style={{ width: "50%", color: "#F9AC25" }} />
                                <ul>
                                    <li> <i class="fa-solid fa-phone"></i> <span style={{ marginLeft: "7px" }}>405 638-5343</span></li>
                                    <li><i class="fa-regular fa-envelope"></i>irvinmason@hotmail.com</li>
                                    {/* <li><i class="fa-solid fa-location-dot"></i>2919 nW Cache rd, lawton, oK 73505,
                                        United States</li> */}
                                </ul>
                            </div>
                        </div>
                        <p style={{ textAlign: "center", color: "#fff", fontSize: "14px", padding: "10px 0" }}>
                            Copyright by <strong>Great Greek Mediterranean Grill</strong> © 2025. All rights reserved.
                            <br />
                            Designed & Developed by <strong>Digital Mitro</strong> 
                        </p>

                    </div>


                </div>
            </footer>
        </>
    )
}
export default Footer;