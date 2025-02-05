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
    <div className="about-description">
      <h2>Your Trusted Partner in Smart Outdoor Living.</h2>
      <p>
        We specialize in creating seamless, connected, and innovative smart outdoor spaces using Control4’s state-of-the-art technology.
      </p>

      <div className="cards-container">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To make your outdoor living effortless, secure, and enjoyable with advanced smart solutions tailored to your lifestyle.
          </p>
        </div>

        <div className="card">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Certified Control4 partners.</li>
            <li>Personalized service and expert installations.</li>
            <li>Long-term customer support and system scalability.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Our Values</h3>
          <p>
            We’re passionate about making your smart home dreams come true, one outdoor space at a time.
          </p>
        </div>
      </div>
    </div>
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
