import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import user from "../assets/user.png";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { message } from "antd";
import './tabs.css'

// import burger1 from "../assets/image 18.png"
const handelLogout = () => {
  Cookies.remove("token");
  window.location.href = "/login";
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const token = Cookies.get("token");
  const decodedToken = token && jwtDecode(token);
  const user_id = decodedToken?._id;
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [zipCode, setZipCode] = useState();
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const [clientDetails, setClientDetails] = useState();


  useEffect(() => {
    if (token) {
    } else {
      return navigate("/login");
    }
  }, [token]);


  useEffect(() => {
    const storedValue = localStorage.getItem('tabIndex');
    if (storedValue !== null) {
      setValue(parseInt(storedValue, 10));
    }
  }, []);



  
  const handleClientsDetails = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        firstName,
        lastName,
        zipCode,
        phone,
        email,
        newPassword,
        oldPassword,
        user_id,
      };
      console.log("try");
      const response = await axios.put(
        `${import.meta.env.VITE_SOME_KEY}/updateclient`,
        payload
      );
  
      console.log(response)
    
      if (response.status === 200) {
        Cookies.set("token", response.data.token);
        console.log(response);
        message.success("Profile Updated successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1200); // 1.2 seconds
      } else {
        message.error("An error occurred while updating the profile");
      }

    } catch (error) {
      console.log(error);
      message.error("profile do not updated");
    }
  };


  const handleOrderDetails = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SOME_KEY}/order/${user_id}`
      );
      console.log("order details", res.data.order);
      setOrderDetails(res.data.order);
    } catch (error) {
      // message.warning(error.response.data.status, {});
      console.log(error);
    }
  };
  console.log(orderDetails);

  

  React.useEffect(() => {
    handleOrderDetails();
  }, []);
  console.log(orderDetails);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  // Calculate the index of the first and last item of the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the array of taskers to display only the items for the current page
  const currentOrderDetails =
        orderDetails && orderDetails.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem('tabIndex', newValue);
  };


  // Adress code
  const [address1, setAddress1] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [addressType, setAddressType] = useState("");
  const [zip, setZip] = useState();
  const [homeAddressData, setHomeAddressData] = useState();
  const [workAddressData, setWorkAddressData] = useState();

  
  const handleAddressDetails = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        address1,
        address2,
        city,
        state,
        zip,
        addressType,
        user_id,
      };
      console.log("try");
      if(addressType === "home"){
        const response = await axios.post(
          `${import.meta.env.VITE_SOME_KEY}/homeAddress`,
          payload
        );
      if (response.status === 200) {
        console.log(response);

        message.success("home address Updated successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1200); 
      } else {
        message.error("An error occurred while updating the address");
      }
      }else if(addressType === "work"){
        const response = await axios.post(
          `${import.meta.env.VITE_SOME_KEY}/workAddress`,
          payload
        );
        if (response.status === 200) {
          console.log(response);
          message.success("address Updated successfully");
          setTimeout(() => {
            window.location.reload();
          }, 1200);
        } else {
          message.error("An error occurred while updating the address");
        }
      }else{
        message.error("select addres type")
      }

    } catch (error) {
      console.log(error);
      message.error("address  not updated");
    }
    getHomeAddressData()
    getWorkAddressData()
  };
    
  const getHomeAddressData = async() => {
    try{
      let response = await axios.get(
        `${import.meta.env.VITE_SOME_KEY}/homeAddress/${user_id}`,
        
      );
      setHomeAddressData(response.data.data.homeAddress[0])
      console.log("address get response",response.data.data.homeAddress)
    }catch (error) {
      console.log(error);
    }
 

  }
  const getWorkAddressData = async() => {
    try{
      let response = await axios.get(
        `${import.meta.env.VITE_SOME_KEY}/workAddress/${user_id}`,
        
      );
      setWorkAddressData(response.data.data.workAddress[0])
      // console.log("address get response",response.data.data.workAddress)
    }catch (error) {
      console.log(error);
      // message.error("address not get");
    }
   

  }
  useEffect(() => {
    getHomeAddressData()
    getWorkAddressData()
   
  },[])
  const handleDeleteAddress = async () => {

    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_SOME_KEY}/homeAddress/${homeAddressData?._id}`
      );
      console.log("deleted", res)
      // console.log("order details", res.data.order);
      // setOrderDetails(res.data.order);
    } catch (error) {
      // message.warning(error.response.data.status, {});
      console.log(error);
    }
    getHomeAddressData()
    getWorkAddressData()
  };

  const handleDeleteworkAddress = async () => {

    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_SOME_KEY}/workAddress/${workAddressData?._id}`
      );
      console.log("work add deleted", res)
      // console.log("order details", res.data.order);
      // setOrderDetails(res.data.order);
    } catch (error) {
      // message.warning(error.response.data.status, {});
      console.log(error);
    }
    getHomeAddressData()
    getWorkAddressData()
  };
 

  console.log("home address",homeAddressData)
  console.log("work address",workAddressData)
 

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "auto",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab
            style={{ marginBottom: "20px", height: "100px" }}
            className="sidenav"
            label={<i className="fa-solid fa-address-book"> Profile </i>}
            {...a11yProps(0)}
          />
          <Tab
            style={{ marginBottom: "20px", height: "100px" }}
            className="sidenav"
            label={<i className="fa-solid fa-address-book"> Address </i>}
            {...a11yProps(1)}
          />
          <Tab
            style={{ marginBottom: "20px", height: "100px" }}
            className="sidenav"
            label={<i className="fa-solid fa-bag-shopping"> Order History</i>}
            {...a11yProps(2)}
          />
          <Tab
            style={{ marginBottom: "20px", height: "100px" }}
            onClick={handelLogout}
            className="sidenav"
            label={<i className="fa-solid fa-right-from-bracket"> Logout </i>}
            {...a11yProps(3)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className="container past-order">
            <h2 className="py-3">Manage Profile</h2>
            <div className="profileDetails">
              <>
                <form class="row g-3" >
                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">
                      First Name
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="inputCity" class="form-label">
                     Confirm Email <span style={{color: "red"}}>*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputCity"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div class="col-md-4">
                    <label for="inputState" class="form-label">
                      Phone
                    </label>

                    <input
                      type="text"
                      class="form-control"
                      id="inputCity"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div class="col-md-2">
                    <label for="inputZip" class="form-label">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputZip"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </div>
                </form>
                <p class="text-warning pt-5 py-2">Change Password</p>
                <form class="row g-3">
                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">
                      Old Password  <span style={{color: "red"}}>*</span>
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputEmail4"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">
                      New Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <button type="btn" class="btn btn-warning text-white"
                    onClick={handleClientsDetails}>
                      Update
                    </button>
                  </div>
                </form>
              </>
            </div>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className=" container past-order">
            <h2>Manage Address</h2>
            <div class="d-flex  justify-content-center p-2 align-items-center m-auto">
              <div class="pt-3 d-flex  justify-content-center p-2 align-items-center m-auto">
                <form className="addressForm" onSubmit={handleAddressDetails}>
                  <div class="mb-3 ">
                    <label for="formGroupExampleInput" class="form-label">
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Example input placeholder"
                      value={address1}
                      onChange={(e) => setAddress1(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Another input placeholder"
                      value={address2}
                      onChange={(e) => setAddress2(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Example input placeholder"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Another input placeholder"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Example input placeholder"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>
                  <div class="form-group ">
                    <label for="input">AddressType</label>
                    <select

                      class="form-select form-select-sm w-100"
                      aria-label=".form-select-sm example"
                      value={addressType}
                      onChange={(e) => setAddressType(e.target.value)}
                    >
                      <option selected>Choose</option>
                      <option value={"home"}>Home</option>
                      <option value={"work"}>Work</option>
                    </select>
                  </div>
                  <div>
                    <button type="submit">Add Address</button>
                  </div>
                </form>
              </div>
              
    {(homeAddressData || workAddressData) &&
      <div className="addressDetails" style={{padding:".7rem"}}>
      {homeAddressData && 
     
          <div
          className="address1"
          style={{ marginBottom: "40px", zoom: ".8" }}
        >
          <span>
            <i className="fa-solid fa-location-dot"></i> <h2>{homeAddressData.addressType}</h2>{" "}
          </span>
          <p>Address 1- {homeAddressData.address1}</p>
          <p>{homeAddressData.city}, {homeAddressData.state}, {homeAddressData.zip}</p>
         
          <button className="btn btn-danger" type="button"  onClick={handleDeleteAddress}>
            Delete
          </button>
        </div>
      
       }
     {workAddressData  &&
        <div
          className="address1"
          style={{ marginBottom: "40px", zoom: ".8" }}
        >
          <span>
            <i className="fa-solid fa-location-dot"></i> <h2>Work</h2>{" "}
          </span>
          <p>Address 1- {workAddressData.address1}</p>
          <p>{workAddressData.city}, {workAddressData.state}, {workAddressData.zip}</p>
          
          <button className="btn btn-danger" type="button" onClick={handleDeleteworkAddress}>
            Delete
          </button>
        </div>
     }
     
    </div>
}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="past-order" style={{ textAlign: "center" }}>
            <h2 className="py-3">Orders</h2>
            <div className="orderDetails">
              {currentOrderDetails &&
                currentOrderDetails.map((data) => {
                  return (
                    <>
                      <div className="past-order-box" style={{ zoom: ".6" }}>
                        <div className="wrap">
                          <div className="burger-text">
                            <h5 className="fw-bold">Task Completed</h5>
                            <br></br>
                            <span>
                              {data.serviceCategory}, Medium-EST 2-3hr,{" "}
                              {data.vehicle === "Yes"
                                ? "Task requires a car"
                                : "Task doesn't require car"}
                            </span>
                            <br></br>
                            <span>{data.orderTime}</span>
                          </div>
                        </div>

                        <div className="row" style={{ marginTop: "20px" }}>
                          <div className="col-md-4">
                            <img
                              className="rounded-circle"
                              style={{ width: "135px", height: "135px" }}
                              src={`${import.meta.env.VITE_SOME_KEY}/uploads/${data?.image}`}
                            />
                          </div>
                          <div className="col-md-8 py-4 px-5">
                            <h2 className="fw-bold">{data.userName}</h2>
                            <p>
                              You rated{" "}
                              <span style={{ fontSize: "20px" }}> ★ 5</span>
                            </p>
                          </div>
                        </div>
                        <div
                          style={{
                            margin: "40px",
                            display: "flex",
                            gap: "40px",
                          }}
                        >
                          <button
                            type="button"
                            className="btn btn-warning tab-btn"
                            onClick={() => navigate("/Services")}
                          >
                            Book Again
                          </button>
                          <button
                            className="btn btn-warning tab-btn"
                            type="button"
                          >
                            Share Profile
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>


           <div style={{textAlign: "center"}} className="orderPagination">
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
                  {orderDetails &&
                    Array.from({
                      length: Math.ceil(orderDetails.length / itemsPerPage),
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
           </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          Payment
        </TabPanel>

        <TabPanel value={value} index={4}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={5}>
          <div className="past-order" style={{ marginLeft: "170px" }}>
            <h2>Get Help</h2>
            <div className="past-order-box">
              <div className="wrap">
                <div className="burger-text">
                  <h3>Chicken Burger</h3>
                  <br></br>
                  <span>order#14524156451268 sat, mar 22, 2024, 5:00 pm</span>
                  <br></br>

                  <button className="btn-1" type="button">
                    view details
                  </button>
                </div>
              </div>
              <div className="order-history" style={{ marginTop: "20px" }}>
                <b>
                  Chicken Burger(8 pcs) 1 mutton biriyani 6 chiken (8 pcs) 1{" "}
                  <sup>total paid $ 142</sup>
                </b>
              </div>
              <div style={{ margin: "40px", display: "flex", gap: "40px" }}>
                <button className="btn" type="button">
                  Get HELP
                </button>
              </div>

              <div>
                {" "}
                <button className="btn-order" type="button">
                  Show more orders
                </button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Six
        </TabPanel>
      </Box>
     
    </>
  );
}
