import React, { FC } from 'react';

import '../CobSoulMusic.css';
import CobSoulMusicCommentsDark from './CobSoulMusicCommentsLight';
import CobSoulMusicSelectionContainerLight from './CobSoulMusicSelectionContainerLight';
import CobSoulMusicFavoritesMenuLight from './CobSoulMusicFavoritesMenuLight';
import CobSoulMusicHeaderLight from './CobSoulMusicHeaderLight';
import CobSoulMusicSearchMenuLight from './CobSoulMusicSearchMenuLight';


import { Button, Checkbox, Embed, Form, Icon, Input, Modal } from 'semantic-ui-react';
import CobSoulMusicAdProgressTimerLight from './CobSoulMusicAdProgressTimerLight';

interface CobSoulMusicPopupAdLightProps {
    openUp: boolean
    onClose:(adSkips:number)=>void
    srcId:string
    desc:string
    head:string
    length:number
    adSkips:number
}

interface CobSoulMusicPopupAdLightStates {
    open: boolean
    disabledClose:boolean
}
export default class CobSoulMusicPopupAdLight extends React.Component<CobSoulMusicPopupAdLightProps, CobSoulMusicPopupAdLightStates>{
    constructor(props: CobSoulMusicPopupAdLightProps) {
        super(props);
        this.setOpen = this.setOpen.bind(this);
        this.state = {
            open: false,
            disabledClose:true
        }
    }

    componentDidUpdate(){
        if(!this.state.open && this.props.openUp){
            this.setOpen(true, true);
        }
    }

    setOpen(open: boolean, disabled:boolean) {
        this.setState({ open: open,disabledClose:disabled })
    }

    render(): React.ReactNode {
        let adsk = this.props.adSkips;
        return (
            <>


                    <Modal
                        onClose={() => { }}
                        open={this.state.open}
                        size='small'
                    >
                        <Modal.Header>{this.props.head}</Modal.Header>
                        <Modal.Content>
                            <p><i>You will be able to listen right after this ad!</i></p>
                            <p>{this.props.desc}</p>
                            <div>
                                <iframe className='HW4-VideoAdIframe' width="560" height="415" src={`https://www.youtube.com/embed/${this.props.srcId}?controls=0&autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={false}></iframe>
                            </div>
                        </Modal.Content>
                        <Modal.Actions>
                            <CobSoulMusicAdProgressTimerLight initalTime={this.props.length} updateTick={1000} onFinish={() => {
                                this.setState({ disabledClose: false });
                            }} />

                            {
                                this.props.adSkips > 0 && <>
                                
                                <Button
                                icon="cancel"
                                content={`${this.props.adSkips} Skip(s) Available!`}
                                onClick={() => {this.setOpen(false,true); this.props.onClose(this.props.adSkips - 1)}}
                                
                            />
                                </>
                            }

                            <Button
                                icon='check'
                                content='All Done'
                                onClick={() => {this.setOpen(false,true); this.props.onClose(this.props.adSkips)}}
                                disabled={this.state.disabledClose}
                            />
                        </Modal.Actions>
                    </Modal>

            </>);
    }
}