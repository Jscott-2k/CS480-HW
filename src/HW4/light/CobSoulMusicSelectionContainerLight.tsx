import React, { FC, LegacyRef, RefObject } from 'react';
import { Header } from 'semantic-ui-react';

import '../CobSoulMusic.css';
import CobSoulMusicCommentsDark from './CobSoulMusicCommentsLight';
import CobSoulMusicFavoritesMenuLight from './CobSoulMusicFavoritesMenuLight';
import CobSoulMusicHeaderLight from './CobSoulMusicHeaderLight';
import CobSoulMusicItemLight from './CobSoulMusicItemLight';
import CobSoulMusicSearchMenuLight from './CobSoulMusicSearchMenuLight';

import CobSoulMusicItemNativeAdLight from './CobSoulMusicItemNativeAdLight';

interface CobSoulMusicSelectionContainerLightProps {
    onMusicPlay:  (songName: string, songDescription: string) => void
    onMusicStop: (swapedSongs:boolean) => void
    onReallyPlay: (songName: string, songDescription: string) => void
    signedIn: boolean
    onAddToFavorite: (songName: string) => void
    onRemoveFromFavorite: (songName: string) => void
    favorites: string[]
    filteredGenre: string,
    filteredArtist:string,
    selectedFavorite:string | undefined,
    sortBy:string,
    autoPlays:number,
    autoPlayEnabled:boolean,
    onAutoPlay:(songName: string, songDescription: string, autoPlays:number)=>void;
}

