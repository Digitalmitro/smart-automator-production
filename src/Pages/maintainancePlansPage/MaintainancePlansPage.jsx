import React from 'react';
import './styles/maintenancePlans.scss';
import { FaCheckCircle, FaWrench, FaClock, FaCloudDownloadAlt } from 'react-icons/fa';

const MaintenancePlans = () => {
  return (
    <div className="maintenance-plans">
      <header className="header">
        <h1>Maintenance & Support Plans</h1>
        <p>Keep your systems running smoothly with our comprehensive services.</p>
      </header>

      <section className="features">
        <div className="feature-card">
          <FaWrench className="icon" />
          <h3>Routine Check-ups</h3>
          <p>Scheduled inspections to ensure peak performance.</p>
        </div>
        <div className="feature-card">
          <FaClock className="icon" />
          <h3>On-Call Support</h3>
          <p>24/7 assistance to resolve any issues swiftly.</p>
        </div>
        <div className="feature-card">
          <FaCloudDownloadAlt className="icon" />
          <h3>Software Updates</h3>
          <p>Keep your systems updated with the latest features.</p>
        </div>
      </section>

      <section className="plans">
        <h2>Choose Your Plan</h2>
        <div className="plan-cards">
          <div className="plan-card">
            <h3>Basic</h3>
            <p>Essential support for minimal needs.</p>
            <p className="price">$99/month</p>
            <button>Sign Up</button>
          </div>
          <div className="plan-card popular">
            <h3>Advanced</h3>
            <p>Best for small to medium businesses.</p>
            <p className="price">$199/month</p>
            <button>Sign Up</button>
          </div>
          <div className="plan-card">
            <h3>Premium</h3>
            <p>Comprehensive coverage for all needs.</p>
            <p className="price">$299/month</p>
            <button>Sign Up</button>
          </div>
        </div>
      </section>

      <footer className="signup">
        <h2>Ready to Get Started?</h2>
        <p>Sign up today and enjoy seamless maintenance and support!</p>
        <button>Get a Custom Quote</button>
      </footer>
    </div>
  );
};

export default MaintenancePlans;
