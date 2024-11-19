import React, { useEffect, useState } from "react";
import CardNumber from "../../assets/Vector.png";
import Logo from "../../assets/logo 1.png";
import dayLogo from "../../assets/uis_calender.png";
import LoactionLogo from "../../assets/location.png";
import timeLogo from "../../assets/Group.png";
import { jwtDecode } from "jwt-decode";
import { message } from "antd";
import profilePhoto from "../../assets/profile1.png"
import Cookies from "js-cookie";
import "./styles/ConfirmDetails.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

function ConfirmDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState();
  const [cardNumber, setCardNumber] = useState("");
  const [cardDetails, setCardDetails] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const token = Cookies.get("token");
  const decodedToken = token && jwtDecode(token);
  const user = decodedToken?.firstName + " " +  decodedToken?.lastName;
  const userId = decodedToken?._id;

  const storageData = JSON.parse(localStorage.getItem("DateAndTime"));
  const serviceDetailsStorage = JSON.parse(
    localStorage.getItem("serviceDetails")
  );

//   -------------   new code   >>>>>>>>>>>>>>> 


// <<<<<<<<<<<<< new Code ----------------------   



  console.log("decodedToken", decodedToken)
  const handleServiceDetails = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SOME_KEY}/service/${id}`
      );
      setData(response.data);
      console.log("res", response.data);
    } catch (error) {
      console.log(error);
    }

  };

  const handleOrder = async () => {

    if (!data) {
      console.error("No service data available");
      return;
    }
    
    try {
      const payload = {
        description: data?.description,
        image: data.image,
        location: data.location,
        phone: data.phone,
        pricePerHour: data.pricePerHour,
        review: data.review,
        orderTime: moment().format(' h:mm:ss a'),
        orderDate: moment().format('MMMM Do YYYY'),
        serviceCategory: data.serviceCategory,
        taskerName: data.userName,
        userName: user,
        user_id: userId,
        _id: data._id.toString(),
        vehicle: data.vehicle
      };

      const totalTaskPayload = {
        totaltask: data.totaltask + 1,
      };
      await axios.put(
        `${import.meta.env.VITE_SOME_KEY}/service/${id}`,
        totalTaskPayload
      );

      const response = await axios.post(
        `${import.meta.env.VITE_SOME_KEY}/order`,
        payload
      );
      console.log("order response", response);
      message.success(response.data);
      setTimeout(() => {
        navigate(`/services/${id}`);
      }, 1200);
    } catch (error) {
      // message.warning(error.response.data.status, {});
      console.log(error);
    }
  };

  useEffect(() => {
    handleServiceDetails();
  }, []);
  useEffect(() => {
    // Check if all required fields are filled
    if (cardNumber && cardDetails) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [cardNumber, cardDetails]);

  return (
    <div class=" confirmDetails container  d-flex justify-content-around  m-auto ">
      <div class=" container border  rounded p-5 mt-3">
       <div className="confirmForm">
       <div class="frequency">
          <h6 className="pb-3" onClick={()=> navigate('/services')}> ---Back</h6>
          <h3>Confirm Details</h3>
          <h5>Select a frequency</h5>
          <p>
            Save time and money by setting up a repeat cleaning with your Tasker
          </p>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Just Once
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Weekly
            </label>
            <p style={{ color: "#FFC72C" }}>save 15%</p>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Every 2 weeks
            </label>
            <p style={{ color: "#FFC72C" }}>Save 10% - MOST POPULAR</p>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Every 4 weeks
            </label>
            <p style={{ color: "#FFC72C" }}>save 5%</p>
          </div>
          <div class=" lineBorder border border-2  my-4"></div>
        </div>
        <div class="desc">
          <h5>Your task details</h5>
          <textarea
            class="p-2 "
            style={{ borderRadius: "10px" }}
            type="text"
            placeholder="Description"
            cols="30"
            rows="6"
            maxlength="500"
          />
        </div>
      
        <div class="paymentMethod">
          <h5>Payment Method</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <div class="cardNumber d-flex justify-content-around border p-3 ">
            <div class="d-flex gap-3">
              <img src={CardNumber} alt="img..." />
              <input type="number" placeholder="Card Number" required
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)} />
            </div>
            <input type="number" placeholder="MM/YY/CVC" required
              value={cardDetails}
              onChange={(e) => setCardDetails(e.target.value)} />
          </div>
          <p >Do you have a promo Code ? </p>
          <br />
        </div>

        <div className="learn-more px-3">
          <p>
            Join us in helping our neighbors in need find work and a place to
            call home
          </p>
          <h5 style={{ color: "#F9AC25" }}> Learn More</h5>
          <br />
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Donate $1 to Smart Automator for good
            </label>
          </div>
          <button
            type="button"
            onClick={() => navigate(`/confirmandchat/${id}`)}
            style={{
              backgroundColor: isFormValid ? "#F9AC25" : "#C8C8C8", 
              borderRadius: "20px",
              width: "30%",
              color:  isFormValid ? "white" : "black", 
              border: "none",
            }}
            disabled={!isFormValid}
            class="m-2 p-2"
          >
            Confirm and chat{" "}
          </button>
          <br />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
          <div>
          {/* <p>
            You may see a temporary hold on your payment method in the amount of
            your Tasker’s hourly rate of $50.58. You can cancel at any time.
            Tasks cancelled less than 24hrs before the start time may be billed
            a <span style={{ color: "#FFC72C" }}>cancellation fee</span> of one
            hour. Tasks have a one hour minimum{" "}
          </p> */}
          <p>
            Please follow all public health regulations in your area.{" "}
            <span style={{ color: "#FFC72C" }}>Learn more</span>{" "}
          </p>
        </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default ConfirmDetails;
