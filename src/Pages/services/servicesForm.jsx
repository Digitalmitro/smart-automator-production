import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/ServiceDetails.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { message } from "antd";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { Button, Modal } from "antd";
import { TimePicker, Space } from "antd";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const servicedetails = () => {
  const [taskLocation, setTaskLocation] = useState("");
  const [furnitureType, setFurnitureType] = useState("");
  const [taskSize, setTaskSize] = useState("");
  const [vehicleRequirement, setVehicleRequirement] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [ChangeTime, setchangeTime] = useState();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState();

  const showLoading = (currentTaskersID) => {
    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const onChangeTime = (time, timeString) => {
    setchangeTime(timeString);
    console.log(timeString);
  };

  const handleNavigate = () => {
    navigate(`/confirmdetails/${id}`);
  };

  const onChange = (newDate) => {
    setDate(newDate);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
    });
  }, []);


  const handleServiceDetails = (e) => {
    console.log("hello services")
    e.preventDefault();
    const servicDetailsObj = {
      taskLocation: taskLocation,
      furnitureType: furnitureType,
      taskSize: taskSize,
      vehicleRequirement: vehicleRequirement,
      taskDetails: taskDetails,
    };
    localStorage.setItem("serviceDetails", JSON.stringify(servicDetailsObj));
    console.log(servicDetailsObj);
    // navigate("/formBookingDetails");
    showLoading()

  };

  useEffect(() => {
    if (
      taskLocation &&
      furnitureType &&
      taskSize &&
      vehicleRequirement &&
      taskDetails
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [taskLocation, furnitureType, taskSize, vehicleRequirement, taskDetails]);

  return (
    <>
      <section className="services-banner" >
        <div className="services-form container pt-md-5 ">
          <h2 className="pt-5 py-5 mt-5 fw-bold"

          >FURNITURE ASSEMBLY</h2>
        </div>
        <div className=" services-form container pb-5"

        >
          <div className="form-box">

            <h3 className="mb-3"

            ><b>Your task location</b></h3>
            <input
              type="text"
              className="form-control task-location"
              id="exampleFormControlInput1"
              placeholder="Enter Your task location"
              value={taskLocation}
              onChange={(e) => setTaskLocation(e.target.value)}
              required
            />
            <div style={{ width: "10%", margin: " 20px auto" }}></div>

            <h3 className="mt-5 mb-0"><b>Your Items</b></h3>
            <br />
            <h4 className="mb-3" >
              What type of furniture do you need assembled or disassembled?
            </h4>
            <div className="form-check"   >
              <input
                className="form-check-input"
                type="radio"
                name="furnitureType"
                id="type1"
                checked={furnitureType === "IKEA furniture items only"}
                onChange={() => setFurnitureType("IKEA furniture items only")}
              />
              <label className="form-check-label" htmlFor="type1">
                IKEA furniture items only
              </label>
            </div>
            <div className="form-check"   >
              <input
                className="form-check-input"
                type="radio"
                name="furnitureType"
                id="type2"
                checked={furnitureType === "Other furniture items (non-IKEA)"}
                onChange={() =>
                  setFurnitureType("Other furniture items (non-IKEA)")
                }
              />
              <label className="form-check-label" htmlFor="type2">
                Other furniture items (non-IKEA)
              </label>
            </div>

            <div className="form-check"   >
              <input
                className="form-check-input"
                type="radio"
                name="furnitureType"
                id="type3"
                checked={furnitureType === "Both IKEA and non-IKEA furniture"}
                onChange={() =>
                  setFurnitureType("Both IKEA and non-IKEA furniture")
                }
              />
              <label className="form-check-label" htmlFor="type3">
                Both IKEA and non-IKEA furniture
              </label>
            </div>
            <div style={{ width: "10%", margin: " 40px auto" }}></div>

            <h3 className="mt-5 mb-0 "><b>Task Options</b></h3>
            <br />
            <h4   >How big is your task?</h4>

            <div className="form-check"   >
              {/* <hr style={{ width: "20%", height: "2px", color: "#F9AC25" }} /> */}
              <input
                className="form-check-input"
                type="radio"
                name="taskSize"
                id="taskSize1"
                checked={taskSize === "1 - 2 Hrs"}
                onChange={() => setTaskSize("1 - 2 Hrs")}
              />
              <label className="form-check-label" htmlFor="taskSize1">
                1 - 2 Hrs
              </label>
            </div>

            <div className="form-check"   >
              <input
                className="form-check-input"
                type="radio"
                name="taskSize"
                id="taskSize2"
                checked={taskSize === "2 - 3 Hrs"}
                onChange={() => setTaskSize("2 - 3 Hrs")}
              />
              <label className="form-check-label" htmlFor="taskSize2">
                2 - 3 Hrs
              </label>
            </div>

            <div className="form-check"   >
              <input
                className="form-check-input"
                type="radio"
                name="taskSize"
                id="taskSize3"
                checked={taskSize === "3 - 5 Hrs"}
                onChange={() => setTaskSize("3 - 5 Hrs")}
              />
              <label className="form-check-label" htmlFor="taskSize3">
                3 - 5 Hrs
              </label>
            </div>

            <h4 className="my-4"

            >Vehicle requirements</h4>

            <div className="form-check "   >
              {/* <hr style={{ width: "20%", height: "2px", color: "#F9AC25" }} /> */}
              <input
                className="form-check-input"
                type="radio"
                name="vehicleRequirement"
                id="vehicle1"
                checked={vehicleRequirement === "Not needed for task"}
                onChange={() => setVehicleRequirement("Not needed for task")}
              />
              <label className="form-check-label" htmlFor="vehicle1">
                Not needed for task
              </label>
            </div>

            <div className="form-check"    >
              <input
                className="form-check-input"
                type="radio"
                name="vehicleRequirement"
                id="vehicle2"
                checked={vehicleRequirement === "Task requires a car"}
                onChange={() => setVehicleRequirement("Task requires a car")}
              />
              <label className="form-check-label" htmlFor="vehicle2">
                Task requires a car
              </label>
            </div>

            <div className="form-check"    >
              <input
                className="form-check-input"
                type="radio"
                name="vehicleRequirement"
                id="vehicle3"
                checked={vehicleRequirement === "Task requires a truck"}
                onChange={() => setVehicleRequirement("Task requires a truck")}
              />
              <label className="form-check-label" htmlFor="vehicle3">
                Task requires a truck
              </label>
            </div>
            <div style={{ width: "10%", margin: " 40px auto" }}></div>

            <h3 className="mt-5 mb-4  "

            > <b>Tell us the details of your task</b></h3>
            <p
            >
              Start the conversation and tell your Tasker what you need done.
              This helps us show you only qualified and available Taskers for
              the job. Don't worry, you can edit this later.
            </p>
            <div className="form-floating"

            >
              <textarea
                className="form-control my-4"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "100px" }}
                value={taskDetails}
                onChange={(e) => setTaskDetails(e.target.value)}
              />
              <label htmlFor="floatingTextarea2">Comments</label>
              <p>
                If you need two or more Taskers, please post additional tasks
                for each Tasker needed.
              </p>
            </div>
            <div style={{ width: "10%", margin: " 40px auto" }}></div>
            <button
              type="button"

              className="btn btn-warning text-center "
              onClick={handleServiceDetails}
            >
              Continue
            </button>
          </div>

        </div>
      </section>


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
              <h6>Request for :</h6>
              <h6>
                {" "}
                {date.toDateString()} - {ChangeTime}
              </h6>
              <p style={{ color: "#F9AC25" }}>This tasker requires 2hrs min</p>
              <button
                onClick={() => handleNavigate()}
                type="button"
                class="btn btn-warning text-center fw-bold my-3"
                style={{ color: "#fff", borderRadius: "20px" }}
              >
                select & continue
              </button>
              <p>next confirm your details to get connected with your tasker</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default servicedetails;


