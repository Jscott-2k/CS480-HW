import React, { FC } from 'react';
import { Dropdown } from 'semantic-ui-react';
import MusicSearchOptions from './CobSoulMusicOptions.json';
import '../CobSoulMusic.css';
import { CobSoulMusicFilters } from './CobSoulMusicLight';
import { ModifierFlags } from 'typescript';

interface CobSoulMusicSearchMenuLightProps {
    lastFiler:CobSoulMusicFilters,
    onUpdate:(filter:CobSoulMusicFilters)=>void
    darkMode:boolean
}

export default function CobSoulMusicSearchMenuLight(props: CobSoulMusicSearchMenuLightProps) {
    return (
        <>
            <div className={`HW4-SearchMenuContainer HW4-Flex HW4-FlexRow HW4-JustifyContentCenter HW4-AlignItemsCenter ${props.darkMode ? "HW4-DarkModeWhite":" "}`}>
                <div>
                    <span>Decade: &nbsp;
                        <Dropdown 
                            inline
                            options={MusicSearchOptions["Decades"]}
                            defaultValue={MusicSearchOptions["Decades"][0].value}
                            onChange={(e,d)=>{

                                let nf = props.lastFiler;
                                nf.selectedFavorite = undefined;
                                nf.genre = d.value as string;
                                props.onUpdate(nf);
                            
                            }}
                        />
                    </span>
                </div>

                <div>
                    <span>Artist: &nbsp;
                        <Dropdown 
                            inline
                            options={MusicSearchOptions["Artist"]}
                            defaultValue={MusicSearchOptions["Artist"][0].value}
                            onChange={(e,d)=>{

                                let nf = props.lastFiler;
                                nf.selectedFavorite = undefined;
                                nf.artist = d.value as string;
                                props.onUpdate(nf);
                            
                            }}

                        />
                    </span>
 
                </div>

                <div>
                    <span>Sort By: &nbsp;
                        <Dropdown 
                            inline
                            options={MusicSearchOptions["SortBy"]}
                            defaultValue={MusicSearchOptions["SortBy"][0].value}
                            onChange={(e,d)=>{

                                let nf = props.lastFiler;
                                nf.selectedFavorite = undefined;
                                nf.sortByKey = d.value as string;
                                props.onUpdate(nf);
                            
                            }}
                        />
                    </span>
                </div>
            </div>
        </>);
};