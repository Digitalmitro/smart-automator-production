import { Routes,Route } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import TaskDetails from "../Pages/services/TaskDetails"
import {ServiceInfo} from "../Pages/services/ServiceInfo"
import {ServiceDetails} from "../Pages/services/ServiceDetails"
import ServiceForm from "../Pages/services/servicesForm"
import Profile from "../Pages/Profile";
import Tasker from "../Pages/Tasker/Tasker";
import TaskerLogin from "../Pages/Tasker/TaskerLogin";
import TaskerSignup from "../Pages/Tasker/TaskerSignup";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import {Services} from "../Pages/services/Services";
import {FormBooking} from "../Pages/services/FormBookingDetails";
import Popup from "../Pages/Tasker/Popup";
import ImageUpload from "../Pages/imageUpload";
import ConfirmDetails from "../Pages/services/ConfirmDetails";
import OrderConfirmation from '../Pages/orderConfirmation'
import { AboutUs } from "../Pages/AboutUs";
import {TermsAndprivacy} from "../Pages/TermsAndprivacy"
import {ConfirmAndChat} from "../Pages/services/ConfirmAndChat";
import { BlogDetails } from "../Pages/blogDetailsPage/BlogDetails";
const AllRoute =()=>{
    return (
        <>
        <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/Navbar" element={<Navbar/>}>Navbar</Route>
        <Route path="/Footer" element={<Footer/>}>Footer</Route>
        <Route path="/aboutus" element={<AboutUs/>}>AboutUs</Route>
        <Route path="/serviceform/:serviceid" element={<ServiceForm/>}>ServiceForm</Route>
        <Route path="/taskdetails" element={<TaskDetails />}>TaskDetails</Route>
        <Route path="/profile" element={< Profile />}>Profile</Route>
        <Route path="/Tasker" element={< Tasker />}>Tasker</Route>
        <Route path="/termsandprivacy" element={< TermsAndprivacy />}>Terms And privacy</Route>
        <Route path="/login" element={< Login />}>Tasker Login</Route>
        <Route path="/signup" element={< Signup />}>Tasker Signup</Route>
        <Route path="/services" element={<Services/>}> Services </Route>
        <Route path="/formBookingDetails" element={<FormBooking/>}> FormBooking </Route>
        <Route path="/servicedetails/:id" element={<ServiceDetails/>}> Service Details </Route>
        <Route path="/serviceinfo/:id" element={<ServiceInfo/>}> ServiceInfo </Route>
        <Route path="/Popup" element={<Popup/>}>Popup </Route>
        <Route path="/imageupload" element={<ImageUpload/>}>Image Upload</Route>
        <Route path="/confirmdetails/:id" element={<ConfirmDetails/>}>Confirm Details</Route>
        <Route path="/confirmandchat/:id" element={<ConfirmAndChat/>}>Confirm Details</Route>
        <Route path="/services/:id" element={<OrderConfirmation/>}>order confirmation</Route>
        <Route path="/blogdetails/:id" element={<BlogDetails/>}>Blog Details</Route>
        </Routes>
        </>
    )
}
export default AllRoute