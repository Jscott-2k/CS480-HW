import React, { FC } from 'react';
import { Button, Comment, Form, Header,Image } from 'semantic-ui-react'
import { addSyntheticLeadingComment } from 'typescript';
import '../CobSoulMusic.css';
import CobSoulMusicFavoritesMenuDark from './CobSoulMusicFavoritesMenuDark';
import CobSoulMusicHeaderDark from './CobSoulMusicHeaderDark';
import CobSoulMusicSearchMenuDark from './CobSoulMusicSearchMenuDark';

interface CobSoulMusicBannerAdDarkProps {
    src:string
    link:string
}

interface CobSoulMusicBannerAdDarkState {

}
export default class CobSoulMusicAdsColumnDark extends React.Component<CobSoulMusicBannerAdDarkProps, CobSoulMusicBannerAdDarkState>{

    constructor(props:CobSoulMusicBannerAdDarkProps){
        super(props)
    }

    render(): React.ReactNode {
        return (
            < >
            <div className='HW4-Flex HW4-FlexColumn HW4-BannerAd'>
                <a href={this.props.link} target="_blank">
                    <Image srcSet={this.props.src} fluid>
                    </Image></a>
                </div>
            </>);
    }
}