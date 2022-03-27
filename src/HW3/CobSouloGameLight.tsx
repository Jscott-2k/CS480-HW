import React, { Component } from 'react';

import './CobSoulo.css';
import CobSouloGameContentLight from "./CobSouloGameContentDark"
import { Menu, Button, Icon, Label, MenuItemProps, Segment, MenuItem, Dropdown, Input, MenuHeader, Message, Container, Divider, ButtonProps } from 'semantic-ui-react'
import {CobSouloLoginProgressDark as CobSouloLoginProgressLight} from './CobSouloLoginProgressDark';
import { Navigate } from 'react-router-dom';
import CobSouloCobuckCountLight from './CobSouloCobuckCountDark';
import { UserContext, UserContextProvider } from './CobSouloUserInfoContext';


interface Props {
    onLoginBonus:()=>void
    onStore:()=>void
    onRecharge:()=>void
    day:number
}

interface States {
    navigate:boolean
    navPage:string
    day:number
}


class CobSouloGameLight extends Component<Props, States> {
    static contextType: React.Context<any> | undefined = UserContext

    constructor(props: Props) {
        super(props);
        this.state = {
            navigate:false,
            navPage:"",
            day:this.props.day
        }

    }
    
    handleNav = (c:()=>void) =>
    { 
       c();
    }
    render() {
        const {darkMode} = this.context
        return (
            <>
               
                <div style={{backgroundColor:"black"}} className="HW3GameMainContainer"> 
                    <div className='HW3GameHeader'><div>Cob's Soulo Game</div></div>
                    <div>
                        <div className='HW3UIMenuButtons'>
                            <Button size="large" inverted onClick={()=>{this.handleNav(this.props.onLoginBonus)}}>Claim Login Bonus</Button>
                            <Button size="large" inverted onClick={()=>{this.handleNav(this.props.onStore)}}>Soul Store</Button>
                            <Button  size="large" inverted onClick={()=>{this.handleNav(this.props.onRecharge)}}>Recharge</Button>
                        </div>
                        <div className='HW3GameCenterContainer'>
                            <CobSouloGameContentLight  day={this.state.day} darkMode={darkMode}/>
                            <CobSouloCobuckCountLight as="column"/>
                        </div>

                        <CobSouloLoginProgressLight/>
                    </div>
                </div>
            </>
        );
    }

    addToCart(): void {

    }
}

export default CobSouloGameLight;
