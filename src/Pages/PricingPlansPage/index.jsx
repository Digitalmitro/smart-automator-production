import React, { useState, useEffect } from 'react';
import './styles/pricingPlans.scss';
import {  FaPaperPlane } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../../redux/services/ServicesSlice';
import { SvgRepo } from '../../components/SvgRepo/SvgRepo';
// import basics from "./assets/basics.png"
// import premium from "./assets/premium.png"
// import { get } from 'jquery';
import { Plans } from './components/plans';
import image1 from "./assets/basics2.png"
import image2 from "./assets/advance2.png"
import image3 from "./assets/premium3.png"
export const PricingPage = () => {
  const { id } = useParams()
  const { categories, loading: categoriesLoading, error: categoriesError } = useSelector((state) => state.serviceCategories);
  const { services, loading: servicesLoading, error: servicesError } = useSelector((state) => state.services);
  const getServices = services?.filter((info) => info._id === id)
 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const [plans, setPlans] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const response = await fetch('/get-all-plans', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Add token for adminAuth
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setPlans(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div className="pricing-page">
      {/* Header Section */}
      <header className="pricing-header">
        <h2>Affordable Plans for Every Need</h2>
        <p>Explore our transparent pricing options and pick what fits your budget.</p>
      </header>
      <Plans />
      {/* <PricBreakDown getServices={getServices} /> */}
      <PricePackages services={services} />
      <CustomQuote />
    </div>
  );
};

const PricBreakDown = ({ getServices }) => {
  return (
    <div>

      <section className="pricing-breakdown">
        <h2>Pricing Discounts</h2>
        <div className="services-grid">
          {
            getServices.map((serviceItem) => (
              <div className="service-card">
                <img src={serviceItem?.image} alt="" />
                <br />
                <p><b>{serviceItem.serviceName}</b></p>
                {Features.map((featureList) =>
                  <>
                    <div>
                      <span>
                        {SvgRepo.tick}
                      </span>
                      <p>{featureList}</p>
                    </div>
                  </>
                )}
              </div>

            ))
          }

          <div className="service-card">
            <img src={getServices[0]?.image} alt="" />
            <div className='flex'>
              <h3>For monthly SubsCriber All time lowest Price </h3>
            </div>
            <p>$35/hr</p>
          </div>

        </div>
      </section>
    </div>
  )
}


const PricePackages = ({ services }) => {
  return (

    <section className="pricing-packages">
      <h2>Choose a Package</h2>
      <div className="package-grid">
        <div className="package-card">
          <h3 className='Basic'>Basic</h3>
          <div>
            <p><b>Essential services for small projects.</b></p>
            {/* <span>{SvgRepo.}</span> */}
            <span style={{ marginTop: "3rem !important" }}>
              <img className="basicImage" src={image1} alt="" />
              {/* {SvgRepo.advance}  */}

            </span>
            <div className="price">$199/<span>month</span></div>

            {GeneralFeatures.basic.features.map((basicITems) => (
              <div className='features'>
                <span>{SvgRepo.tick}</span>
                <span>{basicITems}</span>

              </div>
            ))}
            <br />
            <button>Subscribe Today</button>
          </div>

        </div>
        <div className="package-card highlighted">
          <h3 className='Advance'>Advanced</h3>
          <p><b>Best for larger projects and frequent tasks.</b></p>
          {/* <span>{SvgRepo.daimondRed}</span> */}
          <img src={image2} className="advImage" alt="" />

          <div className="price">$399/<span>month</span></div>
          {GeneralFeatures.basic.features.map((basicITems) => (
            <div className='features'>
              <span>{SvgRepo.tick}</span>
              <span>{basicITems}</span>

            </div>
          ))}
          <br />
          <button>Subscribe Today</button>

        </div>
        <div className="package-card">
          <h3 className='premium'>Premium</h3>
          <p><b>All-inclusive for complete peace of mind.</b></p>
          <span>
            <img src={image3} className='premImage' alt="" />
          </span>
          <div className="price">$599/<span>month</span></div>
          {GeneralFeatures.basic.features.map((basicITems) => (
            <div className='features'>
              <span>{SvgRepo.tick}</span>
              <span>{basicITems}</span>
            </div>
          ))} <br />
          <button>Subscribe Today</button>

        </div>
      </div>
    </section>
  )
}

const CustomQuote = () => {
useEffect(() => {
  window.scrollTo(0,0);
},[])
  return (
    <section id="custom-quote" className="custom-quote">
      <h2>Request a Custom Service</h2>
      <p className='text-center'>Please login first to apply for custom services </p>
      <form>
        <div className='flex'>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
        </div>
        <textarea placeholder="Describe your requirements" required></textarea>
        <button type="submit">
          <FaPaperPlane className="button-icon" /> Submit
        </button>
      </form>
    </section>
  )
}

const GeneralFeatures = {
  basic: {
    Discount: "5%",
    Prices: "800",
    description: "Standard service with essential features at an affordable price.",
    features: [
      "Standard quality service",
      "Trained personnel",
      "Scheduled service slots",
      "Basic tools and materials",
      "Customer support during service",
    ],
  },
  advance: {
    Discount: "15%", // Slightly lower discount than basic
    Prices: "1200", // Higher price compared to basic
    description: "Enhanced service with upgraded features for more flexibility and quality.",
    features: [
      "Enhanced service quality",
      "Experienced personnel",
      "Flexible scheduling options",
      "Upgraded tools and materials",
      "Post-service quality check",
    ],
  },
  premium: {
    Discount: "20%", // Lower discount as it's the highest tier
    Prices: "2000", // Highest price reflecting premium features
    description: "Premium service with top-notch quality and priority support for exclusive clients.",
    features: [
      "Top-notch service quality",
      "Highly experienced and certified personnel",
      "Priority scheduling with same-day availability",
      "Use of premium-grade materials and equipment",
      "Extended customer support and warranty",
    ],
  },
};


