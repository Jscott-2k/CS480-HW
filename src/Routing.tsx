import React from 'react';
import {Route,BrowserRouter as Router, Routes } from "react-router-dom";
import logo from './logo.svg';
import CobLanding from './CobLanding';
import Home from './Home';

function Routing() {
  return (
    <Router>
  <div>
  <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/HW1dark" element={<CobLanding></CobLanding>}/>
    <Route path="/HW1light" /></Routes>
  </div>
  </Router>
  );
}

export default Routing;
