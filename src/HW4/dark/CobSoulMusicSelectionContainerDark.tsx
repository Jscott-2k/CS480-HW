import React, { FC, LegacyRef, RefObject } from 'react';
import { Header } from 'semantic-ui-react';

import '../CobSoulMusic.css';
import CobSoulMusicCommentsDark from './CobSoulMusicCommentsDark';
import CobSoulMusicFavoritesMenuDark from './CobSoulMusicFavoritesMenuDark';
import CobSoulMusicHeaderDark from './CobSoulMusicHeaderDark';
import CobSoulMusicItemDark from './CobSoulMusicItemDark';
import CobSoulMusicSearchMenuDark from './CobSoulMusicSearchMenuDark';

import CobSoulMusicItemNativeAdDark from './CobSoulMusicItemNativeAdDark';

interface CobSoulMusicSelectionContainerDarkProps {
    onMusicPlay: () => void
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

interface CobSoulMusicSelectionContainerDarkStates {
    pauseAllOthers: boolean
    lastSongPlayed:string
}
export default class CobSoulMusicSelectionContainerDark extends React.Component<CobSoulMusicSelectionContainerDarkProps,
    CobSoulMusicSelectionContainerDarkStates>{

    private myref: RefObject<CobSoulMusicItemDark> | undefined;

    constructor(props: CobSoulMusicSelectionContainerDarkProps) {
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

    playMusic() {
        this.props.onMusicPlay();
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

                    <CobSoulMusicItemDark
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
                    </CobSoulMusicItemDark>
                </>
            }, {
                "plays":4200,
                "name": "ad",
                "genre": "Afterlife",
                "artist": "Jeremy Soule",
                "content": <>
                    <CobSoulMusicItemNativeAdDark src="shoe6.jpg" name="Cob's Shrek Shoes" description='Best for swamps!' adOwner='Cob'></CobSoulMusicItemNativeAdDark>
                </>
            },{
                "plays":6006,
                "name": "Tavern Theme II",
                "genre": "Afterlife",
                "artist": "Jeremy Soule",
                "content": <>

                    <CobSoulMusicItemDark onAutoPlay={this.props.onAutoPlay} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        soundClouudSrc="TavernTheme2.mp3" genre="Afterlife"
                        onMusicPlay={this.playMusic} plays={6006} favs={46}
                        description="Enjoy some mead after a long day of murdering tiny dragons."
                        name="Tavern Theme II" artist='Jeremy Soule' stopMusic={this.state.pauseAllOthers}  ></CobSoulMusicItemDark>
                </>
            }, {
                "plays":999999,
                "name": "Sovngarde",
                "genre": "Afterlife",
                "artist": "Jeremy Soule",
                "content": <>

                    <CobSoulMusicItemDark  onAutoPlay={this.props.onAutoPlay} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="Is this what heaven sounds like? Fight a world-eating dragon with your voice!"
                        soundClouudSrc="Sovngarde.mp3"
                        onMusicPlay={this.playMusic}
                        name="Sovngarde" artist='Jeremy Soule' genre="Afterlife"
                        plays={999999} favs={3192}
                        ></CobSoulMusicItemDark>
                </>

            }, {
                "plays":38402,
                "name": "Ain't No Mountain High Enough",
                "genre": "1960s",
                "artist": "Marvin Gaye",
                "content": <>

                    <CobSoulMusicItemDark onAutoPlay={this.props.onAutoPlay} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="Is this what heaven sounds like? Fight a world-eating dragon with your voice!"
                        soundClouudSrc="AintNoMountainHighEnough.mp3"
                        onMusicPlay={this.playMusic} plays={38402} favs={439}
                        name="Ain't No Mountain High Enough" artist='Marvin Gaye' genre="1960s"></CobSoulMusicItemDark>
                </>
            },{
                "plays":8401,
                "name": "q_ad",
                "genre": "1960s",
                "artist": "Sonny & Cher",
                "content": <>
                    <CobSoulMusicItemNativeAdDark src="cereal.png" name="Cereal Flakes" description='Asbestos Free' adOwner='Cereal Flakes'></CobSoulMusicItemNativeAdDark>
                </>
            },  {
                "plays":62232,
                "name": "I Got You Babe",
                "genre": "1960s",
                "artist": "Sonny & Cher",
                "content": <>

                    <CobSoulMusicItemDark onAutoPlay={this.props.onAutoPlay} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="Is this what heaven sounds like? Fight a world-eating dragon with your voice!"
                        soundClouudSrc="IGotYouBabe.mp3"
                        onMusicPlay={this.playMusic}
                        name="I Got You Babe" artist='Sonny & Cher' genre="1960s"
                        plays={62232} favs={931}
                        ></CobSoulMusicItemDark>
                </>
            }, {
                "plays":11118,
                "name": "I Heard It Through The Grapevine",
                "genre": "1960s",
                "artist": "Gladys Knight & The Pips",
                "content": <>

                    <CobSoulMusicItemDark onAutoPlay={this.props.onAutoPlay} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="Is this what heaven sounds like? Fight a world-eating dragon with your voice!"
                        soundClouudSrc="Grapevine.mp3"
                        onMusicPlay={this.playMusic}
                        name="I Heard It Through The Grapevine" artist='Gladys Knight & The Pips'
                        favs={154} plays={11118}
                        genre="1960s"></CobSoulMusicItemDark>
                </>
            }, {
                "plays":123456,
                "name": "Donut Boy",
                "genre": "Modern",
                "artist": "Hugh Neutron",
                "content": <>

                    <CobSoulMusicItemDark onAutoPlay={this.props.onAutoPlay} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="Is this what heaven sounds like? Fight a world-eating dragon with your voice!"
                        soundClouudSrc="DonutBoy.mp3"
                        onMusicPlay={this.playMusic}
                        name="Donut Boy" artist='Hugh Neutron' genre="Modern" plays={123456} favs={989}></CobSoulMusicItemDark>
                </>
            }, {
                "plays":3420,
                "name": "Solitude In E Minor",
                "genre": "Modern",
                "artist": "Squidward Tentacles",
                "content": <>

                    <CobSoulMusicItemDark onAutoPlay={this.props.onAutoPlay} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="Is this what heaven sounds like? Fight a world-eating dragon with your voice!"
                        soundClouudSrc="SolitudeInEMinor.mp3"
                        onMusicPlay={this.playMusic}
                        name="Solitude In E Minor" artist='Squidward Tentacles' genre="Modern"
                        plays={3420} favs={67}
                        ></CobSoulMusicItemDark>
                </>
            },{
                "plays":5555,
                "name": "w_ad",
                "genre": "Modern",
                "artist": "Denzel Crocker",
                "content": <>
                    <CobSoulMusicItemNativeAdDark src="breaks.jfif" name="Jim’s Brake Pads" description='They Work Every Time, 50% Of The Time' adOwner='Jim'></CobSoulMusicItemNativeAdDark>
                </>
            },   {
                "plays":1999,
                "name": "Super F",
                "genre": "Modern",
                "artist": "Denzel Crocker",
                "content": <>

                    <CobSoulMusicItemDark onAutoPlay={this.props.onAutoPlay}  autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="Is this what heaven sounds like? Fight a world-eating dragon with your voice!"
                        soundClouudSrc="SuperF.mp3"
                        onMusicPlay={this.playMusic}
                        name="Super F" artist='Denzel Crocker' genre="Modern"
                        plays={1999} favs={289}
                        ></CobSoulMusicItemDark>
                </>
            }, {
                "plays":2237,
                "name": "Minecraft SFX Beat",
                "genre": "Monke",
                "artist": "Minkks",
                "content": <>

                    <CobSoulMusicItemDark onAutoPlay={this.props.onAutoPlay} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="Is this what heaven sounds like? Fight a world-eating dragon with your voice!"
                        soundClouudSrc="MinecraftSFXBeat.mp3"
                        onMusicPlay={this.playMusic}
                        name="Minecraft SFX Beat" artist='Minkks' genre="Monke"  plays={2237} favs={124}></CobSoulMusicItemDark>
                </>
            }, {
                "plays":45987,
                "name": "Sweden",
                "genre": "Monke",
                "artist": "C418",
                "content": <>

                    <CobSoulMusicItemDark onAutoPlay={this.props.onAutoPlay} autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled}  stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="Is this what heaven sounds like? Fight a world-eating dragon with your voice!"
                        soundClouudSrc="Sweden.mp3"
                        onMusicPlay={this.playMusic}
                        name="Sweden" artist='C418' genre="Monke"
                        plays={45987} favs={264}
                        ></CobSoulMusicItemDark>
                </>
            }, {
                "plays":20312,
                "name": "BTD 5 Jazz Theme",
                "genre": "Monke",
                "artist": "Ninja Kiwi",
                "content": <>

                    <CobSoulMusicItemDark onAutoPlay={this.props.onAutoPlay}  autoPlays={this.props.autoPlays} autoPlayEnabled={this.props.autoPlayEnabled} stopMusic={this.state.pauseAllOthers} signedIn={this.props.signedIn} onReallyPlay={this.reallyPlayMusic} onAddToFavorite={this.props.onAddToFavorite} onRemoveFromFavorite={this.props.onRemoveFromFavorite} onMusicStop={this.stopMusic}
                        favorites={this.props.favorites} currentSongPlaying={this.state.lastSongPlayed}
                        description="Is this what heaven sounds like? Fight a world-eating dragon with your voice!"
                        soundClouudSrc="JazzBTD5.mp3"
                        onMusicPlay={this.playMusic}
                        name="BTD 5 Jazz Theme" artist='Ninja Kiwi' genre="Monke" 
                        plays={20312} favs={164}
                        ></CobSoulMusicItemDark>
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