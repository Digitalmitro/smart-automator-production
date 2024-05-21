import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import user from "../assets/user.png";
// import burger1 from "../assets/image 18.png"
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
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "auto" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
      <Tab className='sidenav' label={<i className="fa-solid fa-address-book"> Address </i>} {...a11yProps(0)} />
      <Tab className='sidenav' label={<i className="fa-solid fa-bag-shopping"> Order History</i> } {...a11yProps(1)} />
      <Tab className='sidenav' label={<i className="fa-solid fa-right-from-bracket"> Logout </i>}  {...a11yProps(2)} />
       
      </Tabs>
      <TabPanel value={value} index={1}>

      <div className="past-order" style={{ marginLeft:"170px"}} >
      <h2 className='py-3' >Furniture Assembly</h2>
      <div className="past-order-box">
      <div className="wrap">
      
       <div className="burger-text">
       <h5 className='fw-bold'>Task Completed</h5>
       <br></br>
       <span >Furniture assembly, Medium-EST 2-3hr, Task requires a car</span>
       <br></br>
       <span >Tue, Sep 5, 2023 at 11.00AM</span>
       </div>
     </div>

       <div className="row" style={{marginTop:"20px"}}>
       <div className='col-md-4'>
       <img src={user}/>
       </div>
       <div className='col-md-8 py-4'>
      <h2 className='fw-bold'>Micheal Smith</h2>
      <p>You rated <span style={{fontSize:"20px"}}> ★ 5</span></p>
      </div>
      </div>
      <div style={{margin:"40px", display:"flex", gap:"40px"}}>
      <button type="button" className="btn btn-warning tab-btn">Book Again</button>
      <button className="btn btn-warning tab-btn" type="button">Share Profile</button></div>
      
      <div> <button className="btn-order" type="button">Show more  orders</button></div>
    </div>
</div>
      </TabPanel>
      <TabPanel value={value} index={9}>
      Payment
      </TabPanel>

      <TabPanel value={value} index={0}>
      <div className="past-order" style={{ marginLeft:"170px"}} >
      <h2 >Manage Address</h2>
      
      <div className="address1" style={{marginBottom:"40px"}}>
      <span><i class="fa-solid fa-location-dot"></i> <h2>Home</h2> </span>
      <p>5198 Commons Dr, Rocklin, CA 95677, USA</p>
      <button className="address-btn" type="button">Edit</button>
      <button className="address-btn" type="button">Delete</button>
      </div>

      <div className="address1">
      <span><i class="fa-solid fa-location-dot"></i> <h2>Work</h2> </span>
      <p>5198 Commons Dr, Rocklin, CA 95677, USA</p>
      <button className="address-btn" type="button">Edit</button>
      <button className="address-btn" type="button">Delete</button>
      </div>


 </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
       
      <div className="past-order" style={{ marginLeft:"170px"}} >
      <h2 >Get Help</h2>
      <div className="past-order-box">
      <div className="wrap">
      
       <div className="burger-text">
       <h3>Chicken Burger</h3>
       <br></br>
       <span>order#14524156451268  sat, mar 22, 2024, 5:00 pm</span>
       <br></br>

       <button className="btn-1" type="button">view details</button>
       </div>
       </div>
       <div className="order-history" style={{marginTop:"20px"}}>
      <b>Chicken Burger(8 pcs)  1 mutton biriyani 6 chiken (8 pcs) 1  <sup>total paid $ 142</sup></b> 
      </div>
      <div style={{margin:"40px", display:"flex", gap:"40px"}}>
      <button className="btn" type="button">Get HELP</button></div>
      
      <div> <button className="btn-order" type="button">Show more  orders</button></div>
</div>
</div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
    
    </Box>
  );
}
