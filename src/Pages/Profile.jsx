import { useEffect, useState } from "react";
import VerticalTabs from "../components/Tabs";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";

import profile from "../assets/profile1.png";
import BannerImage from "../assets/BannerImage2.png";

const Profile = () => {
  const token = Cookies.get("token");
  const decodedToken = token && jwtDecode(token);
  const userId = decodedToken?._id;
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState();



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
  
  }, []);

  return (
    <>
      <section  >
        <img src={BannerImage} className="BannerImage" />
      </section>
      <section className="containerDetails" style={styles.containerDetails}>
        <div className="profile">

          <VerticalTabs />
        </div>
      </section>
    </>
  );
};
export default Profile;


const styles = {
  containerDetails: {
  }
}