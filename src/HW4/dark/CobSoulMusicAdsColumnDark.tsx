import React, { FC } from 'react';
import { Button, Comment, Form, Header,Image } from 'semantic-ui-react'
import { addSyntheticLeadingComment } from 'typescript';
import '../CobSoulMusic.css';
import CobSoulMusicFavoritesMenuDark from './CobSoulMusicFavoritesMenuDark';
import CobSoulMusicHeaderDark from './CobSoulMusicHeaderDark';
import CobSoulMusicSearchMenuDark from './CobSoulMusicSearchMenuDark';

interface CobSoulMusicAdsColumnDarkProps {
    ads:string[]
}

interface CobSoulMusicAdsColumnStates {

}
export default class CobSoulMusicAdsColumnDark extends React.Component<CobSoulMusicAdsColumnDarkProps, CobSoulMusicAdsColumnStates>{

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