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
import CobSouloDark from './HW3/CobSouloWelcomeDark';
import CobSouloLoginBonusDark from './HW3/CobSouloLoginBonusDark';
import CobSouloGameDark from './HW3/CobSouloGameDark';
import CobSouloLight from './HW3/CobSouloWelcomeLight';

function Routing() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/HW1dark" element={<CobLandingDark></CobLandingDark>} />
          <Route path="/HW1light" element={<CobLandingLight></CobLandingLight>} />

          <Route path="/HW2light" element={<CobSeafoodLight></CobSeafoodLight>} />
          <Route path="/HW2dark" element={<CobSeafoodDark></CobSeafoodDark>} />
          <Route path="/HW2light/success" element={<CobSeafoodOrderSuccessLight></CobSeafoodOrderSuccessLight>} />
          <Route path="/HW2dark/success" element={<CobSeafoodOrderSuccessDark></CobSeafoodOrderSuccessDark>} />

          <Route path="/HW3light" element={<CobSouloLight></CobSouloLight>} />
          <Route path="/HW3dark" element={<CobSouloDark></CobSouloDark>} />
          {/* <Route path="/HW3dark/login" element={<CobSouloLoginBonusDark></CobSouloLoginBonusDark>}/>
          <Route path={"/HW3dark/game"} element={<CobSouloGameDark></CobSouloGameDark>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default Routing;
