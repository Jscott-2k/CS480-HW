import React, { Component } from 'react';

import './CobSoulo.css';
import { Menu, Button, Icon, Label, MenuItemProps, Segment, MenuItem, Dropdown, Input, MenuHeader, Message, Container, Divider } from 'semantic-ui-react'
import { UserContext } from './CobSouloUserInfoContext';


interface Props {
    as:"column" | "row"
}

interface States {

}


class CobSouloCobuckCountLight extends Component<Props, States> {
    static contextType = UserContext;
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {wealth} = this.context;
        let cName = "";
        if(this.props.as=="column"){
            cName = "HW3CobuckCol"
        }else if(this.props.as=="row"){
            cName = "HW3CobuckRow"
        }

        return (
            <>
                <div className={cName}>
                    Your Cobucks
                    <div> <Icon name="star outline" color='yellow' ></Icon>G: {wealth.gold}</div>
                    <div> <Icon name="star outline"color="grey" ></Icon>S: {wealth.silver}</div>
                    <div> <Icon name="star outline" color='orange'></Icon>B: {wealth.brass}</div>
                </div>
            </>
        );
    }

}

export default CobSouloCobuckCountLight;
