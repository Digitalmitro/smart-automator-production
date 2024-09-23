import { Routes,Route } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import Servicedetails from "../Pages/services/TaskDetails"
import {ServiceInfo} from "../Pages/services/serviceInfo"
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


const AllRoute =()=>{
    return (
        <>
        <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/Navbar" element={<Navbar/>}>Navbar</Route>
        <Route path="/Footer" element={<Footer/>}>Footer</Route>
        <Route path="/Servicedetails" element={<Servicedetails />}>servicedetails</Route>
        <Route path="/profile" element={< Profile />}>Profile</Route>
        <Route path="/Tasker" element={< Tasker />}>Tasker</Route>
        <Route path="/taskerlogin" element={< TaskerLogin />}>Tasker Login</Route>
        <Route path="/taskersignup" element={< TaskerSignup />}>Tasker Signup</Route>
        <Route path="/login" element={< Login />}>Login</Route>
        <Route path="/Signup" element={<Signup/>}>Signup </Route>
        <Route path="/services" element={<Services/>}> Services </Route>
        <Route path="/serviceinfo/:servicetype/:specificservice" element={<ServiceInfo/>}> ServiceInfo </Route>
        <Route path="/Popup" element={<Popup/>}>Popup </Route>
        <Route path="/imageupload" element={<ImageUpload/>}>Image Upload</Route>
        <Route path="/confirmdetails/:id" element={<ConfirmDetails/>}>Confirm Details</Route>
        <Route path="/services/:id" element={<OrderConfirmation/>}>order confirmation</Route>
        </Routes>
        </>
    )
}
export default AllRoute