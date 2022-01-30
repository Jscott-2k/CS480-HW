import React from 'react';
import logo from './logo.svg';
import './Home.css';
class Home extends React.Component {
  render() {
    return(<>
        <header className="App-header">
            CS480B Homework Page
        </header>
        <h3>By Justin Scott</h3>
        <div className="Homework-Blurb">
            Using the list below you can navigate to the light and dark version of each homework assignment!
        </div>
        <ul className="Homework-List">
            <li>
                <h4>Homework 1 - Consent at Cob's</h4>
                <ul>
                    <li>
                        <a href="/HW1light">See Light Version</a>
                    </li>
                    <li>
                        <a href="/HW1dark">See Dark Version</a>
                    </li>
                </ul>
            </li>
            
        </ul>
    </>);
  }
}

export default Home;
