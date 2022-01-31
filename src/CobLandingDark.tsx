import React from 'react';
import logo from './logo.svg';
import './CobLanding.css';
import TermsOfService from './TermsOfService';

function CobLandingDark() {
  return (
    <>
      <header className="App-header">
        Welcome to Cob's
      </header>
      <div className="Clouds">
        <img className="Left-Cloud" src="clouds.png"/>
        <img className="Right-Cloud" src="clouds.png"/>
      </div>
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
          <div className="ToS-Box-Dark">
            <TermsOfService></TermsOfService>
          </div>
          <div className="ToS-Consent">
            <div><input type="checkbox" defaultChecked={true} /> <label className="Dark-Checkbox-Label">I agree to the Terms of Service above</label></div>
            <input value="Start Selecting Some Shoes!" className="Dark-Continue" type="button"></input>
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

export default CobLandingDark;
