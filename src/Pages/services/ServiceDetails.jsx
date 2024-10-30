import React, { useEffect, useState } from "react";
import bagImage from "./assets/backgroundImag.jpg";
import logoImg from "./assets/logo.jpg";
import image12 from "./assets/serviceDescription.jpg";
import "./styles/serviceDetails.scss";
import { Link, useNavigate } from "react-router-dom";
import { FAQ } from "./FAQ";

export const ServiceDetails = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <div className="service-details">
        <div className="content">
          <h1>Furniture Assembly</h1>
          <div className="line my-4"></div>
          <p>
            Need someone to put together furniture? Hire a Tasker to assemble
            your furniture and leave the building to them.
          </p>
          <button onClick={() => navigate('/serviceform')}>Book now</button>
        </div>
      </div>
      <ServiceDescription />
      <GetHired />
      <FAQ />
    </div>
  );
};

export const ServiceDescription = () => {
  return (
    <>
      <div className="service-description">

        <div className="Links d-flex">
          <Link to="/"> Home </Link>
          <Link to="/services"> Services </Link>
          <Link to=""> Moving Services </Link>
          <Link to=""> Furniture Assembly </Link>
        </div>

        <h3> Furniture Assembly Services</h3>
        <div className="desc d-flex">
          <div className="para">
            <p>
              Let’s be honest: you were never going to read that furniture
              assembly manual. No matter how the instructions are laid out,
              furniture assembly is not necessarily a user-friendly task.
              Taskers on Taskrabbit will come to your home and assemble your
              furniture for you! Taskers frequently assemble beds, bunk beds,{" "}
              <span>
                <a>dressers, desks, couches, tables, chairs</a>
              </span>
              , wardrobes—you name it.
            </p>
            <p>
              As official furniture assembly partners with IKEA, Taskers are
              familiar with popular IKEA furniture collections like MALM,
              KALLAX, HEMNES, and more. You can fill your space with exactly
              what you want, no matter how complex the furniture is.{" "}
            </p>
            <p></p>
            <p>
              Taskers bring their own tools so that they can help you as quickly
              and efficiently as possible. Taskrabbit also offers furniture
              disassembly services, and Taskers can help you move or haul away
              your old furniture!
            </p>
            <p>
              Furniture assembly doesn't need to be a huge hassle. Taskers will
              put together furniture in a snap and save you time and effort.
              Don't do it all on your own. Just task!
            </p>
          </div>

          <div className="image">
            <img src={image12} alt="img" />
          </div>
        </div>


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

export const GetHired = () => {
  return (
    <div>
      <div className="get-hired d-flex justify-content-center align-items-center gap-5">
        <img src={bagImage} alt="" />
        <div>
          <h2>Ready to Hire a Tasker</h2>
          <button>Find Help Now</button>
        </div>
      </div>
    </div>
  );
};


