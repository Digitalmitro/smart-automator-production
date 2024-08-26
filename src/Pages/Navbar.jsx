import { useNavigate } from "react-router-dom";
import logo from "../assets/logo 1.png";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './navbar.css';
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const decodedToken = token && jwtDecode(token);
  const user = decodedToken?.email;

  AOS.init(); 

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  const handelLogout = () => {
    Cookies.remove("token");
    window.location.href = "/login";
  };

  return (
    <div className="navbarContainer">
      <div className="container-fluid top-header">
        <p style={{ fontSize: "12px" }}>
          <i className="fa-solid fa-location-dot"></i> 12880 SW Scholls Ferry Rd
          Tigard, OR 97223
        </p>
        <div className="icon">
          <i className="fa-brands fa-x-twitter"></i>{" "}
          <i className="fa-brands fa-facebook"></i>{" "}
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-pinterest"></i>
        </div>
      </div>

      <header>
        <div className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
          <nav className={`navbar navbar-expand-lg ${scrolled ? 'navbar-scrolled' : ''}`}>
            {/* Logo Section */}
            <a className="navbar-brand" style={{ cursor: "pointer" }}>
              <img
                onClick={() => navigate("/")}
                style={{ width: "80px", height: "60px" }}
                src={logo}
                alt="Logo"
              />
            </a>

            {/* Mobile View Menu Toggle Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu Items */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav main-nav">
                <li className="nav-item">
                  <a
                    style={{ cursor: "pointer" }}
                    className="nav-link active"
                    aria-current="page"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ cursor: "pointer" }}
                    className="nav-link"
                    onClick={() => navigate("/Servicedetails")}
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    System Funnels
                  </a>
                </li>
                {!decodedToken ? (
                  <li className="nav-item">
                    <a
                      style={{ cursor: "pointer" }}
                      className="nav-link"
                      onClick={() => navigate("/login")}
                    >
                      Sign Up/Log in
                    </a>
                  </li>
                ) : (
                  ""
                )}
              </ul>

              {/* User Panel */}
              <div className="user-panel">
                {decodedToken ? (
                  <>
                    <i
                      onClick={() => navigate("/profile")}
                      className="fa-solid fa-user"
                    ></i>
                    <i
                      onClick={handelLogout}
                      className="fa-solid fa-right-from-bracket"
                    ></i>
                  </>
                ) : (
                  ""
                )}

                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Become a Tasker</span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
