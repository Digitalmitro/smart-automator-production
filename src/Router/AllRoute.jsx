import { Routes,Route } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import TaskDetails from "../Pages/services/TaskDetails"
import {ServiceInfo} from "../Pages/services/ServiceInfo"
import {ServiceDetails} from "../Pages/services/ServiceDetails"
import Profile from "../Pages/Profile";
import Tasker from "../Pages/Tasker/Tasker";
import TaskerLogin from "../Pages/Tasker/TaskerLogin";
import TaskerSignup from "../Pages/Tasker/TaskerSignup";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import {Services} from "../Pages/services/Services";
import Popup from "../Pages/Tasker/Popup";
import ImageUpload from "../Pages/imageUpload";
import ConfirmDetails from "../Pages/services/ConfirmDetails";
import OrderConfirmation from '../Pages/orderConfirmation'
import { AboutUs } from "../Pages/AboutUs";
import {TermsAndprivacy} from "../Pages/TermsAndprivacy"

const AllRoute =()=>{
    return (
        <>
        <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/Navbar" element={<Navbar/>}>Navbar</Route>
        <Route path="/Footer" element={<Footer/>}>Footer</Route>
        <Route path="/aboutus" element={<AboutUs/>}>AboutUs</Route>
        <Route path="/taskdetails" element={<TaskDetails />}>TaskDetails</Route>
        <Route path="/profile" element={< Profile />}>Profile</Route>
        <Route path="/Tasker" element={< Tasker />}>Tasker</Route>
        <Route path="/termsandprivacy" element={< TermsAndprivacy />}>Terms And privacy</Route>
        <Route path="/taskerlogin" element={< TaskerLogin />}>Tasker Login</Route>
        <Route path="/taskersignup" element={< TaskerSignup />}>Tasker Signup</Route>
        <Route path="/login" element={< Login />}>Login</Route>
        <Route path="/Signup" element={<Signup/>}>Signup </Route>
        <Route path="/services" element={<Services/>}> Services </Route>
        <Route path="/servicedetails/:servicetype/:specificService" element={<ServiceDetails/>}> Service Details </Route>
        <Route path="/serviceinfo/:servicetype" element={<ServiceInfo/>}> ServiceInfo </Route>
        <Route path="/Popup" element={<Popup/>}>Popup </Route>
        <Route path="/imageupload" element={<ImageUpload/>}>Image Upload</Route>
        <Route path="/confirmdetails/:id" element={<ConfirmDetails/>}>Confirm Details</Route>
        <Route path="/services/:id" element={<OrderConfirmation/>}>order confirmation</Route>
        </Routes>
        </>
    )
}
export default AllRoute