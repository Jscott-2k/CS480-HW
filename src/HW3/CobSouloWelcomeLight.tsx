import React, { Component } from 'react';
import './CobSoulo.css';
import { Menu, Image, Button, Icon, Label, MenuItemProps, Segment, MenuItem, Dropdown, Input, MenuHeader, Message, Container, Divider, Form, FormInput, FormField, InputOnChangeData, Modal, Checkbox } from 'semantic-ui-react'

import { Navigate } from "react-router-dom"
import { debug } from 'console';
import CobSouloGameDark from './CobSouloGameDark';
import CobSouloLoginBonusDark from './CobSouloLoginBonusDark';
import CobSouloStoreLight from './CobSouloStoreLight';
import { UserContextProvider } from './CobSouloUserInfoContext';
import CobSouloGameLight from './CobSouloGameLight';
import CobSouloLoginBonusLight from './CobSouloLoginBonusLight';

interface Props {

}

interface States {
    username: string
    password: string
    login: boolean
    day: number
    page: number
    gold: number
    silver: number
    brass: number
    termsOpen: boolean
    termsRead: boolean
    termsChecked: boolean
}


class CobSouloLight extends Component<Props, States> {

    constructor(props: Props) {
        super(props);
        this.state = {
            username: "", password: "", login: false, day: 0, page: 0, gold: 0, silver: 0, brass: 0, termsOpen: false, termsRead: false, termsChecked: false
        }
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>, { n, v }: InputOnChangeData) => {
        this.setState({ password: e.target.value });
    }
    handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>, { name, value }: InputOnChangeData) => this.setState({ username: e.target.value });

    handleSubmit = () => {

        this.setState({ username: '', password: '', login: true });
    }
    render() {

        if (this.state.login) {

            if (this.state.page == 0) {
                return <UserContextProvider day={this.state.day} gold={this.state.gold} silver={this.state.silver} brass={this.state.brass}>
                    <CobSouloGameLight
                        day={this.state.day}
                        onLoginBonus={() => { this.setState({ page: 1 }) }}
                        onStore={() => { this.setState({ page: 2 }) }}
                        onRecharge={() => { this.setState({ page: 3 }) }}
                    ></CobSouloGameLight></UserContextProvider>
            } else if (this.state.page == 1) {
                return <UserContextProvider day={this.state.day} gold={this.state.gold} silver={this.state.silver} brass={this.state.brass}> <CobSouloLoginBonusLight day={this.state.day}
                    onClaimLoginGame={(nextDay) => { this.setState({ page: 0, day: nextDay }) }} onCancelClaim={() => { this.setState({ page: 0, day: this.state.day }) }}>
                </CobSouloLoginBonusLight></UserContextProvider>
            } else if (this.state.page == 2) {
                return <UserContextProvider day={this.state.day} gold={this.state.gold} silver={this.state.silver} brass={this.state.brass}> <CobSouloStoreLight recharge={false} day={this.state.day}
                    onPurchaseItem={(item) => { this.setState({ page: 0 }) }} onReturn={() => { this.setState({ page: 0 }) }}>
                </CobSouloStoreLight></UserContextProvider>
            } else if (this.state.page == 3) {
                return <UserContextProvider day={this.state.day} gold={this.state.gold} silver={this.state.silver} brass={this.state.brass}> <CobSouloStoreLight recharge={true} day={this.state.day}
                    onPurchaseItem={(item) => { this.setState({ page: 0 }) }} onReturn={() => { this.setState({ page: 0 }) }}>
                </CobSouloStoreLight></UserContextProvider>
            }
        }

        return (
            <>
                <Modal
                    open={this.state.termsOpen}
                    onClose={() => this.setState({ termsOpen: false, termsRead: true })}
                    onOpen={() => this.setState({ termsOpen: true })}
                >
                    <Modal.Header>TERMS AND CONDITIONS OF SOULO ACCOUNT</Modal.Header>
                    <Modal.Content scrolling>
                        <Modal.Description>
                            <div className='HW3TermsLight'>
                                <p>
                                    By accepting this agreement you enter into a binding and eternal contract with the ruinous powers to
                                    engage in full and total custodianship of (1) human soul, granted to you in exchange for the payment
                                    described in your purchase summary. You will also be mailed a frozen fish as described to you in the
                                    listing. This fish, henceforth called the “fish vessel”, represents the binding terms of your
                                    custodianship, and must be kept frozen at all times to avoid the risk of an all-consuming flame that can
                                    never be quenched. You hereby indemnify Cob’s of any harm caused by allowing the fish vessel to
                                    thaw, including but not limited to property damage, incineration, and the formation of gaping maws of
                                    despair on your property.
                                </p>
                                <p>
                                    By consuming the fish vessel, you forfeit any rights to the above contracted soul, and agree to render
                                    your soul onto Cob’s, or our chosen agent, upon your expiration. To cancel this contract at any time,
                                    simply resurrect the fish vessel using the necromantic arts, then cast the living fish vessel into a suitable
                                    void, no less than 24 miles deep. Attach a notarized copy of your name, social security number, order
                                    number, and exact second of birth to ensure processing of your cancellation.
                                </p>
                            </div>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => this.setState({ termsRead: true, termsOpen: false })} primary>
                            Close <Icon name='chevron right' />
                        </Button>
                    </Modal.Actions>
                </Modal>

                <div style={{ backgroundColor: "black" }}>
                    <div className='HW3PentagramCover'>

                        <div >
                            <div className='HW3WelcomeHeader'>
                                Welcome to Cob's Soulo Game!
                            </div>

                            <div className='HW3DisclaimerLight'>
                                BY SIGNING INTO MY ACCOUNT I ACCEPT THE <a className='HW3Clickable' onClick={() => { this.setState({ termsOpen: true }) }}>TERMS AND CONDITIONS</a>.
                                <p>PLAY AT YOUR OWN RISK!</p>
                            </div>

                            <div className="HW3WelcomeLoginInputs">
                                <div><Input placeholder='Username' size='huge'
                                    value={this.state.username}
                                    name="username"
                                    onChange={this.handleChangeUsername}
                                    inverted>

                                </Input></div>
                                <div>
                                    <Input placeholder='Password' size='huge'
                                        value={this.state.password}
                                        name="password"
                                        onChange={this.handleChangePassword} inverted >
                                    </Input></div>
                                <div>
                                    <div>
                                        <div className="HW3TermsCheck" onClick={() => { this.setState({ termsChecked: !this.state.termsChecked }) }}>
                                            <Checkbox checked={this.state.termsChecked}>Check</Checkbox> <span>I AGREE TO THE <a className='HW3Clickable' onClick={() => { this.setState({ termsOpen: true }) }}>TERMS AND CONDITIONS</a> WHEN SIGNING INTO MY ACCOUNT</span>
                                        </div>

                                    </div>
                                    <br></br>
                                    <Button inverted color="red" type='submit' size='huge' onClick={this.handleSubmit} disabled={!this.state.termsChecked}>Login</Button></div>

                            </div>
                        </div>
                    </div>

                </div > </>
        );
    }

}

export default CobSouloLight;
