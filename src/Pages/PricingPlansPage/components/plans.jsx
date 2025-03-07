import React, { useState, useEffect } from 'react';
import styles from "../styles/plans.module.scss"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SvgRepo } from '../../../components/SvgRepo/SvgRepo';
import { fetchServices } from '../../../redux/services/ServicesSlice';
import { fetchServiceCategories } from '../../../redux/services/ServiceCategorySlice';


export const Plans = () => {

    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()
    const { id } = useParams()
    const { categories, loading: categoriesLoading, error: categoriesError } = useSelector((state) => state.serviceCategories);
    const { services, loading: servicesLoading, error: servicesError } = useSelector((state) => state.services);
    const getCategories = categories?.filter((info) => info._id === id)
  
    // const getServices = services?.filter((data)=> data.serviceCategory.name === getCategories[0].name)


    useEffect(() => {
      dispatch(fetchServiceCategories());
      dispatch(fetchServices());
    }, [dispatch]);
  
    useEffect(() => {
      // const fetchPlans = async () => {
      //     try {
      //         const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/plan/plans`);
      //         setPlans(response.data); // Assuming API returns an array of plans
      //         setLoading(false);
      //     } catch (error) {
      //         console.error("Error fetching plans:", error);
      //         setLoading(false);
      //     }
      // };
  
      // fetchPlans();
    }, []);

    return (
      <div className={styles.plans}>
        <div>
          <table>
            <thead>
              <tr>
                <td><b>Plans</b></td>
               
                  <th  className={styles.basics}>
                  <b> Basics</b>
                  </th>
                  <th  className={styles.advance}>
                   <b>Advance</b>
                  </th>
                  <th  className={styles.premium}>
                   <b>premium</b>
                  </th>
              
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.headingPara}>
                  <p>Lorem Ipsum has been make a type specimen book. It has survived not only five centuries</p>
                </td>
              
                  <td  className={styles.discount}>
                  <h5><b style={{color:"red"}}> {GeneralFeatures.basic.Discount}</b></h5>
                  </td>
                  <td  className={styles.discount}>
                   <h5 style={{color:"red"}}><b>{GeneralFeatures.advance.Discount}</b></h5>
                  </td>
                  <td  className={styles.discount}>
                 <h5> <b style={{color:"red"}}> {GeneralFeatures.premium.Discount}</b></h5>
                  </td>
              
              </tr>
              {services.map((item, itemIndex) => (
              <tr >
                <td className={styles.planList}>
  
                  <span><b> {item.serviceName}</b> </span>
                  {/* <span>{item}</span> */}
                </td>
                <td>
                <b> $ </b> {parseInt(item.hourlyCharge)}<b>/hr</b>
                </td>
                <td>
                <b> $ </b> {parseInt(item.hourlyCharge)*((100-15)/100)}<b>/hr</b>
                </td>
                <td>
                 <b> $ </b>     {parseInt(item.hourlyCharge)*((100-20)/100)}<b>/hr</b>
                </td>
             {/* {plans.map((plan, planIndex) => (
                                      <td key={planIndex}>
                                          {plan.features[featureIndex]?.value === true ? svg.tick : svg.wrong}
                                      </td>
                                  ))}  */}
              </tr>
              ))} 
  
            </tbody>
          </table>
  
  
          <div className={styles.footerText}>
            <p><b> # </b> Lorem Ipsum has been make a type specimen book. It has survived not only five centuries <br />
  
              <b> * </b> Lorem Ipsum has been a type specimen book. It has survived </p>
  
          </div>
        </div>
  
      </div>
    )
  }
  

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
  
  
  