import React, { FC } from 'react';
import { Button, Header, Icon, Statistic } from 'semantic-ui-react';
import { textChangeRangeIsUnchanged } from 'typescript';

import '../CobSoulMusic.css';
import CobSoulMusicCommentsDark from './CobSoulMusicCommentsDark';
import CobSoulMusicFavoritesMenuDark from './CobSoulMusicFavoritesMenuDark';
import CobSoulMusicHeaderDark from './CobSoulMusicHeaderDark';
import CobSoulMusicSearchMenuDark from './CobSoulMusicSearchMenuDark';

interface CobSoulMusicItemDarkProps {
    name: string,
    artist: string
    soundClouudSrc: string
    onMusicPlay: () => void
    signedIn: boolean
    description: string
    onReallyPlay: (name: string, songDescription: string) => void
    onMusicStop: (swapedSongs:boolean) => void
    onAddToFavorite: (name: string) => void
    onRemoveFromFavorite: (name: string) => void
    favorites: string[]
    stopMusic:boolean
    genre:string
    currentSongPlaying:string,
    autoPlays:number,
    autoPlayEnabled:boolean,
    onAutoPlay:( songName: string, songDescription: string,autoPlays:number)=>void,
    plays:number,
    favs:number
}

interface CobSoulMusicItemDarkStates {
    playing: boolean
}
export default class CobSoulMusicItemDark extends React.Component<CobSoulMusicItemDarkProps, CobSoulMusicItemDarkStates>{

    constructor(props: CobSoulMusicItemDarkProps) {
        super(props);
        this.readyPlay = this.readyPlay.bind(this);
        this.stopPlay = this.stopPlay.bind(this);
        this.state = {
            playing: false
        }

    }   

    componentDidUpdate(){
        if(this.state.playing && this.props.stopMusic &&  this.props.currentSongPlaying !== this.props.name){
            this.setState({ playing: false });
            this.props.onMusicStop(false);
        }
        if(this.state.playing && this.props.currentSongPlaying !== this.props.name){
            this.setState({ playing: false });
            this.props.onMusicStop(true);
        }
    }

    readyPlay() {
        this.props.onMusicPlay();
        console.log("Ready Play!");
    }

    stopPlay(){
        if (this.state.playing) { this.props.onMusicStop(false); }
        else{this.props.onReallyPlay(this.props.name, this.props.description);};
        
        this.setState({ playing: !this.state.playing })
    }

    render(): React.ReactNode {
        let inFavs = this.props.favorites.includes(this.props.name);
        return (
            <>
                <div className={`HW4-MusicItemContainerDark HW4-Margin1 ${this.state.playing ? "HW4-MusicItemContainerDark-Playing" : ""}`}>
                    <Header as='h3' dividing>
                        <div className='HW4-Padding-Top-1'>{this.props.name}</div>
                    </Header>
                    <div className='HW4-Bolder HW4-Margin1'>By {this.props.artist}</div>
                    {!this.props.signedIn && <>
                        <Button color='green' inverted size='large' onClick={this.readyPlay}>
                            Play Now!
                        </Button></>
                    }
                    {this.props.signedIn && <>
                        <Button color='green' inverted size='large' onClick={this.stopPlay}
                        >
                            {!this.state.playing && <>Play Now</>}{this.state.playing && <>Stop Playing</>}
                        </Button></>
                    }


                    {/* {!this.props.signedIn && <>
                        <div className='HW4-MusicItemIFrameBlockerContainer HW4-Hidden'>
                            <div className='HW4-MusicItemIFrameBlocker' onClick={this.readyPlay}>
                            </div>
                            <iframe width="55%" height="100" scrolling="no" 
                                frameBorder="no" src={this.props.soundClouudSrc}>
                            </iframe>
                        </div> </>
                    } */}
                    {this.props.signedIn && this.state.playing && <>
                        {/* <div className=''>
                        <iframe width="55%" height="100" scrolling="no"
                            frameBorder="no" src={this.props.soundClouudSrc}
                            > 
                        </iframe>
                        </div> </> */
                            <audio autoPlay  controlsList="nodownload" onEnded={()=>{
                                console.log("Ended! - auto:" + this.props.autoPlayEnabled);

                                if(!this.props.autoPlayEnabled || this.props.autoPlays <= 0){
                                    this.stopPlay();
                                }else{
                                    this.props.onAutoPlay(this.props.name, this.props.description, this.props.autoPlays - 1)
                                }
                                
                            }} onPause={(e)=>{
                                    e.preventDefault();
                                    e.currentTarget.play();
                            }} className='HW4-MarginTopBottom1' onReset={()=>{console.log("Reset")}}>
                                <source src={this.props.soundClouudSrc} type="audio/mpeg" onSuspend={()=>{
                                    console.log("Suspended");
                                }}></source>
                            </audio>
                        }</>
                    }
                    <div className=' HW4-Flex HW4-FlexColumn HW4-JustifyContentCenter HW4-AlignItemsCenter HW4-Margin1'>
                        <Statistic.Group size='tiny'>
                            <Statistic size='tiny'>
                                <Statistic.Value>{this.props.favs.toLocaleString(undefined)}</Statistic.Value>
                                <Statistic.Label>Faves</Statistic.Label>
                            </Statistic>
                            <Statistic size='tiny'>
                                <Statistic.Value>{this.props.plays.toLocaleString(undefined)}</Statistic.Value>
                                <Statistic.Label>Plays</Statistic.Label>
                            </Statistic>
                        </Statistic.Group>
                        <div className='HW4-Margin1'>
                            {!inFavs && <><Button color='yellow' size="small" icon onClick={() => { this.props.onAddToFavorite(this.props.name) }}>Favorite <Icon name='star' /> </Button></>}
                            {inFavs && <><Button color='grey' size="small" icon onClick={() => { this.props.onRemoveFromFavorite(this.props.name) }}>Unfavorite <Icon name='minus' /> </Button></>}

                        </div>
                    </div>
                </div>
            </>);
    }
}