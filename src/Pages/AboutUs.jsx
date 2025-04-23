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
        <h2>About Us</h2>
      </div>
    </div>
  );
};

export const AboutDescription = () => {
  return (
    <div
      style={{
        padding: "60px 20px",
        backgroundColor: "#ffffff",
        color: "#333333",
        fontFamily: "sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        Your Trusted Partner in Smart Outdoor Living.
      </h2>
      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto 40px",
          textAlign: "center",
          fontSize: "18px",
          lineHeight: "1.7",
        }}
      >
        At Smart Automator, we believe your home should be more than just a
        place to live—it should be a space that works for you. Founded in the
        heart of New York City, we specialize in blending technology, design,
        and craftsmanship to create custom home improvement solutions that
        enhance comfort, efficiency, and security. We’re not just contractors or
        tech installers—we’re creators of smart, functional living environments
        that make life easier and more enjoyable. From luxury apartment upgrades
        to full-scale smart home installations, our team is passionate about
        bringing innovation to every square foot. With years of experience
        navigating the unique demands of NYC homes, we understand how to deliver
        high-impact results—even in the most compact spaces. Whether you want to
        automate your lighting, design a high-performance kitchen, or install
        state-of-the-art security systems, we handle everything from concept to
        completion with precision and care.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            flex: "1 1 300px",
            backgroundColor: "#f5f5f5",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "10px" }}>
            Our Mission
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            To empower New Yorkers to live smarter, safer, and more comfortably
            through personalized home improvement solutions that fuse innovation
            with everyday practicality.
          </p>
        </div>

        <div
          style={{
            flex: "1 1 300px",
            backgroundColor: "#f5f5f5",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "10px" }}>
            Our Vision
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            To be the leading provider of tech-driven home improvement services
            in NYC—reshaping how people interact with their living spaces by
            setting new standards in design, convenience, and functionality.
          </p>
        </div>

        <div
          style={{
            flex: "1 1 300px",
            backgroundColor: "#f5f5f5",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "10px" }}>
            Our Values
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            We’re passionate about making your smart home dreams come true, one
            outdoor space at a time.
          </p>
        </div>
      </div>
    </div>
  );
};



export const LeadershipTeam = () => {
  return (
    <div style={{ padding: '40px 20px', fontFamily: 'Georgia, serif', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px' }}>
        Our Core Values
      </h2>

      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '16px', color: '#333' }}>
        <div style={{ marginBottom: '20px' }}>
          <strong>1. Innovation</strong>
          <p>
            We stay ahead of the curve, embracing new technologies and creative solutions that transform
            traditional living into modern experiences.
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <strong>2. Customization</strong>
          <p>
            Every home and every client is unique. We listen, we plan, and we personalize—delivering results
            that align perfectly with your lifestyle and space.
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <strong>3. Excellence</strong>
          <p>
            From materials to workmanship, we hold ourselves to the highest standards, ensuring flawless
            execution on every project.
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <strong>4. Trust</strong>
          <p>
            We value transparency, communication, and integrity in every interaction. Our goal is to build long-
            term relationships with our clients, not just finish a job.
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <strong>5. Sustainability</strong>
          <p>
            We care about your future and the planet’s. That’s why we integrate eco-friendly products and
            energy-saving solutions wherever possible.
          </p>
        </div>

        <div>
          <strong>6. Customer-Centric Approach</strong>
          <p>
            We exist to serve you. Your satisfaction is our success, and we go the extra mile to ensure a
            seamless, stress-free experience from start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};

