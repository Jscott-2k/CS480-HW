import React from 'react';
import logo from './logo.svg';
import './CobLanding.css';
import TermsOfService from './TermsOfService';

function CobLanding() {
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
          <div className="ToS-Box">
            <TermsOfService></TermsOfService>
          </div>
          <div className="ToS-Consent">
            <div><input type="checkbox" defaultChecked={true} /> <label>I agree to the Terms of Service</label></div>
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

export default CobLanding;
