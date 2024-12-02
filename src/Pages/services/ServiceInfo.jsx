import React, { useEffect, useState } from "react";
import bagImage from "./assets/backgroundImag.jpg";
import logoImg from "./assets/logo.jpg";
import serviceInfo2 from "./assets/serviceInfo2.jpg";
import serviceInfobanner from "./assets/serviceinfobanner.jpg";
import image12 from "./assets/serviceDescription.jpg";
import "./styles/ServiceInfo.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FAQ } from "./FAQ";
import { useSelector, useDispatch } from "react-redux";
import { fetchServices } from "../../redux/services/ServicesSlice";
import { fetchServiceCategories } from "../../redux/services/ServiceCategorySlice";
import { MaintenancePlans } from "../maintainancePlansPage/MaintainancePlansPage";

export const ServiceInfo = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  const [filterService, setFilterService] = useState(null)
  const { categories, loading: categoriesLoading, error: categoriesError } = useSelector((state) => state.serviceCategories);
  const { services, loading: servicesLoading, error: servicesError } = useSelector((state) => state.services);
  const getCategories = categories?.filter((info) => info._id === id)


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(fetchServiceCategories());
    dispatch(fetchServices());
  }, [dispatch]);

  useEffect(() => {
    const checkMyService = services?.filter((data) => data.serviceCategory.name === getCategories[0].name)
    setFilterService(checkMyService)
  }, [])

  if (categoriesLoading || servicesLoading) return <p>Loading...</p>;
  if (categoriesError) return <p>Error: {categoriesError}</p>;
  if (servicesError) return <p>Error: {servicesError}</p>;


  return (
    <div className="service-info">
      <ServiceContent services={services} getCategories={getCategories} />
      <div>
        <ServiceDescription filterService={filterService} />

        <MaintenancePlans />
        <AboutServices getCategories={getCategories} />
        <OtherServices categories={categories}/>
        <FAQ />
      </div>
    </div>
  );
};

export const ServiceContent = ({ services, getCategories }) => {
  const navigate = useNavigate()

  return (
    <div className="service-content" style={{ backgroundImage: `url(${getCategories[0]?.image || ''})` }}>

      {getCategories?.map((item) => {
        return (
          <div className="content">
            <h1>{item?.name.toUpperCase()}</h1>
            <p>
              {item.description}
            </p>
            <button onClick={() => navigate(`/serviceform/${item._id}`)}>Book now</button>
          </div>
        )
      })}

    </div>
  );
};

export const ServiceDescription = ({ filterService }) => {
  const navigate = useNavigate()

  return (
    <>
      <div className="service-description">
        <div className="  Links d-flex">
          <Link to="/"> Home </Link>
          <Link to="/services"> Services </Link>
          <Link to=""> Handyman </Link>
        </div>

        {/* <div className="service-section d-flex gap-3">
          <div className="left ">
            {filterService?.map((item) => {
              return (

                <div className="service-list d-flex gap-3">
                  <img src={serviceInfo2} alt="" />
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
          <div className="right">
            <h3>Cross off that to-do</h3>
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
            </p>

            <div>
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
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export const AboutServices = ({ getCategories }) => {
  return (
    <div className="aboutServices text-center">
      <h1>{getCategories[0]?.name}</h1>

      {getCategories?.map((item) => (

        <div className=" m-auto">
          <div>
            <img src={item.image} alt="" />
          </div>
          <div className="desc m-auto">
            <p>
             {item.description}
            </p>

            <p>
              <span> Why hire a {item.name}?</span>
            </p>
            <p>
              {" "}
              Everyone has different skillsets, and some of us are better off not
              trying to fix things around the house… and some of us just can’t be
              bothered. Either way, Taskers are happy to help provide all sorts of
              handyman services to help you keep your house in good order.{" "}
            </p>
           
            <p>
              <span> No tools? No problem.</span>
            </p>
            <p>
              Taskers will come with their own supplies needed for the job. Let
              your Tasker know if you’d like an estimate before starting a large
              project, and chat with them to ensure they have the necessary
              licenses for the job, if a license is needed.{" "}
            </p>
            <p>
              <span>Same day services available</span>
            </p>

            <p>
              Most Taskers live right around the corner from you, and are
              available for same-day services. Just let them know when you’d like
              them to come by and see who’s available!
            </p>
          </div>


        </div>
      ))}
    </div>
  );
};

export const OtherServices = ({categories}) => {

  return (
    <div className="other-services">
      <h1> Search other tasks</h1>
      <div className="grid-container">
        {categories.map((item) => (
          <p>{item.name}</p>
        ))}
       
      </div>
    </div>
  );
};
