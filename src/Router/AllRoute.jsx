import { Routes,Route } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import Servicedetails from "../Pages/servicedetails"
import Profile from "../Pages/Profile";
import Tasker from "../Pages/Tasker";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Services from "../Pages/Services";
import Popup from "../Pages/Popup";
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
        <Route path="/login" element={< Login />}>Login</Route>
        <Route path="/Signup" element={<Signup/>}>Signup </Route>
        <Route path="/services" element={<Services/>}> Services </Route>
        <Route path="/Popup" element={<Popup/>}>Popup </Route>
        <Route path="/services/:id" element={<OrderConfirmation/>}>order confirmation</Route>
        </Routes>
        </>
    )
}
export default AllRoute