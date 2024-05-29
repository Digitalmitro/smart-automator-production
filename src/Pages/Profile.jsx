import { useEffect } from "react";
import profile from "../assets/profile1.png";
import VerticalTabs from "../components/Tabs";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
const Profile = () => {
    const navigate = useNavigate();
    const token = Cookies.get("token");
    useEffect(() => {
        if (token) {
         
        } else {
          return navigate("/login");
        }
      }, [token]);
    return (
        <>

            <section style={{ backgroundColor: "#f9ac25", marginTop: "10px", marginBottom: "50px", padding: "40px 10px" }}>

                <div className="container">
                    <div className="row" style={{}}>

                        <div className="col-img" style={{ width: "10%" }}>
                            <img src={profile} />
                        </div>
                        <div className="col-md-6">

                            <h2 style={{ fontSize: "35px", color: "#fff" }}>Sam William</h2>
                            <ul style={{ display: "flex", gap: "25px", marginTop: "20px", color: "#fff", paddingLeft: "0px" }}>
                                <li>3256965486</li><li>samwilliam@214gmail.com</li>
                            </ul>
                        </div>

                        <div className="col-md-4 d-flex" style={{gap:"20px"}}>
                            <button  className="btn-type-4" type="button" style={{ marginRight: "15px",width:"400px",height:"55px",fontSize:"13px" }}>CHANGE PASSWORD</button>

                            <button className="btn-type-4" type="button" style={{width:"350px",height:"55px",fontSize:"13px" }}>EDIT PROFILE</button>

                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="profile">
                    <VerticalTabs />



                </div>



            </section>


        </>
    )
}
export default Profile;