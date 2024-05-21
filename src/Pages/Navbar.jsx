import { useNavigate } from "react-router-dom";
import logo from "../assets/logo 1.png"
const Navbar = () => {
    const navigate=useNavigate()
    return (
        <>
            <div className="container-fluid top-header">
                <p>
                    <i className="fa-solid fa-location-dot"></i> 12880 SW Scholls Ferry Rd Tigard, OR 97223
                </p>
                <p>
                    <i className="fa-solid fa-envelope"></i> info@GreatGreekMediterraneanGrill.com
                </p>
                <div className="icon">
                    <i class="fa-brands fa-x-twitter"></i>{" "}
                    <i className="fa-brands fa-facebook"></i>{" "}
                    <i className="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-pinterest"></i>
                </div>

            </div>

            <header>
            <div className="container">
                <nav class="navbar navbar-expand-lg ">
                   
                        <a class="navbar-brand" href="#"><img src={logo}/></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul class="navbar-nav main-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" onClick={()=>navigate("/")}>Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" onClick={()=>navigate("/services")}>Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">System Funnels</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" onClick={()=>navigate("/login")}>Sign Up/Log in</a>
                                </li>
                            </ul>
                            <a onClick={()=>navigate("/Tasker")} class="btn btn-primary headerbtn">Become a Tasker </a>
                            <div className="user-pannel">
                            <i class="fa-regular fa-heart"></i>
                            <i onClick={()=>navigate("/profile")} class="fa-solid fa-user"></i>
                            </div>
                        </div>
                  
                </nav>
            </div>
        </header>



        </>
    )

}

export default Navbar;
