import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import user from "../assets/user.png";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { message } from "antd";
import "./Styles/Tabs.scss";
import { LogoutModal } from "../Pages/modals/Logoutmodals";
import { AddressPanel } from "./TabsPanel/AddressPanel";
import { ProfilePanel } from "./TabsPanel/ProfilePanel";
import { OrderPanel } from "./TabsPanel/OrderPanel";

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


  const token = Cookies.get("token");
  const decodedToken = token && jwtDecode(token);
  const user_id = decodedToken?._id;
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState();
const [activeTab, setActiveTab] = useState()
  const [clientDetails, setClientDetails] = useState();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [searchParams] = useSearchParams();
  const [value, setValue] = useState(0);


  const location = useLocation();
 

  const handelLogout = () => {
    localStorage.clear();
    navigate('/login')
  };

  const openLogoutModal = () => {
    setShowLogoutModal(true); // Show modal when logout button is clicked
  };

  const closeLogoutModal = () => {
    setShowLogoutModal(false); // Hide modal
  };
console.log(location.state)
  useEffect(() => {
    const stateTabIndex = location.state?.tabIndex;
    if (stateTabIndex !== undefined) {
      setValue(stateTabIndex); // Set tab based on location state
    } else {
      const storedValue = localStorage.getItem("tabIndex");
      if (storedValue !== null) {
        setValue(parseInt(storedValue, 10));
      }
    }
  }, [location.state]);

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
    (orderDetails && orderDetails.slice(indexOfFirstItem, indexOfLastItem)) ||
    [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem("tabIndex", newValue);
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
            label={
              <i className="fa-solid fa-address-book">
                {" "}
                <span className="tab-text">Profile</span>{" "}
              </i>
            }
            {...a11yProps(0)}
          />
          <Tab
            style={{ marginBottom: "20px", height: "100px" }}
            className="sidenav"
            label={
              <i className="fa-solid fa-address-book">
                {" "}
                <span className="tab-text">Address</span>{" "}
              </i>
            }
            {...a11yProps(1)}
          />
          <Tab
            style={{ marginBottom: "20px", height: "100px" }}
            className="sidenav"
            label={
              <i className="fa-solid fa-bag-shopping">
                {" "}
                <span className="tab-text">Order History</span>{" "}
              </i>
            }
            {...a11yProps(2)}
          />
          <Tab
            style={{ marginBottom: "20px", height: "100px" }}
            onClick={openLogoutModal}
            className="sidenav"
            label={
              <i className="fa-solid fa-right-from-bracket">
                {" "}
                <span className="tab-text">Logout</span>{" "}
              </i>
            }
            {...a11yProps(3)}
          />
        </Tabs>

        <TabPanel value={value} index={0}>
          <ProfilePanel />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <AddressPanel />
        </TabPanel>

        <TabPanel value={value} index={2}>
       <OrderPanel/>
        </TabPanel>
        {/* <TabPanel value={value} index={3}>
          Payment
        </TabPanel> */}

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
        <LogoutModal
          handelLogout={handelLogout}
          closeLogoutModal={closeLogoutModal}
          showLogoutModal={showLogoutModal}
        />
      </Box>
    </>
  );
}
