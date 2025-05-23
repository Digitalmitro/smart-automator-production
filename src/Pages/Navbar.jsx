import { useNavigate } from "react-router-dom";
import logo from "../assets/logo 1.png";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles/Navbar.scss";
import { useEffect, useState } from "react";
import { svg } from "./Svg";
import { LogoutModal } from "./modals/Logoutmodals";
import Tooltip from "@mui/material/Tooltip";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const [showLogoutModal, setShowLogoutModal] = useState(false);

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
    window.scrollTo(0,0)
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handelLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const openLogoutModal = () => {
    setShowLogoutModal(true); // Show modal when logout button is clicked
  };

  const closeLogoutModal = () => {
    setShowLogoutModal(false); // Hide modal
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
        <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
          <nav
            className={`navbar navbar-expand-lg ${scrolled ? "navbar-scrolled" : ""
              }`}
          >
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
              className="navbar-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="n
              
              
              avbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="">{svg.menubar}</span>
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
                    onClick={() => navigate("/aboutus")}
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ cursor: "pointer" }}
                    className="nav-link"
                    onClick={() => navigate("/services")}
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ cursor: "pointer" }}
                  >
                    Plans
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("/pricing-plans")}
                      >
                        Pricing Plans
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("/maintenance-plans")}
                      >
                        Maintenance and Support Plans
                      </a>
                    </li>
                  </ul>
                </li>
                {!token ? (
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
              <div className="user-panel" style={{ width: "", height: "" }}>
                {token ? (
                  <>
                    <Tooltip title="Profile" style={{ cursor: "pointer" }}>
                      <i
                        onClick={() => navigate("/profile")}
                        className="fa-solid fa-user"
                      ></i>
                    </Tooltip>
                    <Tooltip title="Logout">
                      <li className="nav-item">
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={openLogoutModal}
                        >Logout</a>
                      </li>
                    </Tooltip>
                  </>
                ) : (
                  ""
                )}

                {/* <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text" onClick={() => navigate('/Tasker')}>Become a Tasker</span>
                </button> */}
              </div>
            </div>
          </nav>
        </div>
      </header>
      <LogoutModal
        handelLogout={handelLogout}
        closeLogoutModal={closeLogoutModal}
        showLogoutModal={showLogoutModal}
      />
    </div>
  );
};

export default Navbar;