interface CobSoulMusicSelectionContainerLightStates {
    pauseAllOthers: boolean
    lastSongPlayed:string
}
export default class CobSoulMusicSelectionContainerLight extends React.Component<CobSoulMusicSelectionContainerLightProps,
    CobSoulMusicSelectionContainerLightStates>{

    private myref: RefObject<CobSoulMusicItemLight> | undefined;

    constructor(props: CobSoulMusicSelectionContainerLightProps) {
        super(props);
        this.playMusic = this.playMusic.bind(this);
        this.reallyPlayMusic = this.reallyPlayMusic.bind(this);
        this.stopMusic = this.stopMusic.bind(this);
        this.myref = React.createRef();
        this.state = {
            pauseAllOthers: false,
            lastSongPlayed:""
        }
    }

    playMusic( songName: string, songDescription: string) {
        this.props.onMusicPlay(songName, songDescription);
    }
    reallyPlayMusic(songName: string, songDescription: string) {
        this.setState({ pauseAllOthers: false,lastSongPlayed:songName });
        this.props.onReallyPlay(songName, songDescription);
        
    }
    stopMusic(swapedSongs:boolean) {
        this.props.onMusicStop(swapedSongs);
        this.setState({ pauseAllOthers: true });
    }
    render(): React.ReactNode {


        let musicItemsList = [
            {   
                "plays":69000,
                "name": "Secunda",
                "genre": "Afterlife",
                "artist": "Jeremy Soule",
                "content": <>

                    <CobSoulMusicItemLight
                        onAutoPlay={this.props.onAutoPlay}
                        onAddToFavorite={this.props.onAddToFavorite}
                        onRemoveFromFavorite={this.props.onRemoveFromFavorite}
                        favorites={this.props.favorites}
                        onMusicStop={this.stopMusic}
                        onReallyPlay={this.reallyPlayMusic}
                        description="Calm winter vibes..."
                        signedIn={this.props.signedIn} plays={69000} favs={420}
                        name="Secunda" artist='Jeremy Soule' onMusicPlay={this.playMusic} genre="Afterlife" currentSongPlaying={this.state.lastSongPlayed}
                        soundClouudSrc="Secunda.mp3" stopMusic={this.state.pauseAllOthers} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled}>
                    </CobSoulMusicItemLight>
                </>
            }, {
                "plays":4200,
                "name": "ad",
                "genre": "Afterlife",
                "artist": "Jeremy Soule",
                "content": <>
                    <CobSoulMusicItemNativeAdLight src="shoe6.jpg" name="Cob's Shrek Shoes" description='Best for swamps!' adOwner='Cob'></CobSoulMusicItemNativeAdLight>
                </>
            },{
                "plays":6006,
                "name": "Tavern Theme II",
                "genre": "Afterlife",
                "artist": "Jeremy Soule",
                "content": <>

                    <CobSoulMusicItemLight onAutoPlay={this.props.onAutoPlay} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        soundClouudSrc="TavernTheme2.mp3" genre="Afterlife"
                        onMusicPlay={this.playMusic} plays={6006} favs={46}
                        description="Enjoy some mead after a long day of murdering tiny dragons."
                        name="Tavern Theme II" artist='Jeremy Soule' stopMusic={this.state.pauseAllOthers}  ></CobSoulMusicItemLight>
                </>
            }, {
                "plays":999999,
                "name": "Sovngarde",
                "genre": "Afterlife",
                "artist": "Jeremy Soule",
                "content": <>

                    <CobSoulMusicItemLight  onAutoPlay={this.props.onAutoPlay} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="Is this what heaven sounds like? Fight a world-eating dragon with your voice!"
                        soundClouudSrc="Sovngarde.mp3"
                        onMusicPlay={this.playMusic}
                        name="Sovngarde" artist='Jeremy Soule' genre="Afterlife"
                        plays={999999} favs={3192}
                        ></CobSoulMusicItemLight>
                </>

            }, {
                "plays":38402,
                "name": "Ain't No Mountain High Enough",
                "genre": "1960s",
                "artist": "Marvin Gaye",
                "content": <>

                    <CobSoulMusicItemLight onAutoPlay={this.props.onAutoPlay} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="We do some climbing!"
                        soundClouudSrc="AintNoMountainHighEnough.mp3"
                        onMusicPlay={this.playMusic} plays={38402} favs={439}
                        name="Ain't No Mountain High Enough" artist='Marvin Gaye' genre="1960s"></CobSoulMusicItemLight>
                </>
            },{
                "plays":8401,
                "name": "q_ad",
                "genre": "1960s",
                "artist": "Sonny & Cher",
                "content": <>
                    <CobSoulMusicItemNativeAdLight src="cereal.png" name="Cereal Flakes" description='Asbestos Free' adOwner='Cereal Flakes'></CobSoulMusicItemNativeAdLight>
                </>
            },  {
                "plays":62232,
                "name": "I Got You Babe",
                "genre": "1960s",
                "artist": "Sonny & Cher",
                "content": <>

                    <CobSoulMusicItemLight onAutoPlay={this.props.onAutoPlay} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="Sonny & Cher were an American pop and entertainment duo in the 1960s and 1970s, made up of husband and wife Sonny Bono and Cher. The couple started their career in the mid-1960s as R&B backing singers for record producer Phil Spector."
                        soundClouudSrc="IGotYouBabe.mp3"
                        onMusicPlay={this.playMusic}
                        name="I Got You Babe" artist='Sonny & Cher' genre="1960s"
                        plays={62232} favs={931}
                        ></CobSoulMusicItemLight>
                </>
            }, {
                "plays":11118,
                "name": "I Heard It Through The Grapevine",
                "genre": "1960s",
                "artist": "Gladys Knight & The Pips",
                "content": <>

                    <CobSoulMusicItemLight onAutoPlay={this.props.onAutoPlay} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="The classic about a man who finds out his woman is cheating on him was written by Norman Whitfield and Barrett Strong."
                        soundClouudSrc="Grapevine.mp3"
                        onMusicPlay={this.playMusic}
                        name="I Heard It Through The Grapevine" artist='Gladys Knight & The Pips'
                        favs={154} plays={11118}
                        genre="1960s"></CobSoulMusicItemLight>
                </>
            }, {
                "plays":123456,
                "name": "Donut Boy",
                "genre": "Modern",
                "artist": "Hugh Neutron",
                "content": <>

                    <CobSoulMusicItemLight onAutoPlay={this.props.onAutoPlay} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="Zoomer Humor"
                        soundClouudSrc="DonutBoy.mp3"
                        onMusicPlay={this.playMusic}
                        name="Donut Boy" artist='Hugh Neutron' genre="Modern" plays={123456} favs={989}></CobSoulMusicItemLight>
                </>
            }, {
                "plays":3420,
                "name": "Solitude In E Minor",
                "genre": "Modern",
                "artist": "Squidward Tentacles",
                "content": <>

                    <CobSoulMusicItemLight onAutoPlay={this.props.onAutoPlay} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="Squidward finally gets his chance!"
                        soundClouudSrc="SolitudeInEMinor.mp3"
                        onMusicPlay={this.playMusic}
                        name="Solitude In E Minor" artist='Squidward Tentacles' genre="Modern"
                        plays={3420} favs={67}
                        ></CobSoulMusicItemLight>
                </>
            },{
                "plays":5555,
                "name": "w_ad",
                "genre": "Modern",
                "artist": "Denzel Crocker",
                "content": <>
                    <CobSoulMusicItemNativeAdLight src="breaks.jfif" name="Jim’s Brake Pads" description="Jim’s Brake Pads, “They Work Every Time, 50% Of The Time”" adOwner='Jim'></CobSoulMusicItemNativeAdLight>
                </>
            },   {
                "plays":1999,
                "name": "Super F",
                "genre": "Modern",
                "artist": "Denzel Crocker",
                "content": <>

                    <CobSoulMusicItemLight onAutoPlay={this.props.onAutoPlay}  autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="FAIRYS!"
                        soundClouudSrc="SuperF.mp3"
                        onMusicPlay={this.playMusic}
                        name="Super F" artist='Denzel Crocker' genre="Modern"
                        plays={1999} favs={289}
                        ></CobSoulMusicItemLight>
                </>
            }, {
                "plays":2237,
                "name": "Minecraft SFX Beat",
                "genre": "Monke",
                "artist": "Minkks",
                "content": <>

                    <CobSoulMusicItemLight onAutoPlay={this.props.onAutoPlay} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="Herobrine liked this."
                        soundClouudSrc="MinecraftSFXBeat.mp3"
                        onMusicPlay={this.playMusic}
                        name="Minecraft SFX Beat" artist='Minkks' genre="Monke"  plays={2237} favs={124}></CobSoulMusicItemLight>
                </>
            }, {
                "plays":45987,
                "name": "Sweden",
                "genre": "Monke",
                "artist": "C418",
                "content": <>

                    <CobSoulMusicItemLight onAutoPlay={this.props.onAutoPlay} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled}  stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="Nostalgic overload..."
                        soundClouudSrc="Sweden.mp3"
                        onMusicPlay={this.playMusic}
                        name="Sweden" artist='C418' genre="Monke"
                        plays={45987} favs={264}
                        ></CobSoulMusicItemLight>
                </>
            }, {
                "plays":20312,
                "name": "BTD 5 Jazz Theme",
                "genre": "Monke",
                "artist": "Ninja Kiwi",
                "content": <>

                    <CobSoulMusicItemLight onAutoPlay={this.props.onAutoPlay}  autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="When monkey and balloon took over the world."
                        soundClouudSrc="JazzBTD5.mp3"
                        onMusicPlay={this.playMusic}
                        name="BTD 5 Jazz Theme" artist='Ninja Kiwi' genre="Monke" 
                        plays={20312} favs={164}
                        ></CobSoulMusicItemLight>
                </>
            }

        ];
        let tmpML = musicItemsList;

        if(!this.props.selectedFavorite){

        musicItemsList = musicItemsList.filter((v)=>{
            return (this.props.filteredGenre==="All" ||  v.genre===this.props.filteredGenre) &&
            (this.props.filteredArtist==="All" || v.artist === this.props.filteredArtist);
        });

        console.log("Sorting by " + this.props.sortBy);
        musicItemsList = musicItemsList.sort((a,b)=>{
            switch(this.props.sortBy){
                case "MostPlays":
                    return a.plays > b.plays ? -1 : 1;
                case "ArtistName":
                    return a.artist.localeCompare(b.artist);
                default:
                    return a.name.localeCompare(b.name);
            }
        });

    }else{


        musicItemsList = musicItemsList.filter((v)=>{
          return  v.name === this.props.selectedFavorite
        });
        if(musicItemsList.length===0){
            musicItemsList = tmpML;
        }
    }

        return (
            <>
                <div className='HW4-CobSoulMusicSelectionContainer HW4-Flex HW4-JustifyContentCenter'>
                    <div className='HW4-CobSoulMusicSelectionContainer HW4-Flex HW4-JustifyContentCenter'>
                        {musicItemsList.map((v)=>{
                            return <>
                                {v.content}
                            </>
                        })}
                    </div>
                </div>
            </>);
    }
}