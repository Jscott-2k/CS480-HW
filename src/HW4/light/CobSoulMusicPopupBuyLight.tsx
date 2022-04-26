import React, { FC } from 'react';

import '../CobSoulMusic.css';
import CobSoulMusicCommentsDark from './CobSoulMusicCommentsLight';
import CobSoulMusicSelectionContainerLight from './CobSoulMusicSelectionContainerLight';
import CobSoulMusicFavoritesMenuLight from './CobSoulMusicFavoritesMenuLight';
import CobSoulMusicHeaderLight from './CobSoulMusicHeaderLight';
import CobSoulMusicSearchMenuLight from './CobSoulMusicSearchMenuLight';


import { Button, Checkbox, Divider, Embed, Form, Icon, Input, Modal } from 'semantic-ui-react';
import CobSoulMusicAdProgressTimerLight from './CobSoulMusicAdProgressTimerLight';

interface CobSoulMusicPopupBuyLightProps {
    openUp: boolean
    onClose: () => void
    onCancel: () => void
    price: number
    desc: string
    head: string
}

interface CobSoulMusicPopupBuyLightStates {
    open: boolean
    disabledClose: boolean
}
export default class CobSoulMusicPopupBuyLight extends React.Component<CobSoulMusicPopupBuyLightProps, CobSoulMusicPopupBuyLightStates>{
    constructor(props: CobSoulMusicPopupBuyLightProps) {
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
                            <div className='HW4-Boler HW4-Larger'>Total: ${(this.props.price).toFixed(2)}</div>
                        </span>
                    </Modal.Content>
                    <Modal.Actions>
                    <Button
                            icon='x'
                            color='blue'
                            
                            content='Cancel'
                            onClick={() => { this.setOpen(false, true); this.props.onCancel() }}
                        />

                        <Button
                            icon='check'
                            color='teal'
                            
                            content='Order'
                            onClick={() => { this.setOpen(false, true); this.props.onClose() }}
                        />
                    </Modal.Actions>
                </Modal>

            </>);
    }
}