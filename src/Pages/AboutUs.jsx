import React, { useState } from "react";
import serviceInfo2 from "../assets/BannerImage2.png";
import leader from "../assets/testi.png";
import "./Styles/AboutUS.scss";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  return (
    <div className="About-us">
      <Content />

      <div>
        <AboutDescription />
        <LeadershipTeam />
      </div>
    </div>
  );
};

export const Content = () => {
  return (
    <div className="about-content">
      <div className="content">
        <h1>About Us</h1>
      </div>
    </div>
  );
};

export const AboutDescription = () => {
  return (
    <>
      <div className="about-description">
        <h1> Transforming lives, one task at a time</h1>
        <p>
          We bring people together. It’s at the heart of everything we do. We
          know that for every person who needs their radiator fixed before
          winter, the nursery set up for their newborn, or a TV mounted in time
          for game day, there’s someone nearby who is ready, willing, and able
          to help, without delay. When these two people come together, they help
          each other in a profound way—they offer each other a better way of
          living.
        </p>
      </div>
    </>
  );
};

export const LeadershipTeam = () => {
  return (
    <div className="leader-team">
      <h1>Leadership Team</h1>
      <div className="grid-list">
        <div className="grid">
          <img src={leader} alt="" />
          <h3>Ania Smith</h3>
          <p>Chief Executive Officer</p>
        </div>
        <div className="grid">
          <img src={leader} alt="" />
          <h3>Ania Smith</h3>
          <p>Chief Executive Officer</p>
        </div>

        <div className="grid">
          <img src={leader} alt="" />
          <h3>Ania Smith</h3>
          <p>Chief Executive Officer</p>
        </div> 
        <div className="grid">
          <img src={leader} alt="" />
          <h3>Ania Smith</h3>
          <p>Chief Executive Officer</p>
        </div>       <div className="grid">
          <img src={leader} alt="" />
          <h3>Ania Smith</h3>
          <p>Chief Executive Officer</p>
        </div>

        <div className="grid">
          <img src={leader} alt="" />
          <h3>Ania Smith</h3>
          <p>Chief Executive Officer</p>
        </div>
        <div className="grid">
          <img src={leader} alt="" />
          <h3>Ania Smith</h3>
          <p>Chief Executive Officer</p>
        </div>
        <div className="grid">
          <img src={leader} alt="" />
          <h3>Ania Smith</h3>
          <p>Chief Executive Officer</p>
        </div>
        <div className="grid">
          <img src={leader} alt="" />
          <h3>Ania Smith</h3>
          <p>Chief Executive Officer</p>
        </div>
      </div>
    </div>
  );
};
