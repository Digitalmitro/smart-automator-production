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
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-x-twitter"></i>
                                    <i class="fa-brands fa-linkedin"></i>
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
                                    <li> <i class="fa-solid fa-phone"></i> <span style={{ marginLeft: "7px" }}>+12026157235</span></li>
                                    <li><i class="fa-regular fa-envelope"></i>homeautomator@gmail.com</li>
                                    <li><i class="fa-solid fa-location-dot"></i>2919 nW Cache rd, lawton, oK 73505,
                                        United States</li>
                                </ul>
                            </div>
                        </div>
                        <p style={{ textAlign: "center", color: "#fff" }}>Copyright by  Great Greek Mediterranean grill @ 2024. All rights reserved</p>
                    </div>


                </div>
            </footer>





        </>
    )
}
export default Footer;