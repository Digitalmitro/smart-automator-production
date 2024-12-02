import React, { useEffect } from 'react';
import './styles/maintenancePlans.scss';
import { FaCheckCircle, FaWrench, FaClock, FaCloudDownloadAlt } from 'react-icons/fa';
import { fetchServices } from '../../redux/services/ServicesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchServiceCategories } from '../../redux/services/ServiceCategorySlice';
import { SvgRepo } from '../../components/SvgRepo/SvgRepo';
import image1 from "./assets/basics2.png"
import image2 from "./assets/advance2.png"
import serviceInfo2 from "./assets/serviceInfo2.jpg";
import image3 from "./assets/premium3.png"
export const MaintenancePlans = () => {

  const { id } = useParams()
  const { categories, loading: categoriesLoading, error: categoriesError } = useSelector((state) => state.serviceCategories);
  const { services, loading: servicesLoading, error: servicesError } = useSelector((state) => state.services);
  const getServices = services?.filter((info) => info.serviceCategory._id === id)
  console.log("getServices", getServices)

  const dispatch = useDispatch()
  useEffect(() => {
    if (!services.length) dispatch(fetchServices());
    if (!categories.length) dispatch(fetchServiceCategories());
  }, [dispatch]);
  return (
    <div className="maintenance-plans">
      <header className="header">
        <h2>Maintenance & Support Plans</h2>
        <p>Keep your systems running smoothly with our comprehensive services.</p>
      </header>
      {/* <ServiceDescription getServices={getServices} /> */}
      <PricBreakDown getServices={getServices} />


      <footer className="signup">
            <h2>Ready to Get Started?</h2>
            <p>Sign up today and enjoy seamless maintenance and support!</p>
            <button>Get a Custom Quote</button>
          </footer>

    </div>
  );
};

const ServiceDescription = ({ getServices }) => {
  const navigate = useNavigate()

  return (
    <>
      <div className="service-description">


        <div className="service-section ">
          <div className="left ">
            {getServices?.map((item) => {
              return (

                <div className="service-list d-flex gap-3">
                  <img src={item.image} alt="" />
                  <div>
                    <h3>{item.serviceName}</h3>
                    <p>
                      Hire a Tasker to fix your doors, cabinets, and even furniture.
                    </p>
                    <button onClick={() => navigate(`/serviceform/${item._id}`)}>Book Now</button>
                  </div>
                </div>
              )
            })}


          </div>

          <section className="pricing-packages">
            <h2>Explore our transparent pricing options below and pick what fits your budget.</h2>
            <div>
              <button onClick={() => navigate('/pricing-plans')}>Package Plans</button>
            </div>

          </section>


      


          <div className="right">
            {/* <h3>Cross off that to-do</h3>
            <h4>

              <span> 1 </span>Select Your Task
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
            </p> */}

            {/* <div>
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

const PricePackages = ({ services }) => {
  return (
    <section className="pricing-packages">
      <h2>Explore our transparent pricing options below and pick what fits your budget.</h2>
      <div>
        <button>Pricing Plans</button>
      </div>
      {/* <div className="package-grid">
        <div className="package-card">
          <h3 className='Basic'>Basic</h3>
          <div>
          <p><b>Essential services for small projects.</b></p>
          <span style={{ marginTop: "3rem !important" }}>
            <img className="basicImage" src={image1} alt="" />

          </span>
          <div className="price">$199/<span>month</span></div>
         
          {GeneralFeatures.basic.features.map((basicITems) => (
            <div className='features'>
            <span>{SvgRepo.tick}</span>
            <span>{basicITems}</span>

            </div>
          ))}
          <br/>
          <button>Subscribe Today</button>
          </div>

        </div>
        <div className="package-card highlighted">
          <h3 className='Advance'>Advanced</h3>
          <p><b>Best for larger projects and frequent tasks.</b></p>
          <img src={image2} className="advImage" alt="" />

          <div className="price">$399/<span>month</span></div>
          {GeneralFeatures.basic.features.map((basicITems) => (
            <div className='features'>
            <span>{SvgRepo.tick}</span>
            <span>{basicITems}</span>

            </div>
          ))}
          <br/>
          <button>Subscribe Today</button>

        </div>
        <div className="package-card">
          <h3  className='premium'>Premium</h3>
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
          ))} <br/>
          <button>Subscribe Today</button>

        </div>
      </div> */}
    </section>
  )
}

