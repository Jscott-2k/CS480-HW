import React, { Component, useContext } from 'react';

import './CobSoulo.css';
import { Menu, Button, Icon, Label, MenuItemProps, Segment, MenuItem, Dropdown, Input, MenuHeader, Message, Container, Divider } from 'semantic-ui-react'
import { UserContext, UserContextProvider } from "./CobSouloUserInfoContext"
import CobSouloLoginDayCount from './CobSouloLoginDayCount';


export const CobSouloLoginProgressDark = () => {

    const user = useContext(UserContext)
    let prog = (user.day / 7) * 100;

    if (prog > 100) {
        prog = 100;
    }
    return (
        <>
            <div className='HW3LoginProgressDark'>

                <div className='HW3FlexRow HW3AlignFlexEnd'>
                    <div className='HW3LoginProgressBarDark'>
                        <div className='HW3LoginProgressTextDark'>
                            Login Bonus Progress
                        </div>
                        <div className='HW3ProgressBarBoxDark'>
                            <div className='HW3ProgressBarOverlayDark' style={{ width: prog + "%" }}>

                            </div>
                        </div>
                        <div ><CobSouloLoginDayCount /></div>
                    </div>
                    <div className='HW3LoginProgressDarkModeBoxContainer'>
                        {!user.darkMode && <>
                            <div className='HW3LoginProgressDarkModeBoxDisabled'>
                            <div>😈</div>
                        </div>
                        </>}
                        {user.darkMode && <>
                            <div className='HW3LoginProgressDarkModeBox'>
                            <div>😈</div>
                        </div>
                        </>}
                        <div className='HW3LoginDayDarkModeTextContiner'>Dark Mode ({!user.darkMode && <>locked</>}{user.darkMode && <>enabled</>})</div></div>
                        <div className='HW3LoginProgressDarkModeUnlockedIndicator'>
                        {(!user.darkMode && user.day>=7) && <>You can now purchase dark mode from the soul store!</>}
                        </div>
                </div>

                <div className='HW3DarkModeIndicator'>
                </div>
            </div>
        </>
    );
}

