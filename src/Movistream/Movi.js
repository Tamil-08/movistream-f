import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './Getstart.css';

import Main from "./nav";
import Home from "./cards";

import End from "./footer";
import Login from "./Login";
import Inquiry from "./Inquiry";
import Register from "./Register";
import AdminDashboard from "./AdminDashboard";
import Adminlogin from "./AdminLogin";
import Watch from "./watch";






const Getstart = () => {

  return (
    <>
    <BrowserRouter>
    {/* <Main/> */}
    <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       <Route element={<Home />} path="/home" /> 
     <Route element={<AdminDashboard/>} path="/AdminDashboard"/>
      <Route element={<Inquiry />} path="/Inquiry" />
     <Route path="/reviews" element={< reviews />} />
     
<Route path="/watch" element={<Watch />}/>

       <Route path="/admin" element={< Adminlogin/>}/>
        <Route path="/profile" element={<h2>User Profile Page</h2>} />
        <Route path="/test-inquiry" element={<h2>Inquiry Page</h2>} />
      
     <Route path="/End" element={<End />}/>
    </Routes>
 
  
    </BrowserRouter>




      {/* <Main />
      <Carso />
      <Home />
      <About />
      <End /> */}
    </>
  )
}
export default Getstart;

function App() {
  return (
    <>



{/* 
      <Main />

      <Carso />
      <Home />
      <About />
      <End /> */}

    </>
  )
}




