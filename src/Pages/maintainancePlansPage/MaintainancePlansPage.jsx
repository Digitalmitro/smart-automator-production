import React, { useEffect } from 'react';
import './styles/maintenancePlans.scss';
import { FaCheckCircle, FaWrench, FaClock, FaCloudDownloadAlt, FaPaperPlane } from 'react-icons/fa';
import { fetchServices } from '../../redux/services/ServicesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchServiceCategories } from '../../redux/services/ServiceCategorySlice';
import { SvgRepo } from '../../components/SvgRepo/SvgRepo';
import image1 from "./assets/basics2.png"
import image2 from "./assets/advance2.png"
import serviceInfo2 from "./assets/serviceInfo2.jpg";
import image3 from "./assets/premium3.png"
import { message } from 'antd';

const token = localStorage.getItem("token");
export const MaintenancePlans = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const { categories, loading: categoriesLoading, error: categoriesError } = useSelector((state) => state.serviceCategories);
  const { services, loading: servicesLoading, error: servicesError } = useSelector((state) => state.services);
  const getServices = services?.filter((info) => info.serviceCategory._id === id)
  const isFilteredServices = getServices && getServices.length > 0 ? getServices : services;

  const dispatch = useDispatch()
  useEffect(() => {
    if (!services.length) dispatch(fetchServices());
    if (!categories.length) dispatch(fetchServiceCategories());
  }, [dispatch]);
  return (
    <div className="maintenance-plans"
      style={{ marginTop: !id && "4rem" }} >
      <header className="header">
        <h2>Maintenance & Support Plans</h2>
        <p>Keep your systems running smoothly with our comprehensive services.</p>
      </header>
      {/* <ServiceDescription getServices={getServices} /> */}
      <PricBreakDown isFilteredServices={isFilteredServices} />
      <section className="pricing-packages mt-5">
        <h2>Explore our transparent pricing options below and pick what fits your budget.</h2>
        <div>
          <button onClick={() => navigate('/pricing-plans')}>Package Plans</button>
        </div>
      </section>
      {!id && (<CustomQuote/>
        // <footer className="signup ">
        //   <h2>Ready to Get Started?</h2>
        //   <p>Sign up today and enjoy seamless maintenance and support!</p>
        //   <button onClick={() => navigate('/pricing-plans#custom-quote')}>Get a Custom Quote</button>
        // </footer>
      )
    }
    </div>
  );
};


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

const PricBreakDown = ({ isFilteredServices }) => {
  const navigate = useNavigate()
  const handleBooking = (serviceId) => {
    if (token) {
      navigate(`/serviceform/${serviceId}`);
    } else {
      message.warning("Please Login")
      navigate("/login");
    }
  };
  return (
    <section className="pricing-breakdown">
      <div className="services-grid mb-5">
        {
          isFilteredServices.map((serviceItem) => (
            <div className="service-card">
              <div>
                <img src={serviceItem?.image} alt="" />
                <br />
                <div className='d-flex justify-content-between my-3 mt-4 text-start' >
                  <h3><b>{serviceItem.serviceName}</b></h3>
                  <h3 style={{ color: "#D79D45" }}><b>${serviceItem.hourlyCharge}/hr</b></h3>
                </div>
                <p className=''>{serviceItem.shortDescription}</p>
                <div className='serviceFetaure'>
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
              </div>
              <div className='button-container'>
                <button onClick={() => navigate(`/servicedetails/${serviceItem._id}`)}>Know more</button>
                <button onClick={() => handleBooking(serviceItem._id)}>
                  Book now
                </button>
              </div>
            </div>
          ))
        }

      </div>
    </section>

  )
}



const Features = [
  "All basic features",
  "Edge trimming and leveling",
  "Hedge trimming",
  "Basic fertilizer application",
  "Seasonal care suggestions",
]


