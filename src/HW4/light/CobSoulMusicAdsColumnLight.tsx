import React, { FC } from 'react';
import { Button, Comment, Form, Header,Image } from 'semantic-ui-react'
import { addSyntheticLeadingComment } from 'typescript';
import '../CobSoulMusic.css';
import CobSoulMusicFavoritesMenuLight from './CobSoulMusicFavoritesMenuLight';
import CobSoulMusicHeaderLight from './CobSoulMusicHeaderLight';
import CobSoulMusicSearchMenuLight from './CobSoulMusicSearchMenuLight';

interface CobSoulMusicAdsColumnLightProps {
    ads:string[]
}

interface CobSoulMusicAdsColumnLightStates {

}
export default class CobSoulMusicAdsColumnLight extends React.Component<CobSoulMusicAdsColumnLightProps, CobSoulMusicAdsColumnLightStates>{

    render(): React.ReactNode {
        return (
            < >
            <div className='HW4-Flex HW4-FlexColumn'>
                {this.props.ads.map((ad)=>{
                   return <>
                   <div className='HW4-MediumSizeAd'>
                    <Image srcSet={ad} fluid>
                    </Image>
                    
                    </div>                    
                    </>
                })}</div>
            </>);
    }
}