import React, { FC } from 'react';
import { Button, Dropdown, Icon } from 'semantic-ui-react';
import MusicSearchOptions from './CobSoulMusicOptions.json';
import '../CobSoulMusic.css';

interface CobSoulMusicNowPlayingDarkProps {
    songName:string
    description:string | null
    inFavs:boolean
    onAddToFavorite:(name:string)=>void
    onRemoveFromFavorite:(name:string)=>void
}

export default function CobSoulMusicNowPlayingDark(props: CobSoulMusicNowPlayingDarkProps) {

    return (
        <>
            <div className='HW4-NowPlayingDarkContainer HW4-Flex HW4-FlexRow HW4-JustifyContentCenter HW4-AlignItemsCenter HW4-Fixed' >
                <div className='HW4-NowPlayingName HW4-Margin1' >
                    Now Playing: <span>{props.songName} </span>... 
                </div>
                <span></span>
                <div className='HW4-NowPlayingDescription HW4-Margin1'>
                    Description: {props.description}
                </div>
                <img srcSet="peppedance.gif" className='HW4-PeppeDance'/>
                <div className='HW4-Margin1'>
                {!props.inFavs && <><Button color='yellow' size="small" icon onClick={()=>{props.onAddToFavorite(props.songName)}}>Favorite <Icon name='star' /> </Button></>}
                            {props.inFavs && <><Button color='grey' size="small" icon  onClick={()=>{props.onRemoveFromFavorite(props.songName)}}>Unfavorite <Icon name='minus' /> </Button></>}
                </div>
            </div>
        </>);
};