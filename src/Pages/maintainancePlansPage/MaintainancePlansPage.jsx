import React, { useEffect } from 'react';
import './styles/maintenancePlans.scss';
import { FaCheckCircle, FaWrench, FaClock, FaCloudDownloadAlt } from 'react-icons/fa';
import { fetchServices } from '../../redux/services/ServicesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchServiceCategories } from '../../redux/services/ServiceCategorySlice';
import { SvgRepo } from '../../components/SvgRepo/SvgRepo';
import image1 from "./assets/basics2.png"
import image2 from "./assets/advance2.png"
import image3 from "./assets/premium3.png"
export const MaintenancePlans = () => {

  const { id } = useParams()
  const { categories, loading: categoriesLoading, error: categoriesError } = useSelector((state) => state.serviceCategories);
  const { services, loading: servicesLoading, error: servicesError } = useSelector((state) => state.services);
  const getServices = services?.filter((info) => info.serviceCategory._id === id)
  console.log("getServices", getServices)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchServices());
    dispatch(fetchServiceCategories());
  }, [dispatch]);
  return (
    <div className="maintenance-plans">
      <header className="header">
        <h1>Maintenance & Support Plans</h1>
        <p>Keep your systems running smoothly with our comprehensive services.</p>
      </header>
<PricBreakDown getServices={getServices}/>
      {/* <section className="features">
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
      </section> */}
<PricePackages/>
      {/* <section className="plans">
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
      </section> */}

      <footer className="signup">
        <h2>Ready to Get Started?</h2>
        <p>Sign up today and enjoy seamless maintenance and support!</p>
        <button>Get a Custom Quote</button>
      </footer>
    </div>
  );
};

const PricePackages = ({services}) => {
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
          <br/>
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
      </div>
    </section>
  )
}



const PricBreakDown = ({ getServices }) => {
  return (
    <div>

      <section className="pricing-breakdown">
        <h2>Pricing Discounts</h2>
        <div className="services-grid">
{
            getServices.map((serviceItem)=> (
              <div className="service-card">
              <img src={serviceItem?.image} alt="" />
              <br/>
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

const Features= [
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
