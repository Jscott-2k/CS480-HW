import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Routing from './Routing';
import { UserContextProvider } from './HW3/CobSouloUserInfoContext';

function App() {
  return (
      <div className="App">
        <Routing></Routing>
      </div>
  );
}

export default App;
