import { useEffect, useState } from "react";
import profile from "../assets/profile1.png";
import VerticalTabs from "../components/Tabs";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
  const token = Cookies.get("token");
  const decodedToken = token && jwtDecode(token);
  const userId = decodedToken?._id;
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState();

  useEffect(() => {
    if (token) {
    } else {
      return navigate("/login");
    }
  }, [token]);

  // data filter by Id
  useEffect(() => {
    const handleOrderDetails = async () => {
      try {
        const Response = await axios.get(
          `${import.meta.env.VITE_SOME_KEY}/order/${userId}`
        );
        orderDetails(Response);
      } catch (error) {
        // message.warning(error.response.data.status, {});
        console.log(error);
      }
    };
    console.log(orderDetails);
  }, []);

  console.log(decodedToken);
  return (
    <>
      <section
        style={{
          backgroundColor: "#f9ac25",
          marginTop: "10px",
          marginBottom: "50px",
          padding: "40px 10px",
        }}
      >
        <div className="container">
          <div className="row" >
            <div className="col-img" style={{ width: "10%" }}>
              <img src={profile} />
            </div>
            <div className="col-md-6">
              <h2 style={{ fontSize: "35px", color: "#fff" }}>
                {decodedToken.firstName} {decodedToken.lastName}
              </h2>
              <ul
                style={{
                  display: "flex",
                  gap: "25px",
                  marginTop: "20px",
                  color: "#fff",
                  paddingLeft: "0px",
                }}
              >
                <li>{decodedToken.phone}</li>
                <li>{decodedToken.email}</li>
              </ul>
            </div>

            <div className="col-md-4 d-flex" style={{ gap: "20px" }}>
              <button
                className="btn-type-4"
                type="button"
                style={{
                  marginRight: "15px",
                  width: "400px",
                  height: "55px",
                  fontSize: "13px",
                }}
              >
                CHANGE PASSWORD
              </button>

              <button
                className="btn-type-4"
                type="button"
                style={{ width: "350px", height: "55px", fontSize: "13px" }}
              >
                EDIT PROFILE
              </button>
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
  );
};
export default Profile;
