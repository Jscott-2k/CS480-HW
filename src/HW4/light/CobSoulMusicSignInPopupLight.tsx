import React, { FC } from 'react';

import '../CobSoulMusic.css';
import CobSoulMusicCommentsDark from './CobSoulMusicCommentsLight';
import CobSoulMusicSelectionContainerLight from './CobSoulMusicSelectionContainerLight';
import CobSoulMusicFavoritesMenuLight from './CobSoulMusicFavoritesMenuLight';
import CobSoulMusicHeaderLight from './CobSoulMusicHeaderLight';
import CobSoulMusicSearchMenuLight from './CobSoulMusicSearchMenuLight';

import { Button, Checkbox, Embed, Form, Icon, Input, Label, Modal } from 'semantic-ui-react';
import CobSoulMusicAdProgressTimerLight from './CobSoulMusicAdProgressTimerLight';

interface CobSoulMusicSignInPopupLightProps {
    openUp: boolean
    onSignIn: () => void
    onShowTerms: () => void
}

interface CobSoulMusicSignInPopupDarkStates {
    firstOpen: boolean
    secondOpen: boolean
    secondDisabled: boolean
    readTerms: boolean
    consentToTerms:boolean
}
export default class CobSoulMusicSignInPopupLight extends React.Component<CobSoulMusicSignInPopupLightProps, CobSoulMusicSignInPopupDarkStates>{
    constructor(props: CobSoulMusicSignInPopupLightProps) {
        super(props);
        this.setSecondOpen = this.setSecondOpen.bind(this);
        this.setFirstOpen = this.setFirstOpen.bind(this);
        this.closeAll = this.closeAll.bind(this);
        this.state = {
            firstOpen: false,
            secondOpen: false,
            secondDisabled: true,
            readTerms: false,
            consentToTerms:false
        }
    }

    componentDidUpdate() {
        if (this.props.openUp && !this.state.firstOpen) {
            this.setFirstOpen(true);
        }
        return true;
    }

    setFirstOpen(firstOpen: boolean) {
        this.setState({ firstOpen: firstOpen })
    }
    setSecondOpen(secondOpen: boolean) {
        this.setState({ secondOpen: secondOpen })
    }
    closeAll() {
        this.props.onSignIn();
        this.setState({ firstOpen: false, secondOpen: false, secondDisabled: true });
    }
    render(): React.ReactNode {
        return (
            <>
                <Modal
                    onClose={() => this.setFirstOpen(false)}
                    onOpen={() => this.setFirstOpen(true)}
                    open={this.state.firstOpen}
                >
                    <Modal.Header>Let's Sign You Up - Takes under 1 Second!</Modal.Header>
                    <Modal.Content image>
                        <div className='image'>
                            <Icon name="music" />
                        </div>
                        <Modal.Description>
                            <b>You will be automatically entered into a random monthly lottery for a ~<b><i>0.001%</i></b> chance to win 92 Cobucks for <a href="">Cob's Soulo Game!</a>
                                <br></br>
                                Odds can increase or decrease depending on how many people enter!</b>
                            <p>Create your <b><i>free</i></b> account to access several amazing tunes! Please fill out all of your information below.</p>

                            <Form>
                                <Form.Group>
                                    <Form.Input placeholder="First Name" required />
                                    <Form.Input placeholder="Last Name" required /> </Form.Group>
                                <Form.Input placeholder="email@gmail.com" required />
                                <Form.Input placeholder="Phone Number" required />
                                <Form.Checkbox label="I consent to be texted/emailed updates for Cob's Soul Music"></Form.Checkbox>




                                <span className='HW4-Bolder HW4-Blue HW4-ReadTermsLight' onClick={() => { this.setState({ readTerms: true }); this.props.onShowTerms(); }}>Click Here to Read Terms</span>
                                <div>
                                   <i> You must read the terms before consenting to sign up!</i>
                                </div>
                               <Form.Checkbox label="I consent to let Cob harvest my soul and to the terms of Service" 
                               onChange={(e,d)=>{
                                   this.setState({consentToTerms:d.checked as boolean});
                               }}
                               disabled={!this.state.readTerms}>


                                </Form.Checkbox>




                            </Form>

                        </Modal.Description>

                    </Modal.Content>
                    <Modal.Actions>

                        <Button icon onClick={() => this.setSecondOpen(true)} color="blue"  disabled={!this.state.consentToTerms}>
                        <Icon name="check" size='small' /> Finish Sign Up
                        </Button>
                    </Modal.Actions>

                    <Modal
                        onClose={() => { }}
                        open={this.state.secondOpen}
                        size='small'
                    >
                        <Modal.Header>Thanks For Joining Us!</Modal.Header>
                        <Modal.Content>
                            <p><i>You will be able to listen right after this ad! You can also buy ad skips after adding your billing information!</i></p>
                            <p>Check out some cool shoes from <a href="../HW1dark" className="HW4-Bolder" target={"_blank"}>Cob's Shoes</a>!
                            <div></div>
                            <span className='HW4-Bolder'>Weekly Discount Available! </span></p>

                            <div>
                                <iframe className='HW4-VideoAdIframe' width="560" height="415" src="https://www.youtube.com/embed/uTXw5CKcKGo?controls=0&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={false}></iframe>
                            </div>
                        </Modal.Content>
                        <Modal.Actions>
                            <CobSoulMusicAdProgressTimerLight initalTime={8} updateTick={1000} onFinish={() => {
                                this.setState({ secondDisabled: false });
                            }} />
                            <Button
                                icon='check'
                                content='All Done'
                                onClick={() => this.closeAll()}
                                disabled={this.state.secondDisabled}
                            />
                        </Modal.Actions>
                    </Modal>
                </Modal>
            </>);
    }
}