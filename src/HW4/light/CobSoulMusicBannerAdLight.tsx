import React, { FC } from 'react';
import { Button, Comment, Form, Header,Image } from 'semantic-ui-react'
import { addSyntheticLeadingComment } from 'typescript';
import '../CobSoulMusic.css';
import CobSoulMusicFavoritesMenuLight from './CobSoulMusicFavoritesMenuLight';
import CobSoulMusicHeaderLight from './CobSoulMusicHeaderLight';
import CobSoulMusicSearchMenuLight from './CobSoulMusicSearchMenuLight';

interface CobSoulMusicBannerAdLightProps {
    src:string
    link:string
}

interface CobSoulMusicBannerAdLightState {

}
export default class CobSoulMusicBannerAdLight extends React.Component<CobSoulMusicBannerAdLightProps, CobSoulMusicBannerAdLightState>{

    constructor(props:CobSoulMusicBannerAdLightProps){
        super(props)
    }

    render(): React.ReactNode {
        return (
            < >
            <div className='HW4-Flex HW4-FlexColumn HW4-BannerAdLight'>
                <div  className='HW4-Flex HW4-JustifyContentCenter'>
                <a href={this.props.link} target="_blank">
                    <Image srcSet={this.props.src} fluid>
                    </Image></a>
                </div>
                </div>
            </>);
    }
}