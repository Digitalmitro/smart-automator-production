import React, { useState } from "react";
import bagImage from "./assets/backgroundImag.jpg";
import logoImg from "./assets/logo.jpg";
import serviceInfo2 from "./assets/serviceInfo2.jpg";
import serviceInfobanner from "./assets/serviceinfobanner.jpg";
import image12 from "./assets/serviceDescription.jpg";
import "./styles/ServiceInfo.scss";
import { Link } from "react-router-dom";
import { FAQ } from "./FAQ";

export const ServiceInfo = () => {
  return (
    <div className="service-info">
      <ServiceContent />

<div>
<ServiceDescription />
      <AboutServices />
      <OtherServices/>
      <FAQ />
</div>
     
    </div>
  );
};

export const ServiceContent = () => {
  return (
    <div className="service-content">
      <div className="content">
        <h1>Furniture Assembly</h1>
        <p>
          Need someone to put together furniture? Hire a Tasker to assemble your
          furniture and leave the building to them.
        </p>
        <button>Book now</button>
      </div>
    </div>
  );
};

export const ServiceDescription = () => {
  return (
    <>
      <div className="service-description">
        <div className="  Links d-flex">
          <Link to="/"> Home </Link>
          <Link to="/services"> Services </Link>
          <Link to=""> Handyman </Link>
        </div>

        <div className="service-section d-flex gap-3">
          <div className="left ">
            <div className="service-list d-flex gap-3">
              <img src={serviceInfo2} alt="" />
              <div>
                <h3>Door, Cabinet, & Furniture Repair</h3>
                <p>
                  Hire a Tasker to fix your doors, cabinets, and even furniture.
                </p>
                <button>Book Now</button>
              </div>
            </div>
            <div className="service-list d-flex gap-3">
              <img src={serviceInfo2} alt="" />
              <div>
                <h3>Door, Cabinet, & Furniture Repair</h3>
                <p>
                  Hire a Tasker to fix your doors, cabinets, and even furniture.
                </p>
                <button>Book Now</button>
              </div>
            </div>
            <div className="service-list d-flex gap-3">
              <img src={serviceInfo2} alt="" />
              <div>
                <h3>Door, Cabinet, & Furniture Repair</h3>
                <p>
                  Hire a Tasker to fix your doors, cabinets, and even furniture.
                </p>
                <button>Book Now</button>
              </div>
            </div>
            <div className="service-list d-flex gap-3">
              <img src={serviceInfo2} alt="" />
              <div>
                <h3>Door, Cabinet, & Furniture Repair</h3>
                <p>
                  Hire a Tasker to fix your doors, cabinets, and even furniture.
                </p>
                <button>Book Now</button>
              </div>
            </div>
            <div className="service-list d-flex gap-3">
              <img src={serviceInfo2} alt="" />
              <div>
                <h3>Door, Cabinet, & Furniture Repair</h3>
                <p>
                  Hire a Tasker to fix your doors, cabinets, and even furniture.
                </p>
                <button>Book Now</button>
              </div>
            </div>
          </div>
          <div className="right">
            <h3>Cross off that to-do</h3>
            <h4>
              {" "}
              <span> 1 </span>Select Your Task{" "}
            </h4>
            <p>
              Describe your task and choose a background checked and
              client-reviewed Tasker for the job
            </p>
            <h4>
              {" "}
              <span> 2 </span>Select Your Task{" "}
            </h4>
            <p>
              Describe your task and choose a background checked and
              client-reviewed Tasker for the job
            </p>

            <h4>
              {" "}
              <span> 3 </span>Select Your Task{" "}
            </h4>
            <p>
              Describe your task and choose a background checked and
              client-reviewed Tasker for the job
            </p>

            <div>
              <h3>Hear What People Are Saying</h3>
              <div className="people-say d-flex ">
                <img src={serviceInfo2} alt="" />
                <p>
                  Alfonso was great! He knew the best way to mount the wire in
                  the drywall and I feel confident that the curtain wire he
                  reinstalled is secure and won't come crashing down again! He
                  was a pleasure to have around and I would hire him again.
                  Thanks, Alfonso! – Wendell A.
                </p>
              </div>
              <div className="people-say d-flex ">
                <img src={serviceInfo2} alt="" />
                <p>
                  Alfonso was great! He knew the best way to mount the wire in
                  the drywall and I feel confident that the curtain wire he
                  reinstalled is secure and won't come crashing down again! He
                  was a pleasure to have around and I would hire him again.
                  Thanks, Alfonso! – Wendell A.
                </p>
              </div>
              <div className="people-say d-flex ">
                <img src={serviceInfo2} alt="" />
                <p>
                  Alfonso was great! He knew the best way to mount the wire in
                  the drywall and I feel confident that the curtain wire he
                  reinstalled is secure and won't come crashing down again! He
                  was a pleasure to have around and I would hire him again.
                  Thanks, Alfonso! – Wendell A.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const AboutServices = () => {
  return (
    <div className="aboutServices">
      <h1>Handyman Services</h1>

      <div className="d-flex">
        <div className="desc">
          <p>
            A handyman is a skilled man (or woman) who can perform various tasks
            around the house that don’t necessarily require a license. Anything
            around the house that just needs a small tweak or repair is the
            perfect type of task for a handyman near you.
          </p>

          <p>
            <span> Why hire a handyman?</span>
          </p>
          <p>
            {" "}
            Everyone has different skillsets, and some of us are better off not
            trying to fix things around the house… and some of us just can’t be
            bothered. Either way, Taskers are happy to help provide all sorts of
            handyman services to help you keep your house in good order.{" "}
          </p>

          <p>
            A handyman is the perfect person to call for a quick fix, like a
            clogged drain, fixing a hole in the wall, or putting together some
            shelving. The nature of tasks that a handyman performs are generally
            not dangerous or emergency home repairs--those are things that
            generally require a licensed specialist.
          </p>

          <p>
            Many Taskers have multiple licenses that enable them to perform
            handyman services as well as more specialized services. Llicensing
            requirements vary depending on where you live, but your local
            Taskers should be able to tell you if they are qualified to help
            with your project.
          </p>
          <p>
            <span> No tools? No problem.</span>
          </p>
          <p>
            Taskers will come with their own supplies needed for the job. Let
            your Tasker know if you’d like an estimate before starting a large
            project, and chat with them to ensure they have the necessary
            licenses for the job, if a license is needed.{" "}
          </p>
          <p>
            <span>Same day services available</span>
          </p>

          <p>
            Most Taskers live right around the corner from you, and are
            available for same-day services. Just let them know when you’d like
            them to come by and see who’s available!
          </p>
        </div>

        <div>
          <img src={serviceInfo2} alt="" />
        </div>
      </div>
    </div>
  );
};

export const OtherServices = () => {


  return (
    <div className="other-services">
      <h1> Search other tasks</h1>
      <div className="grid-container">
        <p>Furniture Assembly</p>
        <p>Commercial Handyman</p>
        <p>Moving Services</p>
        <p>Yardwork</p>
        <p>Pressure Washing</p> <p>Wait in Line</p>
      </div>
    </div>
  );
};
