import React, { FC } from 'react';

import '../CobSoulMusic.css';
import CobSoulMusicCommentsDark from './CobSoulMusicCommentsDark';
import CobSoulMusicSelectionContainerDark from './CobSoulMusicSelectionContainerDark';
import CobSoulMusicFavoritesMenuDark from './CobSoulMusicFavoritesMenuDark';
import CobSoulMusicHeaderDark from './CobSoulMusicHeaderDark';
import CobSoulMusicSearchMenuDark from './CobSoulMusicSearchMenuDark';
import Particles from "react-tsparticles";
import CobSoulMusicParticles from './CobSoulMusicParticles';
import { Button, Checkbox, Divider, Embed, Form, Icon, Input, Modal } from 'semantic-ui-react';
import CobSoulMusicAdProgressTimerDark from './CobSoulMusicAdProgressTimerDark';

interface CobSoulMusicPopupBuyDarkProps {
    openUp: boolean
    onClose: () => void
    price: number
    desc: string
    head: string
}

interface CobSoulMusicPopupBuyDarkStates {
    open: boolean
    disabledClose: boolean
}
export default class CobSoulMusicPopupBuyDark extends React.Component<CobSoulMusicPopupBuyDarkProps, CobSoulMusicPopupBuyDarkStates>{
    constructor(props: CobSoulMusicPopupBuyDarkProps) {
        super(props);
        this.setOpen = this.setOpen.bind(this);
        this.state = {
            open: false,
            disabledClose: true
        }
    }

    componentDidUpdate() {
        if (!this.state.open && this.props.openUp) {
            this.setOpen(true, true);
        }
    }

    setOpen(open: boolean, disabled: boolean) {
        this.setState({ open: open, disabledClose: disabled })
    }

    render(): React.ReactNode {
        return (
            <>


                <Modal
                    onClose={() => { }}
                    open={this.state.open}
                    size='small'
                >
                    <Modal.Header>{this.props.head}</Modal.Header>
                    <Modal.Content>
                        <p>
                            {this.props.desc}
                        </p>
                        <Divider></Divider>
                        <Form>
                            <Form.Group>
                                <Form.Input placeholder="First Name">
                                </Form.Input>
                                <Form.Input placeholder="MI">

                                </Form.Input>
                                <Form.Input placeholder="Last Name">
                                </Form.Input>
                            </Form.Group>
                            <Form.Group>
                                <Form.Input placeholder="Address 1">
                                </Form.Input>
                                <Form.Input placeholder="Address 2">
                                </Form.Input>
                                <Form.Input placeholder="Zip Code">
                                </Form.Input>

                            </Form.Group>
                            <Form.Group>
                                <Form.Input placeholder="Date of Birth">
                                </Form.Input>
                                <Form.Input placeholder="Social Security #">
                                </Form.Input>
                            </Form.Group>
                            <Form.Input placeholder="Card Number (####-####-####-####)">

                            </Form.Input>
                            <Form.Input placeholder="CVV">

                            </Form.Input>
                            <Form.Input placeholder="Expiration Date">

                            </Form.Input>
                        </Form>
                        <Divider></Divider>
                        <span>
                            <div className='HW4-LowContrast'>Convenience Fee (25%): ${((this.props.price * 1.25) - this.props.price).toFixed(2)}</div>
                            <div className='HW4-LowContrast'>Total: ${(this.props.price * 1.25).toFixed(2)}</div>
                        </span>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            icon='check'
                            color='green'
                            inverted
                            content='Order'
                            onClick={() => { this.setOpen(false, true); this.props.onClose() }}
                        />
                    </Modal.Actions>
                </Modal>

            </>);
    }
}