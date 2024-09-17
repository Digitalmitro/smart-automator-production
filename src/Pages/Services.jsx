import { useNavigate } from "react-router-dom";
import React from "react";
import user from "../assets/user.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { Button, Modal } from "antd";
import { TimePicker, Space } from "antd";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const services = () => {
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
    if (!token) {
      return navigate("/login");
    }
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
    taskers && taskers.slice(indexOfFirstItem, indexOfLastItem) || 0;
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
        orderTime: moment().format(' h:mm:ss a'),
        orderDate: moment().format('MMMM Do YYYY'),
        serviceCategory: filteredData.serviceCategory,
        userName: filteredData.userName,
        
        user_id: userId,
        _id: filteredData._id,
        vehicle: filteredData.vehicle
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
  const [id, setId] = useState()

  const showLoading = (currentTaskersID) => {

    setOpen(true);
    setLoading(true);
   setId(currentTaskersID)
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

  const handleNavigate =  () => {
    const storageData = {
      date: date.toDateString(),
      time: ChangeTime
    }
    localStorage.setItem("DateAndTime", JSON.stringify(storageData))
    navigate(`/confirmdetails/${id}`)
  }

  return (
    <>
      <Modal
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
        width={650}
        centered
      >
        <div>
          <h4>Choose your task date and start time</h4>
         
          <div class="d-flex ">
            <div>
            <div class="d-flex gap-3 align-items-center m-3">
                <img
                  src={user}
                  alt="users...."
                  style={{ width: "50px", height: "50px" }}
                />
                <p>maria desouza.</p>
              </div>
              <div>
                <h5> {date.toDateString()} </h5>
              </div>
              <div>
                <Calendar onChange={onChange} value={date} />
              </div>
              <Space wrap>
                <h6>Set Time : </h6>
                <TimePicker
                  use12Hours
                  format="h:mm:ss A"
                  onChange={onChangeTime}
                  style={{
                    color: "black",
                    border: "1px solid grey",
                    margin: "1rem",
                  }}
                />
              </Space>
              <p>
                you can chat to adjust task details or change start time after
                confirming
              </p>
            </div>
            <div class="d-flex flex-column gap-2 justify-content-center p-3">
              <h6>
                Request for :
              </h6>
              <h6>
                {" "}
                {date.toDateString()} - {ChangeTime}
              </h6>
              <p style={{ color: "#F9AC25" }}>This tasker requires 2hrs min</p>
              <button
                onClick={() => handleNavigate()}
                type="button"
                class="btn btn-warning text-center fw-bold my-3"
                style={{color: "#fff", borderRadius:"20px" }}
              >
                select & continue
              </button>
              <p>next confirm your details
to get connected with your 
tasker</p>
            </div>
          </div>
        </div>
      </Modal>
      <section style={{ backgroundColor: "#fef6e7" }}>
        <div className="container mt-5">
          <div
            className="row gx-5 p-5 "
            style={{ justifyContent: "space-between" }}
          >
            <div className="col-md-4 py-5 border border-dark bg-white px-3">
              <p>
                <span className="fw-bold">Date</span>
              </p>
              <div className="col" style={{ zoom: "0.8" }}>
                <button type="button" class="btn btn-link date">
                  Today
                </button>
                <button type="button" class="btn btn-link date">
                  Choose dates
                </button>
              </div>
              <div className="col mb-5" style={{ zoom: "0.8" }}>
                <button type="button" class="btn btn-link date">
                  Within a week
                </button>
                <button type="button" class="btn btn-link date">
                  Within 3 days
                </button>
              </div>

              <div className="time">
                <h5>Time of the Day</h5>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Morning(8am- 12pm)
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option2"
                  />
                  <label class="form-check-label" for="defaultCheck2">
                    Afternoon(12pm - 5pm)
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option3"
                  />
                  <label class="form-check-label" for="defaultCheck2">
                    Evening(5pm - 9.30pm)
                  </label>
                </div>
              </div>
              <p className="text-center fw-bold"> or choose a specific Time</p>

              <div className="tasker-form-select">
                <select class="form-select" aria-label="Default select example">
                  <option selected>I'm Flexible</option>
                  <option value="1">Albany</option>
                  <option value="2">Texus</option>
                  <option value="3">Temple</option>
                  <option value="3">Oklahoma</option>
                </select>
              </div>
              <hr></hr>

              <div class="form-group  py-3">
                <p>Price Range</p>
                <div class="range-slider pb-4">
                  <span class="rangeValues"></span>
                  <input
                    value="1000"
                    min="1000"
                    max="50000"
                    step="500"
                    type="range"
                  />
                  <input
                    value="50000"
                    min="1000"
                    max="50000"
                    step="500"
                    type="range"
                  />
                </div>
                <p>
                  {" "}
                  The average hourly rate is<span>$41.29/hr</span>
                </p>
              </div>
              <hr></hr>

              <h5 className="mt-3">Tasker Type</h5>
              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Morning(8am- 12pm)
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option2"
                />
                <label class="form-check-label" for="defaultCheck2">
                  Afternoon(12pm - 5pm)
                </label>
              </div>
            </div>

            <div className="col-md-8 py-5 border border-dark bg-white">
              {currentTaskers.lenght >0 ?
                currentTaskers.map((data, i) => {
                  return (
                    <>
                      <div className="row" key={data._id}>
                        <div className="col-4 px-4">
                          <img
                            className="px-5"
                            src={`${import.meta.env.VITE_SOME_KEY}/uploads/${
                              data.image
                            }`}
                          />
                          <p className="text-center">
                            <a
                              href=""
                              style={{ color: "#F9AC25", fontWeight: "500" }}
                            >
                              view profile & <br></br>review
                            </a>
                          </p>

                          <button
                            onClick={() => showLoading(data._id)}
                            type="button"
                            class="btn btn-warning text-center fw-bold"
                            style={{ width: "100%", color: "#fff" }}
                          >
                            select & continue
                          </button>

                          <p className="text-center py-3">
                            You can chat with your Tasker, adjust task details,
                            or change task time after booking.
                          </p>
                        </div>

                        <div className="col-8 px-4">
                          <div className="user">
                            <span
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontWeight: "700",
                                fontSize: "25px",
                              }}
                            >
                              <h2>{data.userName}</h2> ${data.pricePerHour}/hr
                            </span>
                            <p
                              style={{
                                backgroundColor: "#fffaf2",
                                width: "90px",
                                color: "#ff8a00",
                              }}
                            >
                              Great value
                            </p>

                            <p>
                              You rated{" "}
                              <span style={{ fontSize: "20px" }}> ★ 5</span>
                            </p>
                            <p>
                              {data.totaltask || 0} Furniture Assembly tasks
                            </p>
                            <p>{data.totaltask || 0} Assembly tasks overall</p>
                          </div>
                          <div
                            className="comment"
                            style={{
                              backgroundColor: "#f5f7f6",
                              padding: "20px 20px",
                            }}
                          >
                            <h4>How can i Help:</h4>

                            <p>{data.description} </p>
                            <a href="#">Read more</a>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                }) :(
                  <div className="row" >
                        <div className="col-4 px-4 ">
                          <img
                            className="px-5"
                            src={user}
                          />
                          <p className="text-center">
                            <a
                              href=""
                              style={{ color: "#F9AC25", fontWeight: "500" }}
                            >
                              view profile & <br></br>review
                            </a>
                          </p>

                          <button
                            onClick={() => showLoading()}
                            type="button"
                            class="btn btn-warning text-center fw-bold"
                            style={{ width: "100%", color: "#fff" }}
                          >
                            select & continue
                          </button>

                          <p className="text-center py-3">
                            You can chat with your Tasker, adjust task details,
                            or change task time after booking.
                          </p>
                        </div>

                        <div className="col-8 px-4">
                          <div className="user">
                            <span
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontWeight: "700",
                                fontSize: "25px",
                              }}
                            >
                              <h2>Taskers name</h2> $20/hr
                            </span>
                            <p
                              style={{
                                backgroundColor: "#fffaf2",
                                width: "90px",
                                color: "#ff8a00",
                              }}
                            >
                              Great value
                            </p>

                            <p>
                              You rated{" "}
                              <span style={{ fontSize: "20px" }}> ★ 5</span>
                            </p>
                            <p>
                               2 Furniture Assembly tasks
                            </p>
                            <p>3 Assembly tasks overall</p>
                          </div>
                          <div
                            className="comment"
                            style={{
                              backgroundColor: "#f5f7f6",
                              padding: "20px 20px",
                            }}
                          >
                            <h4>How can i Help:</h4>

                            <p>Task Desc or Task Details </p>
                            <a href="#">Read more</a>
                          </div>
                        </div>
                      </div>
                )}
{(taskers.length >0  && currentTaskers.length >0) && (
 <nav aria-label="Page navigation example">
 <ul className="pagination">
   <li className="page-item">
     <a
       className="page-link"
       href="#"
       onClick={() => paginate(currentPage - 1)}
     >
       Previous
     </a>
   </li>
   {(taskers.length >0  && currentTaskers.length >0) &&
     Array.from({
       length: Math.ceil(taskers.length / itemsPerPage),
     }).map((_, index) => (
       <li
         key={index}
         className={`page-item ${
           currentPage === index + 1 ? "active" : ""
         }`}
       >
         <a
           onClick={() => paginate(index + 1)}
           className="page-link"
           href="#"
         >
           {index + 1}
         </a>
       </li>
     ))}
   <li className="page-item">
     <a
       className="page-link"
       href="#"
       onClick={() => paginate(currentPage + 1)}
     >
       Next
     </a>
   </li>
 </ul>
</nav>
)}
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default services;
