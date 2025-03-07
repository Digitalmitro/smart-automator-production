import React, { useEffect, useState } from "react";
import CardNumber from "../../assets/Vector.png";

import { jwtDecode } from "jwt-decode";
import { message } from "antd";
import profilePhoto from "../../assets/profile1.png"
import Cookies from "js-cookie";
import "./styles/ConfirmDetails.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { SvgRepo } from "../../components/SvgRepo/SvgRepo";

function ConfirmDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState();
  const [cardNumber, setCardNumber] = useState("");
  const [cardDetails, setCardDetails] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("creditCard");
  const token = Cookies.get("token");
  const decodedToken = token && jwtDecode(token);
  const user = decodedToken?.firstName + " " +  decodedToken?.lastName;
  const userId = decodedToken?._id;

  const storageData = JSON.parse(localStorage.getItem("DateAndTime"));
  const serviceDetailsStorage = JSON.parse(
    localStorage.getItem("serviceDetails")
  );

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleServiceDetails = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SOME_KEY}/service/${id}`
      );
      setData(response.data);
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
        orderTime: moment().format(" h:mm:ss a"),
        orderDate: moment().format("MMMM Do YYYY"),
        serviceCategory: data.serviceCategory,
        taskerName: data.userName,
        userName: user,
        user_id: userId,
        _id: data._id.toString(),
        vehicle: data.vehicle,
        paymentMethod: selectedPaymentMethod, // Include the selected payment method
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
      message.success(response.data);
      setTimeout(() => {
        navigate(`/services/${id}`);
      }, 1200);
    } catch (error) {
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
    <div className="confirmDetails container d-flex justify-content-around   m-auto">
    <div className="container border rounded p-5 mt-3">
      <div className="confirmForm">
        <div className="paymentMethod">
          <h5>Payment Method</h5>

          {/* Payment method selection */}
          <div className="d-flex gap-3 mb-3">
            <button
              className={`btn ${
                selectedPaymentMethod === "creditCard" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => handlePaymentMethodChange("creditCard")}
            >
              {/* <span>{SvgRepo.card}</span> */}
              <img src={CardNumber} alt="Credit Card" style={{ width: "20px", marginRight: "8px" }} />
              Credit Card
            </button>

            <button
              className={`btn ${
                selectedPaymentMethod === "paypal" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => handlePaymentMethodChange("paypal")}
            >
                 <span>{SvgRepo.paypal}</span>
              PayPal
            </button>

            <button
              className={`btn ${
                selectedPaymentMethod === "wallet" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => handlePaymentMethodChange("wallet")}
            >
              <span>{SvgRepo.wallet}</span>
              Wallet
            </button>
          </div>

          {/* Conditional input for Credit Card */}
          {selectedPaymentMethod === "creditCard" && (
            <div className="cardNumber d-flex justify-content-around border p-3">
              <div className="d-flex gap-3">
                <img src={CardNumber} alt="Credit Card Icon" />
                <input
                  type="number"
                  placeholder="Card Number"
                  required
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <input
                type="number"
                placeholder="MM/YY/CVC"
                required
                value={cardDetails}
                onChange={(e) => setCardDetails(e.target.value)}
              />
            </div>
          )}

          {/* Info about payment */}
          <p>Do you have a promo code?</p>
          <br />
        </div>

        <div className="learn-more px-3">
          {/* Your existing code remains unchanged */}
          <button
            type="button"
            onClick={() => navigate(`/confirmandchat/${id}`)}
            style={{
              // backgroundColor: isFormValid ? "#F9AC25" : "#C8C8C8",
              borderRadius: "20px",
              width: "30%",
              color: isFormValid ? "white" : "black",
              border: "none",
            }}
            // disabled={!isFormValid}
            className="m-2 p-2"
          >
            Confirm and Chat
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ConfirmDetails;