const PricBreakDown = ({ getServices }) => {
  const navigate = useNavigate()
  return (
    <div>
      <section className="pricing-breakdown">
        <div className="services-grid">
          {
            getServices.map((serviceItem) => (
              <div className="service-card">
                <img src={serviceItem?.image} alt="" />
                <br />
                <div className='d-flex justify-content-between my-3 mt-4 text-start' >
                  <h3><b>{serviceItem.serviceName}</b></h3>
                  <h3 style={{ color: "#D79D45" }}><b>${serviceItem.hourlyCharge}/hr</b></h3>
                </div>
                <p className=''>{serviceItem.shortDescription}</p>
                <div>
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
                <div className='button-container'>

                <button onClick={() => navigate(`/servicedetails/${serviceItem._id}`)}>Know more</button>
                <button onClick={() => navigate(`/serviceform/${serviceItem._id}`)}>
                    Book now
                  </button>
                  </div>
               
              </div>

            ))
          }

          {/* <div className="service-card">
            <img src={getServices[0]?.image} alt="" />
            <div className='flex'>
              <h3>For monthly SubsCriber All time lowest Price </h3>
            </div>
            <p>$35/hr</p>
          </div> */}

        </div>
      </section>
    </div>
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

const Features = [
  "All basic features",
  "Edge trimming and leveling",
  "Hedge trimming",
  "Basic fertilizer application",
  "Seasonal care suggestions",
]

const PlansData = [
  {
    service: "Lawn Mowing",
    basic: {
      price: 30,
      description: "Basic lawn mowing",
      features: [
        "Basic lawn mowing",
        "Removal of visible weeds",
        "Trimming along paths",
        "Lawn edging",
        "Bagging clippings",
      ],
    },
    advance: {
      price: 60,
      description: "Lawn mowing with edge trimming",
      features: [
        "All basic features",
        "Edge trimming and leveling",
        "Hedge trimming",
        "Basic fertilizer application",
        "Seasonal care suggestions",
      ],
    },
    premium: {
      price: 90,
      description: "Full lawn care and maintenance",
      features: [
        "All advance features",
        "Comprehensive lawn care",
        "Fertilizer and pest treatment",
        "Soil testing",
        "Aeration and reseeding",
      ],
    },
  },
  {
    service: "House Cleaning",
    basic: {
      price: 50,
      description: "Basic cleaning services",
      features: [
        "Dusting and vacuuming",
        "Mopping floors",
        "Trash removal",
        "Surface cleaning (counters, tables)",
        "Basic bathroom cleaning",
      ],
    },
    advance: {
      price: 80,
      description: "Deep cleaning with premium materials",
      features: [
        "All basic features",
        "Deep cleaning of corners",
        "Window cleaning",
        "Appliance exterior cleaning",
        "Basic sanitization",
      ],
    },
    premium: {
      price: 120,
      description: "Deep cleaning plus sanitization",
      features: [
        "All advance features",
        "Complete sanitization",
        "Cleaning of hard-to-reach areas",
        "Appliance interior cleaning",
        "Odor removal and air freshening",
      ],
    },
  },
  {
    service: "Painting Services",
    basic: {
      price: 500,
      description: "Interior walls only",
      features: [
        "Interior walls painting",
        "One coat application",
        "Standard paint quality",
        "Prepping surfaces",
        "Basic touch-ups",
      ],
    },
    advance: {
      price: 900,
      description: "Interior and exterior walls",
      features: [
        "All basic features",
        "Two coats of paint",
        "Higher paint quality",
        "Minor wall repairs",
        "Ceiling painting",
      ],
    },
    premium: {
      price: 1500,
      description: "Premium paint with customization",
      features: [
        "All advance features",
        "Customized color palettes",
        "Premium paint quality",
        "Detailed trim painting",
        "Furniture and flooring protection",
      ],
    },
  },
  {
    service: "Carpet Cleaning",
    basic: {
      price: 40,
      description: "Vacuum and spot cleaning",
      features: [
        "Vacuum cleaning",
        "Spot treatment",
        "Pet hair removal",
        "Basic stain removal",
        "Quick drying",
      ],
    },
    advance: {
      price: 70,
      description: "Deep steam cleaning",
      features: [
        "All basic features",
        "Deep steam cleaning",
        "Odor treatment",
        "Heavy stain removal",
        "Fabric protection application",
      ],
    },
    premium: {
      price: 100,
      description: "Steam cleaning plus deodorizing",
      features: [
        "All advance features",
        "Deodorizing and sanitizing",
        "Mold and mildew treatment",
        "Allergen removal",
        "Restoration-grade cleaning",
      ],
    },
  },
  {
    service: "Pest Control",
    basic: {
      price: 80,
      description: "Standard pest treatment",
      features: [
        "Basic pest treatment",
        "Treatment for common pests",
        "Indoor spray application",
        "Safety precautions guidance",
        "Limited warranty",
      ],
    },
    advance: {
      price: 150,
      description: "Pest treatment with eco-friendly products",
      features: [
        "All basic features",
        "Eco-friendly treatments",
        "Treatment for advanced pests",
        "Exterior application",
        "90-day warranty",
      ],
    },
    premium: {
      price: 250,
      description: "Advanced treatment with warranty",
      features: [
        "All advance features",
        "Advanced pest treatment",
        "Termite and rodent control",
        "Preventive barrier application",
        "1-year warranty",
      ],
    },
  },
];
