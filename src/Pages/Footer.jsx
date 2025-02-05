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
                                <p style={{ lineHeight: "30px", fontWeight: 300 }}>Amet minim mollit non deserunt ullamc est sit aliqua dolor  amet sint.
                                    Amet minim mollit non deserunt ullamco est sit aliqua.</p>

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
                                    <li><a href="">Chicken Tinga nachos</a></li>
                                    <li><a href="">Pork chops</a></li>
                                    <li><a href="">Wraps</a></li>
                                    <li><a href="/terms-of-service">Terms Of Service</a></li>
                                    <li><a href="/privacy-policy">privacy privacy</a></li>
                                </ul>
                            </div>

                            <div className="col-md-3">
                                <h4>Useful Links</h4>
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
                                    <li> <i class="fa-solid fa-phone"></i> <span style={{ marginLeft: "7px" }}>+1 405 638-5343</span></li>
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