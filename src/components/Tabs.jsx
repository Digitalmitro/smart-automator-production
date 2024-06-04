import * as React from "react";
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
  const userId = decodedToken?._id;
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = React.useState();

  const handleOrderDetails = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SOME_KEY}/order/${userId}`
      );
      console.log(res.data.order);
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
                <form class="row g-3">
                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">
                      First Name
                    </label>
                    <input type="email" class="form-control" id="inputEmail4" />
                  </div>
                  <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">
                      Last Name
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="inputCity" class="form-label">
                      Email
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                  <div class="col-md-4">
                    <label for="inputState" class="form-label">
                      Phone
                    </label>

                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                  <div class="col-md-2">
                    <label for="inputZip" class="form-label">
                      Zip Code
                    </label>
                    <input type="text" class="form-control" id="inputZip" />
                  </div>
                </form>
                <p class="text-warning pt-5 py-2">Change Password</p>
                <form class="row g-3">
                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">
                      Old Password
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
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
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" class="btn btn-warning text-white">
                      Update
                    </button>
                  </div>
                </form>
              </>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="past-order container-fluid w-120" >
            <h2>Manage Address</h2>
            <div class="d-flex  justify-content-center p-2 align-items-center">
             <div class="pt-3">

             <form className="addressForm" >
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                   Address Line
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Example input placeholder"
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
                  />
                </div>
                <div class="form-group ">
                  <label for="input">AddressType</label>
                  <select class="form-select form-select-sm w-100" aria-label=".form-select-sm example">
  <option selected>Choose</option>

</select>
                </div>
              </form>
             </div>
              <div className="addressDetails">
                <div className="address1" style={{ marginBottom: "40px" , zoom:".8"}}>
                  <span>
                    <i class="fa-solid fa-location-dot"></i> <h2>Home</h2>{" "}
                  </span>
                  <p>5198 Commons Dr, Rocklin, CA 95677, USA</p>
                  <button className="address-btn" type="button">
                    Edit
                  </button>
                  <button className="address-btn" type="button">
                    Delete
                  </button>
                </div>

                <div className="address1" style={{ marginBottom: "40px" , zoom:".8"}}>
                  <span>
                    <i class="fa-solid fa-location-dot"></i> <h2>Work</h2>{" "}
                  </span>
                  <p>5198 Commons Dr, Rocklin, CA 95677, USA</p>
                  <button className="address-btn" type="button">
                    Edit
                  </button>
                  <button className="address-btn" type="button">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="past-order" style={{ marginLeft: "170px" }}>
            <h2 className="py-3">Orders</h2>
            <div className="orderDetails">
              {orderDetails &&
                orderDetails.map((data) => {
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
                              src={data.image}
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
