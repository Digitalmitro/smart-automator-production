import React, { useEffect, useState } from "react";
import CheckMark from "../assets/carbon_checkmark-filled.png";
import { useNavigate, useParams } from "react-router-dom";
import { useScrollTrigger } from "@mui/material";
import profilePhoto from "../assets/profile1.png"
import axios from "axios";

const OrderConfirmation = () => {
  const navigate = useNavigate()
  const [order, setOrder] = useState()
  const { id } = useParams()

  const handleServiceDetails = async () => {

    try {
      console.log("try");
      const response = await axios.get(
        `${import.meta.env.VITE_SOME_KEY}/service/${id}`
      );
      setOrder(response.data);
      console.log("res", response.data)
    } catch (error) {
      console.log(error);
    }
  };


  const navigateHistory = () => {
    localStorage.setItem('tabIndex', 2);
    navigate('/profile')
  }

  useEffect(() => {
    handleServiceDetails()
  }, [])


  return (
    <div className="rounded-circle mt-5 pt-5" style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", margin: "auto", zoom: ".8" }}>
      <img
        className="rounded-circle mt-5 "
        style={{ width: "60px", height: "60px" }}
        src={CheckMark} />
      <h2 style={{ color: "#008000" }}>Order Successfully complete !</h2>
      <div className="py-3" >
        <div className="past-order-box">

          <div className="wrap">
            <div className="burger-text">
              <h5 className="fw-bold">Task Assigned Successfuly</h5>
              <br></br>
              <span>
                {order?.serviceCategory}, Medium-EST 2-3hr, "Task doesn't require car"
              </span>
              <span>{order?.orderTime}</span>
            </div>
          </div>

          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-md-4">
              <img
                className="rounded-circle"
                style={{ width: "135px", height: "135px" }}
                // src={`${import.meta.env.VITE_SOME_KEY}/uploads/${order?.image} `}
                src={ profilePhoto  }
              />
            </div>
            <div className="col-md-8 py-4 px-5">
              <h2 className="fw-bold">{order?.userName}</h2>
              <p> You rated <span style={{ fontSize: "20px" }}> ★5</span></p>
            </div>
          </div>

          <div style={{ margin: "40px", display: "flex", gap: "40px" }}>
            <button
              type="button"
              className="btn  tab-btn"
              style={{backgroundColor:"#d88c08"}}
              onClick={() => navigate('/services')}
              >
              Book Again
            </button>
            <button className="btn tab-btn" 
            style={{backgroundColor:"#d88c08"}}
            type="button" onClick={navigateHistory}>
              veiw Order History
            </button>
          </div>

        </div>
      </div>
    </div>

  );
};

export default OrderConfirmation;
