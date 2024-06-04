import React from "react";
import image from "../assets/profile1.png";
import CheckMark from "../assets/carbon_checkmark-filled.png";

const OrderConfirmation = () => {
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
              data.serviceCategory, Medium-EST 2-3hr, "Task doesn't require car"
            </span>
            <br></br>
            <span>data.orderTime</span>
          </div>
        </div>

        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-md-4">
            <img
              className="rounded-circle"
              style={{ width: "135px", height: "135px" }}
              src={image}
            />
          </div>
          <div className="col-md-8 py-4 px-5">
            <h2 className="fw-bold">data.userName</h2>
            <p>
              You rated <span style={{ fontSize: "20px" }}> ★ 5</span>
            </p>
          </div>
        </div>
        <div style={{ margin: "40px", display: "flex", gap: "40px" }}>
          <button
            type="button"
            className="btn btn-warning tab-btn"
           
          >
            Book Again
          </button>
          <button className="btn btn-warning tab-btn" type="button">
            Share Profile
          </button>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default OrderConfirmation;
