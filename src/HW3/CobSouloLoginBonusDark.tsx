import React, { Component } from 'react';
import './CobSoulo.css';
import { Menu, Button, Icon, Label, MenuItemProps, Segment, MenuItem, Dropdown, Input, MenuHeader, Message, Container, Divider, Checkbox } from 'semantic-ui-react'
import { Navigate } from 'react-router-dom';
import { UserContext } from './CobSouloUserInfoContext';
import { IUser } from './CobSouloUserInfo';


interface Props {
    onClaimLoginGame: (d: number) => void
    onCancelClaim: ()=>void
    day: number;
}

interface States {
    navigate: boolean
    day: number
    check1: boolean
    check2: boolean
}


class CobSouloLoginBonusDark extends Component<Props, States> {
    static contextType = UserContext;
    constructor(props: Props) {
        super(props);
        this.state = {
            navigate: false,
            day: this.props.day,
            check1: false, check2: false
        }


    }
    handleClaimLogin = () => {
        const { user,setUser } = this.context;
        console.log(user);
        const newUser:IUser = user;
        newUser.wealth.brass = user.wealth.brass + 1;
        newUser.dailyConvertion = true;
        newUser.dailyRechargeDeal = true;
        setUser(newUser);
        
        this.props.onClaimLoginGame(this.props.day + 1);
    }
    handleCancelClaim = () =>{
        this.props.onCancelClaim()
    }
    render() {
        const { wealth, setBrass, darkMode } = this.context;
        if (this.state.navigate) {
            return <Navigate to={"/HW3dark/game/"} state={{ day: 3 }} />
        }
        return (
            <> <div className={`HW3DailyLoginBonusContainer${darkMode ? ' HW3Darkmode' : ' '}`}>
                <div className='HW3DailyLoginBonusHeader'>
                    Daily Login Bonus
                </div>

                <div>
                    <h3 > <b>
                        Incantation of the day</b>
                    </h3>
                    <Divider></Divider>
                    <div>
                        <p>Volo videre tenebras aeternas</p>
                        <p>Ego certe amo tenebras</p>
                        <p>Vere fan tenebrarum</p>
                        <p>Me et tenebrae sunt sicut amici optimi</p>
                        <p>Ita vere gratum essem si habere possem infinitas tenebras</p>
                        <p>Hoc vere sit multum</p>
                        <p>Gratias tibi valde</p>
                    </div>

                </div>
                <div style={{ backgroundColor: "white", margin: "1em", padding: ".5em" }}>
                    <div style={{ margin: ".5em" }}>
                        <Checkbox defaultChecked label="I have read the incantation above*" onChange={
                            (e, d) => {
                                this.setState({ check1: d.checked ? false : true })
                            }}>
                        </Checkbox></div>
                    <div style={{ padding: ".5em", margin: ".5em" }}>
                        <Checkbox defaultChecked label="I agree to be one step closer to dark mode" onChange={
                            (e, d) => {
                                this.setState({ check2: d.checked ? false : true })
                            }}></Checkbox></div></div>
                            
                <Button color="red" onClick={this.handleCancelClaim} inverted={darkMode} size="large">Cancel</Button>
                <Button color="black" onClick={this.handleClaimLogin} inverted={darkMode}  size="large" disabled={this.state.check1 || this.state.check2}>Submit</Button>

                <div className='HW3DisclaimerCheck'>
                    *My checkmark here is equivalent to reciting this incantation out loud
                </div>
            </div>
            </>
        );
    }

    addToCart(): void {

    }
}

export default CobSouloLoginBonusDark;
