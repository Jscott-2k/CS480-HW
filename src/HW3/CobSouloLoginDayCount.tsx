import React, { Component, useContext } from 'react';

import './CobSoulo.css';
import { Menu, Button, Icon, Label, MenuItemProps, Segment, MenuItem, Dropdown, Input, MenuHeader, Message, Container, Divider } from 'semantic-ui-react'
import {  UserContext } from "./CobSouloUserInfoContext"



export const CobSouloLoginDayCount = () => {

    const user = useContext(UserContext)
    const daysLeft = 7 - user.day;

    if(daysLeft < 1){
        return  <>Cumulative Login Day: {user.day}</>
    }else{

    return <>


        Login {7 - user.day} more days to unlock dark mode!
    </>
        
    }
    }


export default CobSouloLoginDayCount;
