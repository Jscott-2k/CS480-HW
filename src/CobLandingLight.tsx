import React from 'react';
import logo from './logo.svg';
import './CobLanding.css';
import TermsOfService from './TermsOfService';

function CobLandingLight() {
  return (
    <>
      <header className="App-header">
        Welcome to Cob's
      </header>

      <div className="Content-Container">
        <div className="Left-Bar">
          <div className="Image-Container">
            <img src="shoe1.png" />
          </div>
          <div className="Image-Container">
            <img src="shoe2.png" /></div>
          <div className="Image-Container">
            <img src="shoe3.png" /></div>
          <div className="Image-Container">
            <img src="shoe8.jpg" /></div>
        </div>
        <div className="Main-Content">
          <h3>PLEASE READ THE TERMS OF SERVICE</h3>
          <div className="ToS-Box-Light">
            <TermsOfService></TermsOfService>
          </div>
          <div className="ToS-TLDR">
            Breif Summary: We have the right to store, track, and distribute your data. We have the right to cancel transactions or terminate your account at anytime.
          </div>
          <div className="ToS-Consent">
            <div><input type="checkbox"/> <label>I agree to the Terms of Service</label></div>
            <input value="continue" type="button"></input>
          </div>
        </div>
        <div className="Right-Bar">
          <div className="Image-Container">
            <img src="shoe6.jpg" /></div>
        </div>
      </div>
    </>
  );
}

export default CobLandingLight;
