import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import logo from './logo.svg';
import CobLandingDark from './CobLandingDark';
import Home from './Home';
import CobLandingLight from './CobLandingLight';
import CobSeafoodLight from './HW2/CobSeafoodLight';
import CobSeafoodOrderSuccessLight from './HW2/CobSeafoodOrderSuccessLight';
import CobSeafoodDark from './HW2/dark/CobSeafoodDark';
import CobSeafoodOrderSuccessDark from './HW2/dark/CobSeafoodOrderSuccessDark';
function Routing() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/HW1dark" element={<CobLandingDark></CobLandingDark>} />
          <Route path="/HW1light" element={<CobLandingLight></CobLandingLight>} />
          
          <Route path="/HW2light" element={<CobSeafoodLight></CobSeafoodLight>}/>
          <Route path="/HW2dark" element={<CobSeafoodDark></CobSeafoodDark>}/>
          <Route path="/HW2light/success" element={<CobSeafoodOrderSuccessLight></CobSeafoodOrderSuccessLight>}/>
          <Route path="/HW2dark/success" element={<CobSeafoodOrderSuccessDark></CobSeafoodOrderSuccessDark>}/>

          </Routes>
      </div>
    </Router>
  );
}

export default Routing;
