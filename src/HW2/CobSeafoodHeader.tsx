import React from 'react';
import { Icon } from 'semantic-ui-react';

import './CobSeafoodLight.css'

interface props {
}
interface states {
}
class CobSeafoodHeader extends React.Component {
    render() {
        return (
            <>
                <header className="HW2-header">
                    Cob's Seafood Emporium
                </header>
                <h3> <i>Get your scurvy claws on the finest grup on the planet! </i><span><Icon name="globe" size='small' /></span></h3>
            </>);
    }
}

export default CobSeafoodHeader;
