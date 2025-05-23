import React, { useEffect, useState } from "react";
import bagImage from "./assets/backgroundImag.jpg";
import logoImg from "./assets/logo.jpg";
import image12 from "./assets/serviceDescription.jpg";
import "./styles/serviceDetails.scss";
import { Link, useNavigate, useParams,useLocation } from "react-router-dom";
import { FAQ } from "./FAQ";
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../../redux/services/ServicesSlice';
import { message } from "antd";


const token = localStorage.getItem("token"); 

export const ServiceDetails = () => {
  const navigate = useNavigate()
  // const { id } = useParams()
  // console.log("myParams", id)
  const location = useLocation();
  const { id } = location.state || {};
  const { categories, loading: categoriesLoading, error: categoriesError } = useSelector((state) => state.serviceCategories);
  const { services, loading: servicesLoading, error: servicesError } = useSelector((state) => state.services);

  const getServices = services?.filter((info) => info?._id === id)
  const dispatch = useDispatch()
  // console.log("ger", getServices)
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBooking = (serviceId) => {
    if (token) {
      // If the token exists, navigate to the booking form
      navigate(`/serviceform/${serviceId}`);
    } else {
      // If the token does not exist, navigate to the login page
      message.warning("Please Login")
      navigate("/login");
    }
  };
  if (categoriesLoading || servicesLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="service-details" style={{ backgroundImage: `url(${getServices[0]?.image || ''})`}}>
        {getServices?.map((item) => {
          return (
            <div className="content">
              <h2>{item?.serviceName.toUpperCase()}</h2>
              <div className="line my-4"></div>
              <p>
                {item?.shortDescription}
              </p>
              <button onClick={() => handleBooking(item._id)}>Book now</button>

            </div>
          )
        })}
      </div>
      <ServiceDescription getServices={getServices} />
      <GetHired getServices={getServices}/>
      <FAQ />
    </div>
  );
};

export const ServiceDescription = ({ getServices }) => {
  return (
    <>
      <div className="service-description">

        <div className="Links d-flex">
          <Link to="/"> Home </Link>
          <Link to="/services"> Services </Link>
          <Link to=""> Moving Services </Link>
          <Link to=""> Furniture Assembly </Link>
        </div>
        {getServices?.map((item) => {
          return (
            <>
              <h3>{item.serviceName.toUpperCase()}</h3>
              <div className="desc d-flex">
                <div className="para">
                  <p>
                    {item?.description}
                  </p>
                </div>
                <div className="image">
                  <img src={item?.image} alt="img" />
                </div>
              </div>

            </>
          )
        })}

        <div className="how-works text-center">
          <h3>How it Works </h3>
          <div className="d-flex align-items-center justify-content-center gap-5">
            <div className="logo-layout">
              <img src={logoImg} alt="" />
              <h4>
                <span> 1 </span> Describe Your Task
              </h4>
              <p>
                Tell us what you need done, when and where it works for you.
              </p>
            </div>
            <div className="logo-layout">
              <img src={logoImg} alt="" />
              <h4>
                <span> 1 </span> Describe Your Task
              </h4>
              <p>
                Tell us what you need done, when and where it works for you.
              </p>
            </div>

            <div className="logo-layout">
              <img src={logoImg} alt="" />
              <h4>
                <span> 1 </span> Describe Your Task
              </h4>
              <p>
                Tell us what you need done, when and where it works for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const GetHired = ({getServices}) => {
  return (
    <div>
      <div className="get-hired d-flex justify-content-center align-items-center gap-5">
        <img src={getServices[0]?.image} alt="" />
        <div>
          <h2>Ready to Hire a Tasker</h2>
          <button>Find Help Now</button>
        </div>
      </div>
    </div>
  );
};


