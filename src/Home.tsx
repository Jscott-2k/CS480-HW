import React from 'react';
import logo from './logo.svg';
import './Home.css';
class Home extends React.Component {
    render() {
        return (<>
            <header className="App-header">
                CS480B Homework Page
            </header>
            <h3>By Justin Scott</h3>
            <div className="Homework-Blurb">
                Using the list below you can navigate to the light and dark version of each homework assignment!
            </div>

            <div className='Homework'>
                <ul className="Homework-List">

                    <li>
                        <ul>
                            <h4>Homework 1 - Consent at Cob's</h4>
                            <li>
                                <a href="/HW1light">See Light Version</a>
                            </li>
                            <li>
                                <a href="/HW1dark">See Dark Version</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <h4>Homework 2 - Cob's Seafood</h4>
                            <li>
                                <a href="/HW2light">See Light Version</a>
                            </li>
                            <li>
                                <a href="/HW2dark">See Dark Version</a>
                            </li> </ul>
                    </li>
                    <li>
                        <ul>
                            <h4>Homework 3 - Cob's Soulo Game</h4>
                            <li>
                                <a href="/HW3light">See Light Version</a>
                            </li>
                            <li>
                                <a href="/HW3dark">See Dark Version</a>
                            </li>
                        </ul>

                        <ul>
                            <h4>Homework 4 - Cob's Soul Music</h4>
                            <li>
                                <a href="/HW4light">See Light Version</a>
                            </li>
                            <li>
                                <a href="/HW4dark">See Dark Version</a>
                            </li>
                        </ul>

                    </li>
                </ul>
            </div>
        </>);
    }
}

export default Home;
