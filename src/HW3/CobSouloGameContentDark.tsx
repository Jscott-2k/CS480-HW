import React, { Component } from 'react';

import './CobSoulo.css';
import { Menu, Button, Icon, Image, Label, MenuItemProps, Segment, MenuItem, Dropdown, Input, MenuHeader, Message, Container, Divider } from 'semantic-ui-react'
import { UserContext } from './CobSouloUserInfoContext';

interface Props {
    day:number
    darkMode:boolean
}

interface States {
    souls:number
}


class CobSouloGameContentDark extends Component<Props, States> {
    static contextType = UserContext;
    constructor(props: Props) {
        super(props);
        this.state = {
            souls:0
        }
        this.handleSkeletonClick = this.handleSkeletonClick.bind(this);

    }


    handleSkeletonClick = () =>{
        const {souls,setSouls,boost, wealth} = this.context;
        setSouls(souls+(boost))
    }
    render() {
        const {souls,setSouls,boost,wealth} = this.context;
        return (
            <>
                <div className={`HW3Game${this.props.darkMode ? ' HW3Darkmode' : ' '}`}>
                    <div className='HW3GameInstructions'>Harvest Souls by clicking the spooky skeleton!</div>
                    <div className='HW3Stats'>
                    Souls Collected: {souls}
                    <br/>

                    Soul Boost Multiplier: {boost}
                    <br></br>
                    <br></br>
                    {boost <= 1 && <div>
                        Tip: Increase your harvest rate by trading for a boost at The Soul Store!
                        </div>}
                    </div>
                    <div className='HW3Skeleton' onClick={this.handleSkeletonClick}>
                        <Image srcSet="/skeleton.png"></Image>
                    </div>
                    <br></br>
                    <br></br>
                    { (wealth.gold < 7 && wealth.silver < 32 && wealth.brass < 128) && <div className='HW3LowCobucksIndicator'>
                        You are LOW on COBUCKS! Get more by clicking the RECHARGE button!
                    </div>}


                </div>
            </>
        );
    }

    addToCart(): void {

    }
}

export default CobSouloGameContentDark;
