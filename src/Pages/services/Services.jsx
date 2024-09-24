import { useNavigate, Link } from "react-router-dom";
import React from "react";
import user from "../../assets/user.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { Button, Modal } from "antd";
import gridLayout7 from "../../assets/grid-layout-7.jpg";
import { TimePicker, Space } from "antd";
import moment from "moment";
import Calendar from "react-calendar";
// import user from "../../assets/user.png";
import "react-calendar/dist/Calendar.css";
import "../../Pages/Styles/Services.scss";
// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

export const Services = () => {
  // filter data by id
  const token = Cookies.get("token");
  const decodedToken = token && jwtDecode(token);
  const userId = decodedToken?._id;
  const navigate = useNavigate();
  const serviceForm = JSON.parse(localStorage.getItem("serviceDetails"));
  const [taskers, setTaskers] = useState([]);
  const handleServiceDetails = async () => {
    try {
      console.log("try");
      const response = await axios.get(
        `${import.meta.env.VITE_SOME_KEY}/service`
      );
      setTaskers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(taskers);
  useEffect(() => {
   
    handleServiceDetails();
  }, []);
  console.log(serviceForm);
  function getVals() {
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) {
      let tmp = slide2;
      slide2 = slide1;
      slide1 = tmp;
    }

    let displayElement = parent.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
  }
  window.onload = function () {
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
    for (let x = 0; x < sliderSections.length; x++) {
      let sliders = sliderSections[x].getElementsByTagName("input");
      for (let y = 0; y < sliders.length; y++) {
        if (sliders[y].type === "range") {
          sliders[y].oninput = getVals;
          // Manually trigger event first time to display values
          sliders[y].oninput();
        }
      }
    }
  };
  // implement paggination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);
  // Calculate the index of the first and last item of the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Slice the array of taskers to display only the items for the current page
  const currentTaskers =
    (taskers && taskers.slice(indexOfFirstItem, indexOfLastItem)) || 0;
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // data filter by Id
  const handleOrder = async (id) => {
    console.log(id);
    const [filteredData] = taskers.filter((data) => id === data._id);
    console.log(filteredData);

    try {
      const payload = {
        description: filteredData.description,
        image: filteredData.image,
        location: filteredData.location,
        phone: filteredData.phone,
        pricePerHour: filteredData.pricePerHour,
        review: filteredData.review,
        orderTime: moment().format(" h:mm:ss a"),
        orderDate: moment().format("MMMM Do YYYY"),
        serviceCategory: filteredData.serviceCategory,
        userName: filteredData.userName,

        user_id: userId,
        _id: filteredData._id,
        vehicle: filteredData.vehicle,
      };

      const totalTaskPayload = {
        totaltask: filteredData.totaltask + 1,
      };
      const taskResponse = await axios.put(
        `${import.meta.env.VITE_SOME_KEY}/service/${id}`,
        totalTaskPayload
      );

      const response = await axios.post(
        `${import.meta.env.VITE_SOME_KEY}/order`,
        payload
      );
      console.log(response);
      message.success(response.data);
      setTimeout(() => {
        navigate(`/services/${id}`);
      }, 1200);
    } catch (error) {
      // message.warning(error.response.data.status, {});
      console.log(error);
    }
  };
  // modal code
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [id, setId] = useState();
  const showLoading = (currentTaskersID) => {
    setOpen(true);
    setLoading(true);
    setId(currentTaskersID);
    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  // calender
  const [date, setDate] = useState(new Date());
  const [ChangeTime, setchangeTime] = useState();
  const onChange = (newDate) => {
    setDate(newDate);
  };
  const onChangeTime = (time, timeString) => {
    setchangeTime(timeString);
    console.log(timeString);
  };
  const handleNavigate = () => {
    const storageData = {
      date: date.toDateString(),
      time: ChangeTime,
    };
    localStorage.setItem("DateAndTime", JSON.stringify(storageData));
    navigate(`/confirmdetails/${id}`);
  };
  return (
    <>
      <section style={{ backgroundColor: "#fef6e7" }}>
        <div className="service-page-banner">
          <header className="content">
            <h1>Your to-do list is on us</h1>
          </header>
        </div>
        <ServiceGridCard />
      </section>
    </>
  );
};

export const ServiceGridCard = () => {
  const navigate = useNavigate();

  return (
    <div className="service-grid-card">
      <h1>Hire a trusted Tasker</h1>
      <div className="grid-card">
        <div className="grid">
          <div className="image-container">

            <img src={gridLayout7} alt="grilayout1" />
          </div>
          <div>
            <h3 onClick={() => navigate(`/serviceinfo/featuredtask`)}>Featured Tasks </h3>
            <p>Let Taskers help tackle your to-do list.</p>
            <hr />
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Furniture Assembly</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Home Repairs</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Help Moving</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Heavy Lifting</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Home Cleaning</p>
            </Link>
          </div>
        </div>

        <div className="grid">
          <div className="image-container">

            <img src={gridLayout7} alt="grilayout1" />
          </div>
          <div>
            <h3 onClick={() => navigate(`/serviceinfo/featuredtask`)}>Featured Tasks </h3>
            <p>Let Taskers help tackle your to-do list.</p>
            <hr />
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Furniture Assembly</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Home Repairs</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Help Moving</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Heavy Lifting</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Home Cleaning</p>
            </Link>
          </div>
        </div>

        <div className="grid">
          <div className="image-container">

            <img src={gridLayout7} alt="grilayout1" />
          </div>

          <div>
            <h3 onClick={() => navigate(`/serviceinfo/featuredtask`)}>Featured Tasks </h3>
            <p>Let Taskers help tackle your to-do list.</p>
            <hr />
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Furniture Assembly</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Home Repairs</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Help Moving</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Heavy Lifting</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Home Cleaning</p>
            </Link>
          </div>
        </div>

        <div className="grid">
          <div className="image-container">

            <img src={gridLayout7} alt="grilayout1" />
          </div>
          <div>
            <h3 onClick={() => navigate(`/serviceinfo/featuredtask`)}>Featured Tasks </h3>
            <p>Let Taskers help tackle your to-do list.</p>
            <hr />
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Furniture Assembly</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Home Repairs</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Help Moving</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Heavy Lifting</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Home Cleaning</p>
            </Link>
          </div>
        </div>

        <div className="grid">
        <div className="image-container">
          <img src={gridLayout7} alt="grilayout1"/>
          </div>
          <div>
            <h3 onClick={() => navigate('/serviceinfo/featuredtask')}>Featured Tasks </h3>
            <p>Let Taskers help tackle your to-do list.</p>
            <hr />
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Furniture Assembly</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Home Repairs</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Help Moving</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Heavy Lifting</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Home Cleaning</p>
            </Link>
          </div>
        </div>

        <div className="grid">
          <div className="image-container">

            <img src={gridLayout7} alt="grilayout1" />
          </div>

          <div>
            <h3 onClick={() => navigate("/serviceinfo/featuredtask")}>Featured Tasks </h3>
            <p>Let Taskers help tackle your to-do list.</p>
            <hr />
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Furniture Assembly</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Home Repairs</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Help Moving</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Heavy Lifting</p>
            </Link>
            <Link to={`/servicedetails/servicetype/specificService`}>
              <p>Home Cleaning</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
