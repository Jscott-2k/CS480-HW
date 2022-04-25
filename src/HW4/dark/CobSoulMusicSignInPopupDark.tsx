import React, { FC } from 'react';

import '../CobSoulMusic.css';
import CobSoulMusicCommentsDark from './CobSoulMusicCommentsDark';
import CobSoulMusicSelectionContainerDark from './CobSoulMusicSelectionContainerDark';
import CobSoulMusicFavoritesMenuDark from './CobSoulMusicFavoritesMenuDark';
import CobSoulMusicHeaderDark from './CobSoulMusicHeaderDark';
import CobSoulMusicSearchMenuDark from './CobSoulMusicSearchMenuDark';
import Particles from "react-tsparticles";
import CobSoulMusicParticles from './CobSoulMusicParticles';
import { Button, Checkbox, Embed, Form, Icon, Input, Modal } from 'semantic-ui-react';
import CobSoulMusicAdProgressTimerDark from './CobSoulMusicAdProgressTimerDark';

interface CobSoulMusicSignInPopupDarkProps {
    openUp: boolean
    onSignIn: () => void
    onShowTerms:()=>void
}

interface CobSoulMusicSignInPopupDarkStates {
    firstOpen: boolean
    secondOpen: boolean
    secondDisabled: boolean

}
export default class CobSoulMusicSignInPopupDark extends React.Component<CobSoulMusicSignInPopupDarkProps, CobSoulMusicSignInPopupDarkStates>{
    constructor(props: CobSoulMusicSignInPopupDarkProps) {
        super(props);
        this.setSecondOpen = this.setSecondOpen.bind(this);
        this.setFirstOpen = this.setFirstOpen.bind(this);
        this.closeAll = this.closeAll.bind(this);
        this.state = {
            firstOpen: false,
            secondOpen: false,
            secondDisabled: true
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
                            You will be automatically entered into a random monthly lottery for a chance to win $100 <span className='HW4-LowContrast'>worth of Cobucks!</span>
                            <p>Create your <b><i className='HW4-RGB'>free</i></b> account to access several amazing tunes! Please fill out all of your information below.</p>

                            <Form>
                                <Form.Group>
                                    <Form.Input placeholder="First Name" required />
                                    <Form.Input placeholder="Last Name" required /> </Form.Group>
                                <Form.Input placeholder="email@gmail.com" required />
                                <Form.Input placeholder="Social Security Number" required />
                                <Form.Input placeholder="Phone Number" required />
                                <Form.Checkbox defaultChecked label="I consent to be texted/emailed updated for Cob's Soul Music"></Form.Checkbox>
                                <Form.Checkbox defaultChecked label="I consent to let Cob harvest my soul and to the terms of Service" radio></Form.Checkbox>
                            </Form>
                            
                        </Modal.Description>
                        
                    </Modal.Content>
                    <Modal.Actions>
                    <span className='HW4-LowContrast HW4-ReadTermsDark' onClick={this.props.onShowTerms}>read terms here</span>
                        <Button onClick={() => this.setSecondOpen(true)} color="green">
                            Get Music <Icon name="arrow right" size='massive'/>
                        </Button>
                    </Modal.Actions>

                    <Modal
                        onClose={() => { }}
                        open={this.state.secondOpen}
                        size='small'
                    >
                        <Modal.Header>Thanks For Joining Us!</Modal.Header>
                        <Modal.Content>
                            <p><i>You will be able to listen right after this ad! You can also win ad skips after adding your billing information!</i></p>
                            <p>Check out some cool shoes from <a href="../HW1dark" className="HW4-Bolder" target={"_blank"}>Cob's Shoes</a> so you don't look like this fool. <span className='HW4-Bolder HW4-RGB'>Weekly Discount Available! </span></p>

                            <div>
                                <iframe className='HW4-VideoAdIframe' width="560" height="415" src="https://www.youtube.com/embed/uTXw5CKcKGo?controls=0&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={false}></iframe>
                            </div>
                        </Modal.Content>
                        <Modal.Actions>
                            <CobSoulMusicAdProgressTimerDark initalTime={8} updateTick={1000} onFinish={() => {
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