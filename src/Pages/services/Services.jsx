import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import "../../Pages/Styles/Services.scss";
import axios from "axios";

import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

import { TimePicker, Space, Button, Modal , message } from "antd";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import gridLayout7 from "../../assets/grid-layout-7.jpg";
import { fetchServiceCategories } from '../../redux/services/ServiceCategorySlice';
import { fetchServices } from '../../redux/services/ServicesSlice';


export const Services = () => {
  // filter data by id
  const token = Cookies.get("token");
  const decodedToken = token && jwtDecode(token);
  const dispatch = useDispatch();

  const { categories, loading: categoriesLoading, error: categoriesError } = useSelector((state) => state.serviceCategories);
  const { services, loading: servicesLoading, error: servicesError } = useSelector((state) => state.services);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 
  useEffect(() => {
    dispatch(fetchServiceCategories());
    dispatch(fetchServices());
  }, [dispatch]);

  if (categoriesLoading || servicesLoading) return <p>Loading...</p>;
  if (categoriesError) return <p>Error: {categoriesError}</p>;
  if (servicesError) return <p>Error: {servicesError}</p>;

console.log("categories", categories )
console.log("services", services)


  return (
    <>
      <section style={{ backgroundColor: "#fef6e7" }}>
        <div className="service-page-banner">
          <header className="content">
            <h1>Your to-do list is on us</h1>
          </header>
        </div>
        <ServiceGridCard categories={categories} services={services}/>
      </section>
    </>
  );
};

export const ServiceGridCard = ({categories, services}) => {
  const navigate = useNavigate();

  return (
    <div className="service-grid-card">
      <h1>Hire a trusted Tasker</h1>
      <div className="grid-card">
       {categories?.length >0 &&
        categories?.map((item) => {
          return(
            <div className="grid">
            <div className="image-container">
  
              <img src={gridLayout7} alt="grilayout1" />
            </div>
            <div>
              <h3 onClick={() => navigate(`/serviceinfo/featuredtask`)}>{item.name}</h3>
              <p>{item.description}</p>
              <hr />
              <Link to={`/servicedetails/servicetype/specificService`}>
                <p>Furniture Assembly</p>
              </Link>
              <Link to={`/servicedetails/servicetype/specificService`}>
                <p>Home Repairs</p>
              </Link>
              <Link to={`/servicedetails/servicetype/specificService`}>
                <p>Help Moving</p>
              </Link>
              <Link to={`/servicedetails/servicetype/specificService`}>
                <p>Heavy Lifting</p>
              </Link>
              <Link to={`/servicedetails/servicetype/specificService`}>
                <p>Home Cleaning</p>
              </Link>
            </div>
          </div>
          )
        })
       }


      </div>
    </div>
  );
};
