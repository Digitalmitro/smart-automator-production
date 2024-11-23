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
import { useDispatch, useSelector } from "react-redux";
import { fetchServiceCategories } from "../../redux/services/ServiceCategorySlice";
import { fetchServices } from "../../redux/services/ServicesSlice";

export function ConfirmAndChat() {

    const navigate = useNavigate();
    const [data, setData] = useState();
    const [cardNumber, setCardNumber] = useState("");
    const [cardDetails, setCardDetails] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    const token = Cookies.get("token");
    const decodedToken = token && jwtDecode(token);
    const user = decodedToken?.firstName + " " + decodedToken?.lastName;
    const userId = decodedToken?._id;

    const storageData = JSON.parse(localStorage.getItem("DateAndTime"));
    const serviceDetailsStorage = JSON.parse(
        localStorage.getItem("serviceDetails")
    );


    //   -------  New Code   >>>>>>>>>>>>>>>>>>>

    const { id } = useParams();

    const dispatch = useDispatch();
    const { services, loading: servicesLoading, error: servicesError } = useSelector((state) => state.services);
  

  const getServices = services?.filter((info) => info._id === id)

    useEffect(() => {
        dispatch(fetchServices());
      }, [dispatch]);
    


    //  <<<<<<<<<<<<<<<<<<  new Code ---------------



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

    useEffect(() => {
        handleServiceDetails();
    }, []);


    useEffect(() => {
        if (cardNumber && cardDetails) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [cardNumber, cardDetails]);


    return (
        <div class="confirmDetails container  d-flex justify-content-around  m-auto ">
            <div class="container border rounded p-5 mt-3">
                <div class="border rounded p-5 mt-5">
                    <div class="ProfileDetails">

                        <div class="Profile d-flex flex-column justify-content-center align-items-center">
                            {/* <h4>{data?.serviceCategory || "Taskers Details"}</h4> */}
                            <div>
                                <img
                                    src={profilePhoto}
                                    alt="profile photo"
                                    class="border rounded-circle"
                                    style={{ width: "120px", height: "120px" }}
                                />
                            </div>
                            <p>{data?.userName || "Taskers Name"} </p>
                        </div>

                        <div class="timeLocation mt-3" >
                            <div class="d-flex gap-3">
                                <img
                                    src={dayLogo}
                                    alt="timeLogo..."
                                    style={{ width: "1.5em", height: "1.5em" }}
                                />
                                <p>
                                    {storageData?.date || "Tue, june 20"} at{" "}
                                    {storageData?.time || "9.30am"}
                                </p>
                            </div>
                            <div class="d-flex gap-3 ">
                                <img
                                    src={LoactionLogo}
                                    alt="LocationLogo..."
                                    style={{ width: "1.2em", marginRight: ".3em", height: "1.5em" }}
                                />
                                <p>{data?.location || "chicago"} </p>
                            </div>
                            <div class="d-flex gap-3">
                                <img
                                    src={timeLogo}
                                    alt="timeLogo..."
                                    style={{ width: "1.5em", height: "1.5em" }}
                                />
                                <p> Est : {serviceDetailsStorage?.taskSize || "1 - 2 hrs"}</p>
                            </div>
                        </div>

                        <div class="m-3">
                            <h6 style={{ fontWeight: "600" }}>Price Details</h6>
                            <div class="d-flex justify-content-between gap-3">
                                <p>Hourly Rate</p>
                                <p>{`${getServices[0]?.hourlyCharge || "40**"}/hr`}</p>
                            </div>
                            <div class="d-flex justify-content-between gap-3">
                                <p>Trust And Support fee</p>
                                <p>$1/hr</p>
                            </div>
                            <div class="d-flex justify-content-between gap-3">
                                <p style={{ fontWeight: "600" }}>Total Rate</p>
                                <p style={{ fontWeight: "600" }}>
                                    ${data?.pricePerHour + 1 || "62"}/hr
                                </p>
                            </div>
                        </div>

                        <div>
                           
                            <p>
                                Please follow all public health regulations in your area.{" "}
                                <span style={{ color: "#FFC72C" }}>Learn more</span>{" "}
                            </p>


                        </div>

                        <button onClick={() => navigate(`/services/${id}`)} >Confirm And Pay</button>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}


