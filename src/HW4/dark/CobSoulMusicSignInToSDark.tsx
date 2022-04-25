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

interface CobSoulMusicSignInTosDarkProps {
    openUp: boolean
    onClose:()=>void
}

interface  CobSoulMusicSignInTosDarkStates {
    openUp: boolean
    termsRead:boolean
}
export default class  CobSoulMusicSignInTosDark extends React.Component<CobSoulMusicSignInTosDarkProps, CobSoulMusicSignInTosDarkStates>{
    constructor(props: CobSoulMusicSignInTosDarkProps) {
        super(props);
        this.state = {
            openUp:false,
            termsRead:false
        }
    }

    componentDidUpdate(){
        if(!this.state.openUp && this.props.openUp){
            this.setState({openUp:true});
        }
    }

    setOpen(openUp: boolean) {
        this.setState({ openUp: openUp })
    }

    render(): React.ReactNode {
        console.log("Showing Terms");
        return (
            <>
                <Modal
                    open={this.state.openUp}
                    onClose={() => {this.setState({ openUp: false, termsRead: true });this.props.onClose()}}
                    onOpen={() => this.setState({ openUp: true })}
                >
                    <Modal.Header>TERMS AND CONDITIONS OF SOULO ACCOUNT</Modal.Header>
                    <Modal.Content scrolling>
                        <Modal.Description>
                            <div className='HW4-TermsDark HW4-LowContrast'>
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
                        <Button color="green" inverted onClick={() => {this.setState({ termsRead: true, openUp: false });this.props.onClose()} } primary>
                            Continue <Icon name='chevron right' />
                        </Button>
                    </Modal.Actions>
                </Modal>
            </>);
    }
}