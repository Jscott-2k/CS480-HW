import React, { FC } from 'react';
import { Dropdown } from 'semantic-ui-react';
import MusicSearchOptions from './CobSoulMusicOptions.json';
import '../CobSoulMusic.css';

interface CobSoulMusicFavoritesMenuDarkProps {
    favorites:string[],
    onUpdate:(selectedFavorite:string|undefined)=>void
}

export default function CobSoulMusicFavoritesMenuLight(props: CobSoulMusicFavoritesMenuDarkProps) {

    let favoriteList = props.favorites.map((v)=>
        {
            return {
                "key":v,"value":v, "text":v
            }
        }
    )
        if(favoriteList.length===0){
            favoriteList.push({
                "key":"You Don't Have Any","value":"You Don't Have Any", "text":"You have 0 Faves :("
            });
        }

    console.log(favoriteList);
    return (
        <>
            <div className='HW4-SearchMenuContainer HW4-Flex HW4-FlexRow HW4-JustifyContentCenter HW4-AlignItemsCenter HW4-FavoritesBar' >
                        <Dropdown search closeOnEscape
                            selection
                                options={favoriteList}
                            text='My Favorites'
                            onClose={(e,d)=>{
                                console.log("Closed on " + d.selection);
                            }}
                            onChange={(e,d)=>{
                                props.onUpdate(d.value  as string);
                            }}
                        />
            </div>
        </>);
};