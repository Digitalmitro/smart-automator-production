import React, { useEffect } from 'react';
import './styles/pricingPlans.scss';

import { FaTools, FaPaintRoller, FaBroom, FaBolt, FaPaperPlane } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../../redux/services/ServicesSlice';
import { SvgRepo } from '../../components/SvgRepo/SvgRepo';
import basics from "./assets/basics.png"
import premium from "./assets/premium.png"
export const PricingPage = () => {
  const { id } = useParams()
  const { categories, loading: categoriesLoading, error: categoriesError } = useSelector((state) => state.serviceCategories);
  const { services, loading: servicesLoading, error: servicesError } = useSelector((state) => state.services);
  const getServices = services?.filter((info) => info._id === id)
  console.log("getServices", getServices)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);
  // const getServices = services?.filter((data)=> data.serviceCategory.name === getCategories[0].name)

  return (
    <div className="pricing-page">
      {/* Header Section */}
      <header className="pricing-header">
        <h1>Affordable Plans for Every Need</h1>
        <p>Explore our transparent pricing options and pick what fits your budget.</p>
      </header>

      {/* Price Breakdown */}
      <section className="pricing-breakdown">
        <h2>Pricing Discounts</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={getServices[0]?.image} alt="" />
            <div className='flex'>
              <strong>Unbeatable Price for one Time Service </strong>
            </div>
            <p>$50/hr</p>
          </div>
          <div className="service-card">
            <img src={getServices[0]?.image} alt="" />
            <div className='flex'>

              <h3>For Our Repeated Customer a discount with 10%</h3>
            </div>
            <p>$40/hr</p>
          </div>
          <div className="service-card">
            <img src={getServices[0]?.image} alt="" />
            <div className='flex'>

              <h3>For monthly SubsCriber All time lowest Price </h3>
            </div>
            <p>$35/hr</p>
          </div>

        </div>
      </section>

      {/* Packages Section */}
      <section className="pricing-packages">
        <h2>Choose a Package</h2>
        <div className="package-grid">
          <div className="package-card">
            <h3>Basic</h3>
            <p>Essential services for small projects.</p>
            <div className="price">$199/month</div>
            <span style={{ marginTop: "3rem !important" }}>
              <img src={basics} alt="" />
              {/* {SvgRepo.advance} */}
            </span>
          </div>
          <div className="package-card highlighted">
            <h3>Advanced</h3>
            <p>Best for larger projects and frequent tasks.</p>
            <div className="price">$399/month</div>
            <span>  {SvgRepo.daimondRed}

            </span>
          </div>
          <div className="package-card">
            <h3>Premium</h3>
            <p>All-inclusive for complete peace of mind.</p>
            <div className="price">$599/month</div>
            <span>
              <img src={premium} alt="" />

              {/* {SvgRepo.basics} */}
            </span>
          </div>
        </div>
      </section>

      {/* Custom Quote */}
      <section className="custom-quote">
        <h2>Request a Custom Quote</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Describe your requirements" required></textarea>
          <button type="submit">
            <FaPaperPlane className="button-icon" /> Submit
          </button>
        </form>
      </section>
    </div>
  );
};





