import React, { useEffect, useState } from "react";

import CheckMark from "../assets/carbon_checkmark-filled.png";
import { useNavigate, useParams } from "react-router-dom";
import { useScrollTrigger } from "@mui/material";
import axios from "axios";

const OrderConfirmation = () => {
  const navigate = useNavigate()
const [order, setOrder] = useState()
const {id} = useParams()
  // const getHomeAddressorder = async() => {
  //   try{
  //     let response = await axios.get(
  //       `${import.meta.env.VITE_SOME_KEY}/homeAddress/${user_id}`,
        
  //     );
  //     setHomeAddressData(response.data.data.homeAddress[0])
  //     console.log("address get response",response.data.data.homeAddress)
  //   }catch (error) {
  //     console.log(error);
  //     // message.error("address not get");
  //   }
 

  // }

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
  console.log("order", order)
  const navigateHistory = () => {
    localStorage.setItem('tabIndex', 2);
    navigate('/profile')
  }
  useEffect(() => {
    handleServiceDetails()
  },[])
  
  return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems:"center", margin: "auto", zoom: ".8"}}>
        <img
              className="rounded-circle"
              style={{ width: "60px", height: "60px" }}
              src={CheckMark}
            />
        <h2 style={{color: "#008000"}}>Order Successfully complete !</h2>
     <div className="py-3" >
      <div className="past-order-box">
        <div className="wrap">
          <div className="burger-text">
            <h5 className="fw-bold">Task Completed</h5>
            <br></br>
            <span>
              { order?.serviceCategory}, Medium-EST 2-3hr, "Task doesn't require car"
            </span>
            <br></br>
            <span>{ order?.orderTime}</span>
            {/* <span>{ order?.orderDate}</span> */}
          </div>
        </div>

        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-md-4">
            <img
              className="rounded-circle"
              style={{ width: "135px", height: "135px" }}
              src={`${import.meta.env.VITE_SOME_KEY}/uploads/${order?.image}`}
            />
          </div>
          <div className="col-md-8 py-4 px-5">
            <h2 className="fw-bold">{order?.userName}</h2>
            <p>
              You rated <span style={{ fontSize: "20px" }}> ★ 5</span>
            </p>
          </div>
        </div>
        <div style={{ margin: "40px", display: "flex", gap: "40px" }}>
          <button
            type="button"
            className="btn btn-warning tab-btn"
           onClick={() => navigate('/services')}
          >
            Book Again
          </button>
          <button className="btn btn-warning tab-btn" type="button" onClick={navigateHistory}>
           veiw Order History
          </button>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default OrderConfirmation;
