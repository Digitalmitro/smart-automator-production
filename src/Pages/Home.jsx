import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import project1 from "../assets/Rectangle 10.png";
import project2 from "../assets/Rectangle 11.png";
import project3 from "../assets/Rectangle 15 (1).png";
import project4 from "../assets/Rectangle 15 (2).png";
import project5 from "../assets/Rectangle 15.png";
import project6 from "../assets/Rectangle 9.png";
import tab1 from "../assets/tab1.png";
import tab2 from "../assets/tab2.png";
import tab3 from "../assets/tab3.png";
import tab4 from "../assets/Rectangle10.png";
import tab5 from "../assets/MaskGroup.jpg";
import blog1 from "../assets/blog1 (1).png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import $ from "jquery";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, useScroll  } from 'framer-motion';
import CountUp from 'react-countup';

import "./Styles/Home.scss"

const Home = () => {
  const { scrollYProgress } = useScroll();
AOS.init()

  $(document).ready(function () {
    $(".counter").each(function () {
      $(this)
        .prop("Counter", 100)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 5000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  });


  return (
    <>
      <section className="">
        <div className="banner-bg ">
          <div
            className="content"
            style={{ textAlign: "center", padding: "100px", color: "#fff" }}
          >
            <motion.h1
          className="para my-3 mb-5"
          style={{ fontWeight: 600, fontSize: "38px", letterSpacing:"5px", wordSpacing:"1px"     }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: .9, x: 0 }}
          transition={{ duration: 2.5}}
        >
           
              CREATE THE BEST HOME
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.5, delay: 0.2 }}
           
            className="banner-heading"
            
            >
              Ready to dive into the internet of things to automate your home?
              Start with the op products we’ve tested for every room{" "}
            </motion.p>

            <div className="search-bar"  data-aos="fade-up"
               data-aos-delay="100" 
               data-aos-duration="2000">
              <input
                type="text"
                class="form-control bannersearch"
                placeholder="search"
                aria-label="search"
                aria-describedby="basic-addon1"
              />

              <button type="button"  class="btn btn-primary bannersearchbtn">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#fef6e7" }}>
        <div className="container">
          <div className="heading">
            <h2 className="text-center fw-bold p-5 " style={{ padding: "25px 0px", letterSpacing:"2px", wordSpacing:"4px" }} 

             data-aos="fade-up"
            //  data-aos-delay="300" 
             data-aos-duration="1300"

            >
              Check Out Our Home Improvement Services
            </h2>
          </div>
          <div
            className="d-flex homeService"
            style={{
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ul class="nav nav-pills my-3 " id="pills-tab" role="tablist">
              <li class="nav-item m-3" role="presentation"
               data-aos="fade-up"
                data-aos-duration="2000"
              >
                <button
                  class="navbutton nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  <i class=" fa-solid fa-wrench"></i>
                </button>
                <h4 className="text-center mt-4 text-secondary">Assemble</h4>
              </li>
              <li class="navbutton nav-item m-3" role="presentation"  data-aos="fade-up"
                data-aos-delay="200" 
                data-aos-duration="1000">
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  <i class="fa-solid fa-broom"></i>
                </button>
                <h4 className="text-center mt-4 text-secondary">Cleaning</h4>
              </li>
              <li class="navbutton nav-item m-3" role="presentation"
               data-aos="fade-up"
               data-aos-delay="400" 
               data-aos-duration="1400">
                <button
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  <i class="fa-solid fa-car-side"></i>
                </button>
                <h4 className="text-center mt-4 text-secondary">Moving</h4>
              </li>
              <li class="navbutton nav-item m-3" role="presentation"  data-aos="fade-up"
                data-aos-delay="600" 
                data-aos-duration="1800">
                <button
                  class="nav-link"
                  id="pills-extra-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-extra"
                  type="button"
                  role="tab"
                  aria-controls="pills-extra"
                  aria-selected="false"
                >
                  <i class="fa-solid fa-paint-roller"></i>
                </button>
                <h4 className="text-center mt-4 text-secondary">Painting</h4>
              </li>
              <li class="navbutton nav-item m-3" role="presentation"  data-aos="fade-up"
                data-aos-delay="800" 
                data-aos-duration="2200">
                <button
                  class="nav-link"
                  id="pills-new-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-new"
                  type="button"
                  role="tab"
                  aria-controls="pills-new"
                  aria-selected="false"
                >
                  <i class="fa-solid fa-hammer"></i>
                </button>
                <h4 className="text-center mt-4 text-secondary">Home Repair</h4>
              </li>
            </ul>
          </div>

          <div class="tab-content " id="pills-tabContent">
            <div
              class="tab-pane fade show active mt-5"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabindex="0"
            >
              <div className="container "
               data-aos="fade-right"
              //  data-aos-delay="100" 
               data-aos-duration="2000"
              >
                <div className="section-3 d-flex align-items-center">
                  <div className="desc flex-1" style={{marginRight:"3rem"}}>
                    <p   data-aos="fade-right"
                          data-aos-delay="100" 
                          data-aos-duration="1500">
                     <strong>
                     Our handymen are extremely well-qualified and have years
                      of professional experience under their belt. experience
                      under their belt
                     </strong>
                    </p>
                    <div className="assembly-container container-fluid pt-3 pr-sm-0" >
                      <div className=" ">
                        <div className=""
                         
                        >
                          <div className="d-flex" style={{ gap: "10px" }}>
                            <button
                              className=" assemblyButton p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              IKEA Assembly
                            </button>
                            <button
                              className="assemblyButton p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Furniture Assembly
                            </button>
                          </div>
                          <div className="d-flex mt-3" style={{ gap: "10px" }}>
                            <button
                              className=" assemblyButton p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Crib Assembly
                            </button>
                            <button
                              className=" assemblyButton p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              PAX Assembly
                            </button>
                          </div>
                          <div className="d-flex mt-3" style={{ gap: "10px" }}>
                            <button
                              className=" assemblyButton p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Desk Assembly
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="p-2 px-4"
                      style={{
                        marginTop: "50px",
                        marginLeft: "10px",
                        borderRadius: "10px",
                        background: "#f9ac25",
                        color: "white",
                        border: "none",
                      }}
                    >
                      View More
                    </button>
                  </div>

                  <div className="assemblyImage m-3">
                    <motion.img
                      className="img-fluid"
                      initial={{ y: -10 }}
                      animate={{ y: 10 }}
                      whileHover={{
                        y: -10,
                        transition: {
                          type: "smooth",
                          repeatType: "mirror",
                          duration: .8,
                          repeat: 1,
                        },
                      }}
                      style={{ width:"530px", height:"350px" }}
                      src={tab1}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade  mt-5"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabindex="0"
            >
              <div className="container">
                <div className="row">
                  <div className="col">
                    <p>
                      Clean your home or office; deep clean appliances and other
                      spaces. Now Trending: Eco-friendly products, home cleaning
                      checklists, and cleaning hacks
                    </p>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-9">
                          <div className="d-flex" style={{ gap: "10px" }}>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Home Cleaning
                            </button>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Office Cleaning
                            </button>
                          </div>
                          <div className="d-flex mt-3" style={{ gap: "10px" }}>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Carpet Cleaning
                            </button>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Window Cleaning
                            </button>
                          </div>
                          <div className="d-flex mt-3" style={{ gap: "10px" }}>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Upholstery Cleaning
                            </button>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Tile & Grout Cleaning
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="p-2"
                      style={{
                        marginTop: "50px",
                        marginLeft: "30px",
                        borderRadius: "15px",
                        background: "#f9ac25",
                        color: "white",
                        border: "none",
                      }}
                    >
                      View More
                    </button>
                  </div>

                  <div className="col">
                    <img
                      className="img-fluid"
                      style={{ zoom: "0.7" }}
                      src={tab2}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade mt-5"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              tabindex="0"
            >
              <div className="container">
                <div className="row">
                  <div className="col">
                    <p>
                      Moving help such as packing/unpacking, loading, and
                      lifting heavy items. Now Trending: Single-item moves,
                      apartment moves, and junk removal.
                    </p>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-9">
                          <div className="d-flex" style={{ gap: "10px" }}>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Local Moving
                            </button>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Long Distance Moving
                            </button>
                          </div>
                          <div className="d-flex mt-3" style={{ gap: "10px" }}>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Furniture Moving
                            </button>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Packing and unpacking
                            </button>
                          </div>
                          <div className="d-flex mt-3" style={{ gap: "10px" }}>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Loading & Unloading
                            </button>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Piano moving
                            </button>
                          </div>
                          <div className="d-flex mt-3" style={{ gap: "10px" }}>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Storage Services
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="p-2"
                      style={{
                        marginTop: "50px",
                        marginLeft: "30px",
                        borderRadius: "15px",
                        background: "#f9ac25",
                        color: "white",
                        border: "none",
                      }}
                    >
                      View More
                    </button>
                  </div>

                  <div className="col">
                    <img
                      className="img-fluid"
                      // style={{ zoom: "0.7" }}
                      src={tab3}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade mt-5"
              id="pills-extra"
              role="tabpanel"
              aria-labelledby="pills-extra-tab"
              tabindex="0"
            >
              <div className="container">
                <div className="row">
                  <div className="col">
                    <p>
                      Paint walls, ceilings, molding, and doors; includes prep
                      and cleanup. Now Trending: Color blocking, stripe details,
                      and statement colors
                    </p>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-9">
                          <div className="d-flex" style={{ gap: "10px" }}>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Interior Painting
                            </button>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Exterior Painting
                            </button>
                          </div>
                          <div className="d-flex mt-3" style={{ gap: "10px" }}>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Wall Painting
                            </button>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Fence Painting
                            </button>
                          </div>
                          <div className="d-flex mt-3" style={{ gap: "10px" }}>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Cabinet Painting
                            </button>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Texture Painting
                            </button>
                          </div>
                          <div className="d-flex mt-3" style={{ gap: "10px" }}>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Trim Painting
                            </button>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="p-2"
                      style={{
                        marginTop: "50px",
                        marginLeft: "30px",
                        borderRadius: "15px",
                        background: "#f9ac25",
                        color: "white",
                        border: "none",
                      }}
                    >
                      View More
                    </button>
                  </div>

                  <div className="col">
                    <img
                      className="img-fluid"
                      style={{ zoom: "0.7" }}
                      src={tab4}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade mt-5"
              id="pills-new"
              role="tabpanel"
              aria-labelledby="pills-new-tab"
              tabindex="0"
            >
              <div className="container ">
                <div className="row mt-5">
                  <div className="col">
                    <p>
                      Our handymen are extremely well-qualified and have years
                      of professional experience under their belt. experience
                      under their belt
                    </p>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-9">
                          <div className="d-flex" style={{ gap: "10px" }}>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Plumbing Repairs
                            </button>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Exterior Painting
                            </button>
                          </div>
                          <div className="d-flex mt-3" style={{ gap: "10px" }}>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              HVAC Repairs
                            </button>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Carpentry Work
                            </button>
                          </div>
                          <div className="d-flex mt-3" style={{ gap: "10px" }}>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Drywall Repair
                            </button>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Door & Window Repair
                            </button>
                          </div>
                          <div className="d-flex mt-3" style={{ gap: "10px" }}>
                            <button
                              className="p-1"
                              style={{ borderRadius: "15px" }}
                            >
                              Roof Repair
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="p-2"
                      style={{
                        marginTop: "50px",
                        padding:"1px 10px",
                        borderRadius: "15px",
                        // background: "#f9ac25",
                        color: "white",
                        border: "none",
                      }}
                    >
                      View More
                    </button>
                  </div>

                  <div className="col">
                    <img
                      className="img-fluid"
                      style={{ zoom: "0.7", height: "500px", width: "500px" }}
                      src={tab5}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <motion.h2 className="text-center p-4 fw-bold mt-5"
          style={{ padding: "25px 0px", letterSpacing:"3px", wordSpacing:"5px" }} 
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 5 }}
          viewport={{ once: true, amount: 0.5 }} 
          >
            POPULAR PROJECT</motion.h2>

          <div className="row" style={{ rowGap: "20px" }}>
            <motion.div class="col-md-4 mb-4 " style={{ columnGap: "60px" }}
             initial={{ y: -10 }}
             animate={{ y: 10 }}
             whileHover={{
               y: -10,
               transition: {
                 type: "smooth",
                 repeatType: "mirror",
                 duration: .8,
                 repeat: 1,
               },
              }}
            
            >
              <div class="card project-card mx-5" data-aos="fade-up"
               data-aos-duration="1300"
             
                >
                <img src={project1} alt="Product 1" class="card-img-top" />
                <div class="card-body project-card">
                  <h6 class="card-title text-center fw-bold">
                    Smart Home Devices
                  </h6>
                  <p class="card-text text-center pb-4">
                    Projects starting at $49
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div class="col-md-4 mb-4"
             initial={{ y: -10 }}
             animate={{ y: 10 }}
             whileHover={{
               y: -10,
               transition: {
                 type: "smooth",
                 repeatType: "mirror",
                 duration: .8,
                 repeat: 1,
               },
              }}
            >
              <div class="card project-card mx-5" data-aos="fade-up"
               data-aos-delay="200" 
               data-aos-duration="1300">
                <img src={project2}  alt="Product 2" class="card-img-top" 
                // style={{whiteSpace: "nowrap"}}
                />
                <div class="card-body project-card">
                  <h6 class="card-title text-center fw-bold" 
                  // style={{whiteSpace: "nowrap"}}
                  >
                    Home Automation Services
                  </h6>
                  <p class="card-text text-center pb-4">
                    Projects starting at $49
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div class="col-md-4 mb-4"
             initial={{ y: -10 }}
             animate={{ y: 10 }}
             whileHover={{
               y: -10,
               transition: {
                 type: "smooth",
                 repeatType: "mirror",
                 duration: .8,
                 repeat: 1,
               },
              }}
              >

              <div class="card project-card mx-5"  data-aos="fade-up"
                data-aos-delay="400" 
                data-aos-duration="1300">
                <img src={project3} alt="Product 3" class="card-img-top" 
               
                />
                <div class="card-body project-card">
                  <h6 class="card-title text-center fw-bold">
                    Energy management
                  </h6>
                  <p class="card-text text-center pb-4">
                    Projects starting at $49
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div class="col-md-4 mb-4" 
             initial={{ y: -10 }}
             animate={{ y: 10 }}
             whileHover={{
               y: -10,
               transition: {
                 type: "smooth",
                 repeatType: "mirror",
                 duration: .8,
                 repeat: 1,
               },
              }}
              >
              <div class="card project-card mx-5"
              data-aos="fade-up"
              data-aos-delay="600" 
              data-aos-duration="1300"
              >
                <img src={project4} alt="Product 4" class="card-img-top" />
                <div class="card-body project-card">
                  <h6 class="card-title text-center fw-bold">
                    Security and Surveillance
                  </h6>
                  <p class="card-text text-center pb-4">
                    Projects starting at $49
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div class="col-md-4 mb-4"
             initial={{ y: -10 }}
             animate={{ y: 10 }}
             whileHover={{
               y: -10,
               transition: {
                 type: "smooth",
                 repeatType: "mirror",
                 duration: .8,
                 repeat: 1,
               },
              }}
              >
              <div class="card project-card mx-5"  data-aos="fade-up"
              data-aos-delay="800" 
              data-aos-duration="1300">
                <img src={project5} alt="Product 5" class="card-img-top" />
                <div class="card-body project-card">
                  <h6 class="card-title text-center fw-bold">
                    Integration and Compatibility
                  </h6>
                  <p class="card-text text-center pb-4">
                    Projects starting at $49
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div class="col-md-4 mb-4" 
             initial={{ y: -10 }}
             animate={{ y: 10 }}
             whileHover={{
               y: -10,
               transition: {
                 type: "smooth",
                 repeatType: "mirror",
                 duration: .8,
                 repeat: 1,
               },
              }}
              >
              <div class="card project-card mx-5"  data-aos="fade-up"
              data-aos-delay="1000" 
              data-aos-duration="1300">
                <img src={project6} alt="Product 6" class="card-img-top" />
                <div class="card-body project-card">
                  <h6 class="card-title text-center fw-bold">
                    Professional installation
                  </h6>
                  <p class="card-text text-center pb-4">
                    Projects starting at $49
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid countdown-bg mt-5">
          <div className="container pt-lg-4 pt-3">
            <div className="row pt-lg-5 gap-4 ">
              <div className="col-md-3">
                <div class="counter-box colored"  data-aos="fade-up"
                  data-aos-delay="200" 
                  data-aos-duration="2000"> 
                  {/* <CountUp end={642}
                  duration={2}   startOnScroll  /> */}
                  <span class="counter"

                  // zoom-in
                  >642</span>
                  <p>Lock Installed</p>
                </div>
              </div>

              <div className="col-md-3" >
                <div class="counter-box colored"                   data-aos="fade-up"
                  data-aos-delay="400" 
                  data-aos-duration="2000">
                  <span class="counter">746</span>
                  <p>Happy Customers</p>
                </div>
              </div>
              <div className="col-md-3"              
                   data-aos="fade-up"
                  data-aos-delay="600" 
                  data-aos-duration="2000">
                <div class="counter-box colored">
                  <span class="counter">3456</span>
                  <p>Coffe Cups</p>
                </div>
              </div>
              <div className="col-md-3"
                                data-aos="fade-up"
                                data-aos-delay="800" 
                                data-aos-duration="2000"
                                >
                <div class="counter-box colored">
                  <span class="counter">431</span>
                  <p>Premises Secured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="" style={{ backgroundColor: "#fef6e7", padding:"10px",  }}>
        <div className="container pt-5 mt-5"                   >
          <h4 className="text-center" style={{ color: "#F9AC25" }} data-aos="zoom-in"
                  data-aos-delay="100" 
                  data-aos-duration="2000">
            -Testimonials-
          </h4>
          <h1 className="text-center" data-aos="zoom-in"
                  data-aos-delay="100" 
                  data-aos-duration="2000">What Our Client Say</h1>
          <div class="gradient-custom">
            <div class="container " data-aos="zoom-in"
                  data-aos-delay="100" 
                  data-aos-duration="2000">
              <div class="row d-flex justify-content-center">
                <div class="col-md-12">
                  <div class="text-center mb-4 pb-2">
                    <i class="fas fa-quote-left fa-3x text-white"></i>
                  </div>

                  <div class="card">
                    <div class="card-body px-4 py-5">
                      <div
                        id="carouselDarkVariant"
                        class="carousel slide carousel-dark"
                        data-bs-ride="carousel"
                      >
                        <div class="carousel-indicators mb-0">
                          <button
                            type="button"
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                        </div>

                        <div class="carousel-inner pb-5">
                          <div class="carousel-item active">
                            <div class="row d-flex justify-content-center">
                              <div class="col-lg-10 col-xl-8">
                                <div class="row">
                                  <div class="col-lg-4 d-flex justify-content-center">
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                      class="rounded-circle shadow-1 mb-4 mb-lg-0"
                                      alt="woman avatar"
                                      width="150"
                                      height="150"
                                    />
                                  </div>
                                  <div class="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                    <h4 class="mb-4">
                                      Maria Smantha - Web Developer
                                    </h4>
                                    <p class="mb-0 pb-3">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. A aliquam amet animi
                                      blanditiis consequatur debitis dicta
                                      distinctio, enim error eum iste libero
                                      modi nam natus perferendis possimus quasi
                                      sint sit tempora voluptatem. Est,
                                      exercitationem id ipsa ipsum laboriosam
                                      perferendis.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="carousel-item">
                            <div class="row d-flex justify-content-center">
                              <div class="col-lg-10 col-xl-8">
                                <div class="row">
                                  <div class="col-lg-4 d-flex justify-content-center">
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                      class="rounded-circle shadow-1 mb-4 mb-lg-0"
                                      alt="woman avatar"
                                      width="150"
                                      height="150"
                                    />
                                  </div>
                                  <div class="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                    <h4 class="mb-4">
                                      Lisa Cudrow - Graphic Designer
                                    </h4>
                                    <p class="mb-0 pb-3">
                                      Sed ut perspiciatis unde omnis iste natus
                                      error sit voluptatem accusantium
                                      doloremque laudantium, totam rem aperiam,
                                      eaque ipsa quae ab illo inventore
                                      veritatis et quasi architecto beatae vitae
                                      dicta sunt explicabo. Nemo enim ipsam
                                      voluptatem quia voluptas sit aspernatur.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="carousel-item">
                            <div class="row d-flex justify-content-center">
                              <div class="col-lg-10 col-xl-8">
                                <div class="row">
                                  <div class="col-lg-4 d-flex justify-content-center">
                                    <img
                                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                      class="rounded-circle shadow-1 mb-4 mb-lg-0"
                                      alt="woman avatar"
                                      width="150"
                                      height="150"
                                    />
                                  </div>
                                  <div class="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                    <h4 class="mb-4">
                                      John Smith - Marketing Specialist
                                    </h4>
                                    <p class="mb-0 pb-3">
                                      At vero eos et accusamus et iusto odio
                                      dignissimos qui blanditiis praesentium
                                      voluptatum deleniti atque corrupti quos
                                      dolores et quas molestias excepturi sint
                                      occaecati cupiditate non provident,
                                      similique sunt in culpa qui officia
                                      mollitia animi id laborum et dolorum fuga.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button
                          class="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselDarkVariant"
                          data-bs-slide="prev"
                        >
                          <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                          class="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselDarkVariant"
                          data-bs-slide="next"
                        >
                          <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="text-center mt-4 pt-2">
                    <i class="fas fa-quote-right fa-3x text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#fffaf2" }}>
        <div className="container pt-5">
          <h4 className="text-center" style={{ color: "#F9AC25" }} data-aos="zoom-in-out"
                  data-aos-delay="100" 
                  data-aos-duration="2000">
            -News-
          </h4>
          <h1 className="text-center"
          data-aos="zoom-in"
          data-aos-delay="300" 
          data-aos-duration="2000"
          >LATEST ARTICLES</h1>

          <div className="row pt-2">
            <div class="col-md-4 mb-4 "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"

            >
              <div class="card blog-card shadow mb-5 bg-body rounded m-4">
                <img src={blog1} alt="Product 1" class="card-img-top" />
                <div class="card-body blog-card " style={{zoom:"0.8"}}>
                  <h5 class="card-title text-center py-2">
                    WE NEED A 
                    RENT ROOM FOR PARTY
                  </h5>
                  <p class="card-text text-center">
                    many desktop publishing packages and web page editorsnow use
                    Lorem Ipsum as their default model text
                  </p>
                  <p className=" text-center fw-bold">Read More</p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4"
               data-aos="flip-left"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000"
               >
              <div class="card blog-card shadow mb-5 bg-body rounded m-4">
                <img src={blog2} alt="Product 1" class="card-img-top" />
                <div class="card-body blog-card" style={{zoom:"0.8"}}>
                  <h5 class="card-title text-center py-2">
                    WE NEED A
                    RENT ROOM FOR PARTY
                  </h5>
                  <p class="card-text text-center">
                    many desktop publishing packages and web page editorsnow use
                    Lorem Ipsum as their default model text
                  </p>
                  <p className=" text-center fw-bold">Read More</p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4"
             
               >
              <div class="card blog-card shadow mb-5 bg-body rounded m-4"   data-aos="flip-left"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000">
                <img src={blog3} alt="Product 1" class="card-img-top" />
                <div class="card-body blog-card" style={{zoom:"0.8"}}>
                  <h5 class="card-title text-center py-2">
                    WE NEED A 
                    RENT ROOM FOR PARTY
                  </h5>
                  <p class="card-text text-center">
                    many desktop publishing packages and web page editorsnow use
                    Lorem Ipsum as their default model text
                  </p>
                  <p className=" text-center fw-bold">Read More</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="container-fluid mt-5"
        style={{ backgroundColor: "#F9AC25", height: "180px" }}
      >
        <div className="container pt-5">
          <div className="row">
            <div className="col-12 col-md">
              <h3 className="pt-1">STAY TUNED WITH UPDATES</h3>
            </div>
            <div className="col d-flex py-sm-5 pt-sm-3 ">
              <input
                type="text"
                class="form-control footer-input"
                placeholder="serach"
                aria-label="search"
                aria-describedby="basic-addon1"
              />
              <button
                className="mx-2"
                style={{ width: "80px", border: "none", margin:"", borderRadius: "20px", border:"2px solid grey" }}
              >
              <strong style={{color:"grey"}}>SIGN UP</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
