import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import project1 from "../assets/Rectangle 10.png";
import project2 from "../assets/Rectangle 11.png";
import project3 from "../assets/Rectangle 15 (1).png";
import project4 from "../assets/Rectangle 15 (2).png";
import project5 from "../assets/Rectangle 15.png";
import project6 from "../assets/Rectangle 9.png";
import $ from "jquery";

import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useScroll } from "framer-motion";
import CountUp from "react-countup";

import "./Styles/Home.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  // const [blogs, setBlogs] = useState();
  AOS.init();

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

  const [homeData, setHomeData] = useState(null);
  const [serviceCategories, setServiceCategories] = useState(null);
  const [service, setService] = useState(null);
  const [featuredServices, setFeaturedServices] = useState(null);
  const [testimonials, setTestimonials] = useState([]);

  const getHomeContent = async () => {
    await axios
      .get(`${import.meta.env.VITE_SOME_KEY}/home-cms`)
      .then((res) => {
        setHomeData(res.data.homeCMS.homePage);
        console.log("hffghy",res.data.homeCMS.homePage)
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getServiceCategories = async () => {
    await axios
      .get(`${import.meta.env.VITE_SOME_KEY}/client/service-categories`)
      .then((res) => {
        setServiceCategories(res.data.categories);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getTestimonials = async () => {
    await axios
      .get(`${import.meta.env.VITE_SOME_KEY}/get-testimonials`)
      .then((res) => {
        setTestimonials(res.data.testimonials);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getService = async () => {
    await axios
      .get(`${import.meta.env.VITE_SOME_KEY}/client/services`)
      .then((res) => {
        const isFeatured = res?.data?.services.filter(
          (item) => item.isFeatured
        );
        setService(res?.data?.services);
        setFeaturedServices(isFeatured);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getHomeContent();
    getServiceCategories();
    getService();
    getTestimonials();
    // getBlogs()
  }, []);

  return (
    <>
      <section className="home-page">
        <div
          className="banner-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${homeData?.banner})`,
            backgroundBlendMode: "multiply",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="content"
            style={{ textAlign: "center", padding: "100px", color: "#fff" }}
          >
            <motion.h1
              className="para my-3 mb-5"
              style={{
                fontWeight: 600,
                fontSize: "38px",
                letterSpacing: "5px",
                wordSpacing: "1px",
                textTransform: "uppercase",
              }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 0.9, x: 0 }}
              transition={{ duration: 2.5 }}
            >
              {homeData?.heading}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.5, delay: 0.2 }}
              className="banner-heading"
            >
              {homeData?.description}{" "}
            </motion.p>

            <div
              className="search-bar"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="2000"
            >
              <input
                type="text"
                class="form-control bannersearch"
                placeholder="search"
                aria-label="search"
                aria-describedby="basic-addon1"
              />

              <button type="button" class="btn btn-primary bannersearchbtn">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#fef6e7", paddingBottom: "3.5rem" }}>
        <div className="container-fluid">
          <div className="heading">
            <p
              style={{
                padding: "10px 200px",
                letterSpacing: "2px",
                wordSpacing: "4px",
              }}
              className="pt-5"
            >
              Welcome to Smart Automator, your trusted partner in turning
              ordinary spaces into extraordinary homes across New York City.
              Whether you&#39;re dreaming of a high-tech smart home, a
              beautifully renovated kitchen, or energy-efficient lighting that
              responds to your voice, we deliver innovative solutions tailored
              to your lifestyle. At Smart Automator, we don’t just improve
              homes—we reimagine them. With years of experience in home
              automation, renovation, and tech-enabled design, our mission is to
              make your home smarter, more efficient, and effortlessly elegant.
            </p>
            <h2
              className="text-center fw-bold p-5 "
              style={{
                padding: "5px 0px",
                letterSpacing: "2px",
                wordSpacing: "4px",
              }}
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
            <ul
              className="nav nav-pills my-3"
              id="pills-tab"
              role="tablist"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)", // Three items per row
                gap: "20px", // Space between items
                justifyContent: "center",
                alignItems: "center",
                padding: "0", // Remove padding for a clean grid layout
                listStyle: "none", // Remove bullet points
              }}
            >
              {serviceCategories?.length > 0 &&
                serviceCategories.slice(0, 6).map((elem, index) => {
                  return (
                    <Link to="/services">
                      <li
                        key={index}
                        className="nav-item"
                        role="presentation"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        style={{
                          display: "flex",
                          flexDirection: "column", // Stack image and text vertically
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <button
                          className="navbutton nav-link active"
                          id={`pills-${index}-tab`}
                          data-bs-toggle="pill"
                          data-bs-target={`#pills-${index}`}
                          type="button"
                          role="tab"
                          aria-controls={`pills-${index}`}
                          aria-selected={index === 0}
                          style={{
                            background: "none",
                            border: "none",
                            padding: "0",
                            cursor: "pointer",
                          }}
                        >
                          <img
                            src={elem.logo ?? elem.image}
                            alt={elem.name}
                            style={{
                              width: "96%",
                              height: "96%",
                              objectFit: "cover",
                              borderRadius: "50%",
                              boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)", // Optional: Shadow for better aesthetics
                            }}
                          />
                        </button>
                        <br />
                        <h4
                          className="text-center text-secondary mt-2"
                          style={{
                            textTransform: "capitalize",
                            fontSize: "1rem",
                            marginTop: "10px",
                          }}
                        >
                          {elem.name}
                        </h4>
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2
            className="text-center fw-bold pt-5 "
            style={{
              padding: "5px 0px",
              letterSpacing: "2px",
              wordSpacing: "4px",
            }}
            data-aos="fade-up"
            //  data-aos-delay="300"
            data-aos-duration="1300"
          >
            Discover the Future of Home Living
          </h2>
          <p
            style={{
              padding: "10px 200px",
              letterSpacing: "2px",
              wordSpacing: "4px",
            }}
            className="pt-5"
          >
            New York is fast-paced, and your home should be your sanctuary. We
            specialize in combining style, function, and technology to create
            customized home improvement solutions that reflect how you live
            today—and how you’ll live tomorrow. From cozy apartments to spacious
            brownstones, we understand the unique challenges of NYC properties.
            Our team works closely with you to design, build, and integrate
            improvements that align with your vision, budget, and space.
          </p>
        </div>
        <div className=" popular-project container">
          <motion.h2
            className="text-center p-4 fw-bold mt-5"
            style={{
              padding: "25px 0px",
              letterSpacing: "3px",
              wordSpacing: "5px",
            }}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            POPULAR PROJECTS
          </motion.h2>

          <div className="row" style={{ rowGap: "20px" }}>
            {featuredServices?.map((serviceList) => (
              <>
                <motion.div
                  class="col-md-4 mb-4 "
                  style={{ columnGap: "60px" }}
                  initial={{ y: -10 }}
                  animate={{ y: 10 }}
                  whileHover={{
                    y: -10,
                    transition: {
                      type: "smooth",
                      repeatType: "mirror",
                      duration: 0.8,
                      repeat: 1,
                    },
                  }}
                >
                  <div
                    class="card project-card mx-5"
                    data-aos="fade-up"
                    data-aos-duration="1300"
                    onClick={() =>
                      navigate(`/servicedetails/${serviceList._id}`)
                    }
                  >
                    <img
                      src={serviceList.image}
                      alt="Product 1"
                      class="card-img-top"
                    />
                    <div class="card-body ">
                      <h6 class="card-title text-center fw-bold">
                        {serviceList.serviceName}
                      </h6>
                      <p class="card-text text-center pb-4">
                        Projects starting at $49
                      </p>
                    </div>
                  </div>
                </motion.div>
              </>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid countdown-bg mt-5">
          <div className="container pt-lg-4 pt-3">
            <div className="row pt-lg-5 ">
              <div className="col-md-3">
                <div
                  class="counter-box colored"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="2000"
                >
                  {/* <CountUp end={642}
                  duration={2}   startOnScroll  /> */}
                  <span
                    class="counter"

                    // zoom-in
                  >
                    642
                  </span>
                  <p>Lock Installed</p>
                </div>
              </div>

              <div className="col-md-3">
                <div
                  class="counter-box colored"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="2000"
                >
                  <span class="counter">746</span>
                  <p>Happy Customers</p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="2000"
              >
                <div class="counter-box colored">
                  <span class="counter">3456</span>
                  <p>Coffe Cups</p>
                </div>
              </div>
              <div
                className="col-md-3"
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

      <section
        className=""
        style={{ backgroundColor: "#fef6e7", padding: "10px" }}
      >
        <div>
          <h2
            className="text-center fw-bold pt-5 "
            style={{
              padding: "5px 0px",
              letterSpacing: "2px",
              wordSpacing: "4px",
            }}
            data-aos="fade-up"
            //  data-aos-delay="300"
            data-aos-duration="1300"
          >
            Why Choose Smart Automator?
          </h2>
          <ul
            style={{
              padding: "10px 200px",
              letterSpacing: "2px",
              wordSpacing: "4px",
            }}
            className="pt-5"
          >
            <li>
              <b>NYC Experts:</b> We know the city—its apartments, townhomes, and
              co-ops—and we know how to navigate building codes, permits, and
              space limitations to get the job done right.
            </li>
            <li>
             <b> Tailored Solutions:</b>Your home is unique, and your improvement plan
              should be too. We offer customized packages designed to meet your
              exact needs.
            </li>
            <li>
              <b>Future-Ready:</b> We don’t just follow trends—we help set them. Our
              team stays ahead of technology so your home is always one step
              ahead.
            </li>
            <li>
              <b>End-to-End Service:</b> From consultation and design to installation
              and support, we handle it all so you can relax and enjoy the
              transformation.
            </li>
          </ul>
        </div>
        <div className="container pt-5 mt-5">
          <h4
            className="text-center"
            style={{ color: "#F9AC25" }}
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="2000"
          >
            -Testimonials-
          </h4>
          <h2
            className="text-center"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="2000"
          >
            What Our Clients Say
          </h2>
          <div class="gradient-custom">
            <div
              class="container"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="2000"
            >
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
                        data-bs-interval="5000"
                      >
                        <div class="carousel-indicators mb-0">
                          {testimonials?.map((el, index) => (
                            <button
                              key={index} // Ensure unique key for each indicator
                              type="button"
                              data-bs-target="#carouselDarkVariant"
                              data-bs-slide-to={index}
                              className={index === 0 ? "active" : ""} // Set active for the first indicator
                              aria-current={index === 0 ? "true" : "false"}
                              aria-label={`Slide ${index + 1}`} // Adjust slide label dynamically
                            ></button>
                          ))}
                        </div>

                        <div class="carousel-inner pb-5">
                          {testimonials?.map((testimonial, idx) => {
                            return (
                              <div
                                key={testimonial.id || idx}
                                className={`carousel-item ${
                                  idx === 0 ? "active" : ""
                                }`}
                              >
                                <div class="row d-flex justify-content-center">
                                  <div class="col-lg-10 col-xl-8">
                                    <div class="row">
                                      <div class="col-lg-4 d-flex justify-content-center">
                                        <img
                                          src={testimonial.image}
                                          class="rounded-circle shadow-1 mb-4 mb-lg-0"
                                          alt="woman avatar"
                                          width="150"
                                          height="150"
                                        />
                                      </div>
                                      <div class="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                        <h4 class="mb-4">
                                          {testimonial.title}
                                        </h4>
                                        <p class="mb-0 pb-3">
                                          {testimonial.description}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
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

      <section
        className="latest-articles"
        style={{ backgroundColor: "#fffaf2" }}
      >
        <div className="container pt-5">
          <h4
            className="text-center"
            style={{ color: "#F9AC25" }}
            data-aos="zoom-in-out"
            data-aos-delay="100"
            data-aos-duration="2000"
          >
            -News-
          </h4>
          <h2
            className="text-center"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="2000"
          >
            LATEST ARTICLES
          </h2>

          <div className="row pt-2">
            {homeData?.blogs &&
              homeData?.blogs?.map((blog, index) => (
                <div
                  key={index}
                  className="col-md-4 mb-4"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <Link
                    to={`/blogdetails/${blog?.title
                      .toLowerCase()
                      .split(" ")
                      .join("-")}`}
                    state={{ id: blog._id }} // ✅ Correct way to pass state
                    style={{ textDecoration: "none" }}
                  >
                    <div className="card blog-card shadow mb-5 bg-body rounded m-4">
                      <img
                        src={blog.images[0]}
                        alt={blog.title}
                        className="card-img-top"
                      />{" "}
                      {/* Assuming blog has 'images' array */}
                      <div
                        className="card-body blog-card"
                        style={{ zoom: "0.8" }}
                      >
                        <h5 className="card-title text-center py-2">
                          {blog.title}
                        </h5>
                        <p className="card-text text-center">
                          {blog.shortDescription}
                        </p>
                        <p className="text-center fw-bold">Read More</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <div>
          <h2 className="text-center fw-bold pt-5 "
              style={{
                padding: "5px 0px",
                letterSpacing: "2px",
                wordSpacing: "4px",
              }}
              data-aos="fade-up"
              //  data-aos-delay="300"
              data-aos-duration="1300">Ready to Elevate Your Home?</h2>
          <p style={{
                padding: "10px 200px",
                letterSpacing: "2px",
                wordSpacing: "4px",
              }} 
              className="">
            Let Smart Automator bring your vision to life with seamless
            technology, elegant design, and expert craftsmanship. Whether
            you&#39;re looking to automate your lighting, renovate your living
            space, or install a full home security system, our NYC-based team is
            ready to help. Contact us today to schedule your consultation and
            start your home transformation journey.
          </p>
        </div>
      </section>

      <div
        className="container-fluid mt-5"
        style={{ backgroundColor: "#F9AC25", height: "180px" }}
      >
        <div className="container pt-5">
          <div className=" stayTuned d-flex align-items-center">
            <div className="col-md">
              <h3 className="">STAY TUNED WITH UPDATES</h3>
            </div>
            <div className="col d-flex py-sm-5 pt-sm-3 mt-3">
              <input
                type="text"
                class="form-control footer-input"
                placeholder="search"
                aria-label="search"
                aria-describedby="basic-addon1"
              />
              <button
                className="mx-2"
                style={{
                  width: "80px",
                  borderRadius: "20px",
                  border: "2px solid white",
                }}
                onClick={() => navigate("/signup")}
              >
                <strong style={{ color: "grey" }}>SIGN UP</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
