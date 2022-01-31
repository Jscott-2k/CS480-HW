import React from 'react';
import {Route,BrowserRouter as Router, Routes } from "react-router-dom";
import logo from './logo.svg';
import CobLandingDark from './CobLandingDark';
import Home from './Home';
import CobLandingLight from './CobLandingLight';

function Routing() {
  return (
    <Router>
  <div>
  <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/HW1dark" element={<CobLandingDark></CobLandingDark>}/>
    <Route path="/HW1light" element={<CobLandingLight></CobLandingLight>}/></Routes>
  </div>
  </Router>
  );
}

export default Routing;
