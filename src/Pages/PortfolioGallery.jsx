import React from "react";
import "../Pages/Styles/PortfolioGallery.scss";

export const PortfolioGallery = () => {
    const projects = [
      {
        id: 1,
        title: "Landscaped Garden with Automated Lighting",
        description:
          "Smart lighting transforms this garden into a serene, energy-efficient oasis.",
        image: "https://urbancitations.s3.eu-north-1.amazonaws.com/banner.webp",
      },
      {
        id: 2,
        title: "Patio with Outdoor Audio System",
        description:
          "Seamless audio integration for an immersive outdoor entertainment experience.",
        image: "https://urbancitations.s3.eu-north-1.amazonaws.com/banner.webp",
      },
      {
        id: 3,
        title: "Pool Area with Smart Features",
        description:
          "Automated lighting, water temperature control, and entertainment at your fingertips.",
        image: "https://urbancitations.s3.eu-north-1.amazonaws.com/banner.webp",
      },
    ];
  
    return (
      <div className="portfolio-gallery">
        <h2>Transform Your Outdoor Space into a Smart Oasis.</h2>
        <p>Explore our recent projects and see the magic of outdoor automation.</p>
  
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
  
        <div className="cta-section">
          <h3>Inspired by what you see?</h3>
          <p>Let’s make it a reality.</p>
          <button>Get in Touch</button>
        </div>
      </div>
    );
  };
  